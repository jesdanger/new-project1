import { Asterisk } from "./Asterisk";

const contacts = [
  { name: "Иван Петров", tag: "Горячий" },
  { name: "Мария Орлова", tag: "Новый" },
  { name: "Салон «Мята»", tag: "Постоянный" },
  { name: "Барбершоп BRB", tag: "Холодный" },
];

const columns = [
  { title: "Новый лид", items: ["Кофейня «Пар»", "Фотостудия Light"] },
  { title: "В работе", items: ["Школа «Темп»"] },
  { title: "Договор", items: ["Барбершоп BRB"] },
  { title: "Оплата", items: ["Салон «Мята»"] },
];

const chat = [
  { from: "agent", text: "Добавил контакт «Иван Петров», тег: горячий лид" },
  { from: "agent", text: "Напомнить о follow-up завтра в 10:00?" },
  { from: "user", text: "Да, поставь" },
  { from: "agent", text: "Готово" },
];

export function DashboardMockup() {
  return (
    <div className="border-2 border-ink bg-paper">
      <div className="flex items-center gap-3 border-b-2 border-ink bg-ink px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 border border-paper" />
          <span className="h-2.5 w-2.5 border border-paper" />
          <span className="h-2.5 w-2.5 border border-paper" />
        </div>
        <div className="ml-2 border border-paper/40 px-3 py-1 font-body text-xs text-paper/70">
          app.stepcrm.ru
        </div>
      </div>

      <div className="grid grid-cols-1 divide-y-2 divide-ink lg:grid-cols-[1fr_1.6fr_1fr] lg:divide-x-2 lg:divide-y-0">
        <div className="p-5">
          <p className="mb-4 font-body text-xs font-semibold uppercase tracking-wider text-ink/50">
            Контакты
          </p>
          <ul className="space-y-3">
            {contacts.map((c) => (
              <li
                key={c.name}
                className="flex items-center justify-between border-2 border-ink px-3 py-2"
              >
                <span className="font-body text-sm font-medium text-ink">{c.name}</span>
                <span className="font-body text-[10px] font-semibold uppercase text-ink/60">
                  {c.tag}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-5">
          <p className="mb-4 font-body text-xs font-semibold uppercase tracking-wider text-ink/50">
            Сделки
          </p>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            {columns.map((col) => (
              <div key={col.title} className="border-2 border-ink">
                <div className="border-b-2 border-ink bg-orange/25 px-2 py-1.5 font-body text-[10px] font-semibold uppercase text-ink">
                  {col.title}
                </div>
                <div className="space-y-2 p-2">
                  {col.items.map((it) => (
                    <div
                      key={it}
                      className="border border-ink px-2 py-1.5 font-body text-[11px] text-ink"
                    >
                      {it}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-5">
          <p className="mb-4 flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-wider text-ink/50">
            <Asterisk size={12} />
            ИИ-агент
          </p>
          <div className="space-y-2">
            {chat.map((m, i) => (
              <div
                key={i}
                className={`px-3 py-2 font-body text-xs ${
                  m.from === "agent"
                    ? "border-2 border-ink bg-ink text-paper"
                    : "border-2 border-ink text-ink"
                }`}
              >
                {m.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
