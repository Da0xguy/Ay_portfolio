import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Cpu, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export default function Navbar({
  activeSection,
  setActiveSection,
  theme,
  toggleTheme
}: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 260, damping: 20 } }
  };

  return (
    <motion.nav
      id="main-navbar"
      initial={{ y: -100, x: '-50%', opacity: 0 }}
      animate={{ y: 0, x: '-50%', opacity: 1 }}
      transition={{ duration: 0.6, type: 'spring', stiffness: 120, damping: 18 }}
      className={`fixed left-1/2 z-40 transition-all duration-500 ease-out ${
        isScrolled
          ? 'top-4 w-[92%] sm:w-[85%] max-w-4xl rounded-2xl bg-brand-bg/85 dark:bg-black/80 border border-brand-border shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl py-3 px-5 sm:px-8'
          : 'top-0 w-full rounded-none bg-transparent border-b border-transparent py-6 px-6 sm:px-12'
      }`}
    >
      <div className="w-full flex items-center justify-between">
        {/* Logo */}
        <a
          id="nav-logo"
          href="#home"
          onClick={() => {
            setActiveSection('home');
            setIsMobileMenuOpen(false);
          }}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-yellow-500 via-amber-500 to-yellow-600 dark:from-black dark:to-slate-900 border border-brand-border group-hover:border-brand-accent/40 transition-all">
            <Cpu className="w-4 h-5 transition-transform group-hover:scale-110 text-white" />
            <div className="absolute inset-0 rounded-xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className="font-display text-sm tracking-widest font-semibold text-brand-text">
            AY
          </span>
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-1.5 p-1 rounded-full bg-brand-bg/50 dark:bg-black/40 border border-brand-border backdrop-blur-md">
            {navItems.map((item) => (
              <a
                key={item.id}
                id={`nav-item-${item.id}`}
                href={`#${item.id}`}
                onClick={() => setActiveSection(item.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all relative cursor-pointer ${
                  activeSection === item.id ? 'text-brand-text' : 'text-brand-muted hover:text-brand-text'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeNavBackground"
                    className="absolute inset-0 rounded-full bg-brand-accent/10 dark:bg-white/10 -z-10 border border-brand-accent/20 dark:border-white/20"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    style={{
                      boxShadow: '0 0 12px 0px var(--theme-glow)'
                    }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Theme Toggle Button */}
          <button
            id="theme-toggle-btn"
            onClick={toggleTheme}
            className="p-2 rounded-full bg-brand-bg/60 dark:bg-black/40 border border-brand-border text-brand-muted hover:text-brand-text hover:scale-110 active:scale-95 transition-all cursor-pointer flex items-center justify-center shadow-sm"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          {/* Theme Toggle (Mobile) */}
          <button
            id="theme-toggle-btn-mobile"
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-brand-bg/60 dark:bg-black/50 border border-brand-border text-brand-muted hover:text-brand-text transition-all active:scale-90 flex items-center justify-center"
            title="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-4.5 h-4.5 text-amber-400" /> : <Moon className="w-4.5 h-4.5 text-indigo-600" />}
          </button>

          <button
            id="mobile-menu-trigger"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-xl bg-brand-bg/60 dark:bg-black/50 border border-brand-border text-brand-muted hover:text-brand-text transition-all hover:scale-105 active:scale-95 flex items-center justify-center"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden w-full bg-brand-bg/95 dark:bg-black/95 backdrop-blur-xl border border-brand-border rounded-2xl mt-4 overflow-hidden shadow-2xl absolute left-0 top-full"
          >
            <motion.div 
              className="px-6 py-6 flex flex-col gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              {navItems.map((item) => (
                <motion.a
                  key={item.id}
                  id={`mobile-nav-item-${item.id}`}
                  href={`#${item.id}`}
                  variants={itemVariants}
                  onClick={() => {
                    setActiveSection(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                    className={`text-sm font-medium py-1.5 tracking-wide block transition-colors ${
                    activeSection === item.id
                      ? 'text-brand-text font-bold pl-2 border-l-2 border-yellow-500'
                      : 'text-brand-muted hover:text-brand-text pl-0 hover:pl-2'
                  }`}
                >
                  {item.label}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
