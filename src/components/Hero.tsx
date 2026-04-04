import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, ArrowRight } from 'lucide-react';
import profilePhoto from '../assets/me.jpg';

// Tech Logo SVGs for a premium look
const TechLogos = {
  React: () => (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"alt="React" className="w-5 h-5"/>
  ),
  Java: () => (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className="w-5 h-5"/>
  ),
  SpringBoot: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#6DB33F]">
      <path d="M21.57 6.44c-.75-.62-2.18-1.57-3.92-2.31a23.97 23.97 0 0 0-5.63-1.63V0h-1v2.5c-2.3.14-4.2.7-5.6 1.63-1.74.74-3.17 1.69-3.92 2.31-.5.42-.8 1.04-.8 1.7v7.72c0 .66.3 1.28.8 1.7.75.62 2.18 1.57 3.92 2.31a23.97 23.97 0 0 0 5.6 1.63V24h1v-2.5c2.3-.14 4.2-.7 5.63-1.63 1.74-.74 3.17-1.69 3.92-2.31.5-.42.8-1.04.8-1.7V8.14c0-.66-.3-1.28-.8-1.7zM12 18.25c-3.45 0-6.25-2.8-6.25-6.25S8.55 5.75 12 5.75s6.25 2.8 6.25 6.25-2.8 6.25-6.25 6.25zm0-10.5a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5z"/>
    </svg>
  ),
  Python: () => (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-5 h-5"/>
  ),
};

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Full-Stack Developer";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText.charAt(index));
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1 text-center lg:text-left"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 border border-foreground/10 text-primary text-sm font-mono mb-6"
          >
            <Terminal size={16} />
            <span>Hello, World!</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 text-foreground">
            I'm <span className="text-gradient">Prasad Dayal</span>
          </h1>
          
          <div className="h-10 md:h-12 mb-6">
            <h2 className="text-2xl md:text-3xl font-mono text-gray-500 dark:text-gray-400 flex items-center justify-center lg:justify-start">
              &gt; {text}
              <motion.span 
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-3 h-8 bg-primary ml-1"
              />
            </h2>
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0">
            Hi, I’m Prasad — a Full Stack Developer. I build responsive web apps, work with modern frameworks, and love turning ideas into real-world solutions.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold hover:shadow-[0_0_20px_rgba(0,242,255,0.4)] transition-all flex items-center gap-2"
            >
              Hire Me <ArrowRight size={20} />
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl glass font-bold hover:bg-foreground/5 transition-all text-foreground"
            >
              View Projects
            </motion.a>
          </div>
        </motion.div>

        {/* Right Column: Avatar/Image */}
        <div
          className="order-1 lg:order-2 flex justify-center relative"
        >
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-72 h-72 md:w-96 md:h-96"
          >
            {/* Multi-layered Animated Rings */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20 animate-spin-slow" />
            <div className="absolute inset-4 rounded-full border border-secondary/20 animate-[spin_12s_linear_infinite_reverse]" />
            <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-primary/5 via-transparent to-secondary/5 blur-2xl animate-pulse" />
            
            {/* Profile Photo Display */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute inset-8 rounded-full glass overflow-hidden border-4 border-white/5 shadow-[0_0_50px_rgba(56,189,248,0.15)] z-20 group"
            >
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                src={profilePhoto} 
                alt="Prasad Dayal" 
                className="w-full h-full object-cover rounded-[inherit]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 group-hover:to-black/10 transition-colors pointer-events-none" />
            </motion.div>
            
            {/* Decorative Glow Points */}
            <div className="absolute top-1/4 right-0 w-4 h-4 bg-primary rounded-full blur-sm animate-pulse" />
            <div className="absolute bottom-1/4 left-0 w-3 h-3 bg-secondary rounded-full blur-sm animate-pulse delay-1000" />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;