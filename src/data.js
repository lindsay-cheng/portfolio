// portfolio content data
const base = import.meta.env.BASE_URL;

/**
 * @typedef {Object} Poster
 * @property {string} src
 * @property {string} [alt]
 * @property {string} [caption]
 */

/**
 * @typedef {Object} Experience
 * @property {string} id
 * @property {string} title
 * @property {string} company
 * @property {string} period
 * @property {string} [location]
 * @property {string} description
 * @property {string[]} [tags]
 * @property {string} image
 * @property {Poster} [poster]
 */

/**
 * @typedef {'intrinsic' | 'letterbox' | 'cover'} MediaPresentation
 */

/**
 * @typedef {Object} ProjectMedia
 * @property {'video'} type
 * @property {string} src
 * @property {string} [poster]
 * @property {MediaPresentation} [presentation]
 * @property {string} [backgroundSrc]
 */

/**
 * @typedef {Object} Project
 * @property {string} id
 * @property {string} title
 * @property {string} description
 * @property {string[]} [tags]
 * @property {string} [image]
 * @property {ProjectMedia} [media]
 * @property {string} [githubLink]
 */

export const heroData = {
  name: "Hi, I'm Lindsay",
  thesis: "Computer Engineering @ UofT, passionate about software, AI, machine learning, and computer vision.",
  about: {
    heading: "About",
    beforeEducationLink: "My name is Lindsay Cheng, and I'm currently studying computer engineering at the ",
    educationLinkText: "University of Toronto",
    afterEducationLink: ". I like playing badminton, tennis, going to the gym, and playing piano. Currently based in Toronto.",
  },
  photo: {
    src: `${base}assets/images-main/mountain-me.webp`,
    alt: "Lindsay Cheng",
  },
};

export const educationData = {
  school: "University of Toronto St. George",
  subtitle: "BASc Computer Engineering + PEY Co-op",
  awards: "First Year Summer Research Fellowship (2025)",
  period: "Expected April 2030",
  gpa: "3.88/4.0 cGPA",
  image: {
    src: `${base}assets/images-main/U-of-T-campus-St.-George.webp`,
    alt: "University of Toronto Campus",
  },
};

export const skillsData = [
  {
    category: "Languages",
    skills: ["Python", "C/C++", "Swift", "TypeScript", "SQL", "Tailwind CSS", "MATLAB"]
  },
  {
    category: "Frameworks & Libraries",
    skills: ["React", "Node.js", "Next.js", "Express", "Drizzle ORM", "FastAPI", "OpenCV", "Ultralytics"]
  },
  {
    category: "Technologies",
    skills: ["PostgreSQL", "MongoDB", "SQLite", "Redis", "Docker", "BullMQ", "NGINX"]
  },
  {
    category: "Developer Tools",
    skills: ["Git", "GitHub", "Postman", "Playwright", "Turborepo", "Cloudflare R2", "Linux"]
  }
];

export const experiencesData = [
  {
    id: "yep-education",
    title: "Software Engineer",
    company: "YEP Education",
    period: "May 2026 - Aug 2026",
    location: "Toronto, ON",
    description: "Scaling core architectures and LMS.",
    tags: ["PostgreSQL", "Redis", "Docker", "Playwright", "Sentry"],
    image: `${base}assets/experience-imgs/yep-logo.jpg`
  },
  {
    id: "utat-adcs",
    title: "Software Developer, Attitude Determination & Control Systems (ADCS)",
    company: "University of Toronto Aerospace Team (UTAT) - Space Systems",
    period: "Sep 2025 - Present",
    location: "Toronto, ON",
    description: "Designed Python control system for a 3-axis Helmholtz cage used in satellite hardware-in-the-loop testing with PID controller.",
    tags: ["Python", "Linux", "Control Systems", "PID", "HWIL"],
    image: `${base}assets/experience-imgs/cubesat.avif`
  },
  {
    id: "materials-research",
    title: "Materials Science Engineering Research Intern",
    company: "Green Technologies Lab (University of Toronto)",
    period: "May 2025 - Aug 2025",
    location: "Toronto, ON",
    description: "Researched ways to prevent EV batteries from blowing up using doped biochar composites made at 200°C lower processing temperatures than standard methods. Automated spectral analysis with Python, processing 100+ samples and cutting manual analysis time by 80%.",
    tags: ["Materials Science", "Research", "Python", "Fityk", "Data Analysis", "Raman Spectroscopy", "Analytical Lab Techniques"],
    image: `${base}assets/experience-imgs/XRD-Bruker.png`,
    poster: {
      src: `${base}assets/experience-imgs/green-tech-poster.png`,
      alt: "Enhanced Thermal Conductivity in Wood Biochar Phase Change Material Dopants via Calcium-Catalyzed Graphitization (poster)",
      caption: "Research poster presented at UnERD Summer 2025 (First Year Summer Research Fellowship)"
    }
  }
];

