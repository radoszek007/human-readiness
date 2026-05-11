const points = [
  "tlak zhoršuje rozhodování",
  "konflikty s klienty nebo veřejností eskalují",
  "tým v zátěži ztrácí komunikaci",
  "manažeři potřebují udržet klid a směr",
  "organizace chce připravit lidi dřív, než přijde vážný incident"
];

const typicalSituations = [
  "agresivní nebo nespokojený klient",
  "konfliktní jednání s veřejností",
  "tlak na rozhodnutí v krátkém čase",
  "týmová komunikace při eskalaci",
  "incident, který narušuje běžný provoz"
];

export default function WhenResiliumMakesSense() {
  return (
    <section className="bg-section-light py-16 sm:py-20">
      <div className="section-shell">
        <div className="rounded-[1.5rem] border border-slate-200 bg-white/82 p-6 shadow-soft sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="eyebrow mb-4">Kdy má Resilium smysl</p>
              <h2 className="font-heading text-3xl font-black leading-tight text-dark sm:text-4xl">
                Praktická příprava tam, kde běžné postupy pod tlakem selhávají
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                Resilium má největší přínos tam, kde tlak zhoršuje rozhodování, konflikty eskalují, tým ztrácí komunikaci
                nebo manažeři potřebují udržet klid a směr.
              </p>
            </div>
            <ul className="grid gap-3">
              {points.map((point) => (
                <li key={point} className="flex gap-3 rounded-2xl border border-slate-200 bg-section-light px-4 py-3 leading-7 text-slate-700">
                  <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-5 rounded-[1.5rem] border border-slate-200 bg-white/82 p-6 shadow-soft sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div>
              <h3 className="font-heading text-2xl font-black leading-tight text-dark sm:text-3xl">
                Typické situace, které řešíme
              </h3>
              <p className="mt-4 leading-7 text-slate-700">
                Resilium má největší přínos tam, kde tlak rychle mění chování lidí, komunikaci nebo rozhodování.
              </p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {typicalSituations.map((situation) => (
                <li
                  key={situation}
                  className="flex h-full min-h-[104px] gap-4 rounded-[1.25rem] border border-l-[3px] border-[#D7E0E7] border-l-accent bg-[#EEF3F6] p-5 leading-7 text-slate-800 shadow-[0_14px_30px_rgba(37,46,53,0.08)] transition duration-200 hover:border-accent/65 hover:shadow-[0_18px_38px_rgba(37,46,53,0.12)]"
                >
                  <span className="mt-2.5 h-2.5 w-2.5 shrink-0 rounded-full bg-accent shadow-[0_0_0_4px_rgba(244,133,44,0.12)]" />
                  <span className="font-semibold">{situation}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
