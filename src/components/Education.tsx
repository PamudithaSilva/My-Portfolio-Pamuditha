import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { education, extraQualifications, certifications, hackathons } from '../data'
import {
  FiAward,
  FiBookOpen,
  FiCalendar,
  FiCheckCircle,
  FiCompass,
  FiGlobe,
  FiTarget,
  FiUsers,
} from 'react-icons/fi'

type TabType = 'education' | 'certifications' | 'hackathons' | 'memberships'

const tabs: { id: TabType; label: string; icon: React.ReactNode }[] = [
  { id: 'education', label: 'Education', icon: <FiBookOpen /> },
  { id: 'certifications', label: 'Certifications', icon: <FiAward /> },
  { id: 'hackathons', label: 'Hackathons', icon: <FiTarget /> },
  { id: 'memberships', label: 'Affiliations', icon: <FiUsers /> },
]

export default function Education() {
  const [activeTab, setActiveTab] = useState<TabType>('education')

  return (
    <section id="education" className="section-container content-rule">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mb-12"
      >
        <span className="eyebrow">
          <FiCompass className="text-sm" /> Journey &amp; Milestones
        </span>
        <h2 className="section-title">
          Education &amp; <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">achievements.</span>
        </h2>
      </motion.div>

      {/* Tabs Navigation */}
      <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-white/[0.08] pb-4">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`relative inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold tracking-wider uppercase transition-all duration-200 ${
                isActive
                  ? 'text-cyan-300 bg-cyan-950/40 border border-cyan-500/40 shadow-md shadow-cyan-500/10'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
              }`}
            >
              <span className="text-base">{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          )
        })}
      </div>

      {/* Tab Panels */}
      <div className="min-h-[320px]">
        <AnimatePresence mode="wait">
          {/* Tab 1: Education */}
          {activeTab === 'education' && (
            <motion.div
              key="education"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {education.map((item) => (
                <div
                  key={item.school}
                  className="glass-card relative overflow-hidden p-6 sm:p-8 transition-all hover:border-cyan-500/40 hover:shadow-xl"
                >
                  <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5 mb-2">
                        <span className="font-mono text-xs font-semibold uppercase text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-2.5 py-0.5 rounded">
                          {item.period}
                        </span>
                        <span className="font-mono text-xs text-slate-400 bg-white/[0.04] border border-white/[0.08] px-2.5 py-0.5 rounded">
                          {item.status}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {item.degree}
                      </h3>
                      <p className="text-sm font-medium text-slate-300 mt-1">
                        {item.school}{' '}
                        {item.partner && (
                          <span className="text-cyan-400 font-semibold">({item.partner})</span>
                        )}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-xs leading-relaxed text-slate-400 sm:text-sm border-t border-white/[0.06] pt-4">
                    {item.details}
                  </p>
                </div>
              ))}
            </motion.div>
          )}

          {/* Tab 2: Certifications */}
          {activeTab === 'certifications' && (
            <motion.div
              key="certifications"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid gap-4 sm:grid-cols-2"
            >
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="glass-card flex items-start gap-4 p-5 transition-all hover:border-cyan-500/40 hover:shadow-lg"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xl shadow-sm">
                    <FiAward />
                  </div>
                  <div>
                    <span className="font-mono text-[0.68rem] uppercase tracking-wider text-cyan-400 bg-cyan-950/40 border border-cyan-500/20 px-2 py-0.5 rounded">
                      {cert.type} • {cert.issuer}
                    </span>
                    <h3 className="text-sm font-semibold text-white mt-2 leading-snug">
                      {cert.name}
                    </h3>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* Tab 3: Hackathons */}
          {activeTab === 'hackathons' && (
            <motion.div
              key="hackathons"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid gap-4 sm:grid-cols-2"
            >
              {hackathons.map((hack) => (
                <div
                  key={hack.name}
                  className="glass-card flex flex-col justify-between p-5 transition-all hover:border-cyan-500/40 hover:shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-[0.68rem] text-cyan-400 bg-cyan-950/50 border border-cyan-500/30 px-2 py-0.5 rounded">
                        {hack.year}
                      </span>
                      <span className="font-mono text-[0.68rem] text-slate-400">
                        {hack.type}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-white leading-snug">
                      {hack.name}
                    </h3>
                  </div>
                  <div className="mt-4 flex items-center gap-2 border-t border-white/[0.06] pt-3 text-xs text-slate-400 font-mono">
                    <FiGlobe className="text-cyan-400" />
                    <span>{hack.org}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* Tab 4: Memberships */}
          {activeTab === 'memberships' && (
            <motion.div
              key="memberships"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <div className="glass-card p-6 sm:p-8">
                <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-400 font-mono mb-4">
                  Professional Memberships &amp; Extra Diplomas
                </h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[...extraQualifications.educations, ...extraQualifications.memberships].map(
                    (item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-slate-900/60 p-3.5 text-xs text-slate-300 transition-all hover:border-cyan-500/30 hover:bg-white/[0.04]"
                      >
                        <FiCheckCircle className="text-cyan-400 shrink-0 text-sm mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
