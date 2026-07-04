import { useState } from 'react';
import { motion } from 'motion/react';
import { SKILLS } from '../data';
import GlassCard from './GlassCard';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'frontend' | 'web3' | 'tools'>('all');

  const categories = [
    { id: 'all', label: 'All Tech' },
    { id: 'frontend', label: 'Frontend Core' },
    { id: 'web3', label: 'Web3 & Blockchain' },
    { id: 'tools', label: 'Tools & Backend' }
  ];

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'ReactIcon':
        return (
          <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-5 h-5 animate-[spin_25s_linear_infinite]" fill="none">
            <ellipse rx="11" ry="4.2" stroke="#61dafb" strokeWidth="1" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" stroke="#61dafb" strokeWidth="1" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" stroke="#61dafb" strokeWidth="1" />
            <circle r="2" fill="#61dafb" />
          </svg>
        );
      case 'NextjsIcon':
        return (
          <svg viewBox="0 0 180 180" className="w-5 h-5" fill="none">
            <circle cx="90" cy="90" r="90" fill="currentColor" className="text-zinc-950 dark:text-zinc-200" />
            <path d="M124.6 142.6L61.7 61.8H51.4v56.4h10.2V73.4l52.6 69.2h10.4zm10.2-80.8v80.8h-10.2V61.8h10.2z" fill="url(#nextjsGradient)" />
            <defs>
              <linearGradient id="nextjsGradient" x1="109" y1="116.5" x2="28" y2="33" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        );
      case 'TypeScriptIcon':
        return (
          <svg viewBox="0 0 128 128" className="w-5 h-5 rounded-md overflow-hidden" fill="none">
            <rect width="128" height="128" fill="#3178c6" />
            <path d="M41.8 51.5h44.4v13.3H69.4v39.1H53.1V64.8H41.8V51.5z M85.4 79c3.3-1.9 7.4-3 11.3-3c6.1 0 9.8 2.6 9.8 7.3c0 10.3-15.6 11-15.6 18c0 3 2.5 4.9 6.7 4.9c4.4 0 8.3-1.7 11.4-3.9l4.5 9.7c-4.4 3.7-10.7 5.8-17.2 5.8c-12 0-18.4-6.4-18.4-15c0-11.4 15.6-12.7 15.6-18.7c0-2.4-1.9-3.5-4.8-3.5c-3.8 0-7.3 1.5-10.2 3.4L85.4 79z" fill="white" />
          </svg>
        );
      case 'JavaScriptIcon':
        return (
          <svg viewBox="0 0 128 128" className="w-5 h-5 rounded-md overflow-hidden" fill="none">
            <rect width="128" height="128" fill="#f7df1e" />
            <path d="M96.7 93.3c-2.9 5-7.8 8.1-13.8 8.1c-8.1 0-13.3-4.4-13.3-13.8h11.9c0 3.8 1.9 5.8 4.7 5.8c2.8 0 4.2-1.4 4.2-4.4V51.5h11.9v41.8H96.7z M60.8 79.5c3.2-1.9 7.2-2.9 10.9-2.9c5.9 0 9.4 2.5 9.4 7.1c0 9.9-15 10.6-15 17.3c0 2.9 2.4 4.7 6.4 4.7c4.2 0 8-1.6 10.9-3.7l4.3 9.3c-4.2 3.5-10.3 5.6-16.5 5.6-11.5 0-17.7-6.2-17.7-14.4c0-11 15-12.2 15-18c0-2.3-1.8-3.4-4.6-3.4c-3.6 0-7 1.4-9.8 3.3L60.8 79.5z" fill="#000000" />
          </svg>
        );
      case 'TailwindIcon':
        return (
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
            <path d="M12 6.036c-2.667 0-4.333 1.333-5 4 1-1.333 2.167-1.833 3.5-1.5 1.141.285 1.956 1.113 2.858 2.03C14.816 12.1 16.536 13.856 20 13.856c2.667 0 4.333-1.333 5-4-1 1.333-2.167 1.833-3.5 1.5-1.141-.285-1.956-1.113-2.858-2.03C16.184 7.792 14.464 6.036 12 6.036zM7 13.856c-2.667 0-4.333 1.333-5 4 1-1.333 2.167-1.833 3.5-1.5 1.141.285 1.956 1.113 2.858 2.03C9.816 19.92 11.536 21.676 15 21.676c2.667 0 4.333-1.333 5-4-1 1.333-2.167 1.833-3.5 1.5-1.141-.285-1.956-1.113-2.858-2.03C11.184 15.612 9.464 13.856 7 13.856z" fill="#38BDF8" />
          </svg>
        );
      case 'HtmlIcon':
        return (
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
            <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm15.7 6.1H7.1l.2 2.6h8.1l-.3 3.1-3.1 1-3.1-1-.2-1.9H6.2l.4 4.1 5.4 1.8 5.4-1.8.8-8.8.1-.1z" fill="#E34F26" />
          </svg>
        );
      case 'SuiIcon':
        return (
          <svg viewBox="0 0 128 128" className="w-5 h-5" fill="none">
            <path d="M72.3 22.8c-2.3 2.5-4.6 5.1-6.8 7.8C49.1 50.1 36 71.9 26.6 95.8c-.8 2-.6 4.3.7 6.1s3.3 2.9 5.5 2.9h27.9c1.9 0 3.7-1 4.7-2.6 1.7-2.8 3.5-5.6 5.3-8.3 14.7-21.7 26.3-45 34.6-69.6.6-1.8.3-3.8-.8-5.4s-3.1-2.5-5.1-2.5H71.5c-1.8 0-3.5 1-4.5 2.5v.1z" fill="#1e90ff" />
            <path d="M55.7 105.2c2.3-2.5 4.6-5.1 6.8-7.8 16.4-19.5 29.5-41.3 38.9-65.2.8-2 .6-4.3-.7-6.1S97.4 23.2 95.2 23.2H67.3c-1.9 0-3.7 1-4.7 2.6-1.7 2.8-3.5 5.6-5.3 8.3-14.7 21.7-26.3 45-34.6 69.6-.6 1.8-.3 3.8.8 5.4s3.1 2.5 5.1 2.5h27.4c1.8 0 3.5-1.1 4.5-2.6v-.1z" fill="#00bfff" />
          </svg>
        );
      case 'WalletIcon':
        return (
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
            <rect x="2" y="5" width="20" height="14" rx="3" stroke="#3B82F6" strokeWidth="1.5" fill="#3B82F6" fillOpacity="0.1" />
            <path d="M15 11a2 2 0 1 0 0 4h5v-4h-5z" fill="#06B6D4" />
            <circle cx="16.5" cy="13" r="1" fill="white" />
            <path d="M2 10h14" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="2 2" />
          </svg>
        );
      case 'ContractIcon':
        return (
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
            <rect x="3" y="3" width="18" height="18" rx="2" stroke="#F59E0B" strokeWidth="1.5" />
            <path d="M7 8h10M7 12h10M7 16h6" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="16" cy="16" r="2.5" fill="#10B981" />
          </svg>
        );
      case 'DesignIcon':
        return (
          <svg viewBox="0 0 32 48" className="w-4 h-5" fill="none">
            <path d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8h8V0H8z" fill="#F24E1E" />
            <path d="M8 16c-4.418 0-8 3.582-8 8s3.582 8 8 8h8V16H8z" fill="#A259FF" />
            <path d="M0 40c0 4.418 3.582 8 8 8s8-3.582 8-8V32H0v8z" fill="#19B5FE" />
            <path d="M24 16c4.418 0 8-3.582 8-8s-3.582-8-8-8h-8v16h8z" fill="#FF7262" />
            <path d="M16 24c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8h-8V24z" fill="#1ABC9C" />
          </svg>
        );
      case 'NodeIcon':
        return (
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
            <path d="M12.3 3.2c-.2-.1-.4-.2-.6-.2s-.4.1-.6.2L4.6 7c-.4.2-.6.7-.6 1.1v7.6c0 .5.2.9.6 1.1l6.5 3.8c.2.1.4.2.6.2s.4-.1.6-.2l6.5-3.8c.4-.2.6-.7.6-1.1V8.1c0-.5-.2-.9-.6-1.1l-6.5-3.8z" fill="#339933" />
            <path d="M11.9 4.3l5.8 3.4c.2.1.3.3.3.5v6.8c0 .2-.1.4-.3.5l-5.8 3.4c-.2.1-.4.1-.6 0l-5.8-3.4c-.2-.1-.3-.3-.3-.5V8.2c0-.2.1-.4.3-.5l5.8-3.4c.1-.1.3-.1.6 0z" fill="#215732" />
          </svg>
        );
      case 'ViteIcon':
        return (
          <svg viewBox="0 0 100 100" className="w-5 h-5" fill="none">
            <path d="M85 15 L 50 85 L 15 15 Z" fill="url(#viteGradient)" />
            <path d="M45 10 L 65 40 L 40 45 L 60 85 L 30 50 L 50 45 Z" fill="#FFC107" />
            <defs>
              <linearGradient id="viteGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#41D1FF" />
                <stop offset="100%" stopColor="#BD34FE" />
              </linearGradient>
            </defs>
          </svg>
        );
      case 'GitIcon':
        return (
          <svg viewBox="0 0 100 100" className="w-5 h-5" fill="none">
            <path d="M91.8 44.5L55.5 8.2c-2.4-2.4-6.3-2.4-8.7 0L42.2 13l10.9 10.9c2.5-.8 5.4-.2 7.3 1.8 2 2 2.5 4.9 1.8 7.4l10.9 10.9c2.5-.7 5.4-.2 7.4 1.8 2.8 2.8 2.8 7.3 0 10.1-2.8 2.8-7.3 2.8-10.1 0-2.1-2.1-2.5-5.1-1.4-7.7L58.1 37.3v27c1.1.5 2.1 1.4 2.8 2.5 2.8 2.8 2.8 7.3 0 10.1-2.8 2.8-7.3 2.8-10.1 0-2.8-2.8-2.8-7.3 0-10.1.9-1.1 2.1-1.9 3.4-2.4V37.2c-1.3-.5-2.5-1.3-3.4-2.4-1.9-1.9-2.4-4.7-1.7-7.2L38.2 16.7 8.2 46.7c-2.4 2.4-2.4 6.3 0 8.7l36.3 36.3c2.4 2.4 6.3 2.4 8.7 0l40.4-40.4c2.4-2.4 2.4-6.3.1-8.8z" fill="#F05032" />
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M16 18L22 12L16 6M8 6L2 12L8 18" />
          </svg>
        );
    }
  };

  const filteredSkills = activeCategory === 'all'
    ? SKILLS
    : SKILLS.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="glass-glow w-[380px] h-[380px] bottom-1/4 left-1/5 bg-yellow-500/5 dark:bg-amber-500/10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Title */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-text font-display">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 font-extrabold">Stack</span>
          </h2>
          <p className="text-brand-muted text-sm sm:text-base font-sans mt-3 max-w-xl">
            My engineering toolbelt, mapping frontend pixel precision with robust decentralized on-chain operations.
          </p>
        </motion.div>

        {/* Category Selector Tabs */}
        <div className="relative max-w-full mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex items-center gap-2 overflow-x-auto no-scrollbar justify-start md:justify-center px-6 md:px-0 flex-nowrap md:flex-wrap py-2"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                id={`skill-cat-${cat.id}`}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`
                  px-5 py-2.5 rounded-full text-xs font-mono font-medium border transition-all cursor-pointer relative flex-shrink-0
                  ${activeCategory === cat.id
                    ? 'border-yellow-500/30 text-brand-text font-semibold'
                    : 'border-brand-border/40 text-brand-muted hover:text-brand-text bg-brand-bg/40'}
                `}
              >
                {cat.label}
                {activeCategory === cat.id && (
                  <motion.div
                    layoutId="activeSkillCategoryBg"
                    className="absolute inset-0 rounded-full bg-yellow-600/10 dark:bg-yellow-500/15 -z-10 border border-yellow-500/20 dark:border-yellow-500/30"
                    transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                    style={{
                      boxShadow: '0 0 12px 0px var(--theme-glow)'
                    }}
                  />
                )}
              </button>
            ))}
          </motion.div>
          {/* Edge fade gradients for mobile swiping visual indicators */}
          <div className="absolute top-0 bottom-0 left-0 w-6 bg-gradient-to-r from-brand-bg to-transparent pointer-events-none md:hidden" />
          <div className="absolute top-0 bottom-0 right-0 w-6 bg-gradient-to-l from-brand-bg to-transparent pointer-events-none md:hidden" />
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              layout
              key={skill.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
            >
              <GlassCard
                className="p-6 text-left h-full flex flex-col justify-between"
              >
                <div>
                  {/* Skill Card Header */}
                  <div className="flex justify-between items-center mb-5">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl border flex items-center justify-center bg-brand-bg/60 dark:bg-white/5 border-brand-border text-brand-accent">
                        {getSkillIcon(skill.iconName)}
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-brand-text tracking-wide">{skill.name}</h4>
                        <span className="text-[10px] text-brand-muted/70 font-mono uppercase tracking-wider block mt-0.5">
                          {skill.category}
                        </span>
                      </div>
                    </div>

                    <span className="text-xs font-mono font-semibold text-brand-accent">
                      {skill.proficiency}%
                    </span>
                  </div>

                  {/* Short tag line */}
                  <p className="text-xs text-brand-muted font-light leading-relaxed mb-6">
                    {skill.name === 'React' && 'Component architectures, custom hooks, context, state optimization.'}
                    {skill.name === 'Next.js' && 'Server-side rendering, routing boundaries, caching patterns.'}
                    {skill.name === 'TypeScript' && 'Static strict typing, generics, strict structural interfaces.'}
                    {skill.name === 'JavaScript' && 'ES6+ standards, event-loop profiling, asynchronous tasks.'}
                    {skill.name === 'Tailwind CSS' && 'Aesthetic composition, sub-grid customizers, responsive design.'}
                    {skill.name === 'HTML5 & CSS3' && 'Semantic layouts, standard CSS layouts, custom animations.'}
                    {skill.name === 'Sui Blockchain' && 'Sui Move interfaces, transaction builders, cryptography.'}
                    {skill.name === 'Wallet Kits' && 'Multi-wallet configurations, session tokens, transaction signing.'}
                    {skill.name === 'Smart Contract Interaction' && 'On-chain mutator triggers, read/write state observers.'}
                    {skill.name === 'Web3 UI/UX Design' && 'Pending block statuses, dynamic toast updates, sign boards.'}
                    {skill.name === 'Node.js & Express' && 'Scalable microservices, middleware routing, REST APIs.'}
                    {skill.name === 'Vite & Bundlers' && 'Fast HMR setups, performance bundling, asset loaders.'}
                    {skill.name === 'Git & GitHub' && 'Rigorous branch workflows, code reviews, semantic commits.'}
                  </p>
                </div>

                {/* Proficiency Progress Bar */}
                <div className="space-y-1">
                  <div className="w-full bg-brand-bg/60 dark:bg-black/60 rounded-full h-1.5 overflow-hidden border border-brand-border/40">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full rounded-full bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 shadow-[0_0_10px_var(--theme-glow)]"
                    />
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
