"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data";
import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (offset: number) => {
    ref.current?.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen bg-[#0b0b0b] text-white overflow-hidden flex flex-col justify-center">
      {/* TOP SVG WAVE */}
      <SvgWaveTop />

      {/* SVG GRID BACKGROUND */}
      <SvgGrid />

      {/* CONTENT */}
      <div className="relative z-10 px-6 md:px-20">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Latest <span className="text-silver">Projects</span>
          </h2>
          <p className="mt-4 text-zinc-400 max-w-xl mx-auto">
            Selected work showcasing performance, UX, and modern design.
          </p>
        </motion.div>

        {/* CAROUSEL */}
        <div className="relative">
          {/* LEFT ARROW */}
          <button
            onClick={() => scroll(-420)}
            aria-label="Scroll projects left"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/60 rounded-full hover:bg-black/80 transition"
          >
            <FaArrowLeft />
          </button>

          {/* PROJECT LIST */}
          <div
            ref={ref}
            className="flex gap-8 overflow-x-auto scrollbar-none px-14 py-6"
          >
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group relative min-w-[320px] md:min-w-[380px] rounded-2xl overflow-hidden border border-zinc-700 bg-[#111111]/60 backdrop-blur-lg hover:scale-[1.03] transition"
              >
                <Link
                  href={project.url}
                  target="_blank"
                  className="block relative h-[240px]"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-black/60 flex flex-col justify-between p-4">
                    <h3 className="font-bold text-lg">{project.title}</h3>
                    
                    {/* HIDDEN BY DEFAULT, VISIBLE ON HOVER */}
                    <div className="opacity-0 group-hover:opacity-100 transition">
                      <p className="text-sm text-zinc-300 mt-1">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-3">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={() => scroll(420)}
            aria-label="Scroll projects right"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/60 rounded-full hover:bg-black/80 transition"
          >
            <FaArrowRight />
          </button>
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
