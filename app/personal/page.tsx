import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

const personalMailto = "mailto:info@allprosys.cz?subject=Z%C3%A1jem%20o%20Resilium%20Personal";

const navItems = [
  { label: "Proč trénovat", href: "#proc-trenovat" },
  { label: "Co se děje pod tlakem", href: "#co-se-deje-pod-tlakem" },
  { label: "Metodika", href: "#metodika" },
  { label: "Trénink", href: "#trenink" },
  { label: "FAQ", href: "#faq" }
];

const heroSignals = [
  { value: "8 hodin", label: "Intenzivní praktický trénink" },
  { value: "4 dovednosti", label: "Dech, postoj, hranice, akce" },
  { value: "0 pasivních přednášek", label: "Vše se zkouší v praxi" },
  { value: "1 den", label: "První použitelný postup pro tlakové situace" }
];

const problemCards = [
  {
    title: "Zamrznutí",
    text: "Když přijde tlak, hlava se vypne a správná slova vás napadnou až později."
  },
  {
    title: "Impulzivní reakce",
    text: "Řeknete nebo uděláte něco, co situaci zhorší, a pak vás to dlouho stojí energii."
  },
  {
    title: "Slabé hranice",
    text: "Ustoupíte i ve chvíli, kdy cítíte, že už někdo překročil vaši hranici."
  },
  {
    title: "Dlouhý návrat do klidu",
    text: "Konflikt skončí, ale tělo i hlava v něm zůstávají ještě dlouho."
  }
];

const pressureProcess = [
  {
    title: "Tělo reaguje",
    text: "Zrychluje se dech, roste napětí, mění se postoj a pohyb."
  },
  {
    title: "Pozornost se zužuje",
    text: "Člověk vidí méně možností a snadněji přehlédne důležité signály."
  },
  {
    title: "Rozhodnutí se zrychluje nebo blokuje",
    text: "Přichází impulz, únik, útok, podřízení nebo zamrznutí."
  },
  {
    title: "Trénovaný postup vrací strukturu",
    text: "Dech, postoj, prostor, komunikace a jednoduchá akce pomáhají obnovit orientaci."
  }
];

const pillars = [
  {
    title: "Tělesná regulace",
    text: "Práce s dechem, postojem, napětím a návratem do stability."
  },
  {
    title: "Orientace a pozornost",
    text: "Schopnost vnímat sebe, prostor, druhého člověka a dostupné možnosti."
  },
  {
    title: "Hranice a komunikace",
    text: "Použití hlasu, odstupu, jednoduchých vět a jasného rozhodnutí."
  },
  {
    title: "Praktický nácvik",
    text: "Postupy se trénují v modelových situacích, aby nezůstaly jen teorií."
  }
];

const benefits = [
  {
    title: "Rychlejší návrat k sobě",
    text: "Naučíte se zachytit první signály tlaku v těle a použít jednoduchý postup pro návrat k orientaci."
  },
  {
    title: "Větší jistota v konfliktu",
    text: "Vyzkoušíte si, jak pracovat s postojem, hlasem, odstupem a hranicemi v napjatém kontaktu."
  },
  {
    title: "Méně zamrznutí",
    text: "Budete trénovat jednoduché kroky, které pomáhají přerušit pasivní nebo chaotickou reakci."
  },
  {
    title: "Lepší rozhodnutí v prvních sekundách",
    text: "Získáte praktický rámec, který vám pomůže zvolit další krok místo automatického jednání."
  },
  {
    title: "Přenos do života",
    text: "Na konci si pojmenujete vlastní situace, ve kterých chcete nový postup používat: konflikt v práci, náročná komunikace, osobní hranice nebo krizový moment."
  }
];

