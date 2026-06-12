import { motion } from 'motion/react';
import { X, Printer, Copy, Check, Download, Mail, Phone, MapPin, Github, Linkedin, Briefcase, GraduationCap, Award, FileText } from 'lucide-react';
import { useState } from 'react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadText = () => {
    const resumeText = `MUTHU P
Tirunelveli, Tamil Nadu, India | +91 8610692782 | muthu310129@gmail.com
GitHub: github.com/muthu-p29 | LinkedIn: linkedin.com/in/muthu-profile

SUMMARY
Full Stack Developer with internship experience building scalable web applications using Spring Boot, RESTful APIs, React.js, and AWS. Proficient in CRUD systems, Agile workflows. State-level hackathon winner with strong problem-solving and delivery skills.

TECHNICAL SKILLS
- Languages: Java, C, Python, SQL
- Frontend: HTML, CSS, JavaScript, React.js, Tailwind CSS
- Frameworks & API: Spring Boot, REST API
- Database: MySQL
- Cloud & Tools: AWS (Batch, EC2, S3), GitHub, Postman, IntelliJ IDEA
- Concepts: Agile, OOP, CRUD architectures

PROFESSIONAL EXPERIENCE
Software Developer Intern | Skill Rank Inc., USA (Remote) | Aug 2025 – March 2026
- Built and maintained full-stack features using React.js and Python, supporting UI components and RESTful APIs across 5+ application modules.
- Configured AWS Batch pipelines (job definitions, compute environments, job queues) enabling scalable cloud data processing workflows.
- Collaborated in an Agile team using Git for version control, code reviews, and sprint-based delivery cycles.

DETAILED PROJECTS
1. Bidirectional Sign Language Translation System
   - Technologies: Python, NLP, MediaPipe, CNN, LSTM
   - Developed a real-time Text-to-Sign and Sign-to-Text translation system using Computer Vision and Deep Learning.
   - Implemented gesture recognition with MediaPipe, CNN, and LSTM models to improve accessibility for hearing and speech-impaired users.

2. Employee Management System
   - Technologies: Java, Spring Boot, MySQL, REST API
   - Developed a full-stack web app with complete CRUD operations, RESTful APIs, and MVC architecture for efficient employee record management and secure data handling.
   - Implemented role-based authentication and optimized database queries, improving application performance and ensuring secure user access.

3. Eye Watch – Assistive Navigation
   - Technologies: Python, OpenCV, Machine Learning, NLP
   - Built an ML + image processing system for visually impaired users with real-time path detection (90%+ accuracy) and multilingual NLP translation. Won 2nd Place at State-Level Competition.
   - Integrated voice-guided obstacle alerts and text-to-speech support to enhance real-time navigation and accessibility.

EDUCATION
- B.Tech. Computer Science & Business Systems | Francis Xavier Engineering College (2022–2026) | CGPA: 8.4
- HSC (Class XII) | ChristhuRaja Hr. Sec School (2022) | Percentage: 84.5%
- SSLC (Class X) | Saratha Matriculation School (2020) | Percentage: 83.2%

CERTIFICATIONS & ACHIEVEMENTS
- NPTEL — HR Analytics (IIT Kharagpur Verified)
- NPTEL — Internet of Things (IIT/NIT Verified)
- 1st Place - State-Level Hackathon Victory
- 2nd Place - State-Level Project Presentation
`;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Muthu_P_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopyToClipboard = () => {
    const resumeText = `
MUTHU P
SOFTWARE ENGINEER
Tirunelveli, Tamil Nadu, India
Phone: 8610692782
Email: muthu310129@gmail.com
GitHub: github.com/muthu-p29
LinkedIn: linkedin.com/in/muthu-profile

SOFTWARE ENGINEER SUMMARY:
Full Stack Developer with internship experience building scalable web applications using Spring Boot, RESTful APIs, React.js, and AWS. Proficient in CRUD systems, Agile workflows. State-level hackathon winner with strong problem-solving and delivery skills.

TECHNICAL SKILLS:
Languages: Java, C, Python, SQL
Frontend: HTML, CSS, JS, React.js, Tailwind CSS
Frameworks: Spring Boot, React.js, REST API
Database: MySQL
Cloud & Tools: AWS (Batch, EC2, S3), GitHub, Postman, IntelliJ IDEA
Concepts: Agile, OOP, CRUD architectures

PROFESSIONAL EXPERIENCE:
Software Developer Intern | Skill Rank Inc., USA (Remote) | Aug 2025 – March 2026
- Built and maintained full-stack features using React.js and Python, supporting UI components and RESTful APIs across 5+ application modules.
- Configured AWS Batch pipelines (job definitions, compute environments, job queues) enabling scalable cloud data processing workflows.
- Collaborated in an Agile team using Git for version control, code reviews, and sprint-based delivery cycles.

PROJECTS DETAILED:
1. Bidirectional Sign Language Translation System
   Technologies: Python, NLP, MediaPipe, CNN, LSTM
   - Developed a real-time Text-to-Sign and Sign-to-Text translation system using Computer Vision and Deep Learning.
   - Implemented gesture recognition with MediaPipe, CNN, and LSTM models to improve accessibility for hearing and speech-impaired users.

2. Employee Management System
   Technologies: Java, Spring Boot, MySQL, REST API
   - Developed a full-stack web app with complete CRUD operations, RESTful APIs, and MVC architecture for efficient employee record management and secure data handling.
   - Implemented role-based authentication and optimized database queries, improving application performance and ensuring secure user access.

3. Eye Watch – Assistive Navigation
   Technologies: Python, OpenCV, Machine Learning, NLP
   - Built an ML + image processing system for visually impaired users with real-time path detection (90%+ accuracy) and multilingual NLP translation. Won 2nd at State-Level Competition.
   - Integrated voice-guided obstacle alerts and text-to-speech support to enhance real-time navigation and accessibility for users.

EDUCATION:
- B.Tech. Computer Science & Business Systems | Francis Xavier Engineering College (2022–2026) | CGPA: 8.4
- HSC | ChristhuRaja Hr. Sec School (2022) | Percentage: 84.5%
- SSLC | Saratha Matriculation School (2020) | Percentage: 83.2%

CERTIFICATIONS & ACHIEVEMENTS:
- Certifications: NPTEL HR Analytics, NPTEL Internet of Things (IIT/NIT Verified)
- Achievements: 1st Place - State-Level Hackathon, 2nd Place - State-Level Project Presentation
    `;
    navigator.clipboard.writeText(resumeText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
      {/* Overlay Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm no-print"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 30 }}
        className="relative w-full max-w-4xl rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl z-20 flex flex-col max-h-[92vh] overflow-hidden"
      >
        
        {/* Header Block with Actions */}
        <div className="p-4 sm:p-6 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 no-print shrink-0">
          <div>
            <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white flex items-center gap-2">
              <FileText size={20} className="text-brand-teal" />
              Muthu's Printable Resume
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Optimized for high-quality standard A4 printer paper layouts or standard recruiting exports.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-brand-purple text-white hover:bg-opacity-95 flex items-center gap-1.5 cursor-pointer shadow-sm shadow-brand-purple/15 transition-all"
            >
              <Printer size={14} />
              Print / Save PDF
            </button>

            <button
              onClick={handleDownloadText}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-[#6EADBC] text-white hover:bg-opacity-95 flex items-center gap-1.5 cursor-pointer shadow-sm shadow-brand-teal/15 transition-all"
            >
              <Download size={14} />
              Download Resume (.txt)
            </button>
            
            <button
              onClick={handleCopyToClipboard}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-300 flex items-center gap-1.5 cursor-pointer transition-all"
            >
              {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
              {copied ? 'Copied!' : 'Copy Text'}
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Outer scroll container for preview */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-slate-100 dark:bg-slate-950/80 scrollbar-none print:p-0 print:bg-white print:overflow-visible">
          {/* Paper sheet representation */}
          <div id="resume-sheet" className="w-full max-w-3xl mx-auto bg-white text-slate-900 p-8 sm:p-12 shadow-lg border border-slate-200/40 rounded-2xl print:shadow-none print:border-none print:p-0 print:rounded-none">
            
            {/* Main resume contents (matched directly with attachment PDF original structure) */}
            <div className="space-y-6">
              
              {/* Core header info */}
              <div className="text-center space-y-1.5 border-b-2 border-slate-905 pb-5">
                <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 uppercase">
                  Muthu P
                </h1>
                <p className="text-xs uppercase tracking-widest text-[#4A4466] font-bold">
                  Software Engineer
                </p>
                <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-xs text-slate-500 font-medium">
                  <span className="flex items-center gap-1">
                    <Phone size={12} className="text-brand-purple" />
                    8610692782
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Mail size={12} className="text-brand-purple" />
                    muthu310129@gmail.com
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Github size={12} className="text-brand-purple" />
                    github.com/muthu-p29
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Linkedin size={12} className="text-brand-purple" />
                    linkedin.com/in/muthu-profile
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin size={12} className="text-brand-purple" />
                    Tirunelveli, Tamil Nadu, IN
                  </span>
                </div>
              </div>

              {/* Summary */}
              <div className="space-y-2">
                <h2 className="text-sm font-bold uppercase tracking-wider text-[#4A4466] border-b border-slate-205 pb-1 flex items-center gap-1.5">
                  <Briefcase size={14} className="shrink-0" />
                  Professional Summary
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Full Stack Developer with internship experience building scalable web applications using Spring Boot, RESTful APIs, React.js, and AWS. Proficient in CRUD systems, Agile workflows. State-level hackathon winner with strong problem-solving and delivery skills.
                </p>
              </div>

              {/* Technical skills list styled to paper */}
              <div className="space-y-2">
                <h2 className="text-sm font-bold uppercase tracking-wider text-[#4A4466] border-b border-slate-205 pb-1 flex items-center gap-1.5">
                  <FileText size={14} className="shrink-0" />
                  Technical Skills
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-700">
                  <div className="space-y-1.5">
                    <div><strong className="text-slate-900">Languages:</strong> Java, C, Python, SQL</div>
                    <div><strong className="text-slate-900">Frontend:</strong> HTML, CSS, JS, React.js, Tailwind CSS</div>
                    <div><strong className="text-slate-900">Frameworks:</strong> Spring Boot, React.js, REST API</div>
                  </div>
                  <div className="space-y-1.5">
                    <div><strong className="text-slate-900">Database:</strong> MySQL</div>
                    <div><strong className="text-slate-900">Cloud & Tools:</strong> AWS (Batch, EC2, S3), GitHub, Postman, IntelliJ IDEA</div>
                    <div><strong className="text-slate-900">Concepts:</strong> Agile, OOP, CRUD architectures</div>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div className="space-y-2">
                <h2 className="text-sm font-bold uppercase tracking-wider text-[#4A4466] border-b border-slate-205 pb-1 flex items-center gap-1.5">
                  <Briefcase size={14} className="shrink-0" />
                  Professional Experience
                </h2>
                <div className="space-y-3">
                  <div>
                    <div className="flex flex-wrap justify-between items-center text-xs font-bold text-slate-900">
                      <span>Software Developer Intern | Skill Rank Inc.</span>
                      <span className="text-[#6EADBC]">Aug 2025 – March 2026</span>
                    </div>
                    <div className="text-[11px] text-slate-500 italic mt-0.5">USA (Remote) | Agile Software Delivery</div>
                    <ul className="list-disc pl-5 mt-2 text-xs text-slate-700 space-y-1.5">
                      <li>Built and maintained full-stack features using React.js and Python, supporting UI components and RESTful APIs across 5+ application modules.</li>
                      <li>Configured AWS Batch pipelines (job definitions, compute environments, job queues) enabling scalable cloud data processing workflows.</li>
                      <li>Collaborated in an Agile team using Git for version control, code reviews, and sprint-based delivery cycles.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Projects */}
              <div className="space-y-2">
                <h2 className="text-sm font-bold uppercase tracking-wider text-[#4A4466] border-b border-slate-205 pb-1 flex items-center gap-1.5">
                  <Award size={14} className="shrink-0" />
                  Key Infrastructure Projects
                </h2>
                <div className="space-y-4">
                  {/* Project 1 */}
                  <div className="space-y-1">
                    <div className="flex flex-wrap justify-between items-center text-xs font-bold text-slate-900">
                      <span>Bidirectional Sign Language Translation System</span>
                      <span className="text-slate-500 font-normal">Python, NLP, MediaPipe, CNN, LSTM</span>
                    </div>
                    <ul className="list-disc pl-5 text-xs text-slate-700 space-y-1">
                      <li>Developed a real-time Text-to-Sign and Sign-to-Text translation system using Computer Vision and Deep Learning.</li>
                      <li>Implemented gesture recognition with MediaPipe, CNN, and LSTM models to improve accessibility for hearing and speech-impaired users.</li>
                    </ul>
                  </div>
                  {/* Project 2 */}
                  <div className="space-y-1">
                    <div className="flex flex-wrap justify-between items-center text-xs font-bold text-slate-900">
                      <span>Employee Management System</span>
                      <span className="text-slate-500 font-normal">Java, Spring Boot, MySQL, REST API</span>
                    </div>
                    <ul className="list-disc pl-5 text-xs text-slate-700 space-y-1">
                      <li>Developed a full-stack web app with complete CRUD operations, RESTful APIs, and MVC architecture for efficient employee record management and secure data handling.</li>
                      <li>Implemented role-based authentication and optimized database queries, improving application performance and ensuring secure user access.</li>
                    </ul>
                  </div>
                  {/* Project 3 */}
                  <div className="space-y-1">
                    <div className="flex flex-wrap justify-between items-center text-xs font-bold text-slate-900">
                      <span>Eye Watch – Assistive Navigation</span>
                      <span className="text-slate-500 font-normal">Python, OpenCV, Machine Learning, NLP</span>
                    </div>
                    <span className="text-[10px] bg-amber-100 font-bold text-amber-800 px-2.5 py-0.5 rounded ml-5 inline-block">🥈 Won 2nd Place – State-Level Project Competition</span>
                    <ul className="list-disc pl-5 text-xs text-slate-700 space-y-1 mt-1">
                      <li>Built an ML + image processing system for visually impaired users with real-time path detection (90%+ accuracy) and multilingual NLP translation.</li>
                      <li>Integrated voice-guided obstacle alerts and text-to-speech support to enhance real-time navigation and accessibility for users.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="space-y-2">
                <h2 className="text-sm font-bold uppercase tracking-wider text-[#4A4466] border-b border-slate-205 pb-1 flex items-center gap-1.5">
                  <GraduationCap size={14} className="shrink-0" />
                  Education
                </h2>
                <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <div className="flex justify-between items-start">
                    <div>
                      <strong className="text-slate-900">B.Tech. Computer Science & Business Systems</strong>
                      <div className="text-slate-500 text-[11px]">Francis Xavier Engineering College</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-slate-900">2022–2026</div>
                      <div className="text-brand-purple font-semibold text-[11px]">CGPA: 8.4</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-start border-t border-slate-100 pt-2">
                    <div>
                      <strong className="text-slate-900">HSC (Class XII)</strong>
                      <div className="text-slate-500 text-[11px]">ChristhuRaja Hr. Sec School</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-slate-900">2022</div>
                      <div className="text-brand-teal font-semibold text-[11px]">Percentage: 84.5%</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Certifications & Achievements */}
              <div className="space-y-2">
                <h2 className="text-sm font-bold uppercase tracking-wider text-[#4A4466] border-b border-slate-205 pb-1 flex items-center gap-1.5">
                  <Award size={14} className="shrink-0" />
                  Certifications & Achievements
                </h2>
                <ul className="list-disc pl-5 text-xs text-slate-700 space-y-1">
                  <li><strong>NPTEL Certificate:</strong> HR Analytics (IIT Kharagpur Verified)</li>
                  <li><strong>NPTEL Certificate:</strong> Internet of Things (IIT/NIT Verified)</li>
                  <li><strong>Hackathon Victory:</strong> 1st Place at State-Level Hackathon</li>
                  <li><strong>Project Presentation:</strong> 2nd Place – State-Level Project Presentation Competition</li>
                </ul>
              </div>

            </div>
          </div>
        </div>

      </motion.div>
    </div>
  );
}
