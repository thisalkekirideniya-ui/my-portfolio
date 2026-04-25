import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          
          {/* LEFT SIDE: Heading & Text */}
          <div className="lg:col-span-1">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-7xl font-bold tracking-tighter italic uppercase text-black leading-none"
            >
              Let's <br /> Connect.
            </motion.h2>
            <p className="text-slate-500 mt-6 text-lg font-light leading-relaxed">
              Have a project in mind? I’m currently available for freelance work and senior positions.
            </p>
            
            <div className="mt-10 space-y-2">
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-400">Email Me</p>
              <a href="mailto:thisalkekirideniya@gmail.com" className="text-xl font-medium text-black hover:text-accent transition-colors">
                thisalkekirideniya@gmail.com
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: Unique White Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 bg-white border border-slate-100 p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)]"
          >
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Name */}
                <div className="group relative">
                  <input 
                    type="text" 
                    placeholder=" "
                    className="peer w-full bg-transparent border-b border-slate-200 py-3 focus:outline-none focus:border-black transition-all placeholder-transparent"
                  />
                  <label className="absolute left-0 top-3 text-slate-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:uppercase peer-focus:font-bold peer-focus:text-black">
                    Your Name
                  </label>
                </div>

                {/* Email */}
                <div className="group relative">
                  <input 
                    type="email" 
                    placeholder=" "
                    className="peer w-full bg-transparent border-b border-slate-200 py-3 focus:outline-none focus:border-black transition-all placeholder-transparent"
                  />
                  <label className="absolute left-0 top-3 text-slate-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:uppercase peer-focus:font-bold peer-focus:text-black">
                    Email Address
                  </label>
                </div>
              </div>

              {/* Message */}
              <div className="group relative">
                <textarea 
                  rows="4"
                  placeholder=" "
                  className="peer w-full bg-transparent border-b border-slate-200 py-3 focus:outline-none focus:border-black transition-all placeholder-transparent resize-none"
                ></textarea>
                <label className="absolute left-0 top-3 text-slate-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:uppercase peer-focus:font-bold peer-focus:text-black">
                  Project Brief
                </label>
              </div>

              {/* Submit */}
              <div className="flex justify-end">
                <motion.button 
                  whileHover={{ scale: 1.02, backgroundColor: "#000", color: "#fff" }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="group flex items-center gap-3 px-10 py-4 border border-black text-black rounded-full font-bold uppercase text-[10px] tracking-widest transition-all"
                >
                  Send Inquiry
                  <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                    →
                  </motion.span>
                </motion.button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}