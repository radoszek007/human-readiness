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
        <section className="relative overflow-hidden bg-bg pt-36 text-white sm:pt-40 lg:pt-44">
          <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:72px_72px]" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-section-light to-transparent" />
          <div className="section-shell relative pb-20 sm:pb-24 lg:pb-28">
            <p className="eyebrow mb-5">Resilium Executive</p>
            <h1 className="max-w-5xl font-heading text-4xl font-bold leading-[1.04] text-white sm:text-6xl lg:text-7xl">
              Zachovejte úsudek, autoritu a rozhodnost pod tlakem.
            </h1>
            <p className="mt-6 max-w-4xl text-lg leading-8 text-text-muted sm:text-xl">
              Resilium Executive je individuální práce pro majitele firem, jednatele a manažery, kteří rozhodují v nejistotě,
              vedou lidi v náročných situacích a potřebují udržet stabilitu ve chvílích, kdy roste tlak.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#contact" className="cta-primary">
                Domluvit konzultaci
              </Link>
              <Link href="#spoluprace" className="cta-secondary">
                Jak spolupráce probíhá
              </Link>
            </div>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-text-muted">
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
                Domluvit konzultaci
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
