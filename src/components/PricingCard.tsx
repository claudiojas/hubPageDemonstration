import { motion } from "framer-motion";
import { Check } from "lucide-react";

export const PricingCard = () => {
  const benefits = [
    "+300 ofertas exclusivas por mês",
    "10 ofertas diárias no WhatsApp",
    "Carros financiáveis sem dívidas",
    "Negocie pessoalmente, sem adiantamento",
    "Não precisa de CNPJ",
    "Suporte VIP no grupo",
    "Cancele quando quiser",
  ];

  return (
    <motion.div
      className="relative card-elevated max-w-md mx-auto overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-gold/10 pointer-events-none" />
      
      {/* Badge */}
      <div className="absolute -top-px left-1/2 -translate-x-1/2">
        <div className="px-6 py-1.5 bg-gold text-gold-foreground font-display font-bold text-sm rounded-b-xl">
          MAIS POPULAR
        </div>
      </div>

      <div className="pt-10 text-center relative z-10">
        {/* Title */}
        <h3 className="font-display font-bold text-2xl text-foreground mb-2">
          ACESSO VIP MENSAL
        </h3>
        <p className="text-muted-foreground text-sm mb-6">
          Sem fidelidade • Cancele quando quiser
        </p>

        {/* Pricing */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            De <span className="line-through">R$ 499,94</span> por apenas
          </p>
          <div className="flex items-center justify-center gap-1 mt-2">
            <span className="text-2xl text-foreground font-medium">R$</span>
            <span className="text-6xl font-display font-bold text-primary">49</span>
            <span className="text-2xl text-foreground font-medium">,94</span>
            <span className="text-muted-foreground text-lg">/mês</span>
          </div>
          <p className="text-gold text-sm font-medium mt-2">
            🔥 Economia de 90% - Vagas de lançamento!
          </p>
        </div>

        {/* Benefits */}
        <ul className="space-y-3 text-left mb-8">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Check className="w-3 h-3 text-primary" />
              </div>
              <span className="text-foreground/90 text-sm">{benefit}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href="/checkout" className="block">
          <motion.button
            className="btn-primary-cta w-full"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            QUERO ACESSO IMEDIATO!
          </motion.button>
        </a>

        <p className="text-muted-foreground text-xs mt-4">
          🔒 Pagamento 100% seguro • Acesso imediato
        </p>
      </div>
    </motion.div>
  );
};
