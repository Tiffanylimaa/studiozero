import React from 'react';
import { motion } from 'framer-motion';

export default function InstrumentHero({ instrumentName, description }) {
  return (
    <section className="w-full bg-black text-white pt-40 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center md:text-left"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-syne font-bold uppercase mb-6 tracking-tight">
            {instrumentName}
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl leading-relaxed">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}