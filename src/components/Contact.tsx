import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi'
import { profile } from '../data'

export default function Contact() {
  return (
    <section id="contact" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass p-8 md:p-14 text-center relative overflow-hidden"
      >
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-accent2/20 rounded-full blur-3xl" />

        <p className="eyebrow relative z-10">Contact</p>
        <h2 className="section-title mb-4 relative z-10">
          Let's build something <span className="gradient-text">great together</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto mb-10 relative z-10">
          I'm currently looking for internship opportunities and interesting collaborations. Feel free to reach out.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-10 relative z-10">
          <a href={`mailto:${profile.email}`} className="btn-primary">
            <FiMail /> {profile.email}
          </a>
          <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="btn-outline">
            <FiPhone /> {profile.phone}
          </a>
        </div>

        <div className="flex items-center justify-center gap-3 text-slate-400 mb-8 relative z-10">
          <FiMapPin /> <span>{profile.location}</span>
        </div>

        <div className="flex items-center justify-center gap-6 text-2xl relative z-10">
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
