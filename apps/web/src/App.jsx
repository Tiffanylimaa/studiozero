import React, { useEffect } from 'react';
import { Link, Route, Routes, BrowserRouter as Router, useLocation } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import { initTracking, trackPageView } from '@/lib/tracking.js';
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
import ProdutosPage from '@/pages/ProdutosPage.jsx';
import PackViolaoPage from '@/pages/PackViolaoPage.jsx';
import PackGuitarraPage from '@/pages/PackGuitarraPage.jsx';
import BootcampViolaoPage from '@/pages/BootcampViolaoPage.jsx';
import BootcampGuitarraPage from '@/pages/BootcampGuitarraPage.jsx';
import {
  BootcampBaixoPage,
  BootcampBateriaPage,
  BootcampTecladoPage,
  BootcampUkulelePage,
  PackBaixoPage,
  PackBateriaPage,
  PackTecladoPage,
  PackUkulelePage,
  VipBaixoPage,
  VipBateriaPage,
  VipGuitarraPage,
  VipTecladoPage,
  VipUkulelePage,
  VipViolaoPage,
} from '@/pages/AdditionalProductSalesPages.jsx';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <TrackingProvider />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre" element={<SobrePage />} />
        <Route path="/guitarra" element={<GuitarraPage />} />
        <Route path="/baixo" element={<BaixoPage />} />
        <Route path="/bateria" element={<BateriaPage />} />
        <Route path="/teclado" element={<TecladoPage />} />
        <Route path="/violao" element={<ViolaoPage />} />
        <Route path="/ukulele" element={<UkulelePage />} />
        <Route path="/produtos" element={<ProdutosPage />} />
        <Route path="/privacidade" element={<PrivacidadePage />} />
        <Route path="/acesso-material" element={<AcessoMaterialPage />} />
        <Route path="/pack-violao" element={<PackViolaoPage />} />
        <Route path="/pack-guitarra" element={<PackGuitarraPage />} />
        <Route path="/bootcamp-violao" element={<BootcampViolaoPage />} />
        <Route path="/bootcamp-guitarra" element={<BootcampGuitarraPage />} />
        <Route path="/vip-violao" element={<VipViolaoPage />} />
        <Route path="/vip-guitarra" element={<VipGuitarraPage />} />
        <Route path="/pack-baixo" element={<PackBaixoPage />} />
        <Route path="/bootcamp-baixo" element={<BootcampBaixoPage />} />
        <Route path="/vip-baixo" element={<VipBaixoPage />} />
        <Route path="/pack-bateria" element={<PackBateriaPage />} />
        <Route path="/bootcamp-bateria" element={<BootcampBateriaPage />} />
        <Route path="/vip-bateria" element={<VipBateriaPage />} />
        <Route path="/pack-teclado" element={<PackTecladoPage />} />
        <Route path="/bootcamp-teclado" element={<BootcampTecladoPage />} />
        <Route path="/vip-teclado" element={<VipTecladoPage />} />
        <Route path="/pack-ukulele" element={<PackUkulelePage />} />
        <Route path="/bootcamp-ukulele" element={<BootcampUkulelePage />} />
        <Route path="/vip-ukulele" element={<VipUkulelePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster theme="dark" />
    </Router>
  );
}

function TrackingProvider() {
  const location = useLocation();

  useEffect(() => {
    initTracking();
  }, []);

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location.pathname]);

  return null;
}

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="text-center space-y-6 px-4">
        <h1 className="text-8xl font-syne font-bold text-primary">404</h1>
        <p className="text-2xl font-light text-muted-foreground uppercase tracking-widest">Sinal Perdido</p>
        <Link
          to="/"
          className="inline-block px-8 py-4 bg-card border border-border text-foreground font-syne uppercase tracking-widest hover:border-primary transition-colors"
        >
          Voltar à Base
        </Link>
      </div>
    </div>
  );
}

export default App;
