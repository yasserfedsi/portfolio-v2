"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FaQuoteLeft, FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { testimonials } from "@/utils/data";

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    // Auto-advance carousel
    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 5000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    const handleNext = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const handleDotClick = (index: number) => {
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
    };

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            x: direction > 0 ? -1000 : 1000,
            opacity: 0,
        }),
    };

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
                    What Clients Say
                </h2>
                <p className="mt-4 text-zinc-400 max-w-xl mx-auto">
                    Feedback from people I've worked with. Delivering quality and trust is my top priority.
                </p>
            </motion.div>

            {/* Carousel Container */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-20 w-full">
                <div className="relative">
                    {/* Navigation Buttons */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-14 z-20 bg-gray-400/20 hover:bg-gray-400/40 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-gray-400/30 cursor-pointer"
                        aria-label="Previous testimonial"
                    >
                        <FaChevronLeft className="w-5 h-5" />
                    </button>

                    <button
                        onClick={handleNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-14 z-20 bg-gray-400/20 hover:bg-gray-400/40 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-gray-400/30 cursor-pointer"
                        aria-label="Next testimonial"
                    >
                        <FaChevronRight className="w-5 h-5" />
                    </button>

                    {/* Carousel Content */}
                    <div className="overflow-hidden">
                        <AnimatePresence initial={false} custom={direction} mode="wait">
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 },
                                }}
                            >
                                <Card className="bg-[#111111]/70 border border-zinc-700 hover:border-gray-400/50 transition-colors duration-300 backdrop-blur-sm">
                                    <CardHeader>
                                        <div className="flex items-center gap-2 text-gray-400 text-2xl">
                                            <FaQuoteLeft />
                                        </div>
                                    </CardHeader>
                                    <CardContent className="px-8 pb-8">
                                        <CardDescription className="text-zinc-300 text-lg mb-6 leading-relaxed">
                                            {testimonials[currentIndex].quote}
                                        </CardDescription>
                                        <div className="flex items-center gap-2 text-gray-400 text-2xl justify-end mb-4">
                                            <FaQuoteRight />
                                        </div>
                                        <div className="border-t border-zinc-700 pt-4">
                                            <CardTitle className="text-white text-xl mb-1">
                                                {testimonials[currentIndex].name}
                                            </CardTitle>
                                            <p className="text-sm text-zinc-400">
                                                {testimonials[currentIndex].role}
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleDotClick(index)}
                                className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? "w-8 bg-white"
                                    : "w-2 bg-zinc-600 hover:bg-zinc-500"
                                    }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
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
                <pattern id="testimonialsGrid" width="48" height="48" patternUnits="userSpaceOnUse">
                    <path d="M48 0 L0 0 0 48" fill="none" stroke="white" strokeWidth="0.3" opacity="0.05" />
                </pattern>
                {/* Radial Glow */}
                <radialGradient id="testimonialsGlow" cx="50%" cy="50%" r="60%">
                    <stop offset="0%" stopColor="white" stopOpacity="0.06" />
                    <stop offset="100%" stopColor="white" stopOpacity="0" />
                </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#testimonialsGrid)" />
            <rect width="100%" height="100%" fill="url(#testimonialsGlow)" />
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