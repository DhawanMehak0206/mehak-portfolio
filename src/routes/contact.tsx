import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PageIntro, PortfolioDownload } from "@/components/portfolio-shell";
import { pageHead, profile } from "@/lib/portfolio-data";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead(
      "Contact",
      "Get in touch with Mehak about research, human-centred technology, digital inclusion and music.",
    ),
  component: Contact,
});

function Contact() {
  return (
    <main id="main" className="site-width enter">
      <PageIntro eyebrow="Contact" title="Get in touch.">
        <p>
          I welcome conversations about human-centred technology, interdisciplinary research,
          digital inclusion and creative collaboration.
        </p>
      </PageIntro>

      <section className="contact-grid">
        <dl className="contact-details">
          {profile.email && (
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </dd>
            </div>
          )}
          {profile.linkedin && (
            <div>
              <dt>LinkedIn</dt>
              <dd>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  View profile <ArrowUpRight aria-hidden="true" />
                </a>
              </dd>
            </div>
          )}
          <div>
            <dt>School</dt>
            <dd>{profile.school}</dd>
          </div>
          <div>
            <dt>Based in</dt>
            <dd>{profile.location}</dd>
          </div>
          <div>
            <dt>Explore</dt>
            <dd className="contact-links">
              <Link to="/work" className="text-link">
                Projects <ArrowRight />
              </Link>
              <Link to="/research" className="text-link">
                Research <ArrowRight />
              </Link>
              <Link to="/about" className="text-link">
                Experience and honours <ArrowRight />
              </Link>
            </dd>
          </div>
        </dl>
        <aside className="contact-panel">
          <p className="eyebrow">Portfolio</p>
          <h2>The complete portfolio.</h2>
          <p>
            A detailed PDF covering my projects, research, leadership, music and recognition, with
            more on the questions and experiences behind them.
          </p>
          <PortfolioDownload variant="default" />
        </aside>
      </section>
    </main>
  );
}
