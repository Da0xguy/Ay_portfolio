import { Project, Skill, Experience } from './types';

import backstageImg from './assets/images/backstage_thumbnail_1783889064152.jpg';
import medlockImg from './assets/images/medlock_thumbnail_1783889073670.jpg';
import suiWalSwapImg from './assets/images/sui_wal_swap_thumbnail_1783889081998.jpg';
import nextEpochLabsImg from './assets/images/next_epoch_labs_thumbnail_1783889091058.jpg';
import lofiAcademyImg from './assets/images/lofi_academy_thumbnail_1783889104702.jpg';
import timelineApparelImg from './assets/images/timeline_apparel_thumbnail_1783889113496.jpg';
import talentFlowImg from './assets/images/talent_flow_thumbnail_1783889122601.jpg';
import snowflakeImg from './assets/images/snowflake_thumbnail_1783889131002.jpg';

export const PERSONAL_INFO = {
  name: 'Oketona Samuel Ayobami',
  nickname: 'Ay',
  title: 'Frontend Engineer & Web3 Developer',
  location: 'Abuja, Nigeria',
  email: 'ayobamioketona@gmail.com',
  phone: '+234 8165609129',
  github: 'https://github.com/Da0xguy',
  linkedin: 'https://linkedin.com/in/ayobami-oketona',
  whatsapp: 'https://wa.me/2348165609129',
  twitter: 'https://twitter.com/Ay_bami01',
  instagram: 'https://www.instagram.com/ay_obami01',
  facebook: 'https://www.facebook.com/ayo.bami.802834',
  portfolioUrl: 'https://ay-portfolio-lime.vercel.app',
  resumeUrl: '#', // Replace with a downloadable PDF path or external link when ready
  summary: 'Frontend Engineer & Web3 Developer specializing in high-performance responsive interfaces, blockchain UX, type-safe TypeScript codebases, and clean layouts.'
};

