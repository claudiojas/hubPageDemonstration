import { Link } from "react-router-dom";

const Privacy = () => {
    return (
        <div className="min-h-screen bg-background text-foreground pt-24 pb-12">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="mb-8 md:mb-12 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 font-display bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                        Política de Privacidade
                    </h1>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
                </div>

                <div className="bg-card/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 md:p-10 shadow-xl">
                    <div className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:text-primary prose-p:text-muted-foreground prose-li:text-muted-foreground">
                        <p className="lead text-xl text-foreground font-light mb-8">
                            A sua privacidade é importante para nós. É política do KarCash respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar.
                        </p>

                        <div className="space-y-8">
                            <section>
                                <h3 className="text-xl font-bold text-white mb-4">1. Informações que Coletamos</h3>
                                <p>Solicitamos informações pessoais, como nome, e-mail e telefone, apenas quando realmente precisamos delas para lhe fornecer um serviço (como o acesso à lista VIP). Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento.</p>
                            </section>

                            <section>
                                <h3 className="text-xl font-bold text-white mb-4">2. Uso de Dados</h3>
                                <p>Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.</p>
                            </section>

                            <section>
                                <h3 className="text-xl font-bold text-white mb-4">3. Compartilhamento de Dados</h3>
                                <p>Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.</p>
                            </section>

                            <section>
                                <h3 className="text-xl font-bold text-white mb-4">4. Cookies</h3>
                                <p>O KarCash utiliza cookies para melhorar a experiência do usuário. Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.</p>
                            </section>

                            <section>
                                <h3 className="text-xl font-bold text-white mb-4">5. Compromisso do Usuário</h3>
                                <p>O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o KarCash oferece no site e com caráter enunciativo, mas não limitativo:</p>
                                <ul>
                                    <li>Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;</li>
                                    <li>Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, ou apostas online, pornografia, de apologia ao terrorismo ou contra os direitos humanos.</li>
                                </ul>
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
                            <a href="/termos" className="text-muted-foreground hover:text-white transition-colors">
                                Termos de Uso
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Privacy;
