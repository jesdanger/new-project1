import type { Metadata } from "next";
import { Inter_Tight, Golos_Text } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "500", "700", "900"],
  variable: "--font-inter-tight",
  display: "swap",
});

const golosText = Golos_Text({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-golos",
  display: "swap",
});

export const metadata: Metadata = {
  title: "STEP CRM — ИИ ведёт рутину. Вы ведёте бизнес.",
  description:
    "STEP CRM — простая CRM с ИИ-агентами для малого бизнеса: агенты вводят данные, ставят теги и напоминают о follow-up. Бесплатный старт, запуск за 15 минут.",
  openGraph: {
    title: "STEP CRM — ИИ ведёт рутину. Вы ведёте бизнес.",
    description:
      "Простая CRM с ИИ-агентами для малого бизнеса. Бесплатный старт, запуск за 15 минут.",
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${interTight.variable} ${golosText.variable}`}>
      <body>{children}</body>
    </html>
  );
}
