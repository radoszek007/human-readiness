"use client";

import { type FormEvent, useEffect, useState } from "react";
import { contactEmail, contactSteps } from "@/lib/data";

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
  const [selectedProgram, setSelectedProgram] = useState("");
  const [programError, setProgramError] = useState("");
  const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
  const isFormspreeConfigured = Boolean(formspreeEndpoint);

  useEffect(() => {
    const program = new URLSearchParams(window.location.search).get("program") ?? "";
    setSelectedProgram(programFromParam[program] ?? "");
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    if (!selectedProgram) {
      event.preventDefault();
      setProgramError("Vyberte prosím program, abychom věděli, kam poptávku směřovat.");
      return;
    }

    setProgramError("");
  }

  return (
    <section id="contact" className="bg-bg-secondary py-20 text-white sm:py-24">
      <div className="section-shell">
        <div className="overflow-hidden rounded-[1.75rem] border border-border/40 bg-panel-dark/82 p-6 shadow-panel sm:p-8 lg:p-10">
          <div className="grid min-w-0 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="min-w-0">
              <p className="eyebrow mb-4">{eyebrow}</p>
              {title ? <h2 className="font-heading text-3xl font-bold leading-tight sm:text-5xl">{title}</h2> : null}
              <p className={`${title ? "mt-6" : "mt-0 max-w-xl"} text-lg leading-8 text-text-primary/90`}>{text}</p>
            </div>

            <div className="min-w-0">
              <form
                action={formspreeEndpoint ?? `mailto:${contactEmail}`}
                method="post"
                encType={isFormspreeConfigured ? undefined : "text/plain"}
                className="min-w-0 rounded-[1.25rem] border border-border/40 bg-bg/34 p-5 sm:p-6"
                onSubmit={handleSubmit}
              >
                {isFormspreeConfigured ? (
                  <>
                    <input type="hidden" name="_subject" value="Nová poptávka z webu Resilium" />
                    <input type="hidden" name="_language" value="cs" />
                  </>
                ) : null}
                <input type="hidden" name="oblast-zajmu" value={selectedProgram} />

                <fieldset className="min-w-0">
                  <legend className="text-sm font-bold text-text-primary">Vyberte program</legend>
                  <div className="mt-3 grid gap-3 sm:grid-cols-3">
                    {["Pro jednotlivce", "Pro lídry", "Pro organizace", "Nejsem si jistý / chci doporučení"].map((program) => (
                      <label
                        key={program}
                        className={`flex min-h-24 cursor-pointer items-start gap-3 rounded-2xl border p-4 transition ${
                          selectedProgram === program
                            ? "border-accent bg-accent/12 text-white"
                            : "border-border/35 bg-panel-dark/40 text-text-primary hover:border-accent-soft"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={selectedProgram === program}
                          onChange={() => {
                            setSelectedProgram((current) => (current === program ? "" : program));
                            setProgramError("");
                          }}
                          className="mt-1 h-4 w-4 rounded border-border/50 accent-accent"
                          aria-describedby={programError ? "program-error" : undefined}
                        />
                        <span className="text-sm font-bold leading-5">{program}</span>
                      </label>
                    ))}
                  </div>
                  {programError ? (
                    <p id="program-error" className="mt-3 text-sm font-bold leading-6 text-accent-soft" aria-live="polite">
                      {programError}
                    </p>
                  ) : null}
                </fieldset>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
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
                </div>

                <label className="mt-4 grid gap-2 text-sm font-bold text-text-primary">
                  Poznámka, pokud chcete
                  <textarea
                    name="zprava"
                    rows={4}
                    className="w-full min-w-0 rounded-2xl border border-border/50 bg-panel-dark/70 px-4 py-3 text-white outline-none transition placeholder:text-text-secondary focus:border-accent"
                    placeholder={selectedProgram ? messagePlaceholder[selectedProgram] : "Stačí jedna věta. Vhodný formát doporučíme."}
                  />
                </label>
                <button type="submit" className="cta-primary mt-5 w-full sm:w-fit">
                  {cta}
                </button>
                <p className="mt-4 text-sm leading-6 text-text-muted">
                  Odesláním formuláře nevzniká žádný závazek. Informace o zpracování osobních údajů najdete na stránce{" "}
                  <a href="/ochrana-osobnich-udaju" className="font-bold text-accent-soft">
                    Ochrana osobních údajů
                  </a>
                  .
                </p>
              </form>

            </div>
          </div>

          <div className="mt-8 rounded-[1.5rem] border border-border/35 bg-bg/28 p-5 sm:p-6">
            <div className="grid gap-4 lg:grid-cols-2">
              <div className="min-w-0 rounded-[1.25rem] border border-border/35 bg-panel-dark/45 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent-soft">Přímý kontakt</p>
                <a href={`mailto:${contactEmail}`} className="mt-3 inline-flex font-bold text-white transition hover:text-accent-soft">
                  {contactEmail}
                </a>
                <p className="mt-3 text-sm leading-6 text-text-muted">
                  Formulář slouží pro první domluvu. Odesláním nevzniká žádný závazek.
                </p>
              </div>
              <div className="min-w-0 rounded-[1.25rem] border border-border/35 bg-panel-dark/45 p-5">
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
          </div>
        </div>
      </div>
    </section>
  );
}
