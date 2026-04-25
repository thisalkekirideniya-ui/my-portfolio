/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import heroImg from "../assets/hero.jpeg"; 

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const typingSpeed = 150;

  const words = useMemo(() => ["Artist", "Full Stack Developer"], []);

  useEffect(() => {
    const i = loopNum % words.length;
    const fullText = words[i];
    const isLastWord = i === words.length - 1;

    let timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        if (displayText === fullText) {
          if (isLastWord) return; 
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
        }
      }
    }, isDeleting ? 50 : typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, words, typingSpeed]);

  return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center md:justify-between px-6 md:px-20 py-20 md:py-0 gap-10 overflow-hidden bg-[#050505]">
      
      {/* LEFT CONTENT */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 text-center md:text-left z-10"
      >
        <h2 className="text-xl md:text-3xl font-light text-slate-400 tracking-tight">
          Hello, It's Me
        </h2>
        
        <h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-white mt-2 mb-4 italic leading-tight">
          Thisal Kekirideniya
        </h1>

        <h3 className="text-2xl md:text-4xl font-medium text-slate-300">
          I'm <span className="text-accent font-bold border-r-2 border-accent pr-2 transition-all">
            {displayText}
          </span>
        </h3>

        <p className="text-slate-500 max-w-lg mx-auto md:mx-0 mt-6 text-base md:text-lg font-light leading-relaxed">
          Transforming business visions into production-ready reality. With deep expertise in the MERN stack, 
          I build secure, high-traffic platforms optimized for speed and seamless user experiences.
        </p>

        {/* SOCIAL MEDIA ICONS SECTION - CUSTOM SVGS */}
        <div className="flex items-center justify-center md:justify-start gap-6 mt-8">
          <SocialLink href="https://linkedin.com/in/yourusername" platform="linkedin" />
          <SocialLink href="https://facebook.com/yourusername" platform="facebook" />
          <SocialLink href="https://instagram.com/yourusername" platform="instagram" />
        </div>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 px-8 py-4 bg-accent text-black font-bold rounded-full uppercase text-xs tracking-widest shadow-[0_0_20px_rgba(170,59,255,0.3)]"
        >
          View My Work
        </motion.button>
      </motion.div>

      {/* RIGHT IMAGE SECTION */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="flex-1 relative flex justify-center items-center w-full"
      >
        <div className="absolute w-60 h-60 md:w-[450px] md:h-[450px] bg-accent/20 rounded-full blur-[80px] md:blur-[100px] -z-10 animate-pulse" />
        
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10 p-1.5 bg-white/5 backdrop-blur-sm"
        >
          <img 
            src={heroImg} 
            alt="Thisal Kekirideniya" 
            className="w-64 md:w-[400px] h-auto rounded-[1.8rem] md:rounded-[2.5rem] object-cover transition-all duration-700 cursor-pointer"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

// Helper Component with Embedded SVGs
function SocialLink({ href, platform }) {
  const icons = {
    linkedin: (
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z" />
    ),
    facebook: (
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    ),
    instagram: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </>
    ),
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -5 }}
      className="text-slate-400 transition-all duration-300 hover:text-accent"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {icons[platform]}
      </svg>
    </motion.a>
  );
}