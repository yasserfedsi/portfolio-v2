import { staticData } from "@/static/static";
import type { StaticImageData } from "next/image";

interface ProjectsProp {
  title: string;
  description: string;
  image: string | StaticImageData;
  stack: string[];
  url: string;
}

export const projects: ProjectsProp[] = [
  {
    title: "Khwaris",
    description:
      "Khwaris is an Algiers-based software & AI company crafting scalable products, intelligent systems, and data-driven platforms for ambitious teams worldwide.",
    image: staticData.khwaris,
    stack: ["Next.js", "CSS", "ShadcnUI", "Claude"],
    url: "https://khwaris.vercel.app/",
  },
  {
    title: "Mindexa",
    description:
      "Mindexa is a library of Courses, Exercises , Exams and several other documents for all university students.",
    image: staticData.projectBackground,
    stack: ["Next.js", "Tailwindcss", "MongoDB", "Flask", "Python"],
    url: "https://mindexa-edu.vercel.app/",
  },
  {
    title: "Mathlib",
    description:
      "The newest Python mathematics library crafted by talented Algerian developers.",
    image: staticData.projectBackground,
    stack: ["Python"],
    url: "https://mathlib.yasserfedsi.dev/",
  },
  {
    title: "ARC 4",
    description: "Modern registration platform for Algerian Robot Cup.",
    image: staticData.projectBackground,
    stack: ["Svelte", "Sveltekit", "MariaDB", "Docker", "TailwindCSS"],
    url: "https://arc.celec.codes/",
  },
  {
    title: "CELEC STOCK",
    description: "Inventory tracking platform with Firebase support.",
    image: staticData.projectBackground,
    stack: [
      "NextJS",
      "PostgreSQL",
      "TailwindCSS",
      "Firebase",
      "Axios",
      "Docker",
      "Nginx",
    ],
    url: "https://stock-manager.celec.codes/",
  },
  {
    title: "Certificate Generator",
    description:
      "Certificate Generator made to serve the problem of certifications for participants",
    image: staticData.projectBackground,
    stack: [
      "Python",
      "Flask",
      "MongoDB",
      "React.js",
      "TailwindCss",
      "Axios",
      "Firebase",
    ],
    url: "https://certificate-generator.celec.codes/",
  },
  {
    title: "CELEC Official Website",
    description: "The official website for CELEC CLUB",
    image: staticData.projectBackground,
    stack: ["Next.js", "TailwindCss", "Docker", "Nginx"],
    url: "https://www.celec.codes/",
  },
  {
    title: "ARC Backend System",
    description: "The official backend system for Algerian Robot Cup competition",
    image: staticData.projectBackground,
    stack: ["Node.js", "Express.js", "PrismaORM", "PostgreSQL", "Docker, Nginx"],
    url: "#",
  },
];
