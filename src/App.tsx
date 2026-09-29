import { useEffect, useState, type ReactNode } from "react";
import {
  type LucideIcon,
  ArrowRight,
  BookOpen,
  CalendarDays,
  ChevronRight,
  ExternalLink,
  HeartHandshake,
  Leaf,
  MapPin,
  Menu,
  Music2,
  ShieldCheck,
  Sparkles,
  Theater,
  Trees,
  UsersRound,
  X,
} from "lucide-react";
import "./styles.css";

import srutiLogo from "./assets/sruti-logo.png";
import heroImage from "./assets/hero-community.png";
import hanumanEventImage from "./assets/hanuman-event.png";

const registrationUrl = "https://forms.gle/jQNqhpzxRc2yqnE79";
const hanumanRegistrationUrl = "https://forms.gle/c7pAa1Pei337EoUn7";
const hanumanFaqUrl =
  "https://docs.google.com/document/d/1jvk4v-AghOjc-w7-Ofqtb8rVDKetKx_gKnpkW9CY4SM/edit?usp=sharing";

const navItems = [
  ["Home", "/"],
  ["Latest Events", "/events"],
  ["About", "/about"],
  ["Learn", "/learn"],
  ["Classes", "/classes"],
  ["Community", "/community"],
  ["Governance", "/governance"],
];

const principles = [
  ["Love", "Care for one another with compassion."],
  ["Peace", "Nurture calmness, understanding and harmony."],
  ["Truth", "Value sincerity and truthfulness."],
  ["Right conduct", "Put good values into everyday action."],
  ["Non-violence", "Respect others through thought, word and action."],
];

const adultSessions = [
  {
    name: "Vedam & Vedanta Classes",
    type: "Online",
    day: "Thursday",
    time: "20:30–22:00",
    age: "Adults",
    location: "UK · USA · Ireland · India",
  },
  {
    name: "Vedam Classes",
    type: "Online",
    day: "Friday",
    time: "11:30–12:30",
    age: "Adults",
    location: "Mysore, Karnataka, India",
    restricted: true,
  },
  {
    name: "Vedam Classes",
    type: "Face-to-Face",
    day: "Saturday",
    time: "15:30–16:30",
    age: "Children & Adults",
    location: "St. Aidans Community Centre, Princes Rd, Newcastle upon Tyne NE3 5TT",
  },
  {
    name: "Dharma Sundays",
    type: "Face-to-Face",
    day: "Sunday",
    time: "11:30–13:00",
    age: "Children & Parents",
    location: "Hindu Temple Newcastle, 172 West Rd, Newcastle upon Tyne NE4 9QB",
    stat: "60+ participants",
  },
];

const childSessions = [
  ["Children Group 1", "Thursday", "19:30–20:30"],
  ["Children Group 2", "Friday", "20:00–21:00"],
  ["Children Group 3", "Wednesday", "20:00–21:00"],
  ["Children Group 4", "Monday", "18:00–19:00"],
  ["Children Group 5", "Wednesday", "17:00–18:00"],
].map(([name, day, time]) => ({
  name,
  type: "Online",
  day,
  time,
  age: "Children",
  location: "Online",
  restricted: true,
}));

const currentPath = () => {
  const path = window.location.hash.replace(/^#/, "") || "/";
  return path.startsWith("/") ? path : `/${path}`;
};

type AppLinkProps = {
  to: string;
  className?: string;
  children: ReactNode;
  "aria-label"?: string;
};

type HeaderProps = {
  path: string;
};

type PageIntroProps = {
  eyebrow: string;
  title: string;
  copy?: string;
  accent?: boolean;
};

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
};

type PathCardProps = {
  icon: LucideIcon;
  title: string;
  to: string;
  children: ReactNode;
};

type LearningStepProps = {
  number: string;
  title: string;
  icon: LucideIcon;
  children: ReactNode;
};

type Session = {
  name: string;
  type: string;
  day: string;
  time: string;
  age: string;
  location: string;
  restricted?: boolean;
  stat?: string;
};

type ScheduleCardsProps = {
  sessions: Session[];
};

type RouterProps = {
  path: string;
};

function AppLink({ to, className = "", children, ...props }: AppLinkProps) {
  return <a className={className} href={`#${to}`} {...props}>{children}</a>;
}

function Header({ path }: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <AppLink to="/" className="brand" aria-label="Śruti CIC home">
        <img src={srutiLogo} alt="Śruti School of Veda and Vedanta" />
        <div className="brand-copy">
          <strong>Śruti</strong>
          <span>CIC</span>
        </div>
      </AppLink>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map(([label, href]) => (
          <AppLink key={href} to={href} className={path === href ? "active" : ""}>
            {label}
          </AppLink>
        ))}
      </nav>

      <a className="header-cta" href={registrationUrl} target="_blank" rel="noreferrer">
        Register / Enquire
      </a>

      <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle menu">
        {open ? <X /> : <Menu />}
      </button>

      {open && (
        <nav className="mobile-nav">
          {navItems.map(([label, href]) => (
            <AppLink key={href} to={href} className={path === href ? "active" : ""}>
              <span onClick={() => setOpen(false)}>{label}</span>
            </AppLink>
          ))}
          <a href={registrationUrl} target="_blank" rel="noreferrer">Register / Enquire</a>
        </nav>
      )}
    </header>
  );
}

