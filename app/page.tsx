import type { Metadata } from "next";
import Link from "next/link";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SectionHeading from "@/components/SectionHeading";
import { brandPaths, methodSteps, pressureCards, trustPoints } from "@/lib/data";

export const metadata: Metadata = {
  title: "Resilium | Systém trénovaných reakcí pro tlak, konflikt a riziko",
  description:
    "Resilium pomáhá lidem, lídrům a organizacím zachovat orientaci, komunikovat jasně a jednat profesionálně ve chvílích tlaku, konfliktu a rizika."
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-section-light">
        <section className="relative overflow-hidden bg-bg pt-36 text-white sm:pt-40 lg:pt-44">
          <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:72px_72px]" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-section-light to-transparent" />

          <div className="section-shell relative pb-20 sm:pb-24 lg:pb-28">
            <div className="mb-8 overflow-hidden">
              <div className="font-heading text-[18vw] font-bold uppercase leading-none tracking-[0.08em] text-white sm:text-[15vw] lg:text-[10rem]">
                RESILIUM
              </div>
            </div>
            <div className="max-w-5xl">
              <p className="eyebrow mb-5">SYSTÉM PŘIPRAVENOSTI</p>
              <h1 className="font-heading text-4xl font-bold leading-[1.04] text-white sm:text-6xl lg:text-7xl">
                Systém trénovaných reakcí pro mentální, komunikační a fyzickou připravenost.
              </h1>
              <p className="mt-6 max-w-4xl text-lg leading-8 text-text-muted sm:text-xl">
                Pomáháme lidem, lídrům a organizacím zachovat orientaci, komunikovat jasně a jednat profesionálně ve chvílích,
                kdy roste tlak.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="#paths" className="cta-primary">
                  Vybrat správnou cestu
                </Link>
                <Link href="/metodika" className="cta-secondary">
                  Jak Resilium funguje
                </Link>
              </div>
              <p className="mt-4 max-w-3xl text-sm leading-6 text-text-muted">
                Praktický trénink těla, pozornosti, rozhodování a reakce v náročných situacích.
              </p>
            </div>
          </div>
        </section>

        <section className="py-18 sm:py-20">
          <div className="section-shell">
            <SectionHeading
              eyebrow="Tlak, konflikt, riziko"
              title="Když tlak roste, nestačí vědět. Je potřeba jednat."
              text="V klidu lidé často vědí, co by měli dělat. V náročné situaci rozhoduje, jestli dokážou udržet orientaci, komunikaci, hranice a schopnost provést správný krok."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {pressureCards.map((card) => (
                <article key={card.title} className="light-card p-6">
                  <div className="mb-6 h-1.5 w-14 rounded-full bg-accent" />
                  <h3 className="font-heading text-2xl font-bold text-dark">{card.title}</h3>
                  <p className="mt-4 leading-7 text-slate-700">{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="paths" className="bg-bg-secondary py-20 text-white sm:py-24">
          <div className="section-shell">
            <SectionHeading
              eyebrow="Tři cesty"
              title="Vyberte, kde má Resilium pomoci."
              text="Každá oblast používá stejné metodické jádro. Liší se cílovou situací, jazykem, intenzitou a formou spolupráce."
              light
            />
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {brandPaths.map((path) => (
                <article key={path.href} className="dark-card flex h-full flex-col p-6 sm:p-7">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-accent-soft">{path.title}</p>
                  <h3 className="mt-4 font-heading text-2xl font-bold leading-tight text-white">{path.headline}</h3>
                  <p className="mt-4 leading-7 text-text-muted">{path.text}</p>
                  <ul className="mt-6 grid gap-2">
                    {path.points.map((point) => (
                      <li key={point} className="flex gap-3 leading-7 text-text-primary">
                        <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={path.href} className="cta-primary mt-7 w-full">
                    {path.cta}
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="section-shell">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <SectionHeading
                eyebrow="Metodika ve zkratce"
                title="Resilium pracuje s celou reakcí člověka."
                text="Tlak se neodehrává jen v hlavě. Projevuje se v těle, hlasu, pozornosti, komunikaci, prostoru a rozhodování. Proto Resilium propojuje mentální, komunikační a fyzickou připravenost."
              />
              <div className="grid gap-4 sm:grid-cols-2">
                {methodSteps.map((step, index) => (
                  <article key={step.title} className="light-card p-6">
                    <span className="text-sm font-bold text-accent">{String(index + 1).padStart(2, "0")}</span>
                    <h3 className="mt-4 font-heading text-xl font-bold text-dark">{step.title}</h3>
                    <p className="mt-3 leading-7 text-slate-700">{step.text}</p>
                  </article>
                ))}
              </div>
            </div>
            <div className="mt-8">
              <Link href="/metodika" className="cta-primary">
                Poznat metodiku
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-bg py-20 text-white sm:py-24">
          <div className="section-shell">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <SectionHeading
                eyebrow="Důvěryhodnost"
                title="Praktický systém postavený na zkušenosti."
                text="Resilium vytvořil Radim Končítek, odborník na osobní bezpečnost, psychofyzickou odolnost, krizovou komunikaci a rozhodování pod tlakem. Přístup propojuje práci s tělem, komunikací, hranicemi, prostorem a praktickým nácvikem náročných situací."
                light
              />
              <ul className="dark-card grid gap-3 p-6 sm:grid-cols-2 sm:p-7">
                {trustPoints.map((point) => (
                  <li key={point} className="flex gap-3 leading-7 text-text-primary">
                    <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <ContactSection
          title="Nevíte, která cesta je pro vás správná?"
          text="Napište nám. Pomůžeme určit, zda dává smysl osobní trénink, Executive spolupráce nebo program pro organizaci."
        />
      </main>
      <Footer />
    </>
  );
}
