"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function ContactPage() {
  return (
    <section className="relative min-h-screen bg-[#0b0b0b] text-white overflow-hidden flex items-center justify-center">
      {/* SVG BACKGROUND */}
      <SvgBackground />

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-6xl px-6 md:px-20 py-24 grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Let&apos;s build
            <br />
            <span className="text-silver">something great</span>
          </h1>

          <p className="mt-6 text-zinc-400 max-w-md">
            Have a project, idea, or opportunity?
            <br />
            I&apos;d love to hear from you.
          </p>

          <div className="mt-10 space-y-3 text-sm text-zinc-400">
            <p>
              <span className="text-white font-medium">Email:</span>{" "}
              <a href="mailto:fedsi.yasser@gmail.com">fedsi.yasser@gmail.com</a>
            </p>
            <p>
              <span className="text-white font-medium">Availability:</span>{" "}
              Remote / Worldwide
            </p>
          </div>
        </motion.div>

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <Card className="bg-[#111111]/70 border-zinc-700 backdrop-blur-lg">
            <CardHeader>
              <CardTitle className="text-white">Contact Me</CardTitle>
              <CardDescription className="text-zinc-400">
                Fill out the form and I’ll get back to you shortly.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm text-zinc-400">Name</label>
                  <Input
                    placeholder="Your name"
                    className="bg-transparent border-zinc-600 text-white"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-zinc-400">Email</label>
                  <Input
                    type="email"
                    placeholder="you@email.com"
                    className="bg-transparent border-zinc-600 text-white"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-zinc-400">Message</label>
                  <Textarea
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="bg-transparent border-zinc-600 text-white resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full rounded-full border border-white bg-transparent text-white hover:bg-white hover:text-black transition"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* SVG WAVE */}
      <SvgDividerBottom />

      <footer className="absolute bottom-6 text-xs text-zinc-500 tracking-widest">
        © {new Date().getFullYear()} YASSER FEDSI. All rights reserved.
      </footer>
    </section>
  );
}

/* ───────────────── SVG BACKGROUND ───────────────── */

function SvgBackground() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* GRID */}
        <pattern
          id="contactGrid"
          width="48"
          height="48"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M48 0 L0 0 0 48"
            fill="none"
            stroke="white"
            strokeWidth="0.4"
            opacity="0.06"
          />
        </pattern>

        {/* RADIAL GLOW */}
        <radialGradient id="contactGlow" cx="30%" cy="40%" r="60%">
          <stop offset="0%" stopColor="white" stopOpacity="0.08" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="100%" height="100%" fill="url(#contactGrid)" />
      <rect width="100%" height="100%" fill="url(#contactGlow)" />
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
