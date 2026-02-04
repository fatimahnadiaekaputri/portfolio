import { CardProps } from "@/types/Card";
import { motion } from "framer-motion";

export function Card({
    title,
    description,
    skills,
    width = "w-full",
    height = "h-auto",
}: CardProps){
    return(
        <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 220 }}
      className={`
        ${width} ${height}
        rounded-2xl
        border border-white/10
        bg-white/5
        backdrop-blur
        p-6
      `}
    >
      <h3 className="text-lg font-medium">{title}</h3>

      {description && (
        <p className="mt-1 text-sm text-muted-foreground">
          {description}
        </p>
      )}

      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-white/10 px-3 py-1 text-xs"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
    )
}