import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const experiences = [
  {
    month: 'Jan 2025 - Feb 2025',
    role: 'Full-Stack Web Developer',
    company: 'NeLeap IT and Training Solutions',
    desc: 'Led the migration of legacy monolith to microservices using Spring Boot and React.',
  },
  {
    year: '2021 - 2023',
    role: 'Backend Engineer',
    company: 'DataFlow Systems',
    desc: 'Optimized MySQL queries reducing latency by 40% for high-traffic financial APIs.',
  },
  {
    year: '2019 - 2021',
    role: 'Full-Stack Developer',
    company: 'InnoWeb Agency',
    desc: 'Built responsive web applications for various clients using React and Node.js.',
  },
];

const ExperienceTimeline = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" className="py-24 px-6 bg-[#0c0c0c]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center">My <span className="text-gradient">Journey</span></h2>

        <div ref={containerRef} className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-white/5 -translate-x-1/2" />
          <motion.div 
            style={{ scaleY }}
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent -translate-x-1/2 origin-top"
          />

          <div className="space-y-24">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 top-2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 z-10" />

                <div className="md:w-1/2 pl-8 md:pl-0">
                  <div className={`glass p-8 rounded-3xl border-white/5 hover:border-primary/30 transition-colors ${
                    idx % 2 === 0 ? 'text-left' : 'md:text-right'
                  }`}>
                    <span className="text-primary font-mono text-sm mb-2 block">{exp.year}</span>
                    <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                    <h4 className="text-gray-400 font-medium mb-4">{exp.company}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{exp.desc}</p>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;