"use client";

import { motion } from "framer-motion";

const agents = [
  {
    title: "Агент-ассистент",
    desc: "Создаёт контакты и сделки из текста — переписки, заявки или звонка.",
  },
  {
    title: "Автоклассификатор",
    desc: "Расставляет теги, стадии и приоритеты сделок автоматически.",
  },
  {
    title: "Генератор коммуникаций",
    desc: "Пишет письма и follow-up, которые остаётся только отправить.",
  },
];

function Card({
  title,
  desc,
  index,
  className = "",
}: {
  title: string;
  desc: string;
  index: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className={`group border-[3px] border-ink bg-paper p-7 transition-all duration-200 hover:-translate-y-1 hover:bg-ink ${className}`}
    >
      <h3 className="font-display text-xl font-[900] uppercase text-ink transition-colors group-hover:text-paper md:text-2xl">
        {title}
      </h3>
      <p className="mt-3 font-body text-sm leading-relaxed text-ink/70 transition-colors group-hover:text-paper/80">
        {desc}
      </p>
    </motion.div>
  );
}

export function Features() {
  return (
    <section id="agents" className="border-b-2 border-ink bg-orange px-6 py-24 md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 font-display text-4xl font-[900] uppercase tracking-tight text-ink md:text-5xl"
        >
          Почему STEP CRM
        </motion.h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          <Card
            index={0}
            title="Доступная"
            desc="Бесплатный старт и тарифы, рассчитанные на микро-бизнес, а не на корпорации."
          />
          <Card
            index={1}
            title="Простая"
            desc="Запуск за 15 минут — без интеграторов, техзаданий и внедрения."
          />
          <Card
            index={2}
            title="Умная"
            desc="ИИ-агенты берут на себя рутину: ввод данных, теги, follow-up — вы освобождаете часы каждую неделю."
            className="md:col-span-2 lg:col-span-3"
          />
          {agents.map((a, i) => (
            <Card key={a.title} index={i + 3} title={a.title} desc={a.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}
