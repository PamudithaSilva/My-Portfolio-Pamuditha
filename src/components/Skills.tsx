import { motion } from 'framer-motion'
import { skills } from '../data'

export default function Skills() {
  return (
    <section id="skills" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-accent2 font-semibold mb-2 tracking-widest text-sm uppercase">Skills</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          My <span className="gradient-text">Tech Stack</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {Object.entries(skills).map(([category, items], i) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass p-6"
          >
            <h3 className="font-semibold mb-4 text-slate-200">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
