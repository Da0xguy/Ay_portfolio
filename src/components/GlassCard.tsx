import { ReactNode, CSSProperties } from 'react';
import { motion } from 'motion/react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hoverEffect?: boolean;
  onClick?: () => void;
  id?: string;
  style?: CSSProperties;
}

export default function GlassCard({
  children,
  className = '',
  delay = 0,
  hoverEffect = true,
  onClick,
  id,
  style
}: GlassCardProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      onClick={onClick}
      style={style}
      className={`
        glass-panel 
        rounded-2xl 
        p-6 
        relative 
        overflow-hidden 
        ${hoverEffect ? 'glass-panel-hover' : ''} 
        ${onClick ? 'cursor-pointer' : ''} 
        ${className}
      `}
    >
      {/* Subtle top glare/reflection border */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none rounded-2xl" />
      {children}
    </motion.div>
  );
}
