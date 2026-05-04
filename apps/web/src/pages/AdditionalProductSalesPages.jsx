import React from 'react';
import ProductSalesPage from '@/components/ProductSalesPage.jsx';

const faq = [
  {
    question: 'Como recebo o material?',
    answer: 'Após a confirmação da compra, o link de acesso é enviado automaticamente por e-mail e WhatsApp.',
  },
  {
    question: 'É produto físico?',
    answer: 'Não. O material é 100% digital.',
  },
  {
    question: 'Posso acessar depois?',
    answer: 'Sim. Recomendamos salvar o link recebido para consultar o material sempre que precisar.',
  },
];

const packWhatYouGet = [
  'PDFs visuais e práticos',
  'Repertórios organizados',
  'Tablaturas de apoio',
  'Teoria aplicada ao estudo',
];

const bootcampWhatYouGet = [
  'Cronograma de 30 dias',
  'Exercícios por etapa',
  'Materiais de apoio',
  'Orientação de prática',
];

const vipWhatYouGet = [
  'PDFs com tablaturas e teoria',
  'Curadoria de vídeos educativos',
  'Guia de apoio ao estudo',
  'Cronograma de prática',
  'Materiais complementares',
];

function makePackProps(instrument, checkoutUrl, article) {
  return {
    productName: `Pack de Repertório | ${instrument}`,
    instrument,
    title: `Estude músicas ${article} ${instrument.toLowerCase()} com mais clareza visual e prática direcionada.`,
    subtitle: 'Um material digital com repertórios organizados, tablaturas e apoio teórico para transformar estudo solto em prática objetiva.',
    price: 'R$ 20,00',
    checkoutUrl,
    whatYouGet: packWhatYouGet,
    idealFor: [
      `Quem estuda ${instrument.toLowerCase()} sozinho e sente falta de direção`,
      'Quem quer praticar músicas com material mais claro',
      'Quem busca organização sem depender de teoria solta',
    ],
    faq,
    finalCta: `Comece hoje a estudar ${instrument.toLowerCase()} com mais direção.`,
  };
}

function makeBootcampProps(instrument, checkoutUrl, article) {
  return {
    productName: `Bootcamp Zero ao Play | ${instrument}`,
    instrument,
    title: `Siga uma trilha prática para estudar ${instrument.toLowerCase()} com mais constância.`,
    subtitle: 'Um bootcamp digital para sair da prática aleatória e seguir um caminho de estudo com começo, meio e fim.',
    price: 'R$ 30,00',
    checkoutUrl,
    whatYouGet: bootcampWhatYouGet,
    idealFor: [
      'Quem começa e para nos estudos',
      `Quem precisa de uma rotina simples para praticar ${instrument.toLowerCase()}`,
      'Quem quer organizar melhor sua evolução musical',
    ],
    faq,
    finalCta: `Comece hoje sua trilha de estudo ${article} ${instrument.toLowerCase()}.`,
  };
}

function makeVipProps(instrument, checkoutUrl, article) {
  return {
    productName: `Pacote VIP | ${instrument}`,
    instrument,
    title: `Tenha uma experiência completa para estudar ${instrument.toLowerCase()} com mais direção.`,
    subtitle: 'Um pacote digital com repertórios, teoria aplicada, curadoria de apoio e cronograma para organizar sua prática musical.',
    price: 'R$ 50,00',
    checkoutUrl,
    whatYouGet: vipWhatYouGet,
    idealFor: [
      `Quem quer estudar ${instrument.toLowerCase()} com mais profundidade`,
      'Quem busca repertório, direção e apoio visual em um só lugar',
      'Quem quer uma experiência mais completa do que um material isolado',
    ],
    faq,
    finalCta: `Comece hoje uma experiência mais completa ${article} ${instrument.toLowerCase()}.`,
  };
}

