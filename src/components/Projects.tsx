import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { projects } from '../data'

export default function Projects() {
  return (
    <section id="projects" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-accent2 font-semibold mb-2 tracking-widest text-sm uppercase">Portfolio</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Featured <span className="gradient-text">Projects</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass p-6 flex flex-col justify-between hover:-translate-y-1 hover:border-accent/40 transition-all duration-300"
          >
            <div>
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-lg leading-snug pr-4">{p.title}</h3>
                <span className="text-xs text-slate-500 whitespace-nowrap">{p.period}</span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">{p.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tags.map((t) => (
                  <span key={t} className="chip !py-1 !text-xs">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            {p.links.length > 0 && (
              <div className="flex gap-4 pt-2 border-t border-white/10">
                {p.links.map((l) => (
                  <a
                    key={l.url}
                    href={l.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-accent2 hover:text-white transition-colors mt-3"
                  >
                    {l.label.toLowerCase().includes('github') ? <FiGithub /> : <FiExternalLink />}
                    {l.label}
                  </a>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
