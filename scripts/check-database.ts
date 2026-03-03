
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Carrega o .env da raiz do projeto
dotenv.config({ path: join(__dirname, '../.env') });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('Erro: VITE_SUPABASE_URL ou chaves do Supabase não encontradas no .env');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkTables() {
    console.log('--- Verificando Tabelas no Supabase ---\n');

    const tablesToCheck = ['profiles', 'subscriptions', 'seller_leads', 'churn_feedback'];

    for (const table of tablesToCheck) {
        try {
            // Tenta buscar apenas 1 registro para validar se a tabela existe e está acessível
            const { data, error } = await supabase.from(table).select('*').limit(1);

            if (error) {
                console.error(`❌ Tabela [${table}]: Erro ao acessar - ${error.message}`);
            } else {
                console.log(`✅ Tabela [${table}]: Acessível e configurada.`);
            }
        } catch (e: any) {
            console.error(`❌ Tabela [${table}]: Erro inesperado - ${e.message}`);
        }
    }

    console.log('\n--- Teste de RPC (Opcional) ---');
    try {
        const { error: rpcError } = await supabase.rpc('create_profile_and_subscription', {
            user_name: 'Test',
            user_email: 'test@example.com',
            user_phone: '0000000000'
        });
        // Se o erro for de duplicidade ou algo similar, a RPC existe. 
        // Se for "method not found", ela não existe.
        if (rpcError && rpcError.message.includes('not found')) {
            console.log('❌ RPC [create_profile_and_subscription]: Não encontrada.');
        } else {
            console.log('✅ RPC [create_profile_and_subscription]: Existe e está respondendo.');
        }
    } catch (e: any) {
        console.log('ℹ️ RPC [create_profile_and_subscription]: Não foi possível validar (pode exigir parâmetros específicos).');
    }
}

checkTables();
