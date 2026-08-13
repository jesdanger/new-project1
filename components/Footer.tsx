import { Asterisk } from "./Asterisk";

export function Footer() {
  return (
    <footer id="contacts" className="bg-orange px-6 py-14 md:px-10">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="flex items-center gap-2 font-display text-xl font-[900] uppercase text-ink">
          <Asterisk size={18} />
          STEP CRM
        </div>

        <div className="flex flex-col gap-2 font-body text-sm text-ink">
          <a href="tel:+79625917450" className="w-fit hover:underline">
            +7 (962) 591-74-50
          </a>
          <a href="mailto:vladislavsteshin@gmail.com" className="w-fit hover:underline">
            vladislavsteshin@gmail.com
          </a>
          {/* TODO: заменить на реальный Telegram-ник */}
          <a href="https://t.me/stepcrm" className="w-fit hover:underline">
            Telegram: @stepcrm
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-[1400px] border-t-2 border-ink pt-6 font-body text-xs text-ink/60">
        © 2026 STEP CRM — ИИ ведёт рутину. Вы ведёте бизнес.
      </div>
    </footer>
  );
}
