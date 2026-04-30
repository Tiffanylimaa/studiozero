import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function PrivacidadePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Termos de Uso e Privacidade | Studio Zero</title>
        <meta
          name="description"
          content="Termos de uso e política de privacidade do Studio Zero para produtos digitais de música."
        />
      </Helmet>

      <Header />

      <main className="pt-28 md:pt-32">
        <section className="px-6 py-16 md:py-20 border-b border-border">
          <div className="max-w-4xl mx-auto">
            <p className="text-primary font-syne uppercase tracking-widest text-sm mb-6">
              Studio Zero
            </p>

            <h1 className="text-5xl md:text-7xl mb-8 leading-none">
              Termos de Uso<br />e Privacidade
            </h1>

            <p className="text-muted-foreground text-lg md:text-xl font-light max-w-3xl leading-relaxed">
              Esta página explica, de forma simples e direta, como funcionam o uso do site,
              a compra dos produtos digitais e o tratamento de informações pessoais.
            </p>
          </div>
        </section>

        <section className="px-6 py-16 md:py-20">
          <div className="max-w-4xl mx-auto bg-card border border-border p-8 md:p-12 space-y-14">
            <div>
              <h2 className="text-3xl md:text-4xl text-primary mb-6">
                Termos de Uso
              </h2>

              <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
                <p>
                  Ao acessar este site, você concorda com estes Termos de Uso. Caso não concorde
                  com alguma condição, recomendamos que não utilize o site ou os produtos oferecidos.
                </p>

                <p>
                  O Studio Zero oferece materiais digitais voltados ao aprendizado musical,
                  incluindo PDFs, guias, cronogramas, repertórios, conteúdos visuais e outros
                  materiais educativos.
                </p>

                <p>
                  Os produtos disponibilizados têm finalidade educacional. O resultado do uso dos
                  materiais pode variar de acordo com o tempo de prática, dedicação, experiência
                  prévia e forma de estudo de cada pessoa.
                </p>

                <p>
                  Após a compra, o acesso ao produto será enviado conforme o método definido no
                  momento da venda, como e-mail, plataforma de pagamento, área de membros ou outro
                  canal informado.
                </p>

                <p>
                  Os materiais adquiridos são de uso pessoal e individual. Não é permitido copiar,
                  revender, distribuir, compartilhar publicamente ou disponibilizar os conteúdos para
                  terceiros sem autorização prévia.
                </p>

                <p>
                  O Studio Zero pode atualizar produtos, preços, páginas, condições comerciais e
                  informações do site a qualquer momento, buscando melhorar a experiência dos usuários.
                </p>
              </div>
            </div>

            <div className="border-t border-border pt-14">
              <h2 className="text-3xl md:text-4xl text-primary mb-6">
                Política de Privacidade
              </h2>

              <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
                <p>
                  A sua privacidade é importante. Coletamos apenas as informações necessárias para
                  viabilizar o contato, a compra, a entrega dos produtos digitais e a melhoria da
                  experiência no site.
                </p>

                <p>
                  Podemos coletar dados como nome, e-mail, telefone, informações de pagamento e
                  dados fornecidos voluntariamente em formulários, mensagens ou páginas de compra.
                </p>

                <p>
                  As informações de pagamento podem ser processadas por plataformas externas, como
                  gateways de pagamento, plataformas de checkout ou sistemas de entrega digital.
                  O Studio Zero não armazena dados completos de cartão de crédito.
                </p>

                <p>
                  Os dados podem ser utilizados para enviar o produto adquirido, responder dúvidas,
                  prestar suporte, enviar comunicações relacionadas à compra e, quando autorizado,
                  compartilhar novidades, conteúdos e ofertas.
                </p>

                <p>
                  Não vendemos dados pessoais. Informações podem ser compartilhadas apenas com
                  ferramentas necessárias para funcionamento do site, pagamento, entrega do produto,
                  comunicação ou cumprimento de obrigações legais.
                </p>

                <p>
                  Você pode solicitar a atualização, correção ou exclusão dos seus dados entrando
                  em contato pelo e-mail informado no rodapé do site.
                </p>
              </div>
            </div>

            <div className="border-t border-border pt-14">
              <h2 className="text-3xl md:text-4xl text-primary mb-6">
                Compras, Acesso e Suporte
              </h2>

              <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
                <p>
                  Os produtos digitais são entregues conforme as instruções da página de venda ou
                  da plataforma utilizada no momento da compra.
                </p>

                <p>
                  Em caso de dificuldade de acesso, erro no recebimento ou dúvida sobre o material,
                  entre em contato com a equipe do Studio Zero pelo e-mail disponível no site.
                </p>

                <p>
                  As condições de reembolso, quando aplicáveis, seguirão as regras informadas na
                  página de venda, na plataforma de pagamento utilizada ou na legislação vigente.
                </p>
              </div>
            </div>

            <div className="border-t border-border pt-14">
              <h2 className="text-3xl md:text-4xl text-primary mb-6">
                Atualizações desta página
              </h2>

              <p className="text-muted-foreground font-light leading-relaxed">
                Estes Termos de Uso e Política de Privacidade podem ser atualizados periodicamente.
                A versão mais recente estará sempre disponível nesta página.
              </p>

              <p className="text-sm text-muted-foreground mt-8 uppercase tracking-widest">
                Última atualização: abril de 2026
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default PrivacidadePage;
