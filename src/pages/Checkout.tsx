import { motion } from "framer-motion";
import { Shield, Lock, Check } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import InputMask from "react-input-mask";
// import { supabase } from "@/lib/supabaseClient"; // Removido: agora usamos o repository
import subscriptionRepository from "@/repositories/subscriptionRepository"; // Importa o repository
import { Toaster, toast } from 'sonner'; // Importa o sistema de toasts
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import api from "@/services/api"; // Importa o serviço de API


import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// Schema de validação com Zod
const formSchema = z.object({
  name: z.string().min(3, { message: "O nome deve ter pelo menos 3 caracteres." }),
  email: z.string().email({ message: "Por favor, insira um e-mail válido." }),
  phone: z.string().refine((val) => val.replace(/\D/g, '').length >= 10, {
    message: "O telefone deve ter pelo menos 10 dígitos.",
  }),
});

const Checkout = () => {
  const [isLoading, setIsLoading] = useState(false); // Estado de loading
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const { isValid } = form.formState;
  const navigate = useNavigate(); // Inicializa useNavigate

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setTimeout(() => toast.info("Redirecionando para o pagamento seguro..."), 0);

    try {
      // 1. Salva no Supabase (Status Pendente)
      await subscriptionRepository.createSubscription({
        name: values.name,
        email: values.email,
        phone: values.phone.replace(/\D/g, ''),
      });

      // 2. Monta a URL do Checkout Guru com Pre-fill
      const baseUrl = import.meta.env.VITE_GURU_CHECKOUT_URL;
      const params = new URLSearchParams({
        name: values.name,
        email: values.email,
        phone_number: values.phone.replace(/\D/g, ''),
        phone: values.phone.replace(/\D/g, '')
      });

      // 3. Redireciona
      // setTimeout(() => {
      window.location.href = `${baseUrl}?${params.toString()}`;
      // }, 1000);

    } catch (error) {
      console.error('Erro ao salvar no Supabase:', error);
      const errorMessage = (error as any).message || "Ocorreu um erro desconhecido.";

      let friendlyMessage = "Ocorreu um erro ao processar sua inscrição.";
      if (errorMessage.includes("unique_profile_email")) {
        // Se já existe, ainda assim mandamos pro checkout (recuperação de venda), 
        // mas idealmente avisaríamos "E-mail já cadastrado".
        // Para simplificar a conversão, vamos redirecionar igual, pois o Guru trata duplicidade ou o webhook atualiza.
        // Mas para evitar erro de fluxo, vamos só redirecionar.

        const baseUrl = import.meta.env.VITE_GURU_CHECKOUT_URL;
        const params = new URLSearchParams({
          name: values.name,
          email: values.email,
          phone: values.phone.replace(/\D/g, '')
        });
        window.location.href = `${baseUrl}?${params.toString()}`;
        return;
      }

      setTimeout(() => {
        toast.error(friendlyMessage);
      }, 0);
      setIsLoading(false);
    }
    // Não setamos isLoading(false) no sucesso porque a página vai recarregar/mudar
  }

  return (
    <>
      <Toaster richColors position="top-center" />
      <div className="min-h-screen bg-background flex flex-col">
        {/* Header */}
        <header className="bg-card border-b border-border py-4">
          <div className="container mx-auto px-4 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="font-display font-bold text-primary-foreground text-lg">KC</span>
              </div>
              <span className="font-display font-bold text-xl text-foreground">
                Kar<span className="text-primary">Cash</span>
              </span>
            </a>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Lock className="w-4 h-4 text-primary" />
              <span>COMPRA SEGURA</span>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 py-8 md:py-12">
          <div className="container mx-auto px-4 max-w-lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Order Summary */}
              <div className="card-elevated mb-8">
                <h2 className="font-display font-bold text-lg text-foreground mb-4">
                  Resumo do Pedido
                </h2>

                <div className="flex items-center justify-between py-4 border-b border-border">
                  <div>
                    <p className="font-medium text-foreground">Assinatura Mensal VIP</p>
                    <p className="text-sm text-muted-foreground">Acesso ao grupo exclusivo</p>
                  </div>
                  <div className="text-right">
                    <p className="text-muted-foreground line-through text-sm">R$ 499,94</p>
                    <p className="font-display font-bold text-xl text-primary">R$ 49,94</p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4">
                  <span className="font-medium text-foreground">Total:</span>
                  <span className="font-display font-bold text-2xl text-foreground">R$ 49,94</span>
                </div>

                <div className="mt-4 p-3 bg-primary/10 rounded-lg border border-primary/20">
                  <p className="text-sm text-primary font-medium text-center">
                    🔥 Você está economizando R$ 450,00 (90% OFF)
                  </p>
                </div>
              </div>

              {/* Form */}
              <div className="card-elevated">
                <h2 className="font-display font-bold text-lg text-foreground mb-6">
                  Seus Dados
                </h2>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground mb-2 block">Nome Completo</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Seu nome completo"
                              {...field}
                              className="bg-input border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                              disabled={isLoading}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground mb-2 block">E-mail</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="seu@email.com"
                              {...field}
                              className="bg-input border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                              disabled={isLoading}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground mb-2 block">WhatsApp (com DDD)</FormLabel>
                          <FormControl>
                            <InputMask
                              mask="(99) 99999-9999"
                              value={field.value}
                              onChange={field.onChange}
                              disabled={isLoading}
                            >
                              {(inputProps: any) => (
                                <Input
                                  {...inputProps}
                                  type="tel"
                                  placeholder="(00) 00000-0000"
                                  className="bg-input border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                                />
                              )}
                            </InputMask>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />


                    <motion.div
                      initial={false}
                      animate={isValid ? { opacity: 1, y: 0 } : { opacity: 0.5, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-full"
                    >
                      <Button
                        type="submit"
                        className={`w-full py-4 h-auto rounded-xl font-display font-bold text-lg transition-all ${isValid && !isLoading
                          ? "btn-primary-cta"
                          : "bg-muted text-muted-foreground cursor-not-allowed"
                          }`}
                        disabled={!isValid || isLoading}
                      >
                        {isLoading ? "SALVANDO..." : "GARANTIR MEU ACESSO VIP"}
                      </Button>
                    </motion.div>
                  </form>
                </Form>
              </div>

              {/* Trust badges */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-muted-foreground text-sm">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  <span>Dados Protegidos</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-5 h-5 text-primary" />
                  <span>SSL Seguro</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span>PCI Compliant</span>
                </div>
              </div>
            </motion.div>
          </div>
        </main>

        {/* Footer */}
        <footer className="py-6 border-t border-border">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} KarCash. Todos os direitos reservados.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Checkout;