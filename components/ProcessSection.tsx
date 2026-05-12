import { processSteps } from "@/lib/data";

export default function ProcessSection() {
  return (
    <section id="process" className="bg-section-light py-20 sm:py-24">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow mb-4">Průběh</p>
            <h2 className="font-heading text-3xl font-bold leading-tight text-dark sm:text-5xl">
              Od diagnostiky k praktickému tréninku
            </h2>
          </div>
          <p className="text-lg leading-8 text-slate-700">
            Každá organizace má jiný typ tlaku. Proto nezačínáme univerzální prezentací, ale krátkým ověřením reality klienta.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <article key={step.title} className="relative rounded-[1.25rem] border border-slate-200 bg-white p-6 shadow-soft">
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="font-heading text-xl font-bold text-dark">{step.title}</h3>
              <p className="mt-4 leading-7 text-slate-700">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
