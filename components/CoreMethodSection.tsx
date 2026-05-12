import { coreSteps } from "@/lib/data";

export default function CoreMethodSection() {
  return (
    <section className="bg-section-light py-20 sm:py-24">
      <div className="section-shell">
        <div className="max-w-4xl">
          <p className="eyebrow mb-4">C.O.R.E.</p>
          <h2 className="font-heading text-3xl font-bold leading-tight text-dark sm:text-5xl">
            Jednoduchý postup pro složité situace
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-700">
            Základem tréninku je rozhodovací rámec C.O.R.E., který pomáhá udržet strukturu ve chvíli, kdy se situace začíná zrychlovat.
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-4">
          {coreSteps.map((step) => (
            <article key={step.letter} className="relative overflow-hidden rounded-[1.25rem] border border-slate-200 bg-white p-6 shadow-soft">
              <div className="absolute right-4 top-2 font-body text-8xl font-bold leading-none text-bg/10">{step.letter}</div>
              <div className="relative">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-bg text-2xl font-bold text-white">
                  {step.letter}
                </span>
                <h3 className="mt-5 font-heading text-2xl font-bold text-dark">{step.label}</h3>
                <p className="mt-4 leading-7 text-slate-700">{step.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-[1.25rem] border border-border/40 bg-bg px-6 py-5 text-white shadow-soft">
          <p className="text-lg leading-8">
            C.O.R.E. není teorie do prezentace. Je to postup, který se opakovaně trénuje v modelových situacích, aby byl použitelný i pod tlakem.
          </p>
        </div>
      </div>
    </section>
  );
}
