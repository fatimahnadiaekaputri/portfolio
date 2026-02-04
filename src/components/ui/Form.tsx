"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function Form() {
  const [loading, setLoading] = useState(false);

  return (
    <motion.form
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="
        w-full max-w-xl
        rounded-2xl
        border border-white/10
        bg-white/5
        backdrop-blur
        p-6
        space-y-4
      "
    >
      <Input placeholder="Subject" />
      <Input placeholder="Name" />
      <Textarea placeholder="Message" />

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={loading}
          className="
            rounded-full
            bg-emerald-400
            px-6 py-2
            text-sm font-medium
            text-black
            transition
            hover:bg-emerald-300
            disabled:opacity-50
          "
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </div>
    </motion.form>
  );
}

/* small reusable input */
function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="
        w-full
        rounded-full
        border border-white/10
        bg-white/5
        px-5 py-3
        text-sm
        outline-none
        placeholder:text-white/40
        focus:border-emerald-400/60
      "
    />
  );
}

function Textarea(
  props: React.TextareaHTMLAttributes<HTMLTextAreaElement>
) {
  return (
    <textarea
      {...props}
      rows={6}
      className="
        w-full
        rounded-2xl
        border border-white/10
        bg-white/5
        px-5 py-4
        text-sm
        outline-none
        placeholder:text-white/40
        focus:border-emerald-400/60
        resize-none
      "
    />
  );
}
