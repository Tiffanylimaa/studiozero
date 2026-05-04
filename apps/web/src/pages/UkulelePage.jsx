import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import InstrumentHero from '@/components/InstrumentHero.jsx';
import { Button } from '@/components/ui/button';

function UkulelePage() {
  const products = [
    {
      title: "Packs de Repertório para Ukulele",
      price: "R$ 20,00",
      checkoutUrl: "https://pay.lowify.com.br/checkout?product_id=GpM4a1",
      features: [
        'PDFs Visuais e Práticos',
        'Tablaturas',
        'Parte Teórica Aplicada'
      ]
    },
    {
      title: "Bootcamp Zero ao Play para Ukulele",
      price: "R$ 30,00",
      checkoutUrl: "https://pay.lowify.com.br/checkout?product_id=xw0Bew",
      features: [
        'Cronograma de 30 dias: Planejamento diário focado em progresso real',
        'PDFs exclusivos com tablaturas e teoria descomplicada',
        'Seleção dos melhores vídeos com conteúdos práticos',
        'Dicionário Visual de Acordes'
      ]
    },
    {
      title: "Pacote VIP para Ukulele",
      price: "R$ 50,00",
      checkoutUrl: "https://pay.lowify.com.br/checkout?product_id=42A8mJ",
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

  const productDetailsPaths = ['/pack-ukulele', '/bootcamp-ukulele', '/vip-ukulele'];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
      <Helmet>
        <title>STUDIO ZERO | UKULELE</title>
        <meta
          name="description"
          content="Materiais digitais de ukulele do Studio Zero para estudar músicas, acordes e prática guiada de forma visual."
        />
      </Helmet>

      <Header />

      <InstrumentHero 
        instrumentName="UKULELE" 
        description="Diversão e musicalidade. O caminho mais rápido e leve para começar a tocar suas primeiras músicas." 
      />

      <main className="py-10 md:py-14 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 items-start">
            {products.map((prod, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#111111] border border-border p-5 md:p-6 flex flex-col hover:border-[#2260CC]/50 transition-colors group"
              >
                <h3 className="text-xl md:text-2xl font-syne font-bold text-white uppercase mb-4 group-hover:text-[#2260CC] transition-colors">
                  {prod.title}
                </h3>

                <ul className="space-y-2.5 mb-5">
                  {prod.features.map((feat, j) => (
                    <li key={j} className="flex items-start text-sm text-foreground/80">
                      <Check className="w-5 h-5 text-[#2260CC] mr-3 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <div className="text-3xl font-syne font-bold text-white mb-5">
                    {prod.price}
                  </div>
                  {productDetailsPaths[i] ? (
                    <Button asChild className="w-full bg-[#FF0000] hover:bg-[#FF0000]/90 text-white rounded-sm px-4 py-4 min-h-[2.75rem] font-syne uppercase tracking-wider text-sm whitespace-normal text-center leading-tight transition-transform active:scale-[0.98]">
                      <Link to={productDetailsPaths[i]}>
                        Conhecer este material
                      </Link>
                    </Button>
                  ) : (
                    <Button disabled className="w-full bg-[#FF0000] hover:bg-[#FF0000]/90 text-white rounded-sm px-4 py-4 min-h-[2.75rem] font-syne uppercase tracking-wider text-sm whitespace-normal text-center leading-tight transition-transform active:scale-[0.98]">
                      Comprar em breve
                    </Button>
                  )}
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

export default UkulelePage;
