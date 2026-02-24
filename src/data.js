// portfolio content data
const base = import.meta.env.BASE_URL;

export const skillsData = [
  {
    category: "Languages",
    skills: ["Python", "C/C++", "Swift", "MATLAB", "JavaScript", "TypeScript", "HTML", "CSS"]
  },
  {
    category: "Technologies",
    skills: ["React", "Node.js", "Express", "PostgreSQL", "FastAPI", "MongoDB", "SQLite", "Ultralytics", "OpenCV", "PyTorch", "Redis"]
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "GitHub", "Render", "Postman", "Excel", "Cloud Computing (Render/Cloudflare R2)", "Roboflow", "Linux"]
  }
];

export const experiencesData = [
  {
    id: "utat-adcs",
    title: "Software Developer, Attitude Determination & Control Systems (ADCS)",
    company: "University of Toronto Aerospace Team (UTAT) - Space Systems",
    period: "Sep 2025 - Present",
    location: "Toronto, ON",
    description: "Built Python control system for Helmholtz cage satellite testing, supporting 50+ test sessions. Developed orbital simulation pipeline with SGP4 propagation for hardware-in-the-loop testing and created automated logging for telemetry debugging.",
    tags: ["Python", "Linux", "Control Systems", "SGP4", "Microcontrollers", "HWIL"],
    image: `${base}assets/experience-imgs/cubesat.avif`
  },
  {
    id: "materials-research",
    title: "Materials Science Engineering Research Intern",
    company: "Green Technologies Lab (University of Toronto)",
    period: "May 2025 - Aug 2025",
    location: "Toronto, ON",
    description: "Improved thermal conductivity of Phase Change Materials by 10% for EV batteries using biochar composites. Developed calcium-catalyzed pyrolysis process achieving faster thermal response at lower temperatures. Automated Raman spectroscopy analysis with Python, processing 100+ samples and cutting analysis time by 80%.",
    tags: ["Materials Science", "Research", "Python", "Fityk", "Data Analysis", "Raman Spectroscopy", "Composite Materials", "Analytical Lab Techniques"],
    image: `${base}assets/experience-imgs/XRD-Bruker.png`,
    // poster shown inside the experience popup
    poster: {
      src: `${base}assets/experience-imgs/green-tech-poster.png`,
      href: `${base}assets/experience-imgs/green-tech-poster.png`,
      alt: "Enhanced Thermal Conductivity in Wood Biochar Phase Change Material Dopants via Calcium-Catalyzed Graphitization (poster)",
      caption: "Research poster from Green Technologies Lab, presented at UnERD Summer 2025"
    }
  }
];

export const projectsData = [
  {
    id: "clearmark",
    title: "ClearMark",
    description: "iOS app for AI-powered grading with Google OAuth authentication and MVVM architecture. Built Node.js backend with PostgreSQL on Render, handling file uploads to Cloudflare R2 with CI/CD deployment.",
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
    id: "send",
    title: "Send",
    description: "Social bouldering iOS app with YOLOv8 hold detection and pathfinding algorithm that processes wall images in under 2 seconds. FastAPI backend handles ArUco marker camera calibration.",
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
    description: "Automated quality control system that detects defects in Kirkland plastic water bottles. Used YOLOv8 and OpenCV with Tkinter dashboard and SQLite logging. Trained on 300+ annotated images across 4 defect classes with Bytetrack bottle tracking.",
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

