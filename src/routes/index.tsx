import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { MediaSection } from "@/components/media";
import { ResumeLink } from "@/components/portfolio-shell";
import { TonnetzArt } from "@/components/research-art";
import { Icon, NeuCard, SectionHead } from "@/components/site-ui";
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
      "Mehak Dhawan is a student at Jumeirah College, Dubai, exploring questions at the intersection of cognitive science, computer science, economics and music.",
    ),
  component: Index,
});

/** One project per row; the image swaps sides on alternate rows. */
function WorkRow({ item }: { item: WorkHighlight }) {
  return (
    <article className="work-row">
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
        <p className="work-text">{item.text}</p>
        <Link to={item.to} hash={item.hash} className="text-link">
          Read more <ArrowRight aria-hidden="true" />
        </Link>
      </div>
    </article>
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
              {profile.school}, {profile.city}
            </p>
            <h1 className="hero-title" id="hero-title">
              {profile.name}
            </h1>
            <p className="hero-tagline">{profile.tagline}</p>
            <div className="hero-actions">
              <Link to="/experience" className="btn btn--primary">
                Explore my work <ArrowRight aria-hidden="true" />
              </Link>
              <ResumeLink variant="ghost" />
            </div>
          </div>
        </div>
        <div className="container">
          <dl className="hero-stats" aria-label="Highlights">
            {highlights.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section" aria-labelledby="about-heading">
        <div className="container about-split about-split--reverse">
          <div className="about-copy">
            <h2 className="about-title" id="about-heading">
              About Me
            </h2>
            <p>
              I’m a student at Jumeirah College, Dubai, exploring questions at the intersection of
              cognitive science, computer science, economics and music.
            </p>
            <p>
              I’m interested in how people process information, make decisions, learn and connect
              with one another, and in what computational models can help us understand about these
              processes.
            </p>
            <div className="button-row">
              <Link to="/about" className="btn btn--primary">
                More about me
              </Link>
              <ResumeLink />
            </div>
          </div>
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
        </div>
      </section>

      <section className="section section--white" aria-labelledby="principles-heading">
        <div className="container">
          <SectionHead id="principles-heading" title="What Guides My Work" />
          <div className="pillars">
            {principles.map((item) => (
              <article key={item.title} className="pillar">
                <Icon name={item.icon} className="pillar-icon" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="roles-heading">
        <div className="container">
          <SectionHead id="roles-heading" title="Roles I Take On" />
          <div className="grid-3">
            {roles.map((item) => (
              <NeuCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                className="neu-card--row"
              >
                <p className="card-text">{item.text}</p>
              </NeuCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--white" aria-labelledby="work-heading">
        <div className="container">
          <SectionHead id="work-heading" title="Selected Work">
            Three projects that show how I turn questions into platforms, products and research.
          </SectionHead>
          <div className="work-list">
            {selectedWork.map((item) => (
              <WorkRow key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <MediaSection />
    </main>
  );
}
