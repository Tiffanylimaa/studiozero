
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2 space-y-6">
            <span className="font-syne text-3xl font-bold tracking-tighter text-foreground uppercase block">
              Studio Zero
            </span>
            <p className="text-muted-foreground max-w-sm font-light">
              Música de forma visual. Do zero ao play.
            </p>
          </div>
          
          <div className="space-y-6">
            <h4 className="font-syne text-lg font-bold text-foreground">Contatos</h4>
            <div className="space-y-2 text-muted-foreground font-light">
              <a 
                href="https://www.instagram.com/0studio.zero" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:text-primary transition-colors"
              >
                Instagram: @0studio.zero
              </a>
              <a
                href="mailto:equipe@studiozero.io"
                className="block hover:text-primary transition-colors"
              >
                E-mail: equipe@studiozero.io
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 text-sm text-muted-foreground font-light">
          <p>&copy; {new Date().getFullYear()} Studio Zero. Todos os direitos reservados.</p>
          <div className="flex items-center space-x-6">
            <Link to="/privacidade" className="hover:text-foreground transition-colors">
              Termos e Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
