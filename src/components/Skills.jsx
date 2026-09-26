import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Cpu, 
  Code2, 
  Server, 
  Database, 
  Terminal, 
  Layers, 
  Sparkles,
  Workflow,
  CheckCircle
} from 'lucide-react'

export default function Skills() {
  const skillCategories = [
    {
      id: 'platform',
      icon: Layers,
      title: 'Platform & Enterprise',
      color: 'from-cyan-500/20 to-blue-500/20',
      border: 'border-cyan-500/30',
      iconColor: 'text-cyan-600 dark:text-cyan-300',
      skills: [
        '3DEXPERIENCE (R2022x–R2026x)',
        'ENOVIA Customization (JPO)',
        'TCL Automation & MQL',
        '3DSpace Multi-Tier Setup',
        'Role & License Dependency Cartography',
        'Environment Refresh Automation',
        'Incident Triage & Log Diagnostics'
      ]
    },
    {
      id: 'languages',
      icon: Code2,
      title: 'Languages & Core Logic',
      color: 'from-purple-500/20 to-indigo-500/20',
      border: 'border-purple-500/30',
      iconColor: 'text-purple-600 dark:text-purple-300',
      skills: [
        'Java (Enterprise & JPO)',
        'TypeScript',
        'JavaScript (ESNext)',
        'Python',
        'TCL Scripting',
        'SQL (Oracle & MS SQL)',
        'Bash & PowerShell'
      ]
    },
    {
      id: 'frameworks',
      icon: Cpu,
      title: 'Frameworks & Modern Apps',
      color: 'from-emerald-500/20 to-teal-500/20',
      border: 'border-emerald-500/30',
      iconColor: 'text-emerald-600 dark:text-emerald-300',
      skills: [
        'React & Vite',
        'Electron (Fluent Notes Widget)',
        'Python FastAPI',
        'Spring Boot',
        'REST & SOAP Web Services',
        'Tailwind CSS',
        'Framer Motion'
      ]
    },
    {
      id: 'infra',
      icon: Server,
      title: 'Infrastructure & Cloud',
      color: 'from-amber-500/20 to-orange-500/20',
      border: 'border-amber-500/30',
      iconColor: 'text-amber-600 dark:text-amber-300',
      skills: [
        'HAProxy Load Balancing',
        'Apache TomEE & Web Server',
        'Red Hat Enterprise Linux (RHEL)',
        'Windows Server & Windows 11',
        'AWS Cloud (CLF-C02 Certified)',
        'LDAP Directory & Authentication',
        'Git & CI/CD Pipelines'
      ]
    },
    {
      id: 'ai',
      icon: Sparkles,
      title: 'Agentic AI & Internal Tools',
      color: 'from-rose-500/20 to-pink-500/20',
      border: 'border-rose-500/30',
      iconColor: 'text-rose-600 dark:text-rose-300',
      skills: [
        'Google Antigravity Platform',
        'Agent Skills & Scoping Design',
        'Build Constraints & Determinism',
        'Internal Diagnostic Tools Suite',
        'Zero-Data-Loss Local Architecture',
        'Cross-Environment Sync Pipelines'
      ]
    },
    {
      id: 'databases',
      icon: Database,
      title: 'Databases & Data Storage',
      color: 'from-blue-500/20 to-cyan-500/20',
      border: 'border-blue-500/30',
      iconColor: 'text-blue-600 dark:text-blue-300',
      skills: [
        'Oracle Database (3DX Backend)',
        'Microsoft SQL Server',
        'Relational Schema Optimization',
        'Query Performance Tuning',
        'Backup & Mirroring Strategies'
      ]
    }
  ]

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-16">
      {/* Header */}
      <div className="border-b border-slate-200 dark:border-white/10 pb-6 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-700 dark:text-cyan-300 font-semibold mb-2">
          <Cpu className="w-3.5 h-3.5" />
          <span>Technical Arsenal</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Capabilities &amp; <span className="gradient-accent">Tech Stack</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-base max-w-2xl mt-1">
          Bridging the gap between heavy enterprise infrastructure (3DEXPERIENCE, ENOVIA, HAProxy) and modern software craftsmanship (React, Electron, Python, Agentic AI).
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat, idx) => {
          const Icon = cat.icon
          return (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="p-6 rounded-3xl bg-white/90 dark:bg-[#0e1422]/90 border border-slate-200 dark:border-white/10 hover:border-cyan-500/40 shadow-xs hover:shadow-lg dark:shadow-xl backdrop-blur-xl flex flex-col justify-between group transition-all"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${cat.color} border ${cat.border} flex items-center justify-center ${cat.iconColor}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {cat.title}
                  </h3>
                </div>

                <div className="space-y-2 mt-4">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-2 text-xs font-mono text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-white/[0.03] px-3 py-2 rounded-xl border border-slate-200/80 dark:border-white/[0.05] hover:border-cyan-500/40 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 dark:bg-cyan-400/80" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Verified in production</span>
                <span className="text-cyan-700 dark:text-cyan-400 font-semibold">100% Active</span>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
