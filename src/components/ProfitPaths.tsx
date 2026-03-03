import { motion } from "framer-motion";
import { Users, Share2, TrendingUp, DollarSign } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const paths = [
    {
        title: "Afiliado VIP",
        description: "Recupere seu investimento convidando outros membros. Ganhe 10% de comissão recorrente por cada indicação.",
        benefit: "Renda Passiva Mensal",
        icon: <Users className="w-8 h-8 text-primary" />,
        target: "Baixo Capital",
    },
    {
        title: "Dropshipping Automotivo",
        description: "Não tem capital para comprar? Revenda nossos anúncios e ganhe R$ 1.000,00 de comissão por cada carro vendido.",
        benefit: "R$ 1.000 por Venda",
        icon: <Share2 className="w-8 h-8 text-primary" />,
        target: "Risco Zero",
    },
    {
        title: "Investidor de Elite",
        description: "Acesse o mercado de carros avariados. Compre por até 50% da FIPE, reforme e lucre alto em cada operação.",
        benefit: "R$ 10k a R$ 50k de Lucro",
        icon: <TrendingUp className="w-8 h-8 text-primary" />,
        target: "Alto Capital",
    },
];

export const ProfitPaths = () => {
    return (
        <section className="py-20 bg-background relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

            <div className="container mx-auto px-4">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-6">
                            3 Formas de <span className="text-primary">Lucrar</span> com a KarCash
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                            Seja você um iniciante com pouco capital ou um investidor experiente,
                            nosso ecossistema foi desenhado para você extrair o máximo de lucro do mercado automotivo.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-3 gap-8">
                    {paths.map((path, index) => (
                        <ScrollReveal key={index} delay={index * 0.1}>
                            <div className="card-elevated group hover:border-primary/50 transition-all duration-500 flex flex-col h-full bg-card/40 backdrop-blur-sm border-white/5 relative overflow-hidden">
                                {/* Highlight line on top */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent group-hover:via-primary transition-all duration-500" />

                                <div className="mb-6 flex items-center justify-between">
                                    <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 group-hover:scale-110 transition-transform duration-500">
                                        {path.icon}
                                    </div>
                                    <span className="text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full bg-white/5 text-muted-foreground border border-white/10 group-hover:border-primary/30 group-hover:text-primary transition-colors duration-500">
                                        {path.target}
                                    </span>
                                </div>

                                <h3 className="font-display font-bold text-2xl text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                                    {path.title}
                                </h3>

                                <p className="text-muted-foreground mb-8 flex-grow leading-relaxed">
                                    {path.description}
                                </p>

                                <div className="mt-auto pt-6 border-t border-white/5 flex items-center gap-2">
                                    <DollarSign className="w-5 h-5 text-primary" />
                                    <span className="font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                                        {path.benefit}
                                    </span>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};
