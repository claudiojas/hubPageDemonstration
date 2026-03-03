# Histórico de Progresso do Projeto KarCash

Este documento serve como uma linha do tempo local e detalhada das alterações significativas feitas no projeto. O objetivo é complementar o histórico do Git com o "porquê" por trás das decisões técnicas e de produto.

---

### **Data:** 28/01/2026
### **Responsável:** Gemi

#### **Módulo Afetado:**
-   `src/pages/Checkout.tsx` (Formulário de Checkout)

#### **Descrição da Alteração:**
Foi realizada uma refatoração completa no formulário de checkout para aumentar a robustez, melhorar a experiência do usuário (UX) e garantir a qualidade dos dados coletados.

#### **Justificativa Técnica e de Produto:**

1.  **Migração para Validação com `zod` e `react-hook-form`**:
    *   **Problema Anterior**: A validação era manual, baseada em `useState`, o que é verboso, propenso a erros e difícil de manter. O estado de validade do formulário (`isValid`) era um cálculo simples que não cobria todos os casos de uso.
    *   **Solução**:
        *   Instalamos `zod`, `react-hook-form` e `@hookform/resolvers`.
        *   Criamos um `formSchema` com `zod` para definir regras de validação claras e tipadas para cada campo (nome, e-mail, telefone, cpf).
        *   Substituímos o gerenciamento de estado manual pelo hook `useForm`, que agora controla o estado, a validação (`mode: 'onChange'`) e o processo de submissão do formulário.
    *   **Benefício**: O código ficou mais limpo, declarativo e seguro. As regras de negócio para os dados estão centralizadas no schema, e o formulário reage em tempo real às entradas do usuário, habilitando o botão de CTA apenas quando tudo está 100% válido.

2.  **Melhoria de UX com `react-input-mask`**:
    *   **Problema Anterior**: A formatação dos campos de telefone e CPF era feita com funções manuais (`formatPhone`, `formatCPF`), o que podia ser confuso para o usuário e menos eficiente.
    *   **Solução**: Instalamos e implementamos `react-input-mask` para aplicar máscaras diretamente nos campos de `telefone` e `cpf`.
    *   **Benefício**: O usuário agora é guiado durante o preenchimento, vendo o formato esperado (ex: `(99) 99999-9999`), o que reduz a fricção e a taxa de erros.

3.  **Aprimoramento do Feedback Visual (Estilo de Foco)**:
    *   **Problema Anterior**: Não havia um feedback claro quando um campo estava ativo (em foco).
    *   **Solução**: Adicionamos classes de utilitário do Tailwind CSS (`focus-visible:ring-2 focus-visible:ring-primary/70`) para criar um "anel" de destaque sutil na cor primária da marca ao redor do campo focado.
    *   **Benefício**: O usuário tem uma indicação visual clara de qual campo está preenchendo, melhorando a acessibilidade e a usabilidade do formulário.

#### **Bibliotecas Adicionadas:**
-   `zod`
-   `react-hook-form`
-   `@hookform/resolvers`
-   `react-input-mask`
-   `@types/react-input-mask` (dev)

---

### **Data:** 28/01/2026
### **Responsável:** Gemi & Cláudio

#### **Módulo Afetado:**
-   `src/pages/Checkout.tsx` (Formulário de Checkout)
-   `src/lib/supabaseClient.ts`
-   Configuração de Banco de Dados e Políticas do Supabase

#### **Descrição da Alteração:**
Integração do formulário de checkout com o backend do Supabase para persistir os dados dos leads. O processo envolveu uma depuração significativa para resolver um erro persistente de política de segurança (RLS).

#### **Justificativa Técnica e de Produto:**

1.  **Remoção do Campo CPF/CNPJ**:
    *   **Problema**: O formulário solicitava um dado sensível (CPF) muito cedo no funil, o que poderia aumentar a fricção e diminuir a taxa de conversão.
    *   **Solução**: Removemos o campo CPF do formulário de checkout (`Checkout.tsx`), do schema de validação (`zod`) e da chamada para o Supabase. A coleta deste dado foi delegada para o gateway de pagamento, que é o ambiente apropriado.
    *   **Benefício**: Formulário mais enxuto e rápido de preencher, aumentando a probabilidade de captura do lead. Redução da responsabilidade sobre dados sensíveis (LGPD).

