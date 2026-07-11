import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const competencies = [
    "Java Backend Engineering", "Spring Boot", "Microservices Architecture", "React.js", "MySQL", 
    "System Design", "REST APIs", "AWS Cloud", "Docker", "TypeScript", "Full Stack Development"
  ];

  return (
    <footer className="relative py-12 border-t border-cardBorder overflow-hidden">
      {/* Continuous Marquee Ticker */}
      <div className="absolute top-0 left-0 w-full py-4 bg-primary/5 border-b border-cardBorder overflow-hidden">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-12 items-center"
        >
          {[...competencies, ...competencies].map((item, idx) => (
            <span key={idx} className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/40 flex items-center gap-3">
              <span className="w-1 h-1 bg-primary rounded-full" />
              {item}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-12 text-center">
        <p className="text-sm text-foreground/50 font-medium tracking-wide">
          © {new Date().getFullYear()} Prasad Dayal. <span className="text-primary">Built with passion and precision.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;