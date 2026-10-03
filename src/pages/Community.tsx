import { HeartHandshake, MapPin, Theater, Trees } from "lucide-react";
import PageIntro from "../components/PageIntro";

export default function Community() {
  return (
    <>
      <PageIntro
        eyebrow="Learning Beyond the Classroom"
        title="Dharma Sundays"
        copy="Bringing children and families together through learning, creativity and selfless service."
        accent
      />

      <section className="section dharma-section">
        <div className="dharma-main">
          <p className="eyebrow">Dharma Sundays</p>
          <h2>Stories that bring values to life.</h2>
          <p>
            Children learn concepts from Vedas and Vedanta through in-depth, lively storytelling from the Smruthis.
          </p>
          <div className="dharma-stats">
            <div><strong>60+</strong><span>participants</span></div>
            <div><strong>Sunday</strong><span>11:30–13:00</span></div>
          </div>
        </div>
        <aside className="location-card">
          <MapPin />
          <span>Face-to-Face</span>
          <h3>Hindu Temple Newcastle</h3>
          <p>172 West Rd,<br />Newcastle upon Tyne<br />NE4 9QB</p>
          <small>Children & Parents</small>
        </aside>
      </section>

      <section className="section community-paths">
        <div className="community-panel">
          <Theater />
          <p className="eyebrow">Performing Arts</p>
          <h2>Values explored creatively.</h2>
          <p>
            Śruti plans dramas, musical productions and pantomimes with children and adults,
            drawing on characters who stood for integrity, courage, love and truth.
          </p>
        </div>
        <div className="community-panel community-panel-warm">
          <HeartHandshake />
          <p className="eyebrow">Selfless Service</p>
          <h2>Learning through service.</h2>
          <p>
            Serving food, caring for elderly people in the community and tree planting are important parts of Śruti&apos;s work.
          </p>
        </div>
      </section>

      <section className="service-feature">
        <div className="service-copy">
          <p className="eyebrow eyebrow-light">Community Service · 18 April 2026</p>
          <Trees size={34} />
          <h2>Tree planting in Jarrow, South Shields.</h2>
          <p>
            Students and family members joined Sri Sathya Sai Organisation CIO, with support from Living Woods Trust,
            for a day of tree planting.
          </p>
        </div>
        <div className="service-numbers">
          <div><strong>652</strong><span>Trees planted</span></div>
          <div><strong>45</strong><span>Participants</span></div>
          <div><strong>10</strong><span>Children</span></div>
        </div>
      </section>
    </>
  );
}