export function VipViolaoPage() {
  return <ProductSalesPage {...makeVipProps('Violão', 'https://pay.lowify.com.br/checkout?product_id=g00Lqd', 'no')} />;
}

export function VipGuitarraPage() {
  return <ProductSalesPage {...makeVipProps('Guitarra', 'https://pay.lowify.com.br/checkout?product_id=kfjJWB', 'na')} />;
}

export function PackBaixoPage() {
  return <ProductSalesPage {...makePackProps('Baixo', 'https://pay.lowify.com.br/checkout?product_id=158Sz1', 'no')} />;
}

export function BootcampBaixoPage() {
  return <ProductSalesPage {...makeBootcampProps('Baixo', 'https://pay.lowify.com.br/checkout?product_id=i65wS4', 'no')} />;
}

export function VipBaixoPage() {
  return <ProductSalesPage {...makeVipProps('Baixo', 'https://pay.lowify.com.br/checkout?product_id=nbOFrf', 'no')} />;
}

export function PackBateriaPage() {
  return (
    <ProductSalesPage
      {...makePackProps('Bateria', 'https://pay.lowify.com.br/checkout?product_id=7dKMDB', 'na')}
      subtitle="Um material digital com repertórios organizados, apoio visual e orientação prática para transformar estudo solto em prática objetiva."
      whatYouGet={[
        'PDFs visuais e práticos',
        'Repertórios organizados',
        'Apoio visual ao estudo',
        'Teoria aplicada à prática',
      ]}
    />
  );
}

export function BootcampBateriaPage() {
  return <ProductSalesPage {...makeBootcampProps('Bateria', 'https://pay.lowify.com.br/checkout?product_id=hMJjPV', 'na')} />;
}

export function VipBateriaPage() {
  return (
    <ProductSalesPage
      {...makeVipProps('Bateria', 'https://pay.lowify.com.br/checkout?product_id=gqjA7o', 'na')}
      whatYouGet={[
        'PDFs com apoio visual e teoria',
        'Curadoria de vídeos educativos',
        'Guia de apoio ao estudo',
        'Cronograma de prática',
        'Materiais complementares',
      ]}
    />
  );
}

export function PackTecladoPage() {
  return (
    <ProductSalesPage
      {...makePackProps('Teclado', 'https://pay.lowify.com.br/checkout?product_id=ge8N8E', 'no')}
      subtitle="Um material digital com repertórios organizados, apoio visual e teoria aplicada para transformar estudo solto em prática objetiva."
      whatYouGet={[
        'PDFs visuais e práticos',
        'Repertórios organizados',
        'Apoio visual ao estudo',
        'Teoria aplicada ao estudo',
      ]}
    />
  );
}

export function BootcampTecladoPage() {
  return <ProductSalesPage {...makeBootcampProps('Teclado', 'https://pay.lowify.com.br/checkout?product_id=xDi9R6', 'no')} />;
}

export function VipTecladoPage() {
  return (
    <ProductSalesPage
      {...makeVipProps('Teclado', 'https://pay.lowify.com.br/checkout?product_id=wP70dY', 'no')}
      whatYouGet={[
        'PDFs com apoio visual e teoria',
        'Curadoria de vídeos educativos',
        'Guia de apoio ao estudo',
        'Cronograma de prática',
        'Materiais complementares',
      ]}
    />
  );
}

export function PackUkulelePage() {
  return <ProductSalesPage {...makePackProps('Ukulele', 'https://pay.lowify.com.br/checkout?product_id=GpM4a1', 'no')} />;
}

export function BootcampUkulelePage() {
  return <ProductSalesPage {...makeBootcampProps('Ukulele', 'https://pay.lowify.com.br/checkout?product_id=xw0Bew', 'no')} />;
}

export function VipUkulelePage() {
  return <ProductSalesPage {...makeVipProps('Ukulele', 'https://pay.lowify.com.br/checkout?product_id=42A8mJ', 'no')} />;
}
