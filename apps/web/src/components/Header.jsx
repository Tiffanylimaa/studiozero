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
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">

          <Link to="/" className="flex items-center z-50 group">
            <span className="font-syne text-3xl font-bold tracking-tighter uppercase text-[#E8E6E1]">
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
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative text-xs font-bold tracking-widest uppercase transition-colors duration-300 py-2"
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
                  <X size={28} />
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
                  <Menu size={28} />
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
            className="fixed inset-0 z-40 flex flex-col items-center justify-center space-y-6 pt-20 lg:hidden bg-black/95 backdrop-blur-xl overflow-y-auto pb-10"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: i * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-syne font-bold tracking-widest uppercase transition-colors duration-300 hover:text-[#E8202A]"
                  style={{ color: isActive(link.path) ? '#E8202A' : '#E8E6E1' }}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Header;
