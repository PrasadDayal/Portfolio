import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Target, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About <span className="text-gradient">Me</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-3xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-[50px]" />
            <h3 className="text-2xl font-bold mb-4">Hi, I'm <span className="text-primary">Prasad Dayal</span></h3>
            {/* ADD YOUR NAME ABOVE */}
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              I am passionate Computer Engineering student and aspiring Full-Stack Developer. I specialize in building efficient, scalable, and user-friendly applications using technologies like Java, Python, Spring Boot, and modern web tools.
              {/* CUSTOMIZE YOUR INTRO HERE */}
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I’m constantly learning and exploring new technologies, especially in AI and web development, to improve my skills and stay ahead in the tech world. My goal is to contribute to innovative projects that solve real-world problems and make a meaningful impact.
              {/* CUSTOMIZE YOUR CAREER OBJECTIVE HERE */}
            </p>
          </motion.div>

          <div className="grid gap-6">
            {[
              { icon: Code2, title: 'Clean Code', desc: 'Writing maintainable, scalable, and efficient code.' },
              { icon: Zap, title: 'Fast Learner', desc: 'Quick to grasp new technologies and frameworks.' },
              { icon: Target, title: 'Problem Solver', desc: 'Analytical approach to debugging and logical challenges.' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex gap-4 items-start glass p-6 rounded-2xl hover:border-primary/30 transition-colors group"
              >
                <div className="p-3 rounded-xl bg-foreground/5 text-primary group-hover:scale-110 transition-transform">
                  <item.icon size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;