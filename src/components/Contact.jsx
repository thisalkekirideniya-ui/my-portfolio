import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, ArrowUpRight } from "lucide-react";

const EMAIL = "kyntotechnologies@gmail.com";
const PHONE = "071 553 4876";
const PHONE_INTL = "+94715534876";

const CHANNELS = [
  { label: "Email", value: EMAIL, href: `mailto:${EMAIL}`, icon: Mail },
  { label: "Call", value: PHONE, href: `tel:${PHONE_INTL}`, icon: Phone },
  { label: "WhatsApp", value: PHONE, href: `https://wa.me/${PHONE_INTL.slice(1)}`, icon: MessageCircle },
];

const fieldClass =
  "peer w-full bg-transparent border-b border-slate-200 py-3 text-black focus:outline-none focus:border-accent transition-all placeholder-transparent";
const labelClass =
  "absolute left-0 top-3 text-slate-400 text-sm transition-all pointer-events-none peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:uppercase peer-focus:font-bold peer-focus:tracking-widest peer-focus:text-accent peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:font-bold peer-[:not(:placeholder-shown)]:tracking-widest";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-32 bg-white overflow-hidden">
      {/* Soft background glow */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-blue-400/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">

          {/* LEFT SIDE: Heading, text & channels */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 text-[10px] uppercase tracking-[0.25em] font-bold"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Available for projects
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-6 text-6xl md:text-7xl font-bold tracking-tighter italic uppercase text-black leading-none"
            >
              Let's <br />
              <span className="bg-gradient-to-r from-accent to-blue-500 bg-clip-text text-transparent pr-2">Connect.</span>
            </motion.h2>
            <p className="text-slate-500 mt-6 text-lg font-light leading-relaxed">
              Have a project in mind? I’m currently available for freelance work and senior positions.
            </p>

            <div className="mt-10 space-y-4">
              {CHANNELS.map(({ label, value, href, icon: Icon }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="group flex items-center gap-4 p-4 rounded-2xl border border-slate-100 bg-white/80 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:border-accent/30 hover:shadow-[0_15px_40px_rgba(170,59,255,0.12)] hover:-translate-y-0.5 transition-all"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-black text-white group-hover:bg-accent transition-colors">
                    <Icon size={20} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-400">{label}</p>
                    <p className="text-base md:text-lg font-medium text-black truncate">{value}</p>
                  </div>
                  <ArrowUpRight size={18} className="text-slate-300 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3 relative rounded-[2.5rem] p-[1px] bg-gradient-to-br from-accent/40 via-slate-100 to-blue-400/30 shadow-[0_30px_80px_rgba(0,0,0,0.06)]"
          >
            <div className="rounded-[2.5rem] bg-white/95 backdrop-blur-xl p-8 md:p-12">
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent mb-2">Start a project</p>
              <h3 className="text-2xl md:text-3xl font-bold italic tracking-tighter text-black mb-10">
                Tell me about your idea.
              </h3>

              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative">
                    <input id="name" type="text" required placeholder=" " value={form.name} onChange={update("name")} className={fieldClass} />
                    <label htmlFor="name" className={labelClass}>Your Name</label>
                  </div>
                  <div className="relative">
                    <input id="email" type="email" required placeholder=" " value={form.email} onChange={update("email")} className={fieldClass} />
                    <label htmlFor="email" className={labelClass}>Email Address</label>
                  </div>
                </div>

                <div className="relative">
                  <textarea id="message" rows="4" required placeholder=" " value={form.message} onChange={update("message")} className={`${fieldClass} resize-none`} />
                  <label htmlFor="message" className={labelClass}>Project Brief</label>
                </div>

                <div className="flex flex-col-reverse sm:flex-row items-start sm:items-center justify-between gap-6">
                  <p className="text-xs text-slate-400">I usually reply within 24 hours.</p>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    className="flex items-center gap-3 px-10 py-4 bg-black hover:bg-accent text-white rounded-full font-bold uppercase text-[10px] tracking-widest shadow-lg shadow-black/10 hover:shadow-accent/30 transition-colors"
                  >
                    Send Inquiry
                    <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                      →
                    </motion.span>
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
