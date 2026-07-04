import { useState } from 'react';
import { motion } from 'motion/react';
import { Cpu, Layers, Code, Palette, Globe, Coins, Wallet, FileKey, Layout, Server, Zap, GitBranch, Terminal } from 'lucide-react';
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
      case 'ReactIcon': return <Cpu className="w-5 h-5" />;
      case 'NextjsIcon': return <Layers className="w-5 h-5" />;
      case 'TypeScriptIcon': return <Code className="w-5 h-5" />;
      case 'JavaScriptIcon': return <Terminal className="w-5 h-5" />;
      case 'TailwindIcon': return <Palette className="w-5 h-5" />;
      case 'HtmlIcon': return <Globe className="w-5 h-5" />;
      case 'SuiIcon': return <Coins className="w-5 h-5" />;
      case 'WalletIcon': return <Wallet className="w-5 h-5" />;
      case 'ContractIcon': return <FileKey className="w-5 h-5" />;
      case 'DesignIcon': return <Layout className="w-5 h-5" />;
      case 'NodeIcon': return <Server className="w-5 h-5" />;
      case 'ViteIcon': return <Zap className="w-5 h-5" />;
      case 'GitIcon': return <GitBranch className="w-5 h-5" />;
      default: return <Code className="w-5 h-5" />;
    }
  };

  const filteredSkills = activeCategory === 'all'
    ? SKILLS
    : SKILLS.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="glass-glow w-[380px] h-[380px] bottom-1/4 left-1/5 bg-violet-500/5 dark:bg-violet-500/10" />
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
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-cyan-500 dark:from-violet-400 dark:to-cyan-400 font-extrabold">Stack</span>
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
                    ? 'border-violet-500/30 text-brand-text font-semibold'
                    : 'border-brand-border/40 text-brand-muted hover:text-brand-text bg-brand-bg/40'}
                `}
              >
                {cat.label}
                {activeCategory === cat.id && (
                  <motion.div
                    layoutId="activeSkillCategoryBg"
                    className="absolute inset-0 rounded-full bg-violet-600/10 dark:bg-violet-500/15 -z-10 border border-violet-500/20 dark:border-violet-500/30"
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
                      className="h-full rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 shadow-[0_0_10px_var(--theme-glow)]"
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
