import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';

function ProdutosPage() {
  const instruments = [
    { name: 'Guitarra', path: '/guitarra' },
    { name: 'Violão', path: '/violao' },
    { name: 'Baixo', path: '/baixo' },
    { name: 'Bateria', path: '/bateria' },
    { name: 'Teclado', path: '/teclado' },
    { name: 'Ukulele', path: '/ukulele' },
  ];

  const productLines = [
    {
      title: "Packs de Repertório",
      desc: "Materiais visuais e práticos para estudar músicas específicas por instrumento.",
      price: "A partir de R$ 20,00",
      color: "border-border",
      features: [
        'PDFs visuais e práticos',
        'Tablaturas organizadas',
        'Parte teórica aplicada'
      ]
    },
    {
      title: "Bootcamp Zero ao Play",
      desc: "Trilhas guiadas para sair da teoria solta e seguir um plano de prática com começo, meio e fim.",
      price: "A partir de R$ 30,00",
      color: "border-primary",
      features: [
        'Cronograma de 30 dias',
        'Exercícios por etapa',
        'Materiais de apoio'
      ]
    },
    {
      title: "Pacote VIP",
      desc: "Uma experiência mais completa para quem quer estudar com mais direção, repertório e apoio visual.",
      price: "A partir de R$ 50,00",
      color: "border-secondary",
      features: [
        'PDFs com tablaturas e teoria',
        'Curadoria de vídeos educativos',
        'Guia de equipamento',
        'Cronograma de estudo'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Produtos | Studio Zero</title>
        <meta
          name="description"
          content="Catálogo de materiais Studio Zero por linha de estudo e instrumento: packs de repertório, bootcamps e pacotes VIP."
        />
      </Helmet>

      <Header />

      <main className="pt-32 pb-20">
        <section className="px-6 mb-20 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl mb-6"
          >
            Produtos Studio Zero
          </motion.h1>
          <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto">
            Escolha uma linha de estudo e depois selecione o instrumento que combina com o seu momento.
          </p>
        </section>

        <section className="px-6 max-w-7xl mx-auto">
          <div className="space-y-10">
            {productLines.map((line, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`bg-card border ${line.color} p-6 md:p-8 relative overflow-hidden group`}
              >
                {/* Subtle background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8">
                  <div className="flex flex-col">
                    <h2 className="text-2xl md:text-3xl mb-4">{line.title}</h2>
                    <p className="text-muted-foreground font-light mb-6 leading-relaxed">
                      {line.desc}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {line.features.map((feat, j) => (
                        <li key={j} className="flex items-start text-sm font-light text-foreground/80">
                          <Check className="w-5 h-5 text-primary mr-3 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-6 border-t border-border/50">
                      <div className="text-3xl font-syne font-bold mb-6 text-white">
                        {line.price}
                      </div>
                      <Button disabled className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white rounded-sm px-5 md:px-7 py-4 md:py-5 min-h-[3rem] font-syne uppercase tracking-wider text-sm md:text-base whitespace-normal text-center leading-tight">
                        Comprar em breve
                      </Button>
                    </div>
                  </div>

                  <div>
                    <p className="text-primary font-syne uppercase tracking-widest text-xs mb-5">
                      Opções por instrumento
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {instruments.map((instrument) => (
                        <Link
                          key={`${line.title}-${instrument.path}`}
                          to={instrument.path}
                          className="border border-border bg-background/60 px-5 py-4 font-syne uppercase tracking-wider text-sm text-foreground hover:border-primary hover:text-primary transition-colors"
                        >
                          {instrument.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default ProdutosPage;
