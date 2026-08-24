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
        <p className="eyebrow">Skills</p>
        <h2 className="section-title mb-12">
          My <span className="gradient-text">Tech Stack</span>
        </h2>
      </motion.div>

      <div className="grid items-stretch gap-6 md:grid-cols-2">
        {Object.entries(skills).map(([category, items], i) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass h-full min-w-0 p-6 hover:border-white/20 transition-colors"
          >
            <h3 className="font-semibold mb-4 text-slate-200">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((s) => (
                <motion.span key={s} whileHover={{ y: -3, scale: 1.04 }} transition={{ type: 'spring', stiffness: 420, damping: 20 }} className="chip cursor-default hover:border-accent2/40">
                  {s}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
