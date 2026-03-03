// Simula o payload que o Digital Manager Guru envia
// Baseado na documentação do Guru para status 'approved'
const payload = {
    event: 'subscription.status_changed',
    status: 'approved',
    transaction_id: 'TRANS_12345_TEST_SIMULATION',
    contact: {
        name: 'Cliente Teste Simulado',
        email: 'claudiojasoares.dev@gmail.com', // Email que DEVE existir no seu Supabase para teste
        phone_number: '5511999999999'
    }
};

async function simulateWebhook() {
    console.log('🚀 Iniciando simulação de Webhook do Guru...');
    console.log('📦 Payload:', JSON.stringify(payload, null, 2));

    try {
        // Tenta conectar na API local (garanta que o servidor esteja rodando!)
        const response = await fetch('http://localhost:3000/api/webhooks/guru', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        console.log(`\n📡 Status Code: ${response.status}`);

        const data = await response.json();
        console.log('📄 Resposta do Servidor:', data);

        if (response.status === 200) {
            console.log('\n✅ SUCESSO! O webhook foi processado corretamente.');
            console.log('👉 Verifique no Supabase se o status mudou para "active".');
            console.log('👉 Verifique no Resend se o e-mail chegou.');
        } else {
            console.log('\n❌ FALHA! O servidor retornou erro.');
        }

    } catch (error) {
        console.error('\n💥 ERRO DE CONEXÃO:', error);
        console.log('⚠️  Certifique-se de que o servidor local está rodando em http://localhost:3000');
        console.log('   Rode: npx vercel dev');
    }
}

simulateWebhook();
