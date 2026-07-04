// Staggered entrance animation presets for Framer Motion

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    }
  }
};

export const staggerItem = {
  hidden: { 
    opacity: 0, 
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] // Premium ultra-smooth ease-out (similar to apple/sui.io)
    }
  }
};

export const staggerItemLeft = {
  hidden: { 
    opacity: 0, 
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export const staggerItemRight = {
  hidden: { 
    opacity: 0, 
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};
