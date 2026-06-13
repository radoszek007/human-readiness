"use client";

import { useEffect, useState } from "react";
import { contactEmail, contactProblemOptions, contactSteps } from "@/lib/data";

const programFromParam: Record<string, string> = {
  personal: "Pro jednotlivce",
  executive: "Pro lídry",
  organizations: "Pro organizace",
  unsure: "Nejsem si jistý / chci doporučení"
};

const messagePlaceholder: Record<string, string> = {
  "Pro jednotlivce": "Stačí stručně popsat situaci, ve které chcete zvládat tlak, konflikt nebo vlastní reakce jistěji.",
  "Pro lídry": "Popište rozhodování, jednání nebo týmovou situaci, ve které potřebujete větší jistotu pod tlakem.",
  "Pro organizace": "Popište tým, typ kontaktu s lidmi, provoz nebo situace, které se opakují a vyžadují lepší připravenost.",
  "Nejsem si jistý / chci doporučení": "Stačí stručně popsat situaci, člověka nebo tým, kterého se to týká. Vhodný formát doporučíme."
};

export default function ContactSection({
  eyebrow = "Kontakt",
  title,
  text,
  cta = "Odeslat nezávaznou poptávku"
}: {
  eyebrow?: string;
  title?: string;
  text: string;
  cta?: string;
}) {
  const [selectedProgram, setSelectedProgram] = useState("Nejsem si jistý / chci doporučení");
  const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
  const isFormspreeConfigured = Boolean(formspreeEndpoint);

  useEffect(() => {
    const program = new URLSearchParams(window.location.search).get("program") ?? "";
    setSelectedProgram(programFromParam[program] ?? "Nejsem si jistý / chci doporučení");
  }, []);

  return (
    <section id="contact" className="bg-bg-secondary py-20 text-white sm:py-24">
      <div className="section-shell">
        <div className="overflow-hidden rounded-[1.75rem] border border-border/40 bg-panel-dark/82 p-6 shadow-panel sm:p-8 lg:p-10">
          <div className="grid min-w-0 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="flex h-full min-w-0 flex-col justify-between">
              <div className="min-w-0">
                <p className="eyebrow mb-4">{eyebrow}</p>
                {title ? <h2 className="font-heading text-3xl font-bold leading-tight sm:text-5xl">{title}</h2> : null}
                <p className={`${title ? "mt-6" : "mt-0 max-w-xl"} text-lg leading-8 text-text-primary/90`}>{text}</p>
                <div className="mt-6 rounded-[1.25rem] border border-accent/35 bg-accent/10 p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent-soft">Nevíte přesně?</p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-text-primary">
                    Nevadí. Popište situaci vlastními slovy a doporučíme vhodný program i rozsah.
                  </p>
                </div>
              </div>
              <div className="mt-8 min-w-0 rounded-[1.25rem] border border-border/35 bg-bg/30 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent-soft">Přímý kontakt</p>
                <a href={`mailto:${contactEmail}`} className="mt-3 inline-flex font-bold text-white transition hover:text-accent-soft">
                  {contactEmail}
                </a>
                <p className="mt-3 text-sm leading-6 text-text-muted">
                  Formulář slouží pro první domluvu. Odesláním nevzniká žádný závazek.
                </p>
              </div>
              <div className="mt-4 min-w-0 rounded-[1.25rem] border border-border/35 bg-bg/30 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent-soft">Co se stane potom</p>
                <ol className="mt-4 grid gap-3">
                  {contactSteps.map((step, index) => (
                    <li key={step} className="flex gap-3 text-sm leading-6 text-text-primary">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-white">
                        {index + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <form
              action={formspreeEndpoint ?? `mailto:${contactEmail}`}
              method="post"
              encType={isFormspreeConfigured ? undefined : "text/plain"}
              className="min-w-0 rounded-[1.25rem] border border-border/40 bg-bg/34 p-5 sm:p-6"
            >
              {isFormspreeConfigured ? (
                <>
                  <input type="hidden" name="_subject" value="Nová poptávka z webu Resilium" />
                  <input type="hidden" name="_language" value="cs" />
                </>
              ) : null}
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-bold text-text-primary">
                  Jméno
                  <input
                    name="jmeno"
                    type="text"
                    required
                    className="min-h-12 w-full min-w-0 rounded-2xl border border-border/50 bg-panel-dark/70 px-4 text-white outline-none transition placeholder:text-text-secondary focus:border-accent"
                    autoComplete="name"
                  />
                </label>
                <label className="grid gap-2 text-sm font-bold text-text-primary">
                  E-mail
                  <input
                    name="email"
                    type="email"
                    required
                    className="min-h-12 w-full min-w-0 rounded-2xl border border-border/50 bg-panel-dark/70 px-4 text-white outline-none transition placeholder:text-text-secondary focus:border-accent"
                    autoComplete="email"
                  />
                </label>
                <label className="grid gap-2 text-sm font-bold text-text-primary">
                  Telefon
                  <input
                    name="telefon"
                    type="tel"
                    className="min-h-12 w-full min-w-0 rounded-2xl border border-border/50 bg-panel-dark/70 px-4 text-white outline-none transition placeholder:text-text-secondary focus:border-accent"
                    autoComplete="tel"
                  />
                </label>
                <label className="grid gap-2 text-sm font-bold text-text-primary">
                  Oblast zájmu
                  <select
                    name="oblast-zajmu"
                    value={selectedProgram}
                    onChange={(event) => setSelectedProgram(event.target.value)}
                    className="min-h-12 w-full min-w-0 rounded-2xl border border-border/50 bg-panel-dark/70 px-4 text-white outline-none transition focus:border-accent"
                  >
                    <option>Pro jednotlivce</option>
                    <option>Pro lídry</option>
                    <option>Pro organizace</option>
                    <option>Nejsem si jistý / chci doporučení</option>
                  </select>
                </label>
              </div>
              <div className="mt-4 rounded-2xl border border-accent/35 bg-accent/10 px-4 py-3 text-sm font-semibold leading-6 text-text-primary">
                Vybraný program: <span className="text-white">{selectedProgram}</span>
              </div>
              <label className="mt-4 grid gap-2 text-sm font-bold text-text-primary">
                Jakou situaci potřebujete zvládnout
                <div className="grid gap-2 rounded-2xl border border-border/40 bg-panel-dark/45 p-3 sm:grid-cols-2">
                  {contactProblemOptions.map((option) => (
                    <label key={option} className="flex items-start gap-2 text-sm font-semibold leading-6 text-text-primary">
                      <input
                        type="checkbox"
                        name="co-resite"
                        value={option}
                        className="mt-1 h-4 w-4 rounded border-border/50 accent-accent"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </label>
              <label className="mt-4 grid gap-2 text-sm font-bold text-text-primary">
                Zpráva
                <textarea
                  name="zprava"
                  rows={5}
                  required
                  className="w-full min-w-0 rounded-2xl border border-border/50 bg-panel-dark/70 px-4 py-3 text-white outline-none transition placeholder:text-text-secondary focus:border-accent"
                  placeholder={messagePlaceholder[selectedProgram]}
                />
              </label>
              <button type="submit" className="cta-primary mt-5 w-full sm:w-fit">
                {cta}
              </button>
              <p className="mt-4 text-sm leading-6 text-text-muted">
                Odesláním formuláře nevzniká žádný závazek. Formulář je technicky zpracován službou Formspree. Informace
                o zpracování osobních údajů najdete na stránce{" "}
                <a href="/ochrana-osobnich-udaju" className="font-bold text-accent-soft">
                  Ochrana osobních údajů
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
