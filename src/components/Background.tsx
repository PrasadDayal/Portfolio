import React from 'react';
import { motion } from 'framer-motion';

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Neon Grid Pattern - Adaptive Opacity */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-20 transition-opacity duration-300" />
      
      {/* Cyan Neon Blur - Subtle in light, intense in dark */}
      <motion.div 
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -top-24 -left-24 w-[600px] h-[600px] bg-cyan-400/10 dark:bg-cyan-500/20 rounded-full blur-[120px] transition-colors duration-300" 
      />
      
      {/* Magenta Neon Blur - Subtle in light, intense in dark */}
      <motion.div 
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }
        }
        className="absolute -bottom-24 -right-24 w-[600px] h-[600px] bg-purple-400/10 dark:bg-purple-600/20 rounded-full blur-[120px] transition-colors duration-300" 
      />

      {/* Cyber-Particles - Subtle in light, glowing in dark */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400/20 dark:bg-cyan-400/40 rounded-full dark:shadow-[0_0_5px_#22d3ee]"
          initial={{ 
            x: Math.random() * window.innerWidth, 
            y: Math.random() * window.innerHeight 
          }}
          animate={{
            y: [null, Math.random() * -100 - 50],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 10,
          }}
        />
      ))}
    </div>
  );
};

export default Background;
