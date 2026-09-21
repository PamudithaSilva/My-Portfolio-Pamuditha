import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiArrowUpRight, FiCheckCircle, FiExternalLink, FiFolder, FiGithub, FiInfo, FiLayers, FiStar, FiX } from 'react-icons/fi'
import { projects, Project, ProjectCategory } from '../data'

const categories: { id: ProjectCategory; label: string }[] = [
  { id: 'all', label: 'All Projects' },
  { id: 'fullstack', label: 'Full-Stack' },
  { id: 'ai-api', label: 'AI & APIs' },
  { id: 'systems', label: 'Systems & Data' },
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

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

        {/* Filter Pills with Counts */}
        <div className="flex flex-wrap items-center gap-1.5 rounded-2xl border border-white/[0.08] bg-slate-900/70 p-1.5 backdrop-blur-xl">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id
            const count =
              cat.id === 'all'
                ? projects.length
                : projects.filter((p) => p.category === cat.id).length

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`relative rounded-xl px-3.5 py-1.5 text-xs font-semibold tracking-wide transition-colors ${
                  isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  {cat.label}
                  <span className={`text-[0.65rem] px-1.5 py-0.2 rounded-full font-mono ${isActive ? 'bg-white/20 text-white' : 'bg-white/5 text-slate-400'}`}>
                    {count}
                  </span>
                </span>
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
              className="glass-card card-glow-animated group relative flex flex-col justify-between p-6 sm:p-8 transition-all duration-300 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              {/* Card Glow Orb */}
              <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none group-hover:bg-cyan-500/20 transition-all" />

              {/* Card Header */}
              <div className="relative z-10">
                <div className="mb-4 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[0.68rem] uppercase tracking-wider text-cyan-300 bg-cyan-950/70 border border-cyan-500/30 rounded-md px-2.5 py-1 shadow-sm">
                      {p.period}
                    </span>
                    {p.featured && (
                      <span className="inline-flex items-center gap-1 font-mono text-[0.65rem] font-bold uppercase tracking-wider text-amber-300 bg-amber-950/60 border border-amber-500/30 rounded-md px-2 py-1 shadow-sm">
                        <FiStar className="text-xs" /> Featured
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(p)}
                      className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-sm text-slate-300 transition-all hover:border-cyan-400/40 hover:bg-cyan-500/15 hover:text-cyan-300 hover:scale-105"
                      title="Inspect Project Overview"
                      aria-label={`Inspect overview for ${p.title}`}
                    >
                      <FiInfo />
                    </button>
                    {p.links.map((l) => (
                      <a
                        key={l.url}
                        href={l.url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-sm text-slate-300 transition-all hover:border-cyan-400/40 hover:bg-cyan-500/15 hover:text-cyan-300 hover:scale-105"
                        aria-label={`${l.label} for ${p.title}`}
                      >
                        {l.type === 'github' ? <FiGithub /> : <FiExternalLink />}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 
                  onClick={() => setSelectedProject(p)}
                  className="text-xl font-bold tracking-tight text-white group-hover:text-cyan-200 transition-colors cursor-pointer"
                >
                  {p.title}
                </h3>
                <p className="mt-1 text-xs font-mono text-cyan-400/90 mb-3.5">
                  {p.subtitle}
                </p>

                {/* Highlight banner */}
                <div className="mb-4 rounded-xl border border-cyan-500/25 bg-cyan-950/30 p-3 text-xs text-slate-200 backdrop-blur-sm">
                  <span className="font-semibold text-cyan-300">Highlight: </span>
                  {p.highlight}
                </div>

                {/* Description */}
                <p className="text-xs leading-relaxed text-slate-300 sm:text-sm mb-6">
                  {p.description}
                </p>
              </div>

              {/* Bottom Tags and Links */}
              <div className="relative z-10">
                <div className="mb-5 flex flex-wrap gap-1.5">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/[0.08] bg-slate-900/95 px-2.5 py-1 font-mono text-[0.7rem] text-slate-300 transition-colors group-hover:border-cyan-500/30 group-hover:text-cyan-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between border-t border-white/[0.08] pt-4">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(p)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 transition-all hover:text-cyan-300 group-hover:translate-x-0.5"
                  >
                    <span>Quick Specs</span>
                    <FiLayers className="text-xs" />
                  </button>

                  {p.links.length > 0 && (
                    <div className="flex items-center gap-3">
                      {p.links.map((l) => (
                        <a
                          key={l.url}
                          href={l.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-slate-300 transition-all hover:text-cyan-300 hover:translate-x-0.5"
                        >
                          <span>{l.label}</span>
                          <FiArrowUpRight className="text-sm text-cyan-400" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Quick Specs Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.5, bounce: 0.2 }}
              className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-white/20 bg-slate-900/95 p-6 sm:p-8 shadow-2xl backdrop-blur-2xl"
            >
              {/* Top Gradient Bar */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500" />

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition-colors hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-white"
                aria-label="Close modal"
              >
                <FiX className="text-lg" />
              </button>

              {/* Header */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-2.5 py-0.5 rounded">
                    {selectedProject.period}
                  </span>
                  <span className="font-mono text-xs text-slate-400 bg-white/[0.04] border border-white/[0.08] px-2.5 py-0.5 rounded">
                    {selectedProject.category.toUpperCase()}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {selectedProject.title}
                </h3>
                <p className="font-mono text-xs text-cyan-400 mt-1">
                  {selectedProject.subtitle}
                </p>
              </div>

              {/* Highlight */}
              <div className="mb-5 rounded-xl border border-cyan-500/30 bg-cyan-950/40 p-3.5 text-xs text-slate-200">
                <span className="font-bold text-cyan-300">Architecture Highlights: </span>
                {selectedProject.highlight}
              </div>

              {/* Details */}
              <div className="mb-6 space-y-3 text-xs leading-relaxed text-slate-300 sm:text-sm">
                <p>{selectedProject.description}</p>
              </div>

              {/* Stack Tech Pills */}
              <div className="mb-6">
                <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Tech Stack &amp; Libraries
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-cyan-500/20 bg-cyan-950/30 px-3 py-1 font-mono text-xs text-cyan-200"
                    >
                      <FiCheckCircle className="text-cyan-400 text-xs" />
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-end gap-3 border-t border-white/[0.08] pt-5">
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="btn-outline !py-2 !px-4 text-xs font-mono"
                >
                  Close
                </button>
                {selectedProject.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary !py-2 !px-4 text-xs font-semibold"
                  >
                    <span>{link.label}</span>
                    {link.type === 'github' ? <FiGithub className="text-sm" /> : <FiExternalLink className="text-sm" />}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