export const PROJECTS: Project[] = [
  {
    id: 'backstage-app',
    title: 'Backstage',
    description: 'The world\'s first Web3 marketplace for exclusive behind-the-scenes content.',
    longDescription: 'A decentralized content platform where creators upload exclusive behind-the-scenes (BTS) media on-chain. Powered by the Sui Blockchain for peer-to-peer subscriptions and tips, featuring deep-custom video streaming controls and intuitive Web3 transaction states.',
    category: 'web3',
    tags: ['Sui Blockchain', 'Web3 UI/UX', 'React', 'Suiet Wallet Kit', 'Video Streaming', 'Smart Contracts'],
    features: [
      'Decentralized media registry on the Sui Blockchain',
      'Direct peer-to-peer creator tipping and subscription model using smart contracts',
      'Seamless multi-wallet connection and signature signing flow',
      'Polished glassmorphic video dashboard with custom controls'
    ],
    githubUrl: 'https://github.com/N3xt-Ep0ch-L4bs/Backstage-app',
    imageAccent: 'from-yellow-500/20 to-amber-500/10',
    image: backstageImg
  },
  {
    id: 'medlock',
    title: 'MedLock',
    description: 'A secure, blockchain-powered healthcare platform for clinical prescriptions and care.',
    longDescription: 'A secure decentralized patient prescription mapping and medical scheduler. Developed on Sui to allow patient-centric control of encrypted records and seamless wallet authorization with clinical entities.',
    category: 'web3',
    tags: ['Sui Blockchain', 'Healthcare Web3', 'React', 'TypeScript', 'Secure File Upload', 'Wallet Kit'],
    features: [
      'Secure, decentralized patient prescription mapping',
      'Appointment scheduler with real-time state synchronization',
      'Encrypted diagnostic file upload references tied to patient wallet identity',
      'Smooth, responsive medical-grade glass dashboards'
    ],
    githubUrl: 'https://github.com/N3xt-Ep0ch-L4bs/MedLock-',
    imageAccent: 'from-blue-500/20 to-cyan-500/10',
    image: medlockImg
  },
  {
    id: 'sui-wal-swap',
    title: 'Sui <-> Walrus Swap',
    description: 'A high-performance decentralized swap interface for assets between Sui and Walrus.',
    longDescription: 'A clean, minimalist decentralized cryptocurrency swap engine that allows users to instantly exchange assets between Sui and Walrus. Features transaction previews, automatic wallet state synchronization, and custom Sui Move contracts.',
    category: 'web3',
    tags: ['Sui Blockchain', 'Walrus Protocol', 'Asset Swap', 'React', 'TypeScript', 'Wallet Kit'],
    features: [
      'Direct peer-to-peer swapping between Sui and Walrus network tokens',
      'Automatic slippage calculations and live price grounding',
      'Integrated transaction receipt notifications',
      'Clean, high-performance UI components with real-time balance tracking'
    ],
    githubUrl: 'https://github.com/Da0xguy/Penny-Otter',
    imageAccent: 'from-sky-500/20 to-indigo-500/10',
    image: suiWalSwapImg
  },
  {
    id: 'next-epoch-labs',
    title: 'NextEpoch Labs',
    description: 'An innovation studio and landing portal pioneering the future of decentralized Web3.',
    longDescription: 'NextEpoch Labs is a premium, minimal product studio portal built to showcase decentralized protocols, DeFi & NFT platforms, and on-chain metaverse identities. Calibrated with high-end typography and clean organic line art.',
    category: 'frontend',
    tags: ['Web3 Design', 'React', 'Framer Motion', 'Tailwind CSS', 'Studio Portal', 'Brand Experience'],
    features: [
      'Elegant fluid animations and abstract geometric backgrounds',
      'Curated section blocks highlighting Web3 protocols and Metaverse systems',
      'Highly optimized layouts for ultra-wide displays',
      'Interactive project directory and contact triggers'
    ],
    githubUrl: 'https://github.com/N3xt-Ep0ch-L4bs/next-epoch-labs',
    imageAccent: 'from-amber-400/20 to-yellow-600/10',
    image: nextEpochLabsImg
  },
  {
    id: 'talentflow-lms',
    title: 'Talent Flow LMS',
    description: 'A full-stack learning management ecosystem and tech career growth platform.',
    longDescription: 'Talent Flow is a complete digital learning platform designed for career growth. Features comprehensive lecture guides, progress dashboard trackers, interactive modular courses, and instructor portals for technical skill-building.',
    category: 'fullstack',
    tags: ['React Vite', 'Node.js', 'Express', 'Tailwind CSS', 'API Integration', 'Responsive Design'],
    features: [
      'Robust full-stack modular architecture and session state trackers',
      'Instructor portal for content uploads and financial overview logs',
      'Responsive, interactive lesson modules with quiz engines',
      'Secure API connection with error handling and local state caching'
    ],
    demoUrl: 'https://talentflow-lms.vercel.app',
    githubUrl: 'https://github.com/Team-Xray-Trueminds/Talentflow_lms',
    imageAccent: 'from-blue-600/20 to-indigo-600/10',
    image: talentFlowImg
  },
  {
    id: 'snowflake',
    title: 'Snowflake',
    description: 'An on-chain Web3 identity and collectible Yeti NFT evolution platform.',
    longDescription: 'Snowflake is a Web3 identity application where user NFTs evolve directly based on their verified on-chain actions. Leverages decorative trading card layouts, interactive collectible viewers, and Sui blockchain integrations.',
    category: 'fullstack',
    tags: ['Node.js', 'React', 'TypeScript', 'Developer Tools', 'Tailwind CSS', 'Express API'],
    features: [
      'Sleek customizable widgets for checking build states',
      'Direct Node.js service endpoint integration with rich JSON responses',
      'Beautiful minimalist developer panels and typography templates',
      'Custom color configurations saved instantly to client state'
    ],
    githubUrl: 'https://github.com/Da0xguy/Snowflake',
    imageAccent: 'from-cyan-600/20 to-indigo-600/10',
    image: snowflakeImg
  },
  {
    id: 'timeline-apparel',
    title: 'Timeline Apparel',
    description: 'A luxury minimalist black-and-white Christian fashion e-commerce storefront.',
    longDescription: 'A premium Christian apparel e-commerce interface using high-contrast typography, structural cards, and high-quality photography. Designed to host interactive galleries, responsive product selectors, and shopping carts.',
    category: 'frontend',
    tags: ['E-Commerce', 'React', 'Minimalist Design', 'Tailwind CSS', 'Interactive Cart', 'High-Contrast UI'],
    features: [
      'Sleek black-and-white fashion gallery and product overview cards',
      'Responsive sliding shopping drawer with real-time price counters',
      'Technical spec blocks (100% Cotton, High Quality, Fast Delivery)',
      'Optimized image layouts with smooth hover effects'
    ],
    githubUrl: 'https://github.com/Da0xguy/Timeline-Apparel',
    imageAccent: 'from-neutral-700/20 to-neutral-900/10',
    image: timelineApparelImg
  },
  {
    id: 'lofi-academy',
    title: 'Lofi Academy',
    description: 'An interactive aesthetic study room combining productivity modules and ambient sounds.',
    longDescription: 'An immersive and cozy virtual lofi workspace tailored to make learning Sui Move fun. Combines ambient audio synthesizer mixers, interactive study timers, and customizable canvas spaces with local storage trackers.',
    category: 'frontend',
    tags: ['React', 'Audio Synth', 'Productivity Widgets', 'Sleek Animations', 'Tailwind CSS', 'Interactive Space'],
    features: [
      'Ambient focus soundboard with volume slide customizers',
      'Integrated minimalist task board and Pomodoro countdown timer',
      'Gorgeous fluid background transitions and customizable layouts',
      'Dynamic audio loop synchronization using standard Web Audio APIs'
    ],
    githubUrl: 'https://github.com/Da0xguy/Lofi-academy',
    imageAccent: 'from-amber-600/20 to-amber-900/10',
    image: lofiAcademyImg
  }
];

