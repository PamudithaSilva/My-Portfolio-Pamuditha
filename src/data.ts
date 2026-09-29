export const profile = {
  name: 'Pamuditha Silva',
  role: 'Full-Stack Developer & CS Undergraduate',
  title: 'Computer Science Undergraduate & Full-Stack Developer',
  location: 'Colombo, Sri Lanka',
  email: 'shalukapamuditha@gmail.com',
  phone: '+94 773635170',
  linkedin: 'https://www.linkedin.com/in/pamuditha-silva-b78926336/',
  github: 'https://github.com/PamudithaSilva',
  status: 'Open for Internships & Projects',
  about:
    'Third-year Computer Science undergraduate at the University of Westminster (IIT) with a strong foundation in building scalable full-stack applications, resilient REST APIs, and generative AI integrations. Passionate about crafting performant user experiences with React & TypeScript, and architecting robust backend services with Node.js and Java.',
  stats: [
    { label: 'Academic Standing', value: 'BSc (Hons) CS' },
    { label: 'Featured Builds', value: '5+ Projects' },
    { label: 'Technologies', value: '15+ Tools' },
    { label: 'Hackathons', value: '4 Contests' },
  ],
}

export type SkillCategory = {
  name: string
  id: string
  skills: { name: string; iconKey: string }[]
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend & UI',
    id: 'frontend',
    skills: [
      { name: 'React', iconKey: 'react' },
      { name: 'TypeScript', iconKey: 'typescript' },
      { name: 'JavaScript', iconKey: 'javascript' },
      { name: 'Tailwind CSS', iconKey: 'tailwind' },
      { name: 'HTML5 / CSS3', iconKey: 'html' },
      { name: 'Figma', iconKey: 'figma' },
    ],
  },
  {
    name: 'Backend & APIs',
    id: 'backend',
    skills: [
      { name: 'Node.js', iconKey: 'nodejs' },
      { name: 'Express', iconKey: 'express' },
      { name: 'Java', iconKey: 'java' },
      { name: 'Python', iconKey: 'python' },
      { name: 'Laravel / PHP', iconKey: 'laravel' },
      { name: 'REST APIs', iconKey: 'api' },
    ],
  },
  {
    name: 'Databases & Cloud',
    id: 'database',
    skills: [
      { name: 'MongoDB', iconKey: 'mongodb' },
      { name: 'MySQL', iconKey: 'mysql' },
      { name: 'PostgreSQL', iconKey: 'postgres' },
      { name: 'AWS (Basics)', iconKey: 'aws' },
      { name: 'Stripe API', iconKey: 'stripe' },
      { name: 'Gemini AI API', iconKey: 'gemini' },
    ],
  },
  {
    name: 'Tools & DevOps',
    id: 'tools',
    skills: [
      { name: 'Git & GitHub', iconKey: 'git' },
      { name: 'Postman', iconKey: 'postman' },
      { name: 'VS Code', iconKey: 'vscode' },
      { name: 'Maven', iconKey: 'maven' },
      { name: 'Jira', iconKey: 'jira' },
    ],
  },
]

export type ProjectCategory = 'all' | 'fullstack' | 'ai-api' | 'systems'

