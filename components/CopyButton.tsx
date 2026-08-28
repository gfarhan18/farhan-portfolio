"use client";

import { useState } from "react";
import { HiOutlineClipboard, HiOutlineCheck } from "react-icons/hi";

type Props = {
  value: string;
  label?: string;
  className?: string;
};

export default function CopyButton({
  value,
  label = "Copy",
  className = "",
}: Props) {
  const [copied, setCopied] = useState(false);

  async function handleCopy(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();

    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // Fallback for older browsers / insecure contexts
      const textarea = document.createElement("textarea");
      textarea.value = value;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "absolute";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? `${label} copied` : `Copy ${label}`}
      title={copied ? "Copied" : `Copy ${label}`}
      className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-divider bg-surface text-ink/70 transition-[background-color,box-shadow,color,transform] duration-200 hover:bg-surface2 hover:text-ink hover:shadow-[var(--shadow-btn-ghost)] active:scale-95 ${className}`}
    >
      {copied ? (
        <HiOutlineCheck className="h-4 w-4 text-olive" aria-hidden />
      ) : (
        <HiOutlineClipboard className="h-4 w-4" aria-hidden />
      )}
    </button>
  );
}
