"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "@/utils/data";
import Image from "next/image";

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
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

  const currentProject = projects[currentIndex];

  return (
    <section className="relative min-h-screen bg-[#0b0b0b] text-white overflow-hidden flex flex-col justify-center py-20">
      {/* TOP SVG WAVE */}
      <SvgWaveTop />

      {/* SVG GRID BACKGROUND */}
      <SvgGrid />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center mb-16 px-6 md:px-20"
      >
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Latest Projects
        </h2>
        <p className="mt-4 text-zinc-400 max-w-xl mx-auto">
          Selected work showcasing performance, UX, and modern design.
        </p>
      </motion.div>

      {/* Carousel Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-20 w-full">
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-14 z-20 bg-gray-400/20 hover:bg-gray-400/40 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-gray-400/30 cursor-pointer"
            aria-label="Previous project"
          >
            <FaChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-14 z-20 bg-gray-400/20 hover:bg-gray-400/40 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-gray-400/30 cursor-pointer"
            aria-label="Next project"
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
                <div className="bg-[#111111]/70 border border-zinc-700 hover:border-gray-400/50 transition-colors duration-300 backdrop-blur-sm rounded-2xl overflow-hidden">
                  {/* Project Image */}
                  <div className="relative h-64 md:h-96 w-full overflow-hidden">
                    <Image
                      src={currentProject.image}
                      alt={currentProject.title}
                      className="w-full h-full object-cover"
                      fill
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#111111] via-transparent to-transparent"></div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6 md:p-8">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl md:text-3xl font-bold text-white">
                        {currentProject.title}
                      </h3>
                      <a
                        href={currentProject.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white transition-colors hover:text-gray-400/50"
                      >
                        <span className="text-sm hidden md:inline">View Project</span>
                        <FaExternalLinkAlt className="w-4 h-4" />
                      </a>
                    </div>

                    <p className="text-zinc-300 text-base md:text-lg leading-relaxed mb-6">
                      {currentProject.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="border-t border-zinc-700 pt-4">
                      <p className="text-sm text-zinc-400 mb-3">Tech Stack:</p>
                      <div className="flex flex-wrap gap-2">
                        {currentProject.stack.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs md:text-sm px-3 py-1.5 rounded-full border border-gray-400/30 text-gray-400"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                  ? "w-8 bg-white"
                  : "w-2 bg-zinc-600 hover:bg-zinc-500"
                  }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM SVG WAVE */}
      <SvgWaveBottom />
    </section>
  );
}

// SVG Components
function SvgWaveTop() {
  return (
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      className="absolute top-0 left-0 w-full h-32"
    >
      <path
        fill="#0b0b0b"
        d="M0,64L80,58.7C160,53,320,43,480,53.3C640,64,800,96,960,101.3C1120,107,1280,85,1360,74.7L1440,64L1440,0L0,0Z"
      />
    </svg>
  );
}

function SvgWaveBottom() {
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

function SvgGrid() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.04]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="grid"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  );
}