export type Project = {
  id: string
  title: string
  subtitle: string
  period: string
  category: ProjectCategory
  description: string
  highlight: string
  tags: string[]
  links: { label: string; url: string; type: 'github' | 'live' }[]
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'shop-erp-system',
    title: 'Shop ERP System',
    subtitle: 'Enterprise Resource Planning & POS Management',
    period: 'Jul 2026 - Sep 2026',
    category: 'fullstack',
    featured: true,
    highlight: 'Full-lifecycle inventory reconciliation, RBAC authentication & analytics',
    description:
      'A full-stack enterprise resource planning platform engineered to streamline retail operations, stock movements, procurement lifecycles, and business analytics. Features role-based access control (Admin & Staff), stock-aware POS sales/refund deduction, interactive analytics with Recharts, and automated CI/CD workflows.',
    tags: ['React 19', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'JWT'],
    links: [
      { label: 'GitHub Repository', url: 'https://github.com/PamudithaSilva/shop-erp-system', type: 'github' },
    ],
  },
  {
    id: 'gemellery',
    title: 'Gemellery',
    subtitle: 'AI-Powered E-Commerce Storefront',
    period: 'Nov 2025 - Mar 2026',
    category: 'fullstack',
    featured: true,
    highlight: 'Integrated Stripe Payments & Gemini AI Chatbot with live order tracking',
    description:
      'An AI-powered luxury jewellery storefront built with React, TypeScript, and Node.js. Features frictionless checkout workflows, dynamic shopping cart, live order-status tracking, and an integrated Gemini chatbot assistant for customer guidance.',
    tags: ['React', 'TypeScript', 'Node.js', 'Stripe API', 'Gemini API', 'Tailwind CSS'],
    links: [
      { label: 'GitHub Repository', url: 'https://github.com/Gemellery/Gemellery', type: 'github' },
      { label: 'Live Demo', url: 'https://gemellery.lk', type: 'live' },
    ],
  },
  {
    id: 'smart-campus',
    title: 'SmartCampus API',
    subtitle: 'IoT Sensor & Room Management REST Service',
    period: 'Feb 2026 - Mar 2026',
    category: 'ai-api',
    featured: true,
    highlight: 'Modular Java JAX-RS Jersey backend with custom error handling & test suites',
    description:
      'Enterprise-grade Java REST API using JAX-RS (Jersey) and Apache Tomcat for managing IoT rooms, sensors, and telemetry readings. Built with clean separation of concerns, comprehensive error boundaries, in-memory collections, and Postman testing.',
    tags: ['Java', 'JAX-RS', 'Tomcat', 'Maven', 'Postman', 'REST Architecture'],
    links: [
      { label: 'GitHub Repository', url: 'https://github.com/PamudithaSilva/smart-campus-api', type: 'github' },
    ],
  },
  {
    id: 'career-guidance',
    title: 'Career Guidance AI',
    subtitle: 'Intelligent Career Advisory Assistant',
    period: 'Jan 2026 - Feb 2026',
    category: 'ai-api',
    featured: false,
    highlight: 'Google Gemini generative AI integration with dynamic fallback resilience',
    description:
      'An intelligent career advisory chatbot featuring an interactive JavaScript interface and an Express microservice backend. Leverages Google Gemini API for tailored career roadmaps, structured fallback handling, and secure environment configs.',
    tags: ['JavaScript', 'Express', 'Gemini AI API', 'Node.js', 'REST'],
    links: [
      { label: 'GitHub Repository', url: 'https://github.com/PamudithaSilva/Carrier-guidance-chatbot', type: 'github' },
    ],
  },
  {
    id: 'traffic-analysis',
    title: 'Traffic Analysis System',
    subtitle: 'Desktop Congestion & CSV Analytics Tool',
    period: 'Dec 2024 - Jan 2025',
    category: 'systems',
    featured: false,
    highlight: 'Data visualization tool with CSV parser & Tkinter statistical dashboard',
    description:
      'A Python desktop tool that ingests municipal traffic CSV datasets, visualizes congestion bottlenecks through an interactive Tkinter UI, and outputs statistical summaries to power data-backed urban transport planning.',
    tags: ['Python', 'Tkinter', 'Data Visualization', 'CSV Analytics'],
    links: [
      { label: 'GitHub Repository', url: 'https://github.com/PamudithaSilva', type: 'github' },
    ],
  },
]

export const education = [
  {
    school: 'University of Westminster (UK)',
    partner: 'Informatics Institute of Technology (IIT), Sri Lanka',
    degree: 'BSc (Hons) Computer Science',
    period: '2024 - Present',
    status: '3rd Year Undergraduate',
    details: 'Focusing on Software Engineering, Data Structures & Algorithms, Web Technologies, Database Systems, and Cloud Architectures.',
  },
  {
    school: 'Taxila Central College, Horana',
    partner: '',
    degree: 'G.C.E. Advanced Level (Technology Stream)',
    period: '2020 - 2023',
    status: 'Completed',
    details: 'Science for Technology (A), Engineering Technology (B), Information & Communication Technology (B).',
  },
]

export const certifications = [
  {
    name: 'AWS Technical Essentials',
    issuer: 'Amazon Web Services',
    type: 'Cloud',
  },
  {
    name: 'Cybersecurity with Cloud Computing',
    issuer: 'Cisco Networking Academy',
    type: 'Security',
  },
  {
    name: 'Laravel Essential Training',
    issuer: 'LinkedIn Learning',
    type: 'Backend',
  },
  {
    name: 'Java Object-Oriented Programming',
    issuer: 'LinkedIn Learning',
    type: 'Software Eng',
  },
  {
    name: 'Java Essential Training: Syntax & Structure',
    issuer: 'LinkedIn Learning',
    type: 'Core Lang',
  },
  {
    name: 'Diploma in IT (DITEC)',
    issuer: 'ESOFT Metro Campus (Pearson Assured)',
    type: 'Diploma',
  },
]

export const hackathons = [
  {
    name: 'IEEEXtreme 18.0 & 19.0 Programming Competition',
    year: '2024 / 2025',
    org: 'IEEE Global',
    type: 'Competitive Programming',
  },
  {
    name: 'UOW Problem Solving International Hackathon',
    year: '2025',
    org: 'University of Westminster',
    type: 'Algorithmic Problem Solving',
  },
  {
    name: "Hacksphere '25 | IEEEXtreme Competition",
    year: '2025',
    org: 'IEEE Student Branch',
    type: 'Hackathon',
  },
  {
    name: 'CodeRally 6.0 (Advanced Tier)',
    year: '2024',
    org: 'IEEE Computer Society Chapter of IIT',
    type: 'Coding Contest',
  },
]

export const affiliations = [
  'Active Member, IEEE Student Branch, Informatics Institute of Technology',
  'Active Member, IEEE Computer Society, Informatics Institute of Technology',
  'Arduino & IoT Hardware Systems Certification, University of Ruhuna / IEEE',
]


