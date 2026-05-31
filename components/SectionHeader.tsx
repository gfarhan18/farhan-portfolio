"use client";

import { motion } from "framer-motion";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mb-8 flex flex-col gap-3 ${
        align === "center" ? "items-center text-center" : "items-start text-left"
      }`}
    >
      <span className="subheading">{eyebrow}</span>
      <h2 className="heading">
        <span className="text-gradient">{title}</span>
      </h2>
      {description && (
        <p className="text-muted max-w-2xl text-base leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
