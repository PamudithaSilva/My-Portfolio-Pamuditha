import { motion } from 'framer-motion'
import { profile } from '../data'
import { FiCode, FiCpu, FiDatabase, FiLayers, FiShield, FiTrendingUp } from 'react-icons/fi'

const capabilities = [
  {
    icon: <FiCode className="text-xl text-blue-400" />,
    gradient: 'from-blue-500/25 to-cyan-500/10',
    borderHover: 'hover:border-blue-500/50 hover:shadow-blue-500/15',
    title: 'Full-Stack Web Engineering',
    tag: 'Frontend & Architecture',
    text: 'Building performant single-page apps and server-rendered architectures with React, TypeScript, Node.js, and modern CSS.',
  },
  {
    icon: <FiCpu className="text-xl text-cyan-400" />,
    gradient: 'from-cyan-500/25 to-teal-500/10',
    borderHover: 'hover:border-cyan-500/50 hover:shadow-cyan-500/15',
    title: 'Generative AI Integrations',
    tag: 'LLM & Workflows',
    text: 'Integrating state-of-the-art LLMs (like Google Gemini API) for conversational agents, real-time contextual recommendations, and automated flows.',
  },
  {
    icon: <FiDatabase className="text-xl text-violet-400" />,
    gradient: 'from-violet-500/25 to-purple-500/10',
    borderHover: 'hover:border-violet-500/50 hover:shadow-violet-500/15',
    title: 'Robust REST APIs & Cloud DBs',
    tag: 'Backend & Data',
    text: 'Designing resilient RESTful microservices with Java JAX-RS and Express, paired with MongoDB, MySQL, and PostgreSQL.',
  },
  {
    icon: <FiShield className="text-xl text-emerald-400" />,
    gradient: 'from-emerald-500/25 to-green-500/10',
    borderHover: 'hover:border-emerald-500/50 hover:shadow-emerald-500/15',
    title: 'Secure & Reliable Architecture',
    tag: 'Security & Payments',
    text: 'Applying cloud security principles, rigorous error boundary handling, and secure third-party payment gateways like Stripe.',
  },
]

export default function About() {
  return (
    <section id="about" className="section-container content-rule">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        <span className="eyebrow">
          <FiLayers className="text-sm" /> About Me
        </span>
        <h2 className="section-title mb-6">
          Architecting systems with{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
            precision and purpose.
          </span>
        </h2>
        <p className="text-base leading-relaxed text-slate-300 sm:text-lg mb-12">
          {profile.about}
        </p>
      </motion.div>

      {/* Bento Grid Capabilities */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {capabilities.map((cap, i) => (
          <motion.div
            key={cap.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`glass-card card-glow-animated relative flex flex-col justify-between p-6 transition-all duration-300 hover:-translate-y-2 shadow-xl ${cap.borderHover}`}
          >
            {/* Top Glowing Orb in Card */}
            <div className={`absolute top-0 right-0 h-32 w-32 rounded-full bg-gradient-to-br ${cap.gradient} blur-2xl pointer-events-none`} />

            <div className="relative z-10">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/[0.08] backdrop-blur-md shadow-lg">
                {cap.icon}
              </div>
              <div className="mb-2.5">
                <span className="font-mono text-[0.65rem] font-semibold uppercase tracking-wider text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 px-2.5 py-1 rounded-md shadow-sm">
                  {cap.tag}
                </span>
              </div>
              <h3 className="mb-2.5 text-base font-bold text-white tracking-tight leading-snug">
                {cap.title}
              </h3>
              <p className="text-xs leading-relaxed text-slate-300 sm:text-sm">
                {cap.text}
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-white/[0.08] pt-4 relative z-10">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                <span className="font-mono text-[0.7rem] uppercase tracking-wider text-slate-400 font-semibold">
                  Engineering Pillar
                </span>
              </div>
              <span className="font-mono text-[0.7rem] text-cyan-400/80 font-bold">0{i + 1}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
