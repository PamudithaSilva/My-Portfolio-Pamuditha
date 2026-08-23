import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="section-container !py-0 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
      </div>
    </footer>
  )
}
