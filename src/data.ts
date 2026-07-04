import { Project, Skill, Experience } from './types';

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
  summary: 'Frontend-focused software developer and product-minded technologist with hands-on experience building modern web and Web3 applications using React, TypeScript, and blockchain tooling. Strong understanding of product strategy and user experience. Comfortable working across engineering and business teams to ship scalable, user-centric solutions.'
};

export const PROJECTS: Project[] = [
  {
    id: 'backstage-app',
    title: 'Backstage App',
    description: 'A Web3 decentralized video sharing application on Sui for creators to upload and earn.',
    longDescription: 'A blockchain-integrated content platform where video creators can upload exclusive behind-the-scenes (BTS) content directly. Connected via Suiet for secure authorization, creators are compensated or tipped directly in SUI tokens. Features beautiful fluid layouts, custom video players, and full Web3 transactional feedback.',
    category: 'web3',
    tags: ['Sui Blockchain', 'Web3 UI/UX', 'React', 'Suiet Wallet Kit', 'Video Streaming', 'Smart Contracts'],
    features: [
      'Decentralized media registry on the Sui Blockchain',
      'Direct peer-to-peer creator tipping and subscription model using smart contracts',
      'Seamless multi-wallet connection and signature signing flow',
      'Polished glassmorphic video dashboard with custom controls'
    ],
    githubUrl: 'https://github.com/N3xt-Ep0ch-L4bs/Backstage-app',
    imageAccent: 'from-blue-500/20 to-indigo-500/10'
  },
  {
    id: 'medlock',
    title: 'MedLock',
    description: 'A decentralized medical registry on Sui for appointment bookings and prescription handling.',
    longDescription: 'A highly secure, patient-centric medical ecosystem. Users can book medical appointments, upload diagnostic test results securely, and doctors can issue cryptographic prescriptions. These prescriptions can be sent directly to pharmacies, where patients pay and authorize pickup in a decentralized, trustless manner.',
    category: 'web3',
    tags: ['Sui Blockchain', 'Healthcare Web3', 'React', 'TypeScript', 'Secure File Upload', 'Wallet Kit'],
    features: [
      'Secure, decentralized patient prescription mapping',
      'Appointment scheduler with real-time state synchronization',
      'Encrypted diagnostic file upload references tied to patient wallet identity',
      'Smooth, responsive medical-grade glass dashboards'
    ],
    githubUrl: 'https://github.com/N3xt-Ep0ch-L4bs/MedLock-',
    imageAccent: 'from-cyan-500/20 to-blue-500/10'
  },
  {
    id: 'penny-otter',
    title: 'Penny Otter',
    description: 'An on-chain decentralized gaming and asset ecosystem built with custom Sui Move smart contracts.',
    longDescription: 'Penny Otter showcases the power of Sui Move smart contracts in a gaming ecosystem. Users can swap assets, trade in-game currencies, and explore custom on-chain dynamics. Built with a responsive, high-performance UI, full wallet verification, and direct interaction with smart contracts.',
    category: 'web3',
    tags: ['Sui Move', 'Sui Blockchain', 'On-Chain Assets', 'React', 'Web3 UI/UX', 'Wallet Integration'],
    features: [
      'Interactive asset swapping and on-chain balance trackers',
      'Custom Sui Move contracts for in-game currency management',
      'Dynamic wallet state visualizations and live transaction logs',
      'Buttery-smooth visual interfaces with low-latency updates'
    ],
    githubUrl: 'https://github.com/Da0xguy/Penny-Otter',
    imageAccent: 'from-emerald-500/20 to-teal-500/10'
  },
  {
    id: 'talentflow-lms',
    title: 'Talentflow LMS',
    description: 'A full-stack learning management platform for technical skill acquisition and instructor monetization.',
    longDescription: 'A comprehensive, high-scale digital learning ecosystem designed for tech instructors to host curriculum and users to study technical subjects and earn. Includes robust lecture uploads, interactive quizzes, progress tracking dashboards, and Node.js-based API integrations with clean, custom responsive layouts.',
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
    imageAccent: 'from-amber-500/20 to-orange-500/10'
  },
  {
    id: 'snowflake',
    title: 'Snowflake',
    description: 'An elegant developer productivity suite and custom toolkit for rapid styling and build checks.',
    longDescription: 'Snowflake is a lightweight, responsive developer helper designed to run automated file-checks, custom CSS variable styling, and local testing routines. Features quick code-formatting templates, real-time feedback loops, and highly customizable UI layout preferences.',
    category: 'fullstack',
    tags: ['Node.js', 'React', 'TypeScript', 'Developer Tools', 'Tailwind CSS', 'Express API'],
    features: [
      'Sleek customizable widgets for checking build states',
      'Direct Node.js service endpoint integration with rich JSON responses',
      'Beautiful minimalist developer panels and typography templates',
      'Custom color configurations saved instantly to client state'
    ],
    githubUrl: 'https://github.com/Da0xguy/Snowflake',
    imageAccent: 'from-purple-500/20 to-pink-500/10'
  },
  {
    id: 'chuks-kitchen',
    title: "Chuk's Kitchen",
    description: 'A sleek, visual online food ordering application with fluid interactions.',
    longDescription: 'A premium, high-fidelity customer food ordering interface. Features a responsive menu selector, animated cart additions, price calculations, and structured custom specifications. Focused on delivering mouthwatering, high-density food photography and buttery-smooth layouts.',
    category: 'frontend',
    tags: ['React', 'Vite', 'Tailwind CSS', 'State management', 'Smooth Animations', 'Interactive UI'],
    features: [
      'Interactive menu grid with detailed category filter sliders',
      'Fluid, spring-animated sidebar shopping basket',
      'Optimized image loaders with sleek skeleton states',
      'Smooth step-by-step interactive checkout flow'
    ],
    githubUrl: 'https://github.com/Da0xguy/Chuk-s-Kitchen',
    imageAccent: 'from-yellow-500/20 to-orange-500/10'
  },
  {
    id: 'ticketly',
    title: 'Ticketly Frontend',
    description: 'A modern decentralized ticketing client with robust ticket verification & interactive seats.',
    longDescription: 'Ticketly is a responsive event ticket reservation client featuring seat selections, automated ticket verification reference generators, and customized interactive layouts. Integrates beautifully with wallet connectors to provide absolute proof of seat reservations.',
    category: 'frontend',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Web3 Interfaces', 'Event Ticketing', 'Interactive Seats'],
    features: [
      'Responsive, interactive floor plan and seat ticket map',
      'Unique ticket barcode or hash generator linked to client wallet',
      'Dynamic ticket categorization and price calculations',
      'Polished glass-panel structures with smooth responsive views'
    ],
    githubUrl: 'https://github.com/N3xt-Ep0ch-L4bs/Ticketly-frontend',
    imageAccent: 'from-red-500/20 to-rose-500/10'
  },
  {
    id: 'lofi-academy',
    title: 'Lofi Academy',
    description: 'An interactive aesthetic space combining productivity tools, ambient loops, and focus sounds.',
    longDescription: 'Lofi Academy is a personalized browser workspace designed for focus. It integrates a sleek dynamic ambient synthesizer, customizable task timers, custom backgrounds, and simple local notes. Beautiful, minimalist, and perfectly calibrated to enhance study sessions.',
    category: 'frontend',
    tags: ['React', 'Audio Synth', 'Productivity Widgets', 'Sleek Animations', 'Tailwind CSS', 'Interactive Space'],
    features: [
      'Ambient focus soundboard with volume slide customizers',
      'Integrated minimalist task board and Pomodoro countdown timer',
      'Gorgeous fluid background transitions and customizable layouts',
      'Dynamic audio loop synchronization using standard Web Audio APIs'
    ],
    githubUrl: 'https://github.com/Da0xguy/Lofi-academy',
    imageAccent: 'from-teal-500/20 to-emerald-500/10'
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
    period: 'Web3 Core Contributor',
    description: [
      'Developed modern Web3 frontends on the Sui Blockchain, incorporating custom smart contract interactions and signature verification.',
      'Designed and engineered high-fidelity glassmorphic user dashboards with complex state management.',
      'Optimized wallet connection latency and transaction tracking interfaces using customized wallet hook integration.'
    ]
  },
  {
    role: 'Acting Team Lead & Frontend Intern',
    company: 'Trueminds Innovation Ltd',
    period: 'Professional Internship',
    description: [
      'Led a dynamic team of developers in shipping highly modular and scalable web applications.',
      'Maintained rigorous frontend coding standards, reviewed pull requests, and mentored junior interns in React and TypeScript.',
      'Interfaced with business analysts and product managers to translate feature specs into pixel-perfect Tailwind layouts.'
    ]
  },
  {
    role: 'Frontend Engineer',
    company: 'Next Epoch Labs',
    period: 'Collaborator',
    description: [
      'Built reactive, low-latency interfaces for cutting-edge decentralized systems.',
      'Crafted high-performance custom animations and smooth scroll interactions, elevating the general user experience and retention.',
      'Integrated secure, decentralized REST/GraphQL APIs and managed client-side data caching strategies.'
    ]
  },
  {
    role: 'Core Frontend Engineer',
    company: 'Payfrica Product Team',
    period: 'Product Launch',
    isCurrent: true,
    description: [
      'Worked hands-on to build and ship Payfrica (payfrica.xyz), a live and fully functional modern payment corridor solution for African markets.',
      'Engineered state-of-the-art secure inputs, nested transaction flows, and beautiful financial dashboards.',
      'Optimized performance across lower-end devices and slow networking environments, cutting layout shifts to zero.'
    ]
  }
];

export const EDUCATION = {
  degree: 'Bachelor of Chemical Engineering (Student)',
  institution: 'University Coursework',
  focus: 'Strong academic focus on technology, engineering concepts, systems analysis, and applied mathematical problem solving (calculus, matrices, optimization).'
};
