import { motion } from 'motion/react';
import { Mail, Phone, Github, MapPin, Copy, Check, ArrowUpRight, Sparkles, Linkedin, Twitter, Instagram, MessageCircle, FileDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data';
import { generateResumePDF } from '../utils/resumeGenerator';
import avatarImg from '../assets/images/user_avatar_1783463091970.jpg';

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    'Frontend Engineer',
    'Web3 Developer',
    'React Specialist',
    'Sui Contributor'
  ];

  useEffect(() => {
    let timer: any;
    const activeRole = roles[currentRoleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Add character
        setDisplayText(activeRole.substring(0, displayText.length + 1));

        if (displayText === activeRole) {
          // Stay fully typed for 2 seconds
          timer = setTimeout(() => setIsDeleting(true), 2000);
        } else {
          // Speed of typing next character
          timer = setTimeout(handleTyping, 90);
        }
      } else {
        // Remove character
        setDisplayText(activeRole.substring(0, displayText.length - 1));

        if (displayText === '') {
          setIsDeleting(false);
          // Move to next role
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        } else {
          // Speed of deleting next character
          timer = setTimeout(handleTyping, 45);
        }
      }
    };

    timer = setTimeout(handleTyping, isDeleting ? 45 : 95);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex]);

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
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Premium ambient backdrop layered with tech grid (Sui.io Style) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Grids with radial masking */}
        <div className="absolute inset-0 tech-grid opacity-75 dark:opacity-90" />
        <div className="absolute inset-0 tech-grid-dense opacity-45 dark:opacity-30" />
        
        {/* Liquid floating neon gradient backdrops */}
        <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-yellow-600/10 to-amber-600/5 blur-[120px] animate-float-slow" />
        <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-yellow-500/10 to-amber-500/2 blur-[140px] animate-float-reverse" />
        <div className="absolute top-[40%] left-[30%] w-[350px] h-[350px] rounded-full bg-yellow-500/5 dark:bg-amber-500/5 blur-[110px] animate-soft-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Left Side: Copywriting */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Mobile profile avatar picture - shown on mobile/tablet, hidden on large desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex lg:hidden items-center gap-4 mb-6"
          >
            <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-brand-accent/30 shadow-[0_0_20px_rgba(234,179,8,0.15)]">
              <img 
                src={avatarImg} 
                alt="Ayobami Oketona Portrait" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="text-[10px] font-mono text-brand-accent uppercase tracking-widest block font-bold mb-0.5">Web3 Frontend Developer</span>
              <h2 className="text-base font-bold text-brand-text tracking-wide">{PERSONAL_INFO.nickname}</h2>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight text-brand-text leading-tight mb-4"
          >
            I am <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 font-extrabold tracking-wide decoration-yellow-500/30 underline underline-offset-8">{PERSONAL_INFO.nickname}</span>,
            <br />
            <span className="inline-block text-brand-accent min-h-[1.2em]">
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
                className="inline-block w-[3px] h-[0.9em] ml-1.5 bg-gradient-to-t from-yellow-400 to-amber-500 align-middle"
              />
            </span>
          </motion.h1>

          {/* Location Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-1.5 text-[10px] xs:text-xs sm:text-sm text-brand-muted mb-6 font-mono"
          >
            <MapPin className="w-3.5 h-3.5 text-brand-muted/70" />
            <span>{PERSONAL_INFO.location}</span>
            <span className="text-brand-muted/40">•</span>
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Open to Web3 roles
            </span>
          </motion.div>

          {/* Description Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs sm:text-sm md:text-base text-brand-muted font-sans font-light leading-relaxed mb-8 max-w-xl"
          >
            Specializing in high-performance React web applications and decentralized Web3 user experiences.
          </motion.p>

          {/* Main Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row flex-wrap gap-4 w-full mb-10"
          >
            <button
              id="hero-play-btn"
              onClick={() => handleScrollTo('projects')}
              className="px-6 py-3.5 rounded-2xl text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-[0.98] shadow-[0_4px_20px_rgba(234,179,8,0.12)] dark:shadow-[0_4px_25px_rgba(234,179,8,0.25)] bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 hover:from-yellow-400 hover:to-amber-400 text-zinc-950 border-0 w-full sm:w-auto"
            >
              Explore Projects
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              id="hero-cli-btn"
              onClick={() => handleScrollTo('experience')}
              className="px-6 py-3.5 rounded-2xl text-sm font-medium bg-brand-bg/50 dark:bg-black/80 border border-brand-border hover:border-brand-accent/40 text-brand-muted hover:text-brand-text transition-all flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto"
            >
              View Journey
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              id="hero-resume-btn"
              onClick={generateResumePDF}
              className="px-6 py-3.5 rounded-2xl text-sm font-medium bg-white/5 dark:bg-zinc-900/30 backdrop-blur-md border border-brand-border/60 hover:border-yellow-500/50 text-brand-text hover:text-yellow-500 hover:shadow-[0_0_20px_rgba(234,179,8,0.15)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-[0.98] group w-full sm:w-auto"
            >
              Download Resume
              <FileDown className="w-4 h-4 text-brand-muted group-hover:text-yellow-500 transition-colors" />
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
                className="p-2.5 rounded-xl bg-brand-bg/50 dark:bg-black/40 border border-brand-border hover:border-yellow-500/40 text-brand-muted hover:text-brand-text transition-all hover:scale-115 cursor-pointer flex items-center justify-center hover:shadow-md hover:shadow-yellow-500/5"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                id="hero-linkedin-link"
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-brand-bg/50 dark:bg-black/40 border border-brand-border hover:border-yellow-500/40 text-brand-muted hover:text-brand-text transition-all hover:scale-115 cursor-pointer flex items-center justify-center hover:shadow-md hover:shadow-yellow-500/5"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                id="hero-twitter-link"
                href={PERSONAL_INFO.twitter}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-brand-bg/50 dark:bg-black/40 border border-brand-border hover:border-yellow-500/40 text-brand-muted hover:text-brand-text transition-all hover:scale-115 cursor-pointer flex items-center justify-center hover:shadow-md hover:shadow-yellow-500/5"
                title="Twitter / X Profile"
              >
                <Twitter className="w-4 h-4" />
              </a>

              <a
                id="hero-instagram-link"
                href={PERSONAL_INFO.instagram}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-brand-bg/50 dark:bg-black/40 border border-brand-border hover:border-yellow-500/40 text-brand-muted hover:text-brand-text transition-all hover:scale-115 cursor-pointer flex items-center justify-center hover:shadow-md hover:shadow-yellow-500/5"
                title="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                id="hero-whatsapp-link"
                href={PERSONAL_INFO.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-brand-bg/50 dark:bg-black/40 border border-brand-border hover:border-yellow-500/40 text-brand-muted hover:text-brand-text transition-all hover:scale-115 cursor-pointer flex items-center justify-center hover:shadow-md hover:shadow-yellow-500/5"
                title="WhatsApp Chat"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>

            <div className="flex flex-wrap gap-2.5 items-center w-full sm:w-auto">
              <a
                id="hero-email-link"
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-brand-bg/50 dark:bg-black/40 border border-brand-border hover:border-yellow-500/40 hover:text-brand-text text-brand-muted text-xs font-mono transition-all cursor-pointer max-w-full"
                title="Send direct email"
              >
                <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                <span className="truncate max-w-[160px] xs:max-w-[220px] sm:max-w-none">{PERSONAL_INFO.email}</span>
              </a>

              <button
                id="hero-copy-email-btn"
                onClick={handleCopyEmail}
                className="p-2 rounded-xl bg-brand-bg/50 dark:bg-black/40 border border-brand-border hover:border-yellow-500/40 hover:text-brand-text text-brand-muted transition-all cursor-pointer flex items-center justify-center flex-shrink-0"
                title="Copy email to clipboard"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>

              <a
                id="hero-call-link"
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-brand-bg/50 dark:bg-black/40 border border-brand-border hover:border-yellow-500/40 hover:text-brand-text text-brand-muted text-xs font-mono transition-all max-w-full"
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
              className="absolute inset-4 rounded-full border border-dashed border-brand-accent/20 pointer-events-none"
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            />

            {/* Centered Profile Picture Centerpiece */}
            <div className="absolute inset-[15%] rounded-full overflow-hidden border-2 border-brand-accent/30 shadow-[0_0_50px_rgba(234,179,8,0.25)] bg-black/40 backdrop-blur-md">
              <img 
                src={avatarImg} 
                alt="Ayobami Oketona Portrait" 
                className="w-full h-full object-cover select-none scale-[1.03]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

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
