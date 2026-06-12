import { motion } from 'motion/react';
import { User, Globe, MapPin, Award, GraduationCap, Briefcase, Heart, BookOpen } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md scroll-mt-10 border-y border-[#9FCBAD]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-brand-lime text-brand-purple border border-brand-sage/40 dark:bg-brand-purple/40 dark:text-brand-lime dark:border-brand-purple/60 mb-2"
          >
            <User size={12} className="text-brand-teal" />
            <span>Profile Overview</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold font-display text-slate-900 dark:text-white"
          >
            About <span className="text-brand-teal">Me</span>
          </motion.h2>
          <div className="h-1 w-16 bg-brand-teal mx-auto mt-3 rounded-full" />
        </div>

        {/* Bento Grid Concept Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Story Brief Card - spans 7 cols on large screens */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 p-6 sm:p-8 rounded-3xl border border-[#9FCBAD]/25 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs flex flex-col justify-between relative overflow-hidden"
          >
            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold font-display text-brand-purple dark:text-brand-lime">
                Full Stack Developer & Technical Problem Solver
              </h3>
              
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                I am a motivated <strong className="font-bold text-slate-800 dark:text-white">Full Stack Developer</strong> with hands-on internship experience building scalable system structures using <strong className="font-bold text-slate-800 dark:text-white">Spring Boot (Java), React.js, and AWS</strong>. Certified state-level hackathon victor, I am highly proficient in CRUD architectures, agile workflows, and implementing reliable backend solutions.
              </p>
              
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Currently, I am pursuing my <strong className="font-bold text-slate-800 dark:text-white">B.Tech. in Computer Science & Business Systems</strong> at <strong className="font-bold text-slate-800 dark:text-white">Francis Xavier Engineering College</strong>, where I have maintained a <strong className="font-bold text-slate-800 dark:text-white">CGPA of 8.4</strong>. I have a strong foundation in Object-Oriented Programming (OOP) concepts, databases, cloud engineering, and data translation pipelines.
              </p>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-6 mt-6 border-t border-slate-100 dark:border-slate-800">
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-brand-teal">8.4</span>
                <span className="text-xs text-slate-500 font-mono">B.Tech CGPA</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-brand-purple dark:text-brand-lime">2+</span>
                <span className="text-xs text-slate-500 font-mono">Major Certs</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-green-500">1st</span>
                <span className="text-xs text-slate-500 font-mono">Hackathon🏆</span>
              </div>
            </div>
          </motion.div>

          {/* Persona Card - spans 5 cols on large screens */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 grid grid-cols-1 gap-6"
          >
            {/* Quick Info Grid card */}
            <div className="p-6 rounded-3xl border border-[#9FCBAD]/25 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-4">
              <h4 className="text-base sm:text-lg font-bold font-display text-slate-800 dark:text-slate-100 flex items-center gap-2">
                <Globe size={18} className="text-brand-teal animate-spin-slow" />
                Quick Details
              </h4>
              
              <ul className="space-y-3 font-medium text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                <li className="flex items-center justify-between pb-2 border-b border-slate-50 dark:border-slate-800/60">
                  <span className="text-slate-400 font-mono flex items-center gap-1.5"><MapPin size={14} /> Location:</span>
                  <span>Tirunelveli, Tamil Nadu, IN</span>
                </li>
                <li className="flex items-center justify-between pb-2 border-b border-slate-50 dark:border-slate-800/60">
                  <span className="text-slate-400 font-mono flex items-center gap-1.5"><GraduationCap size={14} /> Degree:</span>
                  <span>B.Tech CSBS (2022-2026)</span>
                </li>
                <li className="flex items-center justify-between pb-2 border-b border-slate-50 dark:border-slate-800/60">
                  <span className="text-slate-400 font-mono flex items-center gap-1.5"><Briefcase size={14} /> Internship:</span>
                  <span>USA Remote / Skill Rank</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-slate-400 font-mono flex items-center gap-1.5"><BookOpen size={14} /> Work Model:</span>
                  <span>Agile & Collaborative</span>
                </li>
              </ul>
            </div>

            {/* Core Values card */}
            <div className="p-6 rounded-3xl border border-[#9FCBAD]/35 bg-[#F1F7D4]/40 dark:bg-[#4A4466]/10 dark:border-[#4A4466]/40 shadow-xs space-y-4">
              <h4 className="text-base sm:text-lg font-bold font-display text-brand-purple dark:text-brand-lime flex items-center gap-2">
                <Award size={18} className="text-brand-purple dark:text-brand-lime" />
                Interpersonal Values
              </h4>
              
              <div className="flex flex-wrap gap-2 text-xs">
                {['Strong Problem Solver', 'Agile Practitioner', 'Team Collaborator', 'Continuous Learner', 'Self-Motivated', 'Scalability Advocate'].map((val) => (
                  <span
                    key={val}
                    className="px-2.5 py-1 rounded-lg bg-white/70 dark:bg-slate-800 border border-slate-200/40 dark:border-slate-700 font-semibold text-slate-700 dark:text-slate-200 shadow-sm"
                  >
                    {val}
                  </span>
                ))}
              </div>

              {/* Extra Passion Note */}
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-mono mt-2">
                "I thrive on developing bidirectional accessibility systems and robust MVC architectures to write code that actually changes lives."
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
