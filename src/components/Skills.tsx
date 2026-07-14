import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Terminal, 
  Globe, 
  Cpu, 
  Database, 
  Layers, 
  Wrench, 
  Github, 
  GitBranch, 
  Palette,
  Cloud,
  Box,
  Puzzle
} from 'lucide-react';

const skills = [
  { name: 'Java', icon: Cpu, color: '#f89820' },
  { name: 'Spring Boot', icon: Box, color: '#6db33f' },
  { name: 'React', icon: Globe, color: '#61dbfb' },
  { name: 'MySQL', icon: Database, color: '#00758f' },
  { name: 'Docker', icon: Layers, color: '#2496ed' },
  { name: 'Bootstrap', icon: Box, color: '#563d7c' },
  { name: 'Python', icon: Puzzle, color: '#3178c6' },
  { name: 'JavaScript', icon: Code2, color: '#f7df1e' },
  { name: 'HTML', icon: Globe, color: '#e34c26' },
  { name: 'CSS', icon: Palette, color: '#264de4' },
  { name: 'Node.js', icon: Terminal, color: '#339933' },
  { name: 'Git', icon: GitBranch, color: '#f05032' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills <span className="text-accent-primary">&</span> Abilities
          </h2>
          <div className="h-1 w-20 bg-accent-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ 
                y: -10, 
                backgroundColor: 'rgba(var(--accent-primary-rgb), 0.05)',
                borderColor: skill.color 
              }}
              className="glass p-8 rounded-2xl flex flex-col items-center justify-center gap-4 group cursor-default border-transparent"
            >
              <div 
                className="p-4 rounded-xl transition-all duration-300 group-hover:scale-110"
                style={{ color: skill.color }}
              >
                <skill.icon size={40} />
              </div>
              <span className="font-bold text-sm text-foreground/80 group-hover:text-foreground transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;