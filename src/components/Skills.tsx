import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { skillsData, Skill } from '../data';
import { 
  Code, Terminal, Layout, Atom, Palette, Cpu, 
  GitMerge, HardDrive, Cloud, Github, Send, PenTool, Users, Boxes, GitPullRequest, Search, CheckSquare
} from 'lucide-react';

// Maps string name to appropriate lucide icons
const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Code': return <Code size={18} />;
    case 'FileCode': return <Terminal size={18} />;
    case 'Terminal': return <Terminal size={18} />;
    case 'Database': return <HardDrive size={18} />;
    case 'Layout': return <Layout size={18} />;
    case 'Atom': return <Atom size={18} />;
    case 'FileHtml': return <Code size={18} />;
    case 'Palette': return <Palette size={18} />;
    case 'Cpu': return <Cpu size={18} />;
    case 'GitMerge': return <GitMerge size={18} />;
    case 'HardDrive': return <HardDrive size={18} />;
    case 'Cloud': return <Cloud size={18} />;
    case 'Github': return <Github size={18} />;
    case 'Send': return <Send size={18} />;
    case 'PenTool': return <PenTool size={18} />;
    case 'Users': return <Users size={18} />;
    case 'Boxes': return <Boxes size={18} />;
    case 'GitPullRequest': return <GitPullRequest size={18} />;
    default: return <Code size={18} />;
  }
};

const CATEGORIES = [
  { id: 'all', name: 'All Skills' },
  { id: 'languages', name: 'Languages' },
  { id: 'frontend', name: 'Frontend UI' },
  { id: 'frameworks', name: 'Frameworks' },
  { id: 'database', name: 'Databases' },
  { id: 'cloud_tools', name: 'Cloud & Tools' },
  { id: 'concepts', name: 'Principles' }
];

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSkills = skillsData.filter(skill => {
    const matchesCategory = selectedCategory === 'all' || skill.category === selectedCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-950 scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-brand-lime text-brand-purple border border-brand-sage/40 dark:bg-brand-purple/40 dark:text-brand-lime dark:border-brand-purple/60 mb-2"
          >
            <CheckSquare size={12} className="text-brand-teal" />
            <span>Familiar Technologies</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold font-display text-slate-900 dark:text-white"
          >
            Technical <span className="text-brand-teal">Skills</span>
          </motion.h2>
          <div className="h-1 w-16 bg-brand-teal mx-auto mt-3 rounded-full" />
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          {/* Scrollable Categories List */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-none">
            {CATEGORIES.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  selectedCategory === category.id
                    ? 'bg-brand-purple text-white shadow-sm'
                    : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative w-full md:w-64">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search skill..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-brand-teal transition-all"
            />
          </div>
        </div>

        {/* Skills Animated Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => {
              const categoryDetails = CATEGORIES.find(c => c.id === skill.category);
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.3 }}
                  className="p-5 rounded-3xl border border-[#9FCBAD]/25 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs hover:border-brand-teal dark:hover:border-slate-700 transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    {/* Skill Info Row */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 sm:p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-all">
                          {getIcon(skill.icon)}
                        </div>
                        <div>
                          <h4 className="font-display font-semibold text-sm sm:text-base text-slate-800 dark:text-slate-100">
                            {skill.name}
                          </h4>
                          <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase">
                            {categoryDetails ? categoryDetails.name : 'Concept'}
                          </span>
                        </div>
                      </div>
                      <span className="text-xs font-mono font-bold text-brand-purple dark:text-brand-lime">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Animated Progress Bar */}
                    <div className="relative h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-brand-teal to-brand-sage rounded-full"
                      />
                    </div>
                  </div>
                  
                  {/* Context Badge */}
                  <div className="mt-3 pt-3 border-t border-slate-50 dark:border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                    <span>Proficient Level</span>
                    <span className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-slate-50 dark:bg-slate-800 font-semibold text-brand-teal">
                      ACTIVE
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 text-slate-400">
            No technical skills found matching your criteria. Try another search.
          </div>
        )}

      </div>
    </section>
  );
}
