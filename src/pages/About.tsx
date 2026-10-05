import { ShieldCheck } from "lucide-react";
import PageIntro from "../components/PageIntro";
import SectionHeading from "../components/SectionHeading";
import { principles } from "../data/learning";

import praveenaPhoto from "../assets/praveena-photo.png";
import giridharPhoto from "../assets/giridhar.png";
import vibhasPhoto from "../assets/vibhas.png";

const directors = [
  {
    name: "Mrs Vidya Praveena Srikailash",
    photo: praveenaPhoto,
  },
  {
    name: "Mr Giridhar Narimetla",
    photo: giridharPhoto,
  },
  {
    name: "Mr Vibhas Chengalavala",
    photo: vibhasPhoto,
  },
];

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
          <h2>
            Universal teachings,
            <br />
            lived through community.
          </h2>
        </div>

        <div className="body-copy">
          <p>
            Śruti CIC is based on the principles of Love, Peace, Truth,
            Right Conduct and Non-violence. The knowledge of the Vedas
            is not restricted to one religion.
          </p>

          <p>
            Śruti shares these learnings through face-to-face classes,
            online classes, music sessions, drama, performing arts and
            selfless service in the community.
          </p>
        </div>
      </section>

      <section className="maxim-band">
        <div>
          <span>Our approach</span>
          <strong>
            Help Ever.
            <br />
            Hurt Never.
          </strong>
        </div>

        <div className="maxim-divider" />

        <div>
          <span>Our spirit</span>
          <strong>
            Love All.
            <br />
            Serve All.
          </strong>
        </div>
      </section>

      <section className="section principles-section">
        <SectionHeading
          eyebrow="Guiding principles"
          title="Values at the heart of Śruti."
        />

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

      <section className="section directors-section">
        <SectionHeading
          eyebrow="Our Directors"
          title="Stewarding Śruti CIC."
        />

        <div className="director-grid">
          {directors.map((director) => (
            <article className="director-card" key={director.name}>
              <div className="director-photo">
                <img src={director.photo} alt={director.name} />
              </div>

              <h3>{director.name}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section about-governance">
        <SectionHeading
          eyebrow="Governance & Safeguarding"
          title="Care, protection and stewardship."
        />

        <article className="safeguarding-card safeguarding-card-wide">
          <div className="governance-icon">
            <ShieldCheck />
          </div>

          <p className="eyebrow eyebrow-light">Safeguarding</p>

          <h2>Protection of children and young people.</h2>

          <p>
            Śruti believes that no child or young person should
            experience abuse or harm and is committed to their
            protection.
          </p>
        </article>
      </section>
    </>
  );
}