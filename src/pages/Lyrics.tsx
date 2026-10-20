import "../styles/lyrics.css";
import { Heart } from "lucide-react";
import {
  chalisaVerses,
  closingDoha,
  closingMessage,
  closingSalutation,
  openingDoha,
} from "../data/hanumanChalisa";
import ChalisaAudioPlayer from "../components/ChalisaAudioPlayer";
import verses1To4Audio from "../assets/audio/hanuman-chalisa-1-4.m4a";
import verses5To8Audio from "../assets/audio/hanuman-chalisa-5-8.m4a";
import verses9To12Audio from "../assets/audio/hanuman-chalisa-9-12.m4a";
import verses13To16Audio from "../assets/audio/hanuman-chalisa-13-16.m4a";
import verses17To20Audio from "../assets/audio/hanuman-chalisa-17-20.m4a";

// Add more recordings here as they become available.
const verseAudio: Record<string, string> = {
  "verses-1-4": verses1To4Audio,
  "verses-5-8": verses5To8Audio,
  "verses-9-12": verses9To12Audio,
  "verses-13-16": verses13To16Audio,
  "verses-17-20": verses17To20Audio,
};

const groups = [
  ...Array.from({ length: 10 }, (_, index) => {
    const from = index * 4 + 1;
    const to = from + 3;

    return {
      id: `verses-${from}-${to}`,
      label: `Verses ${from}–${to}`,
      from,
      to,
    };
  }),
  {
    id: "verse-41",
    label: "Repeat slowly",
    from: 41,
    to: 41,
  },
];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function LyricsCard({
  badge,
  lines,
  meaning,
  className = "",
}: {
  badge: string;
  lines: string[];
  meaning: string;
  className?: string;
}) {
  return (
    <article className={`lyrics-study-card ${className}`.trim()}>
      <div className="lyrics-badge">{badge}</div>

      <div className="lyrics-study-box">
        <div className="lyrics-main-text">
          {lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>

        <div className="lyrics-meaning-row">
          <span>Simple meaning</span>
          <p>{meaning}</p>
        </div>
      </div>
    </article>
  );
}

export default function Lyrics() {
  return (
    <>
      <section className="page-intro page-intro-accent lyrics-masthead">
        <div>
          <p className="eyebrow">Kids Practice Resource</p>
          <h1>Hanuman Chalisa</h1>
          <p className="page-intro-copy">
            Easy English reading for kids · Lyrics with simple meanings
          </p>
        </div>
      </section>

      <section className="section lyrics-page">
        <nav className="lyrics-jump-nav" aria-label="Jump to Hanuman Chalisa section">
          <button type="button" onClick={() => scrollToSection("opening-doha")}>
            Opening
          </button>

          {groups.map((group) => (
            <button
              key={group.id}
              type="button"
              onClick={() => scrollToSection(group.id)}
            >
              {group.label.replace("Verses ", "")}
            </button>
          ))}

          <button type="button" onClick={() => scrollToSection("closing-doha")}>
            Closing
          </button>
        </nav>

        <section id="opening-doha" className="lyrics-section lyrics-anchor-section">
          <header className="lyrics-section-heading">
            <p className="eyebrow">Begin here</p>
            <h2>Opening Doha</h2>

            <ChalisaAudioPlayer />
          </header>

          <div className="lyrics-study-list">
            {openingDoha.map((block, index) => (
              <LyricsCard
                key={index}
                badge={`Doha ${index + 1}`}
                lines={block.lines}
                meaning={block.meaning}
              />
            ))}
          </div>
        </section>

        {groups.map((group) => {
          const groupVerses = chalisaVerses.filter(
            (verse) => verse.number >= group.from && verse.number <= group.to,
          );

          return (
            <section
              id={group.id}
              className="lyrics-section lyrics-anchor-section"
              key={group.id}
            >
              <header className="lyrics-section-heading">
                <p className="eyebrow">Hanuman Chalisa</p>
                <h2>{group.label}</h2>
                {verseAudio[group.id] && (
                  <ChalisaAudioPlayer
                    key={group.id}
                    src={verseAudio[group.id]}
                    title={group.label}
                  />
                )}
              </header>

              <div className="lyrics-study-list">
                {groupVerses.map((verse) => (
                  <LyricsCard
                    key={verse.number}
                    badge={verse.number === 41 ?"ॐ" : `${verse.number}`}
                    lines={verse.lines}
                    meaning={verse.meaning}
                    className={verse.number === 41 ? "lyrics-repeat-card" : ""}
                  />
                ))}
              </div>
            </section>
          );
        })}

        <section id="closing-doha" className="lyrics-section lyrics-anchor-section">
          <header className="lyrics-section-heading">
            <p className="eyebrow">Finish together</p>
            <h2>Closing Doha</h2>
          </header>

          <LyricsCard
            badge="Closing"
            lines={closingDoha.lines}
            meaning={closingDoha.meaning}
            className="lyrics-closing-card"
          />

          <div className="lyrics-closing-message">
            <Heart size={22} aria-hidden="true" />
            <strong>{closingSalutation}</strong>
            <p>{closingMessage}</p>
          </div>
        </section>
      </section>
    </>
  );
}
