import React from 'react';
import { motion } from 'framer-motion';

const certifications = [
  { name: 'Oracle Java Certification', provider: 'Oracle' },
  { name: 'AWS Cloud Practitioner', provider: 'AWS' },
  { name: 'Spring Framework', provider: 'Spring' },
  { name: 'Hackerrank Java', provider: 'Hackerrank' },
];

const Certifications = () => {
  return (
    <section className="py-28 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
          Certifications
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="glass p-6 rounded-3xl border-cardBorder text-center"
            >
              <h4 className="font-bold mb-1">{cert.name}</h4>
              <p className="text-sm text-foreground/50">{cert.provider}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
