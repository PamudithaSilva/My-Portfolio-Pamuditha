import { motion } from 'framer-motion'
import { HiArrowDown } from 'react-icons/hi'
import { FiArrowUpRight, FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { profile } from '../data'
import profileImg from '../assets/profile.jpg'

const heroItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-[100svh] items-start overflow-hidden pt-16 sm:pt-20 md:min-h-screen md:pt-24">
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-float" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-accent2/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute inset-0 opacity-[0.045] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:3.5rem_3.5rem]" />

      <div className="section-container relative z-10 grid items-center gap-14 !pt-10 !pb-16 sm:!pt-12 sm:!pb-20 md:grid-cols-2 md:!pt-14 md:!pb-24 lg:!pt-16 lg:gap-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
          }}
        >
          <motion.p variants={heroItem} transition={{ duration: 0.55 }} className="chip inline-flex items-center gap-2 mb-6 text-accent2">
            <span className="w-2 h-2 rounded-full bg-accent2 animate-pulse-soft" aria-hidden="true" />
            Available for internships
          </motion.p>
          <motion.h1 variants={heroItem} transition={{ duration: 0.6 }} className="max-w-xl text-4xl font-extrabold leading-tight mb-4 md:text-6xl">
            Hi, I&apos;m <span className="gradient-text">{profile.name}</span>
          </motion.h1>
          <motion.p variants={heroItem} transition={{ duration: 0.55 }} className="max-w-xl text-lg text-slate-400 mb-6 md:text-xl">{profile.title}</motion.p>
          <motion.p variants={heroItem} transition={{ duration: 0.55 }} className="text-slate-400 max-w-lg leading-relaxed mb-10">{profile.about}</motion.p>

          <motion.div variants={heroItem} transition={{ duration: 0.55 }} className="flex flex-wrap items-center gap-4 mb-10">
            <a href="#projects" className="btn-primary">
              View my work <FiArrowUpRight />
            </a>
            <a href="#contact" className="btn-outline">
              Get in touch
            </a>
            <a href="/Pamuditha-Silva-CV.pdf" download className="btn-outline">
              Download CV <FiDownload />
            </a>
          </motion.div>

          <motion.div variants={heroItem} transition={{ duration: 0.55 }} className="flex items-center gap-5 text-2xl text-slate-400">
            <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-accent2 transition-colors" aria-label="Visit Pamuditha's GitHub profile">
              <FiGithub />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent2 transition-colors" aria-label="Visit Pamuditha's LinkedIn profile">
              <FiLinkedin />
            </a>
            <a href={`mailto:${profile.email}`} className="hover:text-accent2 transition-colors" aria-label="Email Pamuditha">
              <FiMail />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 120, damping: 18, delay: 0.25 }}
          className="relative flex justify-center md:justify-end"
        >
          <div className="relative h-64 w-64 sm:h-72 sm:w-72 md:h-96 md:w-96">
            <div className="profile-ring absolute inset-0 rounded-full bg-gradient-to-tr from-accent via-fuchsia-500 to-accent2 blur-sm" />
            <div className="absolute inset-2 rounded-full bg-base overflow-hidden border border-white/10">
              <img src={profileImg} alt={`Portrait of ${profile.name}`} className="w-full h-full object-cover" />
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
