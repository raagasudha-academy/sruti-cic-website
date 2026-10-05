type PageIntroProps = {
  eyebrow: string;
  title: string;
  copy?: string;
  accent?: boolean;
};

export default function PageIntro({ eyebrow, title, copy, accent = false }: PageIntroProps) {
  return (
    <section className={`page-intro ${accent ? "page-intro-accent" : ""}`}>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {copy && <p className="page-intro-copy">{copy}</p>}
      </div>
    </section>
  );
}
