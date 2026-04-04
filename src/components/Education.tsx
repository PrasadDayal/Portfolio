import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

// CUSTOMIZE YOUR EDUCATION HERE
const educationData = [
  {
    degree: 'B.E in Computer Engineering',
    institution: 'Savitribai Phule Pune University',
    year: '2023 - 2026',
    description: 'Graduated with First Class. Specialized in Software Engineering and Web Technologies.',
    icon: GraduationCap,
  },
  {
    degree: 'Diploma',
    institution: 'K.K.Wagh Polytechnic, Nashik',
    year: '2020 - 2023',
    description: 'Completed diploma with first class distincion',
    icon: GraduationCap,
  },
  {
    degree: 'S.S.C',
    institution: 'K.R.T High School Mauje Sukene',
    year: '2015 - 2020',
    // description: 'Completed S.S.C with first class distincion',
    icon: GraduationCap,
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 bg-foreground/[0.02]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">My <span className="text-gradient">Education</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="relative border-l border-foreground/10 ml-4 md:ml-0 md:pl-0">
          {educationData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="mb-10 ml-8 md:ml-12 relative"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[41px] md:-left-[57px] top-1 w-10 h-10 rounded-full bg-background border-4 border-primary flex items-center justify-center text-primary z-10">
                <item.icon size={16} />
              </div>

              <div className="glass p-6 md:p-8 rounded-2xl hover:border-primary/30 transition-colors">
                <span className="inline-block px-3 py-1 bg-foreground/5 text-primary text-xs font-bold rounded-full mb-3">
                  {item.year}
                </span>
                <h3 className="text-xl font-bold mb-1">{item.degree}</h3>
                <h4 className="text-md font-medium text-muted mb-3">{item.institution}</h4>
                <p className="text-sm text-muted">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;