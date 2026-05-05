import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home',     path: '/' },
    { name: 'Produtos', path: '/produtos' },
    { name: 'Sobre',    path: '/sobre' },
    { name: 'Guitarra', path: '/guitarra' },
    { name: 'Baixo',    path: '/baixo' },
    { name: 'Bateria',  path: '/bateria' },
    { name: 'Teclado',  path: '/teclado' },
    { name: 'Violão',   path: '/violao' },
    { name: 'Ukulele',  path: '/ukulele' },
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 border-b border-border"
      initial={{ backgroundColor: 'rgba(0,0,0,0)', backdropFilter: 'blur(0px)' }}
      animate={{
        backgroundColor: scrolled ? 'rgba(0,0,0,0.92)' : 'rgba(0,0,0,0.75)',
        backdropFilter: scrolled ? 'blur(24px)' : 'blur(8px)',
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}
    >
      <nav className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-[4.5rem]">

          <Link to="/" className="flex items-center z-50 group">
            <span className="font-syne text-2xl font-bold tracking-tighter uppercase text-[#E8E6E1] md:text-[1.65rem]">
              Studio
              <motion.span 
                className="inline-block text-[#E8202A]"
                animate={{ 
                  color: ['#E8202A', '#ff4d55', '#E8202A'] 
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                Z
              </motion.span>
              ero
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-5">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative py-2 text-[11px] font-bold uppercase tracking-widest transition-colors duration-300"
                style={{ color: isActive(link.path) ? '#E8202A' : '#8A8A8A' }}
                onMouseEnter={(e) => { if (!isActive(link.path)) e.target.style.color = '#E8E6E1'; }}
                onMouseLeave={(e) => { if (!isActive(link.path)) e.target.style.color = '#8A8A8A'; }}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E8202A]"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden z-50 p-2 transition-colors hover:text-[#E8202A] text-[#E8E6E1]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.span 
                  key="x" 
                  initial={{ rotate: -90, opacity: 0 }} 
                  animate={{ rotate: 0, opacity: 1 }} 
                  exit={{ rotate: 90, opacity: 0 }} 
                  transition={{ duration: 0.2 }}
                  className="block"
                >
                  <X size={24} />
                </motion.span>
              ) : (
                <motion.span 
                  key="menu" 
                  initial={{ rotate: 90, opacity: 0 }} 
                  animate={{ rotate: 0, opacity: 1 }} 
                  exit={{ rotate: -90, opacity: 0 }} 
                  transition={{ duration: 0.2 }}
                  className="block"
                >
                  <Menu size={24} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ opacity: 0, clipPath: 'inset(0% 0% 100% 0%)' }}
            animate={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
            exit={{ opacity: 0, clipPath: 'inset(0% 0% 100% 0%)' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 right-0 top-full z-40 lg:hidden border-t border-border bg-black/95 backdrop-blur-xl shadow-[0_24px_60px_rgba(0,0,0,0.55)]"
          >
            <div className="max-h-[calc(100svh-4.5rem)] overflow-y-auto px-5 py-4">
              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ delay: i * 0.035, duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex min-h-[3rem] items-center justify-between border border-border bg-[#0D0D0D] px-4 py-3 font-syne text-sm font-bold uppercase tracking-widest transition-colors duration-300 hover:border-[#E8202A] hover:text-[#E8202A]"
                      style={{
                        color: isActive(link.path) ? '#E8202A' : '#E8E6E1',
                        borderColor: isActive(link.path) ? 'rgba(232,32,42,0.65)' : undefined,
                      }}
                    >
                      <span>{link.name}</span>
                      <span className="h-1.5 w-1.5 bg-current" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Header;
