const brands = [
  "Кофейня «Пар»",
  "Салон «Мята»",
  "Барбершоп BRB",
  "Фотостудия Light",
  "Школа «Темп»",
];

export function TrustMarquee() {
  return (
    <section className="border-b-2 border-ink bg-orange py-10">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <p className="mb-6 font-body text-xs font-semibold uppercase tracking-[0.2em] text-ink/60">
          Уже работают с нами
        </p>
      </div>
      <div className="overflow-hidden border-y-2 border-ink py-5">
        <div className="flex w-max animate-marquee items-center gap-10">
          {[...brands, ...brands].map((b, i) => (
            <span
              key={i}
              className="flex items-center gap-10 whitespace-nowrap font-display text-2xl font-[900] uppercase text-ink md:text-3xl"
            >
              {b}
              <span aria-hidden>✳</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
