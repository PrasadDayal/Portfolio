import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import StoreSyncImg from '../assets/StoreSync.png';
import ExpenseTrackerImg from '../assets/ExpenseTracker.png';
import kitchenIQImg from '../assets/KitchenIQ.png';

// CUSTOMIZE YOUR PROJECTS HERE
const projects = [
  {
    title: 'StoreSync',
    description: 'StoreSync is a Spring Boot-based Inventory Management System designed to help businesses efficiently manage products, suppliers, and stock levels. It includes authentication, dashboard insights, and demand prediction features.',
    tags: ['Spring Boot', 'HTML', 'CSS', 'MySQL'],
    github: 'https://github.com/PrasadDayal/StoreSync', // ADD YOUR GITHUB LINK
    // demo: 'https://your-ecommerce-demo.com', // ADD YOUR DEMO LINK
    image: StoreSyncImg, // ADD YOUR PROJECT IMAGE URL
  },
  {
    title: 'Expense Tracker',
    description: 'A sophisticated, Splitwise-inspired web application designed to help users track shared expenses, manage group finances, and simplify debt settlements. The system features a modern React frontend and a robust Spring Boot backend, supporting real-time currency conversion and automated expense splitting.',
    tags: ['Spring Boot', 'React', 'MySQL'],
    github: 'https://github.com/PrasadDayal/Expense-Tracker', // ADD YOUR GITHUB LINK
    // demo: 'https://your-task-app-demo.com', // ADD YOUR DEMO LINK
    image: ExpenseTrackerImg, // ADD YOUR PROJECT IMAGE URL
  },
  {
    title: 'KitchenIQ',
    description: 'KitchenIQ is an intelligence-first decision support system designed to transform reactive restaurant management into a proactive, data-driven operation.By bridging the gap between customer demand and supply chain logistics, it empowers small businesses to reduce waste, optimize pricing, and increase margins.',
    tags: ['Spring Boot', 'React', 'Tailwind','MySQL'],
    github: 'https://github.com/PrasadDayal/KitchenIQ', // ADD YOUR GITHUB LINK
    // demo: 'https://your-weather-demo.com', // ADD YOUR DEMO LINK
    image: kitchenIQImg, // ADD YOUR PROJECT IMAGE URL
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="glass rounded-3xl overflow-hidden group flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/20 rounded-full hover:bg-primary hover:text-black transition-colors">
                    <Github size={20} />
                  </a>
                  {/* <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/20 rounded-full hover:bg-primary hover:text-black transition-colors">
                    <ExternalLink size={20} />
                  </a> */}
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 rounded-md bg-foreground/5 text-xs font-medium text-primary">
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