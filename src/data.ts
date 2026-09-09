export const profile = {
  name: 'Pamuditha Silva',
  role: 'Full-Stack Developer & CS Undergraduate',
  title: 'Computer Science Undergraduate & Full-Stack Developer',
  location: 'Colombo, Sri Lanka',
  email: 'shalukapamuditha@gmail.com',
  phone: '+94 773635170',
  linkedin: 'https://www.linkedin.com/in/pamuditha-silva',
  github: 'https://github.com/PamudithaSilva',
  status: 'Available for Internships & Projects',
  about:
    'I am a third-year Computer Science student at the University of Westminster who designs and builds high-performance, secure web applications. My experience spans responsive React and TypeScript frontends, robust Node.js services, scalable REST APIs, cloud-ready architectures, and generative AI integrations with Stripe and Google Gemini.',
  stats: [
    { label: 'Degree Track', value: 'BSc (Hons) CS' },
    { label: 'Completed Projects', value: '4+ Builds' },
    { label: 'Tech Stack', value: '15+ Tools' },
    { label: 'Hackathons', value: '4 Contests' },
  ],
}

export type SkillCategory = {
  name: string
  skills: { name: string; iconKey: string }[]
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend & UI',
    skills: [
      { name: 'React', iconKey: 'react' },
      { name: 'TypeScript', iconKey: 'typescript' },
      { name: 'JavaScript', iconKey: 'javascript' },
      { name: 'HTML5', iconKey: 'html' },
      { name: 'Tailwind CSS', iconKey: 'tailwind' },
      { name: 'Figma', iconKey: 'figma' },
    ],
  },
  {
    name: 'Backend & APIs',
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
    id: 'gemellery',
    title: 'Gemellery',
    subtitle: 'Cloud-Deployed E-Commerce Platform',
    period: 'Nov 2025 - Mar 2026',
    category: 'fullstack',
    featured: true,
    highlight: 'Integrated Stripe Payments & Gemini AI Chatbot with realtime order tracking',
    description:
      'An AI-powered luxury jewellery storefront built with React, TypeScript, and Node.js. Features frictionless contact/shipping workflows, dynamic cart & checkout, live order-status tracking, and an integrated Gemini chatbot assistant.',
    tags: ['React', 'TypeScript', 'Node.js', 'Stripe API', 'Gemini API', 'Tailwind CSS'],
    links: [
      { label: 'GitHub', url: 'https://github.com/Gemellery/Gemellery', type: 'github' },
      { label: 'Live Demo', url: 'https://gemellery.lk', type: 'live' },
    ],
  },
  {
    id: 'smart-campus',
    title: 'SmartCampus API',
    subtitle: 'Sensor & Room Management REST API',
    period: 'Feb 2026 - Mar 2026',
    category: 'ai-api',
    featured: true,
    highlight: 'Modular Java JAX-RS Jersey backend with custom error handling & test suites',
    description:
      'Enterprise-grade Java REST API using JAX-RS (Jersey) and Apache Tomcat for managing IoT rooms, sensors, and telemetry readings. Built with clean separation of concerns, comprehensive error boundaries, in-memory collections, and Postman testing.',
    tags: ['Java', 'JAX-RS', 'Tomcat', 'Maven', 'Postman', 'REST Architecture'],
    links: [
      { label: 'GitHub', url: 'https://github.com/PamudithaSilva/smart-campus-api', type: 'github' },
    ],
  },
  {
    id: 'career-guidance',
    title: 'Career Guidance AI',
    subtitle: 'Smart Career Advisory Chatbot',
    period: 'Jan 2026 - Feb 2026',
    category: 'ai-api',
    featured: false,
    highlight: 'Google Gemini generative AI integration with dynamic fallback resilience',
    description:
      'An intelligent career advisory chatbot featuring a sleek interactive JavaScript interface and an Express microservice backend. Leverages Google Gemini API for tailored career roadmaps, structured fallback handling, and secure environment configs.',
    tags: ['JavaScript', 'Express', 'Gemini AI API', 'Node.js', 'REST'],
    links: [
      { label: 'GitHub', url: 'https://github.com/PamudithaSilva/Carrier-guidance-chatbot', type: 'github' },
    ],
  },
  {
    id: 'traffic-analysis',
    title: 'Traffic Analysis System',
    subtitle: 'Desktop Congestion Visualizer',
    period: 'Dec 2024 - Jan 2025',
    category: 'systems',
    featured: false,
    highlight: 'Data visualization tool with CSV parser & Tkinter statistical dashboard',
    description:
      'A Python desktop tool that ingests high-volume traffic CSV data, visualizes municipal congestion bottlenecks through a Tkinter UI, and outputs statistical summaries to power data-backed urban transport planning.',
    tags: ['Python', 'Tkinter', 'Data Visualization', 'CSV Analytics'],
    links: [],
  },
]

export const education = [
  {
    school: 'University of Westminster',
    partner: 'Informatics Institute of Technology (IIT)',
    degree: 'BSc (Hons) Computer Science',
    period: '2024 - 2028',
    status: 'In Progress (3rd Year)',
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

export const extraQualifications = {
  educations: [
    'Diploma in IT (DITEC), ESOFT Metro Campus, Pearson Assured',
    'Arduino & IoT Hardware Systems, University of Ruhuna, conducted by IEEE',
  ],
  memberships: [
    'Active Member, IEEE Student Branch, Informatics Institute of Technology',
    'Active Member, IEEE Computer Society, Informatics Institute of Technology',
  ],
}

