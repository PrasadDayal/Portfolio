import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { cn } from '../lib/utils';

const projects = [
  {
    title: 'E-Commerce Engine',
    description: 'High-performance backend built with Spring Boot and MySQL.',
    tags: ['Java', 'Spring Boot', 'MySQL'],
    size: 'large',
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: 'Fintech Dashboard',
    description: 'Real-time analytics for financial data.',
    tags: ['React', 'Framer Motion', 'Java'],
    size: 'small',
    color: 'from-purple-500/20 to-pink-500/20',
  },
  {
    title: 'Supply Chain Tracker',
    description: 'End-to-end visibility for logistics.',
    tags: ['Java', 'Spring', 'PostgreSQL'],
    size: 'small',
    color: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    title: 'Social Network API',
    description: 'Highly scalable microservices architecture.',
    tags: ['Spring Boot', 'Redis', 'Docker'],
    size: 'medium',
    color: 'from-orange-500/20 to-red-500/20',
  },
];

const BentoProjects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
            <p className="text-foreground/60">A collection of systems designed to scale.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={cn(
                "glass rounded-3xl p-8 relative overflow-hidden group border-cardBorder",
                project.size === 'large' ? "md:col-span-2 md:row-span-2" : "",
                project.size === 'medium' ? "md:col-span-2" : ""
              )}
            >
              <div className={cn("absolute inset-0 bg-gradient-to-br opacity-50 group-hover:opacity-80 transition-opacity", project.color)} />
              
              <div className="relative h-full flex flex-col justify-between z-10">
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">{project.title}</h3>
                  <p className="text-foreground/60 text-sm max-w-xs">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-foreground/5 text-xs font-medium border border-cardBorder">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="flex items-center gap-2 text-sm font-bold text-primary">
                    <Github size={18} /> View Code
                  </button>
                  <button className="flex items-center gap-2 text-sm font-bold text-foreground">
                    <ExternalLink size={18} /> Live Demo
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoProjects;