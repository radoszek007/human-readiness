import { consultationMailto } from "@/lib/data";

export default function FinalCTA() {
  return (
    <section id="contact" className="bg-bg-secondary py-20 text-white sm:py-24">
      <div className="section-shell">
        <div className="overflow-hidden rounded-[1.75rem] border border-border/40 bg-panel-dark/80 p-6 shadow-panel sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:items-end">
            <div>
              <p className="eyebrow mb-4">Kontakt</p>
              <h2 className="font-heading text-3xl font-black leading-tight sm:text-5xl">
                Zjistěte, jak je váš tým připravený na tlak, konflikt a riziko
              </h2>
              <p className="mt-6 text-lg leading-8 text-text-muted">
                Krátká konzultace pomůže určit, kde dnes vzniká největší zátěž, jaké situace se opakují a jaký typ tréninku
                by měl pro vaši organizaci skutečný přínos.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={consultationMailto} className="cta-primary">
                  Domluvit úvodní konzultaci
                </a>
                <a href="#programs" className="cta-secondary">
                  Zobrazit programy
                </a>
              </div>
              <p className="mt-4 text-sm leading-6 text-text-muted">Bez závazku. Věcně, konkrétně a podle reality vaší organizace.</p>
            </div>

            <div className="rounded-[1.25rem] border border-border/40 bg-bg/40 p-6">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-accent-soft">Kontaktní údaje</p>
              <dl className="mt-6 grid gap-5">
                <div>
                  <dt className="text-sm text-text-muted">E-mail</dt>
                  <dd className="mt-1 text-lg font-extrabold">
                    <a href="mailto:info@allprosys.cz">info@allprosys.cz</a>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-text-muted">Web</dt>
                  <dd className="mt-1 text-lg font-extrabold">
                    <a href="https://www.allprosys.cz">www.allprosys.cz</a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
