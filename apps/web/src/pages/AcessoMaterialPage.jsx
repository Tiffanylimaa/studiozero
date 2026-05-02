import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Instagram,
  Mail,
  ShieldCheck,
} from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';

const kiwifyAccessUrl = "https://kiwify.com.br/";
const instagramUrl = "https://www.instagram.com/0studio.zero";
const supportEmail = "equipe@studiozero.io";
const emailListSubject = "Quero entrar na lista de transmissão do Studio Zero";

const checklist = [
  'Confirmar o e-mail usado na compra',
  'Acessar o material pela Kiwify',
  'Separar um horário curto de prática',
  'Começar pelo primeiro exercício ou guia recomendado',
  'Salvar esta página para consultar depois',
];

const similarItems = [
  {
    title: 'Packs de Repertório',
    description: 'Materiais visuais para estudar músicas específicas por instrumento.',
  },
  {
    title: 'Bootcamp Zero ao Play',
    description: 'Trilhas guiadas para organizar sua prática em etapas simples.',
  },
  {
    title: 'Pacote VIP',
    description: 'Uma experiência mais completa com repertório, teoria e apoio visual.',
  },
];

function AcessoMaterialPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Acesso ao Material | Studio Zero</title>
        <meta
          name="description"
          content="Página de pós-compra para acessar materiais digitais do Studio Zero pela Kiwify."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Header />

      <main className="pt-28 md:pt-32">
        <section className="relative overflow-hidden border-b border-border px-6 py-14 md:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(232,32,42,0.16),transparent_36%),radial-gradient(circle_at_bottom_left,rgba(34,96,204,0.12),transparent_34%)] pointer-events-none" />
          <div className="relative max-w-5xl mx-auto">
            <p className="text-primary font-syne uppercase tracking-widest text-sm mb-6">
              Studio Zero
            </p>
            <h1 className="text-5xl md:text-7xl mb-8 leading-none max-w-4xl">
              Sua compra foi recebida.
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl font-light max-w-3xl leading-relaxed">
              Agora é só acessar o material e começar sua prática. Se você comprou pela Kiwify,
              o acesso também será enviado para o e-mail usado na compra.
            </p>
          </div>
        </section>

        <section className="px-6 py-14 md:py-16">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6">
            <article className="bg-card border border-border p-6 md:p-8">
              <div className="flex items-start justify-between gap-6 mb-10">
                <div>
                  <p className="text-primary font-syne uppercase tracking-widest text-xs mb-4">
                    Como acessar
                  </p>
                  <h2 className="text-3xl md:text-5xl mb-6">Acesso pela Kiwify</h2>
                  <p className="text-muted-foreground font-light leading-relaxed max-w-2xl">
                    Depois da aprovação do pagamento, a Kiwify envia um e-mail com as instruções
                    de acesso ao produto digital. Verifique também a caixa de spam, promoções ou
                    lixo eletrônico.
                  </p>
                </div>
                <div className="hidden md:flex w-16 h-16 border border-primary/40 bg-primary/10 items-center justify-center text-primary">
                  <ShieldCheck className="w-7 h-7" />
                </div>
              </div>

              {kiwifyAccessUrl ? (
                <Button asChild className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white rounded-sm px-5 md:px-8 py-4 md:py-5 min-h-[3.1rem] font-syne uppercase tracking-wider whitespace-normal text-center leading-tight">
                  <a href={kiwifyAccessUrl} target="_blank" rel="noopener noreferrer">
                    Ir para a Kiwify
                  </a>
                </Button>
              ) : (
                <Button disabled className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white rounded-sm px-5 md:px-8 py-4 md:py-5 min-h-[3.1rem] font-syne uppercase tracking-wider whitespace-normal text-center leading-tight">
                  Ir para a Kiwify
                </Button>
              )}

              {!kiwifyAccessUrl && (
                <p className="text-sm text-muted-foreground mt-5 font-light">
                  Link de acesso em breve. Use o e-mail enviado pela Kiwify após a compra.
                </p>
              )}

              <p className="text-sm text-muted-foreground mt-6 font-light leading-relaxed">
                Produto vendido e entregue pela Kiwify. Esta página funciona como ecossistema
                pós-compra do Studio Zero.
              </p>
            </article>

            <aside className="bg-section-contrast border border-border p-6 md:p-8">
              <h2 className="text-3xl md:text-4xl mb-8">Primeiros passos</h2>
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
          <div className="max-w-6xl mx-auto bg-section-contrast border border-border p-6 md:p-8">
            <p className="text-primary font-syne uppercase tracking-widest text-xs mb-4">
              Indicações Studio Zero
            </p>
            <h2 className="text-3xl md:text-4xl mb-4">Itens similares indicados</h2>
            <p className="text-muted-foreground font-light leading-relaxed max-w-3xl mb-8">
              Depois de acessar seu material, você pode continuar estudando com outras linhas do
              Studio Zero que combinam com o seu momento.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {similarItems.map((item) => (
                <div key={item.title} className="border border-border bg-card p-6">
                  <ArrowRight className="w-5 h-5 text-primary mb-5" />
                  <h3 className="text-xl mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white rounded-sm px-4 py-4 min-h-[3rem] font-syne uppercase tracking-wider text-sm whitespace-normal text-center leading-tight">
                    <Link to="/produtos">
                      Ver materiais
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-14 md:py-16 border-y border-border bg-section-contrast">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl mb-5">Quer continuar evoluindo?</h2>
              <p className="text-muted-foreground font-light leading-relaxed max-w-2xl">
                Conheça outros materiais do Studio Zero e combine seu estudo com repertórios, guias
                e exercícios complementares.
              </p>
            </div>
            <Link to="/produtos">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-sm px-5 md:px-7 py-4 md:py-5 min-h-[3.1rem] font-syne uppercase tracking-wider whitespace-normal text-center leading-tight">
                Ver outros materiais
              </Button>
            </Link>
          </div>
        </section>

        <section className="px-6 py-14 md:py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl mb-10 text-center">Fique por perto</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="bg-card border border-border p-8">
                <div className="w-12 h-12 border border-primary/40 bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <Instagram className="w-6 h-6" />
                </div>
                <h3 className="text-2xl mb-4">Instagram</h3>
                <p className="text-muted-foreground font-light leading-relaxed mb-8">
                  Acompanhe o Studio Zero no Instagram para receber ideias de prática, repertório e novidades dos próximos materiais.
                </p>
                {instagramUrl ? (
                  <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white rounded-sm px-4 py-5 min-h-[3.25rem] font-syne uppercase tracking-wider text-sm md:text-base whitespace-normal text-center leading-tight">
                    <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                      Acompanhar no Instagram
                    </a>
                  </Button>
                ) : (
                  <Button disabled className="w-full bg-primary hover:bg-primary/90 text-white rounded-sm px-4 py-5 min-h-[3.25rem] font-syne uppercase tracking-wider text-sm md:text-base whitespace-normal text-center leading-tight">
                    Em breve
                  </Button>
                )}
              </div>

              <div className="bg-card border border-border p-8">
                <div className="w-12 h-12 border border-primary/40 bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-2xl mb-4">Lista de transmissão por e-mail</h3>
                <p className="text-muted-foreground font-light leading-relaxed mb-8">
                  Entre na lista para receber atualizações, avisos de novos materiais e novidades
                  do Studio Zero direto no seu e-mail.
                </p>
                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white rounded-sm px-4 py-5 min-h-[3.25rem] font-syne uppercase tracking-wider text-sm md:text-base whitespace-normal text-center leading-tight">
                  <a href={`mailto:${supportEmail}?subject=${encodeURIComponent(emailListSubject)}`}>
                    Entrar na lista
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-16 md:pb-20">
          <div className="max-w-5xl mx-auto bg-card border border-border p-6 md:p-8">
            <p className="text-primary font-syne uppercase tracking-widest text-xs mb-4">
              Suporte
            </p>
            <h2 className="text-3xl md:text-4xl mb-5">Precisa de ajuda?</h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-8">
              Se tiver dificuldade de acesso, entre em contato pelo e-mail de suporte informado pelo Studio Zero.
            </p>
            <div className="border border-border bg-section-contrast p-6 mb-8">
              <h3 className="font-syne text-xl font-bold text-foreground mb-4">Contatos</h3>
              <div className="space-y-2 text-muted-foreground font-light">
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-primary transition-colors"
                >
                  Instagram: @0studio.zero
                </a>
                <a
                  href={`mailto:${supportEmail}`}
                  className="block hover:text-primary transition-colors"
                >
                  E-mail: equipe@studiozero.io
                </a>
              </div>
            </div>
            {supportEmail ? (
              <Button asChild className="bg-primary hover:bg-primary/90 text-white rounded-sm px-5 md:px-7 py-4 md:py-5 min-h-[3rem] font-syne uppercase tracking-wider whitespace-normal text-center leading-tight">
                <a href={`mailto:${supportEmail}`}>
                  Enviar e-mail
                </a>
              </Button>
            ) : (
              <div className="inline-flex items-center gap-3 text-sm text-muted-foreground uppercase tracking-widest">
                <ArrowRight className="w-4 h-4 text-primary" />
                E-mail de suporte em breve
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default AcessoMaterialPage;
