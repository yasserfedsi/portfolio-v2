"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { FaCode, FaGraduationCap, FaRocket } from "react-icons/fa";

export default function About() {
    return (
        <section className="relative min-h-screen bg-[#0b0b0b] text-white overflow-hidden flex items-center">
            {/* SVG Background */}
            <SvgBackground />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-20 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                {/* Text */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                        About <span className="text-silver">Me</span>
                    </h2>

                    <p className="text-zinc-300 text-lg leading-relaxed mb-6">
                        I am a{" "}
                        <span className="text-white font-semibold">
                            second-year Process Engineering student
                        </span>{" "}
                        at{" "}
                        <span className="text-white font-semibold">
                            USTHB (University of Science and Technology Houari Boumediene)
                        </span>
                        . I am also a{" "}
                        <span className="text-white font-semibold">Full-Stack Web Developer</span>{" "}
                        with a strong interest in building modern web applications.
                    </p>

                    <p className="text-zinc-400 leading-relaxed mb-6">
                        My favorite part of programming is solving challenging problems. I
                        love the sense of accomplishment that comes from finding efficient
                        and elegant solutions.
                    </p>

                    <p className="text-zinc-400 leading-relaxed">
                        My core stack is the{" "}
                        <span className="text-white font-semibold">MERN stack</span>{" "}
                        (MongoDB, Express, React, Node.js). I am also familiar with{" "}
                        <span className="text-white font-semibold">
                            TypeScript and Prisma
                        </span>
                        , and I am always eager to learn new technologies and improve my
                        skills.
                    </p>
                </motion.div>

                {/* Highlight Cards */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                >
                    <AboutCard
                        icon={<FaGraduationCap />}
                        title="Student & Learner"
                        text="Currently studying Process Engineering while continuously improving my development skills."
                    />
                    <AboutCard
                        icon={<FaCode />}
                        title="Problem Solver"
                        text="I enjoy tackling complex challenges and turning them into working solutions."
                    />
                    <AboutCard
                        icon={<FaRocket />}
                        title="MERN Focused"
                        text="Experienced with MongoDB, Express, React, and Node.js, plus TypeScript and Prisma."
                    />
                </motion.div>
            </div>

            {/* Bottom SVG Divider */}
            <SvgDividerBottom />
        </section>
    );
}

/* ───────────── SMALL COMPONENTS ───────────── */

function AboutCard({
    icon,
    title,
    text,
}: {
    icon: React.ReactNode;
    title: string;
    text: string;
}) {
    return (
        <Card className="bg-[#111111]/70 border border-zinc-700 backdrop-blur-sm hover:scale-105 transition">
            <CardContent className="p-6">
                <div className="text-white text-2xl mb-4">{icon}</div>
                <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
                <p className="text-zinc-400 text-sm">{text}</p>
            </CardContent>
        </Card>
    );
}

/* ───────────── SVG BACKGROUND ───────────── */

function SvgBackground() {
    return (
        <svg
            className="absolute inset-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <pattern
                    id="aboutGrid"
                    width="48"
                    height="48"
                    patternUnits="userSpaceOnUse"
                >
                    <path
                        d="M48 0 L0 0 0 48"
                        fill="none"
                        stroke="white"
                        strokeWidth="0.3"
                        opacity="0.05"
                    />
                </pattern>

                <radialGradient id="aboutGlow" cx="30%" cy="40%" r="60%">
                    <stop offset="0%" stopColor="white" stopOpacity="0.06" />
                    <stop offset="100%" stopColor="white" stopOpacity="0" />
                </radialGradient>
            </defs>

            <rect width="100%" height="100%" fill="url(#aboutGrid)" />
            <rect width="100%" height="100%" fill="url(#aboutGlow)" />
        </svg>
    );
}

function SvgDividerBottom() {
    return (
        <svg
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            className="absolute bottom-0 left-0 w-full h-32"
        >
            <path
                fill="#0b0b0b"
                d="M0,32L80,37.3C160,43,320,53,480,53.3C640,53,800,43,960,37.3C1120,32,1280,32,1360,32L1440,32L1440,120L0,120Z"
            />
        </svg>
    );
}
