import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, Calendar, CheckCircle, Globe, ArrowUpRight } from 'lucide-react';
import { EXPERIENCES, EDUCATION } from '../data';
import GlassCard from './GlassCard';

export default function Experience() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const detailsRef = useRef<HTMLDivElement>(null);

  const handleSelectExperience = (idx: number) => {
    setSelectedIdx(idx);
    
    if (detailsRef.current) {
      setTimeout(() => {
        const element = detailsRef.current;
        if (element) {
          const rect = element.getBoundingClientRect();
          const isFullyVisible = (
            rect.top >= 100 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
          );
          
          if (!isFullyVisible || window.innerWidth < 1024) {
            const elementPosition = rect.top + window.scrollY;
            const offsetPosition = elementPosition - 100;
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }
      }, 120);
    }
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background radial soft light */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="glass-glow w-[400px] h-[400px] top-1/3 right-0 bg-white/5" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Title */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-text font-display">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-cyan-500 dark:from-violet-400 dark:to-cyan-400 font-extrabold">Journey</span>
          </h2>
          <p className="text-brand-muted text-sm sm:text-base font-sans mt-3 max-w-xl">
            My hands-on experience building modern, highly responsive web interfaces and secure blockchain systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Timeline Selector Panel (Left) */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-muted/70 mb-4 pl-4 text-left">
              Companies & Collaborations
            </h3>

            <div className="space-y-3">
              {EXPERIENCES.map((exp, idx) => {
                const isSelected = selectedIdx === idx;
                return (
                  <button
                    key={exp.company}
                    id={`experience-tab-${idx}`}
                    onClick={() => handleSelectExperience(idx)}
                    className="w-full text-left relative cursor-pointer"
                  >
                    <GlassCard
                      hoverEffect={!isSelected}
                      className={`p-5 transition-all relative ${
                        isSelected
                          ? 'border-violet-500/30 bg-violet-500/5 dark:bg-white/5 shadow-md'
                          : 'border-brand-border/40 bg-brand-bg/40 hover:bg-brand-bg/80'
                      }`}
                    >
                      {/* Left indicator bar on active card */}
                      {isSelected && (
                        <motion.div
                          layoutId="selectedExpBar"
                          className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-2xl bg-gradient-to-b from-violet-600 to-cyan-500 shadow-[0_0_12px_var(--theme-glow)]"
                          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                        />
                      )}

                      <div className="flex justify-between items-start pl-2">
                        <div>
                          <h4 className={`text-sm font-semibold tracking-wide ${isSelected ? 'text-brand-text font-bold' : 'text-brand-muted'}`}>
                            {exp.company}
                          </h4>
                          <p className="text-xs text-brand-muted/70 font-mono mt-1">
                            {exp.role}
                          </p>
                        </div>

                        {exp.isCurrent && (
                          <span className="px-2 py-0.5 rounded-md text-[10px] font-mono uppercase tracking-wider font-semibold border bg-brand-accent/10 border-brand-accent/20 text-brand-accent">
                            Current
                          </span>
                        )}
                      </div>
                    </GlassCard>
                  </button>
                );
              })}
            </div>

            {/* Quick Education Card */}
            <div className="pt-6">
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-muted/70 mb-4 pl-4 text-left">
                Education
              </h3>
              <GlassCard className="p-5 border-dashed border-brand-border hover:border-brand-accent/30 bg-brand-bg/20">
                <div className="flex gap-4 items-start pl-1">
                  <div className="p-2.5 rounded-xl border flex items-center justify-center bg-brand-bg/60 dark:bg-white/5 border-brand-border text-brand-accent">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-sm font-semibold text-brand-text tracking-wide">
                      {EDUCATION.degree}
                    </h4>
                    <span className="text-[11px] font-mono text-brand-muted/70 block mt-0.5">
                      {EDUCATION.institution}
                    </span>
                    <p className="text-xs text-brand-muted leading-relaxed mt-2.5">
                      {EDUCATION.focus}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>

          {/* Timeline Details Display Panel (Right) */}
          <div ref={detailsRef} className="lg:col-span-7 h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIdx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="h-full"
              >
                <GlassCard
                  hoverEffect={false}
                  className="p-8 h-full text-left"
                >
                  {/* Glowing header info */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-brand-border mb-6">
                    <div>
                      <span className="text-[11px] font-mono tracking-widest text-brand-muted/60 uppercase block mb-1">
                        Active Profile Showcase
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold font-sans text-brand-text tracking-tight">
                        {EXPERIENCES[selectedIdx].company}
                      </h3>
                      <p className="text-sm font-mono mt-1.5 font-semibold text-brand-accent">
                        {EXPERIENCES[selectedIdx].role}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono text-brand-muted bg-brand-bg/50 dark:bg-black/40 px-3.5 py-2 rounded-xl border border-brand-border self-start sm:self-auto">
                      <Calendar className="w-3.5 h-3.5 text-brand-accent" />
                      <span>{EXPERIENCES[selectedIdx].period}</span>
                    </div>
                  </div>

                  {/* Achievements Checklist */}
                  <div className="space-y-4">
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-brand-muted/80 block">
                      Core Achievements & Responsibilities
                    </span>

                    <div className="space-y-3.5">
                      {EXPERIENCES[selectedIdx].description.map((desc, dIdx) => (
                        <div key={dIdx} className="flex gap-3 items-start group">
                          <div className="mt-1 flex-shrink-0 text-brand-accent">
                            <CheckCircle className="w-4 h-4 opacity-80 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <p className="text-brand-muted/90 text-sm sm:text-base leading-relaxed font-sans font-light">
                            {desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Live links if company has them */}
                  {EXPERIENCES[selectedIdx].company === 'Payfrica Product Team' && (
                    <div className="mt-8 pt-6 border-t border-brand-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div className="flex items-center gap-2 text-xs text-brand-muted font-mono">
                        <Globe className="w-4 h-4 text-brand-accent" />
                        <span>Production Endpoint: payfrica.xyz</span>
                      </div>
                      <a
                        id="payfrica-link-btn"
                        href="https://payfrica.xyz"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-xs font-mono font-semibold px-4 py-2 rounded-xl cursor-pointer transition-all hover:scale-[1.02] bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-md hover:shadow-lg hover:from-violet-500 hover:to-cyan-400 border-0"
                      >
                        Visit Payfrica Launch
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </GlassCard>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
