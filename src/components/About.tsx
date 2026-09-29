import { motion } from 'framer-motion'
import { profile } from '../data'
import { FiCode, FiCpu, FiDatabase, FiLayers, FiShield, FiCheckCircle } from 'react-icons/fi'

const pillars = [
  {
    icon: <FiCode className="text-xl text-cyan-400" />,
    title: 'Modern Full-Stack Engineering',
    tag: 'Frontend & UI Architecture',
    text: 'Crafting responsive, high-performance interfaces with React, TypeScript, and Tailwind CSS, coupled with reliable microservices in Node.js and Java.',
    skills: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite', 'Next.js concepts'],
  },
  {
    icon: <FiCpu className="text-xl text-violet-400" />,
    title: 'Generative AI & API Integrations',
    tag: 'LLMs & Modern APIs',
    text: 'Building intelligent user experiences with Google Gemini AI API, automated conversational assistants, and secure Stripe payment processing.',
    skills: ['Google Gemini API', 'Stripe Payments', 'Prompt Flows', 'REST Design'],
  },
  {
    icon: <FiDatabase className="text-xl text-blue-400" />,
    title: 'Scalable Backends & Cloud Databases',
    tag: 'Data & Cloud Infrastructure',
    text: 'Architecting robust RESTful services with Java (JAX-RS/Jersey) and Express, integrated with MongoDB, MySQL, PostgreSQL, and AWS basics.',
    skills: ['Node.js / Express', 'Java JAX-RS', 'MongoDB', 'PostgreSQL / MySQL'],
  },
]

const highlights = [
  'Clean code architecture & modular component design',
  'End-to-end type safety with TypeScript & schema validation',
  'Automated CI/CD integration & version control discipline',
  'Real-time data flow, state management & API caching',
]

export default function About() {
  return (
    <section id="about" className="section-container content-rule">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mb-12"
      >
        <span className="eyebrow">
          <FiLayers className="text-sm" /> About Me
        </span>
        <h2 className="section-title">
          Engineering scalable software with{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
            precision and passion.
          </span>
        </h2>
      </motion.div>

      {/* Main Grid: Narrative & Capabilities */}
      <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-12 items-start">
        {/* Left Column: Background & Engineering Focus */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="glass-card p-6 sm:p-7 space-y-4">
            <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              Developer Profile &amp; Philosophy
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-slate-300">
              {profile.about}
            </p>
            <p className="text-sm leading-relaxed text-slate-400">
              I prioritize clean architectures, maintainable codebases, and seamless user experiences. Whether developing full-lifecycle ERP systems or AI assistants, I enjoy tackling challenging algorithmic problems and translating requirements into high-value software.
            </p>

            {/* Quick Principles */}
            <div className="border-t border-white/[0.08] pt-4 mt-4 space-y-2.5">
              <p className="font-mono text-xs uppercase tracking-wider text-cyan-400 font-semibold">
                Core Development Principles
              </p>
              <div className="grid gap-2">
                {highlights.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs text-slate-300">
                    <FiCheckCircle className="text-cyan-400 shrink-0 text-sm" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Specialization Pillars */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          {pillars.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="glass-card card-glow-animated p-6 transition-all duration-300 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/[0.05] border border-white/10 shadow-md">
                  {pillar.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="font-mono text-[0.68rem] font-semibold uppercase tracking-wider text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 px-2 py-0.5 rounded">
                      {pillar.tag}
                    </span>
                    <span className="font-mono text-xs text-slate-500">0{idx + 1}</span>
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {pillar.text}
                  </p>
                  
                  {/* Skill Chips */}
                  <div className="mt-3.5 flex flex-wrap gap-1.5">
                    {pillar.skills.map((s) => (
                      <span
                        key={s}
                        className="rounded-md border border-white/[0.08] bg-slate-950/60 px-2.5 py-0.5 font-mono text-[0.7rem] text-slate-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

