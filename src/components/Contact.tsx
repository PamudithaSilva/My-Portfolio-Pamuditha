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
  FiMessageSquare,
  FiPhone,
  FiSend,
  FiUser,
  FiClock,
  FiArrowUpRight,
  FiZap,
} from 'react-icons/fi'
import { profile } from '../data'

const INQUIRY_TYPES = [
  { id: 'internship', label: 'Internship / Job', desc: 'Hiring for full-time or internship' },
  { id: 'project', label: 'Project Collaboration', desc: 'Build a product or software together' },
  { id: 'freelance', label: 'Freelance Work', desc: 'Custom web app / API development' },
  { id: 'chat', label: 'General Chat', desc: 'Tech discussion or networking' },
]

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [selectedType, setSelectedType] = useState('internship')
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
    }, 800)
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
        <h2 className="section-title mb-4">
          Let&apos;s build something{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
            extraordinary.
          </span>
        </h2>
        <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
          I&apos;m currently open to software engineering internships, graduate roles, and innovative collaborations.
          Reach out through direct channels or drop a message below.
        </p>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        {/* Left Column: Presence, Status & Direct Details */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          {/* Realtime Availability & Timezone Banner */}
          <div className="glass-card card-glow-animated p-5 overflow-hidden">
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-3">
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
                <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[11px] text-slate-300">
                  <FiClock className="text-cyan-400" />
                  <span>Colombo (UTC+5:30): <strong className="text-white font-medium">{localTime}</strong></span>
                </div>
              )}
            </div>
            <p className="relative z-10 mt-3 text-xs text-slate-400">
              Typical response time: <span className="text-slate-200 font-medium">Within 24 hours</span>. Fast-track queries via email or LinkedIn.
            </p>
          </div>

          {/* Email Card with Copy & Launch */}
          <div className="glass-card card-glow-animated p-6 transition-all hover:border-cyan-500/50 hover:shadow-xl group">
            <div className="relative z-10 flex items-start justify-between gap-3">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xl shadow-sm group-hover:scale-105 transition-transform">
                  <FiMail />
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-xs uppercase tracking-wider text-slate-400">
                    Email Address
                  </p>
                  <a
                    href={`mailto:${profile.email}`}
                    className="block text-sm font-semibold text-white hover:text-cyan-300 transition-colors truncate"
                    title={profile.email}
                  >
                    {profile.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition-all hover:border-cyan-400/40 hover:bg-cyan-500/15 hover:text-cyan-300 active:scale-95 shadow-sm"
                  aria-label="Copy email address"
                  title="Copy email to clipboard"
                >
                  {copied ? <FiCheck className="text-emerald-400" /> : <FiCopy />}
                </button>
                <a
                  href={`mailto:${profile.email}`}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition-all hover:border-cyan-400/40 hover:bg-cyan-500/15 hover:text-cyan-300 active:scale-95 shadow-sm"
                  aria-label="Open default mail client"
                  title="Open mail client"
                >
                  <FiExternalLink />
                </a>
              </div>
            </div>

            <AnimatePresence>
              {copied && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="relative z-10 mt-2.5 overflow-hidden"
                >
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-500/15 px-2.5 py-1 text-xs font-mono text-emerald-400 border border-emerald-500/25">
                    <FiCheck className="text-xs" /> Copied email to clipboard!
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Phone & Location Bento Split */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Phone Card */}
            <div className="glass-card card-glow-animated p-5 transition-all hover:border-cyan-500/50 hover:shadow-xl group">
              <div className="relative z-10 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 text-lg shadow-sm group-hover:scale-105 transition-transform">
                  <FiPhone />
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-slate-400">
                    Phone / WhatsApp
                  </p>
                  <a
                    href={`tel:${profile.phone.replace(/\s/g, '')}`}
                    className="block text-xs font-semibold text-white hover:text-cyan-300 transition-colors truncate"
                  >
                    {profile.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="glass-card card-glow-animated p-5 transition-all hover:border-cyan-500/50 hover:shadow-xl group">
              <div className="relative z-10 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20 text-lg shadow-sm group-hover:scale-105 transition-transform">
                  <FiMapPin />
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-slate-400">
                    Location
                  </p>
                  <p className="text-xs font-semibold text-white truncate">{profile.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Profiles Bento */}
          <div className="grid grid-cols-2 gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="glass-card card-glow-animated flex items-center justify-between p-4 text-xs font-semibold text-slate-300 transition-all hover:border-cyan-400/50 hover:bg-white/[0.08] hover:text-white hover:shadow-lg group"
            >
              <div className="relative z-10 flex items-center gap-2.5">
                <FiGithub className="text-lg text-slate-300 group-hover:text-cyan-400 transition-colors" />
                <span>GitHub</span>
              </div>
              <FiArrowUpRight className="relative z-10 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="glass-card card-glow-animated flex items-center justify-between p-4 text-xs font-semibold text-slate-300 transition-all hover:border-blue-400/50 hover:bg-white/[0.08] hover:text-white hover:shadow-lg group"
            >
              <div className="relative z-10 flex items-center gap-2.5">
                <FiLinkedin className="text-lg text-blue-400 group-hover:scale-110 transition-transform" />
                <span>LinkedIn</span>
              </div>
              <FiArrowUpRight className="relative z-10 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Modernized Interactive Message Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="glass-card card-glow-animated relative overflow-hidden p-6 sm:p-8 border border-white/15"
        >
          {/* Ambient Glows */}
          <div className="absolute top-0 right-0 h-48 w-48 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 mb-5">
            <h3 className="text-lg font-bold text-white tracking-tight">
              Send a Direct Message
            </h3>
            <p className="text-xs text-slate-400 font-mono mt-0.5">
              Choose an inquiry topic & enter your details below.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="submitted-card"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative z-10 flex flex-col items-center justify-center py-10 text-center space-y-4"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-3xl shadow-lg shadow-emerald-500/20">
                  <FiCheck />
                </div>
                <div className="space-y-1.5 max-w-sm">
                  <h4 className="text-base font-bold text-white">Message Sent Successfully!</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Thank you for reaching out! I have received your note and will get back to you promptly.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="btn-outline text-xs px-4 py-2 mt-2"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form key="contact-form" onSubmit={handleSubmit} className="relative z-10 space-y-4">
                {/* Inquiry Type Chips */}
                <div>
                  <label className="block font-mono text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Inquiry Reason
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {INQUIRY_TYPES.map((type) => {
                      const isSelected = selectedType === type.id
                      return (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() => setSelectedType(type.id)}
                          className={`rounded-xl border px-3 py-2.5 text-left transition-all ${
                            isSelected
                              ? 'border-cyan-400/80 bg-cyan-500/15 text-cyan-200 shadow-md shadow-cyan-500/10'
                              : 'border-white/10 bg-slate-950/40 text-slate-300 hover:border-white/20 hover:bg-white/[0.04]'
                          }`}
                        >
                          <p className="text-xs font-semibold">{type.label}</p>
                          <p className="text-[10px] text-slate-400 mt-0.5 truncate">{type.desc}</p>
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Name Input */}
                <div>
                  <label
                    htmlFor="name"
                    className="block font-mono text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5"
                  >
                    Your Name
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                      <FiUser className="text-sm" />
                    </div>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Johnson"
                      className="w-full rounded-xl border border-white/10 bg-slate-950/60 pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 backdrop-blur-md transition-all focus:border-cyan-400 focus:bg-slate-900 focus:ring-1 focus:ring-cyan-400 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div>
                  <label
                    htmlFor="email"
                    className="block font-mono text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5"
                  >
                    Your Email
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                      <FiMail className="text-sm" />
                    </div>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@example.com"
                      className="w-full rounded-xl border border-white/10 bg-slate-950/60 pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 backdrop-blur-md transition-all focus:border-cyan-400 focus:bg-slate-900 focus:ring-1 focus:ring-cyan-400 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Message Textarea */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label
                      htmlFor="message"
                      className="block font-mono text-xs font-semibold uppercase tracking-wider text-slate-400"
                    >
                      Message
                    </label>
                    <span className="font-mono text-[10px] text-slate-500">
                      {formData.message.length} chars
                    </span>
                  </div>
                  <div className="relative">
                    <div className="pointer-events-none absolute top-3 left-3.5 text-slate-400">
                      <FiMessageSquare className="text-sm" />
                    </div>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Pamuditha, I'd like to discuss a project / opportunity..."
                      className="w-full rounded-xl border border-white/10 bg-slate-950/60 pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 backdrop-blur-md transition-all focus:border-cyan-400 focus:bg-slate-900 focus:ring-1 focus:ring-cyan-400 focus:outline-none resize-none"
                    />
                  </div>
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full shine-effect"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      <span>Sending message...</span>
                    </span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <FiSend className="text-base" />
                    </>
                  )}
                </button>
              </form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

