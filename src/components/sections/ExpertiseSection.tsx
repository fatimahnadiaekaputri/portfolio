"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Card } from "../ui/Card";

export const expertiseSlides = [
    {
      title: "Front-end",
      description: "Building responsive and interactive UI",
      skills: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
    },
    {
      title: "Back-end",
      description: "Designing scalable server-side systems",
      skills: ["Node.js", "Express", "PostgreSQL", "JWT"],
    },
    {
      title: "AI & Data",
      description: "Developing intelligent systems",
      skills: ["Python", "LLM", "NLP", "Machine Learning"],
    },
    {
      title: "Cloud & DevOps",
      description: "Deployment and infrastructure",
      skills: ["Docker", "AWS", "CI/CD", "Nginx"],
    },
    {
      title: "Mobile",
      description: "Cross-platform development",
      skills: ["Flutter", "Dart", "Firebase"],
    },
    {
      title: "System Design",
      description: "Scalable architecture design",
      skills: ["Microservices", "REST API", "Load Balancing"],
    },
  ];  

const CHUNK_SIZE = 3;

const chunkedSlides = Array.from(
  { length: Math.ceil(expertiseSlides.length / CHUNK_SIZE) },
  (_, i) =>
    expertiseSlides.slice(i * CHUNK_SIZE, i * CHUNK_SIZE + CHUNK_SIZE)
);

export default function ExpertiseSection() {
  const [index, setIndex] = useState(0);

  const next = () =>
    setIndex((prev) => (prev + 1) % chunkedSlides.length);

  const prev = () =>
    setIndex((prev) =>
      prev === 0 ? chunkedSlides.length - 1 : prev - 1
    );

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6">
      {/* title */}
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-semibold"
      >
        Skills
      </motion.h2>

      <p className="mt-3 text-sm text-muted-foreground">
        Focusing on back-end and developing AI
      </p>

      {/* slider */}
      <div className="relative mt-16 w-full max-w-6xl overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.12}
            onDragEnd={(_, info) => {
              if (info.offset.x < -100) next();
              if (info.offset.x > 100) prev();
            }}
            initial={{ opacity: 0, x: 120 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -120 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {chunkedSlides[index].map((item) => (
              <Card
                key={item.title}
                title={item.title}
                description={item.description}
                skills={item.skills}
                width="w-full"
                height="h-[220px]"
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* dots */}
      <div className="mt-10 flex gap-3">
        {chunkedSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
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