export const SKILLS: Skill[] = [
  // Frontend
  { name: 'React', category: 'frontend', proficiency: 95, iconName: 'ReactIcon' },
  { name: 'Next.js', category: 'frontend', proficiency: 90, iconName: 'NextjsIcon' },
  { name: 'TypeScript', category: 'frontend', proficiency: 92, iconName: 'TypeScriptIcon' },
  { name: 'JavaScript', category: 'frontend', proficiency: 95, iconName: 'JavaScriptIcon' },
  { name: 'Tailwind CSS', category: 'frontend', proficiency: 98, iconName: 'TailwindIcon' },
  { name: 'HTML5 & CSS3', category: 'frontend', proficiency: 95, iconName: 'HtmlIcon' },
  
  // Web3
  { name: 'Sui Blockchain', category: 'web3', proficiency: 88, iconName: 'SuiIcon' },
  { name: 'Wallet Kits', category: 'web3', proficiency: 90, iconName: 'WalletIcon' },
  { name: 'Smart Contract Interaction', category: 'web3', proficiency: 85, iconName: 'ContractIcon' },
  { name: 'Web3 UI/UX Design', category: 'web3', proficiency: 92, iconName: 'DesignIcon' },

  // Tools & Backend
  { name: 'Node.js & Express', category: 'tools', proficiency: 82, iconName: 'NodeIcon' },
  { name: 'Vite & Bundlers', category: 'tools', proficiency: 90, iconName: 'ViteIcon' },
  { name: 'Git & GitHub', category: 'tools', proficiency: 92, iconName: 'GitIcon' }
];

export const EXPERIENCES: Experience[] = [
  {
    role: 'Frontend Engineer & Web3 Developer',
    company: 'Team Sushi.sui',
    period: 'Web3 Contributor',
    description: [
      'Developed modern Web3 frontends on Sui with custom wallet connections and signature verification.',
      'Designed high-fidelity glassmorphic user dashboards with optimized transaction tracking.'
    ]
  },
  {
    role: 'Acting Team Lead & Frontend Intern',
    company: 'Trueminds Innovation Ltd',
    period: 'Professional Internship',
    description: [
      'Led teams of developers to build and ship modular, scalable React/TypeScript applications.',
      'Maintained high code standards and translated designer specs into pixel-perfect Tailwind layouts.'
    ]
  },
  {
    role: 'Frontend Engineer',
    company: 'Next Epoch Labs',
    period: 'Collaborator',
    description: [
      'Built reactive, low-latency Web3 interfaces with high-performance framer/motion animations.',
      'Integrated GraphQL and REST APIs with optimized client-side state and local caching.'
    ]
  },
  {
    role: 'Core Frontend Engineer',
    company: 'Payfrica Product Team',
    period: 'Product Launch',
    isCurrent: true,
    description: [
      'Engineered the live payment corridor solution Payfrica (payfrica.xyz) for African markets.',
      'Developed secure transaction flows, user-friendly forms, and dashboards optimized for lower-end devices.'
    ]
  }
];

export const EDUCATION = {
  degree: 'Bachelor of Chemical Engineering (Student)',
  institution: 'University Coursework',
  focus: 'Academic focus on systems analysis, technical workflows, and engineering problem-solving.'
};
