import { FiArrowUpRight } from 'react-icons/fi'
import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="section-container !py-0 flex flex-col items-center justify-between gap-4 text-center text-sm text-slate-500 md:flex-row md:text-left">
        <p>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <a href="#hero" className="inline-flex items-center gap-1.5 hover:text-slate-200 transition-colors">
          Back to top <FiArrowUpRight />
        </a>
      </div>
    </footer>
  )
}
