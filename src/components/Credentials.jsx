import { motion } from 'framer-motion'
import { Award, GraduationCap, ShieldCheck, CheckCircle2, Cloud, Sparkles } from 'lucide-react'

export default function Credentials() {
  const certifications = [
    {
      title: 'Infrastructure Consultant Certification',
      issuer: 'Dassault Systèmes',
      date: 'March 2025',
      badge: 'Certified Consultant',
      color: 'from-cyan-500/20 to-blue-500/20',
      border: 'border-cyan-500/30'
    },
    {
      title: '3DEXPERIENCE Architecture Fundamentals — Level 1',
      issuer: 'Dassault Systèmes',
      date: 'June 2025',
      badge: 'Architecture Level 1',
      color: 'from-purple-500/20 to-indigo-500/20',
      border: 'border-purple-500/30'
    },
    {
      title: '3DEXPERIENCE Installation Fundamentals Essentials — Level 1',
      issuer: 'Dassault Systèmes',
      date: 'February 2025',
      badge: 'Installation Essentials',
      color: 'from-emerald-500/20 to-teal-500/20',
      border: 'border-emerald-500/30'
    },
    {
      title: 'AWS Certified Cloud Practitioner (CLF-C02)',
      issuer: 'Amazon Web Services',
      date: '2024',
      badge: 'AWS Certified',
      color: 'from-amber-500/20 to-orange-500/20',
      border: 'border-amber-500/30'
    }
  ]

  return (
    <section id="credentials" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-16">
      {/* Header */}
      <div className="border-b border-slate-200 dark:border-white/10 pb-6 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-700 dark:text-emerald-300 font-semibold mb-2">
          <Award className="w-3.5 h-3.5" />
          <span>Verified Credentials</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Certifications &amp; <span className="gradient-accent">Academic Foundations</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-base max-w-2xl mt-1">
          Formal credentials in cloud computing, enterprise 3DEXPERIENCE platform installation, and platform infrastructure architecture.
        </p>
      </div>

      {/* Certifications Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {certifications.map((cert, idx) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="p-5 rounded-2xl bg-white/90 dark:bg-[#0e1422]/90 border border-slate-200 dark:border-white/10 hover:border-cyan-500/40 shadow-xs hover:shadow-lg dark:shadow-xl backdrop-blur-xl flex flex-col justify-between group transition-all"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                  <ShieldCheck className="w-4 h-4" />
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 font-medium">
                  {cert.badge}
                </span>
              </div>

              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">
                  {cert.issuer}
                </p>
              </div>
            </div>

            <div className="pt-4 mt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>Verified</span>
              <span className="text-cyan-700 dark:text-cyan-400 font-semibold">{cert.date}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Education & Merit Scholarship */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Degree */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-6 sm:p-7 rounded-3xl bg-white/95 dark:bg-[#0e1422]/90 border border-slate-200 dark:border-white/10 shadow-xs hover:shadow-lg dark:shadow-xl backdrop-blur-xl flex items-start gap-4"
        >
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-mono text-cyan-700 dark:text-cyan-400 font-semibold">Degree Conferred</span>
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">2020 — 2024</span>
            </div>
            <h4 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
              Bachelor of Engineering in Computer Engineering
            </h4>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Bharati Vidyapeeth's College of Engineering for Women, Pune
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 pt-1 leading-relaxed">
              Rigorous fundamentals in computer architecture, distributed systems, operating systems, and object-oriented software engineering.
            </p>
          </div>
        </motion.div>

        {/* Merit Recognition */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-6 sm:p-7 rounded-3xl bg-white/95 dark:bg-[#0e1422]/90 border border-slate-200 dark:border-white/10 shadow-xs hover:shadow-lg dark:shadow-xl backdrop-blur-xl flex items-start gap-4"
        >
          <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0">
            <Sparkles className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-mono text-purple-700 dark:text-purple-400 font-semibold">Merit Recognition</span>
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">2023</span>
            </div>
            <h4 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
              Garg Group Performance Merit Scholarship
            </h4>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Awarded for Warehouse Inventory Automation Excellence
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 pt-1 leading-relaxed">
              Selected for exceptional contribution in designing, debugging, and deploying warehouse inventory tracking modules with zero operational defects.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
