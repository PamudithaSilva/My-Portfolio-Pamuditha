import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiCheck,
  FiCopy,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiMessageSquare,
  FiPhone,
  FiSend,
} from 'react-icons/fi'
import { profile } from '../data'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

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
      setTimeout(() => setSubmitted(false), 5000)
    }, 600)
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
          <FiMessageSquare className="text-sm" /> Get In Touch
        </span>
        <h2 className="section-title mb-4">
          Let&apos;s build something{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
            extraordinary.
          </span>
        </h2>
        <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
          I&apos;m currently open to internships, software engineering roles, and innovative collaborations. Feel free to reach out directly or send a message below.
        </p>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Left: Contact Info & Quick Actions */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          {/* Email Quick Action Card */}
          <div className="glass-card card-glow-animated p-6 transition-all hover:border-cyan-500/50 hover:shadow-xl">
            <div className="relative z-10 flex items-start justify-between">
              <div className="flex items-center gap-3.5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xl shadow-sm">
                  <FiMail />
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-slate-400">
                    Email Address
                  </p>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-sm font-semibold text-white hover:text-cyan-300 transition-colors break-all"
                  >
                    {profile.email}
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition-all hover:border-cyan-400/40 hover:bg-cyan-500/15 hover:text-cyan-300 active:scale-95 shadow-sm"
                aria-label="Copy email address"
              >
                {copied ? <FiCheck className="text-emerald-400" /> : <FiCopy />}
              </button>
            </div>
            {copied && (
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative z-10 mt-2 text-xs font-mono text-emerald-400"
              >
                ✓ Copied to clipboard!
              </motion.p>
            )}
          </div>

          {/* Phone Card */}
          <div className="glass-card card-glow-animated p-6 transition-all hover:border-cyan-500/50 hover:shadow-xl">
            <div className="relative z-10 flex items-center gap-3.5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xl shadow-sm">
                <FiPhone />
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-slate-400">
                  Phone Number
                </p>
                <a
                  href={`tel:${profile.phone.replace(/\s/g, '')}`}
                  className="text-sm font-semibold text-white hover:text-cyan-300 transition-colors"
                >
                  {profile.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Location Card */}
          <div className="glass-card card-glow-animated p-6 transition-all hover:border-cyan-500/50 hover:shadow-xl">
            <div className="relative z-10 flex items-center gap-3.5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20 text-xl shadow-sm">
                <FiMapPin />
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-slate-400">
                  Location
                </p>
                <p className="text-sm font-semibold text-white">{profile.location}</p>
              </div>
            </div>
          </div>

          {/* Social Profiles Bento */}
          <div className="grid grid-cols-2 gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="glass-card card-glow-animated flex items-center justify-center gap-2 p-4 text-xs font-semibold text-slate-300 transition-all hover:border-cyan-400/50 hover:bg-white/[0.08] hover:text-white hover:shadow-lg"
            >
              <FiGithub className="text-base text-slate-300 relative z-10" /> <span className="relative z-10">GitHub Profile</span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="glass-card card-glow-animated flex items-center justify-center gap-2 p-4 text-xs font-semibold text-slate-300 transition-all hover:border-blue-400/50 hover:bg-white/[0.08] hover:text-white hover:shadow-lg"
            >
              <FiLinkedin className="text-base text-blue-400 relative z-10" /> <span className="relative z-10">LinkedIn</span>
            </a>
          </div>
        </motion.div>

        {/* Right: Modern Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="glass-card card-glow-animated relative overflow-hidden p-6 sm:p-8 border border-white/15"
        >
          <div className="absolute top-0 right-0 h-44 w-44 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none" />

          <h3 className="relative z-10 text-lg font-bold text-white tracking-tight mb-2">
            Send a direct message
          </h3>
          <p className="relative z-10 text-xs text-slate-400 mb-6 font-mono">
            Fill out the details below and I will respond promptly.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block font-mono text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5"
              >
                Your Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your Name"
                className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder-slate-500 backdrop-blur-md transition-colors focus:border-cyan-400 focus:bg-slate-900 focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block font-mono text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5"
              >
                Your Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="EMAIL_ADDRESS"
                className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder-slate-500 backdrop-blur-md transition-colors focus:border-cyan-400 focus:bg-slate-900 focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block font-mono text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Hi Pamuditha, I would like to connect regarding..."
                className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder-slate-500 backdrop-blur-md transition-colors focus:border-cyan-400 focus:bg-slate-900 focus:outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full shine-effect"
            >
              {isSubmitting ? (
                <span>Sending...</span>
              ) : (
                <>
                  <span>Send Message</span>
                  <FiSend className="text-base" />
                </>
              )}
            </button>

            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="rounded-xl border border-emerald-500/30 bg-emerald-950/40 p-3 text-center text-xs font-medium text-emerald-300 shadow-lg"
                >
                  🎉 Thank you! Your message has been received. I will be in touch soon!
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
