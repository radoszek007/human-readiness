import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SectionHeading from "@/components/SectionHeading";
import {
  brandPaths,
  methodSteps,
  pressureCards,
  readinessCheckUrl,
  trainingComparison,
  trustPoints,
  trustProofs,
  useCases
} from "@/lib/data";

export const metadata: Metadata = {
  title: "Resilium | Praktické tréninky pro tlak, konflikt a riziko",
  description:
    "Resilium nabízí praktické tréninky a programy pro jednotlivce, lídry a organizace, které potřebují lépe zvládat tlak, konflikt a rizikové situace."
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-section-light">
        <section className="relative overflow-x-clip bg-bg pt-24 text-white sm:pt-40 lg:pt-44">
          <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:72px_72px]" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-section-light to-transparent" />

          <div className="section-shell relative pb-8 sm:pb-24 lg:pb-28">
            <div className="mb-4 overflow-hidden sm:mb-8">
              <div className="max-w-full font-heading text-[clamp(2.45rem,12vw,3.4rem)] font-bold uppercase leading-none tracking-[0.01em] text-white sm:text-[12vw] sm:tracking-[0.05em] lg:text-[8.5rem] lg:tracking-[0.07em]">
                RESILIUM
              </div>
            </div>
            <div className="grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,0.45fr)] lg:items-end">
              <div className="max-w-[22rem] sm:max-w-5xl">
                <p className="eyebrow mb-5">praktické tréninky připravenosti</p>
                <h1 className="max-w-4xl font-heading text-[1.7rem] font-bold leading-[1.12] text-white sm:text-6xl sm:leading-[1.04] lg:text-7xl">
                  Zvládejte tlak, konflikt a rizikové situace jistěji.
                </h1>
                <p className="mt-4 max-w-4xl text-base leading-7 text-text-muted sm:mt-6 sm:text-xl sm:leading-8">
                  Resilium trénuje první reakci v náročné situaci: orientaci, hlas, hranice, rozhodnutí a bezpečný další
                  krok. Program vybíráte podle toho, kdo potřebuje připravenost posílit.
                </p>
                <div className="mt-6 flex flex-col flex-wrap gap-2.5 sm:mt-8 sm:flex-row sm:gap-3">
                  <Link href="#paths" className="cta-primary">
                    Vybrat program
                  </Link>
                  <Link href="#contact" className="cta-secondary">
                    Domluvit konzultaci
                  </Link>
                </div>
              </div>

              <aside className="rounded-[1.25rem] border border-border/35 bg-panel-dark/52 p-5 shadow-panel backdrop-blur">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent-soft">Programy Resilium</p>
                <div className="mt-4 divide-y divide-border/30">
                  {brandPaths.map((path) => (
                    <Link
                      key={path.detailHref}
                      href={path.contactHref}
                      className="grid gap-1 py-3 transition first:pt-0 last:pb-0 hover:text-white"
                    >
                      <span className="font-heading text-lg font-bold leading-tight text-white">{path.title}</span>
                      <span className="text-sm leading-6 text-text-muted">{path.decision}</span>
                    </Link>
                  ))}
                </div>
                <div className="mt-5 border-t border-border/30 pt-4">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-text-secondary">Diagnostika</p>
                  <a
                    href={readinessCheckUrl}
                    className="mt-2 inline-flex text-sm font-bold leading-6 text-accent-soft transition hover:text-white"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Spustit readiness check
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section id="paths" className="bg-bg-secondary py-14 text-white sm:py-24">
          <div className="section-shell">
            <SectionHeading
              eyebrow="Programy"
              title="Vyberte program podle toho, kdo řeší tlak"
              text="Zvolte možnost, která nejlépe odpovídá vaší roli. Přesný formát, rozsah a intenzitu upřesníme až v nezávazné konzultaci."
              light
            />
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {brandPaths.map((path) => (
                <article key={path.detailHref} className="dark-card flex h-full flex-col p-6 sm:p-7">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-accent-soft">{path.title}</p>
                  <p className="mt-4 rounded-2xl border border-accent/35 bg-accent/10 px-4 py-3 text-sm font-bold leading-6 text-white">
                    {path.decision}
                  </p>
                  <h3 className="mt-4 font-heading text-2xl font-bold leading-tight text-white">{path.headline}</h3>
                  <div className="mt-6 grid gap-3">
                    {[
                      ["Pro koho", path.audience],
                      ["Typická situace", path.situation]
                    ].map(([label, text]) => (
                      <div key={label} className="rounded-2xl border border-border/35 bg-bg/24 p-4">
                        <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent-soft">{label}</p>
                        <p className="mt-2 text-sm leading-6 text-text-primary">{text}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-sm font-semibold leading-6 text-text-muted">{path.outcome}</p>
                  <div className="mt-auto pt-7">
                    <Link href={path.contactHref} className="cta-primary w-full">
                      {path.cta}
                    </Link>
                    <Link
                      href={path.detailHref}
                      className="mt-3 inline-flex w-full justify-center rounded-full border border-border/45 px-5 py-3 text-center text-sm font-bold text-text-muted transition hover:border-accent-soft hover:bg-white/10 hover:text-text-primary"
                    >
                      Přečíst detail programu
                    </Link>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-8 rounded-[1.25rem] border border-border/35 bg-panel-dark/60 p-5 text-text-primary">
              <p className="font-heading text-xl font-bold text-white">Nevíte, který program vybrat?</p>
              <p className="mt-2 leading-7 text-text-muted">
                Popište situaci v nezávazné poptávce, nebo si nejdřív ověřte výchozí stav přes readiness check.
                Vhodný program doporučíme podle reality, kterou řešíte.
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link href="/?program=unsure#contact" className="cta-primary">
                  Doporučit vhodný program
                </Link>
                <a
                  href={readinessCheckUrl}
                  className="inline-flex justify-center rounded-full border border-border/45 px-5 py-3 text-center text-sm font-bold text-text-muted transition hover:border-accent-soft hover:bg-white/10 hover:text-text-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Spustit readiness check
                </a>
              </div>
            </div>
            <div className="mt-5 overflow-hidden rounded-[1.25rem] border border-border/35 bg-bg/24 text-text-primary">
              <div className="border-b border-border/30 p-5 sm:p-6">
                <p className="font-heading text-xl font-bold text-white sm:text-2xl">V čem je Resilium jiné než běžné školení</p>
                <p className="mt-3 max-w-4xl text-sm leading-6 text-text-muted sm:text-base sm:leading-7">
                  Nesoutěžíme s přednáškami ani semináři. Resilium přidává řízený nácvik situací, ve kterých se ukáže,
                  jak člověk pod tlakem skutečně reaguje tělem, hlasem, pozorností i rozhodnutím.
                </p>
              </div>

              <div className="hidden md:block">
                <div className="grid grid-cols-2 border-b border-border/30 bg-panel-dark/36">
                  <div className="border-r border-border/30 px-6 py-4 text-xs font-bold uppercase tracking-[0.14em] text-text-secondary">
                    V mnoha školeních se obvykle pracuje s
                  </div>
                  <div className="px-6 py-4 text-xs font-bold uppercase tracking-[0.14em] text-accent-soft">
                    V Resiliu k tomu přidáváme
                  </div>
                </div>
                {trainingComparison.map((item) => (
                  <div key={item.common} className="grid grid-cols-2 border-b border-border/25 last:border-b-0">
                    <div className="border-r border-border/25 px-6 py-4 text-sm leading-6 text-text-muted">{item.common}</div>
                    <div className="px-6 py-4 text-sm font-semibold leading-6 text-text-primary">{item.resilium}</div>
                  </div>
                ))}
              </div>

              <div className="grid gap-3 p-4 md:hidden">
                {trainingComparison.map((item) => (
                  <article key={item.common} className="rounded-2xl border border-border/30 bg-panel-dark/42 p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-text-secondary">Běžné školení</p>
                    <p className="mt-2 text-sm leading-6 text-text-muted">{item.common}</p>
                    <div className="my-4 h-px bg-border/30" />
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent-soft">Resilium</p>
                    <p className="mt-2 text-sm font-semibold leading-6 text-text-primary">{item.resilium}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-18 sm:py-20">
          <div className="section-shell">
            <SectionHeading
              eyebrow="Tlak, konflikt, riziko"
              title="Tři situace, kde nestačí jen vědět, co by bylo správné"
              text="V klidu lidé často rozumí postupu. V náročné chvíli ale rozhoduje první reakce: orientace, hlas, hranice, bezpečný odstup a schopnost udělat další krok."
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

        <section className="py-20 sm:py-24">
          <div className="section-shell">
            <SectionHeading
              eyebrow="Kde se používá"
              title="Konkrétní situace, pro které má Resilium smysl"
              text="Program není obecná motivace. Vybíráme situace, ve kterých člověk nebo tým potřebuje udržet orientaci, komunikaci, hranice a bezpečný postup."
            />
            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {useCases.map((item) => (
                <article key={item.title} className="light-card p-6">
                  <h3 className="font-heading text-xl font-bold text-dark">{item.title}</h3>
                  <p className="mt-4 leading-7 text-slate-700">{item.text}</p>
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
              <div>
                <SectionHeading
                  eyebrow="Důvěra"
                  title="Praktický systém postavený na zkušenosti, ne na motivačních frázích."
                  text="Resilium vytvořil Mgr. Radim Končítek, odborník na osobní bezpečnost, psychofyzickou odolnost, krizovou komunikaci a rozhodování pod tlakem. Přístup propojuje práci s tělem, komunikací, hranicemi, prostorem a praktickým nácvikem náročných situací."
                  light
                />
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {trustPoints.map((point) => (
                    <li key={point} className="flex gap-3 rounded-2xl border border-border/35 bg-panel-dark/58 px-4 py-3 leading-7 text-text-primary">
                      <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {trustProofs.map((proof) => (
                    <article key={proof.title} className="rounded-2xl border border-border/35 bg-panel-dark/58 p-5">
                      <h3 className="font-heading text-lg font-bold text-white">{proof.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-text-muted">{proof.text}</p>
                    </article>
                  ))}
                </div>
              </div>
              <div className="dark-card overflow-hidden">
                <div className="relative aspect-square">
                  <Image
                    src="/Insturctor.png"
                    alt="Mgr. Radim Končítek, autor metodiky Resilium"
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/78 via-dark/12 to-transparent" />
                  <div className="absolute inset-x-5 bottom-5 rounded-[1.25rem] border border-white/20 bg-panel-dark/82 p-5 backdrop-blur sm:inset-x-7 sm:bottom-7">
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent-soft">Mgr. Radim Končítek</p>
                    <p className="mt-2 text-base font-bold leading-6 text-white">autor metodiky a hlavní lektor systému Resilium</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ContactSection
          text="Napište nám. Pomůžeme určit, zda dává smysl program pro jednotlivce, pro lídry nebo pro organizaci."
        />
      </main>
      <Footer />
    </>
  );
}
