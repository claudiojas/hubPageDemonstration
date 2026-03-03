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
            subject: 'Pagamento Aprovado! Bem-vindo à Família KarCash 🚀',
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
                    <div style="text-align: center; margin-bottom: 30px;">
                        <h1 style="color: #00ff00;">Pagamento Confirmado! ✅</h1>
                    </div>
                    
                    <p>Olá, <strong>${name}</strong>!</p>
                    
                    <p>Sua assinatura foi ativada com sucesso. Agora você tem acesso oficial aos "Lotes Invisíveis" do mercado automotivo.</p>
                    
                    <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 30px 0; text-align: center;">
                        <p style="margin-bottom: 15px; font-weight: bold;">Clique abaixo para entrar no Grupo VIP Exclusivo:</p>
                        <a href="${whatsappLink}" style="background-color: #00fa9a; color: #000; padding: 15px 30px; text-decoration: none; font-weight: bold; border-radius: 50px; display: inline-block;">
                            ENTRAR NO GRUPO VIP AGORA 📲
                        </a>
                        <p style="font-size: 12px; margin-top: 10px; color: #666;">(Atenção: Não compartilhe este link. O acesso é monitorado.)</p>
                    </div>

                    <p>Se tiver qualquer dúvida, responda este e-mail.</p>
                    
                    <br/>
                    <p>Bons negócios,</p>
                    <p><strong>Claudio & Equipe KarCash</strong></p>
                </div>
            `,
        });

        return response.status(200).json({ success: true });

    } catch (error: any) {
        console.error('Webhook Error:', error);
        return response.status(500).json({ error: error.message });
    }
}