2.  **Resolução de Erro de RLS (`Row Level Security`)**:
    *   **Problema**: Mesmo com a política `Allow anon insert` configurada no Supabase, a inserção de dados falhava com o erro `new row violates row-level security policy`.
    *   **Diagnóstico**: Após extensa depuração (verificação de chaves de API, reinicialização de servidor, etc.), descobrimos que a causa raiz era uma chamada `.select()` encadeada à operação `.insert()` no código do frontend.
    *   **Causa Raiz**: O `.select()` tentava ler a linha recém-inserida, mas a política de RLS do banco de dados **corretamente negava** a permissão de leitura (`SELECT`) para usuários anônimos. A operação inteira falhava por causa da parte de leitura, não da de inserção.
    *   **Solução**: Removemos a chamada `.select()` da query do `supabase-js`, resultando em uma operação de "insert puro", que é permitida pela política de RLS.
    *   **Benefício**: A integração com o Supabase agora funciona corretamente, respeitando as políticas de segurança robustas que foram definidas (permitir apenas inserção e negar leitura, atualização e deleção para usuários públicos).

3.  **Melhoria do Feedback de UX e Código**:
    *   **Solução**: Envolvemos as chamadas da biblioteca de notificações (`sonner`) em `setTimeout(..., 0)` para resolver um aviso comum do React sobre atualizações de estado durante a renderização. A função `onSubmit` foi reestruturada para usar `try/catch/finally`, melhorando o controle sobre o estado de `loading` e o tratamento de erros.

---

### **Data:** 28/01/2026
### **Responsável:** Gemi & Cláudio

#### **Módulo Afetado:**
-   Estratégia Geral do Projeto
-   `src/pages/Checkout.tsx`
-   `src/pages/Success.tsx`
-   Database (`profiles`, `subscriptions`)

#### **Descrição da Alteração:**
Pivotação estratégica do funil de vendas. O projeto deixa de ser um modelo de venda direta e passa a adotar uma estratégia de **pré-lançamento** para captura de leads, com base nos estudos da "Fórmula de Lançamento".

#### **Justificativa Técnica e de Produto:**

1.  **Mudança de Estratégia (O Porquê):**
    *   **Motivação:** A decisão, liderada pelo Cláudio, foi baseada na metodologia da "Fórmula de Lançamento" de Érico Rocha. O objetivo é construir audiência e expectativa antes de abrir o carrinho de compras, visando um pico de conversão no lançamento oficial, em vez de um crescimento linear e mais lento.
    *   **Impacto:** O foco de curto prazo muda da **venda** para a **captura de leads**.

2.  **Adaptação do Funil (O Que Mudou):**
    *   O formulário da página `/checkout` foi reaproveitado para funcionar como a **página de captura de leads**.
    *   A chamada à função `create_profile_and_subscription` no Supabase foi mantida, pois já salva o usuário com o status `pending`, o que é perfeito para um lead de pré-lançamento.
    *   **O redirecionamento para o gateway de pagamento foi removido.** Após o cadastro, o usuário é agora direcionado para a página `/obrigado`.
    *   A página `/obrigado` (`Success.tsx`) teve seu conteúdo alterado para refletir a inscrição em uma lista de espera VIP, e não uma compra concluída.

3.  **Adiamento da Integração de Pagamento:**
    *   **Motivação:** Como o foco imediato não é mais processar pagamentos, a escolha e integração de um gateway (Mercado Pago, Stripe, Asaas, etc.) e a implementação dos webhooks foram estrategicamente adiadas.
    *   **Benefício:** Isso nos dá mais tempo para pesquisar e escolher a solução com o melhor custo-benefício e as menores taxas, sem apressar a decisão técnica.

---

## Próximas Tarefas Sugeridas (Estratégia de Lançamento)

O próximo desafio é garantir que cada lead cadastrado receba uma confirmação imediata, iniciando o relacionamento com a audiência.

