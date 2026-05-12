import { faqs } from "@/lib/data";

export default function FAQSection() {
  return (
    <section id="faq" className="bg-section-light pb-20 sm:pb-24">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="eyebrow mb-4">FAQ</p>
          <h2 className="font-heading text-3xl font-bold leading-tight text-dark sm:text-5xl">Časté otázky</h2>
        </div>

        <div className="mt-10 grid gap-4">
          {faqs.map((faq) => (
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
  );
}
