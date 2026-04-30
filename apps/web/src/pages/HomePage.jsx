import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';

const WAVEFORM_BARS = [
  { h: 40, delay: 0.00 }, { h: 110, delay: 0.10 }, { h: 160, delay: 0.15 },
  { h: 90, delay: 0.20 }, { h: 200, delay: 0.05 }, { h: 120, delay: 0.25 },
  { h: 60, delay: 0.30 }, { h: 180, delay: 0.08 }, { h: 140, delay: 0.18 },
  { h: 220, delay: 0.00 }, { h: 100, delay: 0.22 }, { h: 170, delay: 0.12 },
  { h: 80, delay: 0.28 }, { h: 150, delay: 0.06 }, { h: 190, delay: 0.16 },
  { h: 70, delay: 0.24 }, { h: 130, delay: 0.10 }, { h: 210, delay: 0.02 },
  { h: 110, delay: 0.20 }, { h: 160, delay: 0.14 }, { h: 200, delay: 0.04 },
  { h: 120, delay: 0.26 }, { h: 180, delay: 0.09 }, { h: 90, delay: 0.19 },
  { h: 230, delay: 0.01 }, { h: 140, delay: 0.23 }, { h: 170, delay: 0.13 },
  { h: 60, delay: 0.29 }, { h: 190, delay: 0.07 }, { h: 100, delay: 0.17 },
  { h: 150, delay: 0.11 }, { h: 80, delay: 0.21 }, { h: 130, delay: 0.15 },
  { h: 50, delay: 0.27 }, { h: 110, delay: 0.03 }, { h: 40, delay: 0.25 }
];

function WaveformBar({ height, delay, color }) {
  return (
    <motion.div 
      style={{
        width: 4, height, background: color, borderRadius: 2, transformOrigin: 'center', flexShrink: 0
      }} 
      initial={{ scaleY: 0 }} 
      animate={{ scaleY: [0.3, 1, 0.3] }} 
      transition={{ duration: 1.4, delay, repeat: Infinity, ease: 'easeInOut' }} 
    />
  );
}

