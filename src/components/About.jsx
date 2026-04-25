export default function About() {
  return (
    <section id="about" className="py-24 border-t border-white/5">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <h2 className="text-4xl md:text-6xl text-white font-bold italic tracking-tighter">
          Bridging logic <br /> & aesthetics.
        </h2>
        <p className="text-slate-400 leading-relaxed text-lg font-light">
          I specialize in the MERN stack, turning complex backend requirements into seamless, 
          luxury user experiences. My work at <span className="text-white">Dynamic AV</span> focuses on 
          high-performance, scalable web architecture.
        </p>
      </div>
    </section>
  );
}