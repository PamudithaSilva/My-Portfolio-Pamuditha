import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiArrowUpRight, FiExternalLink, FiFolder, FiGithub, FiStar } from 'react-icons/fi'
import { projects, ProjectCategory } from '../data'

const categories: { id: ProjectCategory; label: string }[] = [
  { id: 'all', label: 'All Projects' },
  { id: 'fullstack', label: 'Full-Stack' },
  { id: 'ai-api', label: 'AI & APIs' },
  { id: 'systems', label: 'Systems & Data' },
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all')

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="section-container content-rule">
      {/* Header */}
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">
            <FiFolder className="text-sm" /> Portfolio
          </span>
          <h2 className="section-title">
            Featured <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">creations.</span>
          </h2>
        </motion.div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 rounded-2xl border border-white/[0.08] bg-slate-900/70 p-1.5 backdrop-blur-xl">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`relative rounded-xl px-3.5 py-1.5 text-xs font-semibold tracking-wide transition-colors ${
                  isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <span className="relative z-10">{cat.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="active-project-filter"
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 shadow-md shadow-cyan-500/25"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            )
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid gap-6 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((p, i) => (
            <motion.div
              layout
              key={p.id}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -6 }}
              className="glass-card group relative flex flex-col justify-between p-6 sm:p-8 transition-all duration-300 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/15"
            >
              {/* Card Header */}
              <div>
                <div className="mb-4 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[0.68rem] uppercase tracking-wider text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 rounded-md px-2.5 py-1">
                      {p.period}
                    </span>
                    {p.featured && (
                      <span className="inline-flex items-center gap-1 font-mono text-[0.65rem] font-bold uppercase tracking-wider text-amber-300 bg-amber-950/40 border border-amber-500/30 rounded-md px-2 py-1">
                        <FiStar className="text-xs" /> Featured
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    {p.links.map((l) => (
                      <a
                        key={l.url}
                        href={l.url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-sm text-slate-300 transition-all hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-cyan-300 hover:scale-105"
                        aria-label={`${l.label} for ${p.title}`}
                      >
                        {l.type === 'github' ? <FiGithub /> : <FiExternalLink />}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-cyan-200 transition-colors">
                  {p.title}
                </h3>
                <p className="mt-1 text-xs font-mono text-cyan-400/80 mb-3.5">
                  {p.subtitle}
                </p>

                {/* Highlight banner */}
                <div className="mb-4 rounded-xl border border-cyan-500/20 bg-cyan-950/20 p-3 text-xs text-slate-300">
                  <span className="font-semibold text-cyan-300">Key Highlight: </span>
                  {p.highlight}
                </div>

                {/* Description */}
                <p className="text-xs leading-relaxed text-slate-400 sm:text-sm mb-6">
                  {p.description}
                </p>
              </div>

              {/* Bottom Tags and Links */}
              <div>
                <div className="mb-5 flex flex-wrap gap-1.5">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/[0.06] bg-slate-900/90 px-2.5 py-1 font-mono text-[0.7rem] text-slate-300 transition-colors group-hover:border-cyan-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {p.links.length > 0 && (
                  <div className="flex items-center gap-4 border-t border-white/[0.07] pt-4">
                    {p.links.map((l) => (
                      <a
                        key={l.url}
                        href={l.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-400 transition-all hover:text-cyan-300 hover:translate-x-0.5"
                      >
                        <span>{l.label}</span>
                        <FiArrowUpRight className="text-sm" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
