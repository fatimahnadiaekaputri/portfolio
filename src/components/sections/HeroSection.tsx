"use client";

import { Profile } from "@/types/Profile";
import { motion } from "framer-motion";


export default function HeroSection({profile}: {profile: Profile;}) {
  return (
    <section
      id="home"
      className="min-h-[85vh] flex items-center mt-20"
      style={{
        background: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      <div className="grid gap-12 max-w-6xl mx-auto px-5 lg:grid-cols-[1.2fr_0.8fr] items-center">

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-sm tracking-[0.22em]"
            style={{ color: "var(--accent)" }}>
            Hi, I'm {profile.displayName} · {profile.descriptions?.[0]}
          </div>

          <h1 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">
            {profile.descriptions?.[1]}
          </h1>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={profile.cvLink}
              target="_blank"
              className="px-5 py-2 text-sm font-medium rounded-full shadow"
              style={{
                background: "var(--foreground)",
                color: "var(--background)",
              }}
            >
              My CV
            </a>

            <a
              href="#projects"
              className="px-5 py-2 text-sm font-medium rounded-full border"
              style={{
                borderColor: "var(--muted)",
                background: "var(--card)",
              }}
            >
              See My Work
            </a>
          </div>
        </motion.div>

        {/* RIGHT ANIMATED BOX */}
        <motion.div
          className="flex justify-center"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          {profile.photo?.asset?.url && (
            <img
              src={profile.photo.asset.url}
              alt={profile.displayName}
              className="h-[260px] w-[260px] rounded-3xl object-cover"
            />
          )}
        </motion.div>
      </div>
    </section>
  );
}
