import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Kynto from "./components/Kynto";
import Brands from "./components/Brands";
import Tools from "./components/Tools"; // Added
import Projects from "./components/Projects";
import About from "./components/About";
import Packages from "./components/Packages";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="bg-[#050505] min-h-screen overflow-x-hidden selection:bg-accent selection:text-black">
      <Navbar />
      {/* Each section handles its own internal max-width for a better full-bleed look */}
      <main>
        <Hero />
        <Kynto />
        <Brands />
        <Tools /> 
        <Projects />
        <About />
        <Packages />
        <Contact />
      </main>
      <footer className="py-12 text-center text-[10px] tracking-[0.5em] text-slate-600 border-t border-white/5 bg-[#050505]">
        © 2026 THISAL  KEKIRIDENIYA • FULL STACK ARCHITECT
      </footer>
    </div>
  );
}