import type { Expert, Roadmap, SessionFormat } from "./types";

const names = [
  "Maya Chen",
  "Andre Wilson",
  "Sofia Alvarez",
  "Liam Okafor",
  "Priya Shah",
  "Noah Bennett",
  "Amara Johnson",
  "Ethan Brooks",
  "Fatima Hassan",
  "Lucas Martin",
  "Grace Kim",
  "Daniel Mensah",
  "Elena Rodriguez",
  "Hiro Tanaka",
  "Nora Patel",
  "Marcus Webb",
  "Aisha Bello",
  "Jonas Meyer",
  "Chloe Dubois",
  "Samuel Reed",
];

const titles = [
  "Senior Frontend Engineer",
  "Product Design Lead",
  "Growth Marketing Strategist",
  "Backend Engineer",
  "Data Analyst",
  "UX Researcher",
  "Cloud Solutions Architect",
  "Mobile App Developer",
  "Cybersecurity Consultant",
  "Product Manager",
];

const skillGroups = [
  ["React", "Next.js", "TypeScript", "Frontend architecture"],
  ["UI/UX", "Portfolio review", "Design systems", "Figma"],
  ["SEO", "Content marketing", "Analytics", "Growth strategy"],
  ["Node.js", "PostgreSQL", "API design", "Prisma"],
  ["Python", "SQL", "Dashboards", "Data storytelling"],
  ["User research", "Interviewing", "Journey mapping", "Usability testing"],
  ["AWS", "Serverless", "DevOps", "System design"],
  ["React Native", "Flutter", "Mobile UX", "App releases"],
  ["Security audits", "Threat modeling", "Cloud security", "Compliance"],
  ["Roadmapping", "Discovery", "Stakeholder management", "Metrics"],
];

const locations = [
  "Lagos, Nigeria",
  "London, United Kingdom",
  "Toronto, Canada",
  "Berlin, Germany",
  "Austin, United States",
  "Nairobi, Kenya",
  "Amsterdam, Netherlands",
  "Cape Town, South Africa",
];

const reviewNames = ["Sarah Chen", "James Carter", "Elena Rodriguez", "Mina Park"];

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function makeExpert(index: number): Expert {
  const name = names[index % names.length];
  const title = titles[index % titles.length];
  const skills = skillGroups[index % skillGroups.length];
  const id =
    index === 0
      ? "maya-chen"
      : index === 1
        ? "andre-wilson"
        : index === 2
          ? "sofia-alvarez"
          : `${slugify(name)}-${index + 1}`;
  const format: SessionFormat[] = index % 3 === 0 ? ["1-on-1", "Group"] : ["1-on-1"];

  return {
    id,
    name,
    title,
    skills,
    rating: Number((4.72 + (index % 27) / 100).toFixed(2)),
    hourlyRate: 28 + (index % 9) * 5,
    format,
    bio: `Practical ${skills[0]} mentor helping learners build confidence through live sessions and focused feedback.`,
    about: `${name} is a hands-on ${title.toLowerCase()} who teaches through practical examples, thoughtful feedback, and live problem solving. Sessions are structured around your current level, the outcome you want, and the gaps that are slowing you down.`,
    location: locations[index % locations.length],
    languages: index % 4 === 0 ? ["English", "French"] : ["English"],
    sessionsTaught: 80 + index * 7,
    responseTime: index % 2 === 0 ? "Usually responds in 2 hours" : "Usually responds same day",
    availability: [
      index % 2 === 0 ? "Weekday evenings" : "Weekday mornings",
      index % 3 === 0 ? "Saturday sessions" : "Flexible async prep",
      "Remote sessions",
    ],
    teachingStyle: [
      "Live walkthroughs",
      "Actionable feedback",
      "Practice assignments",
      index % 2 === 0 ? "Portfolio/project review" : "Beginner-friendly pacing",
    ],
    outcomes: [
      `Build confidence with ${skills[0]}`,
      "Understand what to learn next",
      "Leave each session with clear action items",
      "Get practical feedback on real work",
    ],
    experience: [
      `${3 + (index % 8)}+ years professional experience`,
      `Specializes in ${skills.slice(0, 2).join(" and ")}`,
      `${80 + index * 7}+ learner sessions delivered`,
    ],
    reviews: [
      {
        name: reviewNames[index % reviewNames.length],
        quote: `Clear, practical, and easy to follow. I left with a concrete plan for improving my ${skills[0]} skills.`,
      },
      {
        name: reviewNames[(index + 1) % reviewNames.length],
        quote: "The session felt personal, focused, and immediately useful for the project I was working on.",
      },
    ],
  };
}

export const experts: Expert[] = Array.from({ length: 100 }, (_, index) =>
  makeExpert(index),
);

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
