import React from 'react';
import { motion } from 'framer-motion';

const skills = {
  Backend: [
    { name: 'Java', level: 90 },
    { name: 'Spring Boot', level: 85 },
    { name: 'MySQL', level: 80 },
    { name: 'Microservices', level: 75 },
    { name: 'Redis', level: 70 },
  ],
  Frontend: [
    { name: 'React', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'Framer Motion', level: 75 },
    { name: 'Redux', level: 70 },
  ],
};

const SkillsCloud = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Technical <span className="text-gradient">Proficiency</span></h2>

        <div className="grid md:grid-cols-2 gap-12">
          {Object.entries(skills).map(([category, items], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, x: idx === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-10 rounded-3xl border-white/10"
            >
              <h3 className="text-2xl font-bold mb-8 text-primary">{category}</h3>
              <div className="space-y-6">
                {items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-300">{skill.name}</span>
                      <span className="text-primary text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className={`h-full bg-gradient-to-r ${idx === 0 ? 'from-primary to-secondary' : 'from-accent to-primary'}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsCloud;