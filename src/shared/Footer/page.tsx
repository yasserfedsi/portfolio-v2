"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  const linkTo = {
    linkedIn: "https://linkedin.com/in/yasser-fedsi",
    github: "https://github.com/yasserfedsi"
  }

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#0b0b0b] text-white">
      {/* SVG Wave Background */}
      <div className="absolute inset-0 z-0">
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-[40%]"
        >
          <motion.path
            fill="#111111"
            fillOpacity="1"
            initial={{ d: WAVE_PATHS[0] }}
            animate={{ d: WAVE_PATHS }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 8,
              ease: "easeInOut",
            }}
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[4rem] md:text-[6rem] font-extrabold leading-tight"
        >
          Let&apos;s work
          <br />
          <span className="text-silver">together</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 max-w-xl mx-auto text-zinc-300"
        >
          Have a project in mind or want to collaborate?
          I&apos;d love to hear from you.
        </motion.p>

        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="inline-block mt-10 border border-white px-8 py-3 rounded-full text-white hover:bg-white hover:text-black transition"
        >
          Contact Me
        </motion.a>
      </div>

      {/* Bottom Divider */}
      <div className="absolute bottom-6 text-xs text-zinc-500 tracking-widest">
        © {new Date().getFullYear()} YASSER FEDSI. All rights reserved.
        <div className="flex space-x-4 mt-2 items-center justify-center">
          <Link href={linkTo.github} target="_blank">
            <Button className="cursor-pointer hover:text-white">
              <Github />
            </Button>
          </Link>
          <Link href={linkTo.linkedIn} target="_blank">
            <Button className="cursor-pointer hover:text-blue-500">
              <Linkedin />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* SVG PATHS */
const WAVE_PATHS = [
  "M0,160L80,149.3C160,139,320,117,480,122.7C640,128,800,160,960,181.3C1120,203,1280,213,1360,218.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z",
  "M0,192L80,181.3C160,171,320,149,480,144C640,139,800,149,960,160C1120,171,1280,181,1360,186.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z",
];
