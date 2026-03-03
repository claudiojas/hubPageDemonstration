import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface CarCardProps {
  name: string;
  year: string;
  fipePrice: number;
  ourPrice: number;
  image: string;
}

export const CarCard = ({ name, year, fipePrice, ourPrice, image }: CarCardProps) => {
  const formatCurrency = (value: number) => {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };

  return (
    <motion.div
      className="card-car group"
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image Container with Provenance Tag */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute top-3 left-3 z-10">
          <span className="bg-emerald-500/90 text-white text-[10px] sm:text-xs font-bold px-2 py-1 rounded-full shadow-lg backdrop-blur-sm border border-emerald-400/20 flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
              <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.491 4.491 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
            </svg>
            DOC: SEM SINISTRO
          </span>
        </div>

        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />

        <div className="absolute bottom-3 left-4 right-4">
          <h3 className="font-display font-bold text-white text-lg leading-tight truncate">{name}</h3>
          <p className="text-gray-300 text-sm">{year}</p>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Anchoring: FIPE vs Our Price */}
        <div className="flex justify-between items-end pb-3 border-b border-white/5">
          <div>
            <p className="text-xs text-muted-foreground mb-0.5">FIPE (Mercado)</p>
            <p className="text-sm line-through text-muted-foreground decoration-destructive/60">
              {formatCurrency(fipePrice)}
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs text-primary font-medium mb-0.5 flex items-center justify-end gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              OFERTA VIP
            </p>
            <p className="font-display font-bold text-xl text-white">
              {formatCurrency(ourPrice)}
            </p>
          </div>
        </div>

        {/* Specific Profit Calculation */}
        <div className="bg-secondary/10 rounded-lg p-3 border border-secondary/20">
          <div className="flex justify-between items-center mb-1">
            <p className="text-xs text-secondary uppercase font-bold tracking-wider">Seu Lucro Estimado</p>
            <span className="text-xs text-secondary/80 font-mono">MARGEM: {Math.round(((fipePrice - ourPrice) / fipePrice) * 100)}%</span>
          </div>
          <p className="font-display font-bold text-2xl text-secondary">
            {formatCurrency(fipePrice - ourPrice)}
          </p>
        </div>

        <a href="/checkout" className="block w-full">
          <button className="w-full py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white text-sm font-medium transition-colors border border-white/5 group-hover:border-primary/50 group-hover:text-primary flex items-center justify-center gap-2">
            VER DETALHES DO LOTE
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </a>
      </div>
    </motion.div>
  );
};
