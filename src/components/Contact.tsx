import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('success'), 2000);
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In <span className="text-gradient">Touch</span></h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-8"
          >
            <h3 className="text-2xl font-bold mb-6">Let's connect!</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-8">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-primary">
                  <Mail size={18} />
                </div>
                <span>prasaddayal71234@gmail.com</span> {/* ADD YOUR EMAIL */}
              </div>
              <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-secondary">
                  <Phone size={18} />
                </div>
                <span>+91 9923552277</span> {/* ADD YOUR PHONE */}
              </div>
              <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-accent">
                  <MapPin size={18} />
                </div>
                <span>Nasik, Maharashtra</span> {/* ADD YOUR LOCATION */}
              </div>
            </div>

            <div className="pt-8 border-t border-cardBorder">
              <p className="font-medium mb-4">Follow me on</p>
              <div className="flex gap-4">
                {/* ADD YOUR SOCIAL LINKS */}
                <a href="https://github.com/PrasadDayal" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-black transition-colors">
                  <Github size={18} />
                </a>
                <a href="https://linkedin.com/in/prasaddayal" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-secondary hover:text-white transition-colors">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3 glass p-8 md:p-10 rounded-3xl"
          >
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center py-12 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', bounce: 0.5 }}
                >
                  <CheckCircle className="text-accent mb-4" size={64} />
                </motion.div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6">Thanks for reaching out. I'll reply soon.</p>
                <button onClick={() => setStatus('idle')} className="text-primary font-bold hover:underline">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground/80">Name</label>
                    <input
                      required
                      type="text"
                      className="w-full bg-background border border-cardBorder rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-foreground" placeholder='Enter Name'/>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground/80">Email</label>
                    <input
                      required
                      type="email"
                      className="w-full bg-background border border-cardBorder rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-foreground"placeholder='Enter Email'/>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground/80">Message</label>
                  <textarea
                    required
                    rows={4}
                    className="w-full bg-background border border-cardBorder rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-foreground resize-none"
                    placeholder="Your message here..."
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={status === 'sending'}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-primary via-secondary to-accent text-white font-bold flex items-center justify-center gap-2 shadow-lg"
                >
                  {status === 'sending' ? (
                    <span className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                  ) : (
                    <>
                      <Send size={18} />
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