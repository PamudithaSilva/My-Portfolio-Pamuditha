import { motion } from 'framer-motion'
import { education, extraQualifications, certifications, hackathons } from '../data'
import { FiAward, FiBookOpen, FiCheck, FiUsers } from 'react-icons/fi'

export default function Education() {
  return (
    <section id="education" className="section-container content-rule">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <p className="eyebrow">Background</p>
        <h2 className="section-title mb-12">
          Education &amp; <span className="gradient-text">development.</span>
        </h2>
      </motion.div>

      <div className="grid items-start gap-10 md:grid-cols-2">
        <motion.div className="min-w-0" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h3 className="flex items-center gap-2 font-semibold text-lg mb-6">
            <FiBookOpen className="text-accent2" /> Education
          </h3>
          <div className="space-y-7 border-l border-white/10 pl-6">
            {education.map((item) => (
              <div key={item.school} className="relative">
                <span className="absolute -left-[29px] top-1.5 h-3 w-3 rounded-full border-2 border-base bg-accent2" />
                <p className="mb-1 font-mono text-xs text-accent2">{item.period}</p>
                <h4 className="font-semibold text-white">{item.school}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{item.degree}</p>
              </div>
            ))}
          </div>

          <h3 className="flex items-center gap-2 font-semibold text-lg mt-10 mb-4">
            <FiUsers className="text-accent2" /> Memberships and extra qualifications
          </h3>
          <ul className="space-y-2 text-sm text-slate-400">
            {[...extraQualifications.educations, ...extraQualifications.memberships].map((item) => (
              <li key={item} className="flex gap-2 leading-relaxed">
                <FiCheck className="text-accent2 mt-0.5 shrink-0" aria-hidden="true" /> {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div className="min-w-0" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h3 className="flex items-center gap-2 font-semibold text-lg mb-6">
            <FiAward className="text-accent2" /> Certifications
          </h3>
          <ul className="space-y-3 mb-10">
            {certifications.map((item) => (
              <li key={item} className="surface px-4 py-3 text-sm text-slate-300 transition-colors hover:border-white/20">{item}</li>
            ))}
          </ul>

          <h3 className="flex items-center gap-2 font-semibold text-lg mb-4">
            <FiAward className="text-accent2" /> Hackathons and competitions
          </h3>
          <ul className="space-y-3">
            {hackathons.map((item) => (
              <li key={item} className="surface px-4 py-3 text-sm text-slate-300 transition-colors hover:border-white/20">{item}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
