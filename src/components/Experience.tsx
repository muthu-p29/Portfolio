import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, Sparkles, Server, CheckCircle, HelpCircle } from 'lucide-react';
import { experienceData } from '../data';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md scroll-mt-10 border-y border-[#9FCBAD]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-brand-lime text-brand-purple border border-brand-sage/40 dark:bg-brand-purple/40 dark:text-brand-lime dark:border-brand-purple/60 mb-2"
          >
            <Briefcase size={12} className="text-brand-teal" />
            <span>Employment Timeline</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold font-display text-slate-900 dark:text-white"
          >
            Work <span className="text-brand-teal">Experience</span>
          </motion.h2>
          <div className="h-1 w-16 bg-brand-teal mx-auto mt-3 rounded-full" />
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-0 md:pl-10 pb-8 group"
            >
              {/* Desktop Timeline Vertical Rule Line */}
              <div className="hidden md:block absolute left-[19px] top-2 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 group-last:bottom-8" />
              
              {/* Timeline Bullet Anchor */}
              <div className="hidden md:flex absolute left-0 top-1 w-10 h-10 rounded-full bg-brand-lime dark:bg-brand-purple/50 border-2 border-brand-teal items-center justify-center text-brand-teal dark:text-brand-lime font-bold shadow-sm z-10 transition-transform group-hover:scale-110">
                <Briefcase size={16} />
              </div>

              {/* Main Job Card */}
              <div className="p-6 sm:p-8 rounded-3xl border border-[#9FCBAD]/25 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs hover:border-brand-teal transition-all">
                
                {/* Heading Block */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-6">
                  <div>
                    <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white flex items-center gap-2">
                      {exp.role}
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 font-semibold uppercase">
                        INTERN
                      </span>
                    </h3>
                    <p className="text-brand-teal font-medium text-sm md:text-base mt-1">
                      {exp.company}
                    </p>
                  </div>
                  
                  {/* Meta details */}
                  <div className="flex flex-wrap gap-3 font-mono text-xs text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1.5 px-2 py-1 rounded bg-slate-50 dark:bg-slate-800">
                      <Calendar size={12} className="text-brand-teal" />
                      {exp.timeline}
                    </span>
                    <span className="flex items-center gap-1.5 px-2 py-1 rounded bg-slate-50 dark:bg-slate-800">
                      <MapPin size={12} className="text-red-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Key technologies highlighted */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {['React.js', 'Python', 'AWS Batch', 'AWS EC2', 'AWS S3', 'REST APIs', 'Git', 'Agile/Scrum', 'Sprint Delivery'].map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] sm:text-xs font-mono font-semibold px-2 py-1 rounded-md bg-brand-lime/40 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-brand-sage/20 dark:border-slate-700 hover:border-brand-teal hover:text-brand-teal transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bullets List */}
                <div className="space-y-4">
                  <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                    Core Deliverables & Contributions:
                  </h4>
                  <ul className="space-y-3">
                    {exp.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex gap-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        <CheckCircle size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Accomplishments Callout */}
                <div className="mt-8 p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border-l-4 border-brand-teal text-xs text-slate-500 dark:text-slate-400 flex items-start gap-2.5 leading-relaxed">
                  <Sparkles size={16} className="text-brand-teal select-none mt-0.5 shrink-0" />
                  <div>
                    <span className="font-bold text-slate-700 dark:text-slate-200">Scalable Pipeline Impact:</span> Successfully configured cloud data processing tasks using custom Amazon Web Services compute structures, resolving workflow complexities for high-volume execution datasets.
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
