import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CvSection, PageIntro } from "@/components/portfolio-shell";
import { musicCompetitions, pageHead } from "@/lib/portfolio-data";
import festival from "@/assets/music-web.jpg.asset.json";

export const Route = createFileRoute("/music")({
  head: () =>
    pageHead(
      "Music",
      "Mehak’s life in music: more than eleven years of piano, Grade 8 Distinction, international competition honours and the Let the Music Speak! initiative.",
    ),
  component: Music,
});

function Music() {
  return (
    <main id="main" className="site-width enter">
      <PageIntro eyebrow="Music" title="Where discipline meets expression.">
        <p>
          Formal piano training has been part of my life for more than eleven years, and it
          continues to shape the way I think, create and connect.
        </p>
      </PageIntro>

      <section className="music-feature">
        <figure>
          <img
            src={festival.url}
            alt="Mehak speaking at a lectern beside a screen reading Let the Music Speak!"
            width={1572}
            height={1136}
          />
          <figcaption>
            Speaking at Let the Music Speak!, the initiative I founded at GEMS Modern Academy.
          </figcaption>
        </figure>
        <div className="prose">
          <h2>Pianist</h2>
          <p>
            I hold a Grade 8 Distinction from the London College of Music and have received Laureate
            and finalist honours across more than ten international music competitions.
          </p>
          <h2>Let the Music Speak!</h2>
          <p>
            At GEMS Modern Academy, I founded Let the Music Speak! and organised the school’s first
            music festival, bringing together more than 75 performers across seven genres to
            celebrate musical talent and create opportunities for students to perform.
          </p>
        </div>
      </section>

      <section className="highlights is-three" aria-label="Music highlights">
        <div className="highlight">
          <strong>11+ years</strong>
          <span>Of formal piano training</span>
        </div>
        <div className="highlight">
          <strong>Grade 8</strong>
          <span>Distinction, London College of Music</span>
        </div>
        <div className="highlight">
          <strong>75+</strong>
          <span>Performers at the school’s first music festival</span>
        </div>
      </section>

      <CvSection id="competitions" title="International competitions">
        <p className="cv-intro">
          Laureate honours across ten international competitions, including a top-80 placing at the
          Beethoven Award International Music Competition.
        </p>
        <ul className="column-list">
          {musicCompetitions.map((competition) => (
            <li key={competition}>{competition}</li>
          ))}
        </ul>
      </CvSection>

      <CvSection id="school-music" title="At Jumeirah College">
        <p className="cv-intro">
          As Music Ambassador, I help organise music competitions, showcases and Battle of the Bands
          events. I perform as a pianist with the JC Band and support younger students as they
          develop their instrumental skills.
        </p>
      </CvSection>

      <CvSection id="music-and-mathematics" title="Music and mathematics">
        <p className="cv-intro">
          My love of music also led to research. My published study uses computational methods to
          measure tonal stability and harmonic motion across musical styles.
        </p>
        <Link to="/research" hash="tonal-stability" className="text-link">
          Read about the research <ArrowRight />
        </Link>
      </CvSection>
    </main>
  );
}
