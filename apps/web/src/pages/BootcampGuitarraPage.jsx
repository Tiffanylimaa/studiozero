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

function BootcampGuitarraPage() {
  return (
    <ProductSalesPage
      productName="Bootcamp Zero ao Play | Guitarra"
      instrument="Guitarra"
      title="Siga uma trilha prática para estudar guitarra com mais constância."
      subtitle="Um bootcamp digital para sair da prática aleatória e seguir um caminho de estudo com começo, meio e fim."
      price="R$ 30,00"
      checkoutUrl="https://pay.lowify.com.br/checkout?product_id=4Fpbw7"
      positioningLabel="Organize sua prática em 30 dias."
      whatYouGet={[
        'Cronograma de 30 dias',
        'Exercícios por etapa',
        'Materiais de apoio',
        'Orientação de prática',
      ]}
      idealFor={[
        'Quem começa e para nos estudos',
        'Quem precisa de uma rotina simples para praticar guitarra',
        'Quem quer organizar melhor sua evolução musical',
      ]}
      faq={faq}
      finalCta="Comece hoje sua trilha de estudo na guitarra."
      bonusTitle="Bônus incluídos"
      bonusItems={[
        'Curadoria de vídeos educativos',
        'Dicionário visual / apoio complementar',
      ]}
      upgradeTitle="Quer também os guias e materiais complementares?"
      upgradeText="O Pacote VIP reúne a trilha de estudo com materiais extras para quem quer uma experiência mais completa no instrumento."
      upgradeLink="/vip-guitarra"
    />
  );
}

export default BootcampGuitarraPage;
