import Reveal from './Reveal'
import Folio from './Folio'
import Stamp from './Stamp'

/* Short wire-service briefs — the shipped internal tools suite.
   Unlike the feature spreads (specifications), these are in production. */
const dispatches = [
  {
    slug: 'LOG-01',
    title: 'Log Retrieval & Filtering',
    body: 'Fast access to platform logs across environments. Deployed on active customer projects, where it now handles incident triage.',
    status: 'In Production',
  },
  {
    slug: 'MON-02',
    title: 'Service Monitoring & Alerting',
    body: 'Real-time detection of service failures with automated notifications. Integrated with the logging utilities — the two tools talk.',
    status: 'In Production',
  },
  {
    slug: 'VAL-03',
    title: 'Pre-Installation Validation',
    body: 'Flags configuration issues and missing prerequisites before platform setup begins — catching failures before they get expensive.',
    status: 'In Production',
  },
  {
    slug: 'UPG-04',
    title: 'Upgrade Automation',
    body: 'Reduces risk and manual effort during third-party component upgrade cycles. The checklist became a program.',
    status: 'In Production',
  },
  {
    slug: 'DSH-05',
    title: 'Infrastructure Health Dashboard',
    body: 'Consolidated environment visibility. Presented to senior architects and iterated on their feedback.',
    status: 'In Production',
  },
  {
    slug: 'UNI-06',
    title: 'The Unified Application',
    body: 'All of the above, consolidated into a single application for easier deployment and maintenance across environments.',
    status: 'Shipped',
  },
]

export default function Dispatches() {
  return (
    <section id="dispatches" className="px-6 sm:px-12 lg:px-20 py-20 max-w-6xl mx-auto scroll-mt-8">
      <Folio page="15" title="Dispatches" />
      <Reveal>
        <p className="kicker text-signal mb-4">05 — From the Wire</p>
        <h2 className="font-display font-bold text-4xl sm:text-6xl leading-tight max-w-4xl">
          Dispatches: Tools Already in the Field.
        </h2>
        <p className="font-display italic text-xl sm:text-2xl text-ink-soft mt-5 max-w-3xl">
          The features above are specifications. These are not — a suite of
          internal tools built from scratch, shipped, and in active use across
          project environments at Dassault Systèmes.
        </p>
      </Reveal>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/20 border-2 border-ink">
        {dispatches.map((d, i) => (
          <Reveal key={d.slug} delay={i * 0.05} className="bg-paper">
            <article className="p-6 h-full flex flex-col gap-3">
              <span className="kicker text-signal">{d.slug}</span>
              <h3 className="font-display font-semibold text-2xl leading-tight">{d.title}</h3>
              <p className="text-sm leading-relaxed text-ink-soft flex-1">{d.body}</p>
              <Stamp className="px-2.5 py-1 text-[0.65rem] self-start" delay={0.2 + i * 0.05}>{d.status}</Stamp>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
