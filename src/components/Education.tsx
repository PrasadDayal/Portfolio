import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, School, Award } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor of Engineering',
    major: 'Computer Engineering',
    college: 'Matoshri College of Engineering',
    cgpa: 'Completed',
    duration: '2023 - 2026',
    icon: GraduationCap,
  },
  {
    degree: 'Diploma in Computer Engg.',
    major: 'Computer Engineering',
    college: 'K.K.Wagh Polytechnic, Nashik',
    cgpa: 'Completed',
    duration: '2020 - 2023',
    icon: School,
  },
  {
    degree: 'Secondary School Certificate (10th)',
    major: 'General Studies',
    college: 'K.R.T Highschool, Mauje Sukene',
    cgpa: 'Completed',
    duration: '2019 - 2020',
    icon: BookOpen,
  }
];

const Education = () => {
  return (
    <section id="education" className="py-28 px-6 bg-background relative overflow-hidden">
      {/* Subtle Background Glow for premium aesthetic */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-accent-primary/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-foreground">
            My <span className="text-gradient">Education</span>
          </h2>
          <div className="h-1.5 w-24 bg-accent-primary mx-auto rounded-full" />
        </motion.div>

        {/* Left-aligned Timeline Container */}
        <div className="relative border-l-2 border-card-border ml-4 md:ml-8 pl-8 md:pl-12 space-y-12">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative"
            >
              {/* Timeline Dot (Stays on the line, perfectly aligned) */}
              <div className="absolute top-6 -left-[41px] md:-left-[57px] w-5 h-5 rounded-full bg-accent-primary border-4 border-background z-10 shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-transform duration-300 group-hover:scale-125" />

              {/* Content Card (Left Aligned for Perfect Visibility) */}
              <div className="glass p-8 rounded-3xl border-card-border hover:border-accent-primary/30 transition-all group hover:shadow-2xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-2xl bg-accent-primary/10 text-accent-primary group-hover:bg-accent-primary group-hover:text-white transition-all duration-500">
                      <edu.icon size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black tracking-tight text-foreground group-hover:text-accent-primary transition-colors">
                        {edu.degree}
                      </h3>
                      <p className="text-accent-primary font-bold text-sm tracking-wide mt-1">{edu.major}</p>
                    </div>
                  </div>
                  
                  {/* Duration pill */}
                  <span className="px-4 py-1.5 rounded-full bg-foreground/5 text-foreground/60 text-xs font-mono font-bold tracking-tight border border-card-border max-w-fit">
                    {edu.duration}
                  </span>
                </div>
                
                <p className="text-foreground/70 leading-relaxed font-semibold text-lg mb-6">{edu.college}</p>
                
                <div className="flex items-center gap-2 text-sm font-bold text-foreground/40 border-t border-card-border pt-4">
                  <Award size={16} className="text-accent-primary" />
                  <span>Status: {edu.cgpa}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;