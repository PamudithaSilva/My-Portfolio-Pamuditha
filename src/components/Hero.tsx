import { motion } from 'framer-motion'
import {
  FiArrowDownRight,
  FiCode,
  FiCpu,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiServer,
  FiTerminal,
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
    transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
  },
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center pt-28 pb-16 lg:pt-36 lg:pb-24">
      {/* Ambient background orbs */}
      <div className="ambient-orb-1 pointer-events-none" aria-hidden="true" />
      <div className="ambient-orb-2 pointer-events-none" aria-hidden="true" />

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* Left Column: Intro & Call to Actions */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start"
          >
            {/* Status Beacon */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2.5 rounded-full border border-cyan-500/30 bg-cyan-950/50 px-3.5 py-1.5 backdrop-blur-md shadow-sm shadow-cyan-500/10 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan-300">
                {profile.status}
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display text-4xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Crafting reliable,{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                intelligent web systems.
              </span>
            </motion.h1>

            {/* Subtitle / Bio */}
            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg"
            >
              Hi, I&apos;m <span className="font-semibold text-white">{profile.name}</span> — a Computer Science
              undergraduate at the University of Westminster &amp; full-stack engineer. I turn complex problems into clean, resilient web applications, AI integrations, and high-performance APIs.
            </motion.p>

            {/* Location & Quick Meta */}
            <motion.div
              variants={itemVariants}
              className="mt-4 flex flex-wrap items-center gap-3.5 text-xs font-mono text-slate-400"
            >
              <span className="inline-flex items-center gap-1.5 text-cyan-400/90 bg-cyan-950/30 border border-cyan-500/20 px-2.5 py-1 rounded-lg">
                <FiMapPin className="text-sm" /> {profile.location}
              </span>
              <span className="inline-flex items-center gap-1.5 text-slate-300 bg-white/[0.04] border border-white/[0.08] px-2.5 py-1 rounded-lg">
                <FiTerminal className="text-sm text-blue-400" /> React • Node.js • Java • AI
              </span>
            </motion.div>

            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="mt-8 flex flex-wrap items-center gap-3.5">
              <a href="#projects" className="btn-primary shine-effect">
                Explore Projects <FiArrowDownRight className="text-base" />
              </a>
              <a
                href="/Pamuditha-Silva-CV.pdf"
                download
                className="btn-outline group"
              >
                Download Résumé{' '}
                <FiDownload className="text-base transition-transform group-hover:translate-y-0.5" />
              </a>
            </motion.div>

            {/* Social Links Bar */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex items-center gap-4 border-t border-white/[0.08] pt-6 text-slate-400 w-full"
            >
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-slate-400">
                Connect
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-lg text-slate-300 transition-all hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-cyan-300 hover:scale-105"
                  aria-label="Visit Pamuditha's GitHub profile"
                >
                  <FiGithub />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-lg text-slate-300 transition-all hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-blue-300 hover:scale-105"
                  aria-label="Visit Pamuditha's LinkedIn profile"
                >
                  <FiLinkedin />
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-lg text-slate-300 transition-all hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-cyan-300 hover:scale-105"
                  aria-label="Email Pamuditha"
                >
                  <FiMail />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: High-End Glassmorphism Profile Frame & Floating Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative mx-auto w-full max-w-md lg:ml-auto"
          >
            {/* Glowing Accent Backdrop */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-blue-600/30 via-cyan-500/30 to-violet-600/30 blur-2xl opacity-75" />

            {/* Profile Card Frame */}
            <div className="relative glass-card overflow-hidden p-3.5 border border-white/15 bg-slate-900/85 backdrop-blur-2xl shadow-2xl">
              {/* Top Accent Gradient Header */}
              <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-cyan-500/20 via-blue-500/10 to-transparent pointer-events-none" />

              {/* Image Frame */}
              <div className="relative aspect-[4/4.8] overflow-hidden rounded-xl bg-slate-950/80 border border-white/10 shadow-inner">
                <img
                  src={profileImg}
                  alt={`Portrait of ${profile.name}`}
                  className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />

                {/* Floating Tech Pill Top Left */}
                <motion.div
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute top-3 left-3 hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-slate-950/80 px-2.5 py-1 backdrop-blur-md shadow-lg"
                >
                  <FiCode className="text-cyan-400 text-xs" />
                  <span className="font-mono text-[0.68rem] font-semibold text-white">Full-Stack</span>
                </motion.div>

                {/* Floating Tech Pill Top Right */}
                <motion.div
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="absolute top-3 right-3 hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-slate-950/80 px-2.5 py-1 backdrop-blur-md shadow-lg"
                >
                  <FiCpu className="text-violet-400 text-xs" />
                  <span className="font-mono text-[0.68rem] font-semibold text-white">AI &amp; APIs</span>
                </motion.div>
                
                {/* Floating Bottom Card Over Image */}
                <div className="absolute inset-x-3.5 bottom-3.5 rounded-xl border border-white/15 bg-slate-950/85 p-3.5 backdrop-blur-xl shadow-2xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-mono text-[0.65rem] font-semibold uppercase tracking-widest text-cyan-400">
                        Focus Area
                      </p>
                      <p className="mt-0.5 text-sm font-bold text-white">Full-Stack &amp; AI Systems</p>
                    </div>
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 text-cyan-300 font-mono text-xs font-bold border border-cyan-500/30">
                      PS
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats Grid Underneath */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              {profile.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card p-3.5 border border-white/[0.08] transition-all hover:border-cyan-500/40 hover:bg-white/[0.04]"
                >
                  <p className="text-base font-bold text-white tracking-tight">{stat.value}</p>
                  <p className="font-mono text-[0.7rem] text-slate-400 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

