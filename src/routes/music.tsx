import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Music2 } from "lucide-react";
import { EvidenceSection } from "@/components/evidence";
import { PhotoGallery } from "@/components/gallery";
import { Band, BandHead, BlueCard, PageHeader } from "@/components/site-ui";
import {
  evidenceSets,
  musicCards,
  musicCompetitions,
  pageHead,
  photos,
} from "@/lib/portfolio-data";

export const Route = createFileRoute("/music")({
  head: () =>
    pageHead(
      "Music",
      "Mehak Dhawan’s life in music: more than 11 years of piano, a Grade 8 Distinction, international competition honours and the Let the Music Speak! initiative.",
    ),
  component: Music,
});

function Music() {
  const festival = photos.festival;
  return (
    <main id="main">
      <PageHeader title="Music & Performance">
        <p>
          Music has been a central part of my life for over 11 years of formal piano training. It is
          where discipline meets expression, and it inspired my research into the mathematics of
          music.
        </p>
      </PageHeader>

      <section className="section section--white" aria-labelledby="pianist-heading">
        <div className="container media-split">
          <figure className="photo-frame photo-frame--wide">
            <img
              src={festival.src}
              alt={festival.alt}
              width={festival.width}
              height={festival.height}
              loading="lazy"
              decoding="async"
            />
            <figcaption>Speaking at Let the Music Speak!, the initiative I founded.</figcaption>
          </figure>
          <div className="about-copy">
            <h2 className="about-title" id="pianist-heading">
              Pianist, Music Ambassador and Founder
            </h2>
            <p>
              I attained a Grade 8 Distinction from the London College of Music and have received
              Laureate and finalist honours across more than 10 international music competitions.
            </p>
            <p>
              At GEMS Modern Academy, I
              founded Let the Music Speak! and organised the school’s first music festival.
            </p>
            <div className="button-row">
              <Link to="/research" hash="tonal-stability" className="btn btn--primary">
                Music meets mathematics <ArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-label="Music highlights">
        <div className="container grid-2">
          {musicCards.map((card) => (
            <BlueCard key={card.title} title={card.title} meta={card.meta}>
              <p className="blue-card-text">{card.text}</p>
            </BlueCard>
          ))}
        </div>
      </section>

      <Band labelledBy="competitions-heading">
        <BandHead id="competitions-heading" title="International Competitions">
          Laureate honours across 10 international competitions, including:
        </BandHead>
        <ul className="competition-list">
          {musicCompetitions.map((competition) => (
            <li key={competition}>
              <Music2 aria-hidden="true" />
              {competition}
            </li>
          ))}
        </ul>
        <div className="band-block">
          <h3 className="band-subtitle">At Let the Music Speak!</h3>
          <PhotoGallery
            large
            label="Let the Music Speak! photos"
            photos={[photos.festivalPerformer]}
          />
        </div>
      </Band>

      <EvidenceSection id="music-evidence" title="Music Certificates" ids={evidenceSets.music}>
        My Grade 8 piano certificate from the London College of Music, and final-round selections in
        international competitions.
      </EvidenceSection>
    </main>
  );
}
