import { comparisonRows } from "@/lib/data";

export default function DifferenceSection() {
  return (
    <section className="bg-bg py-20 text-white sm:py-24">
      <div className="section-shell">
        <div className="max-w-4xl">
          <p className="eyebrow mb-4">Odlišení</p>
          <h2 className="font-heading text-3xl font-black leading-tight sm:text-5xl">Rozdíl je v nácviku</h2>
          <p className="mt-6 text-lg leading-8 text-text-primary/90">
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
