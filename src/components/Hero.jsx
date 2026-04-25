/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import heroImg from "../assets/hero.jpeg"; 

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const typingSpeed = 150;

  // The final word in this array will be the one that stops the animation
  const words = useMemo(() => ["Artist", "Full Stack Developer"], []);

  useEffect(() => {
    const i = loopNum % words.length;
    const fullText = words[i];
    const isLastWord = i === words.length - 1;

    let timer = setTimeout(() => {
      if (!isDeleting) {
        // TYPING LOGIC
        setDisplayText(fullText.substring(0, displayText.length + 1));
        
        if (displayText === fullText) {
          // If it's the last word, we STOP here and don't set isDeleting to true
          if (isLastWord) {
             return; 
          }
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        // DELETING LOGIC
        setDisplayText(fullText.substring(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
        }
      }
    }, isDeleting ? 50 : typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, words]);

  return (
    <section className="h-screen flex flex-col md:flex-row items-center justify-between px-10 md:px-20 gap-10 overflow-hidden">
      
      {/* LEFT CONTENT */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 text-left z-10"
      >
        <h2 className="text-2xl md:text-3xl font-light text-slate-400 tracking-tight">
          Hello, It's Me
        </h2>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mt-2 mb-4 italic">
          Thisall Kekirideniya
        </h1>

        <h3 className="text-3xl md:text-4xl font-medium text-slate-300">
          I'm <span className="text-accent font-bold border-r-2 border-accent pr-2 transition-all">
            {displayText}
          </span>
        </h3>

        <p className="text-slate-500 max-w-lg mt-8 text-lg font-light leading-relaxed">
          Transforming business visions into production-ready reality. With deep expertise in the MERN stack, 
          I build secure, high-traffic platforms optimized for speed, conversion, and seamless user experiences.
        </p>

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
        initial={{ opacity: 0, scale: 0.8, x: 50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="flex-1 relative flex justify-center items-center"
      >
        {/* Luxury Glow behind photo */}
        <div className="absolute w-72 h-72 md:w-[450px] md:h-[450px] bg-accent/20 rounded-full blur-[100px] -z-10 animate-pulse" />
        
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="relative rounded-[3rem] overflow-hidden border border-white/10 p-2 bg-white/5 backdrop-blur-sm"
        >
          {/* YOUR PHOTO SOURCE */}
          <img 
            src={heroImg} 
            alt="Thisal Kekirideniya" 
            className="w-72 md:w-[400px] h-auto rounded-[2.5rem] object-cover grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
