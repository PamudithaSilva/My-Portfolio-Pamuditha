import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { HiMenu, HiMoon, HiSun, HiX } from 'react-icons/hi'

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
  const [active, setActive] = useState('#about')
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  })

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const current = [...links].reverse().find(({ href }) => {
        const section = document.querySelector(href)
        return section && section.getBoundingClientRect().top <= 140
      })
      if (current) setActive(current.href)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light')
    document.documentElement.style.colorScheme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 768px)')
    const closeOnDesktop = () => {
      if (desktopQuery.matches) setOpen(false)
    }
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    desktopQuery.addEventListener('change', closeOnDesktop)
    window.addEventListener('keydown', closeOnEscape)
    return () => {
      desktopQuery.removeEventListener('change', closeOnDesktop)
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-base/80 backdrop-blur-lg border-b border-white/10 py-3' : 'py-5'
      }`}
    >
      <nav className="section-container !py-0 flex items-center justify-between">
        <a href="#hero" className="font-display font-bold text-lg tracking-tight" aria-label="Pamuditha Silva home">
          Pamuditha<span className="gradient-text">.dev</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                aria-current={active === l.href ? 'page' : undefined}
                className={`relative py-2 transition-colors ${active === l.href ? 'nav-link-active' : 'hover:text-white'}`}
              >
                {l.label}
                {active === l.href && (
                  <motion.span
                    layoutId="active-nav-link"
                    className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-accent to-accent2"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="theme-toggle"
            onClick={() => setTheme((currentTheme) => currentTheme === 'dark' ? 'light' : 'dark')}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <HiSun /> : <HiMoon />}
          </button>

          <a href="#contact" className="hidden md:inline-flex btn-primary !py-2 !px-5 text-sm">
            Let's Talk
          </a>

          <button
            type="button"
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="absolute inset-x-0 top-full md:hidden"
          >
            <div className="section-container !py-0">
              <ul id="mobile-navigation" className="glass mt-3 flex max-h-[calc(100svh-5rem)] flex-col gap-1 overflow-y-auto p-2 text-slate-300 shadow-2xl shadow-black/30">
                {links.map((l, index) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                  >
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className={`block rounded-lg px-3 py-3 transition-colors ${active === l.href ? 'nav-mobile-active' : 'hover:bg-white/5 hover:text-white'}`}
                    >
                      {l.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
