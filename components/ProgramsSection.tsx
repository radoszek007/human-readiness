import { consultationMailto, programs } from "@/lib/data";

export default function ProgramsSection() {
  return (
    <section id="programs" className="bg-section-light py-20 sm:py-24">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className="eyebrow mb-4">Programy</p>
            <h2 className="font-heading text-3xl font-bold leading-tight text-dark sm:text-5xl">
              Programy podle úrovně připravenosti
            </h2>
          </div>
          <p className="text-lg leading-8 text-slate-700">
            Resilium lze nasadit jako vstupní trénink pro běžné týmy, pokročilý scénářový program, leadership trénink
            nebo specializovanou přípravu na situace s vysokým dopadem.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {programs.map((program) => (
            <article key={program.name} className="light-card flex flex-col p-6 sm:p-7">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="font-body text-3xl font-bold tracking-[0.08em] text-bg">{program.name}</p>
                  <h3 className="mt-2 font-heading text-xl font-bold text-dark">{program.subtitle}</h3>
                </div>
                <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-accent">
                  Resilium
                </span>
              </div>

              <div className="mt-6 border-t border-slate-200 pt-5">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-text-secondary">Pro koho</p>
                <p className="mt-2 leading-7 text-slate-700">{program.forWhom}</p>
              </div>

              <div className="mt-5">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-text-secondary">Obsah</p>
                <ul className="mt-3 space-y-2 text-slate-700">
                  {program.content.map((item) => (
                    <li key={item} className="flex gap-3 leading-7">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 rounded-2xl bg-bg/10 p-4">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-bg">Výsledek</p>
                <p className="mt-2 leading-7 text-slate-800">{program.result}</p>
              </div>

              <a href={consultationMailto} className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-bg px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-panel-dark">
                Zjistit vhodnost programu
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
