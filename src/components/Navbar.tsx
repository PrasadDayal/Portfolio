import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Navbar = ({ theme, toggleTheme }: { theme: string, toggleTheme: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = ['home', 'about', 'education', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
      };

      window.addEventListener('scroll', handleScroll);
      handleScroll();
      return () => window.removeEventListener('scroll', handleScroll);
      }, []);

      const navLinks = [
      { name: 'About', href: '#about', id: 'about' },
      { name: 'Education', href: '#education', id: 'education' },
      { name: 'Skills', href: '#skills', id: 'skills' },
      { name: 'Projects', href: '#projects', id: 'projects' },
      { name: 'Contact', href: '#contact', id: 'contact' },
      ];

  const resumeUrl = "https://drive.google.com/file/d/1bXs7wkVWyKDInvVeUoKw7CqFc2DUYKB6/view?usp=sharing";

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent-primary z-[60] origin-left"
        style={{ scaleX }}
      />

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
        ? 'py-4 bg-background/80 backdrop-blur-lg border-b border-card-border shadow-sm' 
        : 'py-6 bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <motion.a 
            href="#home"
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-black tracking-tighter text-foreground"
          >
            PRASAD<span className="text-accent-primary">.</span>
          </motion.a>
          
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-bold tracking-tight transition-colors hover:text-accent-primary ${
                    isActive ? 'text-accent-primary' : 'text-foreground/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            
            <div className="flex items-center gap-4 ml-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-xl hover:bg-foreground/5 transition-colors text-foreground"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary py-2 px-6 text-sm"
              >
                Resume
              </a>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleTheme} className="p-2 text-foreground">
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-foreground">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 md:hidden bg-background border-b border-card-border"
            >
              <div className="flex flex-col p-6 gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-bold text-foreground"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-center"
                >
                  View Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;