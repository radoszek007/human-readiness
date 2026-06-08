import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SectionHeading from "@/components/SectionHeading";
import { getAnalyticsSummary, isAnalyticsDashboardAuthorized, type MetricRow } from "@/lib/analytics";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Analytika návštěvnosti | Resilium",
  robots: {
    index: false,
    follow: false
  }
};

export default async function AnalyticsPage({
  searchParams
}: {
  searchParams?: Promise<{ token?: string; days?: string }>;
}) {
  const params = await searchParams;
  const token = params?.token;
  const days = Number(params?.days ?? 30);
  const windowDays = Number.isFinite(days) && days > 0 && days <= 365 ? days : 30;

  if (!isAnalyticsDashboardAuthorized(token)) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-section-light pt-36">
          <section className="section-shell pb-20">
            <div className="light-card max-w-2xl p-8">
              <p className="eyebrow mb-4">Analytika</p>
              <h1 className="font-heading text-3xl font-bold text-dark">Přístup vyžaduje token</h1>
              <p className="mt-4 leading-7 text-slate-700">
                Dashboard je chráněný proměnnou <code>ANALYTICS_DASHBOARD_TOKEN</code>. Otevřete ho s platným tokenem v URL.
              </p>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  const summary = await getAnalyticsSummary(windowDays);

  return (
    <>
      <Header />
      <main className="bg-section-light">
        <section className="relative overflow-hidden bg-bg pt-36 text-white sm:pt-40 lg:pt-44">
          <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:72px_72px]" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-section-light to-transparent" />
          <div className="section-shell relative pb-16 sm:pb-20">
            <p className="eyebrow mb-5">Web analytics</p>
            <h1 className="max-w-5xl font-heading text-4xl font-bold leading-[1.04] text-white sm:text-6xl lg:text-7xl">
              Analytika návštěvnosti
            </h1>
            <p className="mt-6 max-w-4xl text-lg leading-8 text-text-muted sm:text-xl">
              Vlastní anonymní měření návštěv, času na stránce, scrollu, CTA kliknutí a konverzí bez heatmap.
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="section-shell">
            <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-accent">Období</p>
                <p className="mt-1 text-slate-700">Posledních {summary.windowDays} dní</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {[7, 30, 90].map((value) => (
                  <Link
                    key={value}
                    href={`/analytics?days=${value}${token ? `&token=${token}` : ""}`}
                    className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                      summary.windowDays === value ? "bg-accent text-white" : "bg-white text-dark hover:bg-slate-100"
                    }`}
                  >
                    {value} dní
                  </Link>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <StatCard label="Zobrazení" value={summary.totals.pageviews} />
              <StatCard label="Návštěvy" value={summary.totals.visits} />
              <StatCard label="Návštěvníci" value={summary.totals.visitors} />
              <StatCard label="Průměrný čas" value={formatDuration(summary.totals.avgTimeOnPageMs)} />
              <StatCard label="CTA kliky" value={summary.totals.ctaClicks} />
              <StatCard label="Formuláře" value={summary.totals.formSubmits} />
              <StatCard label="Konverze" value={`${summary.totals.conversionRate} %`} />
              <StatCard label="Bounce rate" value={`${summary.totals.bounceRate} %`} />
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <MetricPanel title="Denní návštěvnost" rows={summary.daily} emptyText="Zatím nejsou zaznamenaná zobrazení." />
              <MetricPanel title="Nejnavštěvovanější stránky" rows={summary.topPages} emptyText="Zatím nejsou zaznamenané stránky." />
              <MetricPanel
                title="Nejdelší pozornost"
                rows={summary.longestPages}
                emptyText="Zatím nejsou zaznamenané heartbeat nebo exit eventy."
                formatValue={formatDuration}
              />
              <MetricPanel
                title="Scroll depth podle stránek"
                rows={summary.scrollDepthByPage}
                emptyText="Zatím nejsou zaznamenané scroll milníky."
                formatValue={(value) => `${value} %`}
              />
              <MetricPanel title="CTA kliknutí" rows={summary.topCtas} emptyText="Zatím nejsou zaznamenaná důležitá CTA." />
              <MetricPanel title="Kliky a akce" rows={summary.topEvents} emptyText="Zatím nejsou zaznamenané kliky ani formuláře." />
              <MetricPanel title="Zdroje návštěv" rows={summary.topReferrers} emptyText="Zatím nejsou zaznamenané zdroje." />
              <MetricPanel title="Zařízení" rows={summary.devices} emptyText="Zatím nejsou zaznamenaná zařízení." />
              <MetricPanel title="Vstupní stránky" rows={summary.entryPages} emptyText="Zatím nejsou zaznamenané vstupy." />
              <MetricPanel title="Výstupní stránky" rows={summary.exitPages} emptyText="Zatím nejsou zaznamenané výstupy." />
              <div className="light-card p-6 lg:col-span-2">
                <SectionHeading eyebrow="Poslední události" title="Aktuální aktivita" />
                <div className="mt-6 grid gap-3 md:grid-cols-2">
                  {summary.recentEvents.length ? (
                    summary.recentEvents.map((event) => (
                      <div key={event.id} className="rounded-2xl border border-slate-200 bg-white p-4">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <p className="text-sm font-bold uppercase tracking-[0.12em] text-accent">{event.event}</p>
                          <p className="text-xs font-semibold text-slate-500">{new Date(event.timestamp).toLocaleString("cs-CZ")}</p>
                        </div>
                        <p className="mt-2 break-words font-semibold text-dark">{event.label || event.ctaType || event.path}</p>
                        <p className="mt-1 break-words text-sm text-slate-600">
                          {event.path}
                          {typeof event.durationMs === "number" ? ` | ${formatDuration(event.durationMs)}` : ""}
                          {typeof event.scrollDepth === "number" ? ` | ${event.scrollDepth} % scroll` : ""}
                        </p>
                      </div>
                    ))
                  ) : (
                    <p className="leading-7 text-slate-700">Zatím nejsou zaznamenané žádné události.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function StatCard({ label, value }: { label: string; value: number | string }) {
  return (
    <article className="light-card p-5">
      <p className="text-sm font-bold uppercase tracking-[0.14em] text-slate-500">{label}</p>
      <p className="mt-3 font-heading text-4xl font-bold text-dark">{typeof value === "number" ? value.toLocaleString("cs-CZ") : value}</p>
    </article>
  );
}

function MetricPanel({
  title,
  rows,
  emptyText,
  formatValue = (value) => value.toLocaleString("cs-CZ")
}: {
  title: string;
  rows: MetricRow[];
  emptyText: string;
  formatValue?: (value: number) => string;
}) {
  const maxValue = Math.max(...rows.map((row) => row.value), 1);

  return (
    <article className="light-card p-6">
      <h2 className="font-heading text-2xl font-bold text-dark">{title}</h2>
      <div className="mt-6 grid gap-4">
        {rows.length ? (
          rows.map((row) => (
            <div key={row.label}>
              <div className="mb-2 flex items-center justify-between gap-4 text-sm">
                <span className="break-all font-semibold text-dark">{row.label}</span>
                <span className="whitespace-nowrap font-bold text-accent">{formatValue(row.value)}</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                <div className="h-full rounded-full bg-accent" style={{ width: `${Math.max((row.value / maxValue) * 100, 6)}%` }} />
              </div>
            </div>
          ))
        ) : (
          <p className="leading-7 text-slate-700">{emptyText}</p>
        )}
      </div>
    </article>
  );
}

function formatDuration(durationMs: number) {
  const totalSeconds = Math.round(durationMs / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  if (minutes <= 0) {
    return `${seconds} s`;
  }

  return `${minutes} min ${seconds.toString().padStart(2, "0")} s`;
}
