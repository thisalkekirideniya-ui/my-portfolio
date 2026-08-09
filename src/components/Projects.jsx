import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import avStoreImg from "../assets/avstore.png"; 
import dynamicImg from "../assets/dynamic.png";
import weddingImg from "../assets/wedding.png";
import eliteImg from "../assets/elite.png";
import toursImg from "../assets/tours.png";
import ceyloncakesImg from "../assets/ceyloncakes.png";
import summerImg from "../assets/summer.png";

const PRODUCTION_PROJECTS = [
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
  },
  { 
    title: "Shehani & Nethaka Wedding",
    cat: "Event Invitation", 
    desc: "A responsive digital wedding invitation for Shehani & Nethaka, elegantly showcasing event details, schedule, venue, and couple story online.", 
    tech: ["React", "Framer Motion", "Tailwind css", "email.js"],
    img: weddingImg,
    link: "https://wedding-invitation-nine-gray.vercel.app/"
  },
  {
    title: "Ceylon Cakes",
    cat: "Food & Beverage",
    desc: "A polished bakery and pastry storefront designed to showcase premium cakes, seasonal offerings, and seamless online ordering.",
    tech: ["React", "Tailwind v4", "Framer Motion", "Node.js"],
    img: ceyloncakesImg,
    link: "https://www.ceyloncakes.com/"
  },
  {
    title: "Summer Bliss Weddings",
    cat: "Wedding Services",
    desc: "A refined event-site experience for wedding planning and celebration stories, built to highlight packages, galleries, and client testimonials.",
    tech: ["React", "Firebase", "Tailwind css", "Express"],
    img: summerImg,
    link: "https://summerblissweddings.lk/"
  }
];

const UPCOMING_PROJECTS = [
  {
    title: "DIZANDA",
    cat: "Enterprise Security",
    desc: "A future-ready infrastructure site for DIZANDA, built to support security operations with enterprise-grade design and operational clarity.",
    tech: ["React", "Tailwind css", "Framer Motion", "Node.js"],
    img: null,
    link: "#"
  },
  {
    title: "Wovss Security",
    cat: "Cyber Defense",
    desc: "A strategic landing experience for Wovss Security, focused on trust, threat intelligence, and premium digital security services.",
    tech: ["React", "Tailwind css", "Firebase", "Express"],
    img: null,
    link: "#"
  },
  {
    title: "Elite Gym",
    cat: "Corporate",
    desc: "A modern responsive fitness website showcasing training programs, memberships, schedules, and coaching services to enhance user engagement and motivation.",
    tech: ["React.js", "Email.js", "Tailwind v4" ,"Node.js"],
    img: eliteImg, // Image mapping added
    link: "https://genetics-fitness-studio.vercel.app/" // Link mapping fixed
  },
  {
    title: "TNG Tourism",
    cat: "E-Commerce Website",
    desc: "A dynamic travel platform highlighting destinations, tour packages, and booking options, providing users a seamless experience to explore and plan trips.",
    tech: ["Node.js", "Firebase", "Express", "React"],
    // Left empty or fallback placeholder block handled dynamically in JSX below
    img: toursImg, 
    link: "https://tng-tours.vercel.app/"
  }
];

export default function Projects() {
  return (
    <section id="work" className="py-24 px-6 md:px-20 bg-[#050505]">
      
      {/* 1. SECTION MAIN HEADER */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-xs font-mono uppercase tracking-[0.5em] text-accent mb-4">Selected Works</h2>
        <p className="text-3xl md:text-5xl font-bold italic text-white tracking-tighter">Production-Grade Systems.</p>
      </motion.div>

      {/* 2. PRODUCTION LIVE PROJECTS GRID */}
      <div className="grid md:grid-cols-2 gap-12 mb-32">
        {PRODUCTION_PROJECTS.map((p, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative cursor-pointer"
            onClick={() => window.open(p.link, "_blank")}
          >
            <div className="relative h-64 md:h-[350px] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-[#111]">
              {p.img ? (
                <img 
                  src={p.img} 
                  alt={p.title} 
                  className="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" 
                />
              ) : (
                <div className="relative w-full h-full bg-white flex flex-col items-center justify-center gap-4 border border-slate-200 rounded-[2rem] shadow-xl">
                  <div className="absolute top-4 left-4 bg-black/90 text-white px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.4em] font-semibold shadow-sm">
                    Loading..... 🚧
                  </div>
                  <div className="flex flex-col items-center justify-center gap-2 px-6 text-center">
                    <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-slate-500">Funny Sticker Mood</span>
                    <div className="w-16 h-[1px] bg-slate-300 animate-pulse" />
                  </div>
                </div>
              )}
              <div className="absolute inset-0 bg-black/20 group-active:bg-black/40 transition-all" />
              <div className="absolute top-6 right-6 p-3 bg-accent text-black rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <ArrowUpRight size={20} />
              </div>
            </div>

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

      {/* 3. UPCOMING PROJECTS HEADER */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 border-t border-white/5 pt-20"
      >
        <h2 className="text-xs font-mono uppercase tracking-[0.5em] text-accent mb-4">Pipeline Architecture</h2>
        <p className="text-2xl md:text-4xl font-bold italic text-white tracking-tighter">Future Architecture.</p>
      </motion.div>

      {/* 4. UPCOMING PROJECTS LIST WITH FULL VISUAL TREATMENT */}
      <div className="grid md:grid-cols-2 gap-12">
        {UPCOMING_PROJECTS.map((p, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative cursor-pointer"
            onClick={() => p.link !== "#" && window.open(p.link, "_blank")}
          >
            {/* Visual Screenshot Display Box */}
            <div className="relative h-64 md:h-[350px] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-[#111]">
              {p.img ? (
                <img 
                  src={p.img} 
                  alt={p.title} 
                  className="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" 
                />
              ) : (
                <div className="relative w-full h-full bg-white flex flex-col items-center justify-center gap-4 border border-slate-200 rounded-[2rem] shadow-xl">
                  <div className="absolute top-4 left-4 bg-black/90 text-white px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.4em] font-semibold shadow-sm">
                    Loading
                  </div>
                  <div className="flex flex-col items-center justify-center gap-2 px-6 text-center">
                    <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-slate-500">Screenshot Pending</span>
                    <div className="w-16 h-[1px] bg-slate-300 animate-pulse" />
                  </div>
                </div>
              )}
              
              <div className="absolute inset-0 bg-black/20 group-active:bg-black/40 transition-all" />
              
              {/* Conditional Indicator tag inside card context */}
              <div className="absolute top-6 left-6 px-3 py-1 bg-black/60 backdrop-blur-md rounded-md border border-white/5 text-[8px] tracking-widest text-accent uppercase font-mono">
                Beta Build
              </div>
              
              {p.link !== "#" && (
                <div className="absolute top-6 right-6 p-3 bg-accent text-black rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight size={20} />
                </div>
              )}
            </div>

            {/* Content Details Rendering */}
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