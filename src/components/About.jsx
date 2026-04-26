import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-20 bg-[#050505] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-16 items-start"
        >
          {/* Left Side: The Narrative */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-[0.5em] text-accent mb-8">
              The Journey
            </h2>
            <h3 className="text-4xl md:text-7xl text-white font-bold italic tracking-tighter leading-none mb-10">
              Concept to <br /> 
              <span className="text-accent not-italic">Production.</span>
            </h3>
            
            <div className="space-y-6 text-slate-400 text-lg font-light leading-relaxed max-w-md">
              <p>
                I am a <span className="text-white font-medium">Full Stack Developer</span> focused on the complete engineering lifecycle. I don't just build features; I bridge the gap between a business vision and a live, high-traffic reality.
              </p>
              <p>
                My expertise lies in the **end-to-end execution** of digital products. From designing scalable database schemas to crafting immersive interfaces and managing cloud deployments, I take full ownership of the stack.
              </p>
            </div>
          </div>

          {/* Right Side: The Lifecycle Milestones */}
          <div className="grid grid-cols-1 gap-8 mt-12 md:mt-24">
            <AboutCard 
              number="01"
              title="Foundation"
              desc="Engineering the core logic and secure data layers that power modern applications, ensuring every system is built on a rock-solid base."
            />
            <AboutCard 
              number="02"
              title="Interface"
              desc="Translating complex functionalities into high-fidelity, interactive experiences where performance and design move in perfect sync."
            />
            <AboutCard 
              number="03"
              title="Deployment"
              desc="Automating the path to production through CI/CD pipelines and cloud orchestration, delivering scalable solutions to the global stage."
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AboutCard({ number, title, desc }) {
  return (
    <motion.div 
      whileHover={{ x: 10 }}
      className="group flex gap-6 p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-accent/20 transition-all duration-500"
    >
      <span className="text-accent font-mono text-sm mt-1">{number}</span>
      <div>
        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
          {title}
        </h4>
        <p className="text-slate-500 text-sm leading-relaxed font-light">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}