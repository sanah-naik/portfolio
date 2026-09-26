import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Sparkles, 
  ExternalLink, 
  Copy, 
  Check, 
  Monitor, 
  Eye, 
  MousePointer2, 
  Palette, 
  ShieldCheck, 
  Layers, 
  ChevronRight,
  Maximize2,
  Minimize2,
  Terminal,
  Zap,
  CornerDownRight
} from 'lucide-react'
import { GithubIcon } from './BrandIcons'

export default function FluentNotesShowcase() {
  const [activeTab, setActiveTab] = useState(0)
  const [dockEdge, setDockEdge] = useState('right') // 'right' or 'left'
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [copiedClone, setCopiedClone] = useState(false)
  const [peekedNote, setPeekedNote] = useState(null)

  const [sampleNotes, setSampleNotes] = useState([
    {
      id: 1,
      title: '3DX IRS Deployment',
      color: 'yellow',
      items: [
        'Validate HAProxy round-robin rules',
        'Deploy custom ENOVIA JPO package',
        'Verify LDAP user mapping table'
      ],
      updated: '10m ago'
    },
    {
      id: 2,
      title: 'Fluent Notes v1.1 Ideas',
      color: 'mint',
      items: [
        'Add markdown task export',
        'Support multi-monitor bezel snapping',
        'Add global shortcut customize modal'
      ],
      updated: '1h ago'
    },
    {
      id: 3,
      title: 'Architecture Review',
      color: 'purple',
      items: [
        'Antigravity agent prompt tuning',
        'FastAPI async worker optimization',
        'Prepare slide deck for senior architects'
      ],
      updated: 'Yesterday'
    }
  ])

  const colorStyles = {
    yellow: {
      bg: 'bg-amber-100/90 dark:bg-amber-950/60',
      border: 'border-amber-300 dark:border-amber-400/40',
      pill: 'bg-amber-400 text-amber-950',
      accent: 'text-amber-700 dark:text-amber-400'
    },
    mint: {
      bg: 'bg-emerald-100/90 dark:bg-emerald-950/60',
      border: 'border-emerald-300 dark:border-emerald-400/40',
      pill: 'bg-emerald-400 text-emerald-950',
      accent: 'text-emerald-700 dark:text-emerald-400'
    },
    purple: {
      bg: 'bg-purple-100/90 dark:bg-purple-950/60',
      border: 'border-purple-300 dark:border-purple-400/40',
      pill: 'bg-purple-400 text-purple-950',
      accent: 'text-purple-700 dark:text-purple-400'
    },
    rose: {
      bg: 'bg-rose-100/90 dark:bg-rose-950/60',
      border: 'border-rose-300 dark:border-rose-400/40',
      pill: 'bg-rose-400 text-rose-950',
      accent: 'text-rose-700 dark:text-rose-400'
    },
    blue: {
      bg: 'bg-sky-100/90 dark:bg-sky-950/60',
      border: 'border-sky-300 dark:border-sky-400/40',
      pill: 'bg-sky-400 text-sky-950',
      accent: 'text-sky-700 dark:text-sky-400'
    }
  }

  const copyCloneCmd = () => {
    navigator.clipboard.writeText('git clone https://github.com/sanah-naik/Fluent-Notes.git')
    setCopiedClone(true)
    setTimeout(() => setCopiedClone(false), 2000)
  }

  return (
    <section id="fluent-notes" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-16">
      {/* Background ambient light */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-6 mb-12">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 dark:from-purple-500/20 dark:to-cyan-500/20 border border-purple-300 dark:border-purple-500/30 text-xs font-mono text-purple-700 dark:text-purple-300 font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-300" />
            <span>Featured Creator Project</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Fluent Notes <span className="gradient-accent">· Windows 11 Widget</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base max-w-2xl">
            A modern, unobtrusive edge-docked desktop sticky notes widget crafted with native Windows 11 Fluent Design, Acrylic glassmorphism, and instant hover-peek previews.
          </p>
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="https://github.com/sanah-naik/Fluent-Notes"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-white/10 hover:bg-slate-100 dark:hover:bg-white/15 text-slate-900 dark:text-white text-xs font-semibold border border-slate-200 dark:border-white/15 shadow-xs transition-all hover:scale-[1.02]"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub Repository</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>
        </div>
      </div>

      {/* Main Interactive Demo Card */}
      <div className="rounded-3xl bg-white dark:bg-[#0d121f] border border-slate-200 dark:border-white/10 shadow-xl shadow-slate-200/50 dark:shadow-2xl overflow-hidden mb-12">
        {/* Mock Window Top Bar */}
        <div className="px-6 py-4 bg-slate-100/90 dark:bg-[#0a0e17] border-b border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            </div>
            <span className="font-mono text-xs text-slate-700 dark:text-slate-300 font-medium">
              Interactive Simulation: Windows 11 Desktop Workspace
            </span>
          </div>

          {/* Interactive controls for the user */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="text-slate-500 dark:text-slate-400 font-mono text-[11px] mr-1 hidden sm:inline">Dock Position:</span>
            <button
              onClick={() => setDockEdge(dockEdge === 'right' ? 'left' : 'right')}
              className="px-2.5 py-1 rounded-lg bg-white dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 font-mono text-[11px] transition-colors shadow-xs"
            >
              Edge: <strong className="text-cyan-700 dark:text-cyan-400">{dockEdge.toUpperCase()}</strong>
            </button>

            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="px-2.5 py-1 rounded-lg bg-white dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 font-mono text-[11px] flex items-center gap-1 transition-colors shadow-xs"
            >
              {isCollapsed ? <Maximize2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400" /> : <Minimize2 className="w-3 h-3 text-amber-600 dark:text-amber-400" />}
              <span>{isCollapsed ? 'Expand Dock' : 'Collapse (Ctrl+Alt+H)'}</span>
            </button>
          </div>
        </div>

        {/* Mock Desktop Screen Area */}
        <div className="relative min-h-[460px] p-6 sm:p-8 bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100 dark:from-[#0c101c] dark:via-[#090d16] dark:to-[#0f1422] flex flex-col justify-between overflow-hidden">
          {/* Subtle desktop wallpaper grid line */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(15,23,42,0.08)_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-35 pointer-events-none" />

          {/* Underlying simulated app (e.g. IDE / Browser) demonstrating 100% click-through */}
          <div className="max-w-xl space-y-4 relative z-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-700 dark:text-slate-300 shadow-xs">
              <MousePointer2 className="w-3 h-3 text-cyan-600 dark:text-cyan-400" />
              <span>Native Click-Through Active (`setIgnoreMouseEvents`)</span>
            </div>
            <h4 className="text-2xl font-bold text-slate-900 dark:text-white">
              Underlying apps stay 100% interactive.
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              When collapsed, the dock folds into an ultra-thin bezel pill. Mouse events pass through completely to underlying code editors, browsers, and docs. Hovering over a tab lets you peek without stealing window focus!
            </p>

            <div className="p-4 rounded-xl bg-white/90 dark:bg-black/40 border border-slate-200 dark:border-white/5 font-mono text-xs text-slate-800 dark:text-slate-300 space-y-2 shadow-xs">
              <div className="text-slate-400 dark:text-slate-500">// Keyboard shortcuts configured:</div>
              <div className="flex items-center gap-4">
                <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-cyan-700 dark:text-cyan-300 border border-slate-300 dark:border-slate-700 font-bold">Ctrl + Alt + H</span>
                <span className="text-slate-600 dark:text-slate-400">Toggle Edge Dock Collapse</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-purple-700 dark:text-purple-300 border border-slate-300 dark:border-slate-700 font-bold">Ctrl + N</span>
                <span className="text-slate-600 dark:text-slate-400">Create New Note</span>
              </div>
            </div>
          </div>

          {/* SIMULATED FLUENT NOTES EDGE DOCK */}
          <div
            className={`absolute top-8 bottom-8 ${
              dockEdge === 'right' ? 'right-4' : 'left-4'
            } z-20 flex transition-all duration-300 pointer-events-auto`}
          >
            {isCollapsed ? (
              /* Collapsed Ultra-Thin Bezel Pill */
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                onClick={() => setIsCollapsed(false)}
                className="cursor-pointer px-2 py-6 rounded-full bg-white dark:bg-slate-900/90 hover:bg-slate-100 dark:hover:bg-slate-800 border border-cyan-500/50 shadow-xl shadow-cyan-500/20 backdrop-blur-md flex flex-col items-center justify-center gap-2"
                title="Click to expand Fluent Notes"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-ping" />
                <span className="[writing-mode:vertical-rl] font-mono text-[11px] font-bold tracking-widest text-cyan-700 dark:text-cyan-300 uppercase">
                  NOTES
                </span>
              </motion.div>
            ) : (
              /* Expanded Edge Dock Container */
              <motion.div
                initial={{ x: dockEdge === 'right' ? 40 : -40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="w-72 sm:w-80 rounded-2xl bg-white/95 dark:bg-[#141b2c]/90 border border-slate-200 dark:border-white/15 backdrop-blur-xl shadow-2xl flex flex-col p-4 overflow-hidden"
              >
                {/* Dock Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">📌</span>
                    <span className="font-semibold text-xs tracking-wide text-slate-900 dark:text-white">Fluent Notes</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => setIsCollapsed(true)}
                      className="p-1 rounded text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10"
                      title="Collapse to edge"
                    >
                      <Minimize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Tabs / Sticky Notes List */}
                <div className="py-3 flex gap-1.5 overflow-x-auto border-b border-slate-100 dark:border-white/5">
                  {sampleNotes.map((note, idx) => (
                    <button
                      key={note.id}
                      onClick={() => setActiveTab(idx)}
                      onMouseEnter={() => setPeekedNote(note)}
                      onMouseLeave={() => setPeekedNote(null)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium font-mono transition-all shrink-0 ${
                        activeTab === idx
                          ? 'bg-cyan-500/20 text-cyan-800 dark:text-cyan-300 border border-cyan-500/40 font-bold'
                          : 'bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                      }`}
                    >
                      #{idx + 1} {note.title.split(' ')[0]}
                    </button>
                  ))}
                </div>

                {/* Active Note Content */}
                <div className="flex-1 py-3 flex flex-col justify-between">
                  <div className={`p-4 rounded-xl border backdrop-blur-md transition-all ${colorStyles[sampleNotes[activeTab].color].bg} ${colorStyles[sampleNotes[activeTab].color].border}`}>
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-semibold text-sm text-slate-900 dark:text-slate-100">
                        {sampleNotes[activeTab].title}
                      </h5>
                      <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">
                        {sampleNotes[activeTab].updated}
                      </span>
                    </div>

                    <div className="space-y-1.5 mt-2">
                      {sampleNotes[activeTab].items.map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-800 dark:text-slate-200/90 font-mono">
                          <input type="checkbox" defaultChecked={i === 0} className="mt-0.5 rounded border-slate-300 dark:border-slate-700 text-cyan-600 focus:ring-0" />
                          <span className={i === 0 ? 'line-through text-slate-400 dark:text-slate-400' : ''}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pastel Theme Chooser */}
                  <div className="pt-3 flex items-center justify-between border-t border-slate-200 dark:border-white/5 text-xs text-slate-500 dark:text-slate-400">
                    <span className="text-[10px] font-mono">Pastel theme:</span>
                    <div className="flex gap-1.5">
                      {['yellow', 'mint', 'purple', 'rose', 'blue'].map((color) => (
                        <button
                          key={color}
                          onClick={() => {
                            const updated = [...sampleNotes]
                            updated[activeTab].color = color
                            setSampleNotes(updated)
                          }}
                          className="w-4 h-4 rounded-full border border-slate-300 dark:border-black/40 hover:scale-110 transition-transform"
                          style={{
                            backgroundColor: color === 'yellow' ? '#fef08a' :
                                             color === 'mint' ? '#bbf7d0' :
                                             color === 'purple' ? '#e9d5ff' :
                                             color === 'rose' ? '#fecdd3' : '#bae6fd'
                          }}
                          title={`Switch to ${color}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Dock Footer */}
                <div className="pt-2 text-center text-[10px] font-mono text-slate-400 dark:text-slate-500">
                  Hover tabs to peek · Drag bezel to reposition
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Quick Clone / Install Bar */}
        <div className="px-6 py-4 bg-slate-100/90 dark:bg-[#0a0e17] border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              <span>Clone &amp; Run Locally:</span>
            </span>
            <code className="text-xs font-mono bg-white dark:bg-black/50 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 text-cyan-800 dark:text-cyan-300 font-semibold dark:font-normal">
              git clone https://github.com/sanah-naik/Fluent-Notes.git
            </code>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={copyCloneCmd}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/10 text-slate-700 dark:text-slate-200 text-xs font-mono border border-slate-200 dark:border-white/10 transition-colors shadow-xs"
            >
              {copiedClone ? <Check className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
              <span>{copiedClone ? 'Copied' : 'Copy'}</span>
            </button>
            <a
              href="https://github.com/sanah-naik/Fluent-Notes"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 dark:bg-cyan-500 dark:hover:bg-cyan-400 text-white dark:text-black text-xs font-semibold shadow-md shadow-cyan-600/20 transition-all"
            >
              <span>Star on GitHub</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Feature Pillar Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-white/90 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.07] hover:border-cyan-500/40 dark:hover:border-cyan-500/30 shadow-xs hover:shadow-md transition-all group">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-3 group-hover:scale-105 transition-transform">
            <Monitor className="w-5 h-5" />
          </div>
          <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-1">
            Windows 11 Fluent &amp; Mica
          </h4>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Engineered with native acrylic glassmorphism, smooth animations, and edge docking that respects your screen real estate.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white/90 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.07] hover:border-indigo-500/40 dark:hover:border-indigo-500/30 shadow-xs hover:shadow-md transition-all group">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-3 group-hover:scale-105 transition-transform">
            <MousePointer2 className="w-5 h-5" />
          </div>
          <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-1">
            100% Click-Through Access
          </h4>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Collapse into the bezel with <code className="text-indigo-600 dark:text-indigo-300 font-semibold">Ctrl+Alt+H</code>. Mouse events pass straight through to your underlying IDE or browser.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white/90 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.07] hover:border-purple-500/40 dark:hover:border-purple-500/30 shadow-xs hover:shadow-md transition-all group">
          <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-3 group-hover:scale-105 transition-transform">
            <Eye className="w-5 h-5" />
          </div>
          <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-1">
            Instant Hover Peek
          </h4>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Hover over any tab to view its checklist or notes instantly without stealing application focus from your current work.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white/90 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.07] hover:border-emerald-500/40 dark:hover:border-emerald-500/30 shadow-xs hover:shadow-md transition-all group">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-3 group-hover:scale-105 transition-transform">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-1">
            100% Offline &amp; Local First
          </h4>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Zero cloud logins, zero tracking, and dual-mirror backups so you never lose critical deployment checklists or sudden epiphanies.
          </p>
        </div>
      </div>
    </section>
  )
}
