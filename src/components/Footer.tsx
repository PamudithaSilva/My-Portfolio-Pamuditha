import { FiArrowUp, FiHeart } from 'react-icons/fi'
import { profile } from '../data'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#080c14]/90 py-12 backdrop-blur-2xl">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          {/* Left Info */}
          <div>
            <p className="font-display text-base font-bold text-white tracking-tight">
              {profile.name}
            </p>
            <p className="mt-1 text-xs text-slate-400 font-mono">
              Computer Science Undergraduate &amp; Full-Stack Developer
            </p>
          </div>

          {/* Center / Copyright */}
          <div className="text-xs text-slate-400 font-mono">
            &copy; {new Date().getFullYear()} {profile.name}. Designed &amp; built with precision.
          </div>

          {/* Right Back to Top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 font-mono text-xs font-medium text-slate-300 transition-all hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-cyan-300 hover:-translate-y-0.5 active:translate-y-0"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <FiArrowUp className="text-sm" />
          </button>
        </div>
      </div>
    </footer>
  )
}
