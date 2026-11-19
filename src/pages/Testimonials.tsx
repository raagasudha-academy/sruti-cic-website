import PageIntro from "../components/PageIntro";

export default function Testimonials() {
  return (
    <>
      <PageIntro
        eyebrow="Stories from the community"
        title="Voices of Śruti"
        copy="A few words from those learning and growing together through Śruti."
        accent
      />

      <section className="section sruti-testimonial-section" aria-label="Community testimonials">
        <article className="sruti-testimonial-card">
          <p className="eyebrow">Community story</p>
          <blockquote>
            I’ve been part of Śruti since 2022, though I rarely attended at
            first because the chanting felt overwhelming. Hearing Praveena ji
            chant with such clarity and patience inspired me to join the
            classes and it’s been one of my best decisions. Kailash ji’s
            Thursday talks always leave me feeling positive and enriched. I’m
            grateful to them both for sharing their knowledge and making Śruti such
            an uplifting community.
          </blockquote>
          <p className="sruti-testimonial-byline">Minni Arumugam</p>
        </article>
        <article className="sruti-testimonial-card">
          <p className="eyebrow">Parent voice</p>
          <blockquote>
            My children are at the beginning of their Vedam learning journey,
            and the programme is thoughtfully paced to suit them, not too fast
            or too slow. Their teachers guide them with patience, care and
            warmth. My children are very engaged, love listening to their
            teachers and look forward to each session. It’s lovely to see them
            growing closer to Vedam.
          </blockquote>
          <p className="sruti-testimonial-byline">Mohana Kamanooru</p>
        </article>
      </section>
    </>
  );
}
