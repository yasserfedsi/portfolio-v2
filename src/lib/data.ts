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
    title: "ARC 4",
    description: "Modern dashboard system for real-time tracking.",
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
    src: "/images/intuitive.png",
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
