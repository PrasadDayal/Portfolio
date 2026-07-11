import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';

const Hero = () => {
  const roles = ["Java Backend Developer", "Full Stack Engineer", "Spring Boot Expert", "System Architect"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // Typewriter logic
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        if (displayedText === currentRole) {
          setTimeout(() => setIsDeleting(true), 2500);
        }
      } else {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        if (displayedText === "") {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 75 : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRoleIndex, typingSpeed]);

  // 3D Tilt effect for the Code Window
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 opacity-30 bg-grid-pattern bg-grid-mask" />
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1] 
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/20 blur-[120px] rounded-full"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.15, 0.1] 
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 -left-20 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full"
      />

      <div className="container max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="text-left">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-primary font-medium tracking-wide uppercase text-sm mb-4 block"
            >
              Available for opportunities 👋
            </motion.span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6">
              I'm <span className="text-gradient">Prasad</span>
            </h1>
            <div className="text-2xl md:text-4xl font-semibold text-foreground/80 mb-8 h-12 flex items-center">
              <span className="mr-2">{displayedText}</span>
              <span className="inline-block w-1 h-8 md:h-10 bg-primary animate-pulse" />
            </div>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-foreground/60 max-w-xl mb-10 leading-relaxed"
            >
              Crafting scalable, enterprise-grade backend systems with a focus on 
              <span className="text-foreground font-medium"> efficiency</span>, 
              <span className="text-foreground font-medium"> security</span>, and 
              <span className="text-foreground font-medium"> seamless user experiences</span>.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="btn-gradient px-8 py-3 rounded-xl text-sm font-semibold tracking-wide uppercase flex items-center gap-2"
              >
                View Projects <ArrowRight size={16} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://drive.google.com/file/d/1bXs7wkVWyKDInvVeUoKw7CqFc2DUYKB6/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-xl glass text-sm font-semibold tracking-wide uppercase border border-cardBorder text-foreground hover:border-primary/30 transition-all flex items-center gap-2"
              >
                Resume <Download size={16} />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Content: Interactive 3D Code Window */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
          whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative perspective-1000"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div 
            style={{ rotateX, rotateY }}
            className="glass rounded-2xl overflow-hidden border-cardBorder shadow-2xl w-full max-w-2xl mx-auto transform-gpu"
          >
            {/* Window Header */}
            <div className="bg-foreground/5 px-4 py-3 border-b border-cardBorder flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-xs font-mono text-foreground/40">UserController.java</span>
              <div className="w-10" />
            </div>
            
            {/* Code Area */}
            <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto bg-[#0a0f1c]/50 dark:bg-slate-950/50">
              <pre className="text-foreground/80">
                <code className="block">
                  <span className="text-purple-500">@RestController</span><br/>
                  <span className="text-purple-500">@RequestMapping</span>(<span className="text-emerald-500">"/api/users"</span>)<br/>
                  <span className="text-blue-500">public class</span> <span className="text-amber-400">UserController</span> {'{'} <br/>
                  &nbsp;&nbsp;<span className="text-blue-500">@Autowired</span><br/>
                  &nbsp;&nbsp;<span className="text-blue-500">private</span> UserService userService;<br/><br/>
                  &nbsp;&nbsp;<span className="text-purple-500">@GetMapping</span>(<span className="text-emerald-500">"/profile"</span>)<br/>
                  &nbsp;&nbsp;<span className="text-blue-500">public</span> ResponseEntity&lt;User&gt; getProfile() {'{'} <br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-500">return</span> ResponseEntity.ok(userService.getCurrentUser());<br/>
                  &nbsp;&nbsp;{'}'}<br/>
                  {'}'}
                </code>
              </pre>
            </div>
          </motion.div>
          
          {/* Animated Glow Orb */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2] 
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -z-10 inset-0 bg-primary/30 blur-[100px] rounded-full" 
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;