import React from 'react';
import { motion } from 'framer-motion';

export default function InstrumentHero({ instrumentName, description }) {
  return (
    <section className="w-full bg-black text-white pt-28 md:pt-32 pb-12 md:pb-14 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-syne font-bold uppercase mb-4 tracking-tight">
            {instrumentName}
          </h1>
          <p className="text-lg md:text-xl text-gray-400 font-light max-w-2xl leading-relaxed">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
