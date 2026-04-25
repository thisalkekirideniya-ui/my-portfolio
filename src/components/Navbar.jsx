import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-10 py-8 backdrop-blur-md border-b border-white/5">
      <div className="text-white font-bold tracking-tighter text-xl">BASILU<span className="text-accent">.</span></div>
      <div className="flex gap-8 text-[10px] uppercase tracking-[0.4em] font-semibold text-slate-400">
        <a href="#work" className="hover:text-accent transition-colors">Work</a>
        <a href="#about" className="hover:text-accent transition-colors">About</a>
        <a href="#contact" className="hover:text-white transition-colors">Contact</a>
      </div>
    </nav>
  );
}