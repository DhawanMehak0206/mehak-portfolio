import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PortfolioDownload, SectionHeading } from "@/components/portfolio-shell";
import { ProjectCard } from "@/components/project-card";
import { featuredHonours, highlights, pageHead, projects, research } from "@/lib/portfolio-data";
import portrait from "@/assets/portrait.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead(
      "Student, researcher and founder",
      "Mehak is a student at Jumeirah College, Dubai, working across human–computer interaction, digital inclusion, economics research and music.",
    ),
  component: Index,
});

function Index() {
  return (
    <main id="main" className="enter">
      <section className="site-width hero">
        <div className="hero-copy">
          <p className="eyebrow">Student · Researcher · Founder</p>
          <h1 className="hero-title">Mehak</h1>
          <p className="hero-lead">
            Building technology and research that bring people closer, from family connection to
            women’s financial inclusion.
          </p>
          <p className="hero-description">
            I’m a student at Jumeirah College, Dubai, studying Mathematics, Further Mathematics,
            Physics and Economics. My work spans human–computer interaction, digital inclusion,
            applied economics and computational music.
          </p>
          <div className="hero-actions">
            <Button asChild size="lg">
              <Link to="/work">
                View projects <ArrowRight />
              </Link>
            </Button>
            <PortfolioDownload />
          </div>
        </div>
        <figure className="hero-portrait">
          <div className="portrait-frame">
            <img src={portrait.url} alt="Portrait of Mehak" width={854} height={960} />
          </div>
          <figcaption>Jumeirah College, Dubai</figcaption>
        </figure>
      </section>

      <section className="site-width highlights" aria-label="Highlights">
        {highlights.map((item) => (
          <div className="highlight" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section className="site-width section">
        <SectionHeading
          eyebrow="Selected projects"
          title="Ideas put into practice."
          action={
            <Link to="/work" className="text-link">
              All projects <ArrowRight />
            </Link>
          }
        />
        <div className="project-grid">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="section section-tinted">
        <div className="site-width">
          <SectionHeading
            eyebrow="Research"
            title="Published and presented work."
            action={
              <Link to="/research" className="text-link">
                All research <ArrowRight />
              </Link>
            }
          />
          <ol className="publication-list">
            {research.slice(0, 3).map((entry) => (
              <li key={entry.id}>
                <Link to="/research" hash={entry.id} className="publication">
                  <span className="publication-field">{entry.field}</span>
                  <span className="publication-main">
                    <span className="publication-title">{entry.title}</span>
                    <span className="publication-venue">{entry.outcomes[0] ?? entry.context}</span>
                  </span>
                  <ArrowRight className="publication-arrow" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="site-width section recognition">
        <div>
          <p className="eyebrow">Recognition</p>
          <h2 className="section-title">Selected honours.</h2>
          <p className="section-intro">
            Distinctions across mathematics, science, innovation, research and service.
          </p>
          <Link to="/about" hash="honours" className="text-link">
            Full list of honours <ArrowRight />
          </Link>
        </div>
        <ul className="honour-list">
          {featuredHonours.map((honour) => (
            <li key={honour.title}>
              <span>{honour.title}</span>
              <span>{honour.detail}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="cta-band">
        <div className="site-width cta-inner">
          <div>
            <h2>The complete portfolio.</h2>
            <p>
              A detailed account of my projects, research, leadership and recognition, available as
              a PDF.
            </p>
          </div>
          <div className="cta-actions">
            <PortfolioDownload className="button-light" />
            <Button asChild size="lg" className="button-outline-light">
              <Link to="/contact">Contact</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
