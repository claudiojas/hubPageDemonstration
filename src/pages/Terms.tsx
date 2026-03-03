import { Link } from "react-router-dom";

const Terms = () => {
    return (
        <div className="min-h-screen bg-background text-foreground pt-24 pb-12">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="mb-8 md:mb-12 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 font-display bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                        Termos de Uso
                    </h1>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
                    <p className="mt-4 text-muted-foreground text-sm">
                        Documento registrado para fins de prova de autoria e integridade.
                    </p>
                </div>

                <div className="bg-card/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 md:p-10 shadow-xl">
                    <div className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:text-primary prose-p:text-muted-foreground">
                        <p className="text-sm text-muted-foreground mb-8 uppercase tracking-wider font-semibold border-b border-white/5 pb-4">
                            Última atualização: {new Date().getFullYear()}
                        </p>

                        <div className="space-y-8">
                            <section>
                                <h3 className="text-xl font-bold text-white mb-4">1. Definições e Aceitação</h3>
                                <p>
                                    Estes Termos de Uso ("Termos") regem a relação entre você ("Usuário") e a plataforma **KarCash**. Ao acessar, adquirir membros VIP ou utilizar nossos serviços ("Serviços"), o Usuário declara ter lido, compreendido e aceito integralmente as cláusulas aqui dispostas.
                                </p>
                                <p className="mt-2">
                                    Caso não concorde com qualquer parte destes termos, o Usuário deve abster-se de utilizar a plataforma imediatamente.
                                </p>
                            </section>

                            <section>
                                <h3 className="text-xl font-bold text-white mb-4">2. Natureza dos Serviços (Curadoria)</h3>
                                <p>
                                    O KarCash atua exclusivamente como uma **plataforma de inteligência e curadoria de informações automotivas**.
                                </p>
                                <ul className="list-disc pl-4 mt-2 mb-2 space-y-1 text-base">
                                    <li>Não somos proprietários dos veículos exibidos (salvo indicação expressa);</li>
                                    <li>Não atuamos como concessionária ou loja de revenda direta;</li>
                                    <li>Nosso serviço consiste em **identificar, filtrar e apresentar** oportunidades de mercado ("Lotes Invisíveis") para nossos membros.</li>
                                </ul>
                                <p>
                                    A transação final de compra e venda do veículo ocorre diretamente entre o Usuário e o proprietário/vendedor do ativo, sem interferência financeira da KarCash sobre o valor do bem.
                                </p>
                            </section>

                            <section>
                                <h3 className="text-xl font-bold text-white mb-4">3. Acesso e Propriedade Intelectual</h3>
                                <p>
                                    O acesso à área de membros ("VIP") é pessoal, intransferível e licenciado temporariamente.
                                </p>
                                <p className="mt-2">
                                    <strong>Proibições expressas:</strong>
                                    <ul className="list-disc pl-4 mt-2 space-y-1 text-base">
                                        <li>Compartilhar login e senha com terceiros (rateio);</li>
                                        <li>Reproduzir, distribuir ou comercializar os dados e relatórios fornecidos;</li>
                                        <li>Utilizar robôs, <em>scrapers</em> ou qualquer meio automatizado para extrair dados da plataforma.</li>
                                    </ul>
                                </p>
                                <p className="mt-2">
                                    A violação de direitos autorais sujeitará o infrator às sanções da Lei nº 9.610/98 e bloqueio imediato sem reembolso.
                                </p>
                            </section>

                            <section>
                                <h3 className="text-xl font-bold text-white mb-4">4. Isenção de Responsabilidade (Disclaimer)</h3>
                                <p>
                                    Embora e KarCash utilize rigorosos critérios de seleção (verificação de base de dados, histórico de seguradora), a decisão final de compra é de responsabilidade exclusiva do Usuário.
                                </p>
                                <div className="bg-white/5 p-4 rounded-lg mt-2 text-sm">
                                    <p><strong>A KARCASH NÃO SE RESPONSABILIZA POR:</strong></p>
                                    <ul className="list-disc pl-4 mt-2 space-y-1">
                                        <li>Vícios ocultos mecânicos não detectáveis em análise documental;</li>
                                        <li>Alterações no estado do veículo após a data da nossa curadoria;</li>
                                        <li>Inadimplência ou desistência por parte do vendedor original do veículo.</li>
                                    </ul>
                                </div>
                                <p className="mt-2 text-sm italic">
                                    Recomendamos que todo Usuário realize vistoria presencial ou cautelar independente antes de efetivar qualquer pagamento ao vendedor do veículo.
                                </p>
                            </section>

                            <section>
                                <h3 className="text-xl font-bold text-white mb-4">5. Política de Cancelamento e Arrependimento</h3>
                                <p>
                                    Em conformidade com o Art. 49 do Código de Defesa do Consumidor (CDC), o Usuário possui o prazo de 7 (sete) dias corridos para exercer o direito de arrependimento sobre a assinatura do serviço de informações.
                                </p>

                                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mt-4 text-sm text-red-200">
                                    <strong>⚠️ Cláusula Anti-Abuso (Proteção à Boa-Fé):</strong>
                                    <p className="mt-2">
                                        O download massivo (<em>bulk gathering</em>) ou consumo integral da base de dados no período de 7 dias, seguido de pedido de cancelamento, será interpretado como <strong>Abuso de Direito (Art. 187 CC)</strong> e enriquecimento sem causa.
                                    </p>
                                    <p className="mt-2">
                                        Nestas situações, a KarCash reserva-se o direito de contestar o reembolso e banir o Usuário permanentemente da plataforma por violação da boa-fé objetiva contratual.
                                    </p>
                                </div>
                            </section>

                            <section>
                                <h3 className="text-xl font-bold text-white mb-4">6. Alterações e Foro</h3>
                                <p>
                                    A KarCash reserva-se o direito de alterar estes termos a qualquer momento, notificando os usuários ativos. Fica eleito o foro da Comarca de São Paulo/SP para dirimir quaisquer dúvidas oriundas deste contrato, renunciando a qualquer outro por mais privilegiado que seja.
                                </p>
                            </section>
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
                        <a
                            href="/"
                            className="text-muted-foreground hover:text-white transition-colors flex items-center gap-2 group"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform"><path d="m15 18-6-6 6-6" /></svg>
                            Voltar ao Início
                        </a>

                        <div className="flex gap-6">
                            <a href="/privacidade" className="text-muted-foreground hover:text-white transition-colors">
                                Política de Privacidade
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Terms;
