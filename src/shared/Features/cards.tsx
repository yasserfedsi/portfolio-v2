"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { fadeUp } from "@/lib/animations";

type Props = {
  title: string;
  description: string;
  src: string;
  alt: string;
};

export default function FeatureCard({
  title,
  description,
  src,
  alt,
}: Props) {
  return (
    <motion.article
      variants={fadeUp as Variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="rounded-2xl border border-zinc-700 p-6 text-center hover:bg-zinc-800/60 transition"
    >
      <Image
        src={src}
        alt={alt}
        width={96}
        height={96}
        className="mx-auto mb-4"
      />
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-zinc-300 text-sm">{description}</p>
    </motion.article>
  );
}
