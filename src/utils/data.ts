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
    title: "Mindexa",
    description:
      "Mindexa is a library of Courses, Exercises , Exams and several other documents for all university students.",
    image: staticData.projectBackground,
    stack: ["Next.js", "Tailwindcss", "MongoDB", "Flask", "Python"],
    url: "https://tresoruni.tech/",
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
];

export const features = [
  {
    title: "Fast",
    description:
      "Optimized performance and efficient rendering for smooth user experiences.",
    src: "/images/fast-b.png",
    alt: "Fast performance",
  },
  {
    title: "Responsive",
    description:
      "Layouts that adapt seamlessly across desktop, tablet, and mobile.",
    src: "/images/responsive.png",
    alt: "Responsive design",
  },
  {
    title: "Intuitive",
    description:
      "Clear UX patterns that make interaction effortless and natural.",
    src: "/images/intuitive-t.png",
    alt: "Intuitive interfaces",
  },
  {
    title: "Dynamic",
    description:
      "Motion and interaction bring interfaces to life without distraction.",
    src: "/images/dynamic.png",
    alt: "Dynamic motion",
  },
];

export const experiences = [
  {
    role: "Intermediate School Graduation",
    company: "",
    duration: "2021",
    description:
      "The last year at the middle school got my certificate with a grade of 73.75% and now i'm at the third and last year at secondary school.",
  },
  {
    role: "Basic Concepts of ComputerScience Certificate",
    company: "",
    duration: "2021",
    description:
      "Basic knowledge about computer science such as variables and loops.",
  },
  {
    role: "PlayCanvas Experienced Certificate",
    company: "PlayCanvas",
    duration: "2022 - Present",
    description:
      "Making and developing chase.io that hit +1020 views and +400 player every day",
  },
  {
    role: "Programming with Python",
    company: "BrainerX",
    duration: "2023",
    description:
      "Programming with python certificate by BrainerX",
  },
  {
    role: "Secondary School Graduation (BAC)",
    company: "",
    duration: "2024",
    description:
      "",
  },
  {
    role: "Head of IT Department",
    company: "CELEC Club",
    duration: "Sep 2025 - Present",
    description:
      "",
  },
];

export const testimonials = [
  {
    name: "Alice Johnson",
    role: "Product Manager",
    quote:
      "Yasser is a phenomenal developer. He delivered our project ahead of schedule with clean, maintainable code.",
  },
  {
    name: "Michael Smith",
    role: "CTO at TechCorp",
    quote:
      "His work on our web app was exceptional. The performance optimizations and responsiveness impressed the whole team.",
  },
];
