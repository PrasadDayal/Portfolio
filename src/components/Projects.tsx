import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Maximize2 } from 'lucide-react';
import StoreSyncImg from '../assets/StoreSync.png';
import ExpenseTrackerImg from '../assets/ExpenseTracker.png';
import kitchenIQImg from '../assets/KitchenIQ.png';
import ProjectGallery from './ProjectGallery';

interface Project {
  title: string;
  description: string;
  tags: string[];
  images: string[];
  github: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: 'Kitchen IQ',
    description: 'An enterprise-grade solution for managing kitchen operations, inventory, and billing with real-time analytics.',
    tags: ['Spring Boot', 'React', 'JWT', 'MySQL'],
    images: [kitchenIQImg],
    github: 'https://github.com/PrasadDayal/KitchenIQ',
    demo: '#',
  },
  {
    title: 'StoreSync',
    description: 'A synchronized inventory management system for retail stores, ensuring real-time stock updates across platforms.',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    images: [StoreSyncImg],
    github: '#',
    demo: '#',
  },
  {
    title: 'Expense Tracker',
    description: 'A personal finance manager to track expenses, set budgets, and visualize spending habits.',
    tags: ['React', 'TypeScript', 'Chart.js', 'Local Storage'],
    images: [ExpenseTrackerImg],
    github: 'https://github.com/PrasadDayal/Expense-Tracker',
    demo: '#',
  },
];

const ProjectCard = ({ project, idx, setSelectedProject }: { project: Project, idx: number, setSelectedProject: any }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY }}
      className="glass rounded-3xl overflow-hidden border-cardBorder shadow-lg flex flex-col group hover:border-primary/40 transition-all duration-300 perspective-1000 transform-gpu"
    >
      {/* Project Image */}
      <div 
        className="relative h-64 overflow-hidden cursor-pointer" 
        onClick={() => setSelectedProject({ title: project.title, images: project.images })}
      >
        <img 
          src={project.images[0]} 
          alt={project.title} 
          loading="lazy"
          width="600"
          height="400"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-background/40 backdrop-blur-[2px]">
          <div className="bg-white/20 p-4 rounded-full backdrop-blur-md border border-white/30 text-white transform scale-90 group-hover:scale-100 transition-transform">
            <Maximize2 size={24} />
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-8 flex flex-col flex-grow relative">
        <div className="absolute top-0 right-8 -translate-y-1/2 flex gap-2">
          {project.tags.slice(0, 2).map(tag => (
            <span key={tag} className="px-3 py-1 rounded-full bg-primary text-white text-[10px] font-bold uppercase tracking-wider shadow-lg">
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
        <p className="text-foreground/70 mb-6 leading-relaxed text-sm line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map(tag => (
            <span key={tag} className="px-3 py-1 rounded-full bg-foreground/5 border border-cardBorder text-[10px] font-semibold uppercase tracking-wider text-foreground/60">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-6">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-bold text-foreground/60 hover:text-primary transition-all hover:translate-x-1"
          >
            <Github size={18} /> Code
          </a>
          {project.demo && (
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-bold text-foreground/60 hover:text-primary transition-all hover:translate-x-1"
            >
              <ExternalLink size={18} /> Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<{title: string, images: string[]} | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <section id="projects" className="py-28 px-6 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] -z-10" />
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            A showcase of my recent work in backend architecture and full-stack development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <ProjectCard 
              key={idx} 
              project={project} 
              idx={idx} 
              setSelectedProject={setSelectedProject} 
            />
          ))}
        </div>
      </div>
      
      <AnimatePresence>
        {selectedProject && (
          <ProjectGallery 
            project={selectedProject} 
            currentImageIndex={currentImageIndex}
            setCurrentImageIndex={setCurrentImageIndex}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
