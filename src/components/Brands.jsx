import { motion } from "framer-motion";
import summerblissLogo from "../assets/brands/summerbliss.jpg";
import ceyloncakesLogo from "../assets/brands/ceyloncakes.jpg";
import darkroomLogo from "../assets/brands/darkroom.jpg";
import wovLogo from "../assets/brands/wov.jpg";
import dizandaLogo from "../assets/brands/dizanda.jpg";
import eliseoLogo from "../assets/brands/eliseo.jpg";

const BRANDS = [
  { name: "Summer Bliss Weddings", logo: summerblissLogo },
  { name: "Ceylon Cakes", logo: ceyloncakesLogo },
  { name: "Dark Room", logo: darkroomLogo },
  { name: "WOV Security", logo: wovLogo },
  { name: "Dizanda", logo: dizandaLogo },
  { name: "Eliseo Aesthetics", logo: eliseoLogo },
];

export default function Brands() {
  return (
    <section id="brands" className="relative py-20 bg-[#050505] overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-center px-6"
      >
        <h2 className="text-xs font-mono uppercase tracking-[0.5em] text-accent mb-4">Trusted By</h2>
        <p className="text-2xl md:text-4xl font-bold italic text-white tracking-tighter">Brands We Work With.</p>
      </motion.div>

      {/* Logo grid */}
      <div className="max-w-4xl mx-auto px-6 grid grid-cols-3 gap-4 md:gap-8">
        {BRANDS.map((b, i) => (
          <motion.div
            key={b.name}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className="aspect-square overflow-hidden rounded-2xl md:rounded-3xl border border-white/10 bg-white hover:border-accent/50 hover:shadow-[0_15px_40px_rgba(170,59,255,0.25)] transition-[border-color,box-shadow] duration-500"
          >
            <img src={b.logo} alt={b.name} title={b.name} loading="lazy" className="h-full w-full object-cover scale-105" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
