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
      price: "A partir de R$ 20,00",
      desc: "Produto de entrada para começar pelo repertório com material visual, direto e prático.",
      cta: "Ver packs disponíveis",
      label: "Comece por aqui",
      features: [
        'PDFs visuais e práticos',
        'Tablaturas organizadas',
        'Parte teórica aplicada',
        'Opções por instrumento'
      ]
    },
    {
      title: "Bootcamp Zero ao Play",
      price: "A partir de R$ 30,00",
      desc: "Trilha prática de 30 dias para sair da prática aleatória e organizar sua evolução.",
      cta: "Ver bootcamps",
      label: "Plano de prática",
      features: [
        'Cronograma de 30 dias',
        'Exercícios por etapa',
        'Materiais de apoio',
        'Opções por instrumento'
      ]
    },
    {
      title: "Pacote VIP",
      price: "A partir de R$ 50,00",
      desc: "A experiência mais completa e o melhor custo-benefício para estudar com direção.",
      cta: "Ver pacotes VIP",
      label: "Melhor escolha",
      features: [
        'PDFs com tablaturas e teoria',
        'Curadoria de vídeos educativos',
        'Guia de equipamento',
        'Cronograma de estudo',
        'Opções por instrumento'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
      <Helmet>
        <title>Studio Zero | Do zero ao play</title>
        <meta
          name="description"
          content="Materiais digitais de música para estudar por repertório, trilha prática ou experiência completa no Studio Zero."
        />
      </Helmet>

      <Header />

      <main>
        {/* SECTION 1: HERO */}
        <section className="relative min-h-[84svh] md:min-h-[88svh] flex flex-col items-center justify-center pt-24 pb-10 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(232,32,42,0.05)_0%,transparent_70%)] pointer-events-none" />
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut" }} 
            className="relative z-10 text-center max-w-6xl mx-auto space-y-6 md:space-y-8"
          >
            <div className="flex items-center justify-center gap-1 md:gap-[6px] mb-5 md:mb-6 h-16 md:h-24 opacity-80 mix-blend-screen">
              {WAVEFORM_BARS.map((bar, i) => {
                const isRed = i < 19;
                const opacity = 0.4 + bar.h / 230 * 0.6;
                const color = isRed ? `rgba(232, 32, 42, ${opacity})` : `rgba(34, 96, 204, ${opacity})`;
                return <WaveformBar key={i} height={bar.h * 0.43} delay={bar.delay} color={color} />;
              })}
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] xl:text-[7.5rem] font-syne font-bold leading-[0.95] tracking-tighter uppercase">
              Música de<br />forma visual.
            </h1>
            
            <p className="text-xl md:text-2xl font-light text-muted-foreground tracking-wide">
              Do zero ao play.
            </p>

            <Link to="/produtos" className="inline-block">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-sm px-6 md:px-8 py-4 md:py-5 font-syne uppercase tracking-widest whitespace-normal text-center leading-tight">
                Ver linhas de estudo
              </Button>
            </Link>
          </motion.div>
        </section>

        {/* SECTION 2: INSTRUMENTS GRID */}
        <section className="py-16 md:py-20 px-6 bg-background border-t border-border">
          <div className="max-w-7xl mx-auto">
            <h2 className="mb-8 md:mb-10 text-center">Escolha seu instrumento</h2>
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
        <section className="py-16 md:py-20 px-6 bg-section-contrast border-y border-border">
          <div className="max-w-7xl mx-auto">
            <h2 className="mb-10 md:mb-12 text-center">O Método Zero</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10 relative">
              <div className="hidden md:block absolute top-8 left-0 w-full h-[1px] bg-border" />
              {steps.map((step, i) => (
                <div key={i} className="relative z-10 bg-section-contrast pt-2">
                  <span className="font-syne text-5xl md:text-6xl font-bold text-muted-foreground/30 block mb-4">
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
        <section className="py-16 md:py-20 px-6 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 md:mb-10 max-w-4xl mx-auto">
              <h2 className="mb-4">Escolha sua forma de estudar</h2>
              <p className="text-xl md:text-2xl text-foreground font-light mb-4">
                Três formas de estudar música com direção: por repertório, por trilha prática ou por experiência completa.
              </p>
              <p className="text-muted-foreground font-light">
                Cada linha reúne materiais para diferentes instrumentos, níveis de prática e objetivos de estudo.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {products.map((prod, i) => (
                <div key={i} className="bg-card border border-border p-5 md:p-7 flex flex-col h-full hover:border-primary/50 transition-colors">
                  {prod.label && (
                    <p className="text-primary font-syne uppercase tracking-widest text-xs mb-4">
                      {prod.label}
                    </p>
                  )}
                  <h3 className="text-xl md:text-2xl mb-4">{prod.title}</h3>
                  
                  {prod.desc && (
                    <p className="text-muted-foreground font-light mb-6">{prod.desc}</p>
                  )}
                  
                  <ul className={`space-y-3 mb-6 flex-grow ${!prod.desc ? 'mt-3' : ''}`}>
                    {prod.features.map((feat, j) => (
                      <li key={j} className="flex items-start text-sm text-foreground/80">
                        <Check className="w-5 h-5 text-primary mr-3 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-6 border-t border-border/50">
                    <div className="text-2xl md:text-3xl font-syne font-bold mb-5">{prod.price}</div>
                    <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white rounded-sm px-4 py-4 min-h-[3.1rem] font-syne uppercase tracking-wider text-sm md:text-base whitespace-normal text-center leading-tight">
                      <Link to="/produtos">
                        {prod.cta}
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-sm md:text-base text-muted-foreground font-light mt-10 max-w-2xl mx-auto">
              Na próxima etapa, você escolhe o instrumento e o tipo de material ideal para o seu momento.
            </p>
          </div>
        </section>

        {/* SECTION 5: FINAL CTA */}
        <section className="py-16 md:py-20 px-6 bg-background border-t border-border text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl md:text-6xl">Sua vez de tocar.</h2>
            <Button asChild className="bg-primary hover:bg-primary/90 text-white rounded-sm px-6 md:px-8 py-4 md:py-5 font-syne uppercase tracking-widest whitespace-normal text-center leading-tight">
              <Link to="/produtos">
                Ver materiais
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;
