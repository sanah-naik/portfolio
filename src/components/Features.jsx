import { motion } from 'framer-motion'
import Reveal from './Reveal'
import Folio from './Folio'

/* One entry per feature spread — add a fourth object to add a spread. */
const features = [
  {
    id: 'accessportal',
    no: '02',
    page: '05',
    kicker: 'Feature — Access Governance',
    headline: 'The Inbox Was the System. Then It Wasn’t.',
    dek: 'AccessPortal replaces email-driven access requests to 3DEXPERIENCE environments with a structured, auditable web application — specified down to the last status transition.',
    body: [
      'Access to a 3DEXPERIENCE environment used to begin the same way most enterprise chaos does: with an email. Requests arrived unstructured, approvals lived in reply chains, and the audit trail was whatever the inbox search could reconstruct months later. Nobody had decided the inbox should be the system of record — it just was.',
      'AccessPortal is the correction. What started as a concept became a fourteen-section master specification, version 4.0, defining a full web application for the entire request lifecycle. Eight distinct request form types cover the shapes an access request actually takes; a seven-status lifecycle means every request is always somewhere definite — never “forwarded to someone, probably.”',
      'Authentication rides on LDAP, so identity is the directory’s problem, not the portal’s. Admin approval workflows put decisions in front of the right people with the context attached, and a thirteen-phase implementation roadmap turns the specification into a build sequence rather than a wish list.',
      'The result is the difference between a process and a pile of mail: requests that can be tracked, decisions that can be audited, and an access system that no longer depends on anyone’s memory of who asked for what.',
    ],
    pullQuote: 'Nobody had decided the inbox should be the system of record — it just was.',
    specs: [
      ['Spec sections', '14 (v4.0)'],
      ['Request form types', '8'],
      ['Lifecycle statuses', '7'],
      ['Implementation phases', '13'],
      ['Auth', 'LDAP'],
      ['Workflows', 'Admin approval'],
      ['Target', '3DEXPERIENCE environments'],
    ],
  },
  {
    id: 'refresh',
    no: '03',
    page: '09',
    kicker: 'Feature — Automation',
    headline: 'The Refresh, Automated.',
    dek: 'An internal tool built on Google’s Antigravity agent platform takes over the environment-refresh process — the repetitive, error-prone chore that used to consume skilled hands.',
    body: [
      'Every 3DEXPERIENCE installation eventually needs its environments refreshed, and every refresh is the same story: a long sequence of manual steps, each one routine, each one an opportunity to get something subtly wrong. It is exactly the kind of work that wastes an engineer — demanding enough to require attention, repetitive enough to deserve none.',
      'This tool hands the chore to machines. Built on Google’s Antigravity agent platform, it automates the refresh process end to end, backed by a detailed build specification: a React, TypeScript, and Tailwind frontend over a Python FastAPI backend.',
      'The interesting engineering was not the stack — it was teaching the agents. That meant configuring agent skills with the right scoping, deciding what belongs at the project level versus globally, and optimizing the agent rules so the build behaved predictably instead of creatively. Agent tooling is only as good as the constraints you write for it.',
      'The payoff is a refresh process that runs the same way every time, documented in a spec instead of in someone’s head — and an engineer freed up for problems that actually need one.',
    ],
    pullQuote: 'Agent tooling is only as good as the constraints you write for it.',
    specs: [
      ['Platform', 'Google Antigravity'],
      ['Frontend', 'React · TypeScript · Tailwind'],
      ['Backend', 'Python · FastAPI'],
      ['Agent config', 'Skills — project vs. global scope'],
      ['Rules', 'Optimized for build'],
      ['Target', '3DEXPERIENCE env refresh'],
    ],
  },
  {
    id: 'navigator',
    no: '04',
    page: '13',
    kicker: 'Feature — Platform Cartography',
    headline: 'A Map for the Territory Nobody Drew.',
    dek: 'The 3DX Role Navigator specifies a tool for the platform’s tangled role and license dependencies — the chains that today live only in the heads of veterans.',
    body: [
      'On the 3DEXPERIENCE platform, roles and licenses do not stand alone. They sequence, they depend, they conflict — and the map of those dependencies exists nowhere. Assign roles in the wrong order, or miss a license prerequisite, and you find out the way everyone finds out: something downstream breaks, and a veteran gets pulled in to explain what the platform never would.',
      'That is tribal knowledge doing the job of documentation, and it fails the moment the tribe is busy, on leave, or gone. The 3DX Role Navigator is a specification for retiring that failure mode: a tool that makes role sequencing and role-to-license dependencies explicit, visible, and navigable.',
      'Instead of untangling dependency chains by hand — or by asking around — an administrator can see what an assignment requires, what it unlocks, and what order the platform actually expects. The complexity does not go away; it becomes legible.',
      'It is the same conviction that runs through every feature in this report: invisible systems fail invisibly. Draw the map, and the platform stops being something you survive and starts being something you operate.',
    ],
    pullQuote: 'Invisible systems fail invisibly. Draw the map.',
    specs: [
      ['Deliverable', 'Tool specification'],
      ['Problem domain', 'Role sequencing'],
      ['Dependencies', 'Role ↔ license chains'],
      ['Replaces', 'Tribal knowledge'],
      ['Platform', '3DEXPERIENCE'],
    ],
  },
]

