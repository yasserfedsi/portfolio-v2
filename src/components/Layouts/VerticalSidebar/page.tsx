"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MoveUp } from "lucide-react";
import { motion } from "framer-motion";
import { hoverScale } from "@/lib/animations";

const socials = [
  {
    href: "https://github.com/yasserfedsi",
    icon: FaGithub,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/yasser-fedsi",
    icon: FaLinkedin,
    label: "LinkedIn",
  },
];

export default function VerticalSidebar() {
  return (
    <aside className="fixed left-0 top-0 hidden md:flex h-screen w-16 flex-col items-center justify-between py-6 bg-[#0b0b0b] z-50">
      <Link href="/" className="text-white text-2xl font-bold">
        Y
      </Link>

      <div className="flex flex-col items-center gap-8">
        <motion.div {...hoverScale} className="flex flex-col items-center gap-9">
          <MoveUp className="text-white" />
          <Link
            href="/contact"
            className="-rotate-90 text-sm tracking-widest text-white uppercase"
          >
            contact
          </Link>
        </motion.div>

        <span className="w-8 h-px bg-white mt-4" />

        {socials.map(({ href, icon: Icon, label }) => (
          <motion.a
            key={label}
            {...hoverScale}
            href={href}
            target="_blank"
            aria-label={label}
            className="text-white text-lg"
          >
            <Icon />
          </motion.a>
        ))}
      </div>
    </aside>
  );
}
