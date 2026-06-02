import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SectionHeading from "@/components/SectionHeading";
import { contactEmail } from "@/lib/data";

export const metadata: Metadata = {
  title: "Ochrana osobních údajů | Resilium",
  description:
    "Informace o zpracování osobních údajů na webu Resilium provozovaném společností Allprosys.cz s.r.o."
};

const controllerDetails = [
  "Allprosys.cz s.r.o.",
  "Zámostní 1155/27, 710 00 Ostrava",
  "IČ: 06365329",
  "DIČ: CZ06365329",
  "Společnost zapsaná v obchodním rejstříku vedeném Krajským soudem v Ostravě, oddíl C, vložka 71645.",
  `E-mail: ${contactEmail}`
];

const processingRows = [
  {
    purpose: "Vyřízení poptávky a navazující komunikace",
    data: "jméno, e-mail, telefon, oblast zájmu, obsah zprávy a další údaje, které nám dobrovolně sdělíte",
    basis:
      "provedení opatření před uzavřením smlouvy podle čl. 6 odst. 1 písm. b) GDPR, případně oprávněný zájem podle čl. 6 odst. 1 písm. f) GDPR",
    retention:
      "po dobu vyřízení poptávky a následně přiměřeně pro ochranu právních nároků, nejdéle 3 roky od poslední komunikace, pokud nevznikne smluvní nebo zákonný důvod pro delší uložení"
  },
  {
    purpose: "Plnění smlouvy a zákonných povinností",
    data: "identifikační, kontaktní, fakturační a smluvní údaje zákazníků a kontaktních osob",
    basis: "plnění smlouvy podle čl. 6 odst. 1 písm. b) GDPR a plnění právních povinností podle čl. 6 odst. 1 písm. c) GDPR",
    retention: "po dobu trvání smluvního vztahu a dále podle příslušných účetních, daňových a archivačních předpisů"
  },
  {
    purpose: "Bezpečný provoz webových stránek",
    data: "technické údaje ukládané v serverových protokolech, zejména IP adresa, čas přístupu, požadovaná URL, stavový kód a informace o prohlížeči",
    basis: "oprávněný zájem na bezpečnosti a funkčnosti webu podle čl. 6 odst. 1 písm. f) GDPR",
    retention: "po nezbytnou dobu pro zajištění bezpečnosti a řešení technických incidentů"
  }
];

const rights = [
  "požadovat přístup ke svým osobním údajům",
  "požadovat opravu nepřesných nebo neúplných údajů",
  "požadovat výmaz nebo omezení zpracování, pokud jsou splněny podmínky GDPR",
  "vznést námitku proti zpracování založenému na oprávněném zájmu",
  "požadovat přenositelnost údajů, pokud se uplatní",
  "podat stížnost u Úřadu pro ochranu osobních údajů"
];

