import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Mail, User, BookOpen, AlertCircle, CheckCircle2, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', subject: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name.';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'An email address is required.';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please provide a valid email structure.';
      isValid = false;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'A subject is required.';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please write a message content.';
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Detailed messages must be at least 10 characters.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      // Simulate sending to backend database by storing in LocalStorage
      const newMessage = {
        id: crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2, 9),
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        date: new Date().toLocaleString()
      };

      const saved = localStorage.getItem('muthu_portfolio_contacts');
      let parsed = [];
      if (saved) {
        try {
          parsed = JSON.parse(saved);
        } catch (e) {
          console.error(e);
        }
      }
      const updated = [newMessage, ...parsed];
      localStorage.setItem('muthu_portfolio_contacts', JSON.stringify(updated));
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Auto reset success alert after 5s
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch {
      setSubmitStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-950 scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-brand-lime text-brand-purple border border-brand-sage/40 dark:bg-brand-purple/40 dark:text-brand-lime dark:border-brand-purple/60 mb-2"
          >
            <MessageSquare size={12} className="text-brand-teal" />
            <span>Employment Interest</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold font-display text-slate-900 dark:text-white"
          >
            Contact <span className="text-brand-teal">Connection</span>
          </motion.h2>
          <div className="h-1 w-16 bg-brand-teal mx-auto mt-3 rounded-full" />
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-6xl mx-auto">
          
          {/* Invitation block (Left Side: 5 Columns) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 p-6 sm:p-8 rounded-3xl border border-[#9FCBAD]/25 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold font-display text-[#4A4466] dark:text-brand-lime">
                Let's discuss opportunities!
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-450 leading-relaxed font-mono">
                Looking for an ambitious Software Engineer Intern who excels at writing type-safe React features, configuring AWS cloud workflows, and coding high-efficiency Java REST APIs?
              </p>
              
              <div className="space-y-4 pt-4 border-t border-slate-200/45 dark:border-slate-800/80">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-brand-lime text-brand-purple dark:bg-slate-850 dark:text-brand-lime">
                    <Mail size={16} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-slate-400">EMAIL ADDRESS</span>
                    <a href="mailto:muthu310129@gmail.com" className="text-xs sm:text-sm font-semibold hover:text-brand-teal transition-colors">
                      muthu310129@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-brand-lime text-brand-purple dark:bg-slate-850 dark:text-brand-lime">
                    <User size={16} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-slate-400">PHONE CONNECT</span>
                    <span className="text-xs sm:text-sm font-semibold">+91 8610692782</span>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Actual Contact Form block (Right Side: 7 Columns) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 p-6 sm:p-8 rounded-3xl border border-[#9FCBAD]/25 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="text-xs font-mono font-bold text-slate-500 uppercase block mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 text-xs sm:text-sm focus:outline-none focus:border-brand-teal transition-colors"
                    placeholder="E.g., Muthu P"
                    required
                  />
                </div>
                {errors.name && <span className="text-[10px] text-red-500 font-mono mt-1 flex items-center gap-1"><AlertCircle size={10} /> {errors.name}</span>}
              </div>

              {/* Email */}
              <div>
                <label className="text-xs font-mono font-bold text-slate-500 uppercase block mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 text-xs sm:text-sm focus:outline-none focus:border-brand-teal transition-colors"
                    placeholder="E.g., muthu@gmail.com"
                    required
                  />
                </div>
                {errors.email && <span className="text-[10px] text-red-500 font-mono mt-1 flex items-center gap-1"><AlertCircle size={10} /> {errors.email}</span>}
              </div>

              {/* Subject */}
              <div>
                <label className="text-xs font-mono font-bold text-slate-500 uppercase block mb-1">
                  Subject
                </label>
                <div className="relative">
                  <BookOpen size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 text-xs sm:text-sm focus:outline-none focus:border-brand-teal transition-colors"
                    placeholder="E.g., Software Engineering Internship Opportunity"
                    required
                  />
                </div>
                {errors.subject && <span className="text-[10px] text-red-500 font-mono mt-1 flex items-center gap-1"><AlertCircle size={10} /> {errors.subject}</span>}
              </div>

              {/* Message */}
              <div>
                <label className="text-xs font-mono font-bold text-slate-500 uppercase block mb-1">
                  Your Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 text-xs sm:text-sm focus:outline-none focus:border-brand-teal transition-colors"
                  placeholder="Type your message details here..."
                  required
                />
                {errors.message && <span className="text-[10px] text-red-500 font-mono mt-1 flex items-center gap-1"><AlertCircle size={10} /> {errors.message}</span>}
              </div>

              {/* Alerts container */}
              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-3.5 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs flex items-center gap-2 font-semibold"
                  >
                    <CheckCircle2 size={16} className="text-emerald-600" />
                    <span>Your message has been submitted and stored locally! Thank you.</span>
                  </motion.div>
                )}
                
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-3.5 rounded-xl bg-red-105 border border-red-300 text-red-800 text-xs flex items-center gap-2 font-semibold"
                  >
                    <AlertCircle size={16} className="text-red-600" />
                    <span>An unexpected malfunction occurred. Please double-check the local state cache.</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full py-3 rounded-xl font-semibold bg-brand-purple hover:bg-opacity-95 text-white flex items-center justify-center gap-2 cursor-pointer transition-all hover:shadow-md hover:shadow-brand-purple/15 mt-2"
              >
                Send Direct Message
                <Send size={15} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
