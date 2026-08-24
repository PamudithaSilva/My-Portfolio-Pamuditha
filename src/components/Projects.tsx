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
        <p className="eyebrow">Portfolio</p>
        <h2 className="section-title mb-12">
          Featured <span className="gradient-text">Projects</span>
        </h2>
      </motion.div>

      <div className="grid items-stretch gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -7, scale: 1.012 }}
            className="glass flex h-full min-w-0 flex-col justify-between p-6 hover:border-accent/50 transition-[border-color,box-shadow] duration-300 hover:shadow-xl hover:shadow-accent/10"
          >
            <div>
              <div className="mb-3 flex items-start justify-between gap-4">
                <h3 className="min-w-0 font-semibold text-lg leading-snug">{p.title}</h3>
                <span className="shrink-0 text-right text-xs text-slate-500 whitespace-nowrap">{p.period}</span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">{p.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tags.map((t) => (
                  <motion.span key={t} whileHover={{ y: -2, backgroundColor: 'rgba(255,255,255,0.11)' }} className="chip !py-1 !text-xs">
                    {t}
                  </motion.span>
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
                    aria-label={`${l.label}: ${p.title}`}
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