const processors = [
  {
    title: "Formspree",
    text:
      "Kontaktní formulář je technicky zpracován službou Formspree. Při odeslání formuláře jí mohou být předány údaje vyplněné ve formuláři a související technické údaje potřebné pro doručení zprávy."
  },
  {
    title: "Vercel",
    text:
      "Web je provozován na infrastruktuře Vercel. V souvislosti s provozem webu mohou být zpracovány běžné technické logy a údaje potřebné pro dostupnost a bezpečnost webu."
  },
  {
    title: "Další nezbytní dodavatelé",
    text:
      "Údaje mohou být zpřístupněny také dodavatelům e-mailových, účetních, právních nebo IT služeb, vždy pouze v rozsahu potřebném pro daný účel."
  }
];

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="bg-section-light">
        <section className="relative overflow-hidden bg-bg pt-36 text-white sm:pt-40 lg:pt-44">
          <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:72px_72px]" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-section-light to-transparent" />
          <div className="section-shell relative pb-20 sm:pb-24 lg:pb-28">
            <p className="eyebrow mb-5">GDPR</p>
            <h1 className="max-w-5xl font-heading text-4xl font-bold leading-[1.04] text-white sm:text-6xl lg:text-7xl">
              Ochrana osobních údajů
            </h1>
            <p className="mt-6 max-w-4xl text-lg leading-8 text-text-muted sm:text-xl">
              Tyto informace popisují, jak společnost Allprosys.cz s.r.o. zpracovává osobní údaje v souvislosti s webem
              Resilium, poptávkami a navazující obchodní komunikací.
            </p>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="section-shell">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <SectionHeading
                eyebrow="Správce údajů"
                title="Kdo za zpracování odpovídá"
                text="Správcem osobních údajů je společnost, která provozuje program Resilium a rozhoduje o účelech a prostředcích zpracování."
              />
              <div className="light-card p-6 sm:p-7">
                <div className="grid gap-2 leading-7 text-slate-700">
                  {controllerDetails.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
                <p className="mt-5 leading-7 text-slate-700">
                  Správce nejmenoval pověřence pro ochranu osobních údajů. Dotazy a žádosti k osobním údajům posílejte na
                  uvedený e-mail.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-bg-secondary py-20 text-white sm:py-24">
          <div className="section-shell">
            <SectionHeading eyebrow="Zpracování" title="Jaké údaje zpracováváme a proč" light />
            <div className="mt-12 grid gap-5">
              {processingRows.map((row) => (
                <article key={row.purpose} className="dark-card p-6 sm:p-7">
                  <h3 className="font-heading text-2xl font-bold text-white">{row.purpose}</h3>
                  <div className="mt-5 grid gap-4 text-text-primary lg:grid-cols-3">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent-soft">Údaje</p>
                      <p className="mt-2 leading-7 text-text-muted">{row.data}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent-soft">Právní základ</p>
                      <p className="mt-2 leading-7 text-text-muted">{row.basis}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent-soft">Doba uložení</p>
                      <p className="mt-2 leading-7 text-text-muted">{row.retention}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="section-shell">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <SectionHeading
                eyebrow="Předávání a cookies"
                title="Komu mohou být údaje zpřístupněny"
                text="Osobní údaje mohou být zpřístupněny pouze osobám, které pro správce zajišťují nezbytné služby, zejména provoz webu, doručení formulářových zpráv, e-mailové služby, účetnictví, právní služby nebo IT podporu. Služby vybíráme tak, aby byla zajištěna odpovídající ochrana údajů."
              />
              <div className="grid gap-5">
                {processors.map((processor) => (
                  <article key={processor.title} className="light-card p-6">
                    <h3 className="font-heading text-2xl font-bold text-dark">{processor.title}</h3>
                    <p className="mt-4 leading-7 text-slate-700">{processor.text}</p>
                  </article>
                ))}
                <article className="light-card p-6">
                  <h3 className="font-heading text-2xl font-bold text-dark">Předávání mimo EU</h3>
                  <p className="mt-4 leading-7 text-slate-700">
                    Někteří techničtí poskytovatelé mohou zpracovávat údaje také mimo Evropskou unii, zejména v USA. V
                    takovém případě je předávání chráněno vhodnými zárukami podle GDPR, typicky standardními smluvními
                    doložkami nebo obdobným smluvním mechanismem.
                  </p>
                </article>
                <article className="light-card p-6">
                  <h3 className="font-heading text-2xl font-bold text-dark">Cookies a analytika</h3>
                  <p className="mt-4 leading-7 text-slate-700">
                    Web v současné podobě nepoužívá marketingové cookies ani analytické nástroje. Pro technický provoz mohou
                    být zpracovány běžné serverové logy. Pokud budou na web doplněny analytické nebo marketingové nástroje,
                    bude tato informace aktualizována a případný souhlas bude řešen samostatně.
                  </p>
                </article>
                <article className="light-card p-6">
                  <h3 className="font-heading text-2xl font-bold text-dark">Automatizované rozhodování</h3>
                  <p className="mt-4 leading-7 text-slate-700">
                    Při zpracování osobních údajů nedochází k automatizovanému rozhodování ani profilování, které by mělo
                    právní nebo obdobně významné účinky.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-bg py-20 text-white sm:py-24">
          <div className="section-shell">
            <SectionHeading eyebrow="Vaše práva" title="Jak můžete uplatnit svá práva" light />
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {rights.map((right) => (
                <div key={right} className="flex gap-3 rounded-2xl border border-border/35 bg-panel-dark/58 px-4 py-3 leading-7 text-text-primary">
                  <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <span>{right}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 max-w-4xl leading-7 text-text-muted">
              Své žádosti můžete posílat na{" "}
              <a href={`mailto:${contactEmail}`} className="font-bold text-accent-soft">
                {contactEmail}
              </a>
              . Správce na žádost reaguje bez zbytečného odkladu, zpravidla nejpozději do jednoho měsíce. Dozorovým úřadem
              je Úřad pro ochranu osobních údajů, Pplk. Sochora 27, 170 00 Praha 7,{" "}
              <a href="https://uoou.gov.cz" className="font-bold text-accent-soft" target="_blank" rel="noreferrer">
                uoou.gov.cz
              </a>
              .
            </p>
          </div>
        </section>

        <ContactSection
          title="Potřebujete se zeptat na zpracování údajů?"
          text="Napište nám, jaký požadavek nebo dotaz k ochraně osobních údajů řešíte."
          cta="Odeslat dotaz"
        />
      </main>
      <Footer />
    </>
  );
}
