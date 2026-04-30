import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from './useScrollReveal.js';

export default function ScrollReveal({ children, delay = 0, direction = "up", className = "" }) {
  const { ref, isInView } = useScrollReveal();

  const getVariants = () => {
    switch (direction) {
      case "up": 
        return { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };
      case "down": 
        return { hidden: { opacity: 0, y: -40 }, visible: { opacity: 1, y: 0 } };
      case "left": 
        return { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } };
      case "right": 
        return { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } };
      case "fade": 
        return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
      default: 
        return { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={getVariants()}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ 
        duration: 0.8, 
        delay, 
        ease: [0.22, 1, 0.36, 1] 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}