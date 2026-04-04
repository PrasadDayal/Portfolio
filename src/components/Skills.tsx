import React from 'react';
import { motion } from 'framer-motion';

// CUSTOMIZE YOUR SKILLS HERE
const skillsData = {
  "Frontend": [
    { name: 'HTML/CSS', level: 100 },
    { name: 'JavaScript', level: 100 },
    { name: 'React.js', level: 100 },
    // { name: 'Tailwind CSS', level: 100 },
  ],
  "Backend": [
    { name: 'Java', level: 100 },
    { name: 'Spring Boot', level: 100 },
    // { name: 'Node.js', level: 100 },
    { name: 'MySQL', level: 100 },
  ],
  "Tools & Others": [
    { name: 'Git & GitHub', level: 100 },
    { name: 'Postman', level: 100 },
    { name: 'VS Code', level: 100 },
    { name: 'Canva', level: 100 },
  ]
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-foreground/[0.02]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical <span className="text-gradient">Skills</span></h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skillsData).map(([category, skills], categoryIdx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIdx * 0.2 }}
              className="glass p-8 rounded-3xl border-t-4 border-t-primary hover:-translate-y-2 transition-transform duration-300"
            >
              <h3 className="text-2xl font-bold mb-8 text-center">{category}</h3>
              <div className="space-y-6">
                {skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex items-center gap-2 mb-2 text-sm font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>{skill.name}</span>
                    </div>
                    <div className="h-1.5 w-full bg-foreground/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="h-full bg-gradient-to-r from-primary to-secondary"
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

export default Skills;