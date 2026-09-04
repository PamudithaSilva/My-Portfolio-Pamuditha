import { motion } from 'framer-motion'
import { skills } from '../data'

export default function Skills() {
  return (
    <section id="skills" className="section-container content-rule">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="eyebrow">Skills</p>
        <h2 className="section-title mb-12">
          Tools I use to <span className="gradient-text">build.</span>
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
            className="surface h-full min-w-0 p-7 transition-colors hover:border-white/20"
          >
            <h3 className="mb-5 font-mono text-xs font-medium uppercase tracking-[0.14em] text-accent2">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((s) => (
                <motion.span key={s} whileHover={{ y: -2 }} transition={{ type: 'spring', stiffness: 420, damping: 20 }} className="chip cursor-default hover:border-accent2/40">
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
