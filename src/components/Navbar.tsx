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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
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
        <a href="#hero" className="font-display font-bold text-lg tracking-tight">
          Pamuditha<span className="gradient-text">.dev</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-white transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="hidden md:inline-flex btn-primary !py-2 !px-5 text-sm">
          Let's Talk
        </a>

        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden mt-4 px-6">
          <ul className="glass p-4 flex flex-col gap-4 text-slate-300">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block hover:text-white transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
