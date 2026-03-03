import { CreditCard, MessageCircle, TrendingUp } from "lucide-react"
import { ScrollReveal } from "./ScrollReveal"
import { StepCard } from "./StepCard"

export const Journey = () => {
    return (
        <>
            {/* How It Works */}
            <section className="py-16 bg-navy">
                <div className="container mx-auto px-4">
                    <ScrollReveal>
                        <div className="text-center mb-12">
                            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
                                Sua Jornada de Lucro em{" "}
                                <span className="text-primary">3 Passos Simples</span>
                            </h2>
                        </div>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <StepCard
                            number={1}
                            title="Assine"
                            description="Garanta seu acesso exclusivo à comunidade KarCash por apenas R$ 49,94/mês."
                            icon={<CreditCard className="w-8 h-8" />}
                            delay={0}
                        />
                        <StepCard
                            number={2}
                            title="Receba"
                            description="Acesse diariamente 10 ofertas de carros até 50% abaixo da tabela FIPE."
                            icon={<MessageCircle className="w-8 h-8" />}
                            delay={0.1}
                        />
                        <StepCard
                            number={3}
                            title="Lucre"
                            description="Negocie direto e coloque o lucro no seu bolso. Simples assim."
                            icon={<TrendingUp className="w-8 h-8" />}
                            delay={0.2}
                        />
                    </div>
                </div>
            </section>


        </>
    )
}
