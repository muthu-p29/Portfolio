import { motion } from 'motion/react';
import { Award, ShieldAlert, Sparkles, Trophy, BookOpen, ExternalLink, Cpu } from 'lucide-react';
import { certificationsData, achievementsData } from '../data';

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md scroll-mt-10 border-y border-[#9FCBAD]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-brand-lime text-brand-purple border border-brand-sage/40 dark:bg-brand-purple/40 dark:text-brand-lime dark:border-brand-purple/60 mb-2"
          >
            <Trophy size={12} className="text-brand-teal" />
            <span>Excellence Standard</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold font-display text-slate-900 dark:text-white"
          >
            Achievements & <span className="text-brand-teal">Certifications</span>
          </motion.h2>
          <div className="h-1 w-16 bg-brand-teal mx-auto mt-3 rounded-full" />
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Achievements Container */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white flex items-center gap-2">
              <Trophy size={20} className="text-yellow-500 animate-bounce-slow" />
              Competitive Achievements
            </h3>
            
            <div className="grid grid-cols-1 gap-4">
              {achievementsData.map((ach, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-5 sm:p-6 rounded-3xl border border-[#9FCBAD]/25 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs flex items-start gap-4 group hover:translate-x-1.5 hover:border-[#6EADBC] transition-all"
                >
                  <div className="p-3 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform">
                    <Trophy size={22} />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-mono font-bold text-brand-teal uppercase">
                      {ach.placement}
                    </span>
                    <h4 className="text-base sm:text-lg font-bold font-display text-slate-900 dark:text-slate-100">
                      {ach.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                      {ach.competition} • State-Level Event
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Hackathon detail showcase */}
              <div className="p-5 sm:p-6 rounded-3xl border border-[#9FCBAD]/35 bg-[#F1F7D4]/40 dark:bg-[#4A4466]/10 dark:border-[#4A4466]/40 text-xs text-slate-650 dark:text-slate-350 leading-relaxed font-mono space-y-2">
                <span className="font-bold text-brand-purple dark:text-brand-lime block">💡 HACKATHON FOCUS SUMMARY:</span>
                Won top honours at the state-level hackathon with high performance application prototyping, presenting state management modules under restrictive timeline parameters. Proficient in delivering real-world product solutions quickly and pitching architectures cleanly.
              </div>
            </div>
          </div>

          {/* Certifications Container */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white flex items-center gap-2">
              <BookOpen size={20} className="text-brand-teal" />
              Verified NPTEL Credentials
            </h3>

            <div className="space-y-4">
              {certificationsData.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-5 sm:p-6 rounded-3xl border border-[#9FCBAD]/25 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs flex items-start justify-between gap-4 group hover:border-[#6EADBC] transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-brand-lime text-brand-purple dark:bg-slate-800 dark:text-brand-lime group-hover:scale-110 transition-transform">
                      <Cpu size={22} className="text-brand-teal" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-base font-bold font-display text-slate-900 dark:text-slate-100">
                        {cert.name}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Issued by: {cert.issuer}
                      </p>
                      {cert.details && (
                        <p className="text-xs text-slate-400 font-mono mt-1 leading-relaxed">
                          {cert.details}
                        </p>
                      )}
                    </div>
                  </div>

                  <span className="p-2 rounded bg-slate-50 dark:bg-slate-800 text-slate-400 group-hover:text-brand-teal transition-all flex items-center justify-center shrink-0">
                    <ExternalLink size={14} />
                  </span>
                </motion.div>
              ))}

              {/* Learning Note */}
              <div className="p-5 sm:p-6 bg-white dark:bg-slate-900 rounded-3xl border border-[#9FCBAD]/25 flex items-start gap-3">
                <Sparkles size={18} className="text-brand-teal shrink-0 mt-0.5" />
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  These certifications are verified through <strong>NPTEL (National Programme on Technology Enhanced Learning)</strong> which is run by premium premier research institutes such as the Indian Institutes of Technology (IITs) and Indian Institute of Science (IISc).
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
