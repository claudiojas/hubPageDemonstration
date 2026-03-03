/**
 * Módulo centralizado para chamadas de API.
 * Aqui ficam todas as requisições externas para facilitar manutenção e tratamento de erros.
 */

// Interface para os dados do e-mail
export interface WelcomeEmailData {
    name: string;
    email: string;
}

// Interface de resposta da API
export interface ApiResponse<T = any> {
    success: boolean;
    data?: T;
    error?: string;
}

const api = {
    /**
     * Envia o e-mail de boas-vindas chamando a Serverless Function.
     * @param data Objeto com nome e e-mail do usuário
     */
    sendWelcomeEmail: async (data: WelcomeEmailData): Promise<ApiResponse> => {
        try {
            const response = await fetch('/api/send-welcome-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Falha ao enviar e-mail');
            }

            const result = await response.json();
            return { success: true, data: result };
        } catch (error) {
            console.error('Erro no serviço de API (sendWelcomeEmail):', error);
            return {
                success: false,
                error: error instanceof Error ? error.message : 'Erro desconhecido'
            };
        }
    }
};

export default api;
