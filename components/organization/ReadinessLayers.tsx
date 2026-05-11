const layers = [
  {
    title: "Mentální připravenost",
    text: "Stres, nejistota, časový tlak, odpovědnost a rozhodování bez úplných informací. Cílem je udržet orientaci a schopnost zvolit další krok."
  },
  {
    title: "Komunikační připravenost",
    text: "Konflikt, nátlak, agrese, manipulace, emoční eskalace a náročný kontakt s klientem nebo veřejností. Cílem je komunikovat jasně, pevně a profesionálně."
  },
  {
    title: "Fyzická a prostorová připravenost",
    text: "Narušení osobního prostoru, nechtěné přiblížení, blokování pohybu, zastrašování tělem nebo potřeba bezpečně odejít. Cílem je udržet hranice, prostor a bezpečný postup."
  }
];

export default function ReadinessLayers() {
  return (
    <section className="bg-section-light pb-16 sm:pb-20">
      <div className="section-shell">
        <div className="rounded-[1.5rem] border border-slate-200 bg-white/82 p-6 shadow-soft sm:p-8 lg:p-10">
          <div className="max-w-4xl">
            <p className="eyebrow mb-4">Tři vrstvy připravenosti</p>
            <h2 className="font-heading text-3xl font-black leading-tight text-dark sm:text-4xl">
              Tlak se neodehrává jen v hlavě
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              V náročné situaci nereaguje jen myšlení. Mění se dech, postoj, hlas, pozornost, vnímání prostoru i schopnost
              rozhodovat. Proto Resilium pracuje se třemi vrstvami připravenosti: mentální, komunikační a fyzickou.
            </p>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {layers.map((layer, index) => (
              <article key={layer.title} className="light-card flex h-full flex-col p-6">
                <span className="mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-black text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-heading text-2xl font-extrabold leading-tight text-dark">{layer.title}</h3>
                <p className="mt-4 leading-7 text-slate-700">{layer.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
