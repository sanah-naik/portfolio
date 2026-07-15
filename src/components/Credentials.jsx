import { motion } from 'framer-motion'
import Reveal from './Reveal'
import Folio from './Folio'
import Stamp from './Stamp'

const creds = [
  { title: 'Infrastructure Consultant Certification', issuer: 'Dassault Systèmes · Mar 2025', tag: 'Certified' },
  { title: '3DEXPERIENCE Architecture Fundamentals — Level 1', issuer: 'Dassault Systèmes · Jun 2025', tag: 'Certified' },
  { title: '3DEXPERIENCE Installation Fundamentals Essentials — Level 1', issuer: 'Dassault Systèmes · Feb 2025', tag: 'Certified' },
  { title: 'AWS Certified Cloud Practitioner (CLF-C02)', issuer: 'Amazon Web Services · 2024', tag: 'Certified' },
]

export default function Credentials() {
  return (
    <section id="credentials" className="px-6 sm:px-12 lg:px-20 py-20 max-w-6xl mx-auto scroll-mt-8">
      <Folio page="19" title="Credentials" />
      <Reveal>
        <p className="kicker text-signal mb-4">07 — Appendix B</p>
        <h2 className="font-display font-bold text-4xl sm:text-6xl leading-tight">
          Credentials on File.
        </h2>
      </Reveal>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {creds.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.05}>
            <motion.div
              className="border-2 border-ink p-5 h-full flex flex-col justify-between gap-4 bg-paper"
              whileHover={{ rotate: -1, y: -4, boxShadow: '6px 6px 0px rgba(26, 23, 18, 0.9)' }}
              transition={{ type: 'spring', stiffness: 400, damping: 22 }}
            >
              <div>
                <h3 className="font-display font-semibold text-xl leading-snug">{c.title}</h3>
                <p className="font-mono text-sm text-ink-soft mt-1">{c.issuer}</p>
              </div>
              <Stamp className="px-3 py-1 text-xs self-start" delay={0.25 + i * 0.05}>{c.tag}</Stamp>
            </motion.div>
          </Reveal>
        ))}
      </div>

      {/* education — the founding document */}
      <Reveal delay={0.1}>
        <div className="mt-10 border-2 border-ink">
          <div className="bg-ink text-paper px-5 py-2 kicker">Education — On Record</div>
          <div className="p-5 flex flex-wrap items-baseline justify-between gap-4">
            <div>
              <h3 className="font-display font-semibold text-xl leading-snug">
                Bachelor of Engineering — Computer Engineering
              </h3>
              <p className="font-mono text-sm text-ink-soft mt-1">
                Bharati Vidyapeeth's College of Engineering for Women, Pune
              </p>
            </div>
            <span className="font-mono text-sm text-ink-soft">2020 — 2024</span>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
