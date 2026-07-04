import { motion } from 'motion/react';
import { Mail, Phone, Github, MapPin, Copy, Check, ArrowUpRight, Sparkles, Linkedin, Twitter, Instagram, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { PERSONAL_INFO } from '../data';

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Dynamic ambient glass glow backdrops */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="glass-glow w-[350px] h-[350px] top-1/4 left-1/10 animate-soft-pulse bg-violet-500/5 dark:bg-violet-500/10" />
        <div className="glass-glow w-[450px] h-[450px] bottom-1/5 right-1/10 bg-cyan-500/5 dark:bg-cyan-500/5 animate-soft-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Left Side: Copywriting */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="px-3 py-1.5 rounded-xl border text-xs font-mono font-semibold flex items-center gap-1.5 mb-6 bg-violet-500/5 dark:bg-violet-500/10 border-violet-500/20 dark:border-violet-500/30 text-violet-600 dark:text-violet-400"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Frontend & Web3 Architect
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-bold font-display tracking-tight text-brand-text leading-tight mb-4"
          >
            I am <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-cyan-500 dark:from-violet-400 dark:to-cyan-400 font-extrabold tracking-wide decoration-violet-500/30 underline underline-offset-8">{PERSONAL_INFO.nickname}</span>,
            <br />
            shaping decentralized interfaces.
          </motion.h1>

          {/* Location Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-2 text-sm text-brand-muted mb-6 font-mono"
          >
            <MapPin className="w-4 h-4 text-brand-muted/70" />
            <span>{PERSONAL_INFO.location}</span>
            <span className="text-brand-muted/40">•</span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Open to Web3 roles
            </span>
          </motion.div>

          {/* Description Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-brand-muted font-sans font-light leading-relaxed mb-8 max-w-xl"
          >
            Frontend-focused software developer and product-minded technologist crafting high-performance user interfaces and decentralized Web3 solutions.
          </motion.p>

          {/* Main Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 w-full mb-10"
          >
            <button
              id="hero-play-btn"
              onClick={() => handleScrollTo('projects')}
              className="px-6 py-3.5 rounded-2xl text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-[0.98] shadow-[0_4px_20px_rgba(124,58,237,0.15)] dark:shadow-[0_4px_20px_rgba(124,58,237,0.35)] bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white border-0"
            >
              Explore Projects
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              id="hero-cli-btn"
              onClick={() => handleScrollTo('experience')}
              className="px-6 py-3.5 rounded-2xl text-sm font-medium bg-brand-bg/50 dark:bg-black/80 border border-brand-border hover:border-brand-accent/20 text-brand-muted hover:text-brand-text transition-all flex items-center gap-2 cursor-pointer"
            >
              View Journey
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Socials & Quick Contact */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-5 items-center text-brand-muted border-t border-brand-border pt-8 w-full"
          >
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-muted/80">Contact / Socials</span>
            
            <div className="flex flex-wrap gap-3">
              <a
                id="hero-github-link"
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-brand-bg/50 dark:bg-black/40 border border-brand-border hover:border-violet-500/40 text-brand-muted hover:text-brand-text transition-all hover:scale-115 cursor-pointer flex items-center justify-center hover:shadow-md hover:shadow-violet-500/5"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                id="hero-linkedin-link"
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-brand-bg/50 dark:bg-black/40 border border-brand-border hover:border-violet-500/40 text-brand-muted hover:text-brand-text transition-all hover:scale-115 cursor-pointer flex items-center justify-center hover:shadow-md hover:shadow-violet-500/5"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                id="hero-twitter-link"
                href={PERSONAL_INFO.twitter}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-brand-bg/50 dark:bg-black/40 border border-brand-border hover:border-violet-500/40 text-brand-muted hover:text-brand-text transition-all hover:scale-115 cursor-pointer flex items-center justify-center hover:shadow-md hover:shadow-violet-500/5"
                title="Twitter / X Profile"
              >
                <Twitter className="w-4 h-4" />
              </a>

              <a
                id="hero-instagram-link"
                href={PERSONAL_INFO.instagram}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-brand-bg/50 dark:bg-black/40 border border-brand-border hover:border-violet-500/40 text-brand-muted hover:text-brand-text transition-all hover:scale-115 cursor-pointer flex items-center justify-center hover:shadow-md hover:shadow-violet-500/5"
                title="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                id="hero-whatsapp-link"
                href={PERSONAL_INFO.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-brand-bg/50 dark:bg-black/40 border border-brand-border hover:border-violet-500/40 text-brand-muted hover:text-brand-text transition-all hover:scale-115 cursor-pointer flex items-center justify-center hover:shadow-md hover:shadow-violet-500/5"
                title="WhatsApp Chat"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>

            <div className="flex flex-wrap gap-2.5 items-center w-full sm:w-auto">
              <a
                id="hero-email-link"
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-brand-bg/50 dark:bg-black/40 border border-brand-border hover:border-violet-500/40 hover:text-brand-text text-brand-muted text-xs font-mono transition-all cursor-pointer max-w-full"
                title="Send direct email"
              >
                <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                <span className="truncate max-w-[160px] xs:max-w-[220px] sm:max-w-none">{PERSONAL_INFO.email}</span>
              </a>

              <button
                id="hero-copy-email-btn"
                onClick={handleCopyEmail}
                className="p-2 rounded-xl bg-brand-bg/50 dark:bg-black/40 border border-brand-border hover:border-violet-500/40 hover:text-brand-text text-brand-muted transition-all cursor-pointer flex items-center justify-center flex-shrink-0"
                title="Copy email to clipboard"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>

              <a
                id="hero-call-link"
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-brand-bg/50 dark:bg-black/40 border border-brand-border hover:border-violet-500/40 hover:text-brand-text text-brand-muted text-xs font-mono transition-all max-w-full"
                title="Call directly"
              >
                <Phone className="w-3.5 h-3.5 flex-shrink-0" />
                <span className="truncate max-w-[120px] sm:max-w-none">{PERSONAL_INFO.phone}</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Interactive Floating Glass Display Decoration */}
        <div className="lg:col-span-5 hidden lg:flex justify-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, cubicBezier: [0.16, 1, 0.3, 1] }}
            className="w-[340px] h-[340px] relative"
            style={{ perspective: 1000 }}
          >
            {/* Background floating orbital element */}
            <motion.div
              className="absolute inset-4 rounded-full border border-dashed border-brand-border pointer-events-none"
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            />

            {/* Glowing Center core */}
            <div className="absolute inset-[30%] rounded-full opacity-30 dark:opacity-20 filter blur-2xl animate-soft-pulse bg-gradient-to-tr from-violet-600 to-cyan-400" />

            {/* Glass layer 1: Background Layer */}
            <motion.div
              className="absolute inset-[15%] glass-panel rounded-3xl p-5 border shadow-2xl flex flex-col justify-between"
              animate={{
                y: [0, -10, 0],
                rotateX: [0, 8, 0],
                rotateY: [0, -8, 0]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="flex justify-between items-start">
                <div className="w-2.5 h-2.5 rounded-full bg-brand-muted/40" />
                <span className="font-mono text-[9px] text-brand-muted tracking-wider">SYSTEM STATUS</span>
              </div>
              <div className="font-mono text-left text-[11px] text-brand-muted space-y-1">
                <div className="text-emerald-500 font-semibold">✔ APP_CORE DEPLOYED</div>
                <div>CLIENT_ID: DA0XGUY</div>
                <div>FRAMEWORK: REACT + TS</div>
              </div>
            </motion.div>

            {/* Glass layer 2: Foreground overlapping Layer */}
            <motion.div
              className="absolute top-[35%] left-[25%] right-[-10%] bottom-[-5%] glass-panel rounded-3xl p-6 border shadow-2xl flex flex-col justify-between"
              animate={{
                y: [0, 10, 0],
                rotateX: [0, -6, 0],
                rotateY: [0, 12, 0]
              }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            >
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono font-semibold text-brand-text">System Statistics</span>
                <span className="w-2 h-2 rounded-full animate-ping bg-brand-accent" />
              </div>

              {/* Mock Developer stats card */}
              <div className="text-left space-y-3 mt-4">
                <div className="font-mono text-[10px] text-brand-muted">PROJECTS SHIPPED</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold font-sans tracking-tight text-brand-text">12+</span>
                  <span className="text-xs font-mono font-semibold text-brand-accent">LIVE</span>
                </div>
                <div className="w-full bg-brand-bg/50 dark:bg-black/50 rounded-lg p-2.5 border border-brand-border flex items-center justify-between">
                  <div className="font-mono text-[9px] text-brand-muted">EXPERIENCE</div>
                  <div className="font-mono text-[9px] text-brand-text font-semibold">FRONTEND / WEB3</div>
                </div>
              </div>

              <div className="flex justify-between items-center text-[10px] text-brand-muted font-mono mt-2">
                <span>STATUS: Active Code</span>
                <span className="text-brand-muted/60">PRODUCTION</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
