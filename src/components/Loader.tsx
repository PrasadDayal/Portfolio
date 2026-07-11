import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500); // Give it a slight delay before unmounting
          return 100;
        }
        return prev + 5;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: progress === 100 ? 0 : 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background text-foreground"
    >
      <div className="w-64 h-2 bg-foreground/5 dark:bg-white/5 rounded-full overflow-hidden mb-4 border border-cardBorder">
        <motion.div
          className="h-full bg-gradient-to-r from-primary via-secondary to-accent"
          initial={{ width: '0%' }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "linear" }}
        />
      </div>
      <div className="text-2xl font-bold font-mono tracking-widest text-gradient">
        {progress}%
      </div>
      <p className="mt-2 text-sm text-gray-500 uppercase tracking-widest animate-pulse">
        Initializing Portfolio...
      </p>
    </motion.div>
  );
};

export default Loader;