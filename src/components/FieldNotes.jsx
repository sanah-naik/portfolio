import { motion } from 'framer-motion'
import Reveal from './Reveal'
import Folio from './Folio'

const inventory = [
  {
    label: 'Languages',
    ref: 'INV-A',
    items: ['Java', 'TypeScript', 'JavaScript', 'Python', 'TCL', 'SQL'],
  },
  {
    label: 'Frameworks & APIs',
    ref: 'INV-B',
    items: ['Spring Boot', 'React', 'Vue.js', 'REST APIs', 'SOAP'],
  },
  {
    label: 'Infrastructure',
    ref: 'INV-C',
    items: ['TomEE', 'Apache', 'HAProxy', 'RHEL', 'Windows Server'],
  },
  {
    label: 'Databases',
    ref: 'INV-D',
    items: ['Oracle', 'Microsoft SQL Server'],
  },
  {
    label: 'Platform',
    ref: 'INV-E',
    items: [
      '3DEXPERIENCE (R2022x–R2026x)',
      'ENOVIA customization',
      '3DSpace',
      'Environment refresh',
      'Role / license dependency management',
      'Internal tooling',
    ],
  },
  {
    label: 'Other',
    ref: 'INV-F',
    items: ['Git', 'HTML', 'CSS', 'Installer Scripting', 'Shell Scripting'],
  },
]

export default function FieldNotes() {
  return (
    <section id="fieldnotes" className="px-6 sm:px-12 lg:px-20 py-20 max-w-6xl mx-auto scroll-mt-8">
      <Folio page="17" title="Field Notes" />
      <Reveal>
        <p className="kicker text-signal mb-4">06 — Appendix A</p>
        <h2 className="font-display font-bold text-4xl sm:text-6xl leading-tight">
          Field Notes: The Equipment Log.
        </h2>
        <p className="font-display italic text-xl text-ink-soft mt-4 max-w-2xl">
          Inventory carried into the field, itemized for the record.
        </p>
      </Reveal>

      <div className="mt-12 border-2 border-ink">
        <div className="bg-ink text-paper px-5 py-2 kicker flex justify-between">
          <span>Equipment Inventory</span>
          <span>Verified — 2026</span>
        </div>
        <div className="divide-y divide-ink/15">
          {inventory.map((group, i) => (
            <Reveal key={group.ref} delay={i * 0.05}>
              <div className="grid sm:grid-cols-[180px_1fr] gap-2 sm:gap-8 px-5 py-6">
                <div>
                  <span className="kicker text-signal">{group.ref}</span>
                  <h3 className="font-display font-semibold text-xl leading-tight">{group.label}</h3>
                </div>
                <motion.ul
                  className="flex flex-wrap gap-2 content-start"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ staggerChildren: 0.04 }}
                >
                  {group.items.map((item) => (
                    <motion.li
                      key={item}
                      className="font-mono text-sm border border-ink/40 px-3 py-1 bg-paper-deep/60"
                      variants={{
                        hidden: { opacity: 0, y: 10, scale: 0.9 },
                        show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 400, damping: 24 } },
                      }}
                      whileHover={{ y: -3, backgroundColor: '#1a1712', color: '#f5f1e8' }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
