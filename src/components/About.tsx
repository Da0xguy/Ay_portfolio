import { User, Shield, Terminal, Target, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import GlassCard from './GlassCard';

export default function About() {
  const philosophies = [
    {
      icon: <Terminal className="w-5 h-5 text-brand-accent" />,
      title: "Clean Execution",
      description: "Writing scalable, statically typed TypeScript coupled with strict component design patterns for robust layouts."
    },
    {
      icon: <Shield className="w-5 h-5 text-brand-accent" />,
      title: "Web3 Authenticity",
      description: "Direct on-chain state integration, signature handling, and fluid wallet interaction pipelines built native to the browser."
    },
    {
      icon: <Target className="w-5 h-5 text-brand-accent" />,
      title: "Product-Minded",
      description: "Translating ambiguous product strategy into pixel-perfect frontend experiences that deliver high user engagement."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="glass-glow w-[350px] h-[350px] top-1/4 left-1/10 bg-yellow-500/5" />
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
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 font-extrabold">Me</span>
          </h2>
          <p className="text-brand-muted text-sm sm:text-base mt-3 max-w-xl">
            A deeper look into my design mindset, software engineering principles, and focus.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Main Biography Column */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <GlassCard
              hoverEffect={true}
              className="p-8 h-full flex flex-col justify-between text-left"
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
                    I am a frontend-focused software developer based in <span className="text-brand-text font-semibold">Abuja, Nigeria</span>. My passion is bridging the gap between rigorous engineering backend pipelines and gorgeous, fluid, and intuitive user experiences.
                  </p>
                  <p>
                    With deep roots in both <span className="text-brand-text font-medium">high-performance React frameworks</span> and the emerging <span className="text-brand-text font-medium">Web3 & Sui Move blockchain ecosystem</span>, I aim to craft application interfaces that are as robust underneath as they are visually striking on the surface.
                  </p>
                  <p>
                    I thrive in cross-functional environments, comfortably coordinating with designers, contract engineers, and business leaders to convert raw technical specs into award-winning production platforms.
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
          </div>

          {/* Quick Pillars/Characteristics Column */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            {philosophies.map((phil, idx) => (
              <div key={phil.title} className="flex-1 flex flex-col">
                <GlassCard
                  delay={idx * 0.1}
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
