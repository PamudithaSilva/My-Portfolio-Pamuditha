import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

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
                className={`relative py-2 transition-colors ${active === l.href ? 'text-white' : 'hover:text-white'}`}
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

        <a href="#contact" className="hidden md:inline-flex btn-primary !py-2 !px-5 text-sm">
          Let's Talk
        </a>

        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -8 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -8 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="md:hidden overflow-hidden"
          >
            <div className="mt-4 px-5 sm:px-6">
              <ul id="mobile-navigation" className="glass p-4 flex flex-col gap-1 text-slate-300">
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
                      className={`block rounded-lg px-3 py-2 transition-colors ${active === l.href ? 'bg-white/10 text-white' : 'hover:bg-white/5 hover:text-white'}`}
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
