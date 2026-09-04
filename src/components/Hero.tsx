import { motion } from 'framer-motion'
import { FiArrowDownRight, FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { profile } from '../data'
import profileImg from '../assets/profile.jpg'

const heroItem = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-[100svh] items-center pt-20">
      <div className="section-container grid items-center gap-12 !py-16 md:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09, delayChildren: 0.08 } } }}>
          <motion.div variants={heroItem} transition={{ duration: 0.45 }} className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.16em] text-accent2"><span className="h-2 w-2 rounded-full bg-accent2" /> Available for internships</motion.div>
          <motion.h1 variants={heroItem} transition={{ duration: 0.5 }} className="max-w-3xl font-display text-4xl font-bold leading-[1.08] tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl">Building clear, capable digital <span className="gradient-text">experiences.</span></motion.h1>
          <motion.p variants={heroItem} transition={{ duration: 0.5 }} className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">I&apos;m {profile.name}, a Computer Science undergraduate and full-stack developer based in Sri Lanka. I turn product ideas into thoughtful web applications and dependable APIs.</motion.p>
          <motion.div variants={heroItem} transition={{ duration: 0.5 }} className="mt-9 flex flex-wrap gap-3"><a href="#projects" className="btn-primary">Explore selected work <FiArrowDownRight /></a><a href="/Pamuditha-Silva-CV.pdf" download className="btn-outline">Download résumé <FiDownload /></a></motion.div>
          <motion.div variants={heroItem} transition={{ duration: 0.5 }} className="mt-10 flex items-center gap-5 border-t border-white/10 pt-6 text-slate-400"><span className="font-mono text-xs uppercase tracking-[0.12em]">Find me</span><a href={profile.github} target="_blank" rel="noreferrer" className="text-xl transition-colors hover:text-accent2" aria-label="Visit Pamuditha's GitHub profile"><FiGithub /></a><a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-xl transition-colors hover:text-accent2" aria-label="Visit Pamuditha's LinkedIn profile"><FiLinkedin /></a><a href={`mailto:${profile.email}`} className="text-xl transition-colors hover:text-accent2" aria-label="Email Pamuditha"><FiMail /></a></motion.div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.22 }} className="relative mx-auto w-full max-w-md md:ml-auto">
          <div className="surface relative overflow-hidden p-3"><div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-accent/20 to-transparent" /><div className="relative aspect-[4/4.65] overflow-hidden rounded-xl bg-slate-900"><img src={profileImg} alt={`Portrait of ${profile.name}`} className="h-full w-full object-cover object-center grayscale-[12%]" /></div><div className="absolute inset-x-6 bottom-6 rounded-lg border border-white/10 bg-[#111b2e]/95 px-5 py-4 text-left shadow-xl backdrop-blur"><p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-accent2">Currently focused on</p><p className="mt-1 text-sm font-semibold text-white">Full-stack Software Engineer</p></div></div>
          <div className="mt-5 grid grid-cols-2 gap-3"><div className="surface p-4"><p className="font-mono text-xs text-accent2">2024 — 2028</p><p className="mt-1 text-sm text-slate-300">BSc (Hons) Computer Science</p></div><div className="surface p-4"><p className="font-mono text-xs text-accent2">04 projects</p><p className="mt-1 text-sm text-slate-300">Across web, APIs & AI</p></div></div>
        </motion.div>
      </div>
    </section>
  )
}
