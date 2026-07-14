import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Award, Calendar, Building2 } from 'lucide-react';

const certifications = [
  { 
    name: 'Java Certification', 
    provider: 'Microsoft', 
    date: 'Jun 2025',
    link: '#',
    icon: <Award className="w-6 h-6 text-orange-500" />
  },
  { 
    name: 'ExcelR Certification', 
    provider: 'ExcelR', 
    date: 'Jun 2025',
    link: '#',
    icon: <Award className="w-6 h-6 text-orange-500" />
  },
  { 
    name: 'Vijesha IT Services LLP', 
    provider: 'Vijesha IT Services LLP', 
    date: 'Jul 2025',
    link: '#',
    icon: <Building2 className="w-6 h-6 text-blue-500" />
  },
  { 
    name: 'GEN AI', 
    provider: 'Microsoft', 
    date: 'Aug 2025',
    link: '#',
    icon: <Award className="w-6 h-6 text-green-500" />
  },
  { 
    name: 'Machine Learning', 
    provider: 'Microsoft', 
    date: 'Dec 2024',
    link: '#',
    icon: <Award className="w-6 h-6 text-purple-500" />
  },
  { 
    name: 'Python', 
    provider: 'Microsoft', 
    date: 'Dec 2024',
    link: '#',
    icon: <Award className="w-6 h-6 text-purple-500" />
  },
];

const Certifications = () => {
  return (
    <section className="py-28 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Certifications
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Professional credentials and technical recognitions that validate my expertise and commitment to continuous learning.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative glass p-8 rounded-3xl border-cardBorder flex flex-col h-full transition-all hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-background/50 border border-cardBorder group-hover:scale-110 transition-transform">
                  {cert.icon}
                </div>
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground/40 hover:text-primary transition-colors"
                  aria-label={`View ${cert.name} certificate`}
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>

              <div className="flex-grow">
                <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {cert.name}
                </h4>
                <div className="flex items-center gap-2 text-sm text-foreground/60 mb-4">
                  <Building2 className="w-4 h-4" />
                  <span>{cert.provider}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-cardBorder/50 flex items-center gap-2 text-sm text-foreground/40">
                <Calendar className="w-4 h-4" />
                <span>{cert.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
