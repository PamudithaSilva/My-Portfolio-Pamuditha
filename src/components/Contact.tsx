import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiCheck,
  FiCopy,
  FiExternalLink,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
  FiClock,
  FiArrowUpRight,
  FiZap,
} from 'react-icons/fi'
import { profile } from '../data'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [localTime, setLocalTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      try {
        const timeString = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Colombo',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        }).format(new Date())
        setLocalTime(timeString)
      } catch {
        setLocalTime(new Date().toLocaleTimeString())
      }
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <section id="contact" className="section-container content-rule">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mb-12"
      >
        <span className="eyebrow">
          <FiZap className="text-sm text-cyan-400" /> Let&apos;s Connect
        </span>
        <h2 className="section-title mb-3">
          Let&apos;s build something{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
            extraordinary.
          </span>
        </h2>
        <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
          I&apos;m currently open to software engineering internships, graduate opportunities, and technical projects.
          Feel free to reach out directly through any of the channels below.
        </p>
      </motion.div>

      {/* Bento Grid: Presence, Direct Channels & Status */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
      >
        {/* Availability & Timezone Banner (Spans 2 columns on lg) */}
        <div className="glass-card card-glow-animated p-6 overflow-hidden md:col-span-2 lg:col-span-2 flex flex-col justify-between">
          <div className="relative z-10 flex flex-col items-start gap-3 mb-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/50"></span>
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 font-mono">
                {profile.status}
              </span>
            </div>

            {localTime && (
              <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 font-mono text-xs text-slate-300">
                <FiClock className="text-cyan-400 text-sm" />
                <span>Colombo (UTC+5:30): <strong className="text-white font-medium">{localTime}</strong></span>
              </div>
            )}
          </div>
          <p className="relative z-10 text-xs text-slate-300 sm:text-sm leading-relaxed border-t border-white/[0.08] pt-3.5">
            Response time: <span className="text-slate-200 font-semibold">Within 24 hours</span>. Open for conversations around full-stack development, distributed architectures, and AI integrations.
          </p>
        </div>

        {/* Location Card */}
        <div className="glass-card card-glow-animated p-6 flex flex-col justify-between hover:border-cyan-500/40 hover:shadow-lg transition-all">
          <div className="relative z-10 flex items-center gap-3.5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20 text-xl shadow-sm">
              <FiMapPin />
            </div>
            <div className="min-w-0">
              <p className="font-mono text-[11px] uppercase tracking-wider text-slate-400">
                Location
              </p>
              <p className="text-sm font-bold text-white mt-0.5 truncate">{profile.location}</p>
            </div>
          </div>
          <p className="relative z-10 text-xs font-mono text-slate-400 border-t border-white/[0.08] pt-3 mt-4">
            Western Province, Sri Lanka
          </p>
        </div>

        {/* Email Card with 1-Click Copy */}
        <div className="glass-card card-glow-animated p-6 transition-all hover:border-cyan-500/50 hover:shadow-xl group md:col-span-2 lg:col-span-2">
          <div className="relative z-10 flex items-center justify-between gap-3">
            <div className="flex items-center gap-4 min-w-0">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xl shadow-sm group-hover:scale-105 transition-transform">
                <FiMail />
              </div>
              <div className="min-w-0">
                <p className="font-mono text-[11px] uppercase tracking-wider text-slate-400">
                  Email Address
                </p>
                <a
                  href={`mailto:${profile.email}`}
                  className="block break-all text-sm font-semibold text-white transition-colors hover:text-cyan-300 sm:text-base sm:break-normal sm:truncate"
                >
                  {profile.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition-all hover:border-cyan-400/40 hover:bg-cyan-500/15 hover:text-cyan-300 shadow-sm"
                aria-label="Copy email address"
                title="Copy email to clipboard"
              >
                {copied ? <FiCheck className="text-emerald-400 text-sm" /> : <FiCopy className="text-xs" />}
              </button>
              <a
                href={`mailto:${profile.email}`}
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition-all hover:border-cyan-400/40 hover:bg-cyan-500/15 hover:text-cyan-300 shadow-sm"
                aria-label="Open default mail client"
                title="Send email"
              >
                <FiExternalLink className="text-xs" />
              </a>
            </div>
          </div>

          <AnimatePresence>
            {copied && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="relative z-10 mt-3"
              >
                <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-500/15 px-2.5 py-1 text-xs font-mono text-emerald-400 border border-emerald-500/25">
                  <FiCheck className="text-xs" /> Email address copied to clipboard!
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Phone Card */}
        <div className="glass-card card-glow-animated p-6 transition-all hover:border-blue-500/40 hover:shadow-lg">
          <div className="relative z-10 flex items-center gap-3.5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xl shadow-sm">
              <FiPhone />
            </div>
            <div className="min-w-0">
              <p className="font-mono text-[11px] uppercase tracking-wider text-slate-400">
                Phone / WhatsApp
              </p>
              <a
                href={`tel:${profile.phone.replace(/\s/g, '')}`}
                className="block text-sm font-semibold text-white hover:text-cyan-300 transition-colors truncate mt-0.5"
              >
                {profile.phone}
              </a>
            </div>
          </div>
          <p className="relative z-10 text-xs font-mono text-slate-400 border-t border-white/[0.08] pt-3 mt-4">
            Voice &amp; Messaging Available
          </p>
        </div>

        {/* Social Profiles Grid: GitHub & LinkedIn (Full width below) */}
        <div className="md:col-span-2 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="glass-card card-glow-animated flex items-center justify-between p-5 text-sm font-semibold text-slate-200 transition-all hover:border-cyan-400/50 hover:bg-white/[0.06] hover:text-white hover:shadow-lg group"
          >
            <div className="relative z-10 flex min-w-0 items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.05] border border-white/10 text-xl text-slate-300 group-hover:text-cyan-400 transition-colors">
                <FiGithub />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">GitHub Profile</p>
                <p className="truncate text-xs font-mono text-slate-400">Explore open source &amp; repositories</p>
              </div>
            </div>
            <FiArrowUpRight className="relative z-10 text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-base transition-all" />
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="glass-card card-glow-animated flex items-center justify-between p-5 text-sm font-semibold text-slate-200 transition-all hover:border-blue-400/50 hover:bg-white/[0.06] hover:text-white hover:shadow-lg group"
          >
            <div className="relative z-10 flex min-w-0 items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20 text-xl text-blue-400 group-hover:scale-110 transition-transform">
                <FiLinkedin />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">LinkedIn Network</p>
                <p className="truncate text-xs font-mono text-slate-400">Professional background &amp; connections</p>
              </div>
            </div>
            <FiArrowUpRight className="relative z-10 text-slate-400 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-base transition-all" />
          </a>
        </div>
      </motion.div>
    </section>
  )
}


