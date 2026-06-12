import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import { AnimatePresence } from 'motion/react';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    // Check local storage or preference on mount
    const saved = localStorage.getItem('theme');
    if (saved) {
      return saved === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [activeSection, setActiveSection] = useState<string>('home');
  const [resumeOpen, setResumeOpen] = useState<boolean>(false);

  // Sync theme changes with document root
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Set up intersection observer for tracking active navbar links
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'experience', 'projects', 'certifications', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // Trigger when section occupies middle viewport area
      threshold: 0
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sections.forEach(secId => {
      const el = document.getElementById(secId);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach(secId => {
        const el = document.getElementById(secId);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen text-slate-800 dark:text-slate-100 bg-[#F1F7D4]/15 dark:bg-slate-950 flex flex-col transition-colors duration-300">
      
      {/* Dynamic Sticky Header Navigation */}
      <Navbar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        activeSection={activeSection} 
      />

      <main className="flex-grow">
        {/* Hero Banner Section */}
        <Hero 
          onScrollToSection={handleScrollToSection} 
          onOpenResume={() => setResumeOpen(true)} 
        />

        {/* About Me Story Blocks */}
        <About />

        {/* Dynamic familiar Skill progress panel */}
        <Skills />

        {/* Skill Rank Inc Internship Timeline */}
        <Experience />

        {/* Featured Projects Interactive Portfolio */}
        <Projects />

        {/* Verified elite credentials and competition triumphs */}
        <Certifications />

        {/* Interactive Recruiters Connection CRM */}
        <Contact />
      </main>

      {/* Global Footer component */}
      <Footer />

      {/* Animate-Presence backed Printable Resume layout */}
      <AnimatePresence>
        {resumeOpen && (
          <ResumeModal 
            isOpen={resumeOpen} 
            onClose={() => setResumeOpen(false)} 
          />
        )}
      </AnimatePresence>

    </div>
  );
}
