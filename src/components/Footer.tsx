import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 px-6 bg-background border-t border-card-border">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-black tracking-tighter text-foreground mb-8"
        >
          PRASAD<span className="text-accent-primary">.</span>
        </motion.h2>

        <div className="flex gap-6 mb-12">
          {[
            { icon: Github, href: "https://github.com/PrasadDayal" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/prasaddayal" },
            { icon: Mail, href: "mailto:prasaddayal71234@gmail.com" }
          ].map((social, idx) => (
            <motion.a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, color: "var(--accent-primary)" }}
              className="text-text-muted transition-colors"
            >
              <social.icon size={24} />
            </motion.a>
          ))}
        </div>

        <p className="text-text-muted text-sm font-medium">
          © {new Date().getFullYear()} | Designed & Working by <span className="text-foreground font-bold">Prasad Dayal</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;