import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como funciona o acesso ao grupo VIP?",
    answer:
      "Após a confirmação do pagamento, você receberá automaticamente o link de acesso ao nosso grupo exclusivo no WhatsApp. Lá, você terá acesso a mais de 10 ofertas diárias de carros com valores até 50% abaixo da tabela FIPE.",
  },
  {
    question: "Os carros são revisados e documentados?",
    answer:
      "Sim! Todas as ofertas passam por uma curadoria rigorosa. Trabalhamos apenas com veículos sem pendências financeiras, documentação em dia, e histórico verificado. Você negocia diretamente com o vendedor.",
  },
  {
    question: "Posso financiar os veículos?",
    answer:
      "Com certeza! A maioria dos carros disponíveis são financiáveis por qualquer banco. Você negocia as condições diretamente, sem intermediários.",
  },
  {
    question: "Preciso de CNPJ para comprar?",
    answer:
      "Não! Você pode adquirir os veículos como pessoa física. Nosso grupo é aberto tanto para investidores individuais quanto para revendedores.",
  },
  {
    question: "Como cancelo minha assinatura?",
    answer:
      "Simples! Sem burocracia. Você pode cancelar a qualquer momento diretamente pelo WhatsApp ou e-mail. Não existe fidelidade ou multa.",
  },
  {
    question: "Quantas ofertas recebo por dia?",
    answer:
      "Em média, enviamos 10 ofertas por dia, totalizando mais de 300 oportunidades por mês. Cada oferta é selecionada com margens de lucro entre 20% e 50%.",
  },
];

export const FAQSection = () => {
  return (
    <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
      {faqs.map((faq, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className="border-border"
        >
          <AccordionTrigger className="text-left font-display font-bold text-foreground hover:text-primary transition-colors py-5">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
