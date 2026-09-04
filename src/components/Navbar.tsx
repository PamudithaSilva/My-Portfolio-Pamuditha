import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { HiMenu, HiMoon, HiSun, HiX } from 'react-icons/hi'

const links = [
  { label: 'About', href: '#about' }, { label: 'Skills', href: '#skills' }, { label: 'Work', href: '#projects' }, { label: 'Background', href: '#education' }, { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#about')
  const [theme, setTheme] = useState<'dark' | 'light'>(() => localStorage.getItem('theme') === 'light' ? 'light' : 'dark')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const current = [...links].reverse().find(({ href }) => document.querySelector(href)?.getBoundingClientRect().top! <= 140)
      if (current) setActive(current.href)
    }
    onScroll(); window.addEventListener('scroll', onScroll); return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => { document.documentElement.classList.toggle('light', theme === 'light'); document.documentElement.style.colorScheme = theme; localStorage.setItem('theme', theme) }, [theme])
  useEffect(() => { const close = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false); window.addEventListener('keydown', close); return () => window.removeEventListener('keydown', close) }, [])

  return <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-200 ${scrolled ? 'border-white/10 bg-base/80 py-3 backdrop-blur-xl' : 'border-transparent py-5'}`}>
    <nav className="section-container !py-0 flex items-center justify-between">
      <a href="#hero" className="font-display text-lg font-bold tracking-[-0.05em] text-white" aria-label="Pamuditha Silva home">PAMUDITHA<span className="text-accent2">/</span></a>
      <ul className="hidden items-center gap-7 text-sm text-slate-400 md:flex">{links.map((link) => <li key={link.href}><a href={link.href} aria-current={active === link.href ? 'page' : undefined} className={`transition-colors hover:text-white ${active === link.href ? 'nav-link-active' : ''}`}>{link.label}</a></li>)}</ul>
      <div className="flex items-center gap-3"><button type="button" className="theme-toggle" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>{theme === 'dark' ? <HiSun /> : <HiMoon />}</button><a href="#contact" className="btn-primary hidden !px-4 !py-2 md:inline-flex">Let&apos;s talk</a><button type="button" className="text-2xl md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle navigation menu" aria-expanded={open} aria-controls="mobile-navigation">{open ? <HiX /> : <HiMenu />}</button></div>
    </nav>
    <AnimatePresence>{open && <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="absolute inset-x-0 top-full md:hidden"><div className="section-container !py-0"><ul id="mobile-navigation" className="surface mt-3 p-2">{links.map((link) => <li key={link.href}><a href={link.href} onClick={() => setOpen(false)} className={`block rounded-lg px-4 py-3 text-sm ${active === link.href ? 'nav-mobile-active' : 'text-slate-300'}`}>{link.label}</a></li>)}</ul></div></motion.div>}</AnimatePresence>
  </header>
}
