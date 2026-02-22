import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    name: "TubeBoost",
    description:
      "An AI-powered creative studio that turns rough sketches into production-ready UI components using diffusion models.",
    demoVideo: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    liveUrl: "#",
    githubUrl: "#",
    technologies: [
      { name: "React", icon: "/assets/react.png" },
      { name: "Python", icon: "/assets/python.png" },
      { name: "TensorFlow", icon: "/assets/tensorflow.png" },
      { name: "FastAPI", icon: "/assets/fastapi.png" },
      { name: "Docker", icon: "/assets/docker.png" },
      { name: "Redis", icon: "/assets/redis.png" },
      { name: "PostgreSQL", icon: "/assets/postgresql.png" },
    ],
    status: "working",
  },
  {
    id: 2,
    name: "VaultSync",
    description:
      "Real-time collaborative code editor with version control, live cursors, and conflict-free merging built on CRDTs.",
    demoVideo: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
    liveUrl: "#",
    githubUrl: "#",
    technologies: [
      { name: "TypeScript", icon: "/assets/typescript.png" },
      { name: "Node.js", icon: "/assets/nodejs.png" },
      { name: "MongoDB", icon: "/assets/mongodb.png" },
      { name: "Socket.io", icon: "/assets/socketio.png" },
    ],
    status: "building",
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
