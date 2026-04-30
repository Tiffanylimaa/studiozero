import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Download,
  Gift,
  Instagram,
  Mail,
  Play,
  Users,
} from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';

const material = {
  name: 'Material StudioZero',
  description: 'Arquivos digitais, instruções e recursos complementares reunidos em um só lugar.',
  downloadUrl: '#', // Placeholder: trocar pelo link final do material.
};

const checklist = [
  'Baixe o arquivo principal',
  'Leia as instruções iniciais',
  'Salve uma cópia do material',
  'Personalize o conteúdo conforme sua necessidade',
  'Volte aqui para acessar bônus e atualizações',
];

const bonuses = [
  {
    title: 'Bônus 1',
    description: 'Material complementar',
    href: '#',
  },
  {
    title: 'Bônus 2',
    description: 'Checklist extra',
    href: '#',
  },
  {
    title: 'Bônus 3',
    description: 'Guia rápido de aplicação',
    href: '#',
  },
];

const communityLinks = [
  {
    title: 'Instagram',
    description: 'Acompanhe novos lançamentos, bastidores e dicas rápidas.',
    href: '#',
    icon: Instagram,
  },
  {
    title: 'Comunidade',
    description: 'Entre para receber novidades e materiais complementares.',
    href: '#',
    icon: Users,
  },
  {
    title: 'Email',
    description: 'Receba atualizações e novos recursos direto na sua caixa de entrada.',
    href: '#',
    icon: Mail,
  },
];

function AcessoMaterialPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Acesso ao Material | Studio Zero</title>
        <meta
          name="description"
          content="Portal de acesso aos materiais digitais comprados no Studio Zero."
        />
      </Helmet>

      <Header />

      <main className="pt-28 md:pt-32">
        <section className="relative overflow-hidden border-b border-border px-6 py-16 md:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(232,32,42,0.16),transparent_36%),radial-gradient(circle_at_bottom_left,rgba(34,96,204,0.12),transparent_34%)] pointer-events-none" />
          <div className="relative max-w-5xl mx-auto">
            <p className="text-primary font-syne uppercase tracking-widest text-sm mb-6">
              Portal de acesso
            </p>
            <h1 className="text-5xl md:text-7xl mb-8 leading-none max-w-4xl">
              Seu material StudioZero está pronto
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl font-light max-w-3xl leading-relaxed">
              Acesse o conteúdo, baixe os arquivos e veja as instruções para aproveitar melhor o produto.
            </p>
          </div>
        </section>

        <section className="px-6 py-16 md:py-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8">
            <article className="bg-card border border-border p-8 md:p-12">
              <div className="flex items-start justify-between gap-6 mb-10">
                <div>
                  <p className="text-primary font-syne uppercase tracking-widest text-xs mb-4">
                    Produto adquirido
                  </p>
                  <h2 className="text-3xl md:text-5xl mb-5">{material.name}</h2>
                  <p className="text-muted-foreground font-light leading-relaxed max-w-2xl">
                    {material.description}
                  </p>
                </div>
                <div className="hidden md:flex w-16 h-16 border border-primary/40 bg-primary/10 items-center justify-center text-primary">
                  <Download className="w-7 h-7" />
                </div>
              </div>

              <a href={material.downloadUrl}>
                <Button className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white rounded-sm px-10 py-7 font-syne uppercase tracking-widest">
                  Baixar material
                </Button>
              </a>

              <p className="text-sm text-muted-foreground mt-5 font-light">
                Guarde este link para acessar seu material sempre que precisar.
              </p>
            </article>

            <aside className="bg-section-contrast border border-border p-8 md:p-10">
              <h2 className="text-3xl md:text-4xl mb-8">Checklist de uso</h2>
              <ul className="space-y-5">
                {checklist.map((item) => (
                  <li key={item} className="flex gap-4 text-muted-foreground font-light">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section className="px-6 pb-16 md:pb-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8">
            <div className="bg-card border border-border min-h-[280px] flex flex-col items-center justify-center text-center p-8">
              <div className="w-20 h-20 rounded-full border border-primary/50 bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Play className="w-9 h-9 ml-1" />
              </div>
              <h2 className="text-3xl md:text-4xl mb-4">Vídeo de instrução em breve</h2>
              <p className="text-muted-foreground font-light max-w-md">
                Espaço preparado para receber um embed futuro do YouTube ou Vimeo.
              </p>
            </div>

            <div className="bg-section-contrast border border-border p-8 md:p-10">
              <p className="text-primary font-syne uppercase tracking-widest text-xs mb-4">
                Extras do produto
              </p>
              <h2 className="text-3xl md:text-4xl mb-8">Bônus incluídos</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {bonuses.map((bonus) => (
                  <a
                    key={bonus.title}
                    href={bonus.href}
                    className="border border-border bg-card p-6 hover:border-primary/60 transition-colors group"
                  >
                    <Gift className="w-6 h-6 text-primary mb-5" />
                    <h3 className="text-xl mb-3 group-hover:text-primary transition-colors">
                      {bonus.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      {bonus.description}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:py-20 border-y border-border bg-section-contrast">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h2 className="text-4xl md:text-5xl mb-5">Continue criando com menos esforço</h2>
              <p className="text-muted-foreground font-light leading-relaxed max-w-2xl">
                Explore outros materiais StudioZero pensados para economizar tempo, organizar ideias e acelerar sua produção.
              </p>
            </div>
            <Link to="/">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-sm px-8 py-7 font-syne uppercase tracking-widest whitespace-nowrap">
                Ver outros produtos
              </Button>
            </Link>
          </div>
        </section>

        <section className="px-6 py-16 md:py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl mb-10 text-center">Fique por perto</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {communityLinks.map(({ title, description, href, icon: Icon }) => (
                <a
                  key={title}
                  href={href}
                  className="bg-card border border-border p-8 hover:border-primary/60 transition-colors group"
                >
                  <div className="w-12 h-12 border border-primary/40 bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <h3 className="text-2xl group-hover:text-primary transition-colors">{title}</h3>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    {description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default AcessoMaterialPage;
