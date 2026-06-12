export interface Skill {
  name: string;
  category: 'languages' | 'frontend' | 'frameworks' | 'database' | 'cloud_tools' | 'concepts';
  level: number; // percentage
  icon: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  timeline: string;
  points: string[];
}

export interface Project {
  title: string;
  technologies: string[];
  description: string;
  achievements?: string;
  github: string;
  demoUrl?: string;
  points: string[];
  category: 'python-ml' | 'java-spring' | 'fullstack';
}

export interface Education {
  degree: string;
  institution: string;
  timeline: string;
  score: string;
}

export interface Certification {
  name: string;
  issuer: string;
  details?: string;
}

export interface Achievement {
  title: string;
  placement: string;
  competition: string;
}

export const skillsData: Skill[] = [
  // Languages
  { name: 'Java', category: 'languages', level: 90, icon: 'Code' },
  { name: 'C', category: 'languages', level: 75, icon: 'FileCode' },
  { name: 'Python', category: 'languages', level: 85, icon: 'Terminal' },
  { name: 'SQL', category: 'languages', level: 80, icon: 'Database' },
  
  // Frontend
  { name: 'React.js', category: 'frontend', level: 85, icon: 'Layout' },
  { name: 'JavaScript', category: 'frontend', level: 85, icon: 'Atom' },
  { name: 'HTML5', category: 'frontend', level: 95, icon: 'FileHtml' },
  { name: 'CSS3 / Tailwind', category: 'frontend', level: 90, icon: 'Palette' },

  // Frameworks
  { name: 'Spring Boot', category: 'frameworks', level: 80, icon: 'Cpu' },
  { name: 'REST APIs', category: 'frameworks', level: 85, icon: 'GitMerge' },
  
  // Databases
  { name: 'MySQL', category: 'database', level: 85, icon: 'HardDrive' },

  // Cloud & Tools
  { name: 'AWS (Batch, EC2, S3)', category: 'cloud_tools', level: 75, icon: 'Cloud' },
  { name: 'GitHub', category: 'cloud_tools', level: 90, icon: 'Github' },
  { name: 'Postman', category: 'cloud_tools', level: 85, icon: 'Send' },
  { name: 'IntelliJ IDEA', category: 'cloud_tools', level: 85, icon: 'PenTool' },

  // Concepts
  { name: 'Agile Workflows', category: 'concepts', level: 80, icon: 'Users' },
  { name: 'OOP (Object Oriented Prog)', category: 'concepts', level: 85, icon: 'Boxes' },
  { name: 'CRUD Architectures', category: 'concepts', level: 90, icon: 'GitPullRequest' }
];

export const experienceData: Experience[] = [
  {
    role: 'Software Developer Intern',
    company: 'Skill Rank Inc.',
    location: 'USA (Remote)',
    timeline: 'Aug 2025 – March 2026',
    points: [
      'Built and maintained full-stack features using React.js and Python, supporting UI components and RESTful APIs across 5+ application modules.',
      'Configured AWS Batch pipelines (job definitions, compute environments, job queues) enabling scalable cloud data processing workflows.',
      'Collaborated in an Agile team using Git for version control, code reviews, and sprint-based delivery cycles.'
    ]
  }
];

export const projectsData: Project[] = [
  {
    title: 'Bidirectional Sign Language Translation System',
    technologies: ['Python', 'NLP', 'MediaPipe', 'CNN', 'LSTM'],
    category: 'python-ml',
    description: 'Developed a real-time translating system bridging the gap between sound/text and gestures for accessibility.',
    github: 'https://github.com/muthu-p29/Sign-language',
    points: [
      'Developed a real-time Text-to-Sign and Sign-to-Text translation system using Computer Vision and Deep Learning.',
      'Implemented gesture recognition with MediaPipe, CNN, and LSTM models to improve accessibility for hearing and speech-impaired users.'
    ]
  },
  {
    title: 'Employee Management System',
    technologies: ['Java', 'Spring Boot', 'MySQL', 'REST API'],
    category: 'java-spring',
    description: 'An enterprise CRUD application for managing personnel records, secure access role control, and reporting.',
    github: 'https://github.com/muthu-p29/Employee-Management-System',
    points: [
      'Developed a full-stack web app with complete CRUD operations, RESTful APIs, and MVC architecture for efficient employee record management and secure data handling.',
      'Implemented role-based authentication and optimized database queries, improving application performance and ensuring secure user access.'
    ]
  },
  {
    title: 'Eye Watch – Assistive Navigation',
    technologies: ['Python', 'OpenCV', 'Machine Learning', 'NLP'],
    category: 'python-ml',
    description: 'An AI-driven navigation assistant designed to help visually impaired individuals move around safely.',
    github: 'https://github.com/muthu-p29',
    achievements: '🏆 Won 2nd Place at State-Level Competition',
    points: [
      'Built an ML + image processing system for visually impaired users with real-time path detection (90%+ accuracy) and multilingual NLP translation.',
      'Integrated voice-guided obstacle alerts and text-to-speech support to enhance real-time navigation and accessibility.'
    ]
  }
];

export const educationData: Education[] = [
  {
    degree: 'B.Tech. Computer Science & Business Systems',
    institution: 'Francis Xavier Engineering College',
    timeline: '2022 – 2026',
    score: 'CGPA: 8.4 / 10'
  },
  {
    degree: 'HSC (Class XII)',
    institution: 'ChristhuRaja Hr. Sec School',
    timeline: 'Completed 2022',
    score: 'Percentage: 84.5%'
  },
  {
    degree: 'SSLC (Class X)',
    institution: 'Saratha Matriculation School',
    timeline: 'Completed 2020',
    score: 'Percentage: 83.2%'
  }
];

export const certificationsData: Certification[] = [
  { name: 'NPTEL — HR Analytics', issuer: 'IIT Kharagpur / Government of India' },
  { name: 'NPTEL — Internet of Things', issuer: 'IIT/NIT Verified', details: 'NPTEL elite certification on advanced IoT concepts' }
];

export const achievementsData: Achievement[] = [
  { title: '1st Place Winner', placement: '1st Place', competition: 'State-Level Hackathon' },
  { title: '2nd Place Winner', placement: '2nd Place', competition: 'State-Level Project Presentation Competition' }
];
