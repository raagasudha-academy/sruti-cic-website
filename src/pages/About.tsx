import { Phone, ShieldCheck } from "lucide-react";
import PageIntro from "../components/PageIntro";
import SectionHeading from "../components/SectionHeading";
import { principles } from "../data/learning";

import AppLink from "../components/AppLink";

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

      <section className="section directors-overview">
        <SectionHeading eyebrow="Our Directors" title="Meet the people guiding Śruti." />
        <p>Learn about the people working to preserve and share Vedic knowledge for future generations.</p>
        <AppLink to="/directors" className="directors-page-link">Meet Our Directors →</AppLink>
      </section>

      <section className="section about-contact" aria-label="Contact Śruti">
        <SectionHeading
          eyebrow="Contact us"
          title="Get in touch with Śruti."
        />
        <p className="about-contact-intro" >
          For questions about Śruti, our classes or community activities, email us at{" "}
          <a href="mailto:sruticic@gmail.com">sruticic@gmail.com</a> or call:
        </p>
        <div className="about-contact-grid">
          <article className="about-contact-card">
            <Phone size={22} aria-hidden="true" />
            <h3>Mr Srikailash Venkitadri</h3>
            <a href="tel:+447841354590">07841 354590</a>
          </article>
          <article className="about-contact-card">
            <Phone size={22} aria-hidden="true" />
            <h3>Mrs Praveena Srikailash</h3>
            <a href="tel:+447702785815">07702 785815</a>
          </article>
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