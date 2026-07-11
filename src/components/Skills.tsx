import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Server, Layout, Database, Wrench, Code, FileText, Globe, Cpu, Terminal, Layers, Database as DbIcon, GitBranch, Search, Palette } from 'lucide-react';

interface SkillItem {
  name: string;
  icon: any;
}

interface SkillCategory {
  name: string;
  icon: any;
  color: string;
  skills: SkillItem[];
  gridClass?: string;
}

const skillsData: SkillCategory[] = [
  {
    name: 'Frontend',
    icon: Layout,
    color: 'text-indigo-500',
    gridClass: 'md:col-span-2 md:row-span-1',
    skills: [
      { name: 'HTML', icon: FileText },
      { name: 'CSS', icon: Palette },
      { name: 'JavaScript', icon: Code },
      { name: 'React', icon: Globe },
      { name: 'Bootstrap', icon: Layers },
      { name: 'TypeScript', icon: Code },
    ],
  },
  {
    name: 'Backend',
    icon: Server,
    color: 'text-blue-500',
    gridClass: 'md:col-span-2 md:row-span-1',
    skills: [
      { name: 'Java', icon: Cpu },
      { name: 'Spring Boot', icon: Server },
      { name: 'Python', icon: Terminal },
      { name: 'Microservices', icon: Server },
      { name: 'REST APIs', icon: Globe },
    ],
  },
  {
    name: 'Database',
    icon: Database,
    color: 'text-emerald-500',
    gridClass: 'md:col-span-1 md:row-span-1',
    skills: [
      { name: 'MySQL', icon: DbIcon },
      { name: 'MongoDB', icon: Database },
      { name: 'PostgreSQL', icon: DbIcon },
      { name: 'Redis', icon: DbIcon },
    ],
  },
  {
    name: 'Tools',
    icon: Wrench,
    color: 'text-purple-500',
    gridClass: 'md:col-span-1 md:row-span-1',
    skills: [
      { name: 'VS Code', icon: Code },
      { name: 'Postman', icon: Search },
      { name: 'GitHub', icon: GitBranch },
      { name: 'Git', icon: GitBranch },
      { name: 'Docker', icon: Layers },
      { name: 'AWS', icon: Globe },
    ],
  },
];

const SkillCard = ({ category, catIdx }: { category: SkillCategory, catIdx: number }) => {
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
      transition={{ delay: catIdx * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY }}
      className={`glass p-8 rounded-3xl border-cardBorder flex flex-col group hover:border-primary/50 transition-all duration-300 perspective-1000 transform-gpu relative ${category.gridClass}`}
    >
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl -z-10 blur-xl" />
      
      <div className="flex items-center gap-3 mb-8">
        <div className={`p-2 rounded-xl bg-foreground/5 group-hover:bg-primary/20 transition-colors ${category.color}`}>
          <category.icon size={24} />
        </div>
        <h3 className="text-xl font-bold tracking-tight">{category.name}</h3>
      </div>

      <div className="flex flex-wrap gap-3">
        {category.skills.map((skill, skillIdx) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: (catIdx * 0.1) + (skillIdx * 0.05) }}
            whileHover={{ scale: 1.1, y: -2 }}
            className="px-4 py-2 rounded-full glass border-cardBorder text-sm font-medium flex items-center gap-2 cursor-default hover:text-primary transition-colors group/skill"
          >
            <skill.icon size={14} className="opacity-60 group-hover/skill:opacity-100 group-hover/skill:text-primary transition-all" />
            {skill.name}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-28 px-6 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 blur-[100px] -z-10" />
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            My technical toolkit for building scalable, high-performance web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {skillsData.map((category, catIdx) => (
            <SkillCard key={category.name} category={category} catIdx={catIdx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;