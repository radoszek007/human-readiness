import type { Metadata } from "next";
import Link from "next/link";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SectionHeading from "@/components/SectionHeading";
import { methodSteps, personalAudience, personalBenefits, personalFaqs, personalFormats } from "@/lib/data";

export const metadata: Metadata = {
  title: "Resilium Personal Performance | Osobní výkon a stabilita pod tlakem",
  description:
    "Praktický trénink pro jednotlivce, kteří chtějí lépe zvládat tlak, hranice, rozhodování a náročné situace v každodenním životě."
};

const heroParams = ["praktický trénink", "žádná pasivní přednáška", "tělo, pozornost, hranice, akce", "přenos do každodenního života"];

const personalStartSteps = [
  {
    title: "1. Popíšete situace",
    text: "Stačí stručně napsat, kde nejčastěji ztrácíte klid, hranice nebo jistotu v reakci."
  },
  {
    title: "2. Doporučíme první formát",
    text: "Podle cíle navrhneme úvodní workshop, jednodenní trénink nebo navazující cyklus."
  },
  {
    title: "3. Odnesete si použitelný postup",
    text: "Cílem není motivace na pár dní, ale jednoduchý postup pro tlak, rozhovor a návrat do klidu."
  }
];

export default function PersonalPerformancePage() {
  return (
    <>
      <Header />
      <main className="bg-section-light">
        <section className="relative overflow-hidden bg-bg pt-36 text-white sm:pt-40 lg:pt-44">
          <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:72px_72px]" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-section-light to-transparent" />
          <div className="section-shell relative pb-20 sm:pb-24 lg:pb-28">
            <p className="eyebrow mb-5">Resilium Personal Performance</p>
            <h1 className="max-w-5xl font-heading text-4xl font-bold leading-[1.04] text-white sm:text-6xl lg:text-7xl">
              Zvládněte tlak. Jednejte jistěji. Žijte klidněji.
            </h1>
            <p className="mt-6 max-w-4xl text-lg leading-8 text-text-muted sm:text-xl">
              Resilium Personal Performance je praktický trénink pro jednotlivce, kteří chtějí lépe pracovat se stresem, hranicemi,
              rozhodováním a vlastní reakcí v náročných situacích.
            </p>
            <p className="mt-5 max-w-3xl rounded-2xl border border-border/45 bg-panel-dark/55 px-4 py-3 text-sm font-semibold leading-6 text-text-primary sm:text-base">
              Výstupem je jednoduchý osobní postup pro první sekundy tlaku, jasnější hranice a návrat do klidu.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#contact" className="cta-primary">
                Domluvit nezávaznou konzultaci
              </Link>
              <Link href="#trenink" className="cta-secondary">
                Jak trénink funguje
              </Link>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {heroParams.map((param) => (
                <div key={param} className="rounded-2xl border border-border/40 bg-panel-dark/62 px-4 py-3 text-sm font-bold text-text-primary">
                  {param}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="section-shell">
            <SectionHeading
              eyebrow="Problém"
              title="V klidu víte, co dělat. Pod tlakem rozhoduje reakce."
              text="Stres, konflikt nebo nejistota často spustí automatické reakce. Člověk zamrzne, vybuchne, ustoupí ze svých hranic nebo se dlouho vrací do klidu. Resilium učí vytvářet trénované postupy, které pomáhají zachovat stabilitu a jednat s větší jistotou."
            />
          </div>
        </section>

        <section className="bg-bg-secondary py-20 text-white sm:py-24">
          <div className="section-shell">
            <SectionHeading eyebrow="Co získáte" title="Co v sobě posílíte" light />
            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {personalBenefits.map((benefit) => (
                <article key={benefit.title} className="dark-card p-6">
                  <h3 className="font-heading text-xl font-bold text-white">{benefit.title}</h3>
                  <p className="mt-4 leading-7 text-text-muted">{benefit.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="trenink" className="py-20 sm:py-24">
          <div className="section-shell">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <SectionHeading
                eyebrow="Jak trénink funguje"
                title="Tělo. Pozornost. Hranice. Akce."
                text="Resilium Personal Performance nestojí na pasivním poslouchání. Pracuje s jednoduchými cvičeními, modelovými situacemi a reflexí, aby si účastník odnesl použitelný postup."
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
          </div>
        </section>

        <section className="bg-bg py-20 text-white sm:py-24">
          <div className="section-shell">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
              <SectionHeading eyebrow="Pro koho" title="Pro koho je Personal Performance" light />
              <ul className="grid gap-3 sm:grid-cols-2">
                {personalAudience.map((item) => (
                  <li key={item} className="flex gap-3 rounded-2xl border border-border/35 bg-panel-dark/58 px-4 py-3 leading-7 text-text-primary">
                    <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="section-shell">
            <SectionHeading eyebrow="Formát" title="Jak můžete začít" />
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {personalFormats.map((format) => (
                <article key={format.title} className="light-card p-6">
                  <h3 className="font-heading text-2xl font-bold text-dark">{format.title}</h3>
                  <p className="mt-4 leading-7 text-slate-700">{format.text}</p>
                </article>
              ))}
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {personalStartSteps.map((step) => (
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
              <p className="eyebrow mb-4">Další krok</p>
              <h2 className="max-w-4xl font-heading text-3xl font-bold leading-tight sm:text-5xl">Tréninkem cesta nekončí</h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-text-muted">
                Po prvním programu může navázat další workshop, individuální práce, komunitní trénink nebo přenos principů do pracovního prostředí.
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
              {personalFaqs.map((faq) => (
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
          title="Chcete začít s Personal Performance?"
          text="Napište nám, v jakých situacích chcete být stabilnější. Navrhneme vhodný první krok."
          cta="Odeslat poptávku"
        />
      </main>
      <Footer />
    </>
  );
}
