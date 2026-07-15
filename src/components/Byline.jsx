import { motion } from 'framer-motion'
import Reveal from './Reveal'
import Folio from './Folio'
import Stamp from './Stamp'

/* Chibi field reporter — "artist's rendering", ink-line print style. */
function ChibiReporter() {
  return (
    <svg viewBox="0 0 120 150" className="w-full h-auto" aria-label="Chibi illustration of the reporter">
      <g strokeLinecap="round" strokeLinejoin="round">
        {/* ponytail behind head */}
        <path d="M 88 52 Q 104 58 100 86 Q 98 96 90 100 Q 96 84 90 72 Q 87 62 84 58 Z"
          fill="#1a1712" stroke="#1a1712" strokeWidth="2" />
        {/* big chibi head */}
        <path d="M 28 58 Q 28 96 60 96 Q 92 96 92 58 Q 92 34 60 34 Q 28 34 28 58 Z"
          fill="#f5f1e8" stroke="#1a1712" strokeWidth="2.5" />
        {/* hair — bangs sweeping under the hat */}
        <path d="M 28 58 Q 28 36 60 35 Q 92 36 92 58 Q 92 62 90 66 Q 88 52 80 48 Q 82 56 78 62 Q 74 48 64 45 Q 66 52 62 56 Q 54 44 42 46 Q 46 50 44 56 Q 36 50 34 60 Q 30 64 30 66 Q 28 62 28 58 Z"
          fill="#1a1712" stroke="#1a1712" strokeWidth="2" />
        {/* hard hat */}
        <path d="M 26 44 Q 28 16 60 16 Q 92 16 94 44 Q 78 38 60 38 Q 42 38 26 44 Z"
          fill="#c8401a" stroke="#1a1712" strokeWidth="2.5" />
        <rect x="20" y="40" width="80" height="8" rx="4" fill="#c8401a" stroke="#1a1712" strokeWidth="2.5" />
        <path d="M 54 17 H 66 V 26 H 54 Z" fill="#f5f1e8" stroke="#1a1712" strokeWidth="2" />
        {/* tiny body — collared shirt */}
        <path d="M 46 94 Q 42 122 48 130 L 72 130 Q 78 122 74 94 Z"
          fill="#f5f1e8" stroke="#1a1712" strokeWidth="2.5" />
        <path d="M 52 96 L 60 104 L 68 96" fill="none" stroke="#1a1712" strokeWidth="2" />
        <path d="M 60 104 V 130" stroke="#1a1712" strokeWidth="1.5" />
        {/* left arm waving — pivots at the shoulder */}
        <motion.g
          animate={{ rotate: [0, 14, -4, 14, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 2.2, ease: 'easeInOut' }}
          style={{ transformBox: 'view-box', transformOrigin: '47px 100px' }}
        >
          <path d="M 47 100 Q 30 96 26 82" fill="none" stroke="#1a1712" strokeWidth="2.5" />
          <circle cx="25" cy="79" r="4.5" fill="#f5f1e8" stroke="#1a1712" strokeWidth="2" />
        </motion.g>
        {/* right arm holding clipboard */}
        <path d="M 73 102 Q 86 106 88 112" fill="none" stroke="#1a1712" strokeWidth="2.5" />
        <g transform="rotate(8 98 122)">
          <rect x="86" y="106" width="24" height="32" fill="#f5f1e8" stroke="#1a1712" strokeWidth="2" />
          <rect x="93" y="103" width="10" height="6" fill="#c8401a" stroke="#1a1712" strokeWidth="1.5" />
          <path d="M 90 117 H 106 M 90 123 H 106 M 90 129 H 100" stroke="#1a1712" strokeWidth="1.5" />
        </g>
        {/* feet */}
        <path d="M 52 130 L 52 138 M 68 130 L 68 138" stroke="#1a1712" strokeWidth="2.5" />
        <path d="M 46 139 H 56 M 63 139 H 73" stroke="#1a1712" strokeWidth="3.5" />
      </g>
      {/* face — big chibi eyes with highlights, occasional blink */}
      <g>
        <motion.g
          animate={{ scaleY: [1, 1, 0.08, 1, 1] }}
          transition={{ duration: 0.4, times: [0, 0.3, 0.5, 0.7, 1], repeat: Infinity, repeatDelay: 3.4 }}
          style={{ transformBox: 'view-box', transformOrigin: '60px 72px' }}
        >
          <ellipse cx="47" cy="72" rx="6" ry="8" fill="#1a1712" />
          <ellipse cx="73" cy="72" rx="6" ry="8" fill="#1a1712" />
          <circle cx="49" cy="69" r="2.2" fill="#f5f1e8" />
          <circle cx="75" cy="69" r="2.2" fill="#f5f1e8" />
          <circle cx="45.5" cy="75" r="1.2" fill="#f5f1e8" opacity="0.8" />
          <circle cx="71.5" cy="75" r="1.2" fill="#f5f1e8" opacity="0.8" />
        </motion.g>
        {/* smile */}
        <path d="M 55 84 Q 60 88 65 84" stroke="#1a1712" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* blush */}
        <ellipse cx="38" cy="80" rx="4" ry="2.5" fill="#c8401a" opacity="0.35" />
        <ellipse cx="82" cy="80" rx="4" ry="2.5" fill="#c8401a" opacity="0.35" />
      </g>
    </svg>
  )
}

