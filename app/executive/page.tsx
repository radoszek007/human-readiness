import type { Metadata } from "next";
import Link from "next/link";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SectionHeading from "@/components/SectionHeading";
import {
  executiveAudience,
  executiveFaqs,
  executiveFormats,
  executiveMoments,
  executiveTraining
} from "@/lib/data";

const executiveStartSteps = [
  {
    title: "Vstupní situace",
    text: "Začínáme konkrétním rozhodnutím, konfliktem, rolí nebo typem tlaku, který má dopad na vás i tým."
  },
  {
    title: "Diskrétní formát",
    text: "Spolupráce může být jednorázová konzultace, individuální protokol nebo intenzivní příprava na situaci."
  },
  {
    title: "Praktický výstup",
    text: "Výstupem jsou osobní postupy pro hlas, hranice, rozhodnutí, komunikaci a návrat k orientaci."
  }
];

export const metadata: Metadata = {
  title: "Resilium Executive | Rozhodování a autorita pod tlakem",
  description:
    "Diskrétní individuální práce pro majitele firem, CEO a manažery. Osobní protokoly pro rozhodování, komunikaci a stabilitu pod tlakem."
};

export default function ExecutivePage() {
  return (
    <>
      <Header />
      <main className="bg-section-light">
        <section className="relative overflow-x-clip bg-bg pt-28 text-white sm:pt-40 lg:pt-44">
          <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:72px_72px]" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-section-light to-transparent" />
          <div className="section-shell relative min-w-0 pb-14 sm:pb-24 lg:pb-28">
            <p className="eyebrow mb-5">Resilium Executive</p>
            <h1 className="max-w-[21.5rem] font-heading text-[2rem] font-bold leading-[1.08] text-white sm:max-w-5xl sm:text-6xl sm:leading-[1.04] lg:text-7xl">
              Zachovejte úsudek, autoritu a rozhodnost pod tlakem.
            </h1>
            <p className="mt-5 max-w-[21.5rem] text-base leading-7 text-text-muted sm:mt-6 sm:max-w-4xl sm:text-xl sm:leading-8">
              Resilium Executive je individuální práce pro majitele firem, jednatele a manažery, kteří rozhodují v nejistotě,
              vedou lidi v náročných situacích a potřebují udržet stabilitu ve chvílích, kdy roste tlak.
            </p>
            <p className="mt-5 max-w-[21.5rem] rounded-2xl border border-border/45 bg-panel-dark/55 px-4 py-3 text-sm font-semibold leading-6 text-text-primary sm:max-w-3xl sm:text-base">
              Výstupem jsou osobní protokoly pro hlas, hranice, rozhodnutí a komunikaci v konkrétních situacích odpovědnosti.
            </p>
            <div className="mt-8 flex max-w-[21.5rem] flex-col gap-3 sm:max-w-none sm:flex-row">
              <Link href="#contact" className="cta-primary w-full sm:w-fit">
                Domluvit nezávaznou konzultaci
              </Link>
              <Link href="#spoluprace" className="cta-secondary w-full sm:w-fit">
                Jak spolupráce probíhá
              </Link>
            </div>
            <p className="mt-4 max-w-[21.5rem] text-sm leading-6 text-text-muted sm:max-w-3xl">
              Diskrétní individuální spolupráce. Bez veřejné expozice. Bez motivačního divadla.
            </p>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="section-shell">
            <SectionHeading
              eyebrow="Problém"
              title="Nejtěžší rozhodnutí nepřicházejí v ideálních podmínkách."
              text="Majitelé firem a manažeři často rozhodují ve chvílích, kdy chybí úplná data, roste tlak okolí a každé zaváhání má dopad na lidi, finance i reputaci. V takových situacích nestačí odbornost. Rozhoduje schopnost udržet stabilitu, rozlišit podstatné a jednat bez zbytečné reaktivity."
            />
          </div>
        </section>

        <section className="bg-bg-secondary py-20 text-white sm:py-24">
          <div className="section-shell">
            <SectionHeading eyebrow="Pro koho" title="Pro koho je Resilium Executive" light />
            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {executiveAudience.map((item) => (
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
            <SectionHeading eyebrow="Kdy spolupracovat" title="Kdy má Executive práce největší smysl" />
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {executiveMoments.map((moment) => (
                <article key={moment.title} className="light-card p-5">
                  <h3 className="font-heading text-lg font-bold text-dark">{moment.title}</h3>
                  <p className="mt-3 leading-7 text-slate-700">{moment.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="spoluprace" className="bg-bg py-20 text-white sm:py-24">
          <div className="section-shell">
            <SectionHeading eyebrow="Co se trénuje" title="Osobní protokoly pro tlak, konflikt a rozhodování" light />
            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
              {executiveTraining.map((item) => (
                <article key={item.title} className="dark-card p-6 xl:col-span-1">
                  <h3 className="font-heading text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-4 leading-7 text-text-muted">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="section-shell">
            <SectionHeading eyebrow="Formáty" title="Formáty spolupráce" />
            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {executiveFormats.map((format) => (
                <article key={format.title} className="light-card p-6">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-accent">{format.meta}</p>
                  <h3 className="mt-4 font-heading text-2xl font-bold text-dark">{format.title}</h3>
                  <p className="mt-4 leading-7 text-slate-700">{format.text}</p>
                </article>
              ))}
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {executiveStartSteps.map((step) => (
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
            <div className="rounded-[1.75rem] border border-border/40 bg-panel-dark/80 p-7 shadow-panel sm:p-10">
              <p className="eyebrow mb-4">Odlišení</p>
              <h2 className="max-w-4xl font-heading text-3xl font-bold leading-tight sm:text-5xl">
                Praktický trénink reakce v odpovědnosti.
              </h2>
              <p className="mt-5 max-w-4xl text-lg leading-8 text-text-muted">
                Resilium Executive není motivační koučink ani terapeutický proces. Pracuje s reálnou reakcí lídra: tělem,
                pozorností, hlasem, rozhodováním, komunikací a přenosem do konkrétních situací.
              </p>
              <Link href="#contact" className="cta-primary mt-8">
                Domluvit nezávaznou konzultaci
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="section-shell">
            <SectionHeading eyebrow="FAQ" title="Časté otázky" />
            <div className="mt-10 grid gap-4">
              {executiveFaqs.map((faq) => (
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
          title="Domluvit konzultaci"
          text="Popište stručně situaci, rozhodnutí nebo typ tlaku, který řešíte. Navrhneme bezpečný a věcný další krok."
          cta="Odeslat poptávku"
        />
      </main>
      <Footer />
    </>
  );
}
