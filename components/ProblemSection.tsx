import { problemCards } from "@/lib/data";

export default function ProblemSection() {
  return (
    <section id="problem" className="bg-section-light py-20 sm:py-24">
      <div className="section-shell">
        <div className="max-w-4xl">
          <p className="eyebrow mb-4">Problém</p>
          <h2 className="font-heading text-3xl font-black leading-tight text-dark sm:text-5xl">
            Největší chyby často vznikají ve chvíli, kdy člověk ztratí přístup k tomu, co už ví
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-700">
            Ve stresu se zužuje pozornost, zhoršuje komunikace a roste riziko impulzivní nebo opožděné reakce.
            V pracovním prostředí to může znamenat eskalovaný konflikt, špatné rozhodnutí, zbytečnou chybu nebo ztrátu důvěry.
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            Organizace většinou netrpí nedostatkem znalostí. Slabé místo se objeví ve chvíli, kdy se znalosti mají použít pod tlakem.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {problemCards.map((card) => (
            <article key={card.title} className="light-card p-6 transition hover:-translate-y-1">
              <div className="mb-6 h-1.5 w-14 rounded-full bg-accent" />
              <h3 className="font-heading text-2xl font-extrabold text-dark">{card.title}</h3>
              <p className="mt-4 leading-7 text-slate-700">{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
