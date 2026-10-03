import { ShieldCheck } from "lucide-react";
import PageIntro from "../components/PageIntro";
import SectionHeading from "../components/SectionHeading";
import { principles } from "../data/learning";

export default function About() {
  return (
    <>
      <PageIntro
        eyebrow="About Śruti"
        title="Vedas are Universal."
        copy="A UK not-for-profit community interest company sharing the learnings of Vedas and Vedanta, especially with the next generation."
      />

      <section className="section about-purpose">
        <div className="section-number">01</div>
        <div>
          <p className="eyebrow">Our purpose</p>
          <h2>Universal teachings,<br />lived through community.</h2>
        </div>
        <div className="body-copy">
          <p>
            Śruti CIC is based on the principles of Love, Peace, Truth, Right Conduct and Non-violence.
            The knowledge of the Vedas is not restricted to one religion.
          </p>
          <p>
            Śruti shares these learnings through face-to-face classes, online classes, music sessions,
            drama, performing arts and selfless service in the community.
          </p>
        </div>
      </section>

      <section className="maxim-band">
        <div><span>Our approach</span><strong>Help Ever.<br />Hurt Never.</strong></div>
        <div className="maxim-divider" />
        <div><span>Our spirit</span><strong>Love All.<br />Serve All.</strong></div>
      </section>

      <section className="section principles-section">
        <SectionHeading eyebrow="Guiding principles" title="Values at the heart of Śruti." />
        <div className="principles">
          {principles.map(([title, copy], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section about-governance">
        <SectionHeading eyebrow="Governance & Safeguarding" title="Care, protection and stewardship." />
        <div className="governance-layout">
          <article className="safeguarding-card">
            <div className="governance-icon"><ShieldCheck /></div>
            <p className="eyebrow eyebrow-light">Safeguarding</p>
            <h2>Protection of children and young people.</h2>
            <p>
              Śruti believes that no child or young person should experience abuse or harm
              and is committed to their protection.
            </p>
          </article>

          <article className="directors-panel">
            <p className="eyebrow">Our Directors</p>
            <h2>Stewarding Śruti CIC</h2>
            <div className="director-list">
              <div><span>01</span><strong>Mrs Vidya Praveena Srikailash</strong></div>
              <div><span>02</span><strong>Mr Giridhar Narimetla</strong></div>
              <div><span>03</span><strong>Mr Vibhas Chengalavala</strong></div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
