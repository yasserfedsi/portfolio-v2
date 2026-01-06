import { staticData } from "../static/static";
import type { StaticImageData } from "next/image";
import type { ReactElement } from "react";
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiTypescript,
    SiTailwindcss,
    SiNodedotjs,
    SiNpm,
    SiVite,
    SiReact,
    SiExpress,
    SiPostgresql,
    SiMongodb,
    SiPython,
    SiFirebase,
    SiPnpm,
    SiDocker,
    SiNginx,
    SiBun,
    SiPostman,
    SiNextdotjs,
    SiFlask,
    SiAxios,
} from "react-icons/si";

type SkillItem = {
    title: string;
    icon: ReactElement;
};

export type SkillCategory = {
    category: string;
    skills: SkillItem[];
};

export const skillCategories: SkillCategory[] = [
    {
        category: "Frontend",
        skills: [
            {
                title: "HTML",
                icon: <SiHtml5 size={40} className="text-orange-500" />,
            },
            { title: "CSS", icon: <SiCss3 size={40} className="text-blue-500" /> },
            {
                title: "JavaScript",
                icon: <SiJavascript size={40} className="text-yellow-400" />,
            },
            {
                title: "TypeScript",
                icon: <SiTypescript size={40} className="text-blue-600" />,
            },
            { title: "React", icon: <SiReact size={40} className="text-cyan-400" /> },
            { title: "Next", icon: <SiNextdotjs size={40} className="text-white" /> },
            {
                title: "Tailwind CSS",
                icon: <SiTailwindcss size={40} className="text-cyan-400" />,
            },
        ],
    },
    {
        category: "Backend",
        skills: [
            {
                title: "Node.js",
                icon: <SiNodedotjs size={40} className="text-green-500" />,
            },
            {
                title: "Express",
                icon: <SiExpress size={40} className="text-white" />,
            },
            {
                title: "Python",
                icon: <SiPython size={40} className="text-yellow-500" />,
            },
            {
                title: "PostgreSQL",
                icon: <SiPostgresql size={40} className="text-blue-700" />,
            },
            {
                title: "MongoDB",
                icon: <SiMongodb size={40} className="text-green-600" />,
            },
            {
                title: "Firebase",
                icon: <SiFirebase size={40} className="text-yellow-400" />,
            },
            { title: "Flask", icon: <SiFlask size={40} className="text-black" /> },
        ],
    },
    {
        category: "Tools & DevOps",
        skills: [
            { title: "Vite", icon: <SiVite size={40} className="text-purple-500" /> },
            {
                title: "Docker",
                icon: <SiDocker size={40} className="text-blue-500" />,
            },
            {
                title: "Nginx",
                icon: <SiNginx size={40} className="text-green-500" />,
            },
            { title: "NPM", icon: <SiNpm size={40} className="text-red-600" /> },
            { title: "PNPM", icon: <SiPnpm size={40} className="text-violet-500" /> },
            { title: "Bun", icon: <SiBun size={40} className="text-red-400" /> },
            {
                title: "Postman",
                icon: <SiPostman size={40} className="text-orange-400" />,
            },
            {
                title: "Axios",
                icon: <SiAxios size={40} className="text-purple-400" />,
            },
        ],
    },
];