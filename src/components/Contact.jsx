import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  ExternalLink, 
  MessageSquare,
  Sparkles
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  })

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text)
    if (type === 'email') {
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2000)
    } else {
      setCopiedPhone(true)
      setTimeout(() => setCopiedPhone(false), 2000)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const mailtoUrl = `mailto:sanahnaik5@gmail.com?subject=${encodeURIComponent(
      `[Portfolio] ${formData.subject} - from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`
    
    window.location.href = mailtoUrl
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 4000)
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-16">
      {/* Header */}
      <div className="border-b border-slate-200 dark:border-white/10 pb-6 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-700 dark:text-cyan-300 font-semibold mb-2">
          <Mail className="w-3.5 h-3.5" />
          <span>Connect &amp; Collaborate</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Let’s Build <span className="gradient-accent">Something Exceptional</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-base max-w-2xl mt-1">
          Whether you need 3DEXPERIENCE platform consulting, custom ENOVIA development, internal developer tooling, or want to discuss Fluent Notes — my inbox is open.
        </p>
      </div>

      <div className="grid lg:grid-cols-[1fr_1.15fr] gap-10">
        {/* Left Column: Direct channels */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
            Direct Communication Channels
          </h3>

          {/* Email Card */}
          <div className="p-5 rounded-2xl bg-white/90 dark:bg-[#0e1422]/90 border border-slate-200 dark:border-white/10 hover:border-cyan-500/40 shadow-xs hover:shadow-lg dark:shadow-xl backdrop-blur-xl transition-all group">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400">Email Address</div>
                  <a
                    href="mailto:sanahnaik5@gmail.com"
                    className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors font-mono"
                  >
                    sanahnaik5@gmail.com
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard('sanahnaik5@gmail.com', 'email')}
                className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/5 transition-colors shadow-xs"
                title="Copy email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* LinkedIn Card */}
          <a
            href="https://www.linkedin.com/in/sanah-naik-"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-white/90 dark:bg-[#0e1422]/90 border border-slate-200 dark:border-white/10 hover:border-indigo-500/40 shadow-xs hover:shadow-lg dark:shadow-xl backdrop-blur-xl transition-all group flex items-center justify-between block"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                <LinkedinIcon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono text-slate-500 dark:text-slate-400">Professional Network</div>
                <div className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors font-mono">
                  linkedin.com/in/sanah-naik-
                </div>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors" />
          </a>

          {/* GitHub Card */}
          <a
            href="https://github.com/sanah-naik"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-white/90 dark:bg-[#0e1422]/90 border border-slate-200 dark:border-white/10 hover:border-purple-500/40 shadow-xs hover:shadow-lg dark:shadow-xl backdrop-blur-xl transition-all group flex items-center justify-between block"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400">
                <GithubIcon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono text-slate-500 dark:text-slate-400">Code Repositories</div>
                <div className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors font-mono">
                  github.com/sanah-naik
                </div>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors" />
          </a>

          {/* Location & Phone Card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/[0.06] flex items-center gap-3">
              <MapPin className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
              <div>
                <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400">Base Location</div>
                <div className="text-xs font-medium text-slate-800 dark:text-slate-200">Pune, Maharashtra, India</div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/[0.06] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                <div>
                  <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400">Phone</div>
                  <div className="text-xs font-medium text-slate-800 dark:text-slate-200 font-mono">+91 90964 84786</div>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard('+919096484786', 'phone')}
                className="p-1.5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                title="Copy phone"
              >
                {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Quick Interactive Dispatch Form */}
        <div className="p-7 rounded-3xl bg-white/95 dark:bg-[#0e1422]/90 border border-slate-200 dark:border-white/10 shadow-xs hover:shadow-xl dark:shadow-2xl backdrop-blur-xl space-y-5">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/10 pb-4">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Send a Direct Message</h3>
            </div>
            <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 font-medium">Fast Response</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-700 dark:text-slate-300 font-medium">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Mercer"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-xs font-mono focus:outline-none focus:border-cyan-500 transition-colors shadow-xs"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-700 dark:text-slate-300 font-medium">Your Email</label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-xs font-mono focus:outline-none focus:border-cyan-500 transition-colors shadow-xs"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono text-slate-700 dark:text-slate-300 font-medium">Inquiry Topic</label>
              <select
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#080c14] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-xs font-mono focus:outline-none focus:border-cyan-500 transition-colors shadow-xs"
              >
                <option value="3DEXPERIENCE Deployment & Tuning">3DEXPERIENCE Deployment &amp; Tuning</option>
                <option value="Fluent Notes Feedback & Ideas">Fluent Notes Feedback &amp; Ideas</option>
                <option value="Enterprise Architecture & Consulting">Enterprise Architecture &amp; Consulting</option>
                <option value="General Conversation / Say Hello">General Conversation / Say Hello</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono text-slate-700 dark:text-slate-300 font-medium">Your Message</label>
              <textarea
                required
                rows={4}
                placeholder="Share your requirements, ideas, or feedback..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-xs font-mono focus:outline-none focus:border-cyan-500 transition-colors resize-none shadow-xs"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-600 via-sky-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white font-semibold text-xs tracking-wider uppercase shadow-md shadow-cyan-600/25 transition-all flex items-center justify-center gap-2"
            >
              {formSubmitted ? (
                <>
                  <Check className="w-4 h-4 text-white" />
                  <span>Opening Mail Client...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email Client</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
