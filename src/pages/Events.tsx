import {
  BookOpen,
  CalendarDays,
  ExternalLink,
  MapPin,
} from "lucide-react";

import PageIntro from "../components/PageIntro";
import AppLink from "../components/AppLink";
import {
  hanumanFaqUrl,
  hanumanSessionSlotsUrl,
} from "../data/navigation";
import hanumanEventImage from "../assets/hanuman-event.png";

export default function Events() {
  return (
    <>
      <PageIntro
        eyebrow="Latest Events"
        title="Gather. Sing. Celebrate."
        copy="Community gatherings and initiatives bringing learning, devotion, music and togetherness into shared experience."
        accent
      />

      <section className="section event-feature">
        <div className="event-feature-image">
          <img
            src={hanumanEventImage}
            alt="The Great Hanuman Chalisa event artwork"
          />
        </div>

        <div className="event-feature-copy">
          <div className="event-labels">
            <span>Featured Event</span>
            <span>24 January 2027</span>
          </div>

          <h2>The Great Hanuman Chalisa</h2>
          <h3>Sing-Along Celebration · 108 Children</h3>

          <p className="lead">
            Join us for an evening of devotion, music and togetherness as 108
            children come together to sing the divine glory of Lord Hanuman.
          </p>

          <div className="event-detail-list">
            <div>
              <CalendarDays />
              <span>
                <strong>Sunday, 24 January 2027</strong>
                <small>4:00–7:00 pm</small>
              </span>
            </div>

            <div>
              <MapPin />
              <span>
                <strong>
                  The Glasshouse International Centre for Music
                </strong>
                <small>
                  St Mary&apos;s Square, Gateshead Quays, Gateshead, NE8 2JR
                </small>
              </span>
            </div>
          </div>

          <div className="actions">
            <AppLink
              to="/lyrics"
              className="button button-dark"
            >
              Click for Lyrics <BookOpen size={16} />
            </AppLink>

            <a
              className="button button-outline"
              href={hanumanFaqUrl}
              target="_blank"
              rel="noreferrer"
            >
              Event FAQs <ExternalLink size={16} />
            </a>

            <a
              className="button button-outline"
              href={hanumanSessionSlotsUrl}
              target="_blank"
              rel="noreferrer"
            >
              Practice Sessions <ExternalLink size={16} />
            </a>
          </div>

          <div className="organisers">
            <p>
              A community initiative organised by{" "}
              <strong>Raaga Sudha Music Academy</strong> and
              <strong> Dharma Sundays at Hindu Temple Newcastle</strong>.
            </p>

            <span>In association with</span>

            <p>
              Śruti School of Veda and Vedanta · Middlesbrough Hindu Mandir ·
              Hindu Swayamsevak Sangh UK (HSS UK)
            </p>
          </div>
        </div>
      </section>
    </>
  );
}