import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { skillCategories } from '../data'
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiFigma,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiPhp,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiStripe,
  SiGit,
  SiPostman,
  SiApachemaven,
  SiJira,
} from 'react-icons/si'
import { FaAws, FaJava } from 'react-icons/fa6'
import { VscVscode } from 'react-icons/vsc'
import { FiCpu, FiServer, FiTerminal } from 'react-icons/fi'
import React from 'react'

const iconMap: Record<string, { icon: React.ReactNode; color: string }> = {
  react: { icon: <SiReact />, color: 'text-cyan-400' },
  typescript: { icon: <SiTypescript />, color: 'text-blue-400' },
  javascript: { icon: <SiJavascript />, color: 'text-yellow-400' },
  html: { icon: <SiHtml5 />, color: 'text-orange-400' },
  tailwind: { icon: <SiTailwindcss />, color: 'text-sky-400' },
  figma: { icon: <SiFigma />, color: 'text-purple-400' },
  nodejs: { icon: <SiNodedotjs />, color: 'text-emerald-400' },
  express: { icon: <SiExpress />, color: 'text-slate-300' },
  java: { icon: <FaJava />, color: 'text-red-400' },
  python: { icon: <SiPython />, color: 'text-amber-400' },
  laravel: { icon: <SiLaravel />, color: 'text-rose-500' },
  api: { icon: <FiServer />, color: 'text-cyan-400' },
  mongodb: { icon: <SiMongodb />, color: 'text-green-500' },
  mysql: { icon: <SiMysql />, color: 'text-blue-500' },
  postgres: { icon: <SiPostgresql />, color: 'text-sky-500' },
  aws: { icon: <FaAws />, color: 'text-amber-500' },
  stripe: { icon: <SiStripe />, color: 'text-indigo-400' },
  gemini: { icon: <FiCpu />, color: 'text-cyan-300' },
  git: { icon: <SiGit />, color: 'text-orange-500' },
  postman: { icon: <SiPostman />, color: 'text-amber-500' },
  vscode: { icon: <VscVscode />, color: 'text-blue-400' },
  maven: { icon: <SiApachemaven />, color: 'text-red-400' },
  jira: { icon: <SiJira />, color: 'text-blue-500' },
}

export default function Skills() {
  const [selectedCat, setSelectedCat] = useState<string>('all')

  const displayedCategories =
    selectedCat === 'all'
      ? skillCategories
      : skillCategories.filter((c) => c.id === selectedCat)

  return (
    <section id="skills" className="section-container content-rule">
      {/* Header & Filter Controls */}
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">
            <FiTerminal className="text-sm" /> Technical Arsenal
          </span>
          <h2 className="section-title">
            Technologies &amp;{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              tools I work with.
            </span>
          </h2>
        </motion.div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 rounded-2xl border border-white/[0.08] bg-slate-900/70 p-1.5 backdrop-blur-xl">
          <button
            type="button"
            onClick={() => setSelectedCat('all')}
            className={`relative rounded-xl px-3.5 py-1.5 text-xs font-semibold tracking-wide transition-colors ${
              selectedCat === 'all' ? 'text-white' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <span className="relative z-10">All</span>
            {selectedCat === 'all' && (
              <motion.div
                layoutId="active-skill-tab"
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 shadow-md shadow-cyan-500/25"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
          </button>

          {skillCategories.map((cat) => {
            const isActive = selectedCat === cat.id
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCat(cat.id)}
                className={`relative rounded-xl px-3.5 py-1.5 text-xs font-semibold tracking-wide transition-colors ${
                  isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <span className="relative z-10">{cat.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="active-skill-tab"
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 shadow-md shadow-cyan-500/25"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            )
          })}
        </div>
      </div>

      {/* Grid of Categories */}
      <motion.div layout className="grid gap-6 sm:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {displayedCategories.map((cat, i) => (
            <motion.div
              layout
              key={cat.id}
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="glass-card card-glow-animated flex flex-col justify-between p-6 sm:p-7 transition-all duration-300 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              <div className="relative z-10">
                <div className="mb-5 flex items-center justify-between border-b border-white/[0.08] pb-3.5">
                  <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-cyan-400">
                    {cat.name}
                  </h3>
                  <span className="rounded-full bg-cyan-950/60 border border-cyan-500/30 px-2.5 py-0.5 font-mono text-[0.68rem] text-cyan-300 shadow-sm">
                    {cat.skills.length} tools
                  </span>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((s) => {
                    const meta = iconMap[s.iconKey] || {
                      icon: <FiTerminal />,
                      color: 'text-slate-300',
                    }
                    return (
                      <div
                        key={s.name}
                        className="group flex items-center gap-2 rounded-xl border border-white/[0.08] bg-slate-900/90 px-3.5 py-2 backdrop-blur-md transition-all duration-200 hover:border-cyan-400/50 hover:bg-cyan-950/30 hover:scale-[1.02] cursor-default shadow-sm"
                      >
                        <span className={`text-base transition-transform duration-200 group-hover:scale-110 ${meta.color}`}>
                          {meta.icon}
                        </span>
                        <span className="font-mono text-xs font-medium text-slate-200 group-hover:text-white">
                          {s.name}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}

