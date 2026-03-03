import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  icon: ReactNode;
  delay?: number;
}

export const StepCard = ({ number, title, description, icon, delay = 0 }: StepCardProps) => {
  return (
    <motion.div
      className="card-elevated relative text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      {/* Step number */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
        <span className="font-display font-bold text-primary-foreground text-sm">{number}</span>
      </div>

      {/* Icon */}
      <div className="w-16 h-16 mx-auto mb-4 mt-4 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
        {icon}
      </div>

      {/* Content */}
      <h3 className="font-display font-bold text-xl text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
};
