"use client";

import { motion } from "framer-motion";

export function FinalCTA() {
  return (
    <section
      id="cta"
      className="flex min-h-[70vh] flex-col items-center justify-center border-b-2 border-ink bg-ink px-6 py-24 text-center md:px-10"
    >
      <motion.h2
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl font-display text-5xl font-[900] uppercase leading-[0.95] tracking-tight text-paper md:text-7xl"
      >
        Хватит тонуть
        <br />в рутине.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mt-6 font-body text-lg font-light text-paper/70 md:text-xl"
      >
        Начните бесплатно. Без карты.
      </motion.p>

      <motion.a
        href="#top"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-10 border-[3px] border-paper bg-paper px-9 py-4 font-body text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-ink hover:text-paper"
      >
        Начать
      </motion.a>
    </section>
  );
}