const methodSteps = [
  {
    number: "01",
    title: "Zachytit nástup tlaku",
    text: "Pomocí jednoduchých cvičení poznáte, jak u vás začíná stresová reakce: dech, napětí, postoj, pohled, myšlení."
  },
  {
    number: "02",
    title: "Stabilizovat tělo",
    text: "Naučíte se krátké postupy pro dech, postoj a orientaci, které pomáhají snížit chaos v první reakci."
  },
  {
    number: "03",
    title: "Nastavit hranici",
    text: "Vyzkoušíte si použití hlasu, odstupu a jasných vět v situacích, kde roste tlak nebo nepříjemný kontakt."
  },
  {
    number: "04",
    title: "Jednat",
    text: "Nacvičíte jednoduché akce: ustoupit, ukončit kontakt, požádat o pomoc, změnit pozici nebo zvolit bezpečnější další krok."
  }
];

const trainingParams = [
  { label: "Formát", value: "1 den / 8 hodin" },
  { label: "Skupina", value: "malá skupina" },
  { label: "Forma", value: "praktický nácvik, modelové situace, zpětná vazba" },
  { label: "Zaměření", value: "stresová reakce, hranice, komunikace, osobní bezpečnost" },
  { label: "Výstup", value: "osobní postup pro první sekundy tlaku" }
];

const included = [
  "práce s dechem, postojem a pozorností",
  "rozpoznání osobních spouštěčů stresu",
  "nácvik hranic a bezpečného odstupu",
  "modelové konfliktní a nekomfortní situace",
  "jednoduché principy osobní bezpečnosti",
  "závěrečný osobní plán použití v praxi"
];

const audience = [
  "pro lidi, kteří v tlaku často zamrznou",
  "pro lidi, kteří reagují impulzivně a později toho litují",
  "pro lidi, kteří chtějí lépe nastavovat hranice",
  "pro rodiče, pedagogy a pracovníky v kontaktu s lidmi",
  "pro lidi, kteří se chtějí cítit jistěji v konfliktních situacích",
  "pro každého, kdo chce prakticky rozvíjet osobní odolnost"
];

const faqs = [
  {
    question: "Je to kurz sebeobrany?",
    answer:
      "Trénink využívá některé principy osobní bezpečnosti, ale cílem není učit bojový systém. Cílem je větší jistota, orientace a bezpečnější reakce v náročných situacích."
  },
  {
    question: "Musím být fyzicky zdatný?",
    answer: "Ne. Trénink je přizpůsobený běžným lidem. Nejde o sportovní výkon."
  },
  {
    question: "Je to terapie?",
    answer:
      "Ne. Resilium Personal je praktický trénink dovedností. Neřeší diagnózy ani nenahrazuje odbornou psychologickou nebo zdravotní péči."
  },
  {
    question: "Bude trénink psychicky náročný?",
    answer:
      "Trénink pracuje s mírným nekomfortem a řízenou zátěží. Každé cvičení má jasný rámec a respektuje bezpečnost účastníků."
  },
  {
    question: "Co když nemám zkušenost s žádným výcvikem?",
    answer:
      "To nevadí. Trénink je vytvořený pro běžné lidi. Začíná jednoduchými principy a postupně přidává modelové situace."
  },
  {
    question: "Co si z tréninku odnesu?",
    answer:
      "Odnesete si lepší porozumění vlastní reakci pod tlakem, několik jednoduchých postupů pro stabilizaci, praktičtější práci s hranicemi a osobní plán použití v běžných situacích."
  }
];

export const metadata: Metadata = {
  title: "Resilium Personal — naučte se reagovat klidněji pod tlakem",
  description:
    "Praktický 8hodinový trénink osobní odolnosti. Naučíte se pracovat se stresovou reakcí, nastavit hranice a jednat jistěji v náročných situacích.",
  openGraph: {
    title: "Resilium Personal — praktický trénink reakce pod tlakem",
    description:
      "Když tělo reaguje rychleji než rozum, potřebujete jednoduchý postup. Resilium Personal učí klidnější, jistější a bezpečnější reakci v tlaku.",
    type: "website",
    locale: "cs_CZ"
  }
};

