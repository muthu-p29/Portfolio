import {
    Atom,
    Boxes,
    CheckSquare,
    Cloud,
    Code,
    Cpu,
    Github,
    GitMerge,
    GitPullRequest,
    HardDrive,
    Layout,
    Palette,
    PenTool,
    Search,
    Send,
    Terminal,
    Users
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import CLogo from '../Assest/C.png';
import MysqlLogo from '../Assest/Mysql.png';
import PostmanLogo from '../Assest/Postman.png';
import SpringBootLogo from '../Assest/SpringBoot.png';
import CssLogo from '../Assest/css.png';
import { skillsData } from '../data';

// Maps string name to appropriate lucide icons (fallback only)
const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Code': return <Code size={28} />;
    case 'FileCode': return <Terminal size={28} />;
    case 'Terminal': return <Terminal size={28} />;
    case 'Database': return <HardDrive size={28} />;
    case 'Layout': return <Layout size={28} />;
    case 'Atom': return <Atom size={28} />;
    case 'FileHtml': return <Code size={28} />;
    case 'Palette': return <Palette size={28} />;
    case 'Cpu': return <Cpu size={28} />;
    case 'GitMerge': return <GitMerge size={28} />;
    case 'HardDrive': return <HardDrive size={28} />;
    case 'Cloud': return <Cloud size={28} />;
    case 'Github': return <Github size={28} />;
    case 'Send': return <Send size={28} />;
    case 'PenTool': return <PenTool size={28} />;
    case 'Users': return <Users size={28} />;
    case 'Boxes': return <Boxes size={28} />;
    case 'GitPullRequest': return <GitPullRequest size={28} />;
    default: return <Code size={28} />;
  }
};

/**
 * Returns a properly sized, uniformly-scaled logo for a given skill.
 * IMPORTANT: every branch returns an SVG with viewBox="0 0 24 24" and NO
 * hardcoded width/height classes on the <svg> itself — sizing is controlled
 * by the wrapper div in the render function below. This was the root cause
 * of the earlier inconsistent/garbled-looking icons: mixing w-12/w-16,
 * different viewBoxes, and text-based glyphs at tiny sizes.
 */
