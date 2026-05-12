import { consultationMailto } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg pt-32 text-white sm:pt-36 lg:pt-40">
      <div className="absolute inset-0 opacity-45 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-section-light to-transparent" />

      <div className="section-shell relative pb-20 sm:pb-24 lg:pb-28">
        <div className="mb-10 overflow-hidden">
          <div className="font-heading text-[18vw] font-bold uppercase leading-none tracking-[0.08em] text-white sm:text-[16vw] lg:text-[11.2rem]">
            RESILIUM
          </div>
        </div>

        <div className="grid items-end gap-10 lg:grid-cols-[1.04fr_0.96fr]">
          <div>
            <p className="eyebrow mb-5">SYSTÉM PŘIPRAVENOSTI</p>
            <h1 className="max-w-4xl font-heading text-4xl font-bold leading-[1.04] text-white sm:text-6xl lg:text-7xl">
              Systém připravenosti pro tlak, konflikt a riziko
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-text-muted sm:text-xl">
              Resilium učí lidi a týmy zachovat orientaci, nastavit hranice, komunikovat jasně a jednat profesionálně
              ve chvílích, kdy roste psychický tlak, vzniká konflikt nebo se situace mění v bezpečnostní riziko.
            </p>
            <p className="mt-5 max-w-3xl text-base leading-7 text-text-primary/90">
              Propojujeme psychofyzický trénink, rozhodovací protokoly, krizovou komunikaci a praktické principy osobní
              bezpečnosti. Účastníci netrénují teorii. Trénují mentální, komunikační a fyzickou reakci v řízených situacích,
              které se podobají reálnému tlaku.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={consultationMailto} className="cta-primary">
                Ověřit připravenost týmu
              </a>
              <a href="#system" className="cta-secondary">
                Prozkoumat systém
              </a>
            </div>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-text-muted">
              Úvodní konzultace pomůže určit, jaký typ tlaku, konfliktu nebo rizika je pro vaši organizaci skutečně důležitý.
            </p>
          </div>

          <div className="dark-card p-5 sm:p-7">
            <div className="mb-8 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent-soft">Readiness Protocol</p>
                <p className="mt-2 text-sm text-text-muted">řízená reakce v praxi</p>
              </div>
              <span className="rounded-full border border-accent/40 px-3 py-1 text-xs font-bold text-accent-soft">LIVE</span>
            </div>

            <div className="grid gap-3">
              {["01 / Check", "02 / Observe", "03 / Resolve", "04 / Execute"].map((step) => (
                <div key={step} className="flex items-center justify-between rounded-2xl border border-border/40 bg-bg-secondary/40 px-4 py-4">
                  <span className="font-body text-lg font-bold">{step}</span>
                  <span className="h-2 w-2 rounded-full bg-accent" />
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-border/40 bg-dark/20 p-4">
              <div className="grid grid-cols-2 gap-3 text-sm text-text-primary sm:grid-cols-4">
                {["tělo", "pozornost", "komunikace", "bezpečný postup"].map((label) => (
                  <span key={label} className="rounded-xl bg-white/10 px-3 py-3 text-center">
                    {label}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-text-muted">
                <span>TLAK</span>
                <span className="text-accent">→</span>
                <span>ORIENTACE</span>
                <span className="text-accent">→</span>
                <span>ROZHODNUTÍ</span>
                <span className="text-accent">→</span>
                <span>AKCE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
