import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const WAVEFORM_BARS = [
  { h: 40,  delay: 0.00 }, { h: 110, delay: 0.10 }, { h: 160, delay: 0.15 },
  { h: 90,  delay: 0.20 }, { h: 200, delay: 0.05 }, { h: 120, delay: 0.25 },
  { h: 60,  delay: 0.30 }, { h: 180, delay: 0.08 }, { h: 140, delay: 0.18 },
  { h: 220, delay: 0.00 }, { h: 100, delay: 0.22 }, { h: 170, delay: 0.12 },
  { h: 80,  delay: 0.28 }, { h: 150, delay: 0.06 }, { h: 190, delay: 0.16 },
  { h: 70,  delay: 0.24 }, { h: 130, delay: 0.10 }, { h: 210, delay: 0.02 },
  { h: 110, delay: 0.20 }, { h: 160, delay: 0.14 }, { h: 200, delay: 0.04 },
  { h: 120, delay: 0.26 }, { h: 180, delay: 0.09 }, { h: 90,  delay: 0.19 },
  { h: 230, delay: 0.01 }, { h: 140, delay: 0.23 }, { h: 170, delay: 0.13 },
  { h: 60,  delay: 0.29 }, { h: 190, delay: 0.07 }, { h: 100, delay: 0.17 },
  { h: 150, delay: 0.11 }, { h: 80,  delay: 0.21 }, { h: 130, delay: 0.15 },
  { h: 50,  delay: 0.27 }, { h: 110, delay: 0.03 }, { h: 40,  delay: 0.25 },
];

function WaveformBar({ height, delay, color }) {
  return (
    <motion.div
      style={{
        width: 4,
        height,
        background: color,
        borderRadius: 2,
        transformOrigin: 'center',
        flexShrink: 0,
      }}
      initial={{ scaleY: 0 }}
      animate={{ scaleY: [0.3, 1, 0.3] }}
      transition={{
        duration: 1.4,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}

function HeroSection({ 
  title, 
  subtitle, 
  ctaText, 
  ctaLink, 
  backgroundImage,
  minHeight = "min-h-[85vh]"
}) {
  return (
    <section 
      className={`relative ${minHeight} flex items-center justify-center overflow-hidden`}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
        backgroundColor: '#000000',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90 z-0"></div>

      {/* Enhanced Waveform Animation */}
      <div
        className="absolute right-0 top-0 bottom-0 w-[42%] flex items-center justify-center z-10 pointer-events-none"
      >
        <div className="flex items-center gap-2 lg:gap-[6px] opacity-60 mix-blend-screen">
          {WAVEFORM_BARS.map((bar, i) => {
            // First 19 bars are RED, remaining 17 are BLUE based on the prompt instructions
            const isRed = i < 19;
            const opacity = 0.4 + (bar.h / 230) * 0.6;
            const color = isRed 
              ? `rgba(232, 32, 42, ${opacity})` 
              : `rgba(34, 96, 204, ${opacity})`;

            return (
              <WaveformBar
                key={i}
                height={bar.h}
                delay={bar.delay}
                color={color}
              />
            );
          })}
        </div>
      </div>
      
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 text-center lg:text-left w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-syne font-bold text-white leading-[1.05] tracking-tighter uppercase">
              {title}
            </h1>
            
            {subtitle && (
              <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl leading-relaxed">
                {subtitle}
              </p>
            )}
            
            {ctaText && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="pt-4"
              >
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white px-12 py-8 rounded-none text-lg font-syne font-bold uppercase tracking-widest active:scale-[0.98] transition-all duration-200"
                  onClick={() => ctaLink && (window.location.href = ctaLink)}
                >
                  {ctaText}
                </Button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;