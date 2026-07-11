import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Briefcase, GraduationCap, Code2, Globe, Server, Database } from 'lucide-react';

const milestones = [
  { 
    date: '2022 - Present', 
    title: 'Computer Engineering', 
    company: 'SPPU',
    icon: GraduationCap,
    desc: 'Pursuing B.E in Computer Engineering with a focus on Software Architecture and Algorithms.',
    tags: ['DSA', 'OOPs', 'Operating Systems']
  },
  { 
    date: '2023', 
    title: 'Java Developer Path', 
    company: 'Self-Directed',
    icon: Code2,
    desc: 'Mastered Java fundamentals and started building command-line applications and utility tools.',
    tags: ['Core Java', 'Collections', 'Multithreading']
  },
  { 
    date: '2024', 
    title: 'Backend Engineering', 
    company: 'Project Focus',
    icon: Server,
    desc: 'Developed scalable microservices using Spring Boot, focusing on RESTful design and security.',
    tags: ['Spring Boot', 'Hibernate', 'JWT']
  },
  { 
    date: '2025', 
    title: 'Full Stack & Cloud', 
    company: 'Portfolio',
    icon: Globe,
    desc: 'Integrated React frontend with Java backends and explored AWS for deployment and hosting.',
    tags: ['React', 'AWS', 'Docker']
  },
];

const ExperienceTimeline = () => {
  return (
    <section id="experience" className="py-28 px-6 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 blur-[150px] rounded-full -z-10" />
      
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-20 text-center">
          My <span className="text-gradient">Journey</span>
        </h2>

        <div className="relative border-l border-cardBorder ml-4 md:ml-0 md:left-1/2 md:-translate-x-px">
          {milestones.map((milestone, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className={`relative mb-16 md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12 md:text-right md:ml-0' : 'md:pl-12 md:ml-auto'}`}
            >
              {/* Dot */}
              <div className="absolute top-0 left-0 -translate-x-1/2 md:left-auto md:right-0 md:translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10 shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)]" />

              {/* Content */}
              <div className="glass p-8 rounded-3xl border-cardBorder hover:border-primary/30 transition-all group">
                <div className={`flex items-center gap-4 mb-4 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="p-3 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <milestone.icon size={24} />
                  </div>
                  <div>
                    <span className="text-sm font-mono text-primary font-bold">{milestone.date}</span>
                    <h3 className="text-xl font-bold">{milestone.title}</h3>
                  </div>
                </div>
                
                <p className="text-foreground/40 text-xs font-bold uppercase tracking-wider mb-4">{milestone.company}</p>
                <p className="text-foreground/70 leading-relaxed mb-6">{milestone.desc}</p>
                
                <div className={`flex flex-wrap gap-2 ${idx % 2 === 0 ? 'md:justify-end' : ''}`}>
                  {milestone.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full glass border-cardBorder text-[10px] font-semibold uppercase tracking-wider text-foreground/50">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;