export default function Byline() {
  return (
    <section id="byline" className="px-6 sm:px-12 lg:px-20 py-20 max-w-6xl mx-auto scroll-mt-8">
      <Folio page="03" title="The Byline" />
      <Reveal>
        <p className="kicker text-signal mb-4">01 — The Byline</p>
        <h2 className="font-display font-bold text-4xl sm:text-6xl leading-tight max-w-3xl">
          Filed by the consultant on the ground.
        </h2>
      </Reveal>

      <div className="grid lg:grid-cols-[1fr_auto] gap-12 mt-12">
        <div className="max-w-2xl space-y-6 text-lg leading-relaxed text-ink">
          <Reveal delay={0.05}>
            <p>
              I am a Technical Consultant at Dassault Systèmes India, based in
              Pune. Since June 2024, my beat has been the 3DEXPERIENCE
              platform: end-to-end deployment, configuration, performance
              tuning, ENOVIA customization — JPO development, TCL scripting,
              REST and SOAP web services — and the environment health work
              that keeps enterprise installations honest.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p>
              The road here ran through an internship on this same platform
              (Feb–Jun 2024) and, before that, a software engineering
              internship at Garg Group building warehouse inventory
              automation — one that ended with a scholarship for performance.
              The assignments since have spanned major enterprise deployments
              — IRS, MSIL, and L&amp;T Vizag among them — the kind of
              installations where a misconfigured role or a botched
              environment refresh doesn't stay a small problem for long.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <blockquote className="font-display italic text-3xl sm:text-4xl leading-snug text-ink border-l-4 border-signal pl-6 py-2 my-4">
              “The platform doesn't tell you what's wrong. You learn to read
              it — then you write it down so the next person doesn't have to.”
            </blockquote>
          </Reveal>
          <Reveal delay={0.2}>
            <p>
              That habit — writing it down — is why this report exists. The
              features that follow document three tools I specified and
              built to turn tribal knowledge and manual toil into systems:
              structured, auditable, and legible to whoever comes next.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <aside className="border-2 border-ink p-6 w-full lg:w-64 h-fit font-mono text-sm space-y-4">
            <p className="kicker text-signal">Reporter's File</p>
            <div className="border-2 border-ink/20 bg-paper-deep/40 px-6 pt-3">
              <ChibiReporter />
            </div>
            <p className="kicker text-ink-soft text-center">Fig. 1 — Artist's rendering</p>
            <dl className="space-y-3">
              <div><dt className="kicker text-ink-soft">Name</dt><dd>Sanah Naik</dd></div>
              <div><dt className="kicker text-ink-soft">Desk</dt><dd>Technical Consultant, Dassault Systèmes India</dd></div>
              <div><dt className="kicker text-ink-soft">Field time</dt><dd>June 2024 — present</dd></div>
              <div><dt className="kicker text-ink-soft">Base</dt><dd>Pune, India</dd></div>
              <div><dt className="kicker text-ink-soft">Deployments</dt><dd>IRS · MSIL · L&amp;T Vizag</dd></div>
            </dl>
            <Stamp className="px-3 py-1 text-xs" delay={0.3}>On Assignment</Stamp>
          </aside>
        </Reveal>
      </div>
    </section>
  )
}
