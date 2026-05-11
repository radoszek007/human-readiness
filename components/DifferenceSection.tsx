import { comparisonRows } from "@/lib/data";

export default function DifferenceSection() {
  return (
    <section className="bg-bg py-20 text-white sm:py-24">
      <div className="section-shell">
        <div className="max-w-4xl">
          <p className="eyebrow mb-4">Čím se Resilium liší</p>
          <h2 className="font-heading text-3xl font-black leading-tight sm:text-5xl">
            Mentální, komunikační a fyzická připravenost v jednom systému
          </h2>
          <p className="mt-6 text-lg leading-8 text-text-primary/90">
            Běžný stress management pracuje hlavně se stresem. Soft skills školení pracují hlavně s komunikací. Klasická
            sebeobrana pracuje hlavně s fyzickým střetem. Resilium propojuje všechny tři roviny do praktického systému
            reakce pod tlakem.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[1.25rem] border border-accent/30 bg-panel-dark/70 p-6 shadow-panel">
            <p className="text-lg font-extrabold leading-8 text-white">
              V tréninku proto neřešíme jen to, jak se člověk cítí nebo co by měl říct. Řešíme, co skutečně udělá,
              když se situace zhorší.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {[
              "stabilizovat tělo a dech",
              "udržet orientaci",
              "pracovat s hlasem",
              "nastavit hranice",
              "rozpoznat eskalaci",
              "zachovat bezpečný odstup",
              "ukončit rizikový kontakt",
              "rozhodnout, kdy komunikovat, kdy odejít a kdy chránit sebe nebo druhé"
            ].map((item) => (
              <li key={item} className="flex gap-3 rounded-2xl border border-border/35 bg-panel-dark/58 px-4 py-3 leading-7 text-text-primary">
                <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 max-w-4xl">
          <h3 className="font-heading text-2xl font-black leading-tight text-white sm:text-3xl">Rozdíl je v nácviku</h3>
          <p className="mt-4 text-lg leading-8 text-text-primary/90">
            Mnoho školení vysvětluje, co by lidé měli dělat. Resilium vytváří bezpečné podmínky, ve kterých si účastníci ověří,
            co skutečně dokážou použít.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-[1.25rem] border border-border/40 bg-panel-dark/70 shadow-panel">
          <div className="hidden bg-dark/20 text-sm font-black uppercase tracking-[0.14em] text-text-muted md:grid md:grid-cols-[0.72fr_1fr_1fr]">
            <div className="p-4 sm:p-5">Oblast</div>
            <div className="p-4 sm:p-5">Běžné školení</div>
            <div className="border-l border-border/40 p-4 text-accent-soft sm:p-5">Resilium</div>
          </div>
          {comparisonRows.map((row) => (
            <div key={row.area} className="grid grid-cols-1 border-t border-border/40 md:grid-cols-[0.72fr_1fr_1fr]">
              <div className="bg-white/5 p-4 font-heading text-lg font-extrabold sm:p-5">{row.area}</div>
              <div className="p-4 leading-7 text-text-muted sm:p-5">
                <span className="mb-2 block text-xs font-black uppercase tracking-[0.14em] text-text-secondary md:hidden">
                  Běžné školení
                </span>
                {row.common}
              </div>
              <div className="border-border/40 p-4 leading-7 text-text-primary md:border-l sm:p-5">
                <span className="mb-2 block text-xs font-black uppercase tracking-[0.14em] text-accent-soft md:hidden">
                  Resilium
                </span>
                {row.resilium}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
