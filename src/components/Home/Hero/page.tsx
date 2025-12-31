"use client";

import { motion, useReducedMotion, Variants } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { useEffect, useState } from "react";

const titles = ["Full Stack Developer", "Junior Product Designer"]

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === 0 ? 1 : 0))
    }, 2500) // 2.5s

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen md:ml-16 flex items-center justify-center">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay={!reduceMotion}
        muted
        loop
        playsInline
      >
        <source src="/videos/hero-vid.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 text-center px-4">
        <motion.h1
          variants={fadeUp as Variants}
          initial="hidden"
          animate="visible"
          className="text-white text-4xl md:text-5xl font-extrabold"
        >
          Yasser FEDSI
        </motion.h1>

        <motion.p
          key={titles[index]}
          variants={fadeUp as Variants}
          initial="hidden"
          animate="visible"
          className="text-gray-300 mt-4 text-lg"
        >
          {titles[index]}
        </motion.p>

        <motion.p
          variants={fadeUp as Variants}
          initial="hidden"
          animate="visible"
          className="text-white mt-6 text-2xl md:text-4xl font-bold"
        >
          Explore My Ingenuity
        </motion.p>
      </div>
    </section>
  );
}
