import React from 'react';
import { motion, useSpring, useTransform, animate, useMotionValue } from 'framer-motion';
import profilePhoto from '../assets/me.png';
import { Award, Code2, Rocket, BrainCircuit } from 'lucide-react';

const Counter = ({ from, to, label, icon: Icon }: { from: number; to: number; label: string; icon: any }) => {
  const count = useSpring(from, { stiffness: 50, damping: 30 });
  const rounded = useTransform(count, (latest) => Math.round(latest));

  React.useEffect(() => {
    const controls = animate(from, to, {
      duration: 2,
      onUpdate: (value) => count.set(value),
    });
    return () => controls.stop();
  }, [from, to, count]);

  return (
    <div className="flex flex-col items-center text-center">
      <div className="p-3 rounded-2xl bg-primary/10 text-primary mb-4">
        <Icon size={24} />
      </div>
      <div className="text-4xl font-bold tracking-tight mb-1">
        <motion.span>{rounded}</motion.span>+
      </div>
      <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/40 font-black">
        {label}
      </span>
    </div>
  );
};

const About = () => {
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
    <section id="about" className="py-28 px-6 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
          About <span className="text-gradient">Me</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Photo with 3D Tilt */}
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="perspective-1000"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div 
              style={{ rotateX, rotateY }}
              className="relative rounded-3xl overflow-hidden glass border-cardBorder shadow-2xl group transform-gpu"
            >
              <img src={profilePhoto} alt="Prasad Dayal" className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          </motion.div>

          {/* Bio & Stats */}
          <div className="flex flex-col gap-10">
            <motion.div 
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="glass p-10 rounded-3xl border-cardBorder relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <Code2 size={120} />
              </div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-primary rounded-full" />
                Who I Am
              </h3>
              <p className="text-foreground/70 leading-relaxed mb-6 text-lg">
                I'm a <span className="text-foreground font-semibold">Computer Engineering</span> student and an aspiring Full-Stack Developer with a deep focus on <span className="text-primary font-bold">Backend Architecture</span>.
              </p>
              <p className="text-foreground/70 leading-relaxed text-lg">
                I specialize in building robust systems using Java and Spring Boot, while maintaining a strong grasp of modern frontend technologies to deliver cohesive digital experiences.
              </p>
            </motion.div>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { to: 15, label: "Projects", icon: Rocket },
                { to: 100, label: "LeetCode", icon: BrainCircuit },
                { to: 10, label: "Tech Stack", icon: Code2 },
                { to: 2, label: "Experience", icon: Award }
              ].map((stat, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (idx * 0.1) }}
                  className="glass p-8 rounded-3xl border-cardBorder hover:border-primary/30 transition-all group"
                >
                  <Counter from={0} to={stat.to} label={stat.label} icon={stat.icon} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;