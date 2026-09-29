import { FiArrowUp, FiHeart } from 'react-icons/fi'
import { profile } from '../data'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#080c14]/90 py-10 backdrop-blur-2xl">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          {/* Left Info */}
          <div>
            <p className="font-display text-base font-bold text-white tracking-tight">
              {profile.name}
            </p>
            <p className="mt-0.5 text-xs text-slate-400 font-mono">
              {profile.title}
            </p>
          </div>

          {/* Center / Copyright */}
          <div className="text-xs text-slate-400 font-mono flex items-center justify-center gap-1">
            <span>&copy; {new Date().getFullYear()} {profile.name}. Built with</span>
            <FiHeart className="text-cyan-400 text-xs inline" />
            <span>&amp; React.</span>
          </div>

          {/* Right Back to Top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2 font-mono text-xs font-medium text-slate-300 transition-all hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-cyan-300 hover:-translate-y-0.5 active:translate-y-0 shadow-sm"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <FiArrowUp className="text-xs text-cyan-400" />
          </button>
        </div>
      </div>
    </footer>
  )
}

