import React from 'react';
import { Helmet } from 'react-helmet';
import { ArrowRight, CheckCircle2, Mail, MessageCircle, ShieldCheck } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';

const accessSteps = [
  {
    title: 'Pagamento rápido e seguro',
    icon: ShieldCheck,
  },
  {
    title: 'Link enviado automaticamente por e-mail e WhatsApp',
    icon: MessageCircle,
  },
  {
    title: 'Acesso ao material digital após a compra',
    icon: Mail,
  },
];

function CheckoutButton({ checkoutUrl, children, className = '' }) {
  return (
    <Button asChild className={`bg-primary hover:bg-primary/90 text-white rounded-sm px-4 md:px-6 py-3 md:py-4 min-h-[2.75rem] font-syne uppercase tracking-wider text-sm whitespace-normal text-center leading-tight ${className}`}>
      <a href={checkoutUrl} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </Button>
  );
}

function ProductSalesPage({
  productName,
  instrument,
  title,
  subtitle,
  price,
  checkoutUrl,
  whatYouGet,
  idealFor,
  faq,
  finalCta,
}) {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
      <Helmet>
        <title>{productName} | Studio Zero</title>
        <meta name="description" content={subtitle} />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Header />

      <main className="pt-24 md:pt-28">
        <section className="relative overflow-hidden border-b border-border px-6 py-10 md:py-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(232,32,42,0.18),transparent_36%),radial-gradient(circle_at_bottom_left,rgba(34,96,204,0.1),transparent_32%)] pointer-events-none" />
          <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_330px] gap-8 lg:items-end">
            <div className="min-w-0">
              <p className="text-primary font-syne uppercase tracking-widest text-xs mb-4">
                {instrument} | Studio Zero
              </p>
              <h1 className="font-syne font-bold text-[clamp(2.1rem,4.7vw,4.15rem)] leading-[1] tracking-normal mb-5 max-w-4xl">
                {title}
              </h1>
              <p className="text-muted-foreground text-base md:text-lg font-light max-w-3xl leading-relaxed mb-6">
                {subtitle}
              </p>
              <CheckoutButton checkoutUrl={checkoutUrl}>
                Quero receber meu material agora
              </CheckoutButton>
              <p className="text-xs md:text-sm text-muted-foreground mt-3 font-light">
                Acesso digital liberado após a compra.
              </p>
            </div>

            <aside className="bg-card border border-border p-5 md:p-6">
              <p className="text-primary font-syne uppercase tracking-widest text-xs mb-3">
                Oferta digital
              </p>
              <h2 className="text-xl md:text-2xl mb-5">{productName}</h2>
              <div className="border-y border-border py-5 mb-5">
                <p className="text-sm text-muted-foreground font-light mb-2">Pagamento único</p>
                <p className="font-syne text-3xl md:text-4xl font-bold text-white tracking-normal">
                  {price}
                </p>
              </div>
              <CheckoutButton checkoutUrl={checkoutUrl} className="w-full">
                Comprar agora
              </CheckoutButton>
            </aside>
          </div>
        </section>

        <section className="px-6 py-10 md:py-12">
          <div className="max-w-6xl mx-auto">
            <p className="text-primary font-syne uppercase tracking-widest text-xs mb-4">
              O que você recebe
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {whatYouGet.map((item) => (
                <article key={item} className="bg-card border border-border p-4 md:p-5">
                  <CheckCircle2 className="w-5 h-5 text-primary mb-4" />
                  <p className="text-sm md:text-base font-light text-foreground/90 leading-relaxed">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-10 md:pb-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-6">
            <div className="bg-section-contrast border border-border p-5 md:p-6">
              <p className="text-primary font-syne uppercase tracking-widest text-xs mb-4">
                Para quem é
              </p>
              <h2 className="text-2xl md:text-3xl mb-6">Esse material combina com você se...</h2>
              <ul className="space-y-3">
                {idealFor.map((item) => (
                  <li key={item} className="flex gap-3 text-sm md:text-base text-muted-foreground font-light leading-relaxed">
                    <ArrowRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card border border-border p-5 md:p-6">
              <p className="text-primary font-syne uppercase tracking-widest text-xs mb-4">
                Como funciona o acesso
              </p>
              <div className="space-y-3">
                {accessSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.title} className="flex items-center gap-3 border border-border bg-background/60 p-4">
                      <span className="font-syne text-xl font-bold text-muted-foreground/30">
                        0{index + 1}
                      </span>
                      <Icon className="w-5 h-5 text-primary shrink-0" />
                      <p className="text-sm md:text-base font-light text-foreground/90">{step.title}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-10 md:pb-12">
          <div className="max-w-5xl mx-auto bg-card border border-border p-5 md:p-7 text-center">
            <p className="text-primary font-syne uppercase tracking-widest text-xs mb-4">
              Oferta
            </p>
            <h2 className="text-2xl md:text-4xl mb-3">{productName}</h2>
            <p className="text-sm text-muted-foreground font-light mb-4">Pagamento único</p>
            <p className="font-syne text-4xl md:text-5xl font-bold text-white tracking-normal mb-6">
              {price}
            </p>
            <CheckoutButton checkoutUrl={checkoutUrl}>
              Quero receber meu material agora
            </CheckoutButton>
          </div>
        </section>

        <section className="px-6 pb-10 md:pb-12">
          <div className="max-w-6xl mx-auto">
            <p className="text-primary font-syne uppercase tracking-widest text-xs mb-4">
              FAQ
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {faq.map((item) => (
                <article key={item.question} className="bg-card border border-border p-5">
                  <h3 className="text-lg md:text-xl mb-3">{item.question}</h3>
                  <p className="text-sm md:text-base text-muted-foreground font-light leading-relaxed">
                    {item.answer}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-14 md:pb-16">
          <div className="max-w-4xl mx-auto border border-primary/40 bg-primary/10 p-5 md:p-7 text-center">
            <h2 className="text-2xl md:text-4xl mb-6">{finalCta}</h2>
            <CheckoutButton checkoutUrl={checkoutUrl}>
              Receber material agora
            </CheckoutButton>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default ProductSalesPage;
