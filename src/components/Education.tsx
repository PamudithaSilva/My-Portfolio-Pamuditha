import { motion } from 'framer-motion'
import { education, extraQualifications, certifications, hackathons } from '../data'
import { FiAward, FiUsers, FiBookOpen } from 'react-icons/fi'

export default function Education() {
  return (
    <section id="education" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-accent2 font-semibold mb-2 tracking-widest text-sm uppercase">Background</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Education & <span className="gradient-text">Achievements</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h3 className="flex items-center gap-2 font-semibold text-lg mb-6">
            <FiBookOpen className="text-accent2" /> Education
          </h3>
          <div className="space-y-6 border-l border-white/10 pl-6">
            {education.map((e) => (
              <div key={e.school} className="relative">
                <span className="absolute -left-[29px] top-1.5 w-3 h-3 rounded-full bg-gradient-to-r from-accent to-accent2" />
                <p className="text-sm text-slate-500 mb-1">{e.period}</p>
                <h4 className="font-semibold">{e.school}</h4>
                <p className="text-slate-400 text-sm">{e.degree}</p>
              </div>
            ))}
          </div>

          <h3 className="flex items-center gap-2 font-semibold text-lg mt-10 mb-4">
            <FiUsers className="text-accent2" /> Memberships & Extra Qualifications
          </h3>
          <ul className="space-y-2 text-sm text-slate-400">
            {[...extraQualifications.educations, ...extraQualifications.memberships].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-accent2">•</span> {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h3 className="flex items-center gap-2 font-semibold text-lg mb-6">
            <FiAward className="text-accent2" /> Certifications
          </h3>
          <ul className="space-y-3 mb-10">
            {certifications.map((c) => (
              <li key={c} className="glass px-4 py-3 text-sm text-slate-300">
                {c}
              </li>
            ))}
          </ul>

          <h3 className="flex items-center gap-2 font-semibold text-lg mb-4">
            <FiAward className="text-accent2" /> Hackathons & Competitions
          </h3>
          <ul className="space-y-3">
            {hackathons.map((h) => (
              <li key={h} className="glass px-4 py-3 text-sm text-slate-300">
                {h}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
