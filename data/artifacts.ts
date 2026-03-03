import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    name: "TubeBoost",
    description:
      "The TubeBoost boilerplate includes a range of features, from AI-powered content generation to thumbnail creation, trending keyword detection, and more. With its scalable architecture and robust toolset, TubeBoost is the perfect starting point for building custom applications that integrate AI, data analysis, and content creation.",
    demoVideo: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "/projects/tubeBoost.png",
    liveUrl: "https://tubeboost-nine.vercel.app/",
    githubUrl: "https://github.com/RohitRaj129/TubeBoost",
    technologies: [
      { name: "React", icon: "/assets/react.png" },
      { name: "Next.js", icon: "/assets/nextjs.png" },
      { name: "TypeScript", icon: "/assets/typescript.png" },
      { name: "Tailwind", icon: "/assets/tailwind.png" },
      { name: "FastAPI", icon: "/assets/fastapi.png" },
      { name: "PostgreSQL", icon: "/assets/postgresql.png" },
    ],
    status: "building",
  },
  {
    id: 2,
    name: "Portfolio",
    description:
      "A collection of production-ready applications built with modern full-stack architecture, scalable backend systems, AI integrations, and performance-optimized frontend experiences.",
    demoVideo: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "/projects/portfolio.png",
    liveUrl: "https://www.rohitraj.me",
    githubUrl: "https://github.com/RohitRaj129/Portfolio0.1",
    technologies: [
      { name: "TypeScript", icon: "/assets/typescript.png" },
      { name: "Node.js", icon: "/assets/nodejs.png" },
      { name: "Next.js", icon: "/assets/nextjs.png" },
      { name: "Tailwind", icon: "/assets/tailwind.png" },
      { name: "React", icon: "/assets/react.png" },
      { name: "Figma", icon: "/assets/figma.png" },
    ],
    status: "working",
  },
  {
    id: 3,
    name: "MotionForge",
    description:
      "A visual animation timeline editor that exports production-ready Framer Motion and GSAP code from drag-and-drop sequences.",
    demoVideo: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&q=80",
    liveUrl: "#",
    githubUrl: "#",
    technologies: [
      { name: "React", icon: "/assets/react.png" },
      { name: "GSAP", icon: "/assets/gsap.png" },
    ],
    status: "working",
  },
  {
    id: 4,
    name: "DataWeave",
    description:
      "Schema-first data pipeline builder with a node-graph UI. Drag transformations, preview results live, and deploy to cloud.",
    demoVideo: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&q=80",
    liveUrl: "#",
    githubUrl: "#",
    technologies: [
      { name: "Next.js", icon: "/assets/nextjs.png" },
      { name: "Kubernetes", icon: "/assets/kubernetes.png" },
    ],
    status: "building",
  },
];
