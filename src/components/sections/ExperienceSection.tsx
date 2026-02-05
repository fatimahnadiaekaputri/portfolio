"use client";

import { Experience } from "@/types/Experience";
import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

export default function ExperienceSection({
  experience,
}: {
  experience: Experience[];
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [topFade, setTopFade] = useState(false);
  const [bottomFade, setBottomFade] = useState(true);

  // Pisahin berdasarkan type
  const experiencesOnly = useMemo(
    () => experience.filter((e) => e.type !== "organization"),
    [experience]
  );

  const organizationsOnly = useMemo(
    () => experience.filter((e) => e.type === "organization"),
    [experience]
  );

  useEffect(() => {
    onScroll();
  }, []);

  const onScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    const isScrollable = el.scrollHeight > el.clientHeight;

    setTopFade(isScrollable && el.scrollTop > 6);
    setBottomFade(
      isScrollable &&
        el.scrollTop + el.clientHeight < el.scrollHeight - 6
    );
  };

  return (
    <section id="experience" className="py-32">
      <div className="max-w-6xl mx-auto px-5 grid gap-20 lg:grid-cols-2">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-semibold leading-tight">
            Career <br /> Journey
          </h2>

          <p className="mt-6 max-w-md opacity-70">
            Currently a final year undergraduate student at Universitas Gadjah Mada.
            Passionate exploring tech and education fields.
          </p>
        </motion.div>

        {/* RIGHT */}
        <div className="space-y-16">

          {/* EXPERIENCE */}
          <div className="relative">
            {topFade && (
              <div className="pointer-events-none absolute top-0 left-0 right-0 h-12 z-10
              bg-linear-to-b from-background/90 to-transparent" />
            )}

            {bottomFade && (
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-12 z-10
              bg-linear-to-t from-background/90 to-transparent" />
            )}

            <div
              ref={scrollRef}
              onScroll={onScroll}
              className="relative max-h-[260px] overflow-y-auto no-scrollbar pr-6"
            >
              <motion.ul className="space-y-14 pl-8">
                {experiencesOnly.map((exp, i) => (
                  <motion.li key={i} className="relative">
                    <span
                      className="absolute -left-6 top-1.5 h-2.5 w-2.5 rounded-full"
                      style={{
                        background: "var(--accent)",
                        boxShadow: "0 0 8px var(--accent)",
                      }}
                    />

                    {/* TYPE */}
                    <div className="text-xs opacity-50 uppercase tracking-wide">
                      {exp.type}
                    </div>

                    {/* NAME */}
                    <div className="text-base font-medium mt-1">
                      {exp.name}
                    </div>

                    {/* COMPANY */}
                    <div className="text-sm italic opacity-70">
                      {exp.company} ({exp.duration})
                    </div>

                    {/* LOGO */}
                    {exp.logo?.asset?.url && (
                      <img
                        src={exp.logo.asset.url}
                        alt={exp.name}
                        className="h-8 mt-3 object-contain"
                      />
                    )}

                    {/* IMAGES */}
                    {exp.images && exp.images.length > 0 && (
                      <div className="flex gap-2 mt-3">
                        {exp.images.map((img, idx) => (
                          <img
                            key={idx}
                            src={img.asset.url}
                            alt=""
                            className="h-14 w-20 object-cover rounded-md border border-white/10"
                          />
                        ))}
                      </div>
                    )}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>

          {/* ORGANIZATIONS */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>
  <h3 className="text-xl font-semibold mb-6">Organizations</h3>

  <div className="space-y-6">
    {organizationsOnly.map((org, i) => (
      <div
        key={i}
        className="flex items-center gap-4"
      >
        {/* LOGO */}
        <div className="h-14 w-14 rounded-xl border border-white/20 flex items-center justify-center overflow-hidden">
          {org.logo?.asset?.url ? (
            <img
              src={org.logo.asset.url}
              alt={org.name}
              className="object-contain h-full w-full p-2"
            />
          ) : (
            <span className="text-xs opacity-60">{org.name}</span>
          )}
        </div>

        {/* TEXT */}
        <div>
          <div className="text-base font-medium">
            {org.name} {/* ini role / posisi */}
          </div>
          <div className="text-sm opacity-60">
            {org.company} {/* ini nama organisasinya */}
          </div>
        </div>
      </div>
    ))}
  </div>
</motion.div>


        </div>
      </div>
    </section>
  );
}
