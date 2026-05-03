import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Download,
  Inbox,
  Instagram,
  Mail,
  MessageCircle,
  ShieldCheck,
} from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';

const instagramUrl = 'https://www.instagram.com/0studio.zero';
const supportEmail = 'equipe@studiozero.io';

const accessSteps = [
  {
    title: 'Compra aprovada',
    description: 'Assim que o pagamento é confirmado, o Lowify processa a liberação do conteúdo.',
    icon: ShieldCheck,
  },
  {
    title: 'Link enviado automaticamente',
    description: 'Você recebe o acesso no e-mail e WhatsApp informados no momento da compra.',
    icon: MessageCircle,
  },
  {
    title: 'Material liberado',
    description: 'Abra o link recebido para acessar ou baixar o material digital adquirido.',
    icon: Download,
  },
];

const repurchaseCards = [
  {
    title: 'Packs de Repertório',
    description: 'Materiais visuais e práticos para estudar músicas específicas por instrumento.',
    cta: 'Ver packs',
  },
  {
    title: 'Bootcamp Zero ao Play',
    description: 'Trilhas guiadas para sair da teoria solta e seguir um plano de prática com começo, meio e fim.',
    cta: 'Ver bootcamps',
  },
  {
    title: 'Pacote VIP',
    description: 'Uma experiência mais completa para quem quer estudar com mais direção, repertório e apoio visual.',
    cta: 'Ver pacotes VIP',
  },
];

function AcessoMaterialPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
      <Helmet>
        <title>Acesso ao Material | Studio Zero</title>
        <meta
          name="description"
          content="Orientações de acesso aos materiais digitais do Studio Zero após a compra."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Header />

      <main className="pt-28 md:pt-32">
        <section className="relative overflow-hidden border-b border-border px-6 py-14 md:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(232,32,42,0.18),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(34,96,204,0.1),transparent_34%)] pointer-events-none" />
          <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_380px] gap-10 xl:gap-14 lg:items-end">
            <div className="min-w-0">
              <p className="text-primary font-syne uppercase tracking-widest text-sm mb-6">
                Acesso ao material
              </p>
              <h1 className="font-syne font-bold text-[clamp(3.1rem,6vw,5.1rem)] leading-[0.92] tracking-normal mb-7 max-w-[680px]">
                <span className="block">Compra</span>
                <span className="block">confirmada.</span>
              </h1>
              <p className="font-syne font-bold uppercase text-primary text-[clamp(1.35rem,3vw,2.15rem)] leading-[1.08] tracking-normal max-w-[720px]">
                Seu material já foi enviado por e-mail e WhatsApp!
              </p>
            </div>

            <div className="min-w-0 bg-card border border-border p-6 md:p-8">
              <div className="w-14 h-14 border border-primary/40 bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Inbox className="w-7 h-7" />
              </div>
              <h2 className="text-2xl md:text-3xl mb-4">Confira seus canais de entrega</h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-7">
                Use o mesmo e-mail e WhatsApp cadastrados na compra para localizar a mensagem enviada pelo Lowify.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="inline-flex min-h-[3.1rem] items-center justify-center border border-border bg-background/60 px-5 py-4 font-syne text-sm uppercase tracking-wider text-foreground">
                  Verificar meu e-mail
                </div>
                <Button asChild className="bg-primary hover:bg-primary/90 text-white rounded-sm px-5 py-4 min-h-[3.1rem] font-syne uppercase tracking-wider text-sm whitespace-normal text-center leading-tight">
                  <a href={`mailto:${supportEmail}`}>
                    Chamar suporte
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-14 md:py-16">
          <div className="max-w-6xl mx-auto">
            <p className="text-primary font-syne uppercase tracking-widest text-xs mb-4">
              Como funciona o acesso
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {accessSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <article key={step.title} className="bg-card border border-border p-6 md:p-7">
                    <div className="flex items-center justify-between gap-4 mb-8">
                      <span className="font-syne text-5xl font-bold text-muted-foreground/20">
                        0{index + 1}
                      </span>
                      <div className="w-12 h-12 border border-primary/40 bg-primary/10 flex items-center justify-center text-primary">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>
                    <h2 className="text-2xl mb-4">{step.title}</h2>
                    <p className="text-muted-foreground font-light leading-relaxed">
                      {step.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-6 pb-14 md:pb-16">
          <div className="max-w-6xl mx-auto border border-primary/35 bg-primary/10 p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-5 md:items-start">
              <CheckCircle2 className="w-7 h-7 text-primary shrink-0" />
              <div>
                <h2 className="text-2xl md:text-3xl mb-4">Salve seu link de acesso</h2>
                <p className="text-foreground/90 font-light leading-relaxed mb-3">
                  Recomendamos que você salve o link recebido para consultar seus arquivos sempre que precisar.
                </p>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Caso tenha comprado mais de um material, cada produto pode ter um link de acesso próprio.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-16 md:pb-20">
          <div className="max-w-6xl mx-auto bg-section-contrast border border-border p-6 md:p-8">
            <p className="text-primary font-syne uppercase tracking-widest text-xs mb-4">
              Não encontrou seu material?
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-7 lg:items-center">
              <div>
                <h2 className="text-3xl md:text-5xl mb-5">A gente te ajuda a localizar.</h2>
                <p className="text-muted-foreground font-light leading-relaxed max-w-3xl">
                  Se o link não chegou em alguns minutos, confira sua caixa de spam, aba promoções
                  e mensagens recentes no WhatsApp. Se ainda assim não encontrar, fale com o suporte.
                </p>
              </div>
              <Button asChild className="bg-primary hover:bg-primary/90 text-white rounded-sm px-5 md:px-7 py-4 md:py-5 min-h-[3.1rem] font-syne uppercase tracking-wider whitespace-normal text-center leading-tight">
                <a href={`mailto:${supportEmail}`}>
                  Falar com suporte
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:py-20 border-y border-border">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-4xl mb-10 md:mb-12">
              <p className="text-primary font-syne uppercase tracking-widest text-xs mb-4">
                Continue sua evolução musical
              </p>
              <h2 className="text-4xl md:text-6xl mb-5">Quer continuar estudando com mais direção?</h2>
              <p className="text-muted-foreground text-lg font-light leading-relaxed">
                O Studio Zero possui outras trilhas, repertórios e experiências completas para
                diferentes instrumentos e objetivos de prática.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {repurchaseCards.map((card) => (
                <article key={card.title} className="bg-card border border-border p-6 md:p-7 flex flex-col h-full hover:border-primary/50 transition-colors">
                  <ArrowRight className="w-5 h-5 text-primary mb-6" />
                  <h3 className="text-2xl mb-4">{card.title}</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed mb-8 flex-grow">
                    {card.description}
                  </p>
                  <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white rounded-sm px-4 py-4 min-h-[3rem] font-syne uppercase tracking-wider text-sm whitespace-normal text-center leading-tight">
                    <Link to="/produtos">
                      {card.cta}
                    </Link>
                  </Button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-14 md:py-16">
          <div className="max-w-6xl mx-auto bg-card border border-border p-6 md:p-8">
            <p className="text-primary font-syne uppercase tracking-widest text-xs mb-4">
              Acompanhe o Studio Zero
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-8">
              <div>
                <h2 className="text-3xl md:text-5xl mb-5">Fique por perto.</h2>
                <p className="text-muted-foreground font-light leading-relaxed max-w-3xl">
                  Receba novidades, ideias de prática e avisos sobre novos materiais acompanhando o Studio Zero.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-border bg-background/60 p-5 hover:border-primary hover:text-primary transition-colors"
                >
                  <Instagram className="w-6 h-6 text-primary mb-5" />
                  <span className="block font-syne uppercase tracking-wider text-sm mb-2">Instagram</span>
                  <span className="block text-muted-foreground font-light">@0studio.zero</span>
                </a>
                <a
                  href={`mailto:${supportEmail}`}
                  className="border border-border bg-background/60 p-5 hover:border-primary hover:text-primary transition-colors"
                >
                  <Mail className="w-6 h-6 text-primary mb-5" />
                  <span className="block font-syne uppercase tracking-wider text-sm mb-2">E-mail de suporte</span>
                  <span className="block text-muted-foreground font-light break-all">{supportEmail}</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default AcessoMaterialPage;
