import { motion } from "framer-motion";
import { Check, Clock, Sparkles, ArrowRight } from "lucide-react";

const PACKAGES = [
  {
    name: "Silver",
    price: "50,000",
    delivery: "7 Days",
    features: [
      "4 Pages Website",
      "Modern responsive design (Mobile + Desktop)",
      "Basic UI/UX design",
      "Contact form (Email / WhatsApp)",
      "Social media integration",
      "Basic SEO setup",
    ],
  },
  {
    name: "Gold",
    price: "65,000 – 75,000",
    delivery: "15 Days",
    featured: true,
    features: [
      "4–5 Pages Website",
      "Professional modern design",
      "Fully responsive (Mobile, Tablet, Desktop)",
      "Admin Panel (manage content easily yourself)",
      "Gallery / Services management",
      "Contact form + Google Map integration",
      "Basic SEO optimization",
      "1 month free consultation",
    ],
  },
  {
    name: "Platinum",
    price: "80,000 – 85,000",
    delivery: "25 Days",
    features: [
      "5–6 Pages Website (custom structure)",
      "Premium UI/UX design (brand-based)",
      "Advanced Admin Panel (full control system)",
      "Dynamic content management",
      "SEO optimized structure",
      "Speed optimization",
      "Security setup",
      "6 month free consultation",
    ],
  },
];

const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0 },
};

export default function Packages() {
  return (
    <section id="packages" className="relative py-32 px-6 md:px-20 bg-[#050505] overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 h-[600px] w-[900px] max-w-full rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-xs font-mono uppercase tracking-[0.5em] text-accent mb-4">Pricing</h2>
          <p className="text-3xl md:text-5xl font-bold italic text-white tracking-tighter">Our Packages.</p>
          <p className="mt-5 text-slate-500 font-light max-w-xl mx-auto">
            Transparent pricing for every stage of your business — pick a plan and let's build something great.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 items-stretch">
          {PACKAGES.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
              whileHover={{ y: -10 }}
              className={`group relative rounded-[2rem] p-[1px] ${
                p.featured
                  ? "bg-gradient-to-b from-accent via-accent/40 to-blue-500/40 shadow-[0_0_60px_rgba(170,59,255,0.25)] md:-my-4"
                  : "bg-white/10 hover:bg-gradient-to-b hover:from-accent/50 hover:to-white/5"
              } transition-shadow duration-500`}
            >
              {/* Animated glow behind the featured card */}
              {p.featured && (
                <motion.div
                  aria-hidden
                  animate={{ opacity: [0.4, 0.8, 0.4] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -inset-1 rounded-[2rem] bg-accent/30 blur-2xl -z-10"
                />
              )}

              <div className="relative h-full flex flex-col rounded-[2rem] bg-[#0b0b0e] p-8 md:p-7 lg:p-9 overflow-hidden">
                {/* Shine sweep on hover */}
                <div className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent" />

                <div className="flex items-center justify-between gap-3 mb-6">
                  <h3 className="text-xl font-bold italic text-white tracking-tight">{p.name} Package</h3>
                  {p.featured && (
                    <span className="relative inline-flex items-center gap-1.5 overflow-hidden px-3 py-1 rounded-full bg-accent text-black text-[8px] font-bold uppercase tracking-[0.2em] whitespace-nowrap">
                      <Sparkles size={10} />
                      Most Recommended
                      <motion.span
                        aria-hidden
                        animate={{ x: ["-100%", "200%"] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                        className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/60 to-transparent"
                      />
                    </span>
                  )}
                </div>

                <div className="flex items-baseline gap-2 whitespace-nowrap">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Rs.</span>
                  <span className={`text-2xl md:text-xl lg:text-[1.65rem] xl:text-3xl font-bold tracking-tight tabular-nums ${p.featured ? "bg-gradient-to-r from-white to-accent bg-clip-text text-transparent" : "text-white"}`}>
                    {p.price}
                  </span>
                </div>

                <div className="mt-4 inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-[0.25em] text-slate-400">
                  <Clock size={12} className="text-accent" />
                  Delivery: {p.delivery}
                </div>

                <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <motion.ul
                  variants={listVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="space-y-4 flex-1"
                >
                  {p.features.map((f) => (
                    <motion.li key={f} variants={itemVariants} className="flex items-start gap-3 text-sm text-slate-300 font-light leading-relaxed">
                      <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${p.featured ? "bg-accent text-black" : "bg-accent/15 text-accent"}`}>
                        <Check size={12} strokeWidth={3} />
                      </span>
                      {f}
                    </motion.li>
                  ))}
                </motion.ul>

                <motion.a
                  href="#contact"
                  whileTap={{ scale: 0.97 }}
                  className={`mt-10 flex items-center justify-center gap-2 py-4 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${
                    p.featured
                      ? "bg-accent text-black hover:bg-white"
                      : "border border-white/15 text-white hover:bg-accent hover:border-accent hover:text-black"
                  }`}
                >
                  Get Started
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
