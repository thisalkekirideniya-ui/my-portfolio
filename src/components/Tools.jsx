/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { 
  SiReact, SiMongodb, SiExpress, SiNodedotjs, 
  SiTailwindcss, SiJavascript, SiFirebase, 
  SiDocker, SiGithub, SiVite, SiFramer, SiPostman 
} from "react-icons/si";

const toolsData = [
  { name: "React", Icon: SiReact, drift: { x: -30, y: 30 }, color: "text-[#61DAFB]" },
  { name: "MongoDB", Icon: SiMongodb, drift: { x: 30, y: -20 }, color: "text-[#47A248]" },
  { name: "Express", Icon: SiExpress, drift: { x: -25, y: -30 }, color: "text-[#ffffff]" },
  { name: "Node.js", Icon: SiNodedotjs, drift: { x: 35, y: 30 }, color: "text-[#339933]" },
  { name: "Tailwind", Icon: SiTailwindcss, drift: { x: -40, y: -25 }, color: "text-[#06B6D4]" },
  { name: "JavaScript", Icon: SiJavascript, drift: { x: 25, y: -35 }, color: "text-[#F7DF1E]" },
  { name: "Firebase", Icon: SiFirebase, drift: { x: 40, y: -10 }, color: "text-[#FFCA28]" },
  { name: "Docker", Icon: SiDocker, drift: { x: -35, y: -30 }, color: "text-[#2496ED]" },
  { name: "GitHub", Icon: SiGithub, drift: { x: -40, y: -10 }, color: "text-[#ffffff]" },
  { name: "Vite", Icon: SiVite, drift: { x: -30, y: 15 }, color: "text-[#646CFF]" },
  { name: "Framer", Icon: SiFramer, drift: { x: 25, y: -25 }, color: "text-[#0055FF]" },
  { name: "Postman", Icon: SiPostman, drift: { x: 20, y: 30 }, color: "text-[#FF6C37]" },
];

const toolVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: (drift) => ({
    opacity: 1, // Set to 1 so they are always visible
    scale: 1,
    x: [0, drift.x, 0],
    y: [0, drift.y, 0],
    transition: {
      opacity: { duration: 0.6 },
      scale: { duration: 0.6 },
      x: { repeat: Infinity, duration: 10 + Math.random() * 5, ease: "easeInOut" },
      y: { repeat: Infinity, duration: 8 + Math.random() * 5, ease: "easeInOut" },
    },
  }),
};

export default function Tools() {
  return (
    <section id="tools" className="py-24 px-6 md:px-20 bg-[#050505] overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center md:text-left mb-20"
      >
        <h2 className="text-xs font-mono uppercase tracking-[0.5em] text-accent mb-4">Stack & Tools</h2>
        <p className="text-4xl md:text-6xl font-bold italic text-white tracking-tighter max-w-2xl">
          Digital Architecture.
        </p>
      </motion.div>

      <div className="grid grid-cols-4 md:grid-cols-6 gap-8 md:gap-16 items-center justify-items-center">
        {toolsData.map((tool) => {
          const IconComponent = tool.Icon; 
          return (
            <motion.div
              key={tool.name}
              custom={tool.drift}
              variants={toolVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group relative flex flex-col items-center"
            >
              {/* Box container */}
              <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center p-3 rounded-2xl border border-white/5 bg-[#111] group-hover:border-white/20 group-hover:bg-[#161616] transition-all duration-500 shadow-xl">
                <IconComponent 
                  size={32} 
                  // Removed text-slate-600 and opacity-40 so the color is always there
                  className={`transition-all duration-500 group-hover:scale-110 ${tool.color}`} 
                />
              </div>
              
              {/* Tool Name */}
              <span className="absolute -bottom-8 text-[9px] font-mono tracking-widest text-accent opacity-0 group-hover:opacity-100 transition-opacity uppercase">
                {tool.name}
              </span>

              {/* Glowing background matching the icon color */}
              <div className={`absolute inset-0 blur-3xl opacity-0 group-hover:opacity-30 transition-opacity -z-10 bg-current ${tool.color}`} />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}