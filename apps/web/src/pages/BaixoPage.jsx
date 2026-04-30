import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import InstrumentHero from '@/components/InstrumentHero.jsx';
import { Button } from '@/components/ui/button';

function BaixoPage() {
  const products = [
    {
      title: "PACKS DE REPERTÓRIO",
      price: "R$ 20,00",
      features: [
        'PDFs Visuais e Práticos',
        'Tablaturas',
        'Parte Teórica Aplicada'
      ]
    },
    {
      title: "BOOTCAMP ZERO AO PLAY",
      price: "R$ 30,00",
      features: [
        'Cronograma de 30 dias: Planejamento diário focado em progresso real',
        'PDFs exclusivos com tablaturas e teoria descomplicada',
        'Seleção dos melhores vídeos com conteúdos práticos',
        'Dicionário Visual de Acordes'
      ]
    },
    {
      title: "PACOTE VIP",
      price: "R$ 50,00",
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
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Helmet>
        <title>Baixo | Studio Zero</title>
      </Helmet>

      <Header />

      <InstrumentHero 
        instrumentName="BAIXO" 
        description="Groove e ritmo. O alicerce que faz a música dançar." 
      />

      <main className="flex-grow py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border p-10 flex flex-col h-full hover:border-primary/50 transition-colors group"
              >
                <h2 className="text-2xl font-syne font-bold uppercase mb-8 group-hover:text-primary transition-colors">
                  {product.title}
                </h2>
                
                <ul className="space-y-4 mb-12 flex-grow">
                  {product.features.map((feat, j) => (
                    <li key={j} className="flex items-start text-sm text-foreground/80">
                      <Check className="w-5 h-5 text-primary mr-3 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <div className="text-4xl font-syne font-bold mb-8 text-white">
                    {product.price}
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-none py-6 font-syne uppercase tracking-widest text-lg transition-all active:scale-[0.98]">
                    COMPRAR
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default BaixoPage;