const getTechLogo = (skillName: string, fallbackIcon: string) => {
  switch (skillName) {
    case 'Java':
      return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fill="#F58219" d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.014-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218"/>
          <path fill="#F58219" d="M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573"/>
          <path fill="#F58219" d="M18.744 20.007s.679.559-.747.991c-2.712.822-11.288 1.07-13.669.033-.856-.373.75-.891 1.255-.999.527-.114.829-.093.829-.093-.953-.671-6.156 1.317-2.644 1.887 9.586 1.553 17.475-.7 14.976-1.819M9.286 13.211s-4.363 1.037-1.545 1.414c1.193.16 3.571.124 5.786-.062 1.81-.153 3.628-.477 3.628-.477s-.638.273-1.1.588c-4.439 1.167-13.017.624-10.548-.57 2.085-1.009 3.779-.893 3.779-.893M16.238 17.394c4.512-2.343 2.427-4.596.971-4.294-.357.074-.517.138-.517.138s.133-.208.387-.298c2.888-1.016 5.108 2.996-.931 4.575 0 0 .066-.06.09-.121"/>
          <path fill="#F58219" d="M14.401 0s2.5 2.5-2.371 6.348c-3.907 3.086-.891 4.849 0 6.865-2.32-2.093-4.021-3.936-2.881-5.649C10.759 5.098 15.529 3.916 14.401 0"/>
          <path fill="#F58219" d="M9.734 23.925c4.328.277 10.976-.154 11.132-2.202 0 0-.302.776-3.575 1.392-3.691.694-8.246.613-10.943.168 0 .001.553.458 3.386.642"/>
        </svg>
      );
    case 'C':
      return <img src={CLogo} alt="C logo" className="w-full h-full object-contain" />;
    case 'Python':
      return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fill="#3776AB" d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.822H3.9S0 5.789 0 11.969c0 6.18 3.403 5.96 3.403 5.96h2.03v-2.867s-.109-3.42 3.35-3.42h5.766s3.24.052 3.24-3.148V3.202S18.28 0 11.914 0zM8.708 1.85c.578 0 1.046.47 1.046 1.052 0 .581-.468 1.051-1.046 1.051-.579 0-1.046-.47-1.046-1.051 0-.582.467-1.052 1.046-1.052z"/>
          <path fill="#FFD43B" d="M12.086 24c6.093 0 5.712-2.656 5.712-2.656l-.007-2.752h-5.814v-.822h8.121S24 18.211 24 12.031c0-6.18-3.403-5.96-3.403-5.96h-2.03v2.867s.109 3.42-3.35 3.42H9.451s-3.24-.052-3.24 3.148v5.292S5.72 24 12.086 24zm3.206-1.85c-.578 0-1.046-.47-1.046-1.052 0-.581.468-1.051 1.046-1.051.579 0 1.046.47 1.046 1.051 0 .582-.467 1.052-1.046 1.052z"/>
        </svg>
      );
    case 'SQL':
      return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="12" cy="5" rx="7.5" ry="2.7" fill="none" stroke="#6EADBC" strokeWidth="1.4"/>
          <path fill="none" stroke="#6EADBC" strokeWidth="1.4" d="M4.5 5v13.5c0 1.49 3.358 2.7 7.5 2.7s7.5-1.21 7.5-2.7V5"/>
          <path fill="none" stroke="#6EADBC" strokeWidth="1.4" d="M4.5 10.9c0 1.49 3.358 2.7 7.5 2.7s7.5-1.21 7.5-2.7"/>
          <path fill="none" stroke="#6EADBC" strokeWidth="1.4" d="M4.5 16.2c0 1.49 3.358 2.7 7.5 2.7s7.5-1.21 7.5-2.7"/>
        </svg>
      );
    case 'React.js':
      return (
        <svg viewBox="-11.5 -10.23 23 20.46" xmlns="http://www.w3.org/2000/svg" style={{ animation: 'spin 12s linear infinite' }}>
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
        </svg>
      );
    case 'JavaScript':
      return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="4" fill="#F7DF1E"/>
          <path fill="#000000" d="M6.1 20.1l1.84-1.11c.355.63.679 1.163 1.454 1.163.744 0 1.213-.291 1.213-1.424v-7.7h2.257v7.73c0 2.337-1.37 3.4-3.37 3.4-1.805 0-2.85-.934-3.38-2.06M13.9 19.86l1.84-1.065c.484.79 1.11 1.372 2.223 1.372.934 0 1.532-.467 1.532-1.114 0-.773-.614-1.047-1.649-1.502l-.566-.243c-1.634-.694-2.717-1.567-2.717-3.41 0-1.697 1.294-2.99 3.318-2.99 1.44 0 2.475.502 3.221 1.816l-1.764 1.132c-.388-.696-.807-.97-1.457-.97-.663 0-1.083.42-1.083.97 0 .678.42.953 1.39 1.376l.566.243c1.925.826 3.008 1.666 3.008 3.556 0 2.038-1.6 3.156-3.75 3.156-2.1 0-3.457-1.001-4.112-2.327"/>
        </svg>
      );
    case 'HTML5':
      return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fill="#E34F26" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0z"/>
          <path fill="#EF652A" d="M12 21.98l6.9-1.912L20.7 2.9H12v19.08z"/>
          <path fill="#EBEBEB" d="M12 9.75H8.55L8.3 6.85H12V4H5l.07.8L5.75 12H12V9.75z"/>
          <path fill="#EBEBEB" d="M12 16.9l-.03.01-2.7-.73-.17-1.94H6.16l.34 3.8 5.47 1.52.03-.01v-2.65z"/>
          <path fill="#FFFFFF" d="M11.98 9.75V12h3.22l-.3 3.4-2.92.79v2.65l5.48-1.52.04-.45.63-7.03.06-.6H11.98z"/>
          <path fill="#FFFFFF" d="M11.98 4v2.85h6.71l.06-.6.13-1.45.07-.8h-6.97z"/>
        </svg>
      );
    case 'CSS3 / Tailwind':
      return <img src={CssLogo} alt="CSS logo" className="w-full h-full object-contain" />;
    case 'Spring Boot':
      return <img src={SpringBootLogo} alt="Spring Boot logo" className="w-full h-full object-contain" />;
    case 'REST APIs':
      return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect x="2.5" y="2.5" width="19" height="19" rx="4" fill="#0EA5A5"/>
          <path
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.5 8.5L4.5 12l3 3.5M16.5 8.5l3 3.5-3 3.5M13.5 7l-3 10"
          />
        </svg>
      );
    case 'MySQL':
      return <img src={MysqlLogo} alt="MySQL logo" className="w-full h-full object-contain" />;
    case 'AWS (Batch, EC2, S3)':
      return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fill="#252F3E" d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.575.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 01-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 01-.287-.375 6.18 6.18 0 01-.248-.471c-.622.734-1.404 1.101-2.346 1.101-.671 0-1.205-.191-1.596-.574-.391-.384-.591-.894-.591-1.532 0-.678.239-1.229.727-1.644.487-.415 1.133-.622 1.955-.622.272 0 .551.024.847.064.295.04.598.104.917.176v-.583c0-.607-.128-1.030-.375-1.277-.256-.248-.686-.367-1.301-.367-.28 0-.567.032-.863.104-.295.072-.583.16-.862.272a2.287 2.287 0 01-.28.104.49.49 0 01-.128.024c-.112 0-.168-.08-.168-.248v-.391c0-.128.016-.224.056-.28a.598.598 0 01.224-.168c.28-.144.615-.264 1.005-.36a4.85 4.85 0 011.245-.152c.95 0 1.644.216 2.09.647.44.431.663 1.086.663 1.964v2.586zm-3.24 1.214c.263 0 .535-.048.822-.144.288-.096.543-.272.758-.511a1.27 1.27 0 00.272-.511c.048-.192.08-.423.08-.694v-.336a6.63 6.63 0 00-.735-.136 6.01 6.01 0 00-.75-.048c-.535 0-.926.104-1.19.32-.263.216-.39.518-.39.918 0 .375.095.655.295.846.191.2.472.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.312L7.586 4.834a1.405 1.405 0 01-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.161.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 01.32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 01.312-.08h.743c.128 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 01-.056.2l-1.923 6.166c-.048.16-.104.264-.168.312-.064.048-.168.08-.303.08h-.686c-.152 0-.256-.025-.32-.08-.064-.056-.12-.16-.151-.32l-1.238-5.148-1.229 5.14c-.04.16-.087.264-.151.32-.064.056-.176.08-.32.08zm10.256.216c-.415 0-.83-.048-1.229-.144-.4-.096-.71-.2-.918-.32-.128-.072-.216-.152-.248-.224a.566.566 0 01-.048-.224v-.407c0-.168.064-.248.183-.248a.45.45 0 01.144.024c.048.016.12.048.2.08.272.12.567.216.878.28.319.064.63.096.95.096.502 0 .893-.088 1.165-.264a.86.86 0 00.415-.759.777.777 0 00-.216-.559c-.144-.152-.416-.288-.807-.415l-1.157-.36c-.583-.184-1.014-.456-1.277-.815a1.903 1.903 0 01-.4-1.157c0-.336.072-.63.216-.886.144-.256.335-.479.575-.655.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.176 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.128.144.048.256.096.336.144a.687.687 0 01.24.2.43.43 0 01.072.264v.375c0 .168-.064.256-.183.256a.83.83 0 01-.304-.096 3.652 3.652 0 00-1.532-.312c-.455 0-.815.072-1.062.224-.248.152-.375.383-.375.71 0 .224.08.416.24.567.16.152.455.304.878.44l1.133.359c.575.184.99.44 1.237.767.248.327.367.703.367 1.117 0 .343-.072.655-.208.926a2.163 2.163 0 01-.583.702c-.248.2-.543.343-.886.447-.36.111-.734.167-1.14.167z"/>
          <path fill="#F90" d="M21.657 16.976C19.06 18.891 15.283 19.909 12.03 19.909c-4.559 0-8.665-1.686-11.769-4.487-.244-.22-.025-.52.267-.349 3.35 1.947 7.489 3.122 11.766 3.122a23.4 23.4 0 008.977-1.834c.44-.19.809.288.386.615z"/>
          <path fill="#F90" d="M22.762 15.718c-.331-.424-2.194-.2-3.032-.101-.254.032-.294-.19-.064-.35 1.484-1.044 3.918-.743 4.2-.394.284.35-.075 2.79-1.47 3.955-.213.18-.418.084-.323-.15.313-.782 1.019-2.535.689-2.96z"/>
        </svg>
      );
    case 'GitHub':
      return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" className="text-slate-800 dark:text-slate-200" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
      );
    case 'Postman':
      return <img src={PostmanLogo} alt="Postman logo" className="w-full h-full object-contain" />;
    case 'IntelliJ IDEA':
      return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="4" fill="#000000"/>
          <path fill="#FE2857" d="M0 24V14L10 24H0z"/>
          <path fill="#B32FFD" d="M0 14V6L14 20L10 24H0z"/>
          <path fill="#3E75FF" d="M12 0L24 12V24H14L12 0z"/>
          <path fill="#4BF67D" d="M24 0V12L12 0H24z"/>
          <rect x="3.5" y="3.5" width="17" height="17" rx="2" fill="#000000"/>
          <text x="6.2" y="15.5" fill="#ffffff" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="9">IJ</text>
        </svg>
      );
    case 'Agile Workflows':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="#6DB33F" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l.73-.73"/>
        </svg>
      );
    case 'OOP (Object Oriented Prog)':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      );
    case 'CRUD Architectures':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C7.58 2 4 3.79 4 6v12c0 2.21 3.58 4 8 4s8-1.79 8-4V6c0-2.21-3.58-4-8-4z"/>
          <path d="M4 6c0 1.5 3 2.5 8 2.5s8-1 8-2.5"/>
          <path d="M4 12c0 1.5 3 2.5 8 2.5s8-1 8-2.5"/>
          <path stroke="#22C55E" d="M16 19l2 2 4-4"/>
        </svg>
      );
    default:
      return getIcon(fallbackIcon);
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

        {/* Skills Grid */}
        <div className="relative py-12 px-4 overflow-visible">
          <motion.div
            layout
            className="flex flex-wrap justify-center gap-6 rotate-[-4deg] md:rotate-[-5deg] skew-x-[-2deg] transition-transform duration-500 max-w-5xl mx-auto"
          >
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((skill) => {
                const categoryDetails = CATEGORIES.find(c => c.id === skill.category);
                return (
                  <motion.div
                    key={skill.name}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.7 }}
                    whileHover={{ scale: 1.15, rotate: 5, y: -8, z: 10 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20, layout: { duration: 0.3 } }}
                    className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl sm:rounded-3xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:shadow-[0_20px_40px_rgba(110,173,188,0.15)] hover:border-brand-teal/50 dark:hover:border-brand-teal/30 transition-shadow duration-300 flex items-center justify-center cursor-pointer group"
                  >
                    {/* Uniform-sized wrapper fixes the inconsistent icon rendering */}
                    <div className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 [&>svg]:w-full [&>svg]:h-full">
                      {getTechLogo(skill.name, skill.icon)}
                    </div>

                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 bg-slate-950 text-white dark:bg-white dark:text-slate-950 text-xs py-2 px-3.5 rounded-2xl shadow-xl opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 pointer-events-none z-50 flex flex-col items-center gap-0.5 border border-slate-800 dark:border-slate-200">
                      <div className="flex items-center gap-1.5 whitespace-nowrap">
                        <span className="font-semibold text-white dark:text-slate-900">{skill.name}</span>
                        <span className="text-slate-500 dark:text-slate-400">•</span>
                        <span className="font-mono font-bold text-brand-teal dark:text-brand-purple">{skill.level}%</span>
                      </div>
                      <span className="text-[9px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                        {categoryDetails ? categoryDetails.name : 'Concept'}
                      </span>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-slate-950 dark:bg-white rotate-45 border-r border-b border-slate-800 dark:border-slate-200 -mt-1.5" />
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 text-slate-400">
            No technical skills found matching your criteria. Try another search.
          </div>
        )}


      </div>
    </section>
  );
}