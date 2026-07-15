import { motion } from 'framer-motion'
import Reveal from './Reveal'

/* Abstract "cover art" — circuit/network linework rendered as print graphic.
   The trunk lines draw themselves on like a pen plotter when scrolled into view. */
function CoverArt() {
  const trunks = [
    'M 40 200 H 180 V 120 H 320 V 60 H 560',
    'M 40 130 H 120 V 190 H 420 V 230 H 560',
    'M 40 60 H 250 V 160 H 480',
  ]
  return (
    <svg viewBox="0 0 600 260" className="w-full h-auto" aria-hidden="true">
      <defs>
        <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
          <path d="M 30 0 L 0 0 0 30" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
        </pattern>
      </defs>
      <rect width="600" height="260" fill="url(#grid)" className="text-ink" />
      {/* network trunk lines — plotter draw-on */}
      <g stroke="#1a1712" strokeWidth="1.5" fill="none">
        {trunks.map((d, i) => (
          <motion.path
            key={d}
            d={d}
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1.4, delay: 0.3 + i * 0.25, ease: 'easeInOut' }}
          />
        ))}
      </g>
      {/* nodes pop in as the lines reach them */}
      {[[180, 120], [320, 60], [120, 190], [420, 230], [250, 160], [480, 160]].map(([x, y], i) => (
        <motion.rect
          key={`${x}-${y}`}
          x={x - 5} y={y - 5} width="10" height="10"
          fill="#f5f1e8" stroke="#1a1712" strokeWidth="1.5"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ type: 'spring', stiffness: 400, damping: 20, delay: 0.8 + i * 0.12 }}
          style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
        />
      ))}
      {/* signal nodes in accent — gentle transmit pulse */}
      {[[40, 130], [560, 60]].map(([cx, cy], i) => (
        <g key={`${cx}-${cy}`}>
          <motion.circle
            cx={cx} cy={cy} r="6" fill="none" stroke="#c8401a" strokeWidth="1.5"
            animate={{ scale: [1, 2.4], opacity: [0.7, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.9, ease: 'easeOut' }}
            style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
          />
          <circle cx={cx} cy={cy} r="6" fill="#c8401a" />
        </g>
      ))}
      <motion.text
        x="52" y="118" fontFamily="IBM Plex Mono, monospace" fontSize="9" letterSpacing="2" fill="#c8401a"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: true }} transition={{ delay: 1.2 }}
      >SIGNAL IN</motion.text>
      <motion.text
        x="472" y="48" fontFamily="IBM Plex Mono, monospace" fontSize="9" letterSpacing="2" fill="#c8401a"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: true }} transition={{ delay: 2.2 }}
      >RESOLVED</motion.text>
    </svg>
  )
}

/* Headline that sets itself one word at a time, like type being placed. */
function HeadlineWords({ text, className }) {
  const words = text.split(' ')
  return (
    <motion.h2
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      transition={{ staggerChildren: 0.08, delayChildren: 0.15 }}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: '110%' },
              show: { y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </motion.h2>
  )
}

const coverLines = [
  ['01', 'The Byline', 'Who filed this report'],
  ['02', 'AccessPortal', 'Order out of the inbox'],
  ['03', 'Refresh Automation', 'Agents on the night shift'],
  ['04', 'Role Navigator', 'Mapping the invisible'],
  ['05', 'Dispatches', 'Tools already shipped'],
]

export default function Cover() {
  return (
    <section className="min-h-screen flex flex-col px-6 sm:px-12 lg:px-20 py-8 max-w-6xl mx-auto">
      {/* masthead */}
      <Reveal>
        <div className="flex items-end justify-between border-b-4 border-ink pb-4">
          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-none">
            SANAH&nbsp;NAIK
          </h1>
          <div className="text-right shrink-0 pl-4">
            <div className="kicker text-signal">Field Report</div>
            <div className="kicker text-ink-soft">Vol. 01 — Issue No. 001</div>
          </div>
        </div>
        <div className="kicker flex justify-between pt-2 text-ink-soft">
          <span>Infrastructure &amp; Platform Consulting</span>
          <span className="hidden sm:inline">Pune, India</span>
          <span>Filed 2026</span>
        </div>
      </Reveal>

      {/* headline block */}
      <div className="flex-1 flex flex-col justify-center py-14">
        <Reveal delay={0.1}>
          <p className="kicker text-signal mb-5">Special Report — Enterprise Platforms</p>
        </Reveal>
        <HeadlineWords
          text="Systems fail quietly. Someone has to file the report."
          className="font-display font-semibold text-4xl sm:text-6xl lg:text-[4.5rem] leading-[1.05] max-w-4xl"
        />
        <Reveal delay={0.4}>
          <p className="font-display italic text-xl sm:text-2xl text-ink-soft mt-6 max-w-2xl">
            Two years in the field deploying, refreshing, and untangling the
            3DEXPERIENCE platform — and building the tools that keep it honest.
          </p>
        </Reveal>

        <Reveal delay={0.2} className="mt-12 text-ink">
          <CoverArt />
          <p className="kicker text-ink-soft mt-2">Fig. 0 — Request routed, diagnosed, resolved. The shape of the work.</p>
        </Reveal>
      </div>

      {/* cover lines / TOC teaser */}
      <Reveal delay={0.1}>
        <div className="rule-dotted pt-4 grid grid-cols-2 sm:grid-cols-5 gap-4">
          {coverLines.map(([n, title, tease]) => (
            <div key={n}>
              <span className="kicker text-signal">{n}</span>
              <p className="font-display font-semibold leading-tight">{title}</p>
              <p className="text-xs text-ink-soft">{tease}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
