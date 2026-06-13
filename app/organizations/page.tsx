import type { Metadata } from "next";
import Link from "next/link";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SectionHeading from "@/components/SectionHeading";
import {
  organizationAudience,
  organizationFaqs,
  organizationImpact,
  organizationOutcomes,
  organizationProcess,
  organizationPrograms,
  readinessLayers
} from "@/lib/data";

export const metadata: Metadata = {
  title: "Resilium pro organizace | Připravenost týmů na tlak, konflikt a riziko",
  description:
    "Programy pro firmy, instituce a týmy. Praktický trénink připravenosti lidí na tlak, konflikt, krizovou komunikaci a rizikové situace."
};

const organizationStartSteps = [
  {
    title: "1. Zmapujeme prostředí",
    text: "Pojmenujeme role, rizikové kontakty, typické konflikty, provozní omezení a cíle programu."
  },
  {
    title: "2. Vybereme scénáře",
    text: "Trénink stavíme na situacích, které lidé opravdu zažívají: klient, tým, provoz, veřejnost nebo krizová role."
  },
  {
    title: "3. Doporučíme rozsah",
    text: "Navrhneme vhodnou variantu od základního workshopu po program s modelovými situacemi a doporučeními pro praxi."
  }
];

export default function OrganizationsPage() {
  return (
    <>
      <Header />
      <main className="bg-section-light">
        <section className="relative overflow-hidden bg-bg pt-36 text-white sm:pt-40 lg:pt-44">
          <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:72px_72px]" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-section-light to-transparent" />
          <div className="section-shell relative pb-20 sm:pb-24 lg:pb-28">
            <p className="eyebrow mb-5">Resilium pro organizace</p>
            <h1 className="max-w-5xl font-heading text-4xl font-bold leading-[1.04] text-white sm:text-6xl lg:text-7xl">
              Připravte lidi na tlak, konflikt a riziko.
            </h1>
            <p className="mt-6 max-w-4xl text-lg leading-8 text-text-muted sm:text-xl">
              Resilium pro organizace pomáhá firmám, institucím a týmům trénovat reakce pro situace, kde roste stres,
              vzniká konflikt, narušují se hranice nebo hrozí bezpečnostní riziko.
            </p>
            <p className="mt-5 max-w-3xl rounded-2xl border border-border/45 bg-panel-dark/55 px-4 py-3 text-sm font-semibold leading-6 text-text-primary sm:text-base">
              Výstupem jsou praktické scénáře, společný jazyk, role a postupy, které tým dokáže použít při eskalaci.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#contact" className="cta-primary">
                Domluvit nezávaznou konzultaci
              </Link>
              <Link href="#programy" className="cta-secondary">
                Prohlédnout programy
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="section-shell">
            <SectionHeading
              eyebrow="Problém"
              title="V náročných situacích nerozhodují jen procesy. Rozhodují lidé."
              text="Organizace může mít směrnice, školení a procesy. Pokud ale lidé pod tlakem ztratí orientaci, komunikaci nebo schopnost jednat, situace se začne rozpadat. Resilium propojuje procesy s praktickou připraveností člověka."
            />
          </div>
        </section>

        <section className="bg-bg-secondary py-20 text-white sm:py-24">
          <div className="section-shell">
            <SectionHeading eyebrow="Dopad" title="Kde má Resilium největší dopad" light />
            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {organizationImpact.map((item) => (
                <article key={item.title} className="dark-card p-6">
                  <h3 className="font-heading text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-4 leading-7 text-text-muted">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="section-shell">
            <SectionHeading eyebrow="Výstupy" title="Co organizace získá" />
            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {organizationOutcomes.map((outcome) => (
                <article key={outcome.title} className="light-card p-6">
                  <h3 className="font-heading text-xl font-bold text-dark">{outcome.title}</h3>
                  <p className="mt-4 leading-7 text-slate-700">{outcome.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-bg py-20 text-white sm:py-24">
          <div className="section-shell">
            <SectionHeading eyebrow="Metodika" title="Čtyři vrstvy připravenosti" light />
            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {readinessLayers.map((layer, index) => (
                <article key={layer.title} className="dark-card p-6">
                  <span className="text-sm font-bold text-accent-soft">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-4 font-heading text-xl font-bold text-white">{layer.title}</h3>
                  <p className="mt-4 leading-7 text-text-muted">{layer.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="programy" className="py-20 sm:py-24">
          <div className="section-shell">
            <SectionHeading eyebrow="Programy" title="Programy Resilium pro organizace" />
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {organizationPrograms.map((program) => (
                <article key={program.name} className="light-card p-6 sm:p-7">
                  <p className="font-body text-3xl font-bold tracking-[0.08em] text-bg">{program.name}</p>
                  <p className="mt-1 text-sm font-bold uppercase tracking-[0.16em] text-accent">{program.level}</p>
                  <h3 className="mt-4 font-heading text-2xl font-bold text-dark">{program.subtitle}</h3>
                  <p className="mt-4 leading-7 text-slate-700">{program.text}</p>
                </article>
              ))}
            </div>
            <p className="mt-6 max-w-3xl rounded-2xl border border-border/35 bg-white/80 p-5 leading-7 text-slate-700 shadow-soft">
              OMEGA je specializovaný modul. Není hlavní tváří Resilia.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {organizationStartSteps.map((step) => (
                <article key={step.title} className="rounded-[1.25rem] border border-slate-200 bg-white p-5 shadow-soft">
                  <h3 className="font-heading text-lg font-bold text-dark">{step.title}</h3>
                  <p className="mt-3 leading-7 text-slate-700">{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-bg-secondary py-20 text-white sm:py-24">
          <div className="section-shell">
            <SectionHeading eyebrow="Průběh" title="Jak spolupráce probíhá" light />
            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
              {organizationProcess.map((step, index) => (
                <article key={step.title} className="dark-card p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 font-heading text-xl font-bold text-white">{step.title}</h3>
                  <p className="mt-4 leading-7 text-text-muted">{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="section-shell">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <SectionHeading eyebrow="Pro koho" title="Pro firmy, instituce a týmy" />
              <ul className="grid gap-3 sm:grid-cols-2">
                {organizationAudience.map((item) => (
                  <li key={item} className="flex gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 leading-7 text-slate-700 shadow-soft">
                    <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-section-light pb-20 sm:pb-24">
          <div className="section-shell">
            <SectionHeading eyebrow="FAQ" title="Časté otázky" />
            <div className="mt-10 grid gap-4">
              {organizationFaqs.map((faq) => (
                <details key={faq.question} className="group rounded-[1.25rem] border border-slate-200 bg-white p-5 shadow-soft">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-body text-lg font-bold text-dark">
                    <span>{faq.question}</span>
                    <span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-bg text-xl leading-none text-white transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 max-w-4xl leading-7 text-slate-700">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <ContactSection
          title="Domluvit konzultaci pro organizaci"
          text="Napište nám, jaký typ tlaku, konfliktu nebo rizika řešíte. Navrhneme vhodný formát pro váš tým nebo instituci."
          cta="Odeslat poptávku"
        />
      </main>
      <Footer />
    </>
  );
}
