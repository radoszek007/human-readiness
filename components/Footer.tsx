import Image from "next/image";
import Link from "next/link";
import { contactEmail } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-dark py-12 text-white">
      <div className="section-shell">
        <div className="grid gap-8 md:grid-cols-[1.05fr_0.85fr_1.1fr] lg:grid-cols-[1.05fr_0.75fr_1fr_1fr]">
          <div>
            <Image src="/logo-cele.png" alt="Resilium" width={210} height={54} className="h-11 w-auto object-contain" />
            <p className="mt-3 max-w-sm leading-7 text-text-muted">
              Praktické tréninky a programy pro zvládání tlaku, konfliktu a rizikových situací.
            </p>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-text-secondary">Navigace</p>
            <div className="mt-3 grid gap-2 font-semibold text-text-primary">
              <Link href="/personal-performance">Personal Performance</Link>
              <Link href="/executive">Executive</Link>
              <Link href="/organizations">Pro organizace</Link>
              <Link href="/metodika">Metodika</Link>
            </div>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-text-secondary">Provozovatel</p>
            <div className="mt-3 grid gap-1 leading-7 text-text-primary">
              <p className="font-semibold">Allprosys.cz s.r.o.</p>
              <p>Zámostní 1155/27</p>
              <p>710 00 Ostrava</p>
              <p>IČ: 06365329</p>
              <p>DIČ: CZ06365329</p>
              <p>Zapsaná v obchodním rejstříku vedeném Krajským soudem v Ostravě, oddíl C, vložka 71645.</p>
            </div>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-text-secondary">Kontakt a právní informace</p>
            <p className="mt-3 font-semibold">
              <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            </p>
            <p className="mt-2 font-semibold">
              <a href="https://www.resilium.cz">www.resilium.cz</a>
            </p>
            <p className="mt-2 font-semibold">
              <Link href="/ochrana-osobnich-udaju">Ochrana osobních údajů</Link>
            </p>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-sm leading-6 text-text-muted">
          <p>© Resilium / Allprosys.cz s.r.o. Všechna práva vyhrazena.</p>
          <p className="mt-3 max-w-4xl">
            Informace na webu mají obecný informační charakter. Program Resilium nenahrazuje zdravotní, psychologickou,
            právní ani bezpečnostní službu poskytovanou v individuálním režimu.
          </p>
        </div>
      </div>
    </footer>
  );
}
