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
    <section id="about" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-accent2 font-semibold mb-2 tracking-widest text-sm uppercase">About Me</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Turning ideas into <span className="gradient-text">reliable software</span>
        </h2>
        <p className="text-slate-400 max-w-3xl leading-relaxed mb-14">{profile.about}</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {highlights.map((h, i) => (
          <motion.div
            key={h.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass p-6 hover:border-accent/40 transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent2 flex items-center justify-center text-xl mb-4">
              {h.icon}
            </div>
            <h3 className="font-semibold text-lg mb-2">{h.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{h.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
