import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    name: "TubeBoost",
    description:
      "The TubeBoost boilerplate includes a range of features, from AI-powered content generation to thumbnail creation, trending keyword detection, and more. With its scalable architecture and robust toolset, TubeBoost is the perfect starting point for building custom applications that integrate AI, data analysis, and content creation.",
    demoVideo: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "/projects/tube_boost.png",
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
    name: "BingeIt",
    description:
      "A modern movie exploration and booking platform featuring trailer previews, dynamic content from TMDB API, and seamless ticket booking with secure payment integration.",
    demoVideo: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "/projects/bingeit.png",
    liveUrl: "#",
    githubUrl: "https://github.com/RohitRaj129/BingeIt",
    technologies: [
      { name: "Next.js", icon: "/assets/nextjs.png" },
      { name: "React", icon: "/assets/react.png" },
      { name: "TypeScript", icon: "/assets/typescript.png" },
      { name: "Tailwind", icon: "/assets/tailwind.png" },
      { name: "Supabase", icon: "/assets/supabase.png" },
      // { name: "Razorpay", icon: "/assets/razorpay.png" },
    ],
    status: "building",
  },
  {
    id: 4,
    name: "AI Recruiter",
    description:
      "AI-driven hiring assistant that automates resume screening, candidate evaluation, and shortlisting to streamline the recruitment process.",
    demoVideo: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "/projects/ai_recruiter.png",
    liveUrl: "#",
    githubUrl: "https://github.com/RohitRaj129/AI-Recruiter",
    technologies: [
      { name: "Next.js", icon: "/assets/nextjs.png" },
      { name: "React", icon: "/assets/react.png" },
      { name: "JavaScript", icon: "/assets/js.png" },
      { name: "Tailwind", icon: "/assets/tailwind.png" },
      { name: "FastAPI", icon: "/assets/fastapi.png" },
      { name: "Supabase", icon: "/assets/supabase.png" },
    ],
    status: "building",
  },
];
