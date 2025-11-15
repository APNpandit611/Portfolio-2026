"use client"

import { useEffect, useState } from "react";

const DarkModeToggle = () => {
  // Compute initial state based on localStorage or system preference
  const getInitialTheme = () => {
    if (typeof window === "undefined") return false; // SSR safe
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") return true;
    if (!storedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches) return true;
    return false;
  };

  const [isDark, setIsDark] = useState(getInitialTheme);

  // Sync the class on <html> whenever isDark changes
  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(prev => !prev)}
      className="text-md text-primary font-mono dark:text-background"
    >
      {isDark ? "mode: Light" : "mode: Dark"}
    </button>
  );
};

export default DarkModeToggle;
