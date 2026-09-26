import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FluentNotesShowcase from './components/FluentNotesShowcase'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Credentials from './components/Credentials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-black">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FluentNotesShowcase />
        <Projects />
        <Experience />
        <Skills />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
