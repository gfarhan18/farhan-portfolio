"use client";

import { motion } from "framer-motion";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

/** Organic is a left-aligned system, so left is the default here. */
export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mb-10 flex flex-col ${
        align === "center" ? "items-center text-center" : "items-start text-left"
      }`}
    >
      <span className="subheading">{eyebrow}</span>
      <h2 className="heading mt-2.5 max-w-[26ch]">{title}</h2>
      {description && (
        <p className="mt-3.5 max-w-[58ch] text-base leading-[1.6] text-ink/[0.72]">
          {description}
        </p>
      )}
    </motion.div>
  );
}
