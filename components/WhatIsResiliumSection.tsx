import { pillars } from "@/lib/data";

export default function WhatIsResiliumSection() {
  return (
    <section id="system" className="bg-bg-secondary py-20 text-white sm:py-24">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow mb-4">Systém</p>
            <h2 className="font-heading text-3xl font-bold leading-tight sm:text-5xl">Resilium trénuje funkční reakci</h2>
          </div>
          <div className="text-lg leading-8 text-text-primary/90">
            <p>
              Resilium je praktický trénink připravenosti. Učí lidi rozpoznat vlastní stresovou reakci, udržet orientaci v situaci,
              komunikovat srozumitelně a zvolit bezpečný postup.
            </p>
            <p className="mt-5">
              Stres je pouze jeden z faktorů. V reálných situacích se často potkává tlak, nejistota, konflikt, tělesná reakce
              a potřeba rychlého rozhodnutí. Proto Resilium pracuje s člověkem jako celkem: s tělem, pozorností, komunikací i jednáním.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {pillars.map((pillar, index) => (
            <article key={pillar.title} className="dark-card p-6">
              <span className="text-sm font-bold text-accent-soft">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-5 font-heading text-xl font-bold">{pillar.title}</h3>
              <p className="mt-4 leading-7 text-text-muted">{pillar.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
