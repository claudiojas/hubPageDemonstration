import { motion } from "framer-motion";
import { Check } from "lucide-react";

const Success = () => {
  return (
    <main className="flex-1 flex items-center justify-center py-12 md:py-24">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          <div className="w-24 h-24 bg-green-500/10 text-green-500 rounded-full mx-auto flex items-center justify-center mb-6">
            <Check className="w-12 h-12" />
          </div>

          <h1 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
            Parabéns! Sua vaga na lista VIP está garantida!
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Fique de olho no seu e-mail! Enviaremos todas as informações sobre o 
            lançamento e como garantir seu acesso exclusivo assim que as vagas 
            forem abertas.
          </p>

          <div className="flex flex-col items-center gap-4">
            <p className="text-sm text-muted-foreground">
              Um e-mail de confirmação com mais detalhes foi enviado para você. <br/> (Verifique sua caixa de spam e promoções)
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Success;
