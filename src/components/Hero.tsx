import { motion } from 'framer-motion'
import { HiArrowDown } from 'react-icons/hi'
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { profile } from '../data'
import profileImg from '../assets/profile.jpg'

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden min-h-screen flex items-center pt-24">
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-float" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-accent2/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute inset-0 opacity-[0.045] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:3.5rem_3.5rem]" />

      <div className="section-container grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="chip inline-flex items-center gap-2 mb-6 text-accent2">
            <span className="w-2 h-2 rounded-full bg-accent2 animate-pulse-soft" aria-hidden="true" />
            Available for internships
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Hi, I&apos;m <span className="gradient-text">{profile.name}</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-6">{profile.title}</p>
          <p className="text-slate-400 max-w-lg leading-relaxed mb-10">{profile.about}</p>

          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a href="#projects" className="btn-primary">
              View my work <FiArrowUpRight />
            </a>
            <a href="#contact" className="btn-outline">
              Get in touch
            </a>
          </div>

          <div className="flex items-center gap-5 text-2xl text-slate-400">
            <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-accent2 transition-colors" aria-label="Visit Pamuditha's GitHub profile">
              <FiGithub />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent2 transition-colors" aria-label="Visit Pamuditha's LinkedIn profile">
              <FiLinkedin />
            </a>
            <a href={`mailto:${profile.email}`} className="hover:text-accent2 transition-colors" aria-label="Email Pamuditha">
              <FiMail />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent via-fuchsia-500 to-accent2 animate-gradient-move blur-sm" />
            <div className="absolute inset-2 rounded-full bg-base overflow-hidden border border-white/10">
              <img src={profileImg} alt={`Portrait of ${profile.name}`} className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -right-4 glass px-4 py-2 text-sm font-semibold">
              Computer Science
            </div>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 animate-bounce"
        aria-label="Scroll to about section"
      >
        <HiArrowDown size={24} />
      </a>
    </section>
  )
}
