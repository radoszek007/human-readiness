export default function SectionHeading({
  eyebrow,
  title,
  text,
  light = false
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-[22rem] sm:max-w-4xl">
      {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
      <h2 className={`font-heading text-3xl font-bold leading-tight sm:text-5xl ${light ? "text-white" : "text-dark"}`}>
        {title}
      </h2>
      {text ? <p className={`mt-6 text-lg leading-8 ${light ? "text-text-primary/90" : "text-slate-700"}`}>{text}</p> : null}
    </div>
  );
}
