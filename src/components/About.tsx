import { User, Shield, Terminal, Target, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import GlassCard from './GlassCard';
import { staggerContainer, staggerItem } from '../utils/animations';

export default function About() {
  const philosophies = [
    {
      icon: <Terminal className="w-5 h-5 text-brand-accent" />,
      title: "Clean Execution",
      description: "Type-safe, modular TypeScript coupled with rigid component design and clean layouts."
    },
    {
      icon: <Shield className="w-5 h-5 text-brand-accent" />,
      title: "Web3 Authenticity",
      description: "Direct wallet integrations, custom signature handshakes, and Sui Move contract states."
    },
    {
      icon: <Target className="w-5 h-5 text-brand-accent" />,
      title: "Product Mindset",
      description: "Translating engineering power into user-centric, beautiful, and highly engaging interfaces."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="glass-glow w-[350px] h-[350px] top-1/4 left-1/10 bg-yellow-500/5" />
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
          className="flex flex-col items-center text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-brand-text font-display">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 font-extrabold">Me</span>
          </h2>
          <p className="text-brand-muted text-sm sm:text-base mt-3 max-w-xl">
            A deeper look into my design mindset, software engineering principles, and focus.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Main Biography Column */}
          <motion.div variants={staggerItem} className="lg:col-span-7 flex flex-col justify-between">
            <GlassCard
              hoverEffect={true}
              className="p-6 sm:p-8 h-full flex flex-col justify-between text-left"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl border flex items-center justify-center bg-brand-bg/60 dark:bg-white/5 border-brand-border text-brand-text">
                    <User className="w-5 h-5 text-brand-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-text tracking-wide">
                      My Professional Philosophy
                    </h3>
                    <span className="text-[10px] text-brand-muted/70 font-mono uppercase tracking-wider block mt-0.5">
                      Engineering Meets Strategy
                    </span>
                  </div>
                </div>

                <div className="space-y-4 text-brand-muted/90 text-sm sm:text-base font-light leading-relaxed">
                  <p>
                    I am a frontend engineer based in <span className="text-brand-text font-semibold">Abuja, Nigeria</span>, specializing in building high-performance web applications and decentralized Web3 user experiences.
                  </p>
                  <p>
                    With deep roots in both <span className="text-brand-text font-medium">React frameworks</span> and the <span className="text-brand-text font-medium">Sui Move blockchain ecosystem</span>, I bridge the gap between complex on-chain backend architectures and beautiful, responsive frontend interfaces.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-brand-border flex flex-wrap gap-4 items-center justify-between">
                <div className="font-mono text-xs text-brand-muted">
                  Currently open to: <span className="text-brand-text font-semibold">Full-time Web3 & Frontend Roles</span>
                </div>
                <a
                  href="#experience"
                  className="flex items-center gap-1.5 text-xs font-mono font-semibold text-brand-text hover:text-brand-accent hover:underline cursor-pointer transition-colors"
                >
                  View my timeline
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </GlassCard>
          </motion.div>

          {/* Quick Pillars/Characteristics Column */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            {philosophies.map((phil, idx) => (
              <motion.div key={phil.title} variants={staggerItem} className="flex-1 flex flex-col">
                <GlassCard
                  className="p-6 text-left flex-1 flex flex-col justify-center h-full"
                >
                  <div className="flex gap-4 items-start">
                    <div className="p-2.5 rounded-xl border flex items-center justify-center bg-brand-bg/60 dark:bg-white/5 border-brand-border mt-1 text-brand-accent">
                      {phil.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-brand-text tracking-wide mb-1.5">
                        {phil.title}
                      </h4>
                      <p className="text-xs text-brand-muted font-light leading-relaxed">
                        {phil.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
