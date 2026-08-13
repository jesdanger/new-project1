"use client";

import { useState } from "react";
import { Asterisk } from "./Asterisk";

const links = [
  { href: "#product", label: "Продукт" },
  { href: "#agents", label: "Агенты" },
  { href: "#pricing", label: "Тарифы" },
  { href: "#contacts", label: "Контакты" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-orange">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-10">
        <a
          href="#top"
          className="flex items-center gap-2 font-display text-lg font-[900] uppercase tracking-tight text-ink"
        >
          <Asterisk size={20} />
          STEP CRM
        </a>

        <nav className="hidden items-center gap-2 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="-mx-1 px-3 py-1.5 font-body text-sm font-medium uppercase tracking-wide text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#cta"
          className="hidden border-2 border-ink bg-ink px-5 py-2.5 font-body text-sm font-semibold uppercase text-paper transition-colors hover:bg-paper hover:text-ink md:inline-block"
        >
          Попробовать бесплатно
        </a>

        <button
          aria-label="Открыть меню"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 border-2 border-ink md:hidden"
        >
          <span className={`block h-0.5 w-5 bg-ink transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-5 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-5 bg-ink transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="border-t-2 border-ink bg-orange px-6 py-5 md:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-ink/20 py-3 font-body text-sm font-medium uppercase text-ink"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="mt-4 border-2 border-ink bg-ink px-5 py-3 text-center font-body text-sm font-semibold uppercase text-paper"
            >
              Попробовать бесплатно
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
