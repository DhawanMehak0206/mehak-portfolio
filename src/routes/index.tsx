import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import { PortfolioDownload } from "@/components/portfolio-shell";
import { TonnetzArt } from "@/components/research-art";
import { Band, BandHead, NeuCard, SectionHead } from "@/components/site-ui";
import {
  highlights,
  pageHead,
  photos,
  principles,
  profile,
  roles,
  selectedWork,
  type WorkHighlight,
} from "@/lib/portfolio-data";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead(
      "Student, researcher and founder",
      "Mehak Dhawan is a student at Jumeirah College, Dubai, working across human–computer interaction, digital inclusion, economics research and music.",
    ),
  component: Index,
});

function WorkCard({ item }: { item: WorkHighlight }) {
  return (
    <Link to={item.to} hash={item.hash} className="work-card">
      <div className={`work-media is-${item.media.kind}`}>
        {item.media.kind === "art" ? (
          <TonnetzArt decorative />
        ) : (
          <img
            src={item.media.photo.src}
            alt={item.media.photo.alt}
            width={item.media.photo.width}
            height={item.media.photo.height}
            loading="lazy"
            decoding="async"
          />
        )}
      </div>
      <div className="work-body">
        <p className="card-meta">{item.kicker}</p>
        <h3 className="work-title">{item.title}</h3>
        <p className="card-text">{item.text}</p>
        <span className="work-link">
          Read more <ArrowRight aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}

function Index() {
  const hero = photos.digisakhiSession;
  return (
    <main id="main">
      <section className="hero" aria-labelledby="hero-title">
        <img
          className="hero-media"
          src={hero.src}
          alt={hero.alt}
          width={hero.width}
          height={hero.height}
          fetchPriority="high"
        />
        <div className="container hero-inner">
          <div className="hero-copy reveal">
            <p className="hero-chip">
              <MapPin aria-hidden="true" />
              {profile.school} · {profile.city}
            </p>
            <h1 className="hero-title" id="hero-title">
              {profile.name}
            </h1>
            <p className="hero-tagline">{profile.tagline}</p>
            <div className="hero-actions">
              <Link to="/experience" className="btn btn--primary">
                Explore my work <ArrowRight aria-hidden="true" />
              </Link>
              <PortfolioDownload variant="ghost" />
            </div>
          </div>
        </div>
      </section>

      <section className="container stats-wrap" aria-label="Highlights">
        <dl className="stats-card">
          {highlights.map((item) => (
            <div className="stat" key={item.label}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="section" aria-labelledby="about-heading">
        <div className="container about-split">
          <div className="photo-frame">
            <img
              src={photos.portrait.src}
              alt={photos.portrait.alt}
              width={photos.portrait.width}
              height={photos.portrait.height}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="about-copy">
            <h2 className="about-title" id="about-heading">
              About Me
            </h2>
            <p>
              I’m a student at Jumeirah College, Dubai, fascinated by the intersection of
              technology, human behaviour and creativity, and by the ways seemingly distinct
              disciplines can inform one another.
            </p>
            <p>
              My work spans human–computer interaction, digital inclusion, economics and
              computational music. At its heart is a desire to combine analytical rigour with human
              understanding.
            </p>
            <p className="about-cue">Explore my work…</p>
            <div className="button-row">
              <Link to="/about" className="btn btn--primary">
                More about me
              </Link>
              <PortfolioDownload />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--white" aria-labelledby="principles-heading">
        <div className="container">
          <SectionHead id="principles-heading" kicker="What drives me" title="Guiding Principles" />
          <div className="grid-3">
            {principles.map((item) => (
              <NeuCard key={item.title} icon={item.icon} title={item.title}>
                <p className="card-text">{item.text}</p>
              </NeuCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="roles-heading">
        <div className="container">
          <SectionHead id="roles-heading" kicker="How I contribute" title="Leadership Roles" />
          <div className="grid-3">
            {roles.map((item) => (
              <NeuCard key={item.title} icon={item.icon} title={item.title}>
                <p className="card-text">{item.text}</p>
              </NeuCard>
            ))}
          </div>
        </div>
      </section>

      <Band labelledBy="work-heading">
        <BandHead id="work-heading" title="Selected Work">
          Three projects that show how I turn questions into platforms, products and research.
        </BandHead>
        <div className="grid-3 work-grid">
          {selectedWork.map((item) => (
            <WorkCard key={item.title} item={item} />
          ))}
        </div>
      </Band>
    </main>
  );
}
