import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface CancellationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const cancellationReasons = [
  { id: "region", label: "Ofertas não eram da minha região." },
  { id: "price", label: "Valor da assinatura está alto." },
  { id: "bought", label: "Já comprei meu carro." },
  { id: "few-offers", label: "Poucas ofertas diárias." },
  { id: "other", label: "Outro" },
];

export const CancellationModal = ({ isOpen, onClose }: CancellationModalProps) => {
  const [selectedReason, setSelectedReason] = useState<string>("");
  const [otherReason, setOtherReason] = useState<string>("");
  const [retentionSuggestion, setRetentionSuggestion] = useState<string>("");
  const [showRedirectMessage, setShowRedirectMessage] = useState(false);

  const handleConfirmCancellation = () => {
    setShowRedirectMessage(true);
  };

  const handleRedirect = () => {
    // External gateway link - replace with actual URL
    window.open("https://gateway.example.com/cancel", "_blank");
    onClose();
    setShowRedirectMessage(false);
    setSelectedReason("");
    setOtherReason("");
    setRetentionSuggestion("");
  };

  const handleClose = () => {
    onClose();
    setShowRedirectMessage(false);
    setSelectedReason("");
    setOtherReason("");
    setRetentionSuggestion("");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, type: "spring", damping: 25 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div 
              className="bg-card border border-border rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="font-display font-bold text-lg text-foreground">
                    Kar<span className="text-primary">Cash</span>
                  </span>
                </div>
                <button
                  onClick={handleClose}
                  className="p-2 rounded-lg hover:bg-muted transition-colors"
                >
                  <X className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                {!showRedirectMessage ? (
                  <>
                    {/* Title */}
                    <div className="text-center mb-6">
                      <h2 className="font-display font-bold text-xl md:text-2xl text-foreground mb-2">
                        Poxa, que pena! 😢
                      </h2>
                      <p className="text-muted-foreground">
                        Sentimos muito em ver você ir embora.
                      </p>
                    </div>

                    {/* Feedback Form */}
                    <div className="space-y-6">
                      <div>
                        <p className="text-foreground font-medium mb-4">
                          Seu o feedback é muito importante.<br />
                          <span className="text-muted-foreground font-normal text-sm">
                            Responda rapidinho?
                          </span>
                        </p>

                        <div className="space-y-2 mb-4">
                          <Label className="text-sm text-muted-foreground">
                            Qual principal motivo?
                          </Label>
                          <RadioGroup
                            value={selectedReason}
                            onValueChange={setSelectedReason}
                            className="space-y-3"
                          >
                            {cancellationReasons.map((reason) => (
                              <div
                                key={reason.id}
                                className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:border-primary/50 transition-colors cursor-pointer"
                              >
                                <RadioGroupItem value={reason.id} id={reason.id} />
                                <Label
                                  htmlFor={reason.id}
                                  className="text-sm text-foreground cursor-pointer flex-1"
                                >
                                  {reason.label}
                                </Label>
                              </div>
                            ))}
                          </RadioGroup>
                        </div>

                        {selectedReason === "other" && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mb-4"
                          >
                            <Textarea
                              placeholder="Conte-nos mais sobre o motivo..."
                              value={otherReason}
                              onChange={(e) => setOtherReason(e.target.value)}
                              className="bg-muted border-border resize-none"
                              rows={3}
                            />
                          </motion.div>
                        )}
                      </div>

                      <div>
                        <Label className="text-sm text-muted-foreground mb-2 block">
                          O que faria você considerar ficar? (opcional)
                        </Label>
                        <Textarea
                          placeholder="Sua sugestão nos ajuda a melhorar..."
                          value={retentionSuggestion}
                          onChange={(e) => setRetentionSuggestion(e.target.value)}
                          className="bg-muted border-border resize-none"
                          rows={3}
                        />
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="mt-8 flex flex-col gap-3">
                      <Button
                        variant="outline"
                        onClick={handleConfirmCancellation}
                        disabled={!selectedReason}
                        className="w-full border-destructive/50 text-destructive hover:bg-destructive/10 hover:text-destructive"
                      >
                        Confirmar Cancelamento
                      </Button>
                      <Button
                        onClick={handleClose}
                        className="w-full btn-primary-cta"
                      >
                        Quero Continuar Membro VIP
                      </Button>
                    </div>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                      <MessageCircle className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-foreground mb-2">
                      Você será redirecionado
                    </h3>
                    <p className="text-muted-foreground text-sm mb-6">
                      Você será redirecionado para o nosso gateway para concluir o cancelamento.
                    </p>
                    <div className="space-y-3">
                      <Button
                        onClick={handleRedirect}
                        variant="outline"
                        className="w-full border-border hover:bg-muted"
                      >
                        Ir para o Gateway de Cancelamento
                      </Button>
                      <Button
                        onClick={handleClose}
                        className="w-full btn-primary-cta"
                      >
                        Mudei de ideia, quero ficar!
                      </Button>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
