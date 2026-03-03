import { motion } from "framer-motion";
import { Check, X, AlertTriangle, ShieldCheck } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export const OpportunitySection = () => {
    return (
        <section className="py-20 bg-card relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-6">
                            O Segredo Que Os Leilões <span className="text-secondary">Não Te Contam</span>
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Você sabia que <strong>98% dos carros de leilão</strong> ficam marcados no documento para sempre?
                            Isso destrói sua margem de lucro na revenda.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* O Jeito Tradicional (Leilão) */}
                    <ScrollReveal delay={0.1}>
                        <div className="bg-background/50 border border-destructive/20 rounded-2xl p-8 h-full relative overflow-hidden group hover:border-destructive/40 transition-colors">
                            <div className="absolute top-4 right-4 text-destructive/20 group-hover:text-destructive/40 transition-colors">
                                <AlertTriangle className="w-24 h-24" />
                            </div>

                            <h3 className="font-display font-bold text-2xl text-destructive mb-2 flex items-center gap-2">
                                <X className="w-6 h-6" /> Leilão Tradicional
                            </h3>
                            <p className="text-muted-foreground mb-6">Onde todo mundo perde dinheiro brigando por migalhas.</p>

                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-muted-foreground">
                                    <X className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                                    <span>Concorrência brutal (300+ pessoas por lote)</span>
                                </li>
                                <li className="flex items-start gap-3 text-muted-foreground">
                                    <X className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                                    <span><strong>Documento Manchado:</strong> Consta "Sinistro" ou "Leilão"</span>
                                </li>
                                <li className="flex items-start gap-3 text-muted-foreground">
                                    <X className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                                    <span>Valor de Revenda: <strong>Apenas 70% da FIPE</strong></span>
                                </li>
                                <li className="flex items-start gap-3 text-muted-foreground">
                                    <X className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                                    <span>Dificuldade alta para fazer seguro e financiar</span>
                                </li>
                            </ul>
                        </div>
                    </ScrollReveal>

                    {/* O Método KarCash (VIP) */}
                    <ScrollReveal delay={0.2}>
                        <div className="bg-primary/5 border border-primary/30 rounded-2xl p-8 h-full relative overflow-hidden ring-1 ring-primary/20 shadow-2xl shadow-primary/5">
                            <div className="absolute top-4 right-4 text-primary/10">
                                <ShieldCheck className="w-24 h-24" />
                            </div>

                            <h3 className="font-display font-bold text-2xl text-primary mb-2 flex items-center gap-2">
                                <Check className="w-6 h-6" /> Método KarCash VIP
                            </h3>
                            <p className="text-foreground/80 mb-6">Acesso exclusivo à mercadoria invisível.</p>

                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-foreground">
                                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                    <span><strong>Sem Concorrência:</strong> Acesso antes de ir a público</span>
                                </li>
                                <li className="flex items-start gap-3 text-foreground">
                                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                    <span><strong>Documento 100% Limpo:</strong> Sem Sinistro, Sem Leilão</span>
                                </li>
                                <li className="flex items-start gap-3 text-foreground">
                                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                    <span>Valor de Revenda: <strong>100% da Tabela FIPE</strong></span>
                                </li>
                                <li className="flex items-start gap-3 text-foreground">
                                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                    <span>Aceita Seguro e Financiamento em qualquer banco</span>
                                </li>
                            </ul>

                            <div className="mt-8 bg-primary/20 rounded-xl p-4 text-center border border-primary/30">
                                <p className="text-primary font-bold text-lg">
                                    LUCRO REAL: R$ 10.000 a R$ 50.000 POR CARRO
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                <ScrollReveal>
                    <div className="text-center mt-12">
                        <p className="text-muted-foreground max-w-2xl mx-auto italic mb-6">
                            "Eu não vendo carros batidos. Eu vendo a <strong className="text-foreground">oportunidade rara</strong> de comprar um ativo desvalorizado que volta a valer 100% do mercado depois de um reparo simples."
                        </p>
                        <a href="/checkout" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-bold uppercase tracking-wide border-b-2 border-primary/20 hover:border-primary">
                            Entenda como garantimos isso <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};
