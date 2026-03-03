# 🚀 KarCash - Acesso VIP

Bem-vindo ao repositório da Landing Page de Acesso VIP do KarCash. Este projeto é a porta de entrada para a comunidade exclusiva de revendedores e investidores de automóveis que buscam as melhores oportunidades do mercado.

O objetivo principal é converter visitantes em assinantes da comunidade VIP, oferecendo acesso privilegiado a carros "limpos" (sem sinistro/leilão) com margens reais de 20% a 50% abaixo da tabela FIPE, além de múltiplas formas de geração de renda.

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído com uma stack moderna e performática, preparada para escala:

### Frontend
-   **[Vite](https://vitejs.dev/)**: Build tool ultrarrápida.
-   **[React](https://react.dev/)**: Biblioteca de UI.
-   **[TypeScript](https://www.typescriptlang.org/)**: Tipagem estática.
-   **[Tailwind CSS](https://tailwindcss.com/)**: Estilização utility-first.
-   **[Framer Motion](https://www.framer.com/motion/)**: Animações fluidas.
-   **[React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)**: Formulários e validação robusta.

### Backend & Infraestrutura (Evolução em curso)
-   **[Vercel Postgres (Neon)](https://neon.tech/)**: Banco de dados PostgreSQL Serverless de alta performance.
-   **[Prisma ORM](https://www.prisma.io/)**: Type-safe database client para garantir integridade dos dados.
-   **[Node.js + Fastify](https://www.fastify.io/)**: Framework de API ultrarrápido para suportar o futuro marketplace.
-   **[Resend](https://resend.com/)**: Serviço de e-mail transacional.
-   **[Supabase](https://supabase.com/)**: Utilizado inicialmente para Auth e Database (migrando lógica para a API dedicada).

## 🏗️ Arquitetura do Projeto

O projeto segue uma arquitetura limpa e desacoplada para garantir escalabilidade:

```
/
├── api/                  # Serverless Functions & API Routes
├── src/
│   ├── assets/           # Imagens e dados reais dos carros
│   ├── components/       # Componentes React reutilizáveis (Hero, SellerLead, etc)
│   ├── pages/            # Páginas (Index, SellCar, Checkout, Success)
│   ├── repositories/     # Camada de acesso a dados
│   ├── services/         # Camada de serviços externos (API)
│   └── lib/              # Configurações (DB Client, Utils)
```

## 🌟 Diferenciais e Funcionalidades

-   **Fluxo de Conversão AIDA:** Landing Page estruturada psicologicamente para guiar o usuário da Atenção à Ação.
-   **3 Formas de Lucrar:** Segmentação clara para Afiliados, Dropshippers e Investidores de Elite.
-   **Captação de Estoque Profissional:** Página `/vender` dedicada para aquisição de veículos avariados diretamente com leads qualificados.
-   **Checkout Transparente:** Integração com Guru para máxima segurança e conversão no pagamento.

## ⚙️ Como Executar o Projeto Localmente

**Pré-requisitos:** Node.js (v18+) e NPM/Yarn.

1.  **Clone e Instale:**
    ```bash
    git clone https://github.com/claudiojas/karcash-vip-access.git
    cd karcash-vip-access
    npm install
    ```

2.  **Configure as Variáveis de Ambiente:**
    Crie um arquivo `.env` na raiz seguindo o modelo das ferramentas (Supabase/Neon/Resend).

3.  **Rodar Frontend (Vite):**
    ```bash
    npm run dev
    ```
    *Acesse em `http://localhost:5173`.*

## 🧠 Estratégia de Copywriting (Gatilhos Mentais)

A Landing Page foi otimizada com gatilhos mentais para alta conversão:

-   **Profit Paths:** Segue a técnica de *Segmentação de Público*, atraindo diversos perfis de investidores.
-   **Hero Section:** Ativa *Curiosidade*, *Promessa* e *Exclusividade*.
-   **Seção "O Segredo":** Usa *Dissonância Cognitiva* (Leilão é ruim) e *Razão e Porquê*.
-   **Cards de Ofertas:** Utiliza *Ancoragem de Preço* e *Especifidade* (Lucro Exato).

---
*Atualizado em 02/03/2026 por Gemi (Desenvolvedora Senior & Strategista).*
