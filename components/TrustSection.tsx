import { trustPoints } from "@/lib/data";

const practicePrinciples = [
  {
    label: "Rámec",
    text: "Každý scénář má jasný cíl, bezpečnostní pravidla a domluvený rozsah zátěže."
  },
  {
    label: "Pozorování",
    text: "Instruktor sleduje tělo, pozornost, komunikaci, rozhodnutí a práci s prostorem."
  },
  {
    label: "Debriefing",
    text: "Zpětná vazba převádí zkušenost z nácviku do konkrétních postupů pro praxi."
  }
];

export default function TrustSection() {
  return (
    <section className="relative overflow-hidden bg-bg py-20 text-white sm:py-24">
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="section-shell">
        <div className="relative grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <p className="eyebrow mb-4">Důvěryhodnost</p>
            <h2 className="font-heading text-3xl font-black leading-tight sm:text-5xl">Odbornost postavená na praxi</h2>
            <p className="mt-6 text-lg leading-8 text-text-primary/90">
              Resilium vychází z dlouholeté praxe v oblasti osobní bezpečnosti, krizové komunikace, psychofyzického tréninku
              a práce s lidmi pod tlakem.
            </p>
            <p className="mt-5 text-base leading-7 text-text-muted">
              Resilium využívá vybrané principy osobní bezpečnosti a moderní sebeobrany jako metodický zdroj pro práci
              s tělem, prostorem, hranicemi a bezpečnou reakcí. Nepředává je jako bojový výcvik pro firmy, ale jako
              praktické principy profesionálního jednání v situacích, kde tlak přechází z komunikace do prostoru a těla.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-border/40 bg-panel-dark/68 p-6 shadow-panel backdrop-blur sm:p-7">
            <ul className="grid gap-4">
              {trustPoints.map((point) => (
                <li key={point} className="flex gap-3 leading-7 text-text-primary">
                  <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-accent shadow-[0_0_0_6px_rgba(244,133,44,0.08)]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative mt-12 overflow-hidden rounded-[1.75rem] border border-border/40 bg-panel-dark/78 shadow-panel backdrop-blur">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <article className="p-7 sm:p-8 lg:p-10">
              <p className="eyebrow mb-4">Princip tréninku</p>
              <h3 className="max-w-3xl font-heading text-2xl font-black leading-tight sm:text-3xl">
                Bezpečně vytvořený tlak. Okamžitá zpětná vazba. Přenos do praxe.
              </h3>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-text-muted">
                Účastníci nejsou vystaveni chaosu kvůli efektu. Každý scénář má jasný rámec, bezpečnostní pravidla
                a debriefing. Cílem je zjistit, co člověk dělá pod tlakem, a naučit ho použitelnější reakci.
              </p>
            </article>

            <div className="border-t border-border/40 bg-bg-secondary/22 p-5 sm:p-6 lg:border-l lg:border-t-0">
              <div className="grid gap-4">
                {practicePrinciples.map((principle, index) => (
                  <div key={principle.label} className="rounded-[1.25rem] border border-border/35 bg-bg/28 p-5">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-black text-white">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h4 className="font-heading text-lg font-extrabold text-white">{principle.label}</h4>
                    </div>
                    <p className="mt-3 leading-7 text-text-muted">{principle.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
