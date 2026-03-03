import { motion } from "framer-motion";
import { Car, ArrowRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { Link } from "react-router-dom";

export const SellerLead = () => {
    return (
        <section className="py-20 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4">
                <ScrollReveal>
                    <div className="max-w-4xl mx-auto rounded-3xl border border-primary/20 bg-gradient-to-br from-card/30 to-background/50 backdrop-blur-md p-8 md:p-14 relative overflow-hidden">
                        {/* Decorative background circle */}
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 blur-[80px] rounded-full" />

                        <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
                            <div className="flex-1 text-center md:text-left">
                                <span className="inline-block px-4 py-1.5 mb-6 text-[10px] md:text-xs font-bold text-primary bg-primary/10 rounded-full border border-primary/20 uppercase tracking-widest">
                                    💰 Venda Seu Veículo Rápido
                                </span>
                                <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6 leading-tight text-balance">
                                    Tem um carro <span className="text-primary">Avariado</span> e quer vender agora? 🚗
                                </h2>
                                <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed">
                                    Nossa rede exclusiva de investidores compra seu veículo à vista.
                                    Acesse nossa página de avaliação e receba uma oferta em até 24h.
                                </p>

                                <Link to="/vender">
                                    <motion.button
                                        className="btn-primary-cta text-base md:text-lg flex items-center justify-center gap-2 group px-8 py-4 w-full sm:w-auto"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        QUERO VENDER MEU CARRO
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </motion.button>
                                </Link>
                            </div>

                            <div className="flex-shrink-0 relative hidden lg:block">
                                <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center group overflow-hidden">
                                    <Car className="w-24 h-24 md:w-32 md:h-32 text-primary/30 group-hover:text-primary/60 transition-all duration-700 -rotate-12 group-hover:rotate-0 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
                                </div>
                                <div className="absolute -bottom-4 -right-4 p-4 rounded-xl bg-card border border-white/10 shadow-2xl flex flex-col items-center">
                                    <span className="text-xs text-muted-foreground font-bold">Compra Rápida</span>
                                    <span className="text-primary font-bold">Em até 24h</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};
