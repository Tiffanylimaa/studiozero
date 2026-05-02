import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import InstrumentHero from '@/components/InstrumentHero.jsx';
import { Button } from '@/components/ui/button';

function TecladoPage() {
  const products = [
    {
      title: "Packs de Repertório para Teclado",
      price: "R$ 20,00",
      checkoutUrl: "https://pay.kiwify.com.br/nnnVQH4",
      features: [
        'PDFs Visuais e Práticos',
        'Tablaturas',
        'Parte Teórica Aplicada'
      ]
    },
    {
      title: "Bootcamp Zero ao Play para Teclado",
      price: "R$ 30,00",
      checkoutUrl: "https://pay.kiwify.com.br/OMzL6Mr",
      features: [
        'Cronograma de 30 dias: Planejamento diário focado em progresso real',
        'PDFs exclusivos com tablaturas e teoria descomplicada',
        'Seleção dos melhores vídeos com conteúdos práticos',
        'Dicionário Visual de Acordes'
      ]
    },
    {
      title: "Pacote VIP para Teclado",
      price: "R$ 50,00",
      checkoutUrl: "https://pay.kiwify.com.br/JJAGx0k",
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
        <title>Teclado | Studio Zero</title>
        <meta
          name="description"
          content="Materiais digitais de teclado do Studio Zero para estudar harmonia, repertório e prática musical com apoio visual."
        />
      </Helmet>

      <Header />

      <InstrumentHero 
        instrumentName="TECLADO" 
        description="Harmonia e criatividade. O instrumento que abre infinitas possibilidades sonoras." 
      />

      <main className="flex-grow py-16 md:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border p-6 md:p-8 flex flex-col h-full hover:border-primary/50 transition-colors group"
              >
                <h2 className="text-xl md:text-2xl font-syne font-bold uppercase mb-6 group-hover:text-primary transition-colors">
                  {product.title}
                </h2>

                <ul className="space-y-3 mb-8 flex-grow">
                  {product.features.map((feat, j) => (
                    <li key={j} className="flex items-start text-sm text-foreground/80">
                      <Check className="w-5 h-5 text-primary mr-3 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <div className="text-3xl font-syne font-bold mb-6 text-white">
                    {product.price}
                  </div>
                  {product.checkoutUrl ? (
                    <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white rounded-none px-4 py-4 min-h-[3.1rem] font-syne uppercase tracking-wider text-sm md:text-base whitespace-normal text-center leading-tight transition-all active:scale-[0.98]">
                      <a href={product.checkoutUrl} target="_blank" rel="noopener noreferrer">
                        Comprar agora
                      </a>
                    </Button>
                  ) : (
                    <Button disabled className="w-full bg-primary hover:bg-primary/90 text-white rounded-none px-4 py-4 min-h-[3.1rem] font-syne uppercase tracking-wider text-sm md:text-base whitespace-normal text-center leading-tight transition-all active:scale-[0.98]">
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

export default TecladoPage;
