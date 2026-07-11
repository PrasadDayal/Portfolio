import React from 'react';
import { motion } from 'framer-motion';

const technologies = [
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
];

const TrustedTechnologies = () => {
  return (
    <section className="py-16 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-10 text-center">
        <h3 className="text-sm font-semibold text-foreground/50 uppercase tracking-widest">Trusted Technologies</h3>
      </div>
      
      <div className="relative flex overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-16 pr-16"
        >
          {[...technologies, ...technologies].map((tech, i) => (
            <div key={i} className="flex items-center gap-3">
              <img src={tech.icon} alt={tech.name} className="w-8 h-8 object-contain" />
              <span className="text-lg font-semibold text-foreground/80">{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedTechnologies;
