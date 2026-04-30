
import React from 'react';
import { Instagram } from 'lucide-react';
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
            <h4 className="font-syne text-lg font-bold text-foreground">Contato</h4>
            <div className="space-y-2 text-muted-foreground font-light">
              <p>equipe@studiozero.io</p>
              <p>WhatsApp: em breve</p>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-syne text-lg font-bold text-foreground">Redes</h4>
            <div className="flex items-center space-x-4">
              <a 
                href="https://www.instagram.com/0studio.zero/?utm_source=ig_web_button_share_sheet" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 text-sm text-muted-foreground font-light">
          <p>&copy; {new Date().getFullYear()} Studio Zero. Todos os direitos reservados.</p>
          <div className="flex items-center space-x-6">
            <Link to="/privacidade" className="hover:text-foreground transition-colors">
              Privacidade
            </Link>
            <Link to="/admin" className="hover:text-primary transition-colors">
              Admin Login
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
