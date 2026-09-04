import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi'
import { profile } from '../data'

export default function Contact() {
  return (
    <section id="contact" className="section-container content-rule">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="surface relative overflow-hidden p-8 text-center md:p-14"
      >
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />

        <p className="eyebrow relative z-10">Contact</p>
        <h2 className="section-title mb-4 relative z-10">
          Let&apos;s build something <span className="gradient-text">useful.</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto mb-10 relative z-10">
          I&apos;m currently looking for internship opportunities and meaningful collaborations. If you think we should talk, I&apos;d be glad to hear from you.
        </p>

        <div className="relative z-10 mb-10 flex flex-wrap justify-center gap-3">
          <a href={`mailto:${profile.email}`} className="btn-primary max-w-full break-all text-center">
            <FiMail /> {profile.email}
          </a>
          <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="btn-outline max-w-full">
            <FiPhone /> {profile.phone}
          </a>
        </div>

        <div className="flex items-center justify-center gap-3 text-slate-400 mb-8 relative z-10">
          <FiMapPin /> <span>{profile.location}</span>
        </div>

        <div className="relative z-10 flex items-center justify-center gap-6 text-2xl">
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-accent2 transition-colors" aria-label="Visit Pamuditha's GitHub profile">
            <FiGithub />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent2 transition-colors" aria-label="Visit Pamuditha's LinkedIn profile">
            <FiLinkedin />
          </a>
        </div>
      </motion.div>
    </section>
  )
}
