import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp, Github, Linkedin, Heart, ExternalLink, Terminal } from 'lucide-react';

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      setShowScroll(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-50 dark:bg-slate-950 border-t border-slate-200/50 dark:border-slate-900 py-12 pb-16">
      
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-brand-purple text-white hover:bg-opacity-90 shadow-lg cursor-pointer transition-all"
            aria-label="Scroll to top"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyrights and Branding */}
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-brand-purple/10 text-brand-purple dark:bg-slate-900 dark:text-brand-lime">
              <Terminal size={16} />
            </div>
            <span className="font-display font-bold text-slate-800 dark:text-slate-100 text-sm">
              Muthu P <span className="text-slate-400">| Software Engineer</span>
            </span>
          </div>

          {/* Social connections */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/muthu-p29"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-slate-205 dark:border-slate-805 text-slate-500 hover:text-brand-purple hover:bg-slate-100 dark:hover:bg-slate-9ml/50 transition-all text-xs flex items-center gap-1.5"
              title="GitHub Repository"
            >
              <Github size={15} />
              <span>GitHub</span>
            </a>
            
            <a
              href="https://linkedin.com/in/muthu-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-slate-205 dark:border-slate-805 text-slate-500 hover:text-brand-teal hover:bg-slate-100 dark:hover:bg-slate-9ml/50 transition-all text-xs flex items-center gap-1.5"
              title="LinkedIn Profile"
            >
              <Linkedin size={15} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Bottom Credits block */}
        <div className="mt-8 pt-8 border-t border-slate-200/40 dark:border-slate-850/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>&copy; {new Date().getFullYear()} Muthu P. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Crafted with <Heart size={12} className="text-red-500 animate-pulse" /> using React, Tailwind & motion
          </p>
        </div>
      </div>
    </footer>
  );
}