export const projectsData = [
  {
    id: "gitagrip",
    title: "GitAGrip",
    description: "Lightweight Application Security Posture Management (ASPM) tool for GitHub repos. Orchestrates SAST, secrets detection, SCA/IaC/container scanning, and quality tools server-side. Aggregates findings into single score and dashboard. Made for open source maintainers and solo developers. (WIP)",
    tags: ["TypeScript", "Next.js", "Express", "PostgreSQL", "Redis", "BullMQ", "Docker", "NGINX", "Linux", "Hetzner Cloud"],
    image: `${base}assets/project-imgs/gitagrip-mockup.jpg`,
    githubLink: "https://github.com/nicholasjano/gitagrip"
  },
  { 
    id: "clearmark",
    title: "ClearMark",
    description: "Full-stack iOS app for AI-powered grading and course management. Uses VisionKit for document scanning and carefully engineered LLM prompts for rubric-aligned evaluation, with strict JSON guardrails achieving a 98% parsing success rate. Built with MVVM architecture, a Node.js/Express backend on Render, Google OAuth 2.0, and Cloudflare R2 for role-based access control.",
    tags: ["Swift", "Node.js", "Express", "PostgreSQL", "Google OAuth"],
    media: {
      type: "video",
      src: `${base}assets/project-videos/clearmark-demo.mp4`,
      presentation: "cover",
    },
    githubLink: "https://github.com/ClearMarkApp"
  },
  {
    id: "villara",
    title: "Villara (Startup)",
    description: "Connecting talents, freelancers, and trade skills in communities. Services include haircuts, nails, automotive repairs, and more in the coming future.",
    tags: ["React", "TypeScript", "Java", "Spring Boot", "PostgreSQL", "Redux", "Google OAuth", "Tailwind CSS", "AWS EC2", "AWS S3", "NGINX", "Linux", "Docker"],
    image: `${base}assets/project-imgs/villara.webp`,
  },
  {
    id: "water-bottle-defect",
    title: "Water Bottle Defect Detection System",
    description: "Automated quality control system for detecting water bottle defects using YOLO and OpenCV, with a Tkinter monitoring dashboard and SQLite defect logging. Collected and annotated 300+ images across 4 defect classes, training a YOLO11s model to 93.1% accuracy. Uses ByteTrack for per-bottle ID assignment and multi-object tracking.",
    tags: ["Python", "Ultralytics", "OpenCV", "SQLite", "Tkinter"],
    media: {
      type: "video",
      src: `${base}assets/project-videos/defect-detection-demo.mp4`,
    },
    githubLink: "https://github.com/lindsay-cheng/defect-detection"
  },
  {
    id: "send",
    title: "Send",
    description: "Social bouldering iOS app with YOLO hold detection and a pathfinding algorithm that processes wall images in under 2 seconds. FastAPI backend uses ArUco marker calibration to accurately map camera coordinates to real wall positions.",
    tags: ["Swift", "YOLOv8", "OpenCV", "FastAPI", "MongoDB"],
    media: {
      type: "video",
      src: `${base}assets/project-videos/send-demo.mp4`,
      presentation: "letterbox",
      backgroundSrc: `${base}assets/project-imgs/tahoe-bg.jpg`,
    },
    githubLink: "https://github.com/raiyan37/Send."
  },
  {
    id: "reversi-game-bot",
    title: "Reversi Game Bot",
    description: "A terminal-based implementation of Reversi/Othello with a bot opponent that runs on a minimax engine with alpha-beta pruning in C.",
    tags: ["C"],
    image: `${base}assets/project-imgs/othello.jpg`,
    githubLink: "https://github.com/lindsay-cheng/game-bot"
  }
];

export const contactData = {
  email: "lindsaycheng2@gmail.com",
  phone: "+1 (647) 898 6526",
  social: {
    github: "https://github.com/lindsay-cheng",
    linkedin: "https://www.linkedin.com/in/lindsay-cheng-b02175309/",
  }
};

export const sectionIds = {
  home: 'home',
  about: 'about',
  experience: 'experience',
  education: 'education',
  skills: 'skills',
  projects: 'projects',
  contact: 'contact',
};

export const navItems = [
  { type: 'scroll', label: 'Home', icon: 'home', targetId: sectionIds.home },
  { type: 'scroll', label: 'Contact', icon: 'mail', targetId: sectionIds.contact },
  { type: 'separator' },
  { type: 'external', label: 'Resume', icon: 'file', href: `${base}assets/nav-bar-content/crying.GIF` },
  { type: 'external', label: 'GitHub', icon: 'github', href: contactData.social.github },
  { type: 'external', label: 'LinkedIn', icon: 'linkedin', href: contactData.social.linkedin },
];

