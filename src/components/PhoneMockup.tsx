import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const mockCards = [
  { name: "Civic EXL", year: "2022", fipe: "R$ 145.000", price: "R$ 98.000", profit: "+48%" },
  { name: "Corolla XEI", year: "2023", fipe: "R$ 165.000", price: "R$ 115.000", profit: "+43%" },
  { name: "HB20 Vision", year: "2023", fipe: "R$ 78.000", price: "R$ 52.000", profit: "+50%" },
  { name: "Onix Plus", year: "2022", fipe: "R$ 82.000", price: "R$ 58.000", profit: "+41%" },
  { name: "T-Cross", year: "2023", fipe: "R$ 135.000", price: "R$ 95.000", profit: "+42%" },
];

export const PhoneMockup = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % mockCards.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="phone-mockup w-[280px] h-[560px] md:w-[320px] md:h-[640px] float-animation"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      {/* Phone notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-background rounded-b-2xl z-10" />
      
      {/* Screen content */}
      <div className="h-full pt-10 pb-4 px-4 overflow-hidden">
        {/* WhatsApp header simulation */}
        <div className="flex items-center gap-3 mb-4 pb-3 border-b border-border">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="text-primary font-bold text-sm">KC</span>
          </div>
          <div>
            <p className="font-display font-bold text-sm text-foreground">KarCash VIP</p>
            <p className="text-xs text-muted-foreground">+5.000 membros</p>
          </div>
        </div>

        {/* Animated cards */}
        <div className="space-y-3 relative h-[calc(100%-80px)]">
          {mockCards.map((card, index) => (
            <motion.div
              key={index}
              className={`absolute w-full transition-all duration-500 ${
                index === activeIndex ? "opacity-100 z-10" : "opacity-30 z-0"
              }`}
              style={{
                top: `${index * 15}%`,
                transform: index === activeIndex ? "scale(1)" : "scale(0.95)",
              }}
              animate={{
                opacity: index === activeIndex ? 1 : 0.3,
                scale: index === activeIndex ? 1 : 0.95,
                y: index === activeIndex ? 0 : 10,
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-navy-light rounded-xl p-3 border border-border/50">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="font-display font-bold text-sm text-foreground">{card.name}</p>
                    <p className="text-xs text-muted-foreground">{card.year}</p>
                  </div>
                  <span className="profit-badge text-xs py-0.5 px-2">{card.profit}</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xs text-muted-foreground line-through">{card.fipe}</p>
                    <p className="text-primary font-bold text-lg">{card.price}</p>
                  </div>
                  <div className="text-gold text-xs font-bold">
                    🔥 DISPONÍVEL
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
