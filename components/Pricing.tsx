"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Free",
    priceMonth: 0,
    priceYear: 0,
    desc: "Чтобы попробовать и понять, подходит ли STEP CRM вашему бизнесу.",
    features: [
      "До 50 контактов",
      "Базовые функции CRM",
      "Лимит на ИИ-запросы",
      "Email-поддержка",
    ],
    featured: false,
  },
  {
    name: "Старт",
    priceMonth: 990,
    priceYear: 9900,
    desc: "Для растущего малого бизнеса, который хочет отдать рутину ИИ.",
    features: [
      "До 1000 контактов",
      "Расширенные ИИ-агенты",
      "Воронка сделок и задачи",
      "Напоминания о follow-up",
    ],
    featured: true,
  },
  {
    name: "Бизнес",
    priceMonth: 1990,
    priceYear: 19900,
    desc: "Для команды, которой нужны роли, интеграции и приоритетная поддержка.",
    features: [
      "Неограниченно контактов",
      "Команда и роли доступа",
      "Интеграции: телефония, мессенджеры",
      "Приоритетная поддержка",
    ],
    featured: false,
  },
];

export function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="border-b-2 border-ink bg-orange px-6 py-24 md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display text-4xl font-[900] uppercase leading-[0.95] tracking-tight text-ink md:text-5xl">
            Простые тарифы
            <br />
            для каждого
          </h2>

          <div className="inline-flex w-fit border-[3px] border-ink">
            <button
              onClick={() => setYearly(false)}
              className={`px-5 py-2.5 font-body text-sm font-semibold uppercase transition-colors ${
                !yearly ? "bg-ink text-paper" : "text-ink"
              }`}
            >
              Месяц
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`border-l-[3px] border-ink px-5 py-2.5 font-body text-sm font-semibold uppercase transition-colors ${
                yearly ? "bg-ink text-paper" : "text-ink"
              }`}
            >
              Год — 2 месяца бесплатно
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((p, i) => {
            const price = yearly ? Math.round(p.priceYear / 12) : p.priceMonth;
            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`flex flex-col border-[3px] border-ink p-7 ${
                  p.featured ? "bg-ink text-paper" : "bg-paper text-ink"
                }`}
              >
                <h3 className="font-display text-2xl font-[900] uppercase">{p.name}</h3>
                <p className={`mt-2 font-body text-sm ${p.featured ? "text-paper/70" : "text-ink/60"}`}>
                  {p.desc}
                </p>

                <div className="mt-6 flex items-baseline gap-1.5">
                  <span className="font-display text-4xl font-[900]">
                    {price === 0 ? "0 ₽" : `${price.toLocaleString("ru-RU")} ₽`}
                  </span>
                  <span className={`font-body text-sm ${p.featured ? "text-paper/60" : "text-ink/50"}`}>
                    /мес
                  </span>
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className={`border-t pt-3 font-body text-sm ${
                        p.featured ? "border-paper/30" : "border-ink/20"
                      }`}
                    >
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#cta"
                  className={`mt-8 border-[3px] px-6 py-3 text-center font-body text-sm font-semibold uppercase transition-colors ${
                    p.featured
                      ? "border-paper bg-paper text-ink hover:bg-ink hover:text-paper"
                      : "border-ink bg-ink text-paper hover:bg-paper hover:text-ink"
                  }`}
                >
                  Выбрать
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