function PageIntro({ eyebrow, title, copy, accent = false }: PageIntroProps) {
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

function Home() {
  return (
    <>
      <section className="home-hero">
        <img src={heroImage} alt="" />
        <div className="hero-shade" />
        <div className="home-hero-copy">
          <p className="eyebrow eyebrow-light">Śruti CIC · Vedas are Universal</p>
          <h1>Ancient wisdom.<br />Living values.</h1>
          <p>
            Sharing Vedas and Vedanta with children, adults and families through
            learning, chanting, storytelling, music, performing arts and selfless service.
          </p>
          <div className="actions">
            <a className="button button-gold" href={registrationUrl} target="_blank" rel="noreferrer">
              Join a Class / Enquire <ArrowRight size={17} />
            </a>
            <AppLink to="/learn" className="button button-ghost">Explore learning</AppLink>
          </div>
        </div>
      </section>

      <div className="values-ribbon">
        {["Love", "Peace", "Truth", "Right conduct", "Non-violence"].map((value) => (
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
          <AppLink to="/about" className="inline-link">Discover Śruti <ArrowRight size={16} /></AppLink>
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
          <AppLink to="/events" className="button button-dark">
            Discover the event <ArrowRight size={17} />
          </AppLink>
        </div>
      </section>

      <section className="section">
        <SectionHeading eyebrow="Ways to take part" title="Learn. Reflect. Create. Serve." />
        <div className="path-grid">
          <PathCard icon={BookOpen} title="Vedic Learning" to="/learn">
            Vedic mantras are taught through repetition by trained teachers, with meanings explained to students.
          </PathCard>
          <PathCard icon={Sparkles} title="Dharma Sundays" to="/community">
            Children learn concepts from Vedas and Vedanta through lively storytelling from the Smruthis.
          </PathCard>
          <PathCard icon={Theater} title="Performing Arts" to="/community">
            Drama, musical productions and pantomimes help children explore values such as integrity, courage, love and truth.
          </PathCard>
          <PathCard icon={HeartHandshake} title="Selfless Service" to="/community">
            Food service, care for elderly people and tree planting form part of Śruti's community work.
          </PathCard>
        </div>
      </section>

      <JoinSection />
    </>
  );
}

function Events() {
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
          <img src={hanumanEventImage} alt="The Great Hanuman Chalisa event artwork" />
        </div>
        <div className="event-feature-copy">
          <div className="event-labels">
            <span>Featured Event</span>
            <span>24 January 2027</span>
          </div>
          <h2>The Great Hanuman Chalisa</h2>
          <h3>Sing-Along Celebration · 108 Children</h3>
          <p className="lead">
            Join us for an evening of devotion, music and togetherness as 108 children
            come together to sing the divine glory of Lord Hanuman.
          </p>

          <div className="event-detail-list">
            <div><CalendarDays /><span><strong>Sunday, 24 January 2027</strong><small>4:00–7:00 pm</small></span></div>
            <div><MapPin /><span><strong>The Glasshouse International Centre for Music</strong><small>St Mary's Square, Gateshead Quays, Gateshead, NE8 2JR</small></span></div>
          </div>

          <div className="actions">
            <a className="button button-dark" href={hanumanRegistrationUrl} target="_blank" rel="noreferrer">
              Register for Event <ExternalLink size={16} />
            </a>
            <a className="button button-outline" href={hanumanFaqUrl} target="_blank" rel="noreferrer">
              Event FAQs <ExternalLink size={16} />
            </a>
          </div>

          <div className="organisers">
            <p>
              A community initiative organised by <strong>Raaga Sudha Music Academy</strong> and
              <strong> Dharma Sundays at Hindu Temple Newcastle</strong>.
            </p>
            <span>In association with</span>
            <p>Sruti School of Veda and Vedanta · Middlesbrough Hindu Mandir · Hindu Swayamsevak Sangh UK (HSS UK)</p>
          </div>
        </div>

      </section>
    </>
  );
}

function About() {
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
            Śruti CIC is based on the principles of Love, Peace, Truth, Right conduct and Non-violence.
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
    </>
  );
}

function Learn() {
  return (
    <>
      <PageIntro
        eyebrow="Learn"
        title="Learning Vedas & Vedanta"
        copy="Learning through repetition, understanding and values — in person and online."
      />

      <section className="section learn-story">
        <div className="learn-intro">
          <p className="eyebrow">How learning works</p>
          <h2>Chant. Understand. Live.</h2>
          <p>
            Vedic mantras are taught by trained teachers through repetition. Meanings of the scriptures
            are explained so that students can understand the values within them.
          </p>
        </div>
        <div className="learning-steps">
          <LearningStep number="01" title="Listen & repeat" icon={Music2}>
            Learn Vedic mantras through guided repetition in face-to-face or online sessions.
          </LearningStep>
          <LearningStep number="02" title="Understand" icon={BookOpen}>
            Explore the meaning of the scriptures alongside the learning of the mantras.
          </LearningStep>
          <LearningStep number="03" title="Bring values to life" icon={HeartHandshake}>
            Connect learning with Love, Peace, Truth, Right conduct and Non-violence.
          </LearningStep>
        </div>
      </section>

      <section className="learn-beyond">
        <div>
          <p className="eyebrow eyebrow-light">Beyond chanting</p>
          <h2>Learning can take many forms.</h2>
        </div>
        <div className="beyond-list">
          <span><Sparkles /> Storytelling</span>
          <span><Music2 /> Music</span>
          <span><Theater /> Drama & performing arts</span>
          <span><HeartHandshake /> Selfless service</span>
        </div>
      </section>

      <JoinSection />
    </>
  );
}

function Classes() {
  return (
    <>
      <PageIntro
        eyebrow="Classes"
        title="Find a class."
        copy="Weekly online and face-to-face learning for adults, children and families."
      />

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
            <p className="eyebrow">Children's learning</p>
            <h2>Children's Vedam Classes</h2>
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

function Community() {
  return (
    <>
      <PageIntro
        eyebrow="Community"
        title="Learn together. Serve together."
        copy="Dharma Sundays, performing arts and selfless service extend learning beyond formal classes."
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
            Serving food, caring for elderly people in the community and tree planting are important parts of Śruti's work.
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

function Governance() {
  return (
    <>
      <PageIntro
        eyebrow="Governance"
        title="Care, protection and stewardship."
        copy="Śruti is committed to the protection of children and young people."
      />

      <section className="section governance-layout">
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
            <div><span>02</span><strong>Mr Vibhas Chengalavala</strong></div>
            <div><span>03</span><strong>Mr Giridhar Narimetla</strong></div>
          </div>
        </article>
      </section>
    </>
  );
}

function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}

function PathCard({ icon: Icon, title, to, children }: PathCardProps) {
  return (
    <AppLink to={to} className="path-card">
      <Icon size={22} />
      <h3>{title}</h3>
      <p>{children}</p>
      <span>Explore <ChevronRight size={15} /></span>
    </AppLink>
  );
}

function LearningStep({ number, title, icon: Icon, children }: LearningStepProps) {
  return (
    <article>
      <span className="step-number">{number}</span>
      <div className="step-icon"><Icon /></div>
      <div>
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
    </article>
  );
}

function ScheduleCards({ sessions }: ScheduleCardsProps) {
  return (
    <div className="schedule-list">
      {sessions.map((session) => (
        <article className="schedule-row" key={`${session.name}-${session.day}`}>
          <div className="schedule-name">
            <h3>{session.name}</h3>
            <div className="badges">
              <span>{session.type}</span>
              {session.restricted && <span className="badge-muted">Registered only</span>}
              {session.stat && <span className="badge-stat">{session.stat}</span>}
            </div>
          </div>
          <div><small>Day</small><strong>{session.day}</strong></div>
          <div><small>Time</small><strong>{session.time}</strong></div>
          <div><small>Age group</small><strong>{session.age}</strong></div>
          <div className="schedule-location"><small>Location</small><strong>{session.location}</strong></div>
        </article>
      ))}
    </div>
  );
}

function JoinSection() {
  return (
    <section className="join-section">
      <div>
        <p className="eyebrow eyebrow-light">Learn with Śruti</p>
        <h2>Interested in joining a class?</h2>
        <p>Use the registration form to register or enquire about Śruti sessions.</p>
      </div>
      <a className="button button-gold" href={registrationUrl} target="_blank" rel="noreferrer">
        Register / Enquire <ExternalLink size={16} />
      </a>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-identity">
          <img src={srutiLogo} alt="Śruti School of Veda and Vedanta" />
          <div>
            <h3>Śruti CIC</h3>
            <p>Vedas are Universal</p>
          </div>
        </div>

        <div className="footer-maxims">
          <strong>Help Ever. Hurt Never.</strong>
          <strong>Love All. Serve All.</strong>
        </div>

        <div className="footer-links">
          <span>Explore</span>
          {navItems.slice(1).map(([label, href]) => (
            <AppLink key={href} to={href}>{label}</AppLink>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <span>Śruti CIC</span>
        <span>UK not-for-profit community interest company</span>
      </div>
    </footer>
  );
}

function Router({ path }: RouterProps) {
  switch (path) {
    case "/events": return <Events />;
    case "/about": return <About />;
    case "/learn": return <Learn />;
    case "/classes": return <Classes />;
    case "/community": return <Community />;
    case "/governance": return <Governance />;
    default: return <Home />;
  }
}

export default function App() {
  const [path, setPath] = useState(currentPath());

  useEffect(() => {
    const update = () => {
      setPath(currentPath());
      window.scrollTo({ top: 0, behavior: "auto" });
    };

    update();
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, []);

  return (
    <div className="site-shell">
      <Header path={path} />
      <main><Router path={path} /></main>
      <Footer />
    </div>
  );
}
