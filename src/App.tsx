import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { PERSONAL_INFO } from './data';
import { Github, Linkedin, Twitter, Instagram, MessageCircle, Mail, Facebook } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved === 'light' || saved === 'dark') return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'dark';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  // ScrollSpy to track active section dynamically
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text font-sans relative transition-colors duration-300">
      {/* Absolute Dynamic Glowing Nodes - Pure Lively Gradient Glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full blur-[130px] opacity-[0.08] dark:opacity-[0.12] bg-gradient-to-tr from-violet-500 to-cyan-500" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[45vw] h-[45vw] rounded-full blur-[140px] opacity-[0.04] dark:opacity-[0.06] bg-gradient-to-br from-fuchsia-500 to-indigo-500" />
      </div>

      {/* Primary Sticky Header */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main Sections */}
      <main className="relative z-10">
        <Hero />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <About />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Experience />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Projects />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Skills />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Contact />
        </motion.div>
      </main>

      {/* Universal Footer */}
      <footer id="footer" className="py-16 border-t border-brand-border bg-brand-bg/80 dark:bg-black/40 backdrop-blur-md relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-display text-sm tracking-widest font-semibold text-brand-text hover:text-brand-accent transition-colors">
              AYOBAMI OKETONA
            </span>
            <div className="text-brand-muted/70 text-xs font-mono">
              &copy; {new Date().getFullYear()} All rights reserved.
            </div>
          </div>

          {/* Social Automatic Links */}
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-xl bg-brand-bg/50 dark:bg-black/40 border border-brand-border hover:border-violet-500/40 text-brand-muted hover:text-brand-text transition-all hover:scale-110 flex items-center justify-center cursor-pointer hover:shadow-sm hover:shadow-violet-500/5"
              title="Email Me"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-brand-bg/50 dark:bg-black/40 border border-brand-border hover:border-violet-500/40 text-brand-muted hover:text-brand-text transition-all hover:scale-110 flex items-center justify-center cursor-pointer hover:shadow-sm hover:shadow-violet-500/5"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-brand-bg/50 dark:bg-black/40 border border-brand-border hover:border-violet-500/40 text-brand-muted hover:text-brand-text transition-all hover:scale-110 flex items-center justify-center cursor-pointer hover:shadow-sm hover:shadow-violet-500/5"
              title="Connect on LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.twitter}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-brand-bg/50 dark:bg-black/40 border border-brand-border hover:border-violet-500/40 text-brand-muted hover:text-brand-text transition-all hover:scale-110 flex items-center justify-center cursor-pointer hover:shadow-sm hover:shadow-violet-500/5"
              title="Follow on Twitter / X"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.instagram}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-brand-bg/50 dark:bg-black/40 border border-brand-border hover:border-violet-500/40 text-brand-muted hover:text-brand-text transition-all hover:scale-110 flex items-center justify-center cursor-pointer hover:shadow-sm hover:shadow-violet-500/5"
              title="Follow on Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            {PERSONAL_INFO.facebook && (
              <a
                href={PERSONAL_INFO.facebook}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-brand-bg/50 dark:bg-black/40 border border-brand-border hover:border-violet-500/40 text-brand-muted hover:text-brand-text transition-all hover:scale-110 flex items-center justify-center cursor-pointer hover:shadow-sm hover:shadow-violet-500/5"
                title="Follow on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            )}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-brand-bg/50 dark:bg-black/40 border border-brand-border hover:border-violet-500/40 text-brand-muted hover:text-brand-text transition-all hover:scale-110 flex items-center justify-center cursor-pointer hover:shadow-sm hover:shadow-violet-500/5"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>

          <div className="flex gap-6 text-xs font-mono text-brand-muted">
            <a href="#home" className="hover:text-brand-accent transition-colors">Home</a>
            <a href="#about" className="hover:text-brand-accent transition-colors">About</a>
            <a href="#experience" className="hover:text-brand-accent transition-colors">Experience</a>
            <a href="#projects" className="hover:text-brand-accent transition-colors">Projects</a>
            <a href="#skills" className="hover:text-brand-accent transition-colors">Skills</a>
            <a href="#contact" className="hover:text-brand-accent transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
