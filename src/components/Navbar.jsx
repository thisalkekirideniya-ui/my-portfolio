import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-6 backdrop-blur-xl bg-black/20 border-b border-white/5"
    >
      {/* Logo Area */}
      <div className="text-white font-bold tracking-tighter text-xl">
        THISAL<span className="text-accent">.</span>
      </div>

      {/* Nav Links - Hidden on very small screens or made compact */}
      <div className="flex gap-4 md:gap-8 text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.5em] font-semibold text-slate-400">
        <a href="#tools" className="hover:text-accent transition-all duration-300">Tools</a>
        <a href="#work" className="hover:text-accent transition-all duration-300">Work</a>
        <a href="#about" className="hover:text-accent transition-all duration-300">About</a>
        <a href="#contact" className="px-4 py-2 border border-accent/20 rounded-full hover:bg-accent hover:text-black transition-all duration-500">
          Contact
        </a>
      </div>
    </motion.nav>
  );
}