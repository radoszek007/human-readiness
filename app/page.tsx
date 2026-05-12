import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const paths = [
  {
    title: "Resilium pro organizace",
    subtitle: "Tlak, konflikt a riziko v pracovním prostředí",
    text: "Pro firmy, školy, úřady a týmy, které potřebují zvládat tlak, konfliktní situace a krizovou komunikaci v reálném pracovním prostředí.",
    result:
      "Výsledkem je společný postup, jasnější komunikace a menší chaos ve chvílích, kdy tlak obvykle rozbíjí rozhodování.",
    points: [
      "týmová připravenost",
      "krizová komunikace",
      "osobní bezpečnost na pracovišti",
      "leadership pod tlakem",
      "scénáře podle reality organizace"
    ],
    cta: "Řeším připravenost organizace",
    href: "/organizace"
  },
  {
    title: "Resilium Personal Performance",
    subtitle: "Osobní odolnost a jistota v náročných situacích",
    text: "Pro jednotlivce, kteří chtějí v tlaku méně zamrzat, lépe nastavit hranice a získat konkrétní postup pro náročné situace.",
    result:
      "Výsledkem je větší jistota v prvních sekundách tlaku: méně zamrznutí, jasnější hranice a konkrétní další krok.",
    points: [
      "regulace stresové reakce",
      "práce s tělem a pozorností",
      "osobní hranice",
      "jistota v konfliktu",
      "veřejné tréninky"
    ],
    cta: "Chci trénovat osobní odolnost",
    href: "/personal"
  }
];

export const metadata: Metadata = {
  title: "Resilium – systém připravenosti",
  description:
    "Rozcestník systému Resilium pro organizace a jednotlivce. Praktická připravenost pro tlak, konflikt a riziko."
};

export default function Home() {
  return (
    <main className="min-h-screen bg-bg text-white">
      <section className="relative overflow-hidden px-5 py-6 sm:px-8 lg:px-10">
        <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:72px_72px]" />

        <nav className="relative mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/20 bg-panel-dark/70 px-4 py-3 shadow-panel backdrop-blur-xl">
          <Link href="/" aria-label="Resilium úvod" className="flex items-center">
            <Image src="/logo-cele.png" alt="Resilium" width={174} height={44} priority className="h-9 w-auto object-contain sm:h-10" />
          </Link>
          <div className="hidden items-center gap-2 md:flex">
            <Link href="/organizace" className="rounded-full px-4 py-2 text-sm font-semibold text-text-muted transition hover:bg-white/10 hover:text-white">
              Pro organizace
            </Link>
            <Link href="/personal" className="rounded-full px-4 py-2 text-sm font-semibold text-text-muted transition hover:bg-white/10 hover:text-white">
              Personal Performance
            </Link>
            <a href="mailto:info@allprosys.cz" className="rounded-full bg-accent px-4 py-2.5 text-sm font-bold text-white transition hover:bg-accent-warm">
              Kontakt
            </a>
          </div>
          <a href="mailto:info@allprosys.cz" className="rounded-full bg-accent px-4 py-2.5 text-sm font-bold text-white transition hover:bg-accent-warm md:hidden">
            Kontakt
          </a>
        </nav>
        <div className="relative mx-auto mt-3 grid max-w-7xl grid-cols-2 gap-2 md:hidden">
          <Link href="/organizace" className="rounded-full border border-white/16 bg-panel-dark/58 px-4 py-3 text-center text-sm font-bold text-text-primary backdrop-blur">
            Pro organizace
          </Link>
          <Link href="/personal" className="rounded-full border border-white/16 bg-panel-dark/58 px-4 py-3 text-center text-sm font-bold text-text-primary backdrop-blur">
            Personal Performance
          </Link>
        </div>

        <div className="section-shell relative py-16 sm:py-20 lg:py-24">
          <div className="mb-10 overflow-hidden">
            <div className="font-heading text-[18vw] font-bold uppercase leading-none tracking-[0.08em] text-white sm:text-[16vw] lg:text-[11.2rem]">
              RESILIUM
            </div>
          </div>

          <div className="max-w-5xl">
            <p className="eyebrow mb-5">SYSTÉM PŘIPRAVENOSTI</p>
            <h1 className="font-heading text-4xl font-bold leading-[1.04] text-white sm:text-6xl lg:text-7xl">
              Když roste tlak, rozhoduje připravenost člověka.
            </h1>
            <p className="mt-6 max-w-4xl text-lg leading-8 text-text-muted sm:text-xl">
              V náročných situacích lidé často neztrácejí znalosti, ale přístup k nim. Resilium trénuje mentální, komunikační
              a fyzickou připravenost člověka — schopnost zůstat funkční, zachovat orientaci a zvolit další krok v týmu,
              v konfliktu i v osobním tlaku.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-text-primary/88">
              Vyberte si, zda řešíte připravenost organizace, nebo vlastní osobní odolnost.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {paths.map((path) => (
              <article key={path.href} className="dark-card flex flex-col p-6 sm:p-8">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent-soft">{path.subtitle}</p>
                <h2 className="mt-4 font-heading text-3xl font-bold leading-tight text-white sm:text-4xl">{path.title}</h2>
                <p className="mt-5 text-lg leading-8 text-text-muted">{path.text}</p>
                <p className="mt-4 leading-7 text-text-primary">{path.result}</p>
                <ul className="mt-7 grid gap-3">
                  {path.points.map((point) => (
                    <li key={point} className="flex gap-3 leading-7 text-text-primary">
                      <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <Link href={path.href} className="cta-primary mt-8 w-full sm:w-fit">
                  {path.cta}
                </Link>
              </article>
            ))}
          </div>

          <section className="mt-12 rounded-[1.75rem] border border-border/40 bg-panel-dark/78 p-7 shadow-panel backdrop-blur sm:p-10">
            <p className="eyebrow mb-4">Společný základ</p>
            <h2 className="font-heading text-3xl font-bold leading-tight text-white sm:text-4xl">Jeden princip. Dvě použití.</h2>
            <p className="mt-5 max-w-4xl text-lg leading-8 text-text-muted">
              Resilium staví na jedné metodické ose: tělo, pozornost, rozhodnutí, akce. V organizacích ji převádíme do týmové
              komunikace, rolí, krizových scénářů a práce s rizikem. U jednotlivců do práce se stresem, hranicemi, prostorem
              a prvním krokem v náročné situaci.
            </p>
          </section>
        </div>
      </section>

      <footer className="bg-panel-dark py-10 text-white">
        <div className="section-shell">
          <div className="grid gap-8 md:grid-cols-[1fr_1fr_1fr]">
            <div>
              <Image src="/logo-cele.png" alt="Resilium" width={210} height={54} className="h-11 w-auto object-contain" />
              <p className="mt-3 max-w-sm leading-7 text-text-muted">Systém připravenosti pro tlak, konflikt a riziko.</p>
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-text-secondary">Kontakt</p>
              <p className="mt-3 font-semibold">
                <a href="mailto:info@resilium.cz">info@resilium.cz</a>
              </p>
              <p className="mt-2 font-semibold">
                <a href="https://www.resilium.cz">www.resilium.cz</a>
              </p>
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-text-secondary">Firma</p>
              <p className="mt-3 font-semibold">Allprosys.cz s.r.o.</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
