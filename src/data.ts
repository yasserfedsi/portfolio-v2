import { staticData } from "./static/static";

export const projects = [
  {
    title: "ARC 4",
    description: "Modern dashboard system for real-time tracking.",
    image: staticData.projectBackground,
    stack: ["Svelte", "Sveltekit", "MariaDB", "Docker", "TailwindCSS"],
    url: "https://example.com/arc4",
  },
  {
    title: "Stock Manager",
    description: "Inventory tracking platform with Firebase support.",
    image: staticData.projectBackground,
    stack: ["NextJS", "PSQL", "TailwindCSS", "Firebase", "Axios"],
    url: "https://example.com/stock-manager",
  },
];
