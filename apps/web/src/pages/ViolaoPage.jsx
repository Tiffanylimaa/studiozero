import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import InstrumentHero from '@/components/InstrumentHero.jsx';
import { Button } from '@/components/ui/button';

function ViolaoPage() {
  const products = [
    {
      title: "Packs de Repertório",
      price: "R$ 20,00",
      checkoutUrl: "", // Substituir pelo link de checkout da Kiwify.
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
        <title>STUDIO ZERO | VIOLÃO</title>
        <meta
          name="description"
          content="Materiais digitais de violão do Studio Zero com PDFs visuais, repertórios, prática guiada e apoio de estudo."
        />
      </Helmet>

      <Header />

      <InstrumentHero 
        instrumentName="VIOLÃO" 
        description="Simplicidade e beleza. O caminho clássico para expressar suas emoções." 
      />

      <main className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((prod, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#111111] border border-border p-8 md:p-10 flex flex-col h-full hover:border-[#E8202A]/50 transition-colors group"
              >
                <h3 className="text-2xl font-syne font-bold text-white uppercase mb-8 group-hover:text-[#E8202A] transition-colors">
                  {prod.title}
                </h3>

                <ul className="space-y-4 mb-12 flex-grow">
                  {prod.features.map((feat, j) => (
                    <li key={j} className="flex items-start text-sm text-foreground/80">
                      <Check className="w-5 h-5 text-[#E8202A] mr-3 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <div className="text-4xl font-syne font-bold text-white mb-8">
                    {prod.price}
                  </div>
                  {prod.checkoutUrl ? (
                    <Button asChild className="w-full bg-[#FF0000] hover:bg-[#FF0000]/90 text-white rounded-sm px-4 py-5 min-h-[3.5rem] font-syne uppercase tracking-wider text-sm md:text-base whitespace-normal text-center leading-tight transition-transform active:scale-[0.98]">
                      <a href={prod.checkoutUrl} target="_blank" rel="noopener noreferrer">
                        Comprar agora
                      </a>
                    </Button>
                  ) : (
                    <Button disabled className="w-full bg-[#FF0000] hover:bg-[#FF0000]/90 text-white rounded-sm px-4 py-5 min-h-[3.5rem] font-syne uppercase tracking-wider text-sm md:text-base whitespace-normal text-center leading-tight transition-transform active:scale-[0.98]">
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

export default ViolaoPage;
