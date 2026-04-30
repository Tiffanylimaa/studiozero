import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';

function ProdutosPage() {
  const products = [
    {
      title: "Packs de Repertório",
      desc: "",
      price: "R$ 20,00",
      color: "border-border",
      features: [
        'PDFs Visuais e Práticos',
        'Tablaturas',
        'Parte Teórica Aplicada'
      ]
    },
    {
      title: "Bootcamp Zero ao Play",
      desc: "",
      price: "R$ 30,00",
      color: "border-primary",
      features: [
        'Cronograma de 30 dias: Planejamento diário focado em progresso real',
        'PDFs exclusivos com tablaturas e teoria descomplicada',
        'Seleção dos melhores vídeos com conteúdos práticos',
        'Dicionário Visual de Acordes'
      ]
    },
    {
      title: "Pacote VIP",
      desc: "",
      price: "R$ 50,00",
      color: "border-secondary",
      features: [
        'Experiência Premium',
        'PDFs com tablaturas e teoria',
        'Curadoria de vídeos educativos',
        'Apresentações de slides educativas e dinâmicas para um estudo de alto nível',
        'Guia de Equipamento com custo-benefício'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Produtos | Studio Zero</title>
      </Helmet>

      <Header />

      <main className="pt-32 pb-20">
        <section className="px-6 mb-20 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl mb-6"
          >
            Arsenal
          </motion.h1>
          <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
            Ferramentas forjadas para acelerar seu aprendizado. Escolha seu caminho.
          </p>
        </section>

        <section className="px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {products.map((prod, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`bg-card border ${prod.color} p-10 flex flex-col relative overflow-hidden group`}
              >
                {/* Subtle background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                
                <h2 className="text-3xl mb-4 relative z-10">{prod.title}</h2>
                
                {prod.desc && (
                  <p className="text-muted-foreground font-light mb-8 min-h-[60px] relative z-10">
                    {prod.desc}
                  </p>
                )}
                
                <ul className={`space-y-4 mb-12 flex-grow relative z-10 ${!prod.desc ? 'mt-4' : ''}`}>
                  {prod.features.map((feat, j) => (
                    <li key={j} className="flex items-start text-sm font-light text-foreground/80">
                      <Check className="w-5 h-5 text-primary mr-3 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto relative z-10">
                  <div className="text-4xl font-syne font-bold mb-10 text-white">
                    {prod.price}
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-sm py-6 font-syne uppercase tracking-wider">
                    Adquirir
                  </Button>
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
