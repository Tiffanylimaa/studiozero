import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Mail, MessageCircle, ShieldCheck } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';
import { trackCheckoutClick } from '@/lib/tracking.js';

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

const checkoutButtonClass = 'bg-primary hover:bg-primary/90 text-white rounded-sm px-4 md:px-5 py-3 min-h-[2.6rem] font-syne uppercase tracking-wider text-xs md:text-sm whitespace-normal text-center leading-tight';

function CheckoutButton({ productName, checkoutUrl, children, className = '' }) {
  return (
    <Button asChild className={`${checkoutButtonClass} ${className}`}>
      <a
        href={checkoutUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackCheckoutClick(productName, checkoutUrl)}
      >
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
  positioningLabel,
  badgeLabel,
  priceNote,
  bonusTitle,
  bonusItems = [],
  upgradeTitle,
  upgradeText,
  upgradeLink,
}) {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
      <Helmet>
        <title>{productName} | Studio Zero</title>
        <meta name="description" content={subtitle} />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Header />

      <main className="pt-20">
        <section className="relative overflow-hidden border-b border-border px-5 md:px-6 py-7 md:py-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(232,32,42,0.18),transparent_36%),radial-gradient(circle_at_bottom_left,rgba(34,96,204,0.1),transparent_32%)] pointer-events-none" />
          <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_300px] gap-5 lg:items-end">
            <div className="min-w-0">
              <p className="text-primary font-syne uppercase tracking-widest text-[0.7rem] md:text-xs mb-3">
                {instrument} | Studio Zero
              </p>
              {positioningLabel && (
                <p className="inline-flex border border-primary/40 bg-primary/10 px-3 py-1.5 text-primary font-syne uppercase tracking-widest text-[0.68rem] md:text-xs mb-4">
                  {positioningLabel}
                </p>
              )}
              <h1 className="font-syne font-bold text-[clamp(1.75rem,3.7vw,3.15rem)] leading-[1.02] tracking-normal mb-4 max-w-4xl">
                {title}
              </h1>
              <p className="text-muted-foreground text-sm md:text-base font-light max-w-3xl leading-relaxed mb-5">
                {subtitle}
              </p>
              <CheckoutButton productName={productName} checkoutUrl={checkoutUrl}>
                Quero receber meu material agora
              </CheckoutButton>
              <p className="text-xs text-muted-foreground mt-3 font-light">
                Acesso digital liberado após a compra.
              </p>
            </div>

            <aside className="bg-card border border-border p-4 md:p-5">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <p className="text-primary font-syne uppercase tracking-widest text-[0.7rem] md:text-xs">
                  Oferta digital
                </p>
                {badgeLabel && (
                  <span className="bg-primary text-white px-3 py-1 font-syne uppercase tracking-widest text-[0.68rem]">
                    {badgeLabel}
                  </span>
                )}
              </div>
              <h2 className="text-lg md:text-xl mb-4">{productName}</h2>
              <div className="border-y border-border py-4 mb-4">
                <p className="text-sm text-muted-foreground font-light mb-2">Pagamento único</p>
                <p className="font-syne text-3xl font-bold text-white tracking-normal">
                  {price}
                </p>
                {priceNote && (
                  <p className="text-sm text-muted-foreground font-light leading-relaxed mt-3">
                    {priceNote}
                  </p>
                )}
              </div>
              <CheckoutButton productName={productName} checkoutUrl={checkoutUrl} className="w-full">
                Comprar agora
              </CheckoutButton>
            </aside>
          </div>
        </section>

        <section className="px-5 md:px-6 py-6 md:py-8">
          <div className="max-w-6xl mx-auto">
            <p className="text-primary font-syne uppercase tracking-widest text-[0.7rem] md:text-xs mb-4">
              O que você recebe
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {whatYouGet.map((item) => (
                <article key={item} className="bg-card border border-border p-4">
                  <CheckCircle2 className="w-4 h-4 text-primary mb-3" />
                  <p className="text-sm font-light text-foreground/90 leading-relaxed">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 md:px-6 pb-6 md:pb-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-4 md:gap-5">
            <div className="bg-section-contrast border border-border p-4 md:p-5">
              <p className="text-primary font-syne uppercase tracking-widest text-[0.7rem] md:text-xs mb-3">
                Para quem é
              </p>
              <h2 className="text-xl md:text-2xl mb-4">Esse material combina com você se...</h2>
              <ul className="space-y-2.5">
                {idealFor.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-muted-foreground font-light leading-relaxed">
                    <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card border border-border p-4 md:p-5">
              <p className="text-primary font-syne uppercase tracking-widest text-[0.7rem] md:text-xs mb-3">
                Como funciona o acesso
              </p>
              <div className="space-y-2.5">
                {accessSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.title} className="flex items-center gap-3 border border-border bg-background/60 p-3">
                      <span className="font-syne text-lg font-bold text-muted-foreground/30">
                        0{index + 1}
                      </span>
                      <Icon className="w-4 h-4 text-primary shrink-0" />
                      <p className="text-sm font-light text-foreground/90">{step.title}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {bonusItems.length > 0 && (
          <section className="px-5 md:px-6 pb-6 md:pb-8">
            <div className="max-w-6xl mx-auto bg-card border border-border p-4 md:p-5">
              <p className="text-primary font-syne uppercase tracking-widest text-[0.7rem] md:text-xs mb-3">
                {bonusTitle || 'Bônus incluídos'}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {bonusItems.map((item) => (
                  <div key={item} className="flex gap-3 border border-border bg-background/60 p-3">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground/90 font-light leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {upgradeLink && (
          <section className="px-5 md:px-6 pb-6 md:pb-8">
            <div className="max-w-4xl mx-auto border border-primary/35 bg-section-contrast p-4 md:p-6 text-center">
              <h2 className="text-xl md:text-2xl mb-3">{upgradeTitle}</h2>
              <p className="text-sm text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto mb-5">
                {upgradeText}
              </p>
              <Button asChild className={checkoutButtonClass}>
                <Link to={upgradeLink}>
                  Ver Pacote VIP
                </Link>
              </Button>
            </div>
          </section>
        )}

        <section className="px-5 md:px-6 pb-6 md:pb-8">
          <div className="max-w-6xl mx-auto">
            <p className="text-primary font-syne uppercase tracking-widest text-[0.7rem] md:text-xs mb-3">
              FAQ
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
              {faq.map((item) => (
                <article key={item.question} className="bg-card border border-border p-4">
                  <h3 className="text-base md:text-lg mb-2">{item.question}</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    {item.answer}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 md:px-6 pb-8 md:pb-10">
          <div className="max-w-4xl mx-auto border border-primary/40 bg-primary/10 p-4 md:p-6 text-center">
            <p className="text-primary font-syne uppercase tracking-widest text-[0.7rem] md:text-xs mb-3">
              Oferta digital
            </p>
            <h2 className="text-xl md:text-3xl mb-3">{finalCta}</h2>
            <p className="text-sm text-muted-foreground font-light mb-2">{productName}</p>
            <p className="text-xs text-muted-foreground font-light mb-2">Pagamento único</p>
            <p className="font-syne text-3xl md:text-4xl font-bold text-white tracking-normal mb-5">
              {price}
            </p>
            <CheckoutButton productName={productName} checkoutUrl={checkoutUrl}>
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
