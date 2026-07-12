import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, ArrowRight, X, Sparkles, Check } from 'lucide-react';
import { PROJECTS } from '../data';
import { Project } from '../types';
import GlassCard from './GlassCard';
import { staggerContainer, staggerItem } from '../utils/animations';

export default function Projects() {
  const [activeTab, setActiveTab] = useState<'all' | 'web3' | 'frontend' | 'fullstack'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'web3', label: 'Web3 & Sui' },
    { id: 'fullstack', label: 'Full Stack & APIs' },
    { id: 'frontend', label: 'Client Interfaces' }
  ];

  const filteredProjects = activeTab === 'all'
    ? PROJECTS
    : PROJECTS.filter(project => project.category === activeTab);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background radial soft light */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="glass-glow w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-500/5 dark:bg-amber-500/10" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-7xl mx-auto px-6 relative z-10"
      >
        {/* Title */}
        <motion.div 
          variants={staggerItem}
          className="flex flex-col items-center text-center mb-10 sm:mb-14"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-brand-text font-display">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 font-extrabold">Works</span>
          </h2>
          <p className="text-brand-muted text-sm sm:text-base font-sans mt-3 max-w-xl">
            A selective showcase of live payment architectures, decentralized dApps on the Sui Blockchain, and highly visual learning hubs.
          </p>
        </motion.div>

        {/* Tab Filters */}
        <motion.div variants={staggerItem} className="relative max-w-full mb-14">
          <div 
            className="flex items-center gap-2.5 overflow-x-auto no-scrollbar justify-start md:justify-center px-6 md:px-0 flex-nowrap md:flex-wrap py-2"
          >
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                id={`project-tab-${tab.id}`}
                onClick={() => setActiveTab(tab.id as any)}
                className={`
                  px-5 py-2.5 rounded-full text-xs font-mono font-medium border transition-all cursor-pointer relative flex-shrink-0
                  ${activeTab === tab.id
                    ? 'border-yellow-500/30 text-brand-text font-semibold'
                    : 'border-brand-border/40 text-brand-muted hover:text-brand-text bg-brand-bg/40'}
                `}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeProjectTabBg"
                    className="absolute inset-0 rounded-full bg-yellow-600/10 dark:bg-yellow-500/15 -z-10 border border-yellow-500/20 dark:border-yellow-500/30"
                    transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                    style={{
                      boxShadow: '0 0 12px 0px var(--theme-glow)'
                    }}
                  />
                )}
              </button>
            ))}
          </div>
          {/* Edge fade gradients for mobile swiping visual indicators */}
          <div className="absolute top-0 bottom-0 left-0 w-6 bg-gradient-to-r from-brand-bg to-transparent pointer-events-none md:hidden" />
          <div className="absolute top-0 bottom-0 right-0 w-6 bg-gradient-to-l from-brand-bg to-transparent pointer-events-none md:hidden" />
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              key={project.id}
              variants={staggerItem}
            >
              <GlassCard
                onClick={() => setSelectedProject(project)}
                tilt={true}
                className="p-5 sm:p-6 text-left flex flex-col justify-between h-full group cursor-pointer border-brand-border/40 hover:border-yellow-500/30 transition-colors duration-300"
              >
                {/* Visual Accent Glow on card top */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 opacity-20 group-hover:opacity-100 transition-opacity" />

                {/* Project Screenshot Image */}
                {project.image && (
                  <div className="w-full aspect-video rounded-xl overflow-hidden mb-4 border border-brand-border/30 group-hover:border-yellow-500/20 transition-all duration-300 relative bg-black/20">
                    <img 
                      src={project.image} 
                      alt={`${project.title} preview`}
                      className="w-full h-full object-cover object-top group-hover:scale-[1.04] transition-transform duration-500 ease-out"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                )}

                <div>
                  {/* Category & Badge */}
                  <div className="flex justify-between items-center mb-4">
                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono uppercase tracking-wider border font-semibold bg-brand-bg/60 dark:bg-white/5 border-brand-border text-brand-text">
                      {project.category === 'web3' ? 'Sui Move' : project.category === 'fullstack' ? 'Full Stack' : 'Frontend'}
                    </span>
                    <span className="text-[10px] font-mono text-brand-muted/70">PRODUCTION READY</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-brand-text tracking-wide mb-2 transition-colors group-hover:text-brand-accent">
                    {project.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs text-brand-muted leading-relaxed font-light mb-4">
                    {project.description}
                  </p>

                  {/* Key Capabilities revealed on hover */}
                  <div className="overflow-hidden max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-300 ease-out mb-4">
                    <div className="pt-3 border-t border-brand-border space-y-1.5">
                      <span className="text-[9px] font-mono text-brand-muted/70 uppercase tracking-wider block mb-0.5">Key Capabilities</span>
                      {project.features.slice(0, 2).map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-1.5 text-[11px] text-brand-muted">
                          <span className="text-[10px] mt-0.5 text-brand-accent">✦</span>
                          <span className="line-clamp-1">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Tags & Action Button */}
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded-md text-[10px] font-mono text-brand-muted bg-brand-bg/40 border border-brand-border">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-mono text-brand-muted bg-brand-bg/40 border border-brand-border">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Enhanced action button block */}
                  <div className="w-full py-2.5 px-4 rounded-xl text-xs font-mono font-bold text-brand-muted border border-brand-border bg-brand-bg/30 flex items-center justify-between transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-yellow-500 group-hover:to-amber-500 group-hover:text-zinc-950 group-hover:shadow-[0_4px_20px_rgba(234,179,8,0.25)] group-hover:border-transparent">
                    <span>View Project Spec</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Details Slide-up Dialog Drawer */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Dark blur overlay */}
            <motion.div
              id="project-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm"
            />

            {/* Container for scrollable dialog */}
            <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
              <motion.div
                id="project-drawer"
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                transition={{ type: 'spring', damping: 25, stiffness: 220 }}
                className="w-full max-w-2xl rounded-2xl border shadow-2xl overflow-hidden glass-panel flex flex-col justify-between my-8 text-left p-0 border-brand-border"
              >
                {/* Header glow */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600" />

                {/* Core Padding */}
                <div className="p-6 sm:p-8 space-y-6 relative max-h-[80vh] overflow-y-auto">
                  {/* Close button */}
                  <button
                    id="close-project-drawer"
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-6 right-6 p-1.5 rounded-xl hover:bg-brand-bg/60 text-brand-muted hover:text-brand-text transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  {/* Project Tag & Title */}
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono uppercase tracking-wider border font-semibold bg-brand-bg/60 dark:bg-white/5 border-brand-border text-brand-text">
                        {selectedProject.category === 'web3' ? 'Sui Move' : selectedProject.category === 'fullstack' ? 'Full Stack' : 'Frontend'}
                      </span>
                      {selectedProject.category === 'web3' && (
                        <span className="text-[10px] text-brand-muted font-mono flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-brand-accent animate-pulse" /> Decentralized Architecture Spec
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-brand-text tracking-tight leading-tight">
                      {selectedProject.title}
                    </h3>
                  </div>

                  {/* Project Full Screenshot */}
                  {selectedProject.image && (
                    <div className="w-full aspect-video rounded-xl overflow-hidden border border-brand-border bg-black/40">
                      <img 
                        src={selectedProject.image} 
                        alt={`${selectedProject.title} full view`}
                        className="w-full h-full object-cover object-top"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  )}

                  {/* Long Description */}
                  <div className="space-y-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-brand-muted/70 block font-semibold">
                      Overview
                    </span>
                    <p className="text-brand-muted text-sm sm:text-base font-light leading-relaxed font-sans">
                      {selectedProject.longDescription}
                    </p>
                  </div>

                  {/* Core Features */}
                  <div className="space-y-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-brand-muted/70 block font-semibold">
                      Key Highlights & Accomplishments
                    </span>
                    <div className="space-y-2.5">
                      {selectedProject.features.map((feat) => (
                        <div key={feat} className="flex gap-3 items-start text-sm">
                          <div className="mt-0.5 text-brand-accent">
                            <Check className="w-4 h-4" />
                          </div>
                          <span className="text-brand-muted font-sans font-light">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Full Tech Stack Tags */}
                  <div className="space-y-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-brand-muted/70 block font-semibold">
                      Full Technology Spec
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 rounded-lg text-xs font-mono text-brand-muted bg-brand-bg/40 border border-brand-border">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action Bar */}
                <div className="px-6 py-5 sm:px-8 sm:py-6 border-t border-brand-border bg-brand-bg/50 dark:bg-black/40 flex flex-wrap gap-4 justify-between items-center">
                  <div className="flex gap-3">
                    {selectedProject.githubUrl && (
                      <a
                        id="drawer-github-link"
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2.5 rounded-xl text-xs font-mono border border-brand-border hover:bg-brand-bg/60 text-brand-muted hover:text-brand-text transition-all flex items-center gap-2 cursor-pointer"
                      >
                        <Github className="w-4 h-4 text-brand-accent" />
                        Source Code
                      </a>
                    )}

                    {selectedProject.demoUrl && (
                      <a
                        id="drawer-demo-link"
                        href={selectedProject.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2.5 rounded-xl text-xs font-mono border border-brand-border hover:bg-brand-bg/60 text-brand-muted hover:text-brand-text transition-all flex items-center gap-2 cursor-pointer"
                      >
                        <ExternalLink className="w-4 h-4 text-brand-accent" />
                        Live Endpoint
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