function FeatureSpread({ f, index }) {
  return (
    <article id={f.id} className="px-6 sm:px-12 lg:px-20 py-20 max-w-6xl mx-auto scroll-mt-8">
      <Folio page={f.page} title={f.headline} />
      <Reveal>
        <p className="kicker text-signal mb-4">{f.no} — {f.kicker}</p>
        <h2 className="font-display font-bold text-4xl sm:text-6xl leading-[1.05] max-w-4xl">
          {f.headline}
        </h2>
        <p className="font-display italic text-xl sm:text-2xl text-ink-soft mt-5 max-w-3xl">
          {f.dek}
        </p>
      </Reveal>

      <div className="grid lg:grid-cols-[1fr_260px] gap-12 mt-12">
        <div>
          {/* magazine column layout on wide screens */}
          <div className="md:columns-2 md:gap-10 space-y-5 text-[1.05rem] leading-relaxed [&>p]:break-inside-avoid">
            <Reveal delay={0.05}>
              <p><span className="font-display font-bold text-5xl float-left mr-2 leading-[0.85] text-signal">{f.body[0][0]}</span>{f.body[0].slice(1)}</p>
            </Reveal>
            <Reveal delay={0.1}><p>{f.body[1]}</p></Reveal>
            <Reveal delay={0.15}><p>{f.body[2]}</p></Reveal>
            <Reveal delay={0.2}><p>{f.body[3]}</p></Reveal>
          </div>
          <Reveal delay={0.15}>
            <blockquote className="font-display italic text-3xl sm:text-4xl leading-snug mt-10 pt-8 rule-dotted">
              <span className="text-signal">“</span>{f.pullQuote}<span className="text-signal">”</span>
            </blockquote>
          </Reveal>
        </div>

        {/* specs sidebar animates in slightly after the headline, rows stagger like a printout */}
        <Reveal delay={0.3}>
          <aside className="border-2 border-ink h-fit">
            <div className="bg-ink text-paper px-5 py-2 kicker">Spec Sheet — {f.no}</div>
            <motion.dl
              className="p-5 font-mono text-sm space-y-3"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
              transition={{ staggerChildren: 0.07, delayChildren: 0.3 }}
            >
              {f.specs.map(([k, v]) => (
                <motion.div
                  key={k}
                  className="flex justify-between gap-3 border-b border-ink/10 pb-2"
                  variants={{
                    hidden: { opacity: 0, x: -12 },
                    show: { opacity: 1, x: 0, transition: { duration: 0.3, ease: 'easeOut' } },
                  }}
                >
                  <dt className="text-ink-soft shrink-0">{k}</dt>
                  <dd className="text-right">{v}</dd>
                </motion.div>
              ))}
            </motion.dl>
          </aside>
        </Reveal>
      </div>
    </article>
  )
}

export default function Features() {
  return (
    <>
      {features.map((f, i) => <FeatureSpread key={f.id} f={f} index={i} />)}
    </>
  )
}
