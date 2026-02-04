"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Card } from "../ui/Card";

const categories = [
  { label: "ALL", value: "all" },
  { label: "Web", value: "web" },
  { label: "Data & AI", value: "data-ai" },
  { label: "Security", value: "security" },
];


export type ProjectCategory = "web" | "data-ai" | "security";

export const projects = [
  {
    title: "Truth or Dare",
    description: "A web app to play game with your friends",
    skills: ["React", "Next.js"],
    category: "web",
  },
  {
    title: "AI Chatbot",
    description: "LLM-based conversational assistant",
    skills: ["Python", "LLM", "NLP"],
    category: "data-ai",
  },
  {
    title: "Auth System",
    description: "JWT-based authentication system",
    skills: ["Node.js", "JWT", "PostgreSQL"],
    category: "security",
  },
  {
    title: "Portfolio CMS",
    description: "CMS-powered portfolio website",
    skills: ["Next.js", "Sanity"],
    category: "web",
  },
  {
    title: "Threat Detection",
    description: "Security anomaly detection",
    skills: ["ML", "Security"],
    category: "security",
  },
  {
    title: "Recommendation Engine",
    description: "Personalized content recommendation",
    skills: ["ML", "Data"],
    category: "data-ai",
  },
];

const CHUNK_SIZE = 4;

function chunkArray<T>(arr: T[], size: number) {
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );
}

export default function ProjectsSection() {
    const [category, setCategory] = useState("all");
    const [index, setIndex] = useState(0);
  
    const filteredProjects = useMemo(() => {
      if (category === "all") return projects;
      return projects.filter((p) => p.category === category);
    }, [category]);
  
    const slides = useMemo(
      () => chunkArray(filteredProjects, 4),
      [filteredProjects]
    );
  
    const next = () => setIndex((prev) => (prev + 1) % slides.length);
    const prev = () =>
      setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  
    return (
      <section className="min-h-screen px-6 py-24">
        {/* header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-5xl font-semibold leading-tight">
              Projects <br /> Showcase
            </h2>
            <p className="mt-4 text-muted-foreground">
              Focusing on back-end and developing AI
            </p>
          </div>
  
          {/* filter */}
          <div className="mt-8 flex items-center gap-6 md:mt-0">
            {categories.map((c) => (
              <button
                key={c.value}
                onClick={() => {
                  setCategory(c.value);
                  setIndex(0);
                }}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  category === c.value
                    ? "bg-emerald-400 text-black"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
  
        {/* slider */}
        <div className="relative mt-16 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${category}-${index}`}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.12}
              onDragEnd={(_, info) => {
                if (info.offset.x < -120) next();
                if (info.offset.x > 120) prev();
              }}
              initial={{ opacity: 0, x: 120 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -120 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 max-w-4xl"
            >
              {slides[index]?.map((project) => (
                <Card
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  skills={project.skills}
                  height="h-[220px]"
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
  
        {/* dots */}
        <div className="mt-10 flex justify-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === index
                  ? "w-8 bg-emerald-400"
                  : "w-2 bg-white/40"
              }`}
            />
          ))}
        </div>
      </section>
    );
  }
