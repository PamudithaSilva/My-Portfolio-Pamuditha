import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import {
  FiArrowDownRight,
  FiAward,
  FiCheck,
  FiCode,
  FiCopy,
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
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const roles = [
  'Full-Stack Developer',
  'Software Engineer',
  'AI & Cloud Builder',
  'CS Undergrad @ Westminster',
]

const techHighlights = [
  { name: 'React 19 & TS', icon: FiCode },
  { name: 'Node.js & Java', icon: FiTerminal },
  { name: 'Gemini AI & Stripe', icon: FiCpu },
  { name: 'Full-Stack Systems', icon: FiLayers },
]

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
    }, 3200)
    return () => clearInterval(timer)
  }, [])

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <section id="hero" className="relative min-h-[95vh] flex items-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Ambient glowing background orbs */}
      <div className="ambient-orb-1 pointer-events-none" aria-hidden="true" />
      <div className="ambient-orb-2 pointer-events-none" aria-hidden="true" />

      {/* Subtle Top Grid Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.035] pointer-events-none" />

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.18fr_0.82fr] lg:gap-16">
          
          {/* Left Column: Headline, Bio & Interactive Controls */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start"
          >
            {/* Live Availability Beacon */}
            <motion.div
              variants={itemVariants}
              className="group inline-flex items-center gap-2.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3.5 py-1.5 backdrop-blur-xl shadow-lg shadow-cyan-500/10 hover:border-cyan-400/50 hover:bg-cyan-950/60 transition-all mb-6 cursor-default"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-sm shadow-emerald-400" />
              </span>
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan-300">
                {profile.status}
              </span>
              <FiZap className="text-cyan-400 text-xs opacity-70 group-hover:rotate-12 transition-transform" />
            </motion.div>

            {/* Dynamic Headline */}
            <motion.div variants={itemVariants} className="w-full">
              <h1 className="font-display text-4xl font-black leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Building resilient,{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent drop-shadow-sm">
                  Intelligent Systems
                </span>
                <br />
                <span className="inline-flex items-center gap-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-300 mt-2 font-display">
                  as a{' '}
                  <span className="relative inline-block text-cyan-400 min-w-[280px] sm:min-w-[340px]">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={roles[currentRoleIndex]}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.35, ease: 'easeOut' }}
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
              Hi, I&apos;m <span className="font-semibold text-white tracking-tight">{profile.name}</span> — a third-year Computer Science student at the University of Westminster &amp; full-stack software engineer. I engineer scalable web applications, robust REST APIs, and generative AI integrations with Stripe &amp; Gemini.
            </motion.p>

            {/* Quick Tech Highlights Chips */}
            <motion.div
              variants={itemVariants}
              className="mt-5 flex flex-wrap items-center gap-2"
            >
              {techHighlights.map((item) => {
                const Icon = item.icon
                return (
                  <span
                    key={item.name}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-mono text-slate-300 backdrop-blur-md transition-all hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-cyan-200"
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
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-3 text-xs font-mono text-slate-300 backdrop-blur-sm transition-all hover:bg-white/[0.08] hover:text-cyan-300 hover:border-cyan-400/30"
                title="Click to copy email address"
              >
                {copied ? (
                  <>
                    <FiCheck className="text-emerald-400 text-sm" />
                    <span className="text-emerald-300 font-semibold">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <FiCopy className="text-sm opacity-70" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
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

          {/* Right Column: High-End Glassmorphism Profile Frame & Floating Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-md lg:ml-auto"
          >
            {/* Glowing Accent Ambient Backdrop */}
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-blue-600/30 via-cyan-500/30 to-violet-600/30 blur-2xl opacity-75 animate-pulse-glow" />

            {/* Profile Card Container Frame */}
            <div className="relative glass-card overflow-hidden p-3.5 border border-white/20 bg-slate-900/85 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] card-glow-animated">
              {/* Top Accent Gradient Header */}
              <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-cyan-500/20 via-blue-500/10 to-transparent pointer-events-none" />

              {/* Image Frame */}
              <div className="relative aspect-[4/4.8] overflow-hidden rounded-xl bg-slate-950/80 border border-white/10 shadow-inner group">
                <img
                  src={profileImg}
                  alt={`Portrait of ${profile.name}`}
                  className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Floating Tech Pill Top Left */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-3 left-3 hidden sm:inline-flex items-center gap-1.5 rounded-xl border border-white/20 bg-slate-950/85 px-3 py-1.5 backdrop-blur-xl shadow-xl"
                >
                  <div className="flex h-5 w-5 items-center justify-center rounded-md bg-cyan-500/20 text-cyan-400">
                    <FiCode className="text-xs" />
                  </div>
                  <span className="font-mono text-[0.7rem] font-semibold text-white">Full-Stack Dev</span>
                </motion.div>

                {/* Floating Tech Pill Top Right */}
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
                  className="absolute top-3 right-3 hidden sm:inline-flex items-center gap-1.5 rounded-xl border border-white/20 bg-slate-950/85 px-3 py-1.5 backdrop-blur-xl shadow-xl"
                >
                  <div className="flex h-5 w-5 items-center justify-center rounded-md bg-violet-500/20 text-violet-400">
                    <FiCpu className="text-xs" />
                  </div>
                  <span className="font-mono text-[0.7rem] font-semibold text-white">AI &amp; Cloud</span>
                </motion.div>
                
                {/* Bottom Floating Glass Banner Over Image */}
                <div className="absolute inset-x-3 bottom-3 rounded-xl border border-white/20 bg-slate-950/90 p-3.5 backdrop-blur-2xl shadow-2xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                        <p className="font-mono text-[0.65rem] font-semibold uppercase tracking-widest text-cyan-300">
                          Focus &amp; Specialization
                        </p>
                      </div>
                      <p className="mt-0.5 text-sm font-bold text-white tracking-tight">Full-Stack &amp; AI Systems</p>
                    </div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-violet-500/20 text-cyan-300 font-mono text-xs font-black border border-cyan-400/30 shadow-inner">
                      PS
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats Grid Underneath Image */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              {profile.stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -3, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="glass-card p-3.5 border border-white/10 transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/[0.06] hover:shadow-lg hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-base sm:text-lg font-extrabold text-white tracking-tight">{stat.value}</p>
                    {idx === 0 && <FiAward className="text-cyan-400 text-sm opacity-80" />}
                    {idx === 1 && <FiCode className="text-blue-400 text-sm opacity-80" />}
                    {idx === 2 && <FiCpu className="text-violet-400 text-sm opacity-80" />}
                    {idx === 3 && <FiZap className="text-emerald-400 text-sm opacity-80" />}
                  </div>
                  <p className="font-mono text-[0.7rem] text-slate-400 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}


