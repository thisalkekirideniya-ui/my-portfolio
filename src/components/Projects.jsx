import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const PROJECTS = [
  { title: "AVSTORE.LK", cat: "E-Commerce", desc: "Production-grade retail ecosystem.", tech: ["React", "Firebase"] },
  { title: "DYNAMIC AV", cat: "Corporate", desc: "Modern architectural web presence.", tech: ["Tailwind", "Framer"] }
];

export default function Projects() {
  return (
    <section id="work" className="py-24">
      <h2 className="text-xs font-mono uppercase tracking-[0.5em] text-accent mb-16">Selected Works</h2>
      <div className="grid md:grid-cols-2 gap-10">
        {PROJECTS.map((p, i) => (
          <motion.div key={i} whileHover={{ y: -10 }} className="bg-card border border-white/5 p-10 rounded-[2.5rem] hover:border-accent/30 transition-all">
            <div className="flex justify-between mb-12">
              <span className="text-[10px] tracking-widest text-slate-500 uppercase">{p.cat}</span>
              <ExternalLink className="w-5 h-5" />
            </div>
            <h3 className="text-4xl font-bold mb-4 italic text-white">{p.title}</h3>
            <p className="text-slate-400 mb-8 font-light">{p.desc}</p>
            <div className="flex gap-2">
              {p.tech.map(t => <span key={t} className="text-[9px] px-3 py-1 bg-white/5 rounded-full uppercase">{t}</span>)}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}