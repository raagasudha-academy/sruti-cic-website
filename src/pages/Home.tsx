import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  HeartHandshake,
  MapPin,
  Sparkles,
  Theater,
  UsersRound,
} from "lucide-react";
import AppLink from "../components/AppLink";
import JoinSection from "../components/JoinSection";
import PathCard from "../components/PathCard";
import SectionHeading from "../components/SectionHeading";
import { registrationUrl } from "../data/navigation";
import heroImage from "../assets/hero-community.png";
import hanumanEventImage from "../assets/hanuman-event.png";

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <img src={heroImage} alt="" />
        <div className="hero-shade" />
        <div className="home-hero-copy">
          <p className="eyebrow eyebrow-light">Śruti CIC · Vedas are Universal</p>
          <h1>
            Ancient wisdom.<br />Living values.
          </h1>
          <p>
            Sharing Vedas and Vedanta with children, adults and families through
            learning, chanting, storytelling, music, performing arts and selfless service.
          </p>
          <div className="actions">
            <a className="button button-gold" href={registrationUrl} target="_blank" rel="noreferrer">
              Join a Class / Enquire <ArrowRight size={17} />
            </a>
            <AppLink to="/classes" className="button button-ghost">
              Explore learning
            </AppLink>
          </div>
        </div>
      </section>

      <div className="values-ribbon">
        {["Love", "Peace", "Truth", "Right Conduct", "Non-violence"].map((value) => (
          <span key={value}>{value}</span>
        ))}
      </div>

      <section className="section split-intro">
        <div>
          <p className="eyebrow">Welcome to Śruti</p>
          <h2>Learning that reaches beyond the classroom.</h2>
        </div>
        <div className="body-copy">
          <p>
            Śruti CIC is a UK not-for-profit community interest company whose purpose is
            to take the learnings of Vedas and Vedanta to everyone, especially the next generation.
          </p>
          <p>
            Its work includes face-to-face and online classes, music, drama, performing arts
            and selfless service in the community.
          </p>
          <AppLink to="/about" className="inline-link">
            Discover Śruti <ArrowRight size={16} />
          </AppLink>
        </div>
      </section>

      <section className="section latest-card">
        <div className="latest-image">
          <img src={hanumanEventImage} alt="The Great Hanuman Chalisa event" />
        </div>
        <div className="latest-copy">
          <p className="eyebrow">Latest Event · 24 January 2027</p>
          <h2>The Great Hanuman Chalisa</h2>
          <h3>A Sing-Along Celebration · 108 Children</h3>
          <p>
            A community initiative organised by Raaga Sudha Music Academy and Dharma Sundays
            at Hindu Temple Newcastle.
          </p>
          <div className="event-meta">
            <span><CalendarDays size={17} /> Sunday, 24 January 2027 · 4:00–7:00 pm</span>
            <span><MapPin size={17} /> The Glasshouse International Centre for Music</span>
          </div>
          <div className="actions">
            <AppLink to="/events" className="button button-dark">
              Discover the event <ArrowRight size={17} />
            </AppLink>
            <AppLink to="/lyrics" className="button button-outline">
              Click for Lyrics <BookOpen size={17} />
            </AppLink>
          </div>
        </div>
      </section>

      <section className="section">
        <SectionHeading eyebrow="Ways to take part" title="Learn. Reflect. Create. Serve." />
        <div className="path-grid">
          <PathCard icon={BookOpen} title="Vedic Learning" to="/classes">
            Vedic mantras are taught through repetition by trained teachers, with meanings explained to students.
          </PathCard>
          <PathCard icon={Sparkles} title="Dharma Sundays" to="/community">
            Children learn concepts from Vedas and Vedanta through lively storytelling from the Smruthis.
          </PathCard>
          <PathCard icon={Theater} title="Performing Arts" to="/community">
            Drama, musical productions and pantomimes help children explore values such as integrity, courage, love and truth.
          </PathCard>
          <PathCard icon={HeartHandshake} title="Selfless Service" to="/community">
            Food service, care for elderly people and tree planting form part of Śruti&apos;s community work.
          </PathCard>
        </div>
      </section>

      <section className="section teacher-preview">
        <div className="teacher-preview-copy">
          <p className="eyebrow">Our Teachers</p>
          <h2>Guided by people who make learning personal.</h2>
          <p>
            Meet the teachers who support Vedam and Vedanta learning across Śruti&apos;s
            face-to-face and online sessions.
          </p>
          <AppLink to="/teachers" className="inline-link">
            Meet our teachers <ArrowRight size={16} />
          </AppLink>
        </div>
        <div className="teacher-preview-mark" aria-hidden="true">
          <UsersRound size={54} />
          <span>Learn · Guide · Grow</span>
        </div>
      </section>

      <JoinSection />
    </>
  );
}
