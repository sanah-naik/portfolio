import { motion } from 'framer-motion'
import Reveal from './Reveal'
import Stamp from './Stamp'

/* Fake barcode — decoration; the bars print themselves in when scrolled to. */
function Barcode() {
  const widths = [3, 1, 2, 1, 3, 2, 1, 1, 3, 1, 2, 3, 1, 2, 1, 3, 1, 1, 2, 3, 1, 2, 1, 1, 3, 2]
  return (
    <div aria-hidden="true">
      <motion.div
        className="flex items-end gap-[2px] h-12"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-40px' }}
        transition={{ staggerChildren: 0.03 }}
      >
        {widths.map((w, i) => (
          <motion.span
            key={i}
            className="bg-ink inline-block h-full origin-bottom"
            style={{ width: w * 1.5 }}
            variants={{
              hidden: { scaleY: 0 },
              show: { scaleY: 1, transition: { duration: 0.25, ease: 'easeOut' } },
            }}
          />
        ))}
      </motion.div>
      <p className="font-mono text-[0.6rem] tracking-[0.3em] mt-1">FR-001-2026-SN</p>
    </div>
  )
}

const contacts = [
  ['Email', 'sanahnaik5@gmail.com', 'mailto:sanahnaik5@gmail.com'],
  ['LinkedIn', 'linkedin.com/in/sanah-naik', 'https://www.linkedin.com/in/sanah-naik-'],
  ['Phone', '+91 90964 84786', 'tel:+919096484786'],
]

export default function BackCover() {
  return (
    <section id="contact" className="px-6 sm:px-12 lg:px-20 py-20 max-w-6xl mx-auto min-h-[80vh] flex flex-col scroll-mt-8">
      <Reveal>
        <div className="rule-dotted pt-8">
          <p className="kicker text-signal mb-4">08 — Back Cover</p>
          <h2 className="font-display font-bold text-4xl sm:text-6xl leading-[1.05] max-w-3xl">
            Systems fail quietly. This one was written up.
          </h2>
          <p className="font-display italic text-xl sm:text-2xl text-ink-soft mt-5 max-w-2xl">
            Corrections, commissions, and next assignments — send them to the desk below.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-14 grid sm:grid-cols-3 gap-6 max-w-3xl">
          {contacts.map(([label, value, href]) => (
            <motion.a
              key={label}
              href={href}
              className="group border-t-2 border-ink pt-3 hover:border-signal transition-colors"
              whileHover={{ x: 6 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              <span className="kicker text-ink-soft">{label}</span>
              <p className="font-mono text-sm mt-1 group-hover:text-signal transition-colors break-all">{value}</p>
            </motion.a>
          ))}
        </div>
      </Reveal>

      <div className="flex-1" />

      <Reveal delay={0.15}>
        <div className="flex flex-wrap items-end justify-between gap-8 mt-20 pt-6 border-t-4 border-ink">
          <div>
            <p className="kicker text-ink-soft">Filed by</p>
            <p className="font-display font-bold text-2xl">Sanah Naik</p>
            <p className="kicker text-ink-soft mt-1">Pune, India — Vol. 01, Issue No. 001</p>
          </div>
          <Stamp className="px-4 py-2 text-sm" delay={0.4}>End of Report</Stamp>
          <Barcode />
        </div>
      </Reveal>
    </section>
  )
}
