import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2 } from 'lucide-react';
import StoreSyncImg from '../assets/StoreSync.png';
import ExpenseTrackerImg from '../assets/ExpenseTracker.png';
import kitchenIQImg from '../assets/KitchenIQ.png';

const projects = [
  {
    title: 'Kitchen IQ',
    description: 'An enterprise-grade solution for managing kitchen operations, inventory, and billing with real-time analytics.',
    tags: ['Spring Boot', 'React', 'MySQL'],
    image: kitchenIQImg,
    github: 'https://github.com/PrasadDayal/KitchenIQ',
    demo: '#',
  },
  {
    title: 'StoreSync',
    description: 'A synchronized inventory management system for retail stores, ensuring real-time stock updates across platforms.',
    tags: ['React', 'Node.js', 'MongoDB'],
    image: StoreSyncImg,
    github: '#',
    demo: '#',
  },
  {
    title: 'Expense Tracker',
    description: 'A personal finance manager to track expenses, set budgets, and visualize spending habits.',
    tags: ['React', 'TypeScript', 'Chart.js'],
    image: ExpenseTrackerImg,
    github: 'https://github.com/PrasadDayal/Expense-Tracker',
    demo: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-accent-primary">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-accent-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group glass rounded-3xl overflow-hidden flex flex-col border-transparent hover:border-accent-primary/30 shadow-xl"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white text-black hover:bg-accent-primary hover:text-white transition-colors">
                    <Github size={20} />
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white text-black hover:bg-accent-primary hover:text-white transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-accent-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-text-muted mb-6 leading-relaxed text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-accent-primary/10 text-accent-primary text-[10px] font-bold uppercase tracking-wider">
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

export default Projects;