"use client";

import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { useTheme } from "./ThemeProvider";

type Props = {
  className?: string;
};

export default function ThemeToggle({ className = "" }: Props) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className={`grid h-10 w-10 place-items-center rounded-xl border border-subtle surface-faint text-secondary transition-all hover:-translate-y-0.5 hover:text-primary ${className}`}
    >
      {theme === "dark" ? (
        <HiOutlineSun className="h-5 w-5" />
      ) : (
        <HiOutlineMoon className="h-5 w-5" />
      )}
    </button>
  );
}
