import { contactEmail, consultationMailto } from "@/lib/data";

export default function ContactSection({
  eyebrow = "Kontakt",
  title,
  text,
  cta = "Odeslat poptávku"
}: {
  eyebrow?: string;
  title: string;
  text: string;
  cta?: string;
}) {
  return (
    <section id="contact" className="bg-bg-secondary py-20 text-white sm:py-24">
      <div className="section-shell">
        <div className="overflow-hidden rounded-[1.75rem] border border-border/40 bg-panel-dark/82 p-6 shadow-panel sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="eyebrow mb-4">{eyebrow}</p>
              <h2 className="font-heading text-3xl font-bold leading-tight sm:text-5xl">{title}</h2>
              <p className="mt-6 text-lg leading-8 text-text-muted">{text}</p>
              <a href={consultationMailto} className="cta-primary mt-8">
                Doporučit vhodný program
              </a>
              <p className="mt-5 text-sm leading-6 text-text-muted">
                E-mail:{" "}
                <a href={`mailto:${contactEmail}`} className="font-bold text-accent-soft">
                  {contactEmail}
                </a>
              </p>
            </div>

            <form action={`mailto:${contactEmail}`} method="post" encType="text/plain" className="rounded-[1.25rem] border border-border/40 bg-bg/34 p-5 sm:p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-bold text-text-primary">
                  Jméno
                  <input
                    name="jmeno"
                    type="text"
                    className="min-h-12 rounded-2xl border border-border/50 bg-panel-dark/70 px-4 text-white outline-none transition placeholder:text-text-secondary focus:border-accent"
                    autoComplete="name"
                  />
                </label>
                <label className="grid gap-2 text-sm font-bold text-text-primary">
                  E-mail
                  <input
                    name="email"
                    type="email"
                    className="min-h-12 rounded-2xl border border-border/50 bg-panel-dark/70 px-4 text-white outline-none transition placeholder:text-text-secondary focus:border-accent"
                    autoComplete="email"
                  />
                </label>
                <label className="grid gap-2 text-sm font-bold text-text-primary">
                  Telefon
                  <input
                    name="telefon"
                    type="tel"
                    className="min-h-12 rounded-2xl border border-border/50 bg-panel-dark/70 px-4 text-white outline-none transition placeholder:text-text-secondary focus:border-accent"
                    autoComplete="tel"
                  />
                </label>
                <label className="grid gap-2 text-sm font-bold text-text-primary">
                  Oblast zájmu
                  <select
                    name="oblast-zajmu"
                    defaultValue="Nejsem si jistý / chci doporučení"
                    className="min-h-12 rounded-2xl border border-border/50 bg-panel-dark/70 px-4 text-white outline-none transition focus:border-accent"
                  >
                    <option>Personal Performance</option>
                    <option>Executive</option>
                    <option>For Organizations</option>
                    <option>Nejsem si jistý / chci doporučení</option>
                  </select>
                </label>
              </div>
              <label className="mt-4 grid gap-2 text-sm font-bold text-text-primary">
                Zpráva
                <textarea
                  name="zprava"
                  rows={5}
                  className="rounded-2xl border border-border/50 bg-panel-dark/70 px-4 py-3 text-white outline-none transition placeholder:text-text-secondary focus:border-accent"
                />
              </label>
              <button type="submit" className="cta-primary mt-5 w-full sm:w-fit">
                {cta}
              </button>
              <p className="mt-4 text-sm leading-6 text-text-muted">
                Odesláním formuláře nevzniká žádný závazek. Slouží pouze k domluvě dalšího kroku.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
