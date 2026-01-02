"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiTailwindcss, SiNodedotjs, SiNpm, SiVite, SiReact, SiExpress, SiPostgresql, SiMongodb, SiPython, SiFirebase, SiPnpm, SiDocker, SiNginx, SiBun, SiPostman } from "react-icons/si";

const skillCategories = [
    {
        category: "Frontend",
        skills: [
            { title: "HTML", icon: <SiHtml5 size={40} className="text-orange-500" />, level: 95 },
            { title: "CSS", icon: <SiCss3 size={40} className="text-blue-500" />, level: 85 },
            { title: "JavaScript", icon: <SiJavascript size={40} className="text-yellow-400" />, level: 92 },
            { title: "TypeScript", icon: <SiTypescript size={40} className="text-blue-600" />, level: 88 },
            { title: "React", icon: <SiReact size={40} className="text-cyan-400" />, level: 90 },
            { title: "Tailwind CSS", icon: <SiTailwindcss size={40} className="text-cyan-400" />, level: 93 },
        ]
    },
    {
        category: "Backend",
        skills: [
            { title: "Node.js", icon: <SiNodedotjs size={40} className="text-green-500" />, level: 87 },
            { title: "Express", icon: <SiExpress size={40} className="text-white" />, level: 85 },
            { title: "Python", icon: <SiPython size={40} className="text-yellow-500" />, level: 80 },
            { title: "PostgreSQL", icon: <SiPostgresql size={40} className="text-blue-700" />, level: 82 },
            { title: "MongoDB", icon: <SiMongodb size={40} className="text-green-600" />, level: 84 },
            { title: "Firebase", icon: <SiFirebase size={40} className="text-yellow-400" />, level: 86 },
        ]
    },
    {
        category: "Tools & DevOps",
        skills: [
            { title: "Vite", icon: <SiVite size={40} className="text-purple-500" />, level: 88 },
            { title: "Docker", icon: <SiDocker size={40} className="text-blue-500" />, level: 70 },
            { title: "Nginx", icon: <SiNginx size={40} className="text-green-500" />, level: 70 },
            { title: "NPM", icon: <SiNpm size={40} className="text-red-600" />, level: 90 },
            { title: "PNPM", icon: <SiPnpm size={40} className="text-violet-500" />, level: 85 },
            { title: "Bun", icon: <SiBun size={40} className="text-red-400" />, level: 80 },
            { title: "Postman", icon: <SiPostman size={40} className="text-orange-400" />, level: 88 },
        ]
    }
];

export default function Skills() {
    return (
        <section className="relative min-h-screen bg-[#0b0b0b] text-white overflow-hidden flex flex-col justify-center py-20">
            {/* SVG Background */}
            <SvgBackground />

            {/* Content */}
            <div className="relative z-10 px-6 md:px-20 py-12">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                        My Skills
                    </h2>
                    <p className="mt-4 text-zinc-400 max-w-xl mx-auto">
                        Technologies and tools I use to build modern, scalable, and performant applications.
                    </p>
                </motion.div>

                {/* Skills by Category */}
                <div className="max-w-7xl mx-auto space-y-16">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                        >
                            {/* Category Title */}
                            <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
                                <span className="text-white">
                                    {category.category}
                                </span>
                            </h3>

                            {/* Skills Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {category.skills.map((skill, index) => (
                                    <motion.div
                                        key={skill.title}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1, duration: 0.5 }}
                                        whileHover={{ scale: 1.05, y: -5 }}
                                    >
                                        <Card className="bg-[#111111]/70 border border-zinc-700 transition-all duration-300 cursor-pointer backdrop-blur-sm h-full">
                                            <CardHeader className="flex flex-col items-center pt-6 pb-2">
                                                <div className="mb-3">
                                                    {skill.icon}
                                                </div>
                                            </CardHeader>
                                            <CardContent className="text-center pb-6">
                                                <CardTitle className="text-white text-base md:text-lg mb-3">
                                                    {skill.title}
                                                </CardTitle>

                                                {/* Progress Bar */}
                                                <div className="w-full bg-zinc-800 rounded-full h-2 overflow-hidden">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: `${skill.level}%` }}
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                                                        className="h-full bg-white rounded-full"
                                                    />
                                                </div>
                                                <p className="text-xs text-zinc-500 mt-2">{skill.level}%</p>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
                >
                    {[
                        { label: "Years Experience", value: "3+" },
                        { label: "Projects Completed", value: "50+" },
                        { label: "Technologies", value: "19+" },
                        { label: "Happy Clients", value: "30+" }
                    ].map((stat, index) => (
                        <div
                            key={stat.label}
                            className="bg-[#111111]/70 border border-zinc-700 rounded-lg p-6 text-center backdrop-blur-sm hover:border-cyan-400/50 transition-colors duration-300"
                        >
                            <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                                {stat.value}
                            </div>
                            <div className="text-sm text-zinc-400">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* SVG Bottom Wave */}
            <SvgDividerBottom />
        </section>
    );
}

/* ───────────── SVG BACKGROUND ───────────── */

function SvgBackground() {
    return (
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
                {/* Grid */}
                <pattern id="skillsGrid" width="48" height="48" patternUnits="userSpaceOnUse">
                    <path d="M48 0 L0 0 0 48" fill="none" stroke="white" strokeWidth="0.3" opacity="0.06" />
                </pattern>
                {/* Radial Glow */}
                <radialGradient id="skillsGlow" cx="50%" cy="50%" r="60%">
                    <stop offset="0%" stopColor="white" stopOpacity="0.06" />
                    <stop offset="100%" stopColor="white" stopOpacity="0" />
                </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#skillsGrid)" />
            <rect width="100%" height="100%" fill="url(#skillsGlow)" />
        </svg>
    );
}

function SvgDividerBottom() {
    return (
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full h-32">
            <path
                fill="#0b0b0b"
                d="M0,32L80,37.3C160,43,320,53,480,53.3C640,53,800,43,960,37.3C1120,32,1280,32,1360,32L1440,32L1440,120L0,120Z"
            />
        </svg>
    );
}