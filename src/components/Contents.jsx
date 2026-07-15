import { motion } from 'framer-motion'
import Reveal from './Reveal'
import Folio from './Folio'

const entries = [
  { no: '01', id: 'byline', title: 'The Byline', tease: 'The consultant behind the clipboard — two years across enterprise deployments.', page: '03' },
  { no: '02', id: 'accessportal', title: 'AccessPortal', tease: 'How an inbox full of access requests became a fourteen-section specification.', page: '05' },
  { no: '03', id: 'refresh', title: 'The Refresh, Automated', tease: 'Putting AI agents to work on the platform’s most repetitive chore.', page: '09' },
  { no: '04', id: 'navigator', title: '3DX Role Navigator', tease: 'Charting the role and license dependencies nobody wrote down.', page: '13' },
  { no: '05', id: 'dispatches', title: 'Dispatches', tease: 'Six internal tools built from scratch — shipped and in production.', page: '15' },
  { no: '06', id: 'fieldnotes', title: 'Field Notes', tease: 'The equipment log — languages, frameworks, and infrastructure carried into the field.', page: '17' },
  { no: '07', id: 'credentials', title: 'Credentials', tease: 'Stamps, seals, and certifications on file.', page: '19' },
  { no: '08', id: 'contact', title: 'End of Report', tease: 'Where to send the follow-up.', page: '20' },
]

export default function Contents() {
  return (
    <section className="px-6 sm:px-12 lg:px-20 py-20 max-w-6xl mx-auto">
      <Folio page="02" title="Contents" />
      <Reveal>
        <h2 className="font-display font-bold text-5xl sm:text-6xl mb-12">
          Contents<span className="text-signal">.</span>
        </h2>
      </Reveal>
      <div className="space-y-0">
        {entries.map((e, i) => (
          <Reveal key={e.no} delay={i * 0.05}>
            <motion.a
              href={`#${e.id}`}
              className="group flex items-baseline gap-4 sm:gap-8 py-5 border-b border-ink/15 hover:border-signal transition-colors"
              whileHover={{ x: 10 }}
              transition={{ type: 'spring', stiffness: 400, damping: 28 }}
            >
              <span className="kicker text-signal w-8 shrink-0">{e.no}</span>
              <div className="flex-1 min-w-0">
                <h3 className="font-display font-semibold text-2xl sm:text-3xl leading-tight group-hover:text-signal transition-colors">
                  {e.title}
                </h3>
                <p className="text-sm text-ink-soft mt-1">{e.tease}</p>
              </div>
              <span className="hidden sm:block flex-1 rule-dotted self-center" />
              <span className="font-mono text-sm text-ink-soft shrink-0">p. {e.page}</span>
            </motion.a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
