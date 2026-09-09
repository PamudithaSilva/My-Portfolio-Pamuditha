import { motion } from 'framer-motion'
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
  return (
    <section id="skills" className="section-container content-rule">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
      >
        <span className="eyebrow">
          <FiTerminal className="text-sm" /> Technical Arsenal
        </span>
        <h2 className="section-title mb-12">
          Technologies I work with to{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
            build solutions.
          </span>
        </h2>
      </motion.div>

      {/* Grid of Categories */}
      <div className="grid gap-6 sm:grid-cols-2">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card flex flex-col justify-between p-6 sm:p-7 transition-all duration-300 hover:border-cyan-500/30"
          >
            <div>
              <div className="mb-5 flex items-center justify-between border-b border-white/[0.07] pb-3.5">
                <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-cyan-400">
                  {cat.name}
                </h3>
                <span className="rounded-full bg-white/[0.05] px-2.5 py-0.5 font-mono text-[0.68rem] text-slate-400">
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
                    <motion.div
                      key={s.name}
                      whileHover={{ y: -3, scale: 1.02 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                      className="group flex items-center gap-2 rounded-xl border border-white/[0.08] bg-slate-900/80 px-3.5 py-2 backdrop-blur-md transition-all duration-200 hover:border-cyan-400/40 hover:bg-white/[0.08] hover:shadow-md hover:shadow-cyan-500/10"
                    >
                      <span className={`text-base transition-transform group-hover:scale-110 ${meta.color}`}>
                        {meta.icon}
                      </span>
                      <span className="font-mono text-xs font-medium text-slate-200 group-hover:text-white">
                        {s.name}
                      </span>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
