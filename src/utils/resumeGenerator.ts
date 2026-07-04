import { jsPDF } from 'jspdf';

export function generateResumePDF() {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  const contentWidth = pageWidth - (margin * 2);
  let y = 20;

  // Helper: Set text with auto wrapping and return ending Y coordinate
  const addWrappedText = (
    text: string, 
    fontSize: number, 
    fontStyle: 'normal' | 'bold' | 'italic', 
    color: [number, number, number], 
    spacing = 5,
    align: 'left' | 'center' | 'right' = 'left'
  ) => {
    doc.setFont('helvetica', fontStyle);
    doc.setFontSize(fontSize);
    doc.setTextColor(color[0], color[1], color[2]);
    
    const lines = doc.splitTextToSize(text, contentWidth);
    doc.text(lines, align === 'center' ? pageWidth / 2 : margin, y, { align });
    y += (lines.length * (fontSize * 0.3527) * 1.2) + spacing;
  };

  // Helper: Draw Section Divider
  const addSectionHeader = (title: string) => {
    // Check if we need a new page for section header + some content
    if (y > pageHeight - 35) {
      doc.addPage();
      y = 20;
    }

    y += 4;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.setTextColor(17, 24, 39); // Slate-900
    doc.text(title.toUpperCase(), margin, y);
    
    y += 2.5;
    doc.setDrawColor(229, 231, 235); // gray-200
    doc.setLineWidth(0.4);
    doc.line(margin, y, pageWidth - margin, y);
    y += 6;
  };

  // --- HEADER SECTION ---
  // Name
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(24);
  doc.setTextColor(17, 24, 39); // Slate-900
  doc.text('Oketona Samuel Ayobami (Ay)', margin, y);
  y += 8;

  // Title
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(12);
  doc.setTextColor(75, 85, 99); // gray-600
  doc.text('Frontend Engineer • Web3 Developer', margin, y);
  y += 7;

  // Contact Grid info
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(107, 114, 128); // gray-500
  
  const contactLine1 = 'Based in: Abuja Nigeria  |  Email: ayobamioketona@gmail.com  |  Phone: +234 8165609129';
  const contactLine2 = 'Portfolio: https://ay-portfolio-lime.vercel.app  |  GitHub & LinkedIn: https://github.com/Da0xguy';
  
  doc.text(contactLine1, margin, y);
  y += 4.5;
  doc.text(contactLine2, margin, y);
  y += 6;

  // --- PROFESSIONAL SUMMARY ---
  addSectionHeader('Professional Summary');
  
  const summaryText = 
    'Frontend-focused software developer and product-minded technologist with hands-on experience building modern web and Web3 applications using React, TypeScript, and blockchain tooling. Strong understanding of product strategy and user experience. Comfortable working across engineering and business teams to ship scalable, user-centric solutions. Worked in organizations such as Team Sushi.sui, Next Epoch Labs, and completed an internship at Trueminds Innovation Ltd where served as the acting team lead.\n\nWorked hands-on on a product called Payfrica which is now fully functional (Check it out at payfrica.xyz).';

  addWrappedText(summaryText, 10, 'normal', [55, 65, 81], 6);

  // --- TECHNICAL SKILLS ---
  addSectionHeader('Technical Skills');
  
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(17, 24, 39);
  doc.text('Frontend:', margin, y);
  
  doc.setFont('helvetica', 'normal');
  doc.text('React Vite, Next.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS', margin + 25, y);
  y += 6;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(17, 24, 39);
  doc.text('Web3 & Blockchain:', margin, y);
  
  doc.setFont('helvetica', 'normal');
  doc.text('Sui, Wallet Integrations, Smart Contract Interaction, Web3 UI/UX', margin + 38, y);
  y += 8;

  // --- PROJECTS ---
  addSectionHeader('Projects');

  const projects = [
    {
      title: 'Web3 Wallet & Counter App (Sui Blockchain)',
      bullets: [
        'Built a React + Vite Web3 application with wallet connection, dynamic counters, animated toasts, and wallet cards.',
        'Integrated @suiet/wallet-kit for secure wallet interactions.',
        'Focused on clean UI, smooth animations, and responsive design.'
      ]
    },
    {
      title: 'A Backstage Video Uploading Website (Sui Blockchain)',
      bullets: [
        'Built a website where creators can Upload their Bts videos and earn by doing so.',
        'Built a React + Vite Web3 application with wallet connection, dynamic counters, animated toasts, and wallet cards.',
        'Integrated @suiet/wallet-kit for secure wallet interactions.',
        'Focused on clean UI, smooth animations, and responsive design.'
      ]
    },
    {
      title: 'Medlock: a medical Platform (Sui blockchain)',
      bullets: [
        'A platform where users can book appointments with doctors, Upload test results and diagnosis and doctors can prescribe drugs for them to the pharmacy where patient will just pay in a decentralized way.',
        'Built a React + Vite Web3 application with wallet connection, dynamic counters, animated toasts, and wallet cards.',
        'Integrated @suiet/wallet-kit for secure wallet interactions.',
        'Focused on clean UI, smooth animations, and responsive design.'
      ]
    },
    {
      title: 'Decentralized Voting Application',
      bullets: [
        'Developed a blockchain-based voting system using React and Web3 libraries.',
        'Implemented proposal creation, voting power logic, and real-time UI updates.'
      ]
    },
    {
      title: 'Portfolio Website (https://ay-portfolio-lime.vercel.app)',
      bullets: [
        'Designed and developed a personal portfolio showcasing projects, skills, and experience.',
        'Used modern frontend stack with smooth animations and responsive layouts.'
      ]
    },
    {
      title: "Chuk's Kitchen: A Food Ordering Platform",
      bullets: [
        'Built a React + Vite application with Tailwind CSS.',
        'Focused on clean UI, smooth animations, and responsive design.'
      ]
    },
    {
      title: 'Talentflow-lms: A Learning Management System',
      bullets: [
        'Built using React Vite and Tailwind CSS (https://talentflow-lms.vercel.app).',
        'Focused on clean UI, smooth animations, and responsive design.',
        'Integrated backend APIs using Node.js.'
      ]
    }
  ];

  projects.forEach((proj) => {
    // Prevent awkward page splitting by checking space before each project card
    if (y > pageHeight - 35) {
      doc.addPage();
      y = 20;
    }

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(17, 24, 39);
    doc.text(proj.title, margin, y);
    y += 5;

    proj.bullets.forEach((bullet) => {
      if (y > pageHeight - 15) {
        doc.addPage();
        y = 20;
      }

      // Draw a clean bullet point
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9.5);
      doc.setTextColor(75, 85, 99);
      doc.text('•', margin + 2, y);

      const bulletLines = doc.splitTextToSize(bullet, contentWidth - 8);
      doc.text(bulletLines, margin + 6, y);
      y += (bulletLines.length * (9.5 * 0.3527) * 1.2) + 1.5;
    });

    y += 3; // Spacer between projects
  });

  // --- EDUCATION ---
  addSectionHeader('Education');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(17, 24, 39);
  doc.text('Student (Chemical Engineering)', margin, y);
  y += 5;

  const eduBullets = [
    'Strong academic focus on technology, engineering concepts, and applied problem solving.',
    'Completed coursework and assignments involving calculus, matrices, optimization, and systems analysis.'
  ];

  eduBullets.forEach((bullet) => {
    if (y > pageHeight - 15) {
      doc.addPage();
      y = 20;
    }
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9.5);
    doc.setTextColor(75, 85, 99);
    doc.text('•', margin + 2, y);

    const bulletLines = doc.splitTextToSize(bullet, contentWidth - 8);
    doc.text(bulletLines, margin + 6, y);
    y += (bulletLines.length * (9.5 * 0.3527) * 1.2) + 1.5;
  });

  y += 3;

  // --- INTERESTS & REFERENCES ---
  if (y > pageHeight - 30) {
    doc.addPage();
    y = 20;
  }

  addSectionHeader('Interests & References');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(17, 24, 39);
  doc.text('Interests:', margin, y);
  
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(75, 85, 99);
  doc.text('Web3 & Blockchain Innovation, UI/UX Design', margin + 20, y);
  y += 6;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(17, 24, 39);
  doc.text('References:', margin, y);
  
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(75, 85, 99);
  doc.text('Available on request.', margin + 24, y);

  // Save the PDF
  doc.save('Oketona_Samuel_Ayobami_Resume.pdf');
}
