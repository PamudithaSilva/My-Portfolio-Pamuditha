export const profile = {
  name: 'Pamuditha Silva',
  title: 'Computer Science Undergraduate & Full-Stack Developer',
  location: 'Colombo, Sri Lanka',
  email: 'shalukapamuditha@gmail.com',
  phone: '+94 773635170',
  linkedin: 'http://www.linkedin.com/in/pamuditha-silva',
  github: 'https://github.com/PamudithaSilva',
  about:
    'Third-year Computer Science student with a strong foundation in Java, Python, full-stack development, and cybersecurity. Proficient in building scalable web applications using React (TypeScript) and Node.js. Experienced in RESTful API development, API integration, and working with third-party services. Skilled in using the Stripe API for payment processing and the Gemini API for AI-driven features. Strong problem-solving abilities with a passion for developing efficient, secure, and user-focused systems.',
}

export const skills = {
  'Programming & Scripting': ['Java', 'Python', 'JavaScript', 'HTML', 'CSS', 'PHP'],
  'Frameworks & Libraries': ['React.js', 'Node.js', 'Laravel'],
  'Cloud & Database': ['MongoDB', 'MySQL'],
  'Version Control': ['Git', 'GitHub Desktop'],
  'Tools & IDEs': [
    'VS Code',
    'IntelliJ IDEA',
    'NetBeans',
    'PyCharm',
    'PhpStorm',
    'HeidiSQL',
    'MySQL Workbench',
    'pgAdmin',
    'Figma',
    'Postman',
    'Jira',
  ],
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
    title: 'Gemellery — Cloud-Deployed E-Commerce Platform',
    period: 'Nov 2025 – Mar 2026',
    description:
      'Full-stack AI-powered jewellery e-commerce platform built with React (TypeScript) and Node.js. Built contact and shipping forms, cart management, checkout flow, and an order dashboard with status tracking. Integrated a Gemini-powered AI chatbot for customer engagement and a Stripe payment gateway for secure transactions.',
    tags: ['React', 'TypeScript', 'Node.js', 'Stripe API', 'Gemini API'],
    links: [
      { label: 'GitHub', url: 'https://github.com/Gemellery/Gemellery' },
      { label: 'Live Site', url: 'https://gemellery.lk' },
    ],
  },
  {
    title: 'SmartCampus Sensor & Room Management REST API',
    period: 'Feb 2026 – Mar 2026',
    description:
      'RESTful API built in Java using JAX-RS (Jersey) on Apache Tomcat, featuring room and sensor management, nested sensor readings, and custom error handling. In-memory data storage via HashMap/ArrayList, tested with Postman, and maintained with Git and Maven in NetBeans.',
    tags: ['Java', 'JAX-RS', 'Tomcat', 'Maven', 'Postman'],
    links: [{ label: 'GitHub', url: 'https://github.com/PamudithaSilva/smart-campus-api' }],
  },
  {
    title: 'Career Guidance AI Chatbot',
    period: 'Jan 2026 – Feb 2026',
    description:
      'Career guidance chatbot built with HTML, CSS, and JavaScript on a Node.js (Express) backend. Integrated the Google Gemini API for intelligent career recommendations with fallback handling, secure config via dotenv, and CORS-enabled cross-origin requests.',
    tags: ['JavaScript', 'Express', 'Gemini API', 'dotenv'],
    links: [{ label: 'GitHub', url: 'https://github.com/PamudithaSilva/Carrier-guidance-chatbot' }],
  },
  {
    title: 'Traffic Analysis System',
    period: 'Dec 2024 – Jan 2025',
    description:
      'Python-based traffic analysis tool with a Tkinter GUI for processing and visualizing traffic datasets. Automates CSV import, generates real-time congestion histograms, and produces statistical summaries to support data-driven transportation decisions.',
    tags: ['Python', 'Tkinter', 'Data Visualization'],
    links: [],
  },
]

export const education = [
  {
    school: 'University of Westminster (Informatics Institute of Technology)',
    degree: 'BSc (Hons) Computer Science',
    period: '2024 – 2028',
  },
  {
    school: 'Taxila Central College, Horana',
    degree: 'G.C.E. Advanced Level — Science for Technology (A), Engineering Technology (B), ICT (B)',
    period: '2020 – 2023',
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
  'Laravel Essential Training — LinkedIn Learning',
  'Java Object-Oriented Programming — LinkedIn Learning',
  'AWS Technical Essentials — Amazon Web Services',
  'Cybersecurity with Cloud Computing — Cisco Networking Academy',
  'Java Essential Training: Syntax and Structure — LinkedIn Learning',
]

export const hackathons = [
  'IEEEXtreme 18.0 Programming Competition — 2024',
  'UOW Problem Solving International Hackathon — 2025',
  "Hacksphere '25 | IEEEXtreme 19.0 Programming Competition — 2025",
  'CodeRally 6.0 (Advanced Tier) — IEEE Computer Society Branch Chapter of IIT',
]
