"use client";

import { motion } from "framer-motion";
import { Asterisk } from "./Asterisk";
import { DashboardMockup } from "./DashboardMockup";

const callouts = [
  {
    n: "01",
    title: "Контакты",
    desc: "Все клиенты и их история — в одном месте, без таблиц и заметок в блокноте.",
  },
  {
    n: "02",
    title: "Сделки",
    desc: "Воронка продаж с этапами, которые реально отражают ваш процесс.",
  },
  {
    n: "03",
    title: "ИИ-агент",
    desc: "Работает в фоне: вводит данные, ставит теги, напоминает о follow-up.",
  },
];

export function Product() {
  return (
    <section id="product" className="border-b-2 border-ink bg-orange px-6 py-24 md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex items-center gap-3 font-display text-4xl font-[900] uppercase tracking-tight text-ink md:text-5xl"
        >
          Одна система вместо хаоса
          <Asterisk size={32} />
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <DashboardMockup />
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {callouts.map((c, i) => (
            <motion.div
              key={c.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border-t-[3px] border-ink pt-4"
            >
              <span className="font-body text-xs font-semibold text-ink/50">[{c.n}]</span>
              <h3 className="mt-1 font-display text-lg font-[900] uppercase text-ink">
                {c.title}
              </h3>
              <p className="mt-2 font-body text-sm text-ink/70">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
