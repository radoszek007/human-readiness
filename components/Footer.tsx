import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-dark py-10 text-white">
      <div className="section-shell">
        <div className="grid gap-8 md:grid-cols-[1fr_1fr_1fr]">
          <div>
            <Image
              src="/logo-cele.png"
              alt="Resilium"
              width={210}
              height={54}
              className="h-11 w-auto object-contain"
            />
            <p className="mt-3 max-w-sm leading-7 text-text-muted">Systém připravenosti pro tlak, konflikt a riziko.</p>
          </div>
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-text-secondary">Kontakt</p>
            <p className="mt-3 font-semibold">
              <a href="mailto:info@resilium.cz">info@resilium.cz</a>
            </p>
            <p className="mt-2 font-semibold">
              <a href="https://www.resilium.cz">www.resilium.cz</a>
            </p>
          </div>
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-text-secondary">Firma</p>
            <p className="mt-3 font-semibold">Allprosys.cz s.r.o.</p>
            <p className="mt-6 text-sm leading-6 text-text-muted">© Resilium / Allprosys.cz s.r.o. Všechna práva vyhrazena.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
