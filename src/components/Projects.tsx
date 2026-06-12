import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { projectsData, Project } from '../data';
import { Github, Folder, ArrowUpRight, Award, Flame, CheckCircle2, SlidersHorizontal, Layers } from 'lucide-react';

export default function Projects() {
  const [activeTab, setActiveTab] = useState<'all' | 'python-ml' | 'java-spring'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeTab === 'all' 
    ? projectsData 
    : projectsData.filter(proj => proj.category === activeTab);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-950 scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-brand-lime text-brand-purple border border-brand-sage/40 dark:bg-brand-purple/40 dark:text-brand-lime dark:border-brand-purple/60 mb-2"
          >
            <Folder size={12} className="text-brand-teal" />
            <span>Demonstrated Engineering Works</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold font-display text-slate-900 dark:text-white"
          >
            My Featured <span className="text-brand-teal">Projects</span>
          </motion.h2>
          <div className="h-1 w-16 bg-brand-teal mx-auto mt-3 rounded-full" />
        </div>

        {/* Categories Bar */}
        <div className="flex justify-center items-center gap-3 mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
              activeTab === 'all'
                ? 'bg-brand-purple text-white shadow-md'
                : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300'
            }`}
          >
            All Systems
          </button>
          
          <button
            onClick={() => setActiveTab('python-ml')}
            className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
              activeTab === 'python-ml'
                ? 'bg-brand-purple text-white shadow-md'
                : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300'
            }`}
          >
            Python & ML/NLP
          </button>

          <button
            onClick={() => setActiveTab('java-spring')}
            className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
              activeTab === 'java-spring'
                ? 'bg-brand-purple text-white shadow-md'
                : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300'
            }`}
          >
            Java & Spring Boot
          </button>
        </div>

        {/* Grid Container */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 10 }}
                transition={{ duration: 0.4 }}
                className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-3xl border border-[#9FCBAD]/25 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs hover:border-brand-teal transition-all h-full"
              >
                <div>
                  {/* Decorative Card Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-2xl bg-brand-lime/70 dark:bg-slate-800 text-brand-purple dark:text-brand-lime group-hover:scale-110 transition-transform">
                      <Layers size={20} />
                    </div>
                    
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-brand-purple transition-all"
                      title="GitHub Repository"
                    >
                      <Github size={18} />
                    </a>
                  </div>

                  {/* Recognition Badge if exists */}
                  {project.achievements && (
                    <div className="mb-3.5 inline-flex items-center gap-1 px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/20 text-[10px] font-bold text-amber-600 dark:text-amber-400">
                      <Award size={12} />
                      <span>{project.achievements}</span>
                    </div>
                  )}

                  {/* Title and Summary */}
                  <h3 className="text-lg sm:text-xl font-bold font-display text-slate-900 dark:text-white group-hover:text-brand-teal transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-3 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="space-y-2 mb-6">
                    {project.points.map((point, ptIdx) => (
                      <li key={ptIdx} className="flex gap-2 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                        <CheckCircle2 size={13} className="text-brand-teal shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Badges / Tech Row */}
                <div>
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 dark:border-slate-800/80 mb-4">
                    {project.technologies.map(tech => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Expand view details */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full py-2.5 rounded-xl border border-dashed border-slate-200 hover:border-brand-teal text-slate-600 hover:text-brand-teal dark:border-slate-800 dark:hover:border-slate-700 text-xs font-semibold flex items-center justify-center gap-1 cursor-pointer transition-all hover:bg-brand-lime/10"
                  >
                    Details & Architecture
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Interactive Architecture Deep Dive Dialog Drawer */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backing Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              />

              {/* Panel container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="relative w-full max-w-2xl rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-2xl z-10 overflow-y-auto max-h-[85vh] scrollbar-none"
              >
                {/* Header Close button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute right-5 top-5 p-1 px-2 text-xs font-mono rounded bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 hover:text-red-500 cursor-pointer"
                >
                  ESC
                </button>

                {/* Content */}
                <span className="text-xs font-mono font-bold text-brand-teal uppercase tracking-wider">
                  SYSTEM ARCHITECTURE
                </span>
                
                <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white mt-1.5 mb-4">
                  {selectedProject.title}
                </h3>

                <div className="space-y-6">
                  {/* Goal and objective */}
                  <div>
                    <h4 className="text-xs font-mono font-bold text-slate-400 uppercase mb-2">
                      Core Objective
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Highlights Bullet */}
                  <div>
                    <h4 className="text-xs font-mono font-bold text-slate-400 uppercase mb-2">
                      Key Highlights & Implementation details
                    </h4>
                    <div className="space-y-2">
                      {selectedProject.points.map((pt, idx) => (
                        <div key={idx} className="flex gap-2.5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                          <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Simulated Architecture Diagrams / Modules block */}
                  <div>
                    <h4 className="text-xs font-mono font-bold text-slate-400 uppercase mb-3">
                      Modular Flow Diagram
                    </h4>
                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800/80 font-mono text-[11px] text-slate-600 dark:text-slate-400 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="bg-brand-purple/20 text-brand-purple dark:bg-brand-purple/50 dark:text-white px-2 py-0.5 rounded text-[10px] font-bold">CLIENT</span>
                        <span>React.js User Interface / Stream Inputs</span>
                      </div>
                      <div className="pl-4 border-l-2 border-brand-teal py-1">
                        <span className="text-brand-teal font-bold">&darr; API REQUESTS (GET/POST/REST)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="bg-brand-teal/20 text-brand-teal dark:bg-brand-teal/50 dark:text-white px-2 py-0.5 rounded text-[10px] font-bold">CONTROLLER</span>
                        <span>{selectedProject.category === 'python-ml' ? 'Python ML Core Orchestration' : 'Spring MVC Controller layer'}</span>
                      </div>
                      <div className="pl-4 border-l-2 border-brand-teal py-1">
                        <span className="text-brand-teal font-bold">&darr; ALGORITHMS / SERVICES</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="bg-brand-sage/30 text-slate-700 dark:bg-brand-sage/50 dark:text-white px-2 py-0.5 rounded text-[10px] font-bold">ENGINE</span>
                        <span>{selectedProject.category === 'python-ml' ? 'OpenCV + MediaPipe Detection / Machine Learning Weights' : 'Hibernate/JPA - MySQL Transaction Services'}</span>
                      </div>
                    </div>
                  </div>

                  {/* Technologies row */}
                  <div>
                    <h4 className="text-xs font-mono font-bold text-slate-400 uppercase mb-2">
                      Infrastructure & Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map(t => (
                        <span key={t} className="px-2.5 py-1 rounded-xl bg-brand-lime text-brand-purple dark:bg-slate-800 dark:text-brand-lime font-mono text-xs font-semibold">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Buttons in drawer */}
                <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-brand-purple text-white hover:bg-opacity-90 flex items-center gap-2"
                  >
                    <Github size={14} />
                    View Code on GitHub
                  </a>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-500 hover:text-slate-800 dark:hover:text-white transition-all cursor-pointer"
                  >
                    Close
                  </button>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
