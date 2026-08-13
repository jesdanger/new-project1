"use client";

import { motion } from "framer-motion";
import { Asterisk } from "./Asterisk";
import { DashboardMockup } from "./DashboardMockup";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b-2 border-ink px-6 pb-20 pt-16 md:px-10 md:pt-24"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-[1400px]"
      >
        <motion.div
          variants={item}
          className="mb-8 inline-flex items-center gap-2 border-2 border-ink bg-ink px-4 py-2 text-paper"
        >
          <Asterisk size={14} spin />
          <span className="font-body text-xs font-semibold uppercase tracking-wider">
            CRM с ИИ-агентами для малого бизнеса
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="max-w-5xl font-display text-[15vw] font-[900] uppercase leading-[0.94] tracking-tight text-ink sm:text-6xl md:text-7xl lg:text-[88px]"
        >
          ИИ ведёт рутину.
          <br />
          Вы ведёте бизнес.
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-8 max-w-xl font-body text-lg font-light leading-relaxed text-ink md:text-xl"
        >
          STEP CRM — простая CRM, где ИИ-агенты вводят данные, ставят теги и
          напоминают о follow-up. Бесплатный старт, запуск за 15 минут.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
          <a
            href="#cta"
            className="border-2 border-ink bg-ink px-7 py-4 font-body text-sm font-semibold uppercase tracking-wide text-paper transition-colors hover:bg-paper hover:text-ink"
          >
            Попробовать бесплатно
          </a>
          <a
            href="#product"
            className="border-2 border-ink px-7 py-4 font-body text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            Смотреть презентацию
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        variants={item}
        initial="hidden"
        animate="show"
        className="mx-auto mt-16 max-w-[1400px]"
      >
        <DashboardMockup />
      </motion.div>
    </section>
  );
}
