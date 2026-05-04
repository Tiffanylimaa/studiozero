import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';
function SobrePage() {
  return <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Sobre | Studio Zero</title>
        <meta
          name="description"
          content="Conheça a proposta do Studio Zero: aprendizado musical visual, prático e direto para diferentes instrumentos."
        />
      </Helmet>

      <Header />

      <main className="pt-24 md:pt-28">
        {/* Mission */}
        <section className="py-10 md:py-14 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.h1 initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} className="text-5xl md:text-7xl mb-6 md:mb-8 text-primary">
              Nossa Missão
            </motion.h1>
            <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.2
          }} className="text-xl md:text-3xl font-light leading-tight text-foreground/90 space-y-5 md:space-y-6">
              <p>
                Destruir a barreira entre você e a música.
              </p>
              <p className="text-muted-foreground">
                Nossa missão é simplificar a relação entre você e o seu instrumento, transformando o aprendizado musical em uma experiência visual, moderna e fluida, unindo técnica e repertório de forma intuitiva.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Sobre a Criadora */}
        <section className="py-10 md:py-14 px-6 bg-section-contrast border-y border-border">
          <div className="max-w-5xl mx-auto">
            <motion.h2 initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="text-4xl md:text-5xl mb-6 md:mb-8 text-primary">
              Sobre a Criadora
            </motion.h2>
            <motion.div initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.2
          }} className="text-lg md:text-xl font-light leading-relaxed text-foreground/90">
              <p>
                Luiza iniciou sua jornada na música aos 8 anos com o violão e a guitarra, possuindo 15 anos de experiência. Ela teve aulas de bateria durante 3 anos e, posteriormente, aprendeu a tocar baixo, teclado e ukulele de forma autônoma.
              </p>
              <blockquote className="border-l-4 border-primary pl-6 py-3 mt-6 text-base md:text-lg italic text-muted-foreground bg-primary/5 rounded-r-lg">
                "Aprendi a mapear o que é essencial em cada instrumento"
              </blockquote>
            </motion.div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-10 md:py-14 px-6 bg-background">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl mb-5">A Filosofia<br />Visual</h2>
              <div className="space-y-4 text-base md:text-lg font-light text-muted-foreground">
                <p>
                  O cérebro humano processa imagens 60.000 vezes mais rápido que texto. Por que aprender música lendo partituras complexas quando você pode visualizar padrões?
                </p>
                <p>
                  No Studio Zero, mapeamos o braço do violão, as teclas do piano e as peças da bateria em sistemas visuais de alto contraste.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-card border border-border flex items-center justify-center p-6 text-center">
                <span className="font-syne text-xl md:text-2xl text-primary">Ensino Visual</span>
              </div>
              <div className="aspect-square bg-card border border-border flex items-center justify-center p-6 text-center mt-6">
                <span className="font-syne text-xl md:text-2xl text-secondary">Sem Enrolação</span>
              </div>
              <div className="aspect-square bg-card border border-border flex items-center justify-center p-6 text-center -mt-6">
                <span className="font-syne text-xl md:text-2xl text-foreground">100% Prático</span>
              </div>
              <div className="aspect-square bg-card border border-border flex items-center justify-center p-6 text-center">
                <span className="font-syne text-xl md:text-2xl text-primary">Foco no Play</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-10 md:py-14 px-6 border-t border-border text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl mb-5 md:mb-6">Faça parte da revolução.</h2>
            <Link to="/produtos">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-sm px-6 md:px-10 py-4 md:py-6 text-base md:text-lg font-syne uppercase tracking-wider whitespace-normal text-center leading-tight">
                Ver materiais
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
}
export default SobrePage;
