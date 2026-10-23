import { motion } from "framer-motion";

const HIGHLIGHTS = [
  { value: "UI/UX", label: "Custom Design" },
  { value: "SEO", label: "Optimized Sites" },
  { value: "100%", label: "Responsive Builds" },
];

export default function Kynto() {
  return (
    <section id="kynto" className="relative py-24 px-6 md:px-20 bg-[#050505] overflow-hidden">
      <div className="pointer-events-none absolute -top-20 right-0 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[100px]" />

      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-5 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-3"
        >
          <h2 className="text-xs font-mono uppercase tracking-[0.5em] text-accent mb-4">Who We Are</h2>
          <p className="text-3xl md:text-5xl font-bold italic text-white tracking-tighter">
            Kynto <span className="bg-gradient-to-r from-accent to-blue-500 bg-clip-text text-transparent pr-2">Technologies.</span>
          </p>
          <p className="mt-6 text-slate-400 text-base md:text-lg font-light leading-relaxed max-w-2xl">
            Kynto Technologies is a Sri Lankan web studio building modern, high-performance websites for growing
            businesses. From e-commerce stores and corporate sites to cafés, restaurants, bakeries, hotels, salons,
            gyms, travel agencies, security firms and wedding brands, we combine clean design with solid engineering
            to help every client stand out online.
          </p>
        </motion.div>

        <div className="lg:col-span-2 grid grid-cols-3 gap-3 md:gap-4">
          {HIGHLIGHTS.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 md:p-6 text-center hover:border-accent/40 transition-colors"
            >
              <p className="text-2xl md:text-4xl font-bold italic tracking-tighter text-white">{h.value}</p>
              <p className="mt-2 text-[8px] md:text-[9px] uppercase tracking-[0.2em] text-slate-500 leading-snug">{h.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
