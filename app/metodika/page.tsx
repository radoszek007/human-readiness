import type { Metadata } from "next";
import Link from "next/link";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SectionHeading from "@/components/SectionHeading";
import { coreSteps, methodSteps } from "@/lib/data";

export const metadata: Metadata = {
  title: "Metodika Resilium | Tělo, pozornost, rozhodnutí a akce",
  description:
    "Stručný přehled metodiky Resilium. Praktický systém práce s tělem, pozorností, komunikací, prostorem a rozhodováním pod tlakem."
};

export default function MethodPage() {
  return (
    <>
      <Header />
      <main className="bg-section-light">
        <section className="relative overflow-hidden bg-bg pt-36 text-white sm:pt-40 lg:pt-44">
          <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:72px_72px]" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-section-light to-transparent" />
          <div className="section-shell relative pb-20 sm:pb-24 lg:pb-28">
            <p className="eyebrow mb-5">Metodika Resilium</p>
            <h1 className="max-w-5xl font-heading text-4xl font-bold leading-[1.04] text-white sm:text-6xl lg:text-7xl">
              Tělo. Pozornost. Rozhodnutí. Akce.
            </h1>
            <p className="mt-6 max-w-4xl text-lg leading-8 text-text-muted sm:text-xl">
              Resilium pracuje s celou reakcí člověka. Tlak ovlivňuje tělo, pozornost, hlas, komunikaci, prostor i rozhodování.
              Proto trénink propojuje mentální, komunikační a fyzickou připravenost.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/#paths" className="cta-primary">
                Vybrat program
              </Link>
              <Link href="#core" className="cta-secondary">
                C.O.R.E.
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="section-shell">
            <SectionHeading
              eyebrow="Klíčový model"
              title="Resilium trénuje celou reakci, ne jen informaci."
              text="Cílem je vytvořit jednoduchý postup, který člověk dokáže použít i ve chvíli, kdy se situace zrychlí, zúží se pozornost a roste tlak na rozhodnutí."
            />
            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {methodSteps.map((step, index) => (
                <article key={step.title} className="light-card p-6">
                  <span className="text-sm font-bold text-accent">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-4 font-heading text-2xl font-bold text-dark">{step.title}</h3>
                  <p className="mt-4 leading-7 text-slate-700">{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="core" className="bg-bg py-20 text-white sm:py-24">
          <div className="section-shell">
            <SectionHeading
              eyebrow="C.O.R.E."
              title="Krátký rozhodovací rámec pro náročné situace"
              text="C.O.R.E. slouží jako jednoduchý orientační postup. V tréninku se opakuje v praktických situacích, aby nezůstal jen jako schéma na papíře."
              light
            />
            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {coreSteps.map((step) => (
                <article key={step.letter} className="dark-card p-6">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-2xl font-bold text-white">
                    {step.letter}
                  </span>
                  <h3 className="mt-5 font-heading text-2xl font-bold text-white">{step.label}</h3>
                  <p className="mt-4 leading-7 text-text-muted">{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ContactSection
          title="Chcete vybrat vhodný formát Resilia?"
          text="Pomůžeme určit, jestli dává smysl osobní trénink, Executive spolupráce nebo program pro organizaci."
        />
      </main>
      <Footer />
    </>
  );
}
