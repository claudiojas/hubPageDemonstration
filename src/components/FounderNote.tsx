import { motion } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";
import { Quote } from "lucide-react";

export const FounderNote = () => {
    return (
        <section className="py-20 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-4xl">
                <ScrollReveal>
                    <div className="bg-secondary/5 border border-secondary/20 rounded-2xl p-8 md:p-12 relative">
                        <Quote className="absolute top-8 left-8 text-secondary/10 w-16 h-16 -z-10" />

                        <div className="text-center mb-8">
                            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
                                Sinceramente? Eu poderia cobrar <span className="text-secondary line-through">R$ 500,00</span> por isso.
                            </h2>
                            <p className="text-lg text-muted-foreground w-full">
                                E ainda seria barato. (Você já vai entender porquê).
                            </p>
                        </div>

                        <div className="space-y-6 text-lg text-foreground/80 leading-relaxed font-light">
                            <p>
                                Pensa comigo: A margem de lucro de <strong>UM ÚNICO CARRO</strong> dessa lista (como a Betoneira que você viu acima) paga mais de <strong className="text-primary">10 anos de assinatura</strong>.
                            </p>

                            <p>
                                Eu poderia vender essa informação por R$ 497,00 mensais tranquilamente. Ainda seria um retorno sobre investimento absurdo para você.
                            </p>

                            <p>
                                <strong className="text-foreground">Mas meu jogo é outro.</strong> Eu não quero lucrar com a sua assinatura. Eu quero construir a maior comunidade de investidores automotivos do Brasil. Eu ganho no volume e na nossa parceria futura.
                            </p>

                            <p>
                                Por isso, tomei uma decisão agressiva:
                            </p>

                            <div className="my-8 text-center p-6 bg-background rounded-xl border border-border shadow-inner">
                                <p className="font-medium text-muted-foreground mb-2">Derrubei o preço de entrada:</p>
                                <p className="text-2xl md:text-3xl font-bold">
                                    De <span className="text-destructive line-through">R$ 497,00</span> por apenas <span className="text-emerald-500">R$ 49,94</span>/mês.
                                </p>
                                <p className="text-xs text-muted-foreground mt-2">(Isso dá menos de R$ 1,60 por dia... menos que um cafezinho ☕)</p>
                            </div>

                            <p>
                                Agora eu te pergunto: <strong>Você tem certeza que vai deixar R$ 30.000,00 na mesa por causa de 50 reais?</strong>
                            </p>
                        </div>

                        <div className="mt-10 text-center">
                            <div className="inline-flex flex-col items-center">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary mb-3 flex items-center justify-center text-background font-bold text-2xl">
                                    G
                                </div>
                                <p className="font-display font-bold text-foreground">Gustavo</p>
                                <p className="text-sm text-muted-foreground">Fundador KarCash</p>
                            </div>
                        </div>

                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};
