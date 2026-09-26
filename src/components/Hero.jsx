import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Sparkles, 
  Terminal, 
  Check, 
  Copy, 
  ArrowRight, 
  ShieldCheck, 
  Cpu, 
  Layers, 
  ExternalLink,
  Zap,
  Globe2
} from 'lucide-react'

export default function Hero() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('sanahnaik5@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const metrics = [
    { value: '2+ Yrs', label: 'Field Operations', detail: '3DEXPERIENCE & Infra' },
    { value: '3 Sites', label: 'Enterprise Deployments', detail: 'IRS · MSIL · L&T Vizag' },
    { value: '6 Tools', label: 'Shipped to Production', detail: 'Monitoring & Automation' },
    { value: '4 Certs', label: 'Cloud & Architecture', detail: 'AWS & Dassault Systèmes' },
  ]

  return (
    <section id="overview" className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-hidden">
      {/* Background radial glow spots */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/15 via-indigo-500/15 to-purple-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-8 items-center">
        {/* Left Column: Headline and Bio */}
        <div className="space-y-6">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-300 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Technical Consultant @ Dassault Systèmes India</span>
            <span className="text-slate-500">·</span>
            <span className="text-cyan-400 flex items-center gap-1">
              <Globe2 className="w-3 h-3" /> Pune
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-2"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Architecting <span className="gradient-accent">Enterprise Platforms</span>.
              <br />
              Engineering Modern Tools.
            </h1>
          </motion.div>

          {/* Subtitle / Narrative */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-xl font-normal"
          >
            Hi, I’m <span className="text-white font-semibold">Sanah Naik</span>. I specialize in deploying, scaling, and automating mission-critical <strong className="text-cyan-300 font-medium">3DEXPERIENCE</strong> environments, ENOVIA customizations (JPO, TCL, REST), and creating modern developer utilities like <a href="#fluent-notes" className="text-white underline decoration-cyan-400 hover:text-cyan-300 font-medium">Fluent Notes</a>.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-3.5 pt-2"
          >
            <a
              href="#fluent-notes"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Sparkles className="w-4 h-4 text-cyan-200" />
              <span>Explore Fluent Notes</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/10 text-sm font-medium transition-all"
            >
              <Layers className="w-4 h-4 text-slate-400" />
              <span>Enterprise Systems</span>
            </a>

            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-700/60 text-xs font-mono transition-all"
              title="Click to copy email address"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
              <span>{copied ? 'Copied sanahnaik5@gmail.com' : 'sanahnaik5@gmail.com'}</span>
            </button>
          </motion.div>
        </div>

        {/* Right Column: High-tech Live Console & Telemetry Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Glowing background ring */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500/30 to-purple-600/30 blur-xl opacity-50 group-hover:opacity-100 transition duration-1000 -z-10" />

          <div className="rounded-2xl bg-[#0e1422]/90 border border-white/10 p-6 backdrop-blur-xl shadow-2xl space-y-5">
            {/* Terminal Topbar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 font-mono text-xs text-slate-400">sanah@3dx-control-plane: ~</span>
              </div>
              <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-400 border border-cyan-800/60">
                ACTIVE
              </span>
            </div>

            {/* Simulated Live Console Log */}
            <div className="font-mono text-xs space-y-2.5 bg-black/40 p-4 rounded-xl border border-white/5">
              <div className="flex items-center gap-2 text-slate-400">
                <span className="text-cyan-400">❯</span>
                <span className="text-purple-300">platform.deploy</span>
                <span className="text-slate-500">--env=PRODUCTION --tier=ENOVIA</span>
              </div>
              <div className="text-emerald-400 pl-4 flex items-center gap-2">
                <Check className="w-3.5 h-3.5" />
                <span>3DEXPERIENCE R2024x/R2025x topology synced</span>
              </div>
              <div className="text-slate-300 pl-4 flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>Automated refresh pipeline: zero downtime</span>
              </div>
              <div className="text-cyan-300 pl-4 flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                <span>Active tenants: IRS · MSIL · L&amp;T Vizag</span>
              </div>
              <div className="text-slate-400 pl-4 pt-1 border-t border-white/5 flex items-center justify-between text-[11px]">
                <span className="text-slate-500">Latest build:</span>
                <span className="text-indigo-300">Fluent Notes v1.0.0 (Electron/Windows 11)</span>
              </div>
            </div>

            {/* Quick System Highlights */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <div className="text-[11px] font-mono text-slate-400">Core Expertise</div>
                <div className="text-sm font-semibold text-slate-200 mt-0.5">3DEXPERIENCE &amp; ENOVIA</div>
                <div className="text-[10px] text-cyan-400/90 font-mono mt-1">JPO · TCL · REST · HAProxy</div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <div className="text-[11px] font-mono text-slate-400">Tooling &amp; AI</div>
                <div className="text-sm font-semibold text-slate-200 mt-0.5">Agentic Automation</div>
                <div className="text-[10px] text-purple-400/90 font-mono mt-1">Antigravity · React · Python</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Metrics Bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4"
      >
        {metrics.map((m) => (
          <div
            key={m.label}
            className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/[0.07] backdrop-blur-md hover:border-cyan-500/30 transition-colors"
          >
            <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-cyan-300 font-mono">
              {m.value}
            </div>
            <div className="text-xs font-semibold text-slate-200 mt-1">
              {m.label}
            </div>
            <div className="text-[11px] font-mono text-slate-400 mt-0.5">
              {m.detail}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
