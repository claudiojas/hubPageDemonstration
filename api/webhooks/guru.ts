import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

// Inicializa clientes
const resend = new Resend(process.env.RESEND_API_KEY);
const supabase = createClient(
    process.env.VITE_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY!
);

export default async function handler(
    request: VercelRequest,
    response: VercelResponse
) {
    if (request.method !== 'POST') {
        return response.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const payload = request.body;

        console.log('Webhook Guru received:', payload);

        // Verifica status de aprovação
        // O Guru envia 'status' no payload. Valores comuns: 'approved', 'authorized', 'concluded'
        const status = payload.status;

        if (status !== 'approved') {
            // Se não for aprovado, apenas ignoramos (ou logamos)
            console.log(`Pagamento não aprovado. Status: ${status}`);
            return response.status(200).json({ received: true });
        }

        // Extrai dados do contato
        const email = payload.contact?.email || payload.billing?.email;
        const name = payload.contact?.name || payload.name;

        if (!email) {
            console.error('Email não encontrado no payload');
            return response.status(400).json({ error: 'Email missing from payload' });
        }

        // 1. Atualizar Status no Supabase
        // Primeiro buscamos o profile pelo email
        console.log('Searching for profile with email:', email);
        console.log('Using Service Key?', !!process.env.SUPABASE_SERVICE_ROLE_KEY);

        const { data: profile, error: profileError } = await supabase
            .from('profiles')
            .select('id')
            .eq('email', email)
            .single();

        if (profileError || !profile) {
            console.error('Perfil não encontrado para:', email);
            // Pode ser que o usuário comprou sem passar pelo nosso cadastro inicial?
            // Nesse caso, o ideal seria CRIAR o usuário.
            // Mas por enquanto, vamos assumir que ele passou pelo nosso checkout.
            return response.status(404).json({ error: 'User not found in database' });
        }

        const { error: updateError } = await supabase
            .from('subscriptions')
            .update({
                status: 'active',
                gateway_transaction_id: payload.transaction_id || payload.marketplace_transaction_id
            })
            .eq('profile_id', profile.id);

        if (updateError) {
            console.error('Erro ao atualizar assinatura:', updateError);
            return response.status(500).json({ error: 'Failed to update subscription' });
        }

        // 2. Enviar E-mail de Boas-vindas (Com Link do WhatsApp)
        // Link do grupo fictício por enquanto, ou pegamos do env se tiver
        const whatsappLink = "https://chat.whatsapp.com/GURU_VIP_GROUP";

        await resend.emails.send({
            from: 'KarCash <onboarding@resend.dev>',
            to: [email],
            subject: 'Confirmação de Sistema - KarCash Vendas 🚀',
            html: `
                <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden; background-color: #ffffff;">
                    <!-- Header with Logo/Bar -->
                    <div style="background-color: #000000; padding: 20px; text-align: center; border-bottom: 4px solid #00ff00;">
                        <img src="https://karcash-vip-lp.vercel.app/logo_karcash.webp" alt="KarCash" style="max-width: 180px; height: auto;" />
                    </div>
                    
                    <div style="padding: 40px 30px; line-height: 1.6; color: #333333;">
                        <h2 style="color: #000000; margin-top: 0;">Olá, aqui é a equipe KarCash Vendas.</h2>
                        
                        <div style="background-color: #f9f9f9; border-left: 4px solid #00ff00; padding: 15px; margin: 25px 0;">
                            <p style="margin: 0; font-weight: 500;">Este é um e-mail de teste. Sistema de feedback funcionando corretamente.</p>
                        </div>
                        
                        <p>Agradecemos a sua compra!</p>
                        
                        <div style="text-align: center; margin: 30px 0;">
                            <a href="https://chat.whatsapp.com/GURU_VIP_GROUP" style="background-color: #00ff00; color: #000000; padding: 15px 30px; text-decoration: none; font-weight: bold; border-radius: 50px; display: inline-block;">
                                ACESSAR GRUPO VIP AGORA 📲
                            </a>
                        </div>
                        
                        <p style="margin-top: 30px;">
                            Atenciosamente,<br/>
                            <strong>Equipe KarCash Vendas</strong>
                        </p>
                    </div>
                    
                    <div style="background-color: #f4f4f4; padding: 15px; text-align: center; font-size: 12px; color: #666666;">
                         © ${new Date().getFullYear()} KarCash - Todos os direitos reservados.
                    </div>
                </div>
            `,
        });

        return response.status(200).json({ success: true });

    } catch (error: any) {
        console.error('Webhook Error:', error);
        return response.status(500).json({ error: error.message });
    }
}
