import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle, 
  Send, 
  Check, 
  Copy, 
  Sparkles, 
  ArrowUpRight, 
  Clock, 
  Linkedin, 
  Github, 
  Twitter,
  Facebook
} from 'lucide-react';
import { PERSONAL_INFO } from '../data';
import GlassCard from './GlassCard';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Web3 Project Collaboration',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [copiedField, setCopiedField] = useState<'email' | 'phone' | null>(null);

  const handleCopy = (text: string, field: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 3000);
      return;
    }

    setFormStatus('sending');

    // Simulate smooth API post request
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: 'Web3 Project Collaboration',
        message: ''
      });
    }, 1800);
  };

  const inquirySubjects = [
    'Web3 Project Collaboration',
    'Frontend / React Consultation',
    'Full-Time / Contract Hiring',
    'Sui Move Architecture Inquiry',
    'General Partnership / Other'
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="glass-glow w-[400px] h-[400px] top-1/4 right-1/10 bg-violet-500/5 dark:bg-violet-500/10 animate-soft-pulse" />
        <div className="glass-glow w-[350px] h-[350px] bottom-1/4 left-1/10 bg-cyan-500/5 dark:bg-cyan-500/5 animate-soft-pulse" style={{ animationDelay: '3s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-text font-display">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-cyan-500 dark:from-violet-400 dark:to-cyan-400 font-extrabold">Collaborate</span>
          </h2>
          <p className="text-brand-muted text-sm sm:text-base font-sans mt-3 max-w-xl">
            Whether you want to build a decentralized dApp, consult on frontend performance, or explore open opportunities, let's start the conversation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Direct Info Cards & Interactive Links (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Direct Channels Glass Card */}
            <GlassCard hoverEffect={false} className="p-6 text-left flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-xl border flex items-center justify-center bg-brand-bg/60 dark:bg-white/5 border-brand-border text-brand-accent">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-brand-text tracking-wide">Direct Channels</h3>
                    <span className="text-[9px] font-mono text-brand-muted/70 uppercase tracking-widest block">Quick Actionable Links</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Email Channel */}
                  <div className="group rounded-2xl border border-brand-border/40 hover:border-violet-500/20 bg-brand-bg/20 hover:bg-brand-bg/40 p-3.5 flex items-center justify-between transition-all duration-300">
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="w-9 h-9 rounded-xl bg-violet-500/5 dark:bg-violet-500/10 flex items-center justify-center text-violet-600 dark:text-violet-400 flex-shrink-0">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[10px] font-mono text-brand-muted/60 block">EMAIL ADDRESS</span>
                        <a 
                          href={`mailto:${PERSONAL_INFO.email}`} 
                          className="text-xs sm:text-sm font-semibold text-brand-text truncate block hover:text-brand-accent transition-colors"
                        >
                          {PERSONAL_INFO.email}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <button
                        onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                        className="p-1.5 rounded-lg border border-brand-border bg-brand-bg/60 hover:text-brand-text text-brand-muted transition-colors cursor-pointer"
                        title="Copy email"
                      >
                        {copiedField === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="p-1.5 rounded-lg border border-brand-border bg-brand-bg/60 hover:text-brand-text text-brand-muted transition-colors cursor-pointer flex items-center justify-center"
                        title="Open email client"
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp Direct */}
                  <div className="group rounded-2xl border border-brand-border/40 hover:border-emerald-500/20 bg-brand-bg/20 hover:bg-brand-bg/40 p-3.5 flex items-center justify-between transition-all duration-300">
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="w-9 h-9 rounded-xl bg-emerald-500/5 dark:bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 flex-shrink-0">
                        <MessageCircle className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[10px] font-mono text-brand-muted/60 block">WHATSAPP CHAT</span>
                        <a 
                          href={PERSONAL_INFO.whatsapp} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="text-xs sm:text-sm font-semibold text-brand-text truncate block hover:text-emerald-500 transition-colors"
                        >
                          Message Direct
                        </a>
                      </div>
                    </div>
                    <a
                      href={PERSONAL_INFO.whatsapp}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all cursor-pointer flex items-center gap-1 text-xs font-mono font-semibold px-3"
                    >
                      <span>Chat</span>
                      <MessageCircle className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Mobile Direct Dial */}
                  <div className="group rounded-2xl border border-brand-border/40 hover:border-cyan-500/20 bg-brand-bg/20 hover:bg-brand-bg/40 p-3.5 flex items-center justify-between transition-all duration-300">
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="w-9 h-9 rounded-xl bg-cyan-500/5 dark:bg-cyan-500/10 flex items-center justify-center text-cyan-600 dark:text-cyan-400 flex-shrink-0">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[10px] font-mono text-brand-muted/60 block">PHONE / VOICE CALL</span>
                        <a 
                          href={`tel:${PERSONAL_INFO.phone}`} 
                          className="text-xs sm:text-sm font-semibold text-brand-text truncate block hover:text-brand-accent transition-colors"
                        >
                          {PERSONAL_INFO.phone}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <button
                        onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                        className="p-1.5 rounded-lg border border-brand-border bg-brand-bg/60 hover:text-brand-text text-brand-muted transition-colors cursor-pointer"
                        title="Copy phone number"
                      >
                        {copiedField === 'phone' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                      <a
                        href={`tel:${PERSONAL_INFO.phone}`}
                        className="p-1.5 rounded-lg border border-brand-border bg-brand-bg/60 hover:text-brand-text text-brand-muted transition-colors cursor-pointer flex items-center justify-center"
                        title="Call phone"
                      >
                        <Phone className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Location and response-time tracker */}
              <div className="mt-6 pt-6 border-t border-brand-border/60 flex flex-wrap gap-4 items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-1.5 text-brand-muted">
                  <MapPin className="w-3.5 h-3.5 text-brand-muted/70" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-500 font-semibold bg-emerald-500/5 px-2.5 py-1 rounded-lg border border-emerald-500/10">
                  <Clock className="w-3.5 h-3.5 animate-pulse" />
                  <span>Response: &lt; 12 Hours</span>
                </div>
              </div>
            </GlassCard>

            {/* Micro-Scheduler/Consultation Call Pitch Card */}
            <GlassCard hoverEffect={true} className="p-6 text-left border-dashed border-brand-border/80 hover:border-violet-500/30">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-violet-600/10 text-violet-500 border border-violet-500/20 mt-0.5">
                  <Clock className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold text-brand-text tracking-wide">Looking for a consultation call?</h4>
                  <p className="text-xs text-brand-muted font-light leading-relaxed">
                    I run focused audit calls regarding React component structures, UI/UX performance optimization, and Sui Move Web3 layouts.
                  </p>
                  <div className="pt-2">
                    <a 
                      href={`mailto:${PERSONAL_INFO.email}?subject=Consultation Inquiry`}
                      className="text-xs font-mono font-semibold text-brand-text hover:text-brand-accent flex items-center gap-1 hover:underline"
                    >
                      Inquire for availability 
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* Social handles with small elegant icons */}
            <GlassCard hoverEffect={false} className="p-4 text-left flex items-center justify-between bg-brand-bg/30">
              <span className="text-[10px] font-mono uppercase tracking-wider text-brand-muted/70">Connect On Socials</span>
              <div className="flex gap-2">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl bg-brand-bg/50 dark:bg-black/40 border border-brand-border hover:border-violet-500/40 text-brand-muted hover:text-brand-text transition-all hover:scale-110 flex items-center justify-center cursor-pointer"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl bg-brand-bg/50 dark:bg-black/40 border border-brand-border hover:border-violet-500/40 text-brand-muted hover:text-brand-text transition-all hover:scale-110 flex items-center justify-center cursor-pointer"
                  title="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl bg-brand-bg/50 dark:bg-black/40 border border-brand-border hover:border-violet-500/40 text-brand-muted hover:text-brand-text transition-all hover:scale-110 flex items-center justify-center cursor-pointer"
                  title="Twitter / X"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl bg-brand-bg/50 dark:bg-black/40 border border-brand-border hover:border-violet-500/40 text-brand-muted hover:text-brand-text transition-all hover:scale-110 flex items-center justify-center cursor-pointer"
                  title="Instagram"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                {PERSONAL_INFO.facebook && (
                  <a
                    href={PERSONAL_INFO.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl bg-brand-bg/50 dark:bg-black/40 border border-brand-border hover:border-violet-500/40 text-brand-muted hover:text-brand-text transition-all hover:scale-110 flex items-center justify-center cursor-pointer"
                    title="Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                )}
              </div>
            </GlassCard>

          </div>

          {/* Right Column: Fully Interactive Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <GlassCard hoverEffect={false} className="p-8 text-left h-full flex flex-col justify-between">
              
              <div className="w-full">
                {/* Form Header */}
                <div className="flex justify-between items-center mb-6 border-b border-brand-border pb-5">
                  <div>
                    <h3 className="text-lg font-bold text-brand-text tracking-wide">Send Secure Transmission</h3>
                    <span className="text-[9px] font-mono text-brand-muted/70 uppercase tracking-widest block mt-0.5">Encrypted Local Delivery</span>
                  </div>
                  <span className="w-2 h-2 rounded-full animate-ping bg-brand-accent" />
                </div>

                {/* Form Fields */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="form-name" className="text-[10px] font-mono font-semibold uppercase tracking-wider text-brand-muted/80">
                        Your Name
                      </label>
                      <input
                        id="form-name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        disabled={formStatus === 'sending' || formStatus === 'success'}
                        placeholder="e.g. Satoshi Nakamoto"
                        className="w-full text-xs font-mono bg-brand-bg/55 dark:bg-black/60 border border-brand-border rounded-xl px-4 py-3 text-brand-text placeholder-brand-muted/40 focus:outline-none focus:border-violet-500/60 dark:focus:border-violet-400/40 transition-colors disabled:opacity-60"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="form-email" className="text-[10px] font-mono font-semibold uppercase tracking-wider text-brand-muted/80">
                        Email Address
                      </label>
                      <input
                        id="form-email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        disabled={formStatus === 'sending' || formStatus === 'success'}
                        placeholder="e.g. address@domain.com"
                        className="w-full text-xs font-mono bg-brand-bg/55 dark:bg-black/60 border border-brand-border rounded-xl px-4 py-3 text-brand-text placeholder-brand-muted/40 focus:outline-none focus:border-violet-500/60 dark:focus:border-violet-400/40 transition-colors disabled:opacity-60"
                      />
                    </div>

                  </div>

                  {/* Subject Dropdown Select */}
                  <div className="space-y-1.5">
                    <label htmlFor="form-subject" className="text-[10px] font-mono font-semibold uppercase tracking-wider text-brand-muted/80">
                      Inquiry Subject
                    </label>
                    <div className="relative">
                      <select
                        id="form-subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        disabled={formStatus === 'sending' || formStatus === 'success'}
                        className="w-full text-xs font-mono bg-brand-bg/55 dark:bg-black/60 border border-brand-border rounded-xl px-4 py-3 text-brand-text focus:outline-none focus:border-violet-500/60 dark:focus:border-violet-400/40 transition-colors cursor-pointer appearance-none disabled:opacity-60"
                      >
                        {inquirySubjects.map((sub) => (
                          <option key={sub} value={sub} className="bg-brand-bg text-brand-text">
                            {sub}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-brand-muted">
                        <svg className="fill-current h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="form-message" className="text-[10px] font-mono font-semibold uppercase tracking-wider text-brand-muted/80">
                      Collaboration Details
                    </label>
                    <textarea
                      id="form-message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      disabled={formStatus === 'sending' || formStatus === 'success'}
                      placeholder="Explain your vision, timeline, stack, or hiring opportunity..."
                      className="w-full text-xs font-mono bg-brand-bg/55 dark:bg-black/60 border border-brand-border rounded-xl px-4 py-3 text-brand-text placeholder-brand-muted/40 focus:outline-none focus:border-violet-500/60 dark:focus:border-violet-400/40 transition-colors resize-none disabled:opacity-60"
                    />
                  </div>

                  {/* Submit Button & Visual feedback states */}
                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    
                    <span className="text-[10px] font-mono text-brand-muted/50">
                      * Strictly formatted inputs securely processed in state.
                    </span>

                    <button
                      id="contact-submit-btn"
                      type="submit"
                      disabled={formStatus === 'sending' || formStatus === 'success'}
                      className={`
                        w-full sm:w-auto px-6 py-3.5 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer border-0
                        ${
                          formStatus === 'success'
                            ? 'bg-emerald-500 text-white shadow-[0_4px_20px_rgba(16,185,129,0.3)]'
                            : formStatus === 'sending'
                            ? 'bg-violet-600/40 text-violet-300 cursor-not-allowed'
                            : 'bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white shadow-lg hover:shadow-violet-500/20 hover:scale-[1.02] active:scale-[0.98]'
                        }
                      `}
                    >
                      {formStatus === 'idle' && (
                        <>
                          <span>Transmit Message</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                      {formStatus === 'sending' && (
                        <>
                          <span className="animate-pulse">Broadcasting Node...</span>
                          <svg className="animate-spin h-3.5 w-3.5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                        </>
                      )}
                      {formStatus === 'success' && (
                        <>
                          <span>Transmission Succeeded</span>
                          <Check className="w-3.5 h-3.5" />
                        </>
                      )}
                      {formStatus === 'error' && (
                        <>
                          <span>Error transmitting</span>
                        </>
                      )}
                    </button>

                  </div>
                </form>
              </div>

              {/* Form Success Animation Toast inside Card */}
              <AnimatePresence>
                {formStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 10 }}
                    className="mt-6 p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 flex items-start gap-3.5"
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <h4 className="text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400">Message Delivered Successfully</h4>
                      <p className="text-[11px] text-brand-muted mt-0.5 leading-relaxed font-sans font-light">
                        Thank you! Your inquiry regarding <span className="font-semibold text-brand-text">"{formData.subject || 'Web3 Collaboration'}"</span> has been captured. Ayobami will get back to you shortly.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </GlassCard>
          </div>

        </div>
      </div>
    </section>
  );
}
