import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { FileText, ArrowRight, Github, Linkedin, Award, Compass, MapPin } from 'lucide-react';

interface HeroProps {
  onScrollToSection: (sec: string) => void;
  onOpenResume: () => void;
}

const TITLES = [
  'Software Engineer',
  'Full Stack Developer',
  'RESTful API Specialist',
  'State-Level Hackathon Winner',
];

export default function Hero({ onScrollToSection, onOpenResume }: HeroProps) {
  const [titleIdx, setTitleIdx] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIdx, setCharIdx] = useState(0);

  // Typing effect loop
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentTitle = TITLES[titleIdx];
    const typingSpeed = isDeleting ? 40 : 100;

    const handleType = () => {
      if (!isDeleting) {
        if (charIdx < currentTitle.length) {
          setDisplayText(currentTitle.substring(0, charIdx + 1));
          setCharIdx(prev => prev + 1);
        } else {
          // Pause at the end of word
          timer = setTimeout(() => setIsDeleting(true), 1500);
          return;
        }
      } else {
        if (charIdx > 0) {
          setDisplayText(currentTitle.substring(0, charIdx - 1));
          setCharIdx(prev => prev - 1);
        } else {
          setIsDeleting(false);
          setTitleIdx(prev => (prev + 1) % TITLES.length);
        }
      }
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [charIdx, isDeleting, titleIdx]);

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-20 overflow-hidden bg-radial from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900"
    >
      {/* Decorative Blur Orbs with Resume Specific Palette Colors */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 rounded-full bg-brand-lime/40 dark:bg-brand-lime/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-brand-teal/20 dark:bg-brand-teal/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-brand-sage/30 dark:bg-brand-sage/5 blur-3xl pointer-events-none" />

      {/* Aesthetic Thin Line Mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 z-10 w-full text-center">
        <div className="flex flex-col items-center gap-6">

          {/* Heading Content */}
          <div className="space-y-4 max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-brand-teal font-display font-medium text-lg md:text-xl tracking-wide uppercase"
            >
              Hi there, I am
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-7xl font-bold font-display tracking-tight text-neutral-900 dark:text-white"
            >
              Muthu <span className="text-brand-purple dark:text-brand-teal text-outline-glow">P</span>
            </motion.h1>

            {/* Dynamic Typing Subhead */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="h-10 md:h-12 flex items-center justify-center"
            >
              <span className="text-xl sm:text-2xl md:text-3xl font-display font-medium text-slate-700 dark:text-slate-300">
                A <span className="text-brand-teal dark:text-brand-lime font-bold typing-cursor">{displayText}</span>
              </span>
            </motion.div>
          </div>

          {/* Location and Education Sub-details */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-mono"
          >
            <span className="flex items-center gap-1">
              <MapPin size={14} className="text-red-500" />
              Tirunelveli, Tamil Nadu
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              <Award size={14} className="text-yellow-500" />
              B.Tech CSBS Student
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 font-semibold text-slate-700 dark:text-slate-200">
              CGPA: 8.4/10
            </span>
          </motion.div>

          {/* Highlight Cards based on Resume Metadata */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 w-full max-w-2xl mt-4 text-left"
          >
            <div className="p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 shadow-sm hover:translate-y-[-2px] transition-all">
              <span className="text-xs font-mono text-brand-teal uppercase">Experience</span>
              <p className="text-sm font-semibold text-slate-800 dark:text-slate-100 mt-1">Full-Stack Intern</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Skill Rank Inc., USA</p>
            </div>
            <div className="p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 shadow-sm hover:translate-y-[-2px] transition-all">
              <span className="text-xs font-mono text-brand-purple dark:text-brand-lime uppercase">Academics</span>
              <p className="text-sm font-semibold text-slate-800 dark:text-slate-100 mt-1">B.Tech CSBS</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">CGPA: 8.4 (2022-2026)</p>
            </div>
            <div className="col-span-2 md:col-span-1 p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 shadow-sm hover:translate-y-[-2px] transition-all flex flex-col justify-center">
              <span className="text-xs font-mono text-green-500 uppercase">Achievements</span>
              <p className="text-sm font-semibold text-slate-800 dark:text-slate-100 mt-0.5">1st Place Hackathon 🏆</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">State-Level Winner</p>
            </div>
          </motion.div>

          {/* Buttons/Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-6 w-full sm:w-auto"
          >
            <button
              onClick={() => onScrollToSection('projects')}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-white bg-brand-purple shadow-md shadow-brand-purple/20 hover:shadow-lg hover:shadow-brand-purple/30 transition-all cursor-pointer glow-accent"
            >
              Explore Projects
              <ArrowRight size={18} className="animate-pulse" />
            </button>
            
            <button
              onClick={onOpenResume}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium border-2 border-slate-300 dark:border-slate-700 hover:border-brand-teal text-slate-700 dark:text-slate-200 hover:text-brand-teal bg-white/80 dark:bg-slate-900/80 transition-all cursor-pointer"
            >
              View & Print Resume
              <FileText size={18} />
            </button>
          </motion.div>

          {/* Social Icons with Tooltips */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-4 mt-6 text-slate-500 dark:text-slate-400"
          >
            <a
              href="https://github.com/muthu-p29"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-brand-purple transition-all"
              title="GitHub Profile"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/muthu-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-brand-teal transition-all"
              title="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
