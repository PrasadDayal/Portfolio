import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(e.currentTarget);
    const name = formData.get('user_name');
    const email = formData.get('user_email');
    const message = formData.get('message');
    const subject = formData.get('subject') || "Portfolio Inquiry";

    const mailtoUrl = `mailto:prasaddayal71234@gmail.com?subject=${encodeURIComponent(subject as string)}&body=${encodeURIComponent(
      `From: ${name} (${email})\n\nMessage:\n${message}`
    )}`;

    // Open the default email client
    window.location.href = mailtoUrl;

    // Simulate success feedback
    setTimeout(() => {
      setStatus('success');
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In <span className="text-gradient">Touch</span></h2>
          <p className="text-foreground/60">Have a project in mind? Let's build something amazing together.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass p-8 md:p-12 rounded-[2rem] border-white/10"
        >
          {status === 'success' ? (
            <div className="py-20 text-center">
              <CheckCircle className="mx-auto text-accent mb-6" size={64} />
              <h3 className="text-3xl font-bold mb-2">Message Sent!</h3>
              <p className="text-foreground/60">Thank you for reaching out. I'll get back to you shortly.</p>
              <button 
                onClick={() => setStatus('idle')}
                className="mt-8 text-primary font-bold hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground/60 mb-2">Full Name</label>
                  <input
                    required
                    name="user_name"
                    type="text"
                    className="w-full bg-foreground/5 border border-cardBorder rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-foreground"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground/60 mb-2">Email Address</label>
                  <input
                    required
                    name="user_email"
                    type="email"
                    className="w-full bg-foreground/5 border border-cardBorder rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-foreground"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground/60 mb-2">Subject</label>
                <input
                  required
                  name="subject"
                  type="text"
                  className="w-full bg-foreground/5 border border-cardBorder rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-foreground"
                  placeholder="Project Inquiry"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground/60 mb-2">Message</label>
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="w-full bg-foreground/5 border border-cardBorder rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-foreground"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={status === 'sending'}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold flex items-center justify-center gap-2 disabled:opacity-50"
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
    </section>
  );
};

export default ContactForm;