import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import avStoreImg from "../assets/avstore.png"; 
import dynamicImg from "../assets/dynamic.png";

const PROJECTS = [
  { 
    title: "AVSTORE.LK", 
    cat: "E-Commerce", 
    desc: "A high-performance retail ecosystem designed for professional audio gear, featuring a seamless checkout and real-time inventory.", 
    tech: ["React 19", "Firebase", "Tailwind v4", "Framer Motion", "Node.js"],
    img: avStoreImg,
    link: "https://avstore.lk"
  },
  { 
    title: "DYNAMIC AV", 
    cat: "Corporate", 
    desc: "A sleek, architectural web presence for Sri Lanka's leading AV provider, focused on high-end visuals and brand authority.", 
    tech: ["React", "Framer Motion", "Tailwind css"],
    img: dynamicImg,
    link: "https://dynamicavtechnologies.com"
  }
];

export default function Projects() {
  return (
    <section id="work" className="py-24 px-6 md:px-20 bg-[#050505]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-xs font-mono uppercase tracking-[0.5em] text-accent mb-4">Selected Works</h2>
        <p className="text-3xl md:text-5xl font-bold italic text-white tracking-tighter">Production-Grade Systems.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        {PROJECTS.map((p, i) => (
          <motion.div 
            key={i} 
            className="group relative cursor-pointer"
            onClick={() => window.open(p.link, "_blank")} // Makes the whole card clickable
          >
            {/* 1. FIXED IMAGE BOX: Contain and Fit */}
            <div className="relative h-64 md:h-[350px] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-[#111]">
              <img 
                src={p.img} 
                alt={p.title} 
                // Changed: Added object-top and removed grayscale
                className="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" 
              />
              
              {/* Overlay for "Click" feedback */}
              <div className="absolute inset-0 bg-black/20 group-active:bg-black/40 transition-all" />
              
              <div className="absolute top-6 right-6 p-3 bg-accent text-black rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <ArrowUpRight size={20} />
              </div>
            </div>

            {/* 2. CONTENT SECTION */}
            <div className="mt-6 px-2">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[10px] tracking-[0.3em] text-accent/80 uppercase font-bold">{p.cat}</span>
                <div className="h-[1px] w-6 bg-white/10"></div>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold italic text-white mb-3 group-hover:text-accent transition-colors">
                {p.title}
              </h3>
              
              <p className="text-slate-500 mb-5 text-sm md:text-base font-light leading-relaxed line-clamp-2">
                {p.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {p.tech.map(t => (
                  <span key={t} className="text-[8px] px-3 py-1 border border-white/5 bg-white/5 rounded-full uppercase tracking-tighter text-slate-400">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}