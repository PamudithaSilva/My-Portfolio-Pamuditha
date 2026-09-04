import { motion } from 'framer-motion'
import { profile } from '../data'
import { FiCode, FiShield, FiZap } from 'react-icons/fi'

const highlights = [
  {
    icon: <FiCode />,
    title: 'Full-Stack Development',
    text: 'Building scalable web apps with React (TypeScript) and Node.js, from database design to deployment.',
  },
  {
    icon: <FiShield />,
    title: 'Cybersecurity Minded',
    text: 'Strong foundation in secure, efficient system design backed by cloud security coursework.',
  },
  {
    icon: <FiZap />,
    title: 'API & Integrations',
    text: 'Experienced integrating third-party services like Stripe and Gemini API into production apps.',
  },
]

export default function About() {
  return (
    <section id="about" className="section-container content-rule">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="eyebrow">About me</p>
        <h2 className="section-title mb-6">
          A practical approach to <span className="gradient-text">software development.</span>
        </h2>
        <p className="max-w-3xl text-lg leading-relaxed text-slate-400 mb-14">{profile.about}</p>
      </motion.div>

      <div className="grid items-stretch gap-6 md:grid-cols-3">
        {highlights.map((h, i) => (
          <motion.div
            key={h.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="surface h-full min-w-0 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50"
          >
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg border border-accent2/30 bg-accent/15 text-xl text-accent2">
              {h.icon}
            </div>
            <h3 className="mb-2 text-lg font-semibold text-white">{h.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{h.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
