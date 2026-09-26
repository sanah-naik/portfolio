import { motion } from 'framer-motion'
import { Briefcase, Building2, Calendar, MapPin, CheckCircle2, ChevronRight, Award } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      role: 'Technical Consultant',
      company: 'Dassault Systèmes India',
      location: 'Pune, India',
      period: 'June 2024 — Present',
      type: 'Full-time',
      highlight: 'Major Deployments: IRS · MSIL · L&T Vizag',
      description: 'Consulting and engineering on end-to-end 3DEXPERIENCE platform deployments, infrastructure scaling, and ENOVIA customizations for premier enterprise clients.',
      achievements: [
        'Orchestrated multi-tier 3DEXPERIENCE deployments (R2022x through R2026x) ensuring strict SLA compliance.',
        'Authored robust ENOVIA customizations: custom JPO development, TCL scripting, and REST/SOAP web services.',
        'Tuned enterprise infrastructure stacks: HAProxy load balancing, TomEE app servers, RHEL, and Oracle / MS SQL databases.',
        'Architected AccessPortal v4.0 and autonomous agent refresh automation to replace manual toil with auditable systems.'
      ],
      tech: ['3DEXPERIENCE', 'ENOVIA JPO', 'TCL', 'REST/SOAP', 'HAProxy', 'TomEE', 'RHEL', 'Oracle DB']
    },
    {
      role: 'Technical Consultant Intern',
      company: 'Dassault Systèmes India',
      location: 'Pune, India',
      period: 'Feb 2024 — June 2024',
      type: 'Internship',
      highlight: 'Platform Architecture & Tooling',
      description: 'Deep dive into 3DEXPERIENCE fundamentals, platform topologies, installation validation, and prototype tooling for enterprise deployment teams.',
      achievements: [
        'Mastered 3DEXPERIENCE core architecture, installation mechanics, and prerequisites validation.',
        'Prototyped initial log retrieval and diagnostics scripts adopted into field operations.',
        'Collaborated closely with senior architects to document platform dependency chains.'
      ],
      tech: ['3DEXPERIENCE Installation', 'Shell Scripting', 'Platform Diagnostics', 'Java']
    },
    {
      role: 'Software Engineering Intern',
      company: 'Garg Group',
      location: 'India',
      period: '2023',
      type: 'Internship',
      highlight: 'Awarded Performance Scholarship',
      description: 'Engineered warehouse supply chain inventory automation software, streamlining tracking and eliminating inventory discrepancies.',
      achievements: [
        'Developed automated inventory tracking modules, reducing manual auditing time significantly.',
        'Earned official recognition and a merit scholarship for outstanding technical performance.'
      ],
      tech: ['Java', 'SQL', 'Inventory Systems', 'Full Stack Automation']
    }
  ]

  const enterpriseClients = [
    { name: 'IRS', label: 'Enterprise PLM Deployment' },
    { name: 'MSIL', label: 'Maruti Suzuki India Limited' },
    { name: 'L&T Vizag', label: 'Larsen & Toubro Heavy Engineering' },
    { name: 'Dassault Systèmes', label: 'Internal Tooling & Consulting' },
  ]

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-16">
      {/* Section Header */}
      <div className="border-b border-white/10 pb-6 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-300 mb-2">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Professional Background</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Field Operations &amp; <span className="gradient-accent">Career Journey</span>
        </h2>
        <p className="text-slate-400 text-base max-w-2xl mt-1">
          Two years on the ground deploying, tuning, and untangling complex industrial platforms where reliability is non-negotiable.
        </p>
      </div>

      {/* Enterprise Deployment Client Badges */}
      <div className="mb-14 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-md">
        <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
          <Award className="w-4 h-4 text-cyan-400" />
          <span>Major Enterprise Deployment Sites Served</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {enterpriseClients.map((client) => (
            <div
              key={client.name}
              className="p-3.5 rounded-xl bg-black/40 border border-white/5 hover:border-cyan-500/30 transition-colors"
            >
              <div className="font-bold text-white text-base tracking-wide font-mono">
                {client.name}
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                {client.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-6 before:w-0.5 before:bg-gradient-to-b before:from-cyan-500 before:via-indigo-500 before:to-transparent">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.role + exp.company}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative pl-10 sm:pl-14"
          >
            {/* Timeline Dot */}
            <div className="absolute left-2.5 sm:left-4.5 -translate-x-1/2 top-1.5 w-4 h-4 rounded-full bg-[#0b0f17] border-2 border-cyan-400 shadow-md shadow-cyan-500/50 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            </div>

            {/* Content Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#0e1422]/90 border border-white/10 hover:border-white/20 backdrop-blur-xl shadow-xl space-y-4 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {exp.role}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-300">
                      {exp.type}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400 mt-1">
                    <span className="text-slate-200 font-medium flex items-center gap-1.5">
                      <Building2 className="w-4 h-4 text-cyan-400" />
                      {exp.company}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 sm:text-right">
                  <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Highlight Banner */}
              <div className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-cyan-950/40 to-indigo-950/40 border border-cyan-800/30 text-xs font-mono text-cyan-300">
                ★ {exp.highlight}
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {exp.description}
              </p>

              {/* Achievements */}
              <div className="space-y-2 pt-1">
                {exp.achievements.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.06] text-[11px] font-mono text-slate-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
