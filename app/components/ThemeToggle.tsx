"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null; // prevents hydration mismatch

  // theme is "light" | "dark" | "system"
  // resolvedTheme is the actual active one ("light" | "dark") when theme="system"
  return (
    <div className="flex items-center gap-2 rounded-full bg-violet-100/80 px-2 py-1 dark:bg-slate-800/70">
      <button
        onClick={() => setTheme("system")}
        className={`rounded-full px-3 py-1 text-xs font-bold font-mono transition
          ${theme === "system" ? "bg-[#A468DA] text-white" : "text-slate-700 dark:text-slate-200"}`}
        title={`System (${resolvedTheme})`}
      >
        System
      </button>
      <button
        onClick={() => setTheme("light")}
        className={`rounded-full px-3 py-1 text-xs font-bold font-mono transition
          ${theme === "light" ? "bg-[#A468DA] text-white" : "text-slate-700 dark:text-slate-200"}`}
      >
        Light
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`rounded-full px-3 py-1 text-xs font-bold font-mono transition
          ${theme === "dark" ? "bg-[#A468DA] text-white" : "text-slate-700 dark:text-slate-200"}`}
      >
        Dark
      </button>
    </div>
  );
}
