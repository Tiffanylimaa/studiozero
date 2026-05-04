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

function PackViolaoPage() {
  return (
    <ProductSalesPage
      productName="Pack de Repertório | Violão"
      instrument="Violão"
      title="Estude músicas no violão com mais clareza visual e prática direcionada."
      subtitle="Um material digital com repertórios organizados, tablaturas e apoio teórico para transformar estudo solto em prática objetiva."
      price="R$ 20,00"
      checkoutUrl="https://pay.lowify.com.br/checkout?product_id=Q05erN"
      positioningLabel="Comece por aqui."
      whatYouGet={[
        'PDFs visuais e práticos',
        'Repertórios organizados',
        'Tablaturas de apoio',
        'Teoria aplicada ao estudo',
      ]}
      idealFor={[
        'Quem estuda violão sozinho e sente falta de direção',
        'Quem quer praticar músicas com material mais claro',
        'Quem busca organização sem depender de teoria solta',
      ]}
      faq={faq}
      finalCta="Comece hoje a estudar violão com mais direção."
      upgradeTitle="Quer uma experiência mais completa?"
      upgradeText="Se você quer ir além do material inicial e estudar com mais direção, veja também o Pacote VIP do mesmo instrumento, que reúne cronograma, guias e materiais complementares."
      upgradeLink="/vip-violao"
    />
  );
}

export default PackViolaoPage;
