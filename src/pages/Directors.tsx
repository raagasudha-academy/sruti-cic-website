import PageIntro from "../components/PageIntro";
import { directors } from "../data/directors";

export default function Directors() {
  return (
    <>
      <PageIntro
        eyebrow="Our Directors"
        title="Meet the people guiding Śruti."
        copy="The people helping preserve and share the timeless wisdom of Vedam and Vedanta with our community and future generations."
      />
      <section className="section directors-profile-section" aria-label="Directors of Śruti">
        <div className="directors-profile-list">
          {directors.map((director) => (
            <article className="director-profile" key={director.name}>
              <div className="director-profile-image">
                <img src={director.photo} alt={director.name} />
              </div>
              <div className="director-profile-body">
                <p className="eyebrow">{director.role}</p>
                <h2>{director.name}</h2>
                {director.about.split("\n").filter(Boolean).map((paragraph, index) => (
                  <p key={index}>{paragraph.trim()}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
