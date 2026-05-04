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

function BootcampViolaoPage() {
  return (
    <ProductSalesPage
      productName="Bootcamp Zero ao Play | Violão"
      instrument="Violão"
      title="Siga uma trilha prática para estudar violão com mais constância."
      subtitle="Um bootcamp digital para sair da prática aleatória e seguir um caminho de estudo com começo, meio e fim."
      price="R$ 30,00"
      checkoutUrl="https://pay.lowify.com.br/checkout?product_id=mCPhYk"
      whatYouGet={[
        'Cronograma de 30 dias',
        'Exercícios por etapa',
        'Materiais de apoio',
        'Orientação de prática',
      ]}
      idealFor={[
        'Quem começa e para nos estudos',
        'Quem precisa de uma rotina simples para praticar violão',
        'Quem quer organizar melhor sua evolução musical',
      ]}
      faq={faq}
      finalCta="Comece hoje sua trilha de estudo no violão."
    />
  );
}

export default BootcampViolaoPage;
