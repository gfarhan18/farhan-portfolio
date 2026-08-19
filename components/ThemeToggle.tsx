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
      aria-label={
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      }
      className={`social-tile ${className}`}
    >
      {theme === "dark" ? (
        <HiOutlineSun className="h-[18px] w-[18px]" />
      ) : (
        <HiOutlineMoon className="h-[18px] w-[18px]" />
      )}
    </button>
  );
}
