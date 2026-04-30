import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import ScrollToTop from './components/ScrollToTop.jsx';
import HomePage from './pages/HomePage.jsx';
import SobrePage from './pages/SobrePage.jsx';
import GuitarraPage from './pages/GuitarraPage.jsx';
import BaixoPage from './pages/BaixoPage.jsx';
import BateriaPage from './pages/BateriaPage.jsx';
import TecladoPage from './pages/TecladoPage.jsx';
import ViolaoPage from './pages/ViolaoPage.jsx';
import UkulelePage from './pages/UkulelePage.jsx';
import PrivacidadePage from '@/pages/PrivacidadePage.jsx';
import AcessoMaterialPage from '@/pages/AcessoMaterialPage.jsx';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre" element={<SobrePage />} />
        <Route path="/guitarra" element={<GuitarraPage />} />
        <Route path="/baixo" element={<BaixoPage />} />
        <Route path="/bateria" element={<BateriaPage />} />
        <Route path="/teclado" element={<TecladoPage />} />
        <Route path="/violao" element={<ViolaoPage />} />
        <Route path="/ukulele" element={<UkulelePage />} />
        <Route path="/privacidade" element={<PrivacidadePage />} />
        <Route path="/acesso-material" element={<AcessoMaterialPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster theme="dark" />
    </Router>
  );
}

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="text-center space-y-6 px-4">
        <h1 className="text-8xl font-syne font-bold text-primary">404</h1>
        <p className="text-2xl font-light text-muted-foreground uppercase tracking-widest">Sinal Perdido</p>
        <a 
          href="/" 
          className="inline-block px-8 py-4 bg-card border border-border text-foreground font-syne uppercase tracking-widest hover:border-primary transition-colors"
        >
          Voltar à Base
        </a>
      </div>
    </div>
  );
}

export default App;
