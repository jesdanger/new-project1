# STEP CRM — лендинг

Next.js (App Router) + Tailwind CSS + Framer Motion. Брутализм: оранжевый фон
#E8542B, чёрный/белый, без скруглений и теней, шрифты Inter Tight + Golos Text.

## Запуск локально

```bash
npm install
npm run dev
```

Открыть http://localhost:3000

## Продакшн-сборка

```bash
npm run build
npm run start
```

## Деплой на Vercel

**Через сайт:**
1. Запушить проект в репозиторий на GitHub.
2. На vercel.com → New Project → импортировать репозиторий.
3. Framework Preset определится автоматически (Next.js). Build Command и
   Output Directory менять не нужно.
4. Deploy.

**Через CLI:**
```bash
npm i -g vercel
vercel        # деплой превью
vercel --prod # деплой в прод
```

## Что стоит поправить перед публикацией

- **Telegram в футере** (`components/Footer.tsx`) — сейчас плейсхолдер
  `@stepcrm`, замените на реальный аккаунт.
- **OG-изображение** — сейчас в `<head>` нет og:image. Положите картинку
  1200×630 в `public/og-image.jpg` и добавьте в `app/layout.tsx`:
  ```ts
  openGraph: { images: ["/og-image.jpg"] }
  ```
- Шрифты Inter Tight и Golos Text подключены через `next/font/google` и
  подтягиваются из сети при сборке — для сборки и `next dev` нужен доступ в
  интернет (у Vercel он есть по умолчанию).

## Структура

```
app/
  layout.tsx      — шрифты, meta, og
  page.tsx         — сборка секций
  globals.css      — базовые стили, focus-visible, reduced-motion
components/
  Navbar, Hero, DashboardMockup, TrustMarquee,
  Features, Product, Pricing, FinalCTA, Footer, Asterisk
```

Примечание: скриншот титульного слайда презентации к сообщению не прикрепился,
стиль собран по текстовому брифу (цвета, шрифты, брутализм, астериск ✳).
