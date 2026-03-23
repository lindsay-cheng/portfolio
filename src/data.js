// portfolio content data
const base = import.meta.env.BASE_URL;

export const skillsData = [
  {
    category: "Languages",
    skills: ["Python", "C/C++", "Swift", "JavaScript", "TypeScript", "HTML", "Tailwind CSS", "MATLAB"]
  },
  {
    category: "Frameworks & Libraries",
    skills: ["React", "Node.js", "Next.js", "Express", "Drizzle ORM", "FastAPI", "OpenCV"]
  },
  {
    category: "Technologies",
    skills: ["PostgreSQL", "MongoDB", "SQLite", "Redis", "Docker", "BullMQ", "NGINX"]
  },
  {
    category: "Developer Tools",
    skills: ["Git", "GitHub", "Postman", "Turborepo", "Cloudflare R2", "Linux"]
  }
];

export const experiencesData = [
  {
    id: "utat-adcs",
    title: "Software Developer, Attitude Determination & Control Systems (ADCS)",
    company: "University of Toronto Aerospace Team (UTAT) - Space Systems",
    period: "Sep 2025 - Present",
    location: "Toronto, ON",
    description: "Writing a Python control system for a 3-axis Helmholtz cage used in satellite hardware-in-the-loop testing. Built a closed-loop PID controller with real-time magnetometer feedback to generate arbitrary 3D magnetic field vectors, and set up an automated data logging pipeline recording field vectors, coil currents, and timestamps at 1 Hz for post-test analysis.",
    tags: ["Python", "Linux", "Control Systems", "PID", "HWIL"],
    image: `${base}assets/experience-imgs/cubesat.avif`
  },
  {
    id: "materials-research",
    title: "Materials Science Engineering Research Intern",
    company: "Green Technologies Lab (University of Toronto)",
    period: "May 2025 - Aug 2025",
    location: "Toronto, ON",
    description: "Researched Phase Change Materials for EV battery thermal management using novel biochar composites. Developed a calcium-catalyzed pyrolysis process that hit 10% faster thermal response at 200°C lower processing temperatures than standard methods. Automated Raman spectroscopy analysis with Python, processing 100+ samples and cutting manual analysis time by 80%.",
    tags: ["Materials Science", "Research", "Python", "Fityk", "Data Analysis", "Raman Spectroscopy", "Composite Materials", "Analytical Lab Techniques"],
    image: `${base}assets/experience-imgs/XRD-Bruker.png`,
    // poster shown inside the experience popup
    poster: {
      src: `${base}assets/experience-imgs/green-tech-poster.png`,
      href: `${base}assets/experience-imgs/green-tech-poster.png`,
      alt: "Enhanced Thermal Conductivity in Wood Biochar Phase Change Material Dopants via Calcium-Catalyzed Graphitization (poster)",
      caption: "Research poster presented at UnERD Summer 2025 (First Year Summer Research Fellowship)"
    }
  }
];

export const projectsData = [
  {
    id: "clearmark",
    title: "ClearMark",
    description: "Full-stack iOS app for AI-powered grading and course management. Uses VisionKit for document scanning and carefully engineered LLM prompts for rubric-aligned evaluation, with strict JSON guardrails achieving a 98% parsing success rate. Built with MVVM architecture, a Node.js/Express backend on Render, Google OAuth 2.0, and Cloudflare R2 for role-based access control.",
    tags: ["Swift", "Node.js", "Express", "PostgreSQL", "Google OAuth"],
    image: `${base}assets/project-imgs/SolarDistillation.png`,
    // optional: a small looping preview video (recommended over gifs)
    // add file under `public/assets/project-videos/` then set:
    // media: { type: "video", src: "assets/project-videos/clearmark-demo.mp4", poster: "assets/project-imgs/clearmark-poster.png" }
    media: {
      type: "video",
      src: `${base}assets/project-videos/clearmark-demo.mp4`
    },
    link: "",
    githubLink: "https://github.com/ClearMarkApp/ios"
  },
  {
    id: "villara",
    title: "Villara (Startup)",
    description: "Connecting talents, freelancers, and trade skills in communities. Services include haircuts, nails, automotive repairs, and more in the coming future. (WIP) ",
    tags: ["React", "Typescript", "Java", "Spring Boot", "PostgreSQL", "Redux", "Google OAuth", "Tailwind CSS", "AWS EC2", "AWS S3", "NGINX", "Linux", "Docker"],
    image: `${base}assets/project-imgs/villara-FWUEIDcn.png`,
    link: "",
  },
  {
    id: "send",
    title: "Send",
    description: "Social bouldering iOS app with YOLOv8 hold detection and a pathfinding algorithm that processes wall images in under 2 seconds. FastAPI backend uses ArUco marker calibration to accurately map camera coordinates to real wall positions.",
    tags: ["Swift", "YOLOv8", "OpenCV", "FastAPI", "MongoDB"],
    image: `${base}assets/project-imgs/send-presentation.png`,
    media: { 
      type: "video", 
      src: `${base}assets/project-videos/send-demo.mp4`,
      // letterbox background image behind slimmer video aspect ratios
      backgroundSrc: `${base}assets/project-imgs/tahoe-bg.jpg`
    },
    link: "",
    githubLink: "https://github.com/raiyan37/Send."
  },
  {
    id: "water-bottle-defect",
    title: "Water Bottle Defect Detection System",
    description: "Automated quality control system for detecting water bottle defects using YOLOv8 and OpenCV, with a Tkinter monitoring dashboard and SQLite defect logging. Collected and annotated 300+ images across 4 defect classes, training a YOLOv8n model over 100 epochs to 95.9% mAP@50-95. Uses ByteTrack for per-bottle ID assignment and multi-object tracking.",
    tags: ["Python", "YOLOv8", "OpenCV", "SQLite", "Tkinter"],
    media: { 
      type: "video", 
      src: `${base}assets/project-videos/defect-detection-demo.mp4`
    },
    link: "",
    githubLink: "https://github.com/lindsay-cheng/defect-detection"
  },
  {
    id: "reversi-game-bot",
    title: "Reversi Game Bot",
    description: "Minimax engine with alpha-beta pruning in C, making moves in 800ms at 7-ply depth. Heuristic evaluation uses position weighting and mobility analysis, improving win rate by 20%.",
    tags: ["C"],
    image: `${base}assets/project-imgs/othello.jpg`,
    link: "",
    githubLink: "https://github.com/lindsay-cheng/game-bot"
  }
];

export const contactData = {
  name: "Lindsay Cheng",
  title: "Computer Engineering",
  email: "lindsaycheng2@gmail.com",
  phone: "+1 (647) 898 6526",
  social: {
    github: "https://github.com/lindsay-cheng",
    linkedin: "https://www.linkedin.com/in/lindsay-cheng-b02175309/",
  }
};

