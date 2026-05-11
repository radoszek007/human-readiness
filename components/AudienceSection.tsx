import { audiences } from "@/lib/data";

export default function AudienceSection() {
  return (
    <section id="audience" className="bg-bg-secondary py-20 text-white sm:py-24">
      <div className="section-shell">
        <div className="max-w-4xl">
          <p className="eyebrow mb-4">Pro koho</p>
          <h2 className="font-heading text-3xl font-black leading-tight sm:text-5xl">Kde má Resilium největší smysl</h2>
          <p className="mt-6 text-lg leading-8 text-text-primary/90">
            Program je vhodný všude tam, kde lidé pracují pod tlakem, komunikují s náročnými osobami, nesou odpovědnost
            za rozhodnutí nebo mohou být vystaveni konfliktní či rizikové situaci.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {audiences.map((audience) => (
            <article key={audience.title} className="dark-card min-h-56 p-6">
              <h3 className="font-heading text-xl font-extrabold">{audience.title}</h3>
              <p className="mt-4 leading-7 text-text-muted">{audience.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
