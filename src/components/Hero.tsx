import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import {
  FiArrowDownRight,
  FiAward,
  FiCode,
  FiCpu,
  FiDownload,
  FiGithub,
  FiLayers,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiTerminal,
  FiZap,
} from 'react-icons/fi'
import { profile } from '../data'
import profileImg from '../assets/profile.jpg'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

const roles = [
  'Full-Stack Developer',
  'Software Engineer',
  'AI & Cloud Builder',
  'CS Undergrad @ Westminster',
]

const highlights = [
  { name: 'React 19 & TS', icon: FiCode },
  { name: 'Node.js & Java', icon: FiTerminal },
  { name: 'Gemini AI & Cloud', icon: FiCpu },
  { name: 'Scalable Systems', icon: FiLayers },
]

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
    }, 3200)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Ambient glowing background orbs */}
      <div className="ambient-orb-1 pointer-events-none" aria-hidden="true" />
      <div className="ambient-orb-2 pointer-events-none" aria-hidden="true" />

      {/* Subtle Top Grid Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none" />

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          
          {/* Left Column: Headline, Bio & Primary Controls */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start"
          >
            {/* Live Availability Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3.5 py-1.5 backdrop-blur-xl shadow-lg shadow-cyan-500/10 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-sm shadow-emerald-400" />
              </span>
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan-300">
                {profile.status}
              </span>
              <FiZap className="text-cyan-400 text-xs opacity-80" />
            </motion.div>

            {/* Dynamic Headline */}
            <motion.div variants={itemVariants} className="w-full">
              <h1 className="font-display text-4xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Building resilient,{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent drop-shadow-sm">
                  Intelligent Web Systems
                </span>
                <br />
                <span className="inline-flex flex-wrap items-center gap-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-300 mt-2 font-display">
                  <span>as</span>
                  <span className="relative inline-block text-cyan-400 min-w-[260px] sm:min-w-[320px]">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={roles[currentRoleIndex]}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="inline-block"
                      >
                        {roles[currentRoleIndex]}
                      </motion.span>
                    </AnimatePresence>
                  </span>
                </span>
              </h1>
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg"
            >
              Hi, I&apos;m <span className="font-semibold text-white">{profile.name}</span> — crafting high-performance full-stack applications, scalable REST APIs, and generative AI features powered by modern web technologies.
            </motion.p>

            {/* Tech Highlights */}
            <motion.div
              variants={itemVariants}
              className="mt-5 flex flex-wrap items-center gap-2"
            >
              {highlights.map((item) => {
                const Icon = item.icon
                return (
                  <span
                    key={item.name}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-mono text-slate-300 backdrop-blur-md transition-colors hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-cyan-200"
                  >
                    <Icon className="text-cyan-400 text-xs" />
                    {item.name}
                  </span>
                )
              })}
            </motion.div>

            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="mt-8 flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              <a href="#projects" className="btn-primary shine-effect flex-1 sm:flex-initial text-center justify-center">
                Explore Projects <FiArrowDownRight className="text-base" />
              </a>
              <a
                href="/Pamuditha-Silva-CV.pdf"
                download
                className="btn-outline group flex-1 sm:flex-initial text-center justify-center"
              >
                Download Résumé{' '}
                <FiDownload className="text-base transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
            </motion.div>

            {/* Social Links & Location Bar */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.08] pt-6 text-slate-400 w-full"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-slate-400">
                  Connect
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-lg text-slate-300 transition-all hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-cyan-300 hover:scale-105 shadow-sm"
                    aria-label="Visit Pamuditha's GitHub profile"
                  >
                    <FiGithub />
                  </a>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-lg text-slate-300 transition-all hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-blue-300 hover:scale-105 shadow-sm"
                    aria-label="Visit Pamuditha's LinkedIn profile"
                  >
                    <FiLinkedin />
                  </a>
                  <a
                    href={`mailto:${profile.email}`}
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-lg text-slate-300 transition-all hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-cyan-300 hover:scale-105 shadow-sm"
                    aria-label="Email Pamuditha"
                  >
                    <FiMail />
                  </a>
                </div>
              </div>

              {/* Location Pill */}
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 bg-white/[0.03] border border-white/[0.08] px-3 py-1.5 rounded-xl">
                <FiMapPin className="text-cyan-400 text-sm" />
                <span>{profile.location}</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Clean Glassmorphism Profile Frame & Metric Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-md lg:ml-auto"
          >
            {/* Ambient Backdrop Glow */}
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-blue-600/25 via-cyan-500/25 to-violet-600/25 blur-2xl opacity-75 pointer-events-none" />

            {/* Profile Card Container Frame */}
            <div className="relative glass-card overflow-hidden p-3 border border-white/15 bg-slate-900/85 backdrop-blur-2xl shadow-2xl card-glow-animated">
              {/* Image Frame */}
              <div className="relative aspect-[4/4.5] overflow-hidden rounded-xl bg-slate-950/90 border border-white/10 shadow-inner group">
                <img
                  src={profileImg}
                  alt={`Portrait of ${profile.name}`}
                  className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                />

                {/* Bottom Minimalist Tag */}
                <div className="absolute inset-x-3 bottom-3 rounded-xl border border-white/15 bg-slate-950/85 px-3.5 py-2.5 backdrop-blur-xl flex items-center justify-between">
                  <div>
                    <p className="font-mono text-[0.65rem] font-semibold uppercase tracking-wider text-cyan-300">
                      Full-Stack &amp; AI
                    </p>
                    <p className="text-xs font-bold text-white tracking-tight">{profile.name}</p>
                  </div>
                  <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                </div>
              </div>
            </div>

            {/* Stats Grid Underneath Image */}
            <div className="mt-3.5 grid grid-cols-2 gap-2.5">
              {profile.stats.map((stat, idx) => (
                <div
                  key={stat.label}
                  className="glass-card p-3 border border-white/10 transition-all duration-200 hover:border-cyan-400/40 hover:bg-white/[0.06]"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-base font-extrabold text-white tracking-tight">{stat.value}</p>
                    {idx === 0 && <FiAward className="text-cyan-400 text-sm opacity-80" />}
                    {idx === 1 && <FiCode className="text-blue-400 text-sm opacity-80" />}
                    {idx === 2 && <FiCpu className="text-violet-400 text-sm opacity-80" />}
                    {idx === 3 && <FiZap className="text-emerald-400 text-sm opacity-80" />}
                  </div>
                  <p className="font-mono text-[0.68rem] text-slate-400 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}



