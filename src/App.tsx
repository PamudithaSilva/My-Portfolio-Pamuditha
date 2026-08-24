import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'mouse') return

    event.currentTarget.style.setProperty('--pointer-x', `${event.clientX}px`)
    event.currentTarget.style.setProperty('--pointer-y', `${event.clientY}px`)
  }

  return (
    <div className="relative isolate min-h-screen overflow-x-clip" onPointerMove={handlePointerMove}>
      <div className="ambient-background" aria-hidden="true">
        <span className="cursor-glow" />
      </div>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-5 focus:top-5 focus:z-[60] btn-primary">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