1.  **Implementar E-mail de Confirmação de Inscrição:**
    *   **Objetivo:** Enviar um e-mail de boas-vindas assim que o usuário se inscreve na lista VIP.
    *   **Ferramenta Recomendada:** **Resend** ([resend.com](http://resend.com/)), pela integração nativa com Vercel/Supabase e plano gratuito robusto.
    *   **LEMBRETE / Ação Necessária (Cláudio):**
        1.  Criar uma conta gratuita no Resend.
        2.  Verificar o domínio do projeto no painel do Resend (adicionar registros DNS).
        3.  Gerar uma **API Key**.
        4.  Adicionar a API Key aos "Secrets" do projeto no Supabase com o nome `RESEND_API_KEY`.
    *   **Ação Necessária (Gemi):**
        *   Após a API Key ser configurada, modificar a função `create_profile_and_subscription` para, além de salvar no banco, disparar o e-mail de boas-vindas usando a API do Resend.

2.  **Pesquisar e Decidir sobre Gateway de Pagamento (Futuro):**
    *   **Objetivo:** Analisar as principais opções do mercado para quando o "carrinho for aberto".
    *   **Critérios:** Taxas (para PJ), facilidade de integração, confiabilidade e opções de pagamento oferecidas (Pix, Cartão, Boleto).
    *   **Status:** Tarefa adiada, a ser retomada após a fase de captura de leads estar consolidada.

---

### **Data:** 04/02/2026
### **Responsável:** Gemi

#### **Módulo Afetado:**
-   `src/components/*` (Landing Page Copy & UX)
-   `src/repositories/subscriptionRepository.ts`
-   `src/services/api.ts`
-   `api/send-welcome-email.ts`

#### **Descrição da Alteração:**
Implementação completa do fluxo de e-mail de boas-vindas (Resend), refatoração arquitetural (Camadas de Serviço e Repositório) e uma reestruturação agressiva da Landing Page focada em conversão, utilizando Gatilhos Mentais baseados na psicologia de vendas.

#### **Justificativa Técnica e de Produto:**

1.  **Arquitetura Profissional (Service & Repository Pattern):**
    *   **Problema:** A lógica de banco de dados e APIs estava misturada na UI (`Checkout.tsx`), dificultando testes e manutenção.
    *   **Solução:** Criamos `subscriptionRepository.ts` para isolar o Supabase e `api.ts` para centralizar chamadas externas.
    *   **Benefício:** Código desacoplado, limpo e pronto para escalar.

2.  **Copywriting de Alta Conversão ("Os 21 Gatilhos"):**
    *   **Objetivo:** Transformar a Landing Page em uma máquina de vendas, alinhada com a proposta de valor única do KarCash (Carros sem leilão/sinistro).
    *   **Gatilhos Aplicados:**
        *   **Hero Section:**
            *   *Curiosidade & Exclusividade:* "Lucre em carros que Ninguém Mais tem acesso".
            *   *Escassez:* "Vagas Limitadas para nova turma".
        *   **Seção "O Segredo" (Nova):**
            *   *Inimigo Comum:* Posicionamos o leilão tradicional (doc sujo) como o vilão.
            *   *Razão e Porquê:* Explicamos a lógica financeira de comprar um carro "limpo" (100% FIPE) vs "sujo" (70% FIPE).
            *   *Procedência:* Garantia de "Documento Sem Sinistro".
        *   **Cards de Ofertas:**
            *   *Ancoragem:* Preço FIPE (riscado) ao lado do Preço VIP.
            *   *Especifidade:* Cálculo exato do lucro estimado (ex: "Margem: 32%").
            *   *Antecipação:* Botão "Ver Detalhes" levando ao Checkout, simulando a posse.


---

### **Data:** 04/02/2026
### **Responsável:** Gemi

#### **Módulo Afetado:**
-    (Landing Page Copy & UX)
-   
-   
-   

#### **Descrição da Alteração:**
Implementação completa do fluxo de e-mail de boas-vindas (Resend), refatoração arquitetural (Camadas de Serviço e Repositório) e uma reestruturação agressiva da Landing Page focada em conversão, utilizando Gatilhos Mentais baseados na psicologia de vendas.

#### **Justificativa Técnica e de Produto:**

1.  **Arquitetura Profissional (Service & Repository Pattern):**
    *   **Problema:** A lógica de banco de dados e APIs estava misturada na UI (), dificultando testes e manutenção.
    *   **Solução:** Criamos  para isolar o Supabase e  para centralizar chamadas externas.
    *   **Benefício:** Código desacoplado, limpo e pronto para escalar.

2.  **Copywriting de Alta Conversão ("Os 21 Gatilhos"):**
    *   **Objetivo:** Transformar a Landing Page em uma máquina de vendas, alinhada com a proposta de valor única do KarCash (Carros sem leilão/sinistro).
    *   **Gatilhos Aplicados:**
        *   **Hero Section:**
            *   *Curiosidade & Exclusividade:* "Lucre em carros que Ninguém Mais tem acesso".
            *   *Escassez:* "Vagas Limitadas para nova turma".
        *   **Seção "O Segredo" (Nova):**
            *   *Inimigo Comum:* Posicionamos o leilão tradicional (doc sujo) como o vilão.
            *   *Razão e Porquê:* Explicamos a lógica financeira de comprar um carro "limpo" (100% FIPE) vs "sujo" (70% FIPE).
            *   *Procedência:* Garantia de "Documento Sem Sinistro".
        *   **Cards de Ofertas:**
            *   *Ancoragem:* Preço FIPE (riscado) ao lado do Preço VIP.
            *   *Especifidade:* Cálculo exato do lucro estimado (ex: "Margem: 32%").
            *   *Antecipação:* Botão "Ver Detalhes" levando ao Checkout, simulando a posse.

