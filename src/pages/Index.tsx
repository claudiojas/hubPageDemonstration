import { motion } from "framer-motion";
import {
  CreditCard,
  MessageCircle,
  TrendingUp,
  Shield,
  Zap,
  Calendar,
  CheckCircle
} from "lucide-react";

import { PhoneMockup } from "@/components/PhoneMockup";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CarCard } from "@/components/CarCard";
import { StepCard } from "@/components/StepCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { PricingCard } from "@/components/PricingCard";
import { FAQSection } from "@/components/FAQSection";
import { HeroSection } from "@/components/HeroSection";
import { OpportunitySection } from "@/components/OpportunitySection";
import { FounderNote } from "@/components/FounderNote";
import { ProfitPaths } from "@/components/ProfitPaths";
import { SellerLead } from "@/components/SellerLead";



import fiorinoImg from "@/assets/KARCASH_MODELOS/FIORINO_ENDURANCE/FIORINO_ENDURANCE.jpeg";
import nivusImg from "@/assets/KARCASH_MODELOS/NIVUS_2024/NIVUS_2024.jpeg";
import poloImg from "@/assets/KARCASH_MODELOS/POLO_2024/POLO_2024.jpeg";
import betoneiraImg from "@/assets/KARCASH_MODELOS/VW26.2602023_BETONEIRA/VW26.2602023_BETONEIRA.jpeg";
import { Journey } from "@/components/Journey";

const cars = [
  {
    name: "Fiorino Endurance",
    year: "2023",
    fipePrice: 84208,
    ourPrice: 54997,
    image: fiorinoImg,
  },
  {
    name: "Nivus Confortline TSI",
    year: "2024",
    fipePrice: 106665,
    ourPrice: 76997,
    image: nivusImg,
  },
  {
    name: "Polo Track 1.0",
    year: "2024",
    fipePrice: 69906,
    ourPrice: 47997,
    image: poloImg,
  },
  {
    name: "VW 26.260 E Const 8x4",
    year: "2023",
    fipePrice: 680000,
    ourPrice: 250997,
    image: betoneiraImg,
  },
];


const benefits = [
  { icon: <Calendar className="w-6 h-6" />, title: "+300 ofertas por mês" },
  { icon: <Shield className="w-6 h-6" />, title: "Carros sem dívidas ou leilão" },
  { icon: <CreditCard className="w-6 h-6" />, title: "Financiável por qualquer banco" },
  { icon: <CheckCircle className="w-6 h-6" />, title: "Não precisa de CNPJ" },
  { icon: <Zap className="w-6 h-6" />, title: "Negocie sem pagar adiantado" },
  { icon: <MessageCircle className="w-6 h-6" />, title: "Suporte VIP no WhatsApp" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* 1. ATENÇÃO: Hero Section */}
      <HeroSection />

      {/* 2. INTERESSE IMEDIATO: Vitrine de Ofertas Reais */}
      <div className="container mx-auto px-4 -mt-10 mb-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cars.map((car, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <CarCard {...car} />
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* 3. RELEVÂNCIA P/ TODOS OS BOLSOS: Profit Paths */}
      <ProfitPaths />

      {/* 4. CONSTRUÇÃO DE VALOR: Opportunity Section */}
      <section className="py-20 bg-navy/40 relative">
        <div className="container mx-auto px-4">
          <OpportunitySection />
        </div>
      </section>

      {/* 5. PROVA SOCIAL: Stats */}
      <section className="py-20 bg-background border-y border-white/5">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-4">
                Milhares Já <span className="text-primary">Lucram Conosco.</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Não somos mágica, somos inteligência de mercado. Veja por que +5.000 membros já transformaram seu dinheiro com a KarCash.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { value: 5000, suffix: "+", label: "Membros Ativos" },
              { value: 10000, suffix: "+", label: "Carros Negociados" },
              { value: 50, prefix: "R$ ", suffix: "M+", label: "Em Lucros Gerados" },
              { value: 300, suffix: "+", label: "Ofertas por Mês" },
            ].map((stat, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="card-elevated text-center py-10 bg-card/30">
                  <div className="font-display font-bold text-3xl md:text-5xl text-primary mb-2">
                    <AnimatedCounter
                      end={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  </div>
                  <p className="text-muted-foreground font-medium uppercase tracking-widest text-[10px] md:text-xs">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CLAREZA: Journey (Passo a passo) */}
      <Journey />

      {/* 7. AUTORIDADE & CONEXÃO: Founder Note */}
      <FounderNote />

      {/* 8. A OFERTA IRRESISTÍVEL: Pricing (Subiu de posição!) */}
      <section className="py-24 bg-gradient-to-b from-background to-navy/20" id="pricing">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold text-primary bg-primary/10 rounded-full border border-primary/20 uppercase tracking-widest">
                🚀 Acesso Imediato
              </span>
              <h2 className="font-display font-bold text-4xl md:text-6xl text-foreground mb-6">
                Sua Oportunidade <span className="text-primary">Começa Aqui.</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Escolha o plano que melhor se adapta ao seu momento e destrave seu lucro hoje mesmo.
              </p>
            </div>
          </ScrollReveal>

          <PricingCard />
        </div>
      </section>

      {/* 9. BÔNUS & BENEFÍCIOS ADICIONAIS */}
      <section className="py-20 bg-navy/40">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
                Pare de Sonhar, <span className="text-gold">Comece a Lucrar.</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Exclusivo para Membros VIP KarCash
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={index} delay={index * 0.05}>
                <div className="card-elevated flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-3 md:gap-4 p-4 md:p-5 h-full justify-center md:justify-start hover:border-primary/40 transition-colors">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <span className="text-foreground font-medium text-xs md:text-base leading-tight">
                    {benefit.title}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 10. META SECUNDÁRIA: Seller Lead (Vender seu carro) */}
      <SellerLead />

      {/* 11. MATAR OBJEÇÕES: FAQ */}
      <section className="py-20 bg-background" id="faq">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4 uppercase">
                AINDA TEM DÚVIDAS? <span className="text-primary">A GENTE RESPONDE!</span>
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <FAQSection />
          </ScrollReveal>
        </div>
      </section>

      {/* 12. ÚLTIMA CHAMADA: Final CTA */}
      <section className="py-24 bg-gradient-to-t from-background to-card/20">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-foreground mb-8">
              Não Deixe Essa Oportunidade Passar!
            </h2>
            <p className="text-muted-foreground text-xl mb-12 max-w-2xl mx-auto">
              Junte-se a mais de 5.000 membros que já estão lucrando com carros abaixo da FIPE em todas as categorias.
            </p>
            <a href="/checkout">
              <motion.button
                className="btn-primary-cta text-xl md:text-2xl px-12 py-6 pulse-glow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                QUERO MEU ACESSO VIP AGORA!
              </motion.button>
            </a>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Index;
