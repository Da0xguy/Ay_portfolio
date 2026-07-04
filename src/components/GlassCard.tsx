import { ReactNode, CSSProperties, useState, MouseEvent } from 'react';
import { motion } from 'motion/react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hoverEffect?: boolean;
  onClick?: () => void;
  id?: string;
  style?: CSSProperties;
  tilt?: boolean;
}

export default function GlassCard({
  children,
  className = '',
  delay = 0,
  hoverEffect = true,
  onClick,
  id,
  style,
  tilt = false
}: GlassCardProps) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });

    if (tilt) {
      const width = rect.width;
      const height = rect.height;
      // Calculate rotation based on cursor position relative to card center
      // Max tilt angle is 10 degrees for elegant subduing
      const rX = ((y / height) - 0.5) * -10;
      const rY = ((x / width) - 0.5) * 10;
      setRotateX(rX);
      setRotateY(rY);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (tilt) {
      setRotateX(0);
      setRotateY(0);
    }
  };

  const cardStyle: CSSProperties = {
    ...style,
    transform: tilt && isHovered
      ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
      : `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
    boxShadow: tilt && isHovered
      ? '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px 0px rgba(234, 179, 8, 0.12)'
      : undefined,
    transition: isHovered
      ? 'transform 0.1s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.3s ease-out'
      : 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.5s ease-out',
    transformStyle: 'preserve-3d',
  };

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      whileHover={hoverEffect && !tilt ? { y: -5, scale: 1.012, boxShadow: '0 20px 40px -15px rgba(0,0,0,0.3)' } : undefined}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      onClick={onClick}
      onMouseMove={hoverEffect ? handleMouseMove : undefined}
      onMouseEnter={hoverEffect ? handleMouseEnter : undefined}
      onMouseLeave={hoverEffect ? handleMouseLeave : undefined}
      style={cardStyle}
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
      
      {/* Dynamic Cursor-Tracking Glow Spotlight (Sui.io Style) */}
      {hoverEffect && isHovered && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-0"
          style={{
            background: `radial-gradient(220px circle at ${coords.x}px ${coords.y}px, rgba(234, 179, 8, 0.15) 0%, rgba(245, 158, 11, 0.08) 50%, transparent 100%)`,
          }}
        />
      )}
      <div className="relative z-10 w-full h-full">{children}</div>
    </motion.div>
  );
}
