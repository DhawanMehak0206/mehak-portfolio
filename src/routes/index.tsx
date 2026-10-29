import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Icon, SectionHead } from "@/components/site-ui";
import { pageHead, photos, principles, profile } from "@/lib/portfolio-data";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead(
      "Student, researcher and founder",
      "Mehak Dhawan is a student at Jumeirah College, Dubai, exploring questions at the intersection of cognitive science, computer science, economics and music.",
    ),
  component: Index,
});

function Index() {
  const portrait = photos.portrait;
  return (
    <main id="main">
      <section className="hero" aria-labelledby="hero-title">
        <div className="container hero-inner">
          <div className="hero-copy reveal">
            <p className="hero-chip">
              {profile.school}, {profile.city}
            </p>
            <h1 className="hero-title" id="hero-title">
              {profile.name}
            </h1>
            <p className="hero-tagline">
              I’m a student exploring questions at the intersection of cognitive science, computer
              science, economics and music, and building technology and research that bring people
              closer.
            </p>
            <div className="hero-actions">
              <Link to="/about" className="btn btn--primary">
                About me <ArrowRight aria-hidden="true" />
              </Link>
              <Link to="/experience" className="btn btn--neu">
                See my work
              </Link>
            </div>
          </div>
          <div className="hero-portrait reveal">
            <img
              src={portrait.src}
              alt={portrait.alt}
              width={portrait.width}
              height={portrait.height}
              fetchPriority="high"
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
    </main>
  );
}
