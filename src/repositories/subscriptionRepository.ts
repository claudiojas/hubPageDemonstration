import { supabase } from "@/lib/supabaseClient";

interface CreateSubscriptionParams {
    name: string;
    email: string;
    phone: string;
}

const subscriptionRepository = {
    /**
     * Chama a RPC do Supabase para criar perfil e assinatura.
     * @param params Dados do usuário (nome, email, telefone)
     */
    createSubscription: async ({ name, email, phone }: CreateSubscriptionParams) => {
        const { data, error } = await supabase.rpc('create_profile_and_subscription', {
            user_name: name,
            user_email: email,
            user_phone: phone,
        });

        if (error) {
            throw error;
        }

        return data;
    },

    /**
     * Atualiza o status da assinatura de um usuário pelo e-mail.
     * @param email E-mail do usuário
     * @param status Novo status da assinatura (ex: 'active', 'pending')
     */
    updateStatusByEmail: async (email: string, status: 'active' | 'pending' | 'canceled') => {
        // 1. Busca o profile_id pelo email
        const { data: profile, error: profileError } = await supabase
            .from('profiles')
            .select('id')
            .eq('email', email)
            .single();

        if (profileError || !profile) {
            throw new Error(`Profile not found for email: ${email}`);
        }

        // 2. Atualiza a assinatura vinculada
        const { error: updateError } = await supabase
            .from('subscriptions')
            .update({ status: status })
            .eq('profile_id', profile.id);

        if (updateError) {
            throw updateError;
        }

        return true;
    }
};

export default subscriptionRepository;
