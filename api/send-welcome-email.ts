import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

// Inicializa o cliente Resend
// Nota: A variável de ambiente RESEND_API_KEY deve estar configurada no Vercel (e no .env local)
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
    request: VercelRequest,
    response: VercelResponse
) {
    // Apenas permite método POST
    if (request.method !== 'POST') {
        return response.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { email, name } = request.body;

        // Validação básica
        if (!email || !name) {
            return response.status(400).json({ error: 'Email and name are required' });
        }

        // Envio do e-mail
        const data = await resend.emails.send({
            from: 'KarCash <onboarding@resend.dev>', // Usando domínio de teste do Resend inicialmente, ou domínio configurado
            to: [email],
            subject: 'Bem-vindo ao Grupo VIP KarCash! 🚗💰',
            html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h1>Olá, ${name}!</h1>
          <p>Sua inscrição na lista de espera VIP do KarCash foi confirmada com sucesso.</p>
          <p>Estamos preparando ofertas exclusivas com margens de 20% a 50% abaixo da FIPE.</p>
          <p>Fique atento ao seu e-mail, em breve entraremos em contato com as próximas etapas e acesso ao grupo.</p>
          <br/>
          <p>Atenciosamente,</p>
          <p><strong>Equipe KarCash</strong></p>
        </div>
      `,
        });

        return response.status(200).json({ success: true, data });
    } catch (error) {
        console.error('Error sending email:', error);
        return response.status(500).json({ error: 'Failed to send email' });
    }
}