function SectionHeading({
  eyebrow,
  title,
  text,
  light = false
}: {
  eyebrow: string;
  title: string;
  text?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-4xl">
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className={`font-heading text-3xl font-black leading-tight sm:text-5xl ${light ? "text-white" : "text-dark"}`}>
        {title}
      </h2>
      {text ? <p className={`mt-6 text-lg leading-8 ${light ? "text-text-primary/90" : "text-slate-700"}`}>{text}</p> : null}
    </div>
  );
}

function MailCTA({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <a href={personalMailto} className={`cta-primary ${className}`}>
      {children}
    </a>
  );
}

export default function PersonalPage() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/20 bg-panel-dark/72 px-4 py-3 text-white shadow-panel backdrop-blur-xl lg:px-5">
          <Link href="/personal" className="flex items-center gap-3" aria-label="Resilium Personal">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-sm font-black text-white">
              R
            </span>
            <span className="font-heading text-sm font-black uppercase tracking-[0.16em] sm:text-base">Resilium Personal</span>
          </Link>
          <div className="hidden items-center gap-1 xl:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-sm font-semibold text-text-muted transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/organizace"
              className="hidden rounded-full border border-white/15 px-4 py-2.5 text-sm font-extrabold text-text-primary transition hover:bg-white/10 sm:inline-flex"
            >
              Pro organizace
            </Link>
            <a href={personalMailto} className="rounded-full bg-accent px-4 py-2.5 text-sm font-extrabold text-white transition hover:bg-accent-warm">
              Chci informace
            </a>
          </div>
        </nav>
        <div className="mx-auto mt-3 flex max-w-7xl gap-2 overflow-x-auto rounded-full border border-white/15 bg-panel-dark/62 p-2 text-white shadow-panel backdrop-blur-xl xl:hidden">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="shrink-0 rounded-full px-3 py-2 text-xs font-bold text-text-primary">
              {item.label}
            </a>
          ))}
          <Link href="/organizace" className="shrink-0 rounded-full px-3 py-2 text-xs font-bold text-accent-soft sm:hidden">
            Pro organizace
          </Link>
        </div>
      </header>

      <main className="bg-section-light">
        <section className="relative overflow-hidden bg-bg pt-40 text-white sm:pt-44 lg:pt-48">
          <div className="absolute inset-0 opacity-45 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:72px_72px]" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-section-light to-transparent" />

          <div className="section-shell relative pb-20 sm:pb-24 lg:pb-28">
            <div className="mb-10 overflow-hidden">
              <div className="font-heading text-[14.5vw] font-black uppercase leading-none tracking-[0.04em] text-white lg:text-[8rem] xl:text-[9.5rem]">
                RESILIUM PERSONAL
              </div>
            </div>

            <div className="grid gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:items-end">
              <div>
                <p className="eyebrow mb-5">PRAKTICKÝ TRÉNINK OSOBNÍ ODOLNOSTI</p>
                <h1 className="max-w-5xl font-heading text-4xl font-black leading-[1.04] text-white sm:text-6xl lg:text-7xl">
                  Naučte se nezamrznout ve chvíli, kdy roste tlak.
                </h1>
                <p className="mt-6 max-w-4xl text-lg leading-8 text-text-muted sm:text-xl">
                  Resilium Personal je 8hodinový praktický trénink pro lidi, kteří chtějí lépe zvládat stresovou reakci,
                  konfliktní situace a vnitřní napětí. Naučíte se stabilizovat tělo, obnovit orientaci, nastavit hranice
                  a zvolit další krok.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <MailCTA>Chci trénovat odolnost</MailCTA>
                  <a href="#trenink" className="cta-secondary">
                    Jak trénink probíhá
                  </a>
                </div>
                <p className="mt-4 max-w-2xl text-sm leading-6 text-text-muted">
                  Bez soutěžení. Bez tvrdého výcviku. Prakticky, bezpečně a krok za krokem.
                </p>
              </div>

              <aside className="dark-card p-5 sm:p-7">
                <div className="grid gap-3 sm:grid-cols-2">
                  {heroSignals.map((signal) => (
                    <div key={signal.value} className="rounded-2xl border border-border/40 bg-bg-secondary/40 p-4">
                      <p className="font-heading text-xl font-black text-white">{signal.value}</p>
                      <p className="mt-2 text-sm leading-6 text-text-muted">{signal.label}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-5 rounded-2xl border border-border/40 bg-dark/20 p-5">
                  <div className="grid grid-cols-2 gap-3 text-sm font-black uppercase tracking-[0.14em] text-text-primary">
                    {["Tělo.", "Pozornost.", "Hranice.", "Akce."].map((word) => (
                      <span key={word} className="rounded-xl bg-white/10 px-3 py-3 text-center">
                        {word}
                      </span>
                    ))}
                  </div>
                  <p className="mt-5 text-sm leading-6 text-text-muted">
                    Méně zamrznutí. Méně impulzivních reakcí. Více jistoty. Více kontroly nad dalším krokem.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section id="proc-trenovat" className="py-20 sm:py-24">
          <div className="section-shell">
            <SectionHeading
              eyebrow="PROČ TRÉNOVAT"
              title="Víte, co byste měli udělat. Jenže v tlaku se k tomu často nedostanete."
              text="V konfliktu, stresu nebo nečekané situaci tělo často převezme řízení dřív, než stačíte přemýšlet. Zrychlí se dech, zúží se pozornost, napnou se svaly a přichází známé reakce: zamrznutí, ústup, přehnaná obrana nebo chaos v hlavě."
            />
            <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
              Resilium Personal vás naučí tyto první signály zachytit a převést je do konkrétního postupu, který můžete použít
              v běžném životě, práci i náročné komunikaci.
            </p>
            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {problemCards.map((card) => (
                <article key={card.title} className="light-card p-6 transition hover:-translate-y-1">
                  <div className="mb-6 h-1.5 w-14 rounded-full bg-accent" />
                  <h3 className="font-heading text-2xl font-extrabold text-dark">{card.title}</h3>
                  <p className="mt-4 leading-7 text-slate-700">{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="co-se-deje-pod-tlakem" className="bg-bg-secondary py-20 text-white sm:py-24">
          <div className="section-shell">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <SectionHeading
                eyebrow="REAKCE TĚLA"
                title="Stresová reakce není chyba. Problém je, když vás začne řídit."
                light
              />
              <div className="text-lg leading-8 text-text-primary/90">
                <p>
                  Stres mění dech, svalové napětí, pozornost i rozhodování. Tělo se připravuje na rychlou reakci. V některých
                  situacích je to užitečné. V běžném konfliktu, v práci nebo doma ale může stejný mechanismus spustit zbytečně
                  tvrdou obranu, ústup nebo zamrznutí.
                </p>
                <p className="mt-5">
                  Cílem tréninku není vypnout stres. Cílem je naučit se poznat jeho nástup, stabilizovat tělo a získat zpět
                  prostor pro rozhodnutí.
                </p>
              </div>
            </div>

            <div className="mt-12 grid gap-4 lg:grid-cols-4">
              {pressureProcess.map((step, index) => (
                <article key={step.title} className="dark-card p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-sm font-black text-white">
                    {index + 1}
                  </span>
                  <h3 className="mt-5 font-heading text-xl font-extrabold">{step.title}</h3>
                  <p className="mt-4 leading-7 text-text-muted">{step.text}</p>
                </article>
              ))}
            </div>

            <div className="mt-8 rounded-[1.25rem] border border-accent/35 bg-panel-dark/70 p-6 shadow-panel">
              <h3 className="font-heading text-2xl font-black text-white">Příslib tréninku</h3>
              <p className="mt-3 max-w-4xl text-lg leading-8 text-text-muted">
                Po jednom dni budete lépe rozumět své stresové reakci a odnesete si konkrétní postup, jak s ní pracovat v prvních
                sekundách tlaku.
              </p>
            </div>
          </div>
        </section>

        <section id="pilire" className="py-20 sm:py-24">
          <div className="section-shell">
            <SectionHeading
              eyebrow="PILÍŘE TRÉNINKU"
              title="Tělo. Pozornost. Hranice. Akce."
              text="Metodika staví na propojení těla, nervového systému, pozornosti a rozhodování. Nejde o pasivní relaxaci. Účastník si postupy zkouší v řízených situacích, kde vzniká mírný tlak, nekomfort nebo konflikt."
            />
            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {pillars.map((pillar, index) => (
                <article key={pillar.title} className="light-card p-6">
                  <span className="text-sm font-black text-accent">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-5 font-heading text-xl font-extrabold text-dark">{pillar.title}</h3>
                  <p className="mt-4 leading-7 text-slate-700">{pillar.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="prinosy" className="bg-bg py-20 text-white sm:py-24">
          <div className="section-shell">
            <SectionHeading
              eyebrow="CO SI ODNESETE"
              title="Co se po tréninku změní v praxi"
              text="Neodnesete si jen informace o stresu. Odnesete si osobní zkušenost, jednoduchý postup a větší jistotu, že v náročné situaci máte co udělat."
              light
            />
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {benefits.map((benefit, index) => (
                <article key={benefit.title} className={`dark-card p-6 ${index === 4 ? "lg:col-span-2" : ""}`}>
                  <h3 className="font-heading text-xl font-extrabold text-white">{benefit.title}</h3>
                  <p className="mt-4 leading-7 text-text-muted">{benefit.text}</p>
                </article>
              ))}
            </div>
            <div className="mt-10">
              <MailCTA>Zjistit nejbližší termín</MailCTA>
            </div>
          </div>
        </section>

        <section id="metodika" className="py-20 sm:py-24">
          <div className="section-shell">
            <SectionHeading
              eyebrow="METODIKA"
              title="Nejdřív reakci poznáte. Potom ji začnete měnit."
              text="Trénink není přednáška o stresu. Je to praktický proces, ve kterém si účastník nejdříve všimne své reakce, potom se naučí jednoduchý regulační postup a následně ho zkouší v řízené zátěži."
            />
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {methodSteps.map((step) => (
                <article key={step.number} className="rounded-[1.25rem] border border-slate-200 bg-white p-6 shadow-soft">
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-accent">{step.number} — {step.title}</p>
                  <p className="mt-4 leading-7 text-slate-700">{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="trenink" className="bg-bg-secondary py-20 text-white sm:py-24">
          <div className="section-shell">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <SectionHeading
                eyebrow="PARAMETRY TRÉNINKU"
                title="Jeden den praktického tréninku. Dovednost, kterou můžete začít používat hned."
                light
              />
              <p className="text-lg leading-8 text-text-primary/90">
                Resilium Personal je intenzivní 8hodinový trénink v malé skupině. Nečeká vás pasivní seminář ani tvrdý fyzický
                výcvik. Budete postupně zkoušet jednoduché techniky v bezpečně vedených situacích, kde vzniká mírný tlak,
                nekomfort nebo konflikt.
              </p>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="dark-card p-6 sm:p-7">
                <dl className="grid gap-4">
                  {trainingParams.map((item) => (
                    <div key={item.label} className="rounded-2xl border border-border/40 bg-bg/28 p-4">
                      <dt className="text-xs font-black uppercase tracking-[0.16em] text-accent-soft">{item.label}</dt>
                      <dd className="mt-2 text-lg font-extrabold text-white">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <article className="dark-card p-6 sm:p-7">
                <h3 className="font-heading text-2xl font-black text-white">Co je součástí tréninku</h3>
                <ul className="mt-6 grid gap-3">
                  {included.map((item) => (
                    <li key={item} className="flex gap-3 leading-7 text-text-primary">
                      <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <MailCTA className="mt-8">Chci informace o tréninku</MailCTA>
              </article>
            </div>
          </div>
        </section>

        <section id="pro-koho" className="py-20 sm:py-24">
          <div className="section-shell">
            <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr]">
              <SectionHeading
                eyebrow="PRO KOHO JE TRÉNINK"
                title="Pro lidi, kteří chtějí reagovat jistěji, ne tvrději."
                text="Resilium Personal je vhodný pro běžné lidi, kteří chtějí získat větší stabilitu v náročných situacích. Není potřeba sportovní výkon, zkušenost se sebeobranou ani předchozí trénink."
              />
              <div>
                <ul className="light-card grid gap-3 p-6 sm:p-7">
                  {audience.map((item) => (
                    <li key={item} className="flex gap-3 leading-7 text-slate-700">
                      <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 rounded-[1.25rem] border border-border/35 bg-bg/10 p-5">
                  <p className="leading-7 text-slate-700">
                    Trénink není terapie a nenahrazuje odbornou psychologickou nebo zdravotní péči. Je určený jako praktický
                    rozvoj dovedností pro běžné náročné situace.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="bg-section-light pb-20 sm:pb-24">
          <div className="section-shell">
            <SectionHeading eyebrow="ČASTÉ OTÁZKY" title="Co vás možná napadne před přihlášením" />
            <div className="mt-10 grid gap-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="group rounded-[1.25rem] border border-slate-200 bg-white p-5 shadow-soft">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-heading text-lg font-extrabold text-dark">
                    <span>{faq.question}</span>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-bg text-xl leading-none text-white transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 max-w-4xl leading-7 text-slate-700">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="kontakt" className="bg-bg-secondary py-20 text-white sm:py-24">
          <div className="section-shell">
            <div className="rounded-[1.75rem] border border-border/40 bg-panel-dark/80 p-7 shadow-panel sm:p-10 lg:p-12">
              <p className="eyebrow mb-4">NEJBLIŽŠÍ TRÉNINK</p>
              <h2 className="max-w-4xl font-heading text-3xl font-black leading-tight sm:text-5xl">
                Chcete vědět o nejbližším termínu?
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-text-muted">
                Pošleme vám informace k nejbližšímu tréninku Resilium Personal: termín, místo, cenu a přesný průběh.
                Bez závazku.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <MailCTA>Chci informace o tréninku</MailCTA>
                <a href="mailto:info@allprosys.cz" className="text-sm font-extrabold text-accent-soft">
                  info@allprosys.cz
                </a>
              </div>
              <p className="mt-5 max-w-3xl text-sm leading-6 text-text-muted">
                Počet míst bude omezený, aby měl každý účastník prostor pro praktický nácvik a zpětnou vazbu.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-panel-dark py-10 text-white">
        <div className="section-shell">
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr_0.9fr]">
            <div>
              <p className="font-heading text-2xl font-black uppercase tracking-[0.12em]">RESILIUM PERSONAL</p>
              <p className="mt-3 max-w-sm leading-7 text-text-muted">
                Praktický trénink osobní odolnosti pro chvíle, kdy roste tlak.
              </p>
            </div>
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-text-secondary">Odkazy</p>
              <div className="mt-3 grid gap-2 font-semibold">
                <Link href="/organizace">Pro organizace</Link>
                <Link href="/">Úvod</Link>
                <a href="mailto:info@allprosys.cz">Kontakt</a>
              </div>
            </div>
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-text-secondary">Kontakt</p>
              <p className="mt-3 font-semibold">
                <a href="mailto:info@allprosys.cz">info@allprosys.cz</a>
              </p>
              <p className="mt-5 text-sm font-black uppercase tracking-[0.16em] text-text-secondary">Firma</p>
              <p className="mt-3 font-semibold">Allprosys.cz s.r.o.</p>
              <p className="mt-6 text-sm leading-6 text-text-muted">© Resilium / Allprosys.cz s.r.o. Všechna práva vyhrazena.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
