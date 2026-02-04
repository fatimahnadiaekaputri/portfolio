"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <header
      className="
        fixed left-0 right-0 top-0 z-30 
        backdrop-blur 
        border-b border-black/10 dark:border-white/10
      "
      style={{
        backgroundColor: "var(--background)",
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link
          href="/"
          className="font-semibold tracking-wide"
          style={{ color: "var(--foreground)" }}
        >
          Nadia <span style={{ color: "var(--accent)" }}>.</span>
        </Link>

        {/* Navigation links */}
        <nav className="hidden gap-6 text-sm md:flex">
          {["home", "experience", "expertise", "projects", "contact"].map((item) => (
            <Link
              key={item}
              href={`#${item}`}
              className="transition"
              style={{ color: "var(--foreground)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--foreground)")}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </nav>

        {/* Theme Button */}
        <button
          aria-label="Toggle theme"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="grid h-9 w-9 place-items-center rounded-full border shadow-sm hover:scale-105 transition"
          style={{
            borderColor: "var(--muted)",
            backgroundColor: "var(--card)",
            color: "var(--foreground)",
          }}
        >
          {theme === "dark" ? <Moon size={18} /> : <Sun size={18} />}
        </button>
      </div>
    </header>
  );
}
