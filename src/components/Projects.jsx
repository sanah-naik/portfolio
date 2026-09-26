import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Layers, 
  ExternalLink, 
  Sparkles, 
  ShieldCheck, 
  Cpu, 
  GitBranch, 
  Terminal, 
  ArrowUpRight,
  Workflow,
  CheckCircle2,
  FileCode2,
  Lock,
  Boxes
} from 'lucide-react'

export default function Projects() {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 'accessportal',
      category: 'enterprise',
      title: 'AccessPortal v4.0',
      subtitle: 'Enterprise Access Governance Platform for 3DEXPERIENCE',
      description: 'Replaced unstructured email-driven access requests with a 14-section auditable web application. Features 8 distinct request forms, a 7-status lifecycle transition engine, and seamless LDAP integration.',
      tags: ['3DEXPERIENCE', 'LDAP Auth', 'Web Architecture', 'Access Governance', 'Process Automation'],
      highlight: '14 Spec Sections · 8 Forms · 7 Lifecycle States',
      metrics: [
        { label: 'Form Types', value: '8' },
        { label: 'Lifecycle States', value: '7' },
        { label: 'Audit Trail', value: '100%' },
      ],
      details: [
        'Eliminated untracked email approval chains and manual provisioning delays.',
        'Integrated with enterprise LDAP directory for instant identity validation.',
        'Structured 13-phase implementation roadmap for smooth multi-tenant deployment.'
      ]
    },
    {
      id: 'refresh-engine',
      category: 'ai',
      title: 'AI Environment Refresh Engine',
      subtitle: 'Autonomous Multi-Tier Platform Refresh on Google Antigravity',
      description: 'An autonomous agentic automation engine replacing hours of manual, error-prone 3DEXPERIENCE environment refreshes with deterministic agent runs configured with fine-grained skill scoping.',
      tags: ['Google Antigravity', 'Agentic AI', 'FastAPI', 'React', 'Python', 'Tailwind CSS'],
      highlight: 'Zero Downtime Refresh · Custom Agent Skills',
      metrics: [
        { label: 'Stack', value: 'FastAPI + React' },
        { label: 'Platform', value: 'Antigravity' },
        { label: 'Consistency', value: '100%' },
      ],
      details: [
        'Automated complex multi-tier database, application server, and service refresh tasks.',
        'Designed custom agent skills and optimized strict build execution rules.',
        'Eliminated human error from repetitive configuration resets.'
      ]
    },
    {
      id: 'role-navigator',
      category: 'enterprise',
      title: '3DX Role Navigator',
      subtitle: 'Visual Platform Cartography & Dependency Graph Engine',
      description: 'Transformed unspoken tribal knowledge into an interactive visual cartography tool. Maps tangled role sequencing, prerequisite constraints, and role-to-license chains across 3DEXPERIENCE environments.',
      tags: ['Cartography', 'Graph Modeling', 'Role Sequencing', 'License Management', '3DEXPERIENCE'],
      highlight: 'Explicit Dependency Chains · Zero Guesswork',
      metrics: [
        { label: 'Scope', value: 'Role ↔ License' },
        { label: 'Visibility', value: 'Full Map' },
        { label: 'Target', value: 'Admins & Architects' },
      ],
      details: [
        'Visualizes hidden prerequisite chains before assigning user roles.',
        'Prevents cascading permission errors and broken downstream configurations.',
        'Empowers support teams to troubleshoot license conflicts in minutes.'
      ]
    },
    {
      id: 'dispatches-suite',
      category: 'enterprise',
      title: 'Enterprise Internal Diagnostic Suite',
      subtitle: '6 Shipped Tools in Production Across Dassault Systèmes Client Sites',
      description: 'A comprehensive suite of internal utilities built from scratch and shipped to client production environments (IRS, MSIL, L&T Vizag) for proactive health monitoring and deployment acceleration.',
      tags: ['ENOVIA', 'HAProxy', 'Log Filtering', 'TomEE', 'RHEL', 'Production Monitoring'],
      highlight: 'Deployed on IRS, MSIL & L&T Vizag Deployments',
      metrics: [
        { label: 'Tools Shipped', value: '6' },
        { label: 'Status', value: 'In Production' },
        { label: 'Environments', value: 'Multi-Tenant' },
      ],
      details: [
        'LOG-01: Cross-environment log retrieval and incident triage accelerator.',
        'MON-02: Real-time service monitoring with automated failure notifications.',
        'VAL-03: Pre-installation prerequisite validation before platform setup.',
        'UPG-04 & DSH-05: Upgrade automation scripts and unified infrastructure health dashboard.'
      ]
    },
    {
      id: 'warehouse-automation',
      category: 'tools',
      title: 'Automated Warehouse Inventory Management',
      subtitle: 'Garg Group — Software Engineering Internship Project',
      description: 'Architected an automated inventory tracking and supply chain management system for Garg Group warehouses, drastically reducing discrepancies and earning an academic performance scholarship.',
      tags: ['Java', 'SQL', 'Inventory Automation', 'Full Stack', 'Scholarship Awarded'],
      highlight: 'Awarded Performance Scholarship',
      metrics: [
        { label: 'Impact', value: 'High Accuracy' },
        { label: 'Award', value: 'Scholarship' },
        { label: 'Domain', value: 'Supply Chain' },
      ],
      details: [
        'Streamlined stock reconciliation, barcode tracking, and order dispatch.',
        'Built resilient backend reporting APIs for real-time warehouse throughput.',
        'Earned official recognition and performance merit scholarship.'
      ]
    }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter)

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-300 mb-2">
            <Boxes className="w-3.5 h-3.5" />
            <span>Architecture &amp; Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Systems &amp; <span className="gradient-accent">Enterprise Work</span>
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mt-1">
            Proven specifications, production utilities, and autonomous agent systems deployed to keep complex platforms reliable and legible.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-white/[0.03] border border-white/10 self-start md:self-auto">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'enterprise', label: 'Enterprise & 3DX' },
            { id: 'ai', label: 'Agentic AI' },
            { id: 'tools', label: 'Developer Tools' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                filter === tab.id
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((p, idx) => (
            <motion.div
              key={p.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="p-6 sm:p-7 rounded-3xl bg-[#0e1422]/90 border border-white/10 hover:border-cyan-500/40 backdrop-blur-xl shadow-xl flex flex-col justify-between group transition-all"
            >
              <div className="space-y-4">
                {/* Header Tag and Highlight */}
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-cyan-300">
                    {p.highlight}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500 uppercase">
                    SYS-{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-400 mt-1">
                    {p.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed">
                  {p.description}
                </p>

                {/* Key Bullet Points */}
                <div className="space-y-1.5 pt-2 border-t border-white/5">
                  {p.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Metrics / Fact Strip */}
                <div className="grid grid-cols-3 gap-2 pt-3">
                  {p.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="p-2.5 rounded-xl bg-black/40 border border-white/5 text-center">
                      <div className="text-[10px] font-mono text-slate-500 uppercase">{m.label}</div>
                      <div className="text-xs font-semibold text-slate-200 mt-0.5">{m.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-5 mt-4 border-t border-white/10">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.06] text-[11px] font-mono text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  )
}
