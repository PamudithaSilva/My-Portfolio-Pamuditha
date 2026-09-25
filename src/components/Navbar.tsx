import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'
import { HiMenu, HiMoon, HiSun, HiX } from 'react-icons/hi'
import { FiArrowUpRight, FiCode, FiCompass, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { profile } from '../data'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#hero')
  const [theme, setTheme] = useState<'dark' | 'light'>(() =>
    typeof window !== 'undefined' && localStorage.getItem('theme') === 'light' ? 'light' : 'dark'
  )

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  })

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 25)
      const sections = ['hero', 'about', 'skills', 'projects', 'education', 'contact']
      const scrollPos = window.scrollY + 220

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.offsetTop <= scrollPos) {
          setActive(`#${sections[i]}`)
          break
        }
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'light') {
      root.classList.add('light')
      root.classList.remove('dark')
    } else {
      root.classList.add('dark')
      root.classList.remove('light')
    }
    root.style.colorScheme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const close = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [])

  return (
    <>
      {/* Top Laser Progress Bar with Dual Tone Glow */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 shadow-[0_0_16px_rgba(6,182,212,0.85)]"
        style={{ scaleX }}
      />

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out ${
          scrolled ? 'py-2.5 sm:py-3' : 'py-4 sm:py-6'
        }`}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <nav
            className={`relative flex items-center justify-between rounded-2xl px-4 py-2 sm:px-5 sm:py-2.5 transition-all duration-500 ${
              scrolled
                ? 'border border-white/15 bg-[#080c14]/85 backdrop-blur-2xl shadow-[0_12px_40px_rgba(0,0,0,0.45)] ring-1 ring-white/5'
                : 'border border-white/10 bg-[#080c14]/40 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.2)]'
            }`}
          >
            {/* Logo */}
            <a
              href="#hero"
              className="group flex items-center gap-3 font-display tracking-tight text-white transition-all duration-300 hover:opacity-95"
              aria-label="Pamuditha Silva Portfolio Home"
            >
              <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 via-blue-600 to-violet-600 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 group-hover:scale-105 transition-all">
                <div className="flex h-full w-full items-center justify-center rounded-[11px] bg-[#080c14] text-cyan-400 group-hover:bg-transparent group-hover:text-white transition-colors">
                  <FiCode className="text-base stroke-[2.5]" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-sm sm:text-base font-display font-extrabold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                  PAMUDITHA<span className="text-cyan-400 animate-pulse">.</span>
                </span>
                <span className="hidden sm:block text-[0.65rem] font-mono font-medium text-slate-400 tracking-wider uppercase -mt-0.5">
                  Software Engineer
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <ul className="hidden items-center gap-1 rounded-full border border-white/[0.08] bg-white/[0.03] p-1 text-sm font-medium text-slate-300 backdrop-blur-md md:flex">
              {links.map((link) => {
                const isActive = active === link.href
                return (
                  <li key={link.href} className="relative">
                    <a
                      href={link.href}
                      aria-current={isActive ? 'page' : undefined}
                      className={`relative z-10 block rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide transition-all duration-300 ${
                        isActive
                          ? 'text-cyan-300 shadow-sm'
                          : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                      }`}
                    >
                      {link.label}
                    </a>
                    {isActive && (
                      <motion.div
                        layoutId="active-nav-indicator"
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-violet-500/20 border border-cyan-400/40 shadow-[0_0_15px_rgba(6,182,212,0.25)]"
                        transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                      />
                    )}
                  </li>
                )
              })}
            </ul>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Quick Status Pill for Desktop */}
              <div className="hidden lg:inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3 py-1 text-[0.7rem] font-mono font-medium text-emerald-300 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Open for work</span>
              </div>

              {/* Theme Toggle Button */}
              <button
                type="button"
                className="theme-toggle"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                <motion.div
                  key={theme}
                  initial={{ rotate: -180, scale: 0.5, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: 180, scale: 0.5, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  {theme === 'dark' ? (
                    <HiSun className="text-amber-400 text-lg hover:text-amber-300 transition-colors" />
                  ) : (
                    <HiMoon className="text-cyan-600 text-lg hover:text-cyan-700 transition-colors" />
                  )}
                </motion.div>
              </button>

              {/* Let's Talk CTA */}
              <a
                href="#contact"
                className="btn-primary !px-4 !py-2 text-xs font-semibold uppercase tracking-wider hidden sm:inline-flex items-center gap-1.5 shine-effect group"
              >
                <span>Let&apos;s talk</span>
                <FiArrowUpRight className="text-sm transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* Mobile Menu Toggle Button */}
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/[0.05] text-lg text-slate-200 transition-all hover:bg-white/[0.1] hover:border-cyan-400/40 md:hidden"
                onClick={() => setOpen(!open)}
                aria-label="Toggle navigation menu"
                aria-expanded={open}
                aria-controls="mobile-navigation"
              >
                {open ? <HiX /> : <HiMenu />}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.97 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-0 top-full mt-2 px-4 md:hidden"
            >
              <div className="mx-auto max-w-6xl">
                <div className="glass-card overflow-hidden p-4 shadow-2xl backdrop-blur-3xl border border-white/20 bg-slate-950/90">
                  <div className="flex items-center justify-between px-2 pb-3 mb-2 border-b border-white/[0.08]">
                    <span className="font-mono text-xs font-semibold uppercase tracking-widest text-cyan-400 flex items-center gap-1.5">
                      <FiCompass className="text-sm" /> Navigation
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[0.68rem] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                      Available
                    </span>
                  </div>

                  <ul id="mobile-navigation" className="space-y-1">
                    {links.map((link) => {
                      const isActive = active === link.href
                      return (
                        <li key={link.href}>
                          <a
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className={`flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium transition-all ${
                              isActive
                                ? 'bg-gradient-to-r from-cyan-500/20 via-blue-500/15 to-transparent border-l-2 border-cyan-400 text-cyan-300 font-semibold shadow-inner'
                                : 'text-slate-300 hover:bg-white/[0.06] hover:text-white'
                            }`}
                          >
                            <span>{link.label}</span>
                            <FiArrowUpRight className={`text-xs transition-opacity ${isActive ? 'text-cyan-300 opacity-100' : 'opacity-40'}`} />
                          </a>
                        </li>
                      )
                    })}
                  </ul>

                  {/* Mobile Socials & CTA */}
                  <div className="mt-4 border-t border-white/[0.08] pt-3">
                    <div className="grid grid-cols-3 gap-2 mb-3 text-slate-300">
                      <a
                        href={profile.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] py-2 text-xs font-mono hover:border-cyan-400/40 hover:text-cyan-300 hover:bg-cyan-500/10 transition-all"
                      >
                        <FiGithub className="text-sm" /> Git
                      </a>
                      <a
                        href={profile.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] py-2 text-xs font-mono hover:border-blue-400/40 hover:text-blue-300 hover:bg-blue-500/10 transition-all"
                      >
                        <FiLinkedin className="text-sm text-blue-400" /> In
                      </a>
                      <a
                        href={`mailto:${profile.email}`}
                        className="flex items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] py-2 text-xs font-mono hover:border-cyan-400/40 hover:text-cyan-300 hover:bg-cyan-500/10 transition-all"
                      >
                        <FiMail className="text-sm" /> Mail
                      </a>
                    </div>
                    <a
                      href="#contact"
                      onClick={() => setOpen(false)}
                      className="btn-primary w-full text-center py-2.5 text-xs font-semibold uppercase tracking-wider"
                    >
                      Get in touch
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}


