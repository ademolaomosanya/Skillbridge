import type { Expert, Roadmap } from "./types";

export const experts: Expert[] = [
  {
    id: "maya-chen",
    name: "Maya Chen",
    title: "Senior Frontend Engineer",
    skills: ["React", "Next.js", "TypeScript", "Frontend architecture"],
    rating: 4.98,
    hourlyRate: 45,
    format: ["1-on-1", "Group"],
    bio: "Helps learners build production-ready React and Next.js apps.",
  },
  {
    id: "andre-wilson",
    name: "Andre Wilson",
    title: "Product Design Lead",
    skills: ["UI/UX", "Portfolio review", "Design systems"],
    rating: 4.94,
    hourlyRate: 38,
    format: ["1-on-1"],
    bio: "Coaches designers through practical portfolio and product critique.",
  },
  {
    id: "sofia-alvarez",
    name: "Sofia Alvarez",
    title: "Growth Marketing Strategist",
    skills: ["SEO", "Content marketing", "Analytics"],
    rating: 4.91,
    hourlyRate: 32,
    format: ["1-on-1", "Group"],
    bio: "Teaches practical growth systems for early-stage products.",
  },
];

export const roadmaps: Roadmap[] = [
  {
    id: "frontend-developer",
    title: "Frontend Developer",
    description: "A practical route from web basics to full-stack app delivery.",
    steps: [
      "HTML fundamentals",
      "CSS layout",
      "JavaScript",
      "React",
      "Next.js",
      "Deployment",
    ],
  },
  {
    id: "product-designer",
    title: "Product Designer",
    description: "Build the research, interface, and critique skills for product design.",
    steps: [
      "Design principles",
      "User research",
      "Wireframing",
      "Visual systems",
      "Prototyping",
      "Portfolio review",
    ],
  },
];
