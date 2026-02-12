// portfolio content data

export const skillsData = [
  {
    category: "Languages",
    skills: ["Python", "C", "Swift", "Matlab", "JavaScript", "HTML", "CSS"]
  },
  {
    category: "Technologies",
    skills: ["React", "Node.js", "Express", "PostgreSQL", "FastAPI", "MongoDB", "SQLite", "Ultralytics", "OpenCV", "PyTorch"]
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "GitHub", "Render", "Postman", "Excel", "Cloud Computing (Render/Cloudflare R2)"]
  }
];

export const experiencesData = [
  {
    id: "utat-adcs",
    title: "Software Developer, Attitude Determination & Control Systems (ADCS)",
    company: "University of Toronto Aerospace Team (UTAT) - Space Systems",
    period: "Sep 2025 - Present",
    location: "Toronto, ON",
    description: "built Python control system for Helmholtz cage satellite ground testing, supporting 50+ test sessions. implemented 7-component orbital simulation pipeline with SGP4 propagation to generate 3D magnetic field vectors for hardware-in-the-loop testing. led troubleshooting and post-test debugging by developing an automated logging infrastructure for 10+ telemetry parameters.",
    tags: ["Python", "Satellite Systems", "Control Systems", "SGP4", "Hardware-in-the-Loop"],
    image: "/assets/experience-imgs/cubesat.avif"
  },
  {
    id: "materials-research",
    title: "Materials Science Engineering Research Intern",
    company: "Green Technologies Lab (University of Toronto)",
    period: "May 2025 - Aug 2025",
    location: "Toronto, ON",
    description: "improved Phase Change Material (PCM) thermal conductivity by 10% for EV battery applications using novel biochar composites. developed calcium-catalyzed pyrolysis process achieving 10% faster thermal response at 200°C lower processing temperature. automated Raman spectroscopy analysis using Python, processing 100+ biochar samples and reducing manual analysis time by 80%.",
    tags: ["Materials Science", "Research", "Python", "Fityk", "Data Analysis", "Raman Spectroscopy", "Composite Materials", "Analytical Lab Techniques"],
    image: "/assets/experience-imgs/XRD-Bruker.png",
    // poster shown inside the experience popup
    poster: {
      src: "/assets/experience-imgs/green-tech-poster.png",
      href: "/assets/experience-imgs/green-tech-poster.png",
      alt: "Enhanced Thermal Conductivity in Wood Biochar Phase Change Material Dopants via Calcium-Catalyzed Graphitization (poster)",
      caption: "Research poster from Green Technologies Lab, presented at UnERD Summer 2025"
    }
  }
];

export const projectsData = [
  {
    id: "clearmark",
    title: "ClearMark",
    description: "translated user requirements for AI grading into a responsive iOS application, adhering to Apple design principles. implemented secure authentication using Google OAuth 2.0 and designed MVVM architecture with RESTful API integration. deployed Node.js backend on Render with PostgreSQL database, handling file uploads to Cloudflare R2 via CI/CD.",
    tags: ["Swift", "Node.js", "Express", "PostgreSQL", "Google OAuth"],
    image: "/assets/project-imgs/SolarDistillation.png",
    // optional: a small looping preview video (recommended over gifs)
    // add file under `public/assets/project-videos/` then set:
    // media: { type: "video", src: "/assets/project-videos/clearmark-demo.mp4", poster: "/assets/project-imgs/clearmark-poster.png" }
    media: { type: "video", src: "/assets/project-videos/clearmark-demo.mp4" },
    link: "",
    githubLink: "https://github.com/ClearMarkApp/ios"
  },
  {
    id: "send",
    title: "Send",
    description: "built social bouldering iOS app, integrating YOLOv8 hold detection and pathfinding algorithm, processing wall images in under 2 seconds. deployed FastAPI backend with ArUco marker calibration for camera calibration.",
    tags: ["Swift", "YOLOv8", "OpenCV", "FastAPI", "MongoDB"],
    image: "/assets/project-imgs/send-presentation.png",
    link: "",
    githubLink: "https://github.com/raiyan37/Send."
  },
  {
    id: "water-bottle-defect",
    title: "Water Bottle Defect Detection System",
    description: "built automated quality control system using YOLOv8 + OpenCV, with a Tkinter monitoring dashboard and SQLite logging. collected and annotated 300+ images across 4 defect classes to train/validate a YOLOv8 object detection model. implemented per-bottle ID assignment with a centroid-based tracker.",
    tags: ["Python", "YOLOv8", "OpenCV", "SQLite", "Tkinter"],
    image: "/assets/project-imgs/defectdetectionscreenie.png",
    link: "",
    githubLink: "https://github.com/lindsay-cheng/defect-detection"
  },

  {
    id: "reversi-game-bot",
    title: "Reversi Game Bot",
    description: "implemented minimax engine with alpha-beta pruning in C, achieving 800ms move decisions at 7-ply search depth. designed heuristic evaluation with position weighting and mobility analysis, improving win rate by 20% over baseline model.",
    tags: ["C"],
    image: "/assets/project-imgs/othello.jpg",
    link: "",
    githubLink: "https://github.com/lindsay-cheng/game-bot"
  }
];

export const contactData = {
  name: "Lindsay Cheng",
  title: "Computer Engineering Student",
  university: "University of Toronto - Toronto, Ontario, Canada",
  location: "Richmond Hill, Ontario, Canada",
  email: "lindsaycheng2@gmail.com",
  phone: "+1 (647) 898 6526",
  social: {
    github: "https://github.com/lindsay-cheng",
    linkedin: "https://www.linkedin.com/in/lindsay-cheng-b02175309/",
    instagram: "https://www.instagram.com/l.cheng__/?hl=en"
  }
};

