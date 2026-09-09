import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'
import { HiMenu, HiMoon, HiSun, HiX } from 'react-icons/hi'
import { FiArrowUpRight, FiCode } from 'react-icons/fi'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#projects' },
  { label: 'Background', href: '#education' },
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
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 25)
      const sections = ['hero', 'about', 'skills', 'projects', 'education', 'contact']
      const scrollPos = window.scrollY + 180

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
    document.documentElement.classList.toggle('light', theme === 'light')
    document.documentElement.style.colorScheme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const close = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [])

  return (
    <>
      {/* Top Scroll Progress Line */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500"
        style={{ scaleX }}
      />

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-3.5 sm:py-4' : 'py-5 sm:py-6'
        }`}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <nav
            className={`flex items-center justify-between rounded-2xl px-4 py-2.5 sm:px-5 sm:py-3 transition-all duration-300 ${
              scrolled
                ? 'border border-white/[0.1] bg-[#080c14]/80 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.25)]'
                : 'border border-white/[0.04] bg-[#080c14]/30 backdrop-blur-md'
            }`}
          >
            {/* Logo */}
            <a
              href="#hero"
              className="group flex items-center gap-2 font-display text-base font-bold tracking-tight text-white transition-opacity hover:opacity-90"
              aria-label="Pamuditha Silva Portfolio Home"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 text-slate-950 font-mono text-sm font-black shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
                <FiCode className="stroke-[3]" />
              </div>
              <span className="text-slate-100 tracking-tight">
                PAMUDITHA<span className="text-cyan-400">.</span>
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <ul className="hidden items-center gap-1 text-sm font-medium text-slate-400 md:flex">
              {links.map((link) => {
                const isActive = active === link.href
                return (
                  <li key={link.href} className="relative">
                    <a
                      href={link.href}
                      aria-current={isActive ? 'page' : undefined}
                      className={`relative z-10 block px-3.5 py-1.5 transition-colors duration-200 ${
                        isActive ? 'text-white' : 'hover:text-slate-200'
                      }`}
                    >
                      {link.label}
                    </a>
                    {isActive && (
                      <motion.div
                        layoutId="active-pill"
                        className="absolute inset-0 rounded-lg bg-white/[0.08] border border-white/[0.1] shadow-inner"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </li>
                )
              })}
            </ul>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2.5">
              {/* Theme Toggle */}
              <button
                type="button"
                className="theme-toggle"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                <motion.div
                  key={theme}
                  initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === 'dark' ? <HiSun className="text-amber-300" /> : <HiMoon className="text-blue-500" />}
                </motion.div>
              </button>

              {/* Let's Talk CTA */}
              <a
                href="#contact"
                className="btn-primary !px-4 !py-2 hidden md:inline-flex text-xs uppercase tracking-wider font-semibold"
              >
                Let&apos;s talk <FiArrowUpRight className="text-base" />
              </a>

              {/* Mobile Menu Toggle */}
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-xl text-slate-200 transition-colors hover:bg-white/[0.08] md:hidden"
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
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="absolute inset-x-0 top-full mt-2 px-4 md:hidden"
            >
              <div className="mx-auto max-w-6xl">
                <div className="glass-card overflow-hidden p-3 shadow-2xl backdrop-blur-2xl">
                  <ul id="mobile-navigation" className="space-y-1">
                    {links.map((link) => {
                      const isActive = active === link.href
                      return (
                        <li key={link.href}>
                          <a
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                              isActive
                                ? 'bg-gradient-to-r from-cyan-500/15 to-blue-500/15 border-l-2 border-cyan-400 text-cyan-300'
                                : 'text-slate-300 hover:bg-white/[0.06] hover:text-white'
                            }`}
                          >
                            <span>{link.label}</span>
                            <FiArrowUpRight className="opacity-60 text-xs" />
                          </a>
                        </li>
                      )
                    })}
                  </ul>
                  <div className="mt-3 border-t border-white/[0.08] pt-3 px-1">
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