function HomePage() {
  const instruments = [
    { name: "Guitarra", desc: "Riffs e solos sem enrolação.", colorClass: "instrument-card-red", link: "/guitarra" },
    { name: "Bateria", desc: "Groove e coordenação visual.", colorClass: "instrument-card-red", link: "/bateria" },
    { name: "Baixo", desc: "A base de tudo, direto ao ponto.", colorClass: "instrument-card-blue", link: "/baixo" },
    { name: "Teclado", desc: "Harmonia visual e prática.", colorClass: "instrument-card-blue", link: "/teclado" },
    { name: "Violão", desc: "Acordes e técnicas essenciais.", colorClass: "instrument-card-red", link: "/violao" },
    { name: "Ukulele", desc: "Diversão e musicalidade.", colorClass: "instrument-card-blue", link: "/ukulele" }
  ];
  
  const steps = [
    { num: "01", title: "Aprenda", desc: "Conceitos visuais diretos." },
    { num: "02", title: "Pratique", desc: "Exercícios focados no repertório." },
    { num: "03", title: "Domine", desc: "Técnica aplicada à música." },
    { num: "04", title: "Toque", desc: "Seu primeiro show começa aqui." }
  ];
  
  const products = [
    {
      title: "Packs de Repertório",
      price: "R$ 20,00",
      checkoutUrl: "", // Substituir pelo link de checkout da Kiwify.
      desc: "",
      features: [
        'PDFs Visuais e Práticos',
        'Tablaturas',
        'Parte Teórica Aplicada'
      ]
    },
    {
      title: "Bootcamp Zero ao Play",
      price: "R$ 30,00",
      checkoutUrl: "", // Substituir pelo link de checkout da Kiwify.
      desc: "",
      features: [
        'Cronograma de 30 dias: Planejamento diário focado em progresso real',
        'PDFs exclusivos com tablaturas e teoria descomplicada',
        'Seleção dos melhores vídeos com conteúdos práticos',
        'Dicionário Visual de Acordes'
      ]
    },
    {
      title: "Pacote VIP",
      price: "R$ 50,00",
      checkoutUrl: "", // Substituir pelo link de checkout da Kiwify.
      desc: "",
      features: [
        'Experiência Premium',
        'PDFs com tablaturas e teoria',
        'Curadoria de vídeos educativos',
        'Apresentações de slides educativas e dinâmicas para um estudo de alto nível',
        'Guia de Equipamento com custo-benefício',
        'Cronograma de 30 dias',
        'Dicionário Visual de Acordes'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
      <Helmet>
        <title>Studio Zero | Do zero ao play</title>
      </Helmet>

      <Header />

      <main>
        {/* SECTION 1: HERO */}
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(232,32,42,0.05)_0%,transparent_70%)] pointer-events-none" />
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut" }} 
            className="relative z-10 text-center max-w-6xl mx-auto space-y-12"
          >
            <div className="flex items-center justify-center gap-1 md:gap-[6px] mb-12 h-32 opacity-80 mix-blend-screen">
              {WAVEFORM_BARS.map((bar, i) => {
                const isRed = i < 19;
                const opacity = 0.4 + bar.h / 230 * 0.6;
                const color = isRed ? `rgba(232, 32, 42, ${opacity})` : `rgba(34, 96, 204, ${opacity})`;
                return <WaveformBar key={i} height={bar.h * 0.5} delay={bar.delay} color={color} />;
              })}
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-syne font-bold leading-[0.85] tracking-tighter uppercase">
              Música de<br />forma visual.
            </h1>
            
            <p className="text-2xl md:text-3xl font-light text-muted-foreground tracking-wide">
              Do zero ao play.
            </p>
          </motion.div>
        </section>

        {/* SECTION 2: INSTRUMENTS GRID */}
        <section className="py-32 px-6 bg-background border-t border-border">
          <div className="max-w-7xl mx-auto">
            <h2 className="mb-16 text-center">Escolha seu instrumento</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {instruments.map((inst, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ delay: i * 0.1 }}
                >
                  <Link to={inst.link} className={`instrument-card ${inst.colorClass} group block`}>
                    <h3 className="instrument-title group-hover:text-primary">{inst.name}</h3>
                    <p className="instrument-subtitle">{inst.desc}</p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: METHOD */}
        <section className="py-32 px-6 bg-section-contrast border-y border-border">
          <div className="max-w-7xl mx-auto">
            <h2 className="mb-20 text-center">O Método Zero</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
              <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-border" />
              {steps.map((step, i) => (
                <div key={i} className="relative z-10 bg-section-contrast pt-4">
                  <span className="font-syne text-6xl font-bold text-muted-foreground/30 block mb-6">
                    {step.num}
                  </span>
                  <h3 className="text-2xl mb-4 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground font-light">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: PRODUCTS */}
        <section className="py-32 px-6 bg-background">
          <div className="max-w-7xl mx-auto">
            <h2 className="mb-16 text-center">Arsenal</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.map((prod, i) => (
                <div key={i} className="bg-card border border-border p-10 flex flex-col h-full hover:border-primary/50 transition-colors">
                  <h3 className="text-2xl mb-4">{prod.title}</h3>
                  
                  {prod.desc && (
                    <p className="text-muted-foreground font-light mb-8">{prod.desc}</p>
                  )}
                  
                  <ul className={`space-y-4 mb-12 flex-grow ${!prod.desc ? 'mt-4' : ''}`}>
                    {prod.features.map((feat, j) => (
                      <li key={j} className="flex items-start text-sm text-foreground/80">
                        <Check className="w-5 h-5 text-primary mr-3 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-6 border-t border-border/50">
                    <div className="text-3xl font-syne font-bold mb-8">{prod.price}</div>
                    {prod.checkoutUrl ? (
                      <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white rounded-sm py-6 font-syne uppercase tracking-wider">
                        <a href={prod.checkoutUrl} target="_blank" rel="noopener noreferrer">
                          Comprar agora
                        </a>
                      </Button>
                    ) : (
                      <Button disabled className="w-full bg-primary hover:bg-primary/90 text-white rounded-sm py-6 font-syne uppercase tracking-wider">
                        Comprar em breve
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: FINAL CTA */}
        <section className="py-40 px-6 bg-background border-t border-border text-center">
          <div className="max-w-3xl mx-auto space-y-10">
            <h2 className="text-5xl md:text-7xl">Sua vez de tocar.</h2>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;
