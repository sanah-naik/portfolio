import { ArrowUp, Sparkles, Heart } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-white/10 bg-[#07090e] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[1px] flex items-center justify-center">
            <div className="w-full h-full bg-[#0b0f17] rounded-[7px] flex items-center justify-center font-mono text-xs font-bold text-cyan-400">
              SN
            </div>
          </div>
          <div>
            <div className="text-sm font-bold text-white">Sanah Naik</div>
            <div className="text-[11px] font-mono text-slate-400">
              Technical Consultant &amp; Platform Engineer · Pune, India
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-slate-400 font-mono">
          <a href="#overview" className="hover:text-cyan-400 transition-colors">Overview</a>
          <a href="#fluent-notes" className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1">
            <Sparkles className="w-3 h-3" /> Fluent Notes
          </a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
          <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
          <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
          <a href="#credentials" className="hover:text-cyan-400 transition-colors">Credentials</a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
        </div>

        {/* Back to top & Socials */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/sanah-naik"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/sanah-naik-"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-white/5 hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-300 border border-white/5 transition-colors"
            title="Scroll to top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-500 gap-2">
        <div>
          © {new Date().getFullYear()} Sanah Naik. All rights reserved.
        </div>
        <div className="flex items-center gap-1.5">
          <span>Crafted with React, Tailwind CSS &amp; Framer Motion</span>
        </div>
      </div>
    </footer>
  )
}
