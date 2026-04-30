import React from 'react';
import { motion } from 'framer-motion';

const ACCENT = {
  red: 'rgba(232, 32, 42, 1)',
  blue: 'rgba(34, 96, 204, 1)',
  redGlow: 'rgba(232, 32, 42, 0.12)',
  blueGlow: 'rgba(34, 96, 204, 0.12)'
};

export default function InstrumentCard({ number, icon: Icon, name, description, tag, accent = 'red' }) {
  const accentColor = ACCENT[accent];
  const glowColor = ACCENT[`${accent}Glow`];

  return (
    <motion.div
      className="relative group flex flex-col p-8 bg-[#111111] overflow-hidden min-h-[320px] cursor-pointer"
      whileHover="hover"
      initial="rest"
    >
      {/* Animated Left Border */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-1"
        variants={{
          rest: { backgroundColor: 'rgba(255, 255, 255, 0.05)' },
          hover: { backgroundColor: accentColor }
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />

      {/* Subtle Glow Background on Hover */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        variants={{
          rest: { background: 'radial-gradient(circle at 100% 100%, transparent 0%, transparent 100%)' },
          hover: { background: `radial-gradient(circle at 100% 100%, ${glowColor} 0%, transparent 70%)` }
        }}
        transition={{ duration: 0.5 }}
      />

      <div className="relative z-10 flex justify-between items-start mb-12">
        <span className="font-syne text-4xl font-bold text-muted-foreground/20">{number}</span>
        {Icon && (
          <motion.div
            variants={{
              rest: { color: 'rgba(255, 255, 255, 0.3)' },
              hover: { color: 'rgba(255, 255, 255, 1)' }
            }}
            transition={{ duration: 0.3 }}
          >
            <Icon size={32} strokeWidth={1.5} />
          </motion.div>
        )}
      </div>

      <div className="relative z-10 flex-grow">
        <motion.h3 
          className="font-syne text-3xl font-bold uppercase tracking-wide mb-4"
          variants={{
            rest: { color: 'rgba(232, 230, 225, 0.9)' },
            hover: { color: accentColor }
          }}
          transition={{ duration: 0.3 }}
        >
          {name}
        </motion.h3>
        <p className="text-muted-foreground font-light mb-8 max-w-[90%] leading-relaxed">
          {description}
        </p>
      </div>

      <div className="relative z-10 mt-auto">
        <span 
          className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest border transition-colors duration-300"
          style={{ borderColor: accentColor, color: accentColor }}
        >
          {tag}
        </span>
      </div>
    </motion.div>
  );
}