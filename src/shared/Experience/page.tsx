"use client";

import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import { experiences } from ".";


export default function Experience() {
    return (
        <section className="relative min-h-screen bg-[#0b0b0b] text-white overflow-hidden flex flex-col justify-center py-20">
            {/* SVG Background */}
            <SvgBackground />

            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative z-10 text-center mb-16 px-6 md:px-20"
            >
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                    My Experience
                </h2>
                <p className="mt-4 text-zinc-400 max-w-xl mx-auto">
                    Career milestones, internships, and projects that showcase my journey.
                </p>
            </motion.div>

            {/* Timeline */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 pb-12">
                {/* Vertical line - hidden on mobile */}
                <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-zinc-700 h-full"></div>

                <div className="flex flex-col space-y-8 md:space-y-16">
                    {experiences.map((exp, index) => {
                        const isLeft = index % 2 === 0;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                className="relative"
                            >
                                {/* Desktop Layout */}
                                <div className="hidden md:grid md:grid-cols-2 md:gap-8 items-center">
                                    {isLeft ? (
                                        <>
                                            {/* Left Side Content */}
                                            <div className="flex justify-end">
                                                <div className="bg-[#111111]/70 border border-zinc-700 backdrop-blur-sm p-6 rounded-lg max-w-md w-full hover:border-gray-400/50 transition-colors duration-300">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <FaBriefcase className="text-gray-400" />
                                                        <h3 className="text-white font-semibold text-lg">{exp.role}</h3>
                                                    </div>
                                                    <p className="text-zinc-400 mb-1 font-medium">{exp.company}</p>
                                                    <p className="text-sm text-zinc-500 mb-3">{exp.duration}</p>
                                                    <p className="text-sm text-zinc-500 mb-3">{exp.type}</p>
                                                    <p className="text-zinc-300 text-sm leading-relaxed">{exp.description}</p>
                                                </div>
                                            </div>
                                            {/* Right Side Empty */}
                                            <div></div>
                                        </>
                                    ) : (
                                        <>
                                            {/* Left Side Empty */}
                                            <div></div>
                                            {/* Right Side Content */}
                                            <div className="flex justify-start">
                                                <div className="bg-[#111111]/70 border border-zinc-700 backdrop-blur-sm p-6 rounded-lg max-w-md w-full hover:border-gray-400/50 transition-colors duration-300">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <FaBriefcase className="text-gray-400" />
                                                        <h3 className="text-white font-semibold text-lg">{exp.role}</h3>
                                                    </div>
                                                    <p className="text-zinc-400 mb-1 font-medium">{exp.company}</p>
                                                    <p className="text-sm text-zinc-500 mb-3">{exp.duration}</p>
                                                    <p className="text-sm text-zinc-500 mb-3">{exp.type}</p>
                                                    <p className="text-zinc-300 text-sm leading-relaxed">{exp.description}</p>
                                                </div>
                                            </div>
                                        </>
                                    )}

                                    {/* Timeline Dot */}
                                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-400 w-4 h-4 rounded-full z-20 ring-4 ring-[#0b0b0b]"></div>
                                </div>

                                {/* Mobile Layout */}
                                <div className="md:hidden">
                                    <div className="bg-[#111111]/70 border border-zinc-700 backdrop-blur-sm p-6 rounded-lg w-full">
                                        <div className="flex items-center gap-2 mb-2">
                                            <FaBriefcase className="text-gray-400" />
                                            <h3 className="text-white font-semibold text-lg">{exp.role}</h3>
                                        </div>
                                        <p className="text-zinc-400 mb-1 font-medium">{exp.company}</p>
                                        <p className="text-sm text-zinc-500 mb-3">{exp.duration}</p>
                                        <p className="text-zinc-300 text-sm leading-relaxed">{exp.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
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
                <pattern id="experienceGrid" width="48" height="48" patternUnits="userSpaceOnUse">
                    <path d="M48 0 L0 0 0 48" fill="none" stroke="white" strokeWidth="0.3" opacity="0.05" />
                </pattern>
                {/* Radial Glow */}
                <radialGradient id="experienceGlow" cx="50%" cy="50%" r="60%">
                    <stop offset="0%" stopColor="white" stopOpacity="0.06" />
                    <stop offset="100%" stopColor="white" stopOpacity="0" />
                </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#experienceGrid)" />
            <rect width="100%" height="100%" fill="url(#experienceGlow)" />
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