import React from 'react';
import { motion } from 'framer-motion';

const education = [
  {
    degree: 'Bachelor of Engineering',
    major: 'Computer Engineering',
    college: 'Matoshri College of Engineering',
    cgpa: 'Completed',
    duration: '2023 - 2026'
  },
  {
    degree: 'Diploma in Computer Engg.',
    major: 'Computer Engineering',
    college: 'K.K.Wagh Polytechnic, Nashik',
    cgpa: 'Completed',
    duration: '2020 - 2023'
  },
  {
    degree: 'Secondary School Certificate (10th)',
    major: 'General Studies',
    college: 'K.R.T Highschool, Mauje Sukene',
    cgpa: 'Completed',
    duration: '2019 - 2020'
  }
];

const Education = () => {
  return (
    <section id="education" className="py-28 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
          <span className="text-gradient">Education</span>
        </h2>
        <div className="space-y-8">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-3xl border-cardBorder"
            >
              <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
              <p className="text-primary font-semibold mb-1">{edu.major}</p>
              <p className="text-foreground/70 mb-4">{edu.college}</p>
              <div className="flex justify-between text-sm text-foreground/50">
                <span>{edu.cgpa}</span>
                <span>{edu.duration}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
