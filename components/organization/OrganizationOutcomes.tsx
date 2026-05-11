const outcomes = [
  "společný jazyk pro reakci pod tlakem",
  "praktický postup pro konfliktní situace",
  "větší jistotu lidí v kontaktu s náročnými osobami",
  "lepší týmovou koordinaci při eskalaci",
  "doporučení pro další rozvoj připravenosti"
];

export default function OrganizationOutcomes() {
  return (
    <section className="bg-section-light py-16 sm:py-20">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="eyebrow mb-4">Co organizace získá</p>
            <h2 className="font-heading text-3xl font-black leading-tight text-dark sm:text-4xl">
              Sdílený postup, který lidé dokážou použít v zátěži
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {outcomes.map((outcome, index) => (
              <article key={outcome} className={`light-card p-5 ${index === 4 ? "sm:col-span-2" : ""}`}>
                <span className="text-sm font-black text-accent">{String(index + 1).padStart(2, "0")}</span>
                <p className="mt-3 text-lg font-extrabold leading-7 text-dark">{outcome}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
