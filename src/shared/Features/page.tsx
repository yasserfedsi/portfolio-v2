"use client";

import FeatureCard from "./cards";
import { motion } from "framer-motion";
import { features } from "@/utils/data";

export default function Features() {
    return (
        <section className="relative min-h-screen bg-[#0b0b0b] text-white overflow-hidden flex flex-col justify-center" id="features">
            {/* TOP SVG SEPARATOR */}
            <SvgDividerTop />

            {/* SVG BACKGROUND */}
            <SvgBackground />

            {/* CONTENT */}
            <div className="relative z-10 px-6 md:px-20 py-20">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                        Features of
                        <br />
                        <span className="text-silver">working with me</span>
                    </h2>
                    <p className="mt-4 text-zinc-400 max-w-xl mx-auto">
                        I focus on building digital experiences that are fast, intuitive,
                        and visually refined.
                    </p>
                </motion.div>

                {/* GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-350 mx-auto">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                        >
                            <FeatureCard {...feature} />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* BOTTOM SVG SEPARATOR */}
            <SvgDividerBottom />
        </section>
    );
}

/* ───────────────── SVG COMPONENTS ───────────────── */

function SvgDividerTop() {
    return (
        <svg
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            className="absolute top-0 left-0 w-full h-32"
        >
            <path
                fill="#0b0b0b"
                d="M0,96L80,85.3C160,75,320,53,480,58.7C640,64,800,96,960,101.3C1120,107,1280,85,1360,74.7L1440,64L1440,0L0,0Z"
            />
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

function SvgBackground() {
    return (
        <svg
            className="absolute inset-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                {/* GRID */}
                <pattern
                    id="featureGrid"
                    width="48"
                    height="48"
                    patternUnits="userSpaceOnUse"
                >
                    <path
                        d="M48 0 L0 0 0 48"
                        fill="none"
                        stroke="white"
                        strokeWidth="0.4"
                        opacity="0.08"
                    />
                </pattern>

                {/* RADIAL FADE */}
                <radialGradient id="fade" cx="50%" cy="50%" r="60%">
                    <stop offset="0%" stopColor="white" stopOpacity="0.08" />
                    <stop offset="100%" stopColor="white" stopOpacity="0" />
                </radialGradient>
            </defs>

            <rect width="100%" height="100%" fill="url(#featureGrid)" />
            <rect width="100%" height="100%" fill="url(#fade)" />
        </svg>
    );
}
