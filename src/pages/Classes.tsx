import { ExternalLink } from "lucide-react";
import PageIntro from "../components/PageIntro";
import ScheduleCards from "../components/ScheduleCards";
import { adultSessions, childSessions } from "../data/learning";
import { registrationUrl } from "../data/navigation";

export default function Classes() {
  return (
    <>
      <PageIntro
        eyebrow="Classes"
        title="Find a class."
        copy="Weekly online and face-to-face learning for adults, children and families."
      />

      <section className="section class-learning">
        <div className="class-learning-intro">
          <p className="eyebrow">How learning works</p>
          <h2>Chant. Understand. Live.</h2>
          <p>
            Vedic mantras are taught by trained teachers through repetition. Meanings of the scriptures
            are explained so that students can understand the values within them.
          </p>
        </div>
        <div className="class-learning-steps">
          <article>
            <span>01</span>
            <div><h3>Listen & repeat</h3><p>Learn Vedic mantras through guided repetition in face-to-face or online sessions.</p></div>
          </article>
          <article>
            <span>02</span>
            <div><h3>Understand</h3><p>Explore the meaning of the scriptures alongside the learning of the mantras.</p></div>
          </article>
          <article>
            <span>03</span>
            <div><h3>Bring values to life</h3><p>Connect learning with Love, Peace, Truth, Right Conduct and Non-violence.</p></div>
          </article>
        </div>
      </section>

      <section className="section classes-section">
        <div className="class-heading">
          <div>
            <p className="eyebrow">Weekly sessions</p>
            <h2>Adult & family classes</h2>
          </div>
          <a className="button button-dark" href={registrationUrl} target="_blank" rel="noreferrer">
            Register / Enquire <ExternalLink size={16} />
          </a>
        </div>
        <ScheduleCards sessions={adultSessions} />

        <div className="class-heading children-heading">
          <div>
            <p className="eyebrow">Children&apos;s learning</p>
            <h2>Children&apos;s Vedam Classes</h2>
            <p><strong>40+ children</strong> learning Vedam online across five weekly groups.</p>
          </div>
        </div>
        <ScheduleCards sessions={childSessions} />
        <p className="class-note">
          “Registered only” sessions are for existing registered participants and are not open drop-in sessions.
        </p>
      </section>
    </>
  );
}
