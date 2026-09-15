import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="relative isolate min-h-screen selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Dynamic Cursor Spotlight (Desktop only) */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 hidden md:block"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(6, 182, 212, 0.06), transparent 80%)`,
        }}
        aria-hidden="true"
      />

      {/* Global Ambient Mesh Background */}
      <div className="ambient-background" aria-hidden="true" />

      {/* Skip to Content for Accessibility */}
      <a
        href="#hero"
        className="fixed -top-24 left-6 z-[100] rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-4 py-2.5 font-mono text-xs font-bold text-slate-950 shadow-2xl transition-all duration-300 focus:top-6 focus:outline-none focus:ring-2 focus:ring-cyan-300"
      >
        Skip to content →
      </a>

      {/* Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
