import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="glow-mesh min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <footer className="py-12 text-center text-[10px] tracking-[0.5em] text-slate-600 border-t border-white/5">
        © 2026 THISAL BASILU • FULL STACK DEVELOPER
      </footer>
    </div>
  );
}