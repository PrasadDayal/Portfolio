import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Mail, Phone, MapPin, Github, Linkedin, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(e.currentTarget);
    const name = formData.get('user_name');
    const email = formData.get('user_email');
    const message = formData.get('message');
    const subject = "Portfolio Inquiry from " + name;

    const mailtoUrl = `mailto:prasaddayal71234@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `From: ${name} (${email})\n\nMessage:\n${message}`
    )}`;

    // Open the default email client
    window.location.href = mailtoUrl;

    // Simulate success feedback
    setTimeout(() => {
      setStatus('success');
    }, 1000);
  };

  const contactDetails = [
    { icon: Mail, label: 'Email Me', val: 'prasaddayal71234@gmail.com', href: 'mailto:prasaddayal71234@gmail.com', color: 'text-sky-400' },
    { icon: Phone, label: 'Call Me', val: '+91 9923552277', href: 'tel:+919923552277', color: 'text-indigo-400' },
    { icon: MapPin, label: 'Location', val: 'Nashik, Maharashtra, India', href: 'https://maps.google.com', color: 'text-rose-400' }
  ];

  return (
    <section id="contact" className="py-28 px-6 relative overflow-hidden bg-background">
      {/* Background glow orbs */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute left-0 top-1/4 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In <span className="text-gradient">Touch</span></h2>
          <div className="w-16 h-1 bg-gradient-to-r from-secondary via-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          
          {/* Contact Info (Left Column) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Let's connect!</h3>
              <p className="text-foreground/60 leading-relaxed">
                I'm always open to discussing new internship projects, full-time opportunities, or collaborative programming ideas. Send a message, and let's build something epic together.
              </p>
            </div>

            <div className="space-y-4">
              {contactDetails.map((detail, idx) => {
                const Icon = detail.icon;
                return (
                  <motion.a
                    key={idx}
                    href={detail.href}
                    target={detail.icon === MapPin ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.01, x: 4 }}
                    className="flex items-center gap-4 glass p-4 rounded-2xl border-cardBorder hover:border-primary/20 hover:bg-foreground/[0.02] transition-all group"
                  >
                    <div className={`w-10 h-10 rounded-xl bg-foreground/5 flex items-center justify-center ${detail.color} group-hover:scale-105 transition-transform`}>
                      <Icon size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs uppercase tracking-widest text-foreground/45 font-bold mb-0.5">{detail.label}</p>
                      <p className="text-sm font-semibold text-foreground/80 truncate">{detail.val}</p>
                    </div>
                    <ArrowUpRight size={14} className="text-foreground/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                );
              })}
            </div>

            {/* Socials Connection */}
            <div className="pt-8 border-t border-cardBorder">
              <p className="text-xs uppercase tracking-widest text-foreground/45 font-bold mb-4">Social networks</p>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/PrasadDayal" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-xl glass border-cardBorder flex items-center justify-center hover:border-primary/30 hover:bg-primary hover:text-black transition-all"
                  aria-label="GitHub Profile"
                >
                  <Github size={18} />
                </a>
                <a 
                  href="https://linkedin.com/in/prasaddayal" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-xl glass border-cardBorder flex items-center justify-center hover:border-secondary/30 hover:bg-secondary hover:text-white transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form (Right Column) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 glass p-8 md:p-10 rounded-3xl border-cardBorder shadow-md relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-[60px]" />
            
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center py-12 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', bounce: 0.5 }}
                >
                  <CheckCircle className="text-emerald-400 mb-6" size={60} />
                </motion.div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Message Dispatched!</h3>
                <p className="text-foreground/60 mb-8 max-w-sm">Thanks for reaching out. Opening your local email client to complete transmission.</p>
                <button 
                  onClick={() => setStatus('idle')} 
                  className="px-6 py-2.5 rounded-full glass border-cardBorder hover:border-primary/20 text-xs font-bold uppercase tracking-wider text-primary"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-bold text-foreground/65 mb-2">Your Name</label>
                    <input
                      required
                      name="user_name"
                      type="text"
                      className="w-full bg-foreground/5 border border-cardBorder rounded-xl px-4 py-3.5 focus:outline-none focus:border-primary/50 focus:bg-background transition-all text-foreground text-sm font-medium" 
                      placeholder="Enter Name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-bold text-foreground/65 mb-2">Email Address</label>
                    <input
                      required
                      name="user_email"
                      type="email"
                      className="w-full bg-foreground/5 border border-cardBorder rounded-xl px-4 py-3.5 focus:outline-none focus:border-primary/50 focus:bg-background transition-all text-foreground text-sm font-medium" 
                      placeholder="Enter Email"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest font-bold text-foreground/65 mb-2">Message Body</label>
                  <textarea
                    required
                    name="message"
                    rows={4}
                    className="w-full bg-foreground/5 border border-cardBorder rounded-xl px-4 py-3.5 focus:outline-none focus:border-primary/50 focus:bg-background transition-all text-foreground text-sm font-medium resize-none"
                    placeholder="Describe your project request or query here..."
                  />
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  disabled={status === 'sending'}
                  className="w-full py-4 rounded-xl btn-gradient text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
                >
                  {status === 'sending' ? (
                    <span className="animate-spin rounded-full h-4.5 w-4.5 border-2 border-white border-t-transparent" />
                  ) : (
                    <>
                      <Send size={14} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;