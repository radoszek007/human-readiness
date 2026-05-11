import Image from "next/image";
import { founderPoints } from "@/lib/data";

export default function FounderSection() {
  return (
    <section className="bg-section-light py-20 sm:py-24">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative min-h-[30rem] overflow-hidden rounded-[1.5rem] border border-slate-200 bg-gradient-to-br from-bg to-bg-secondary shadow-soft">
            <Image
              src="/Instructor.png"
              alt="Mgr. Radim Končítek, autor a hlavní instruktor systému Resilium"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover object-center"
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-dark/8 to-transparent" />
            <div className="absolute inset-x-5 bottom-5 rounded-[1.25rem] border border-white/20 bg-panel-dark/78 p-5 text-white backdrop-blur sm:inset-x-8 sm:bottom-8">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-accent-soft">Mgr. Radim Končítek</p>
              <p className="mt-2 text-base font-extrabold leading-6 text-white">autor a hlavní instruktor systému</p>
            </div>
          </div>

          <div>
            <p className="eyebrow mb-4">Odborné vedení</p>
            <h2 className="font-heading text-3xl font-black leading-tight text-dark sm:text-5xl">
              Za systémem Resilium stojí praxe z osobní bezpečnosti, komunikace a výcviku pod tlakem
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              Metodika Resilium propojuje zkušenosti z praktického výcviku osobní bezpečnosti, krizové komunikace, práce s tělem
              a rozhodování v zátěži. Cílem není vytvářet tvrdost pro efekt. Cílem je trénovat stabilitu, orientaci a profesionální
              reakci ve chvíli, kdy situace přestává být pohodlná.
            </p>

            <ul className="mt-7 grid gap-3">
              {founderPoints.map((point) => (
                <li key={point} className="flex gap-3 leading-7 text-slate-700">
                  <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
