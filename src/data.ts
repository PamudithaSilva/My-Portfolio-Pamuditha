export const profile = {
  name: 'Pamuditha Silva',
  title: 'Computer Science Undergraduate and Full-Stack Developer',
  location: 'Colombo, Sri Lanka',
  email: 'shalukapamuditha@gmail.com',
  phone: '+94 773635170',
  linkedin: 'https://www.linkedin.com/in/pamuditha-silva',
  github: 'https://github.com/PamudithaSilva',
  about:
    'I am a third-year Computer Science student who builds secure, user-focused web applications. My experience spans React and TypeScript interfaces, Node.js services, REST APIs, cloud-ready data flows, and practical integrations with Stripe and Google Gemini.',
}

export const skills = {
  'Core development': ['Java', 'Python', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'PHP'],
  'Web and backend': ['React', 'Node.js', 'Express', 'Laravel', 'REST APIs'],
  'Data and cloud': ['MongoDB', 'MySQL', 'PostgreSQL', 'Stripe API', 'Gemini API'],
  'Workflow and tools': ['Git', 'GitHub', 'Postman', 'Figma', 'Jira', 'VS Code', 'Maven'],
}

export type Project = {
  title: string
  period: string
  description: string
  tags: string[]
  links: { label: string; url: string }[]
}

export const projects: Project[] = [
  {
    title: 'Gemellery - Cloud-Deployed E-Commerce Platform',
    period: 'Nov 2025 - Mar 2026',
    description:
      'An AI-powered jewellery storefront built with React, TypeScript, and Node.js. I delivered contact and shipping flows, cart and checkout experiences, order-status tracking, a Gemini chatbot, and secure Stripe payments.',
    tags: ['React', 'TypeScript', 'Node.js', 'Stripe API', 'Gemini API'],
    links: [
      { label: 'GitHub', url: 'https://github.com/Gemellery/Gemellery' },
      { label: 'Live site', url: 'https://gemellery.lk' },
    ],
  },
  {
    title: 'SmartCampus Sensor and Room Management API',
    period: 'Feb 2026 - Mar 2026',
    description:
      'A Java REST API using JAX-RS (Jersey) and Apache Tomcat for rooms, sensors, and nested readings. It includes custom error handling, in-memory collections, Postman testing, and Maven-based project management.',
    tags: ['Java', 'JAX-RS', 'Tomcat', 'Maven', 'Postman'],
    links: [{ label: 'GitHub', url: 'https://github.com/PamudithaSilva/smart-campus-api' }],
  },
  {
    title: 'Career Guidance AI Chatbot',
    period: 'Jan 2026 - Feb 2026',
    description:
      'A career guidance chatbot with a clean JavaScript frontend and an Express backend. It uses the Google Gemini API for tailored recommendations, with fallback handling, environment-based configuration, and CORS support.',
    tags: ['JavaScript', 'Express', 'Gemini API', 'dotenv'],
    links: [{ label: 'GitHub', url: 'https://github.com/PamudithaSilva/Carrier-guidance-chatbot' }],
  },
  {
    title: 'Traffic Analysis System',
    period: 'Dec 2024 - Jan 2025',
    description:
      'A Python desktop tool that imports traffic CSVs, visualizes congestion through a Tkinter interface, and generates statistical summaries to support data-driven transport decisions.',
    tags: ['Python', 'Tkinter', 'Data visualization'],
    links: [],
  },
]

export const education = [
  {
    school: 'University of Westminster (Informatics Institute of Technology)',
    degree: 'BSc (Hons) Computer Science',
    period: '2024 - 2028',
  },
  {
    school: 'Taxila Central College, Horana',
    degree: 'G.C.E. Advanced Level - Science for Technology (A), Engineering Technology (B), ICT (B)',
    period: '2020 - 2023',
  },
]

export const extraQualifications = {
  educations: [
    'Diploma in IT (DITEC), ESOFT Metro Campus, hosted by Pearson College London',
    'Arduino Course, University of Ruhuna, conducted by IEEE',
  ],
  memberships: [
    'Member, IEEE Student Branch, Informatics Institute of Technology',
    'Member, IEEE Computer Society, Informatics Institute of Technology',
  ],
}

export const certifications = [
  'Laravel Essential Training - LinkedIn Learning',
  'Java Object-Oriented Programming - LinkedIn Learning',
  'AWS Technical Essentials - Amazon Web Services',
  'Cybersecurity with Cloud Computing - Cisco Networking Academy',
  'Java Essential Training: Syntax and Structure - LinkedIn Learning',
]

export const hackathons = [
  'IEEEXtreme 18.0 Programming Competition - 2024',
  'UOW Problem Solving International Hackathon - 2025',
  "Hacksphere '25 | IEEEXtreme 19.0 Programming Competition - 2025",
  'CodeRally 6.0 (Advanced Tier) - IEEE Computer Society Branch Chapter of IIT',
]
