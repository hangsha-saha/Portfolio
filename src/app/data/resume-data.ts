export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
  stack: string[];
}

export interface Project {
  name: string;
  desc: string;
  stack: string[];
  tag?: string;
}

export interface Patent {
  title: string;
  appNo: string;
  date: string;
}

export interface EduItem {
  degree: string;
  school: string;
  period: string;
  detail: string;
}

export const PROFILE = {
  name: 'Hangsha Saha',
  role: 'Software Engineer',
  tagline: 'Full-stack engineer building secure, data-driven web systems — Angular on the front, Java/Spring Boot underneath.',
  email: 'hangshasaha@gmail.com',
  phone: '+91 8250083809',
  location: 'Chennai, Tamil Nadu, India',
  linkedin: 'https://www.linkedin.com/in/hangshasaha',
};

export const EXPERIENCE: Experience[] = [
  {
    role: 'Software Engineer Intern',
    company: 'Intellect Design Arena Pvt Ltd',
    location: 'Chennai, India',
    period: 'Feb 2026 — Aug 2026',
    points: [
      'Built a core banking application for MBSB Bank using JSP, Servlet and Angular.',
      'Contributed to the UKWISE and Payroll Masking modules end to end.',
      'Developed the UKWISE frontend and backend in Angular & Java, implementing AES/RSA payload encryption.',
      'Implemented entity-based data masking and encrypted file uploads for the Payroll Masking module.',
    ],
    stack: ['Angular', 'Java', 'JSP', 'Servlet', 'AES/RSA'],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Fixfin Technologies Pvt. Ltd',
    location: 'West Bengal, India',
    period: 'Sep 2023 — Mar 2024',
    points: [
      'KwituMall — e-commerce platform, built frontend and backend.',
      'Service89 — backend for a garage-services booking platform.',
      'Investment & Beyond — full-stack build for a stock-market platform.',
      'FlowQi — full-stack build for a CRM product.',
      'IndusAstro — owned documentation, API and database design for an astrology platform.',
    ],
    stack: ['JavaScript', 'PHP', 'SQL', 'REST APIs'],
  },
];

export const PROJECTS: Project[] = [
  {
    name: 'Finance Tracker',
    desc: 'A personal finance tracking app with a Spring Boot + MySQL backend and an Angular frontend.',
    stack: ['Java', 'Spring Boot', 'Angular', 'MySQL'],
  },
  {
    name: 'Faculty Appointment Booking System',
    desc: 'A booking system letting students schedule faculty appointments, currently in active use.',
    stack: ['PHP', 'JavaScript', 'SQL', 'XAMPP'],
    tag: 'In use',
  },
  {
    name: 'Capture The Flag Platform',
    desc: 'A web-based CTF platform for hosting and scoring security challenges.',
    stack: ['PHP', 'JavaScript', 'SQL'],
  },
  {
    name: 'Crack the Password',
    desc: 'An interactive web app simulating password-cracking challenges for learning security concepts.',
    stack: ['PHP', 'JavaScript', 'SQL'],
  },
  {
    name: 'CRUD Operations App',
    desc: 'A full CRUD reference app on the MEAN-adjacent stack, backed by MongoDB Atlas.',
    stack: ['Node.js', 'Express.js', 'EJS', 'MongoDB Atlas'],
  },
];

export const PATENTS: Patent[] = [
  {
    title: 'An Intelligent Dual-Attention Weather-Aware Probabilistic Deep Learning Based System for Resilient Grid Energy Load Forecasting',
    appNo: '202641053861',
    date: 'April 2026',
  },
  {
    title: 'A Multilingual Retrieval-Augmented Generation (RAG) System for Knowledge-Augmented Document Question-Answering',
    appNo: '202641010245',
    date: 'Feb 2026',
  },
  {
    title: 'System and Method for Predicting Cuisine Details and Identifying Food Patterns',
    appNo: 'IPR0000297P',
    date: 'Sept 2025',
  },
];

export const EDUCATION: EduItem[] = [
  {
    degree: 'MCA',
    school: 'Vellore Institute of Technology (Vellore Campus)',
    period: '2024 — 2026',
    detail: 'CGPA: 8.76',
  },
  {
    degree: 'BCA',
    school: 'Inspiria Knowledge Campus',
    period: '2021 — 2024',
    detail: 'CGPA: 9.09 · Computing Club Tech Head, Sports Club, Cultural Club',
  },
  {
    degree: 'Higher Secondary (10+2)',
    school: 'Maynaguri High School',
    period: '2021',
    detail: '91.6%',
  },
];

export const ACHIEVEMENTS: string[] = [
  'Rising Star, Shining Star and Super Star awards during BCA at Inspiria Knowledge Campus',
  '2nd position, Inter-College Debugging Competition — Inspiria Knowledge Campus, May 2022',
  '2nd position, Inter-School Science Project Competition — Feb 2020',
];

export const ACTIVITIES: string[] = [
  'Organized inter-college Debugging, CodeChef, Game Explosion and CTF competitions',
  'Organized an inter-college Blind Coding Competition and Trivia Quiz',
];

export const SKILLS: { group: string; items: string[] }[] = [
  { group: 'Frontend', items: ['Angular', 'JavaScript', 'jQuery', 'Bootstrap', 'HTML/CSS'] },
  { group: 'Backend', items: ['Java', 'Spring Boot', 'Node.js', 'Express.js', 'PHP'] },
  { group: 'Data', items: ['SQL', 'MongoDB Atlas', 'MySQL'] },
  { group: 'Languages & Tools', items: ['Python', 'Git', 'Visual Studio Code', 'XAMPP'] },
];
