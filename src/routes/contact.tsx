import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ResumeLink } from "@/components/portfolio-shell";
import { Band, BandHead, NeuCard, PageHeader } from "@/components/site-ui";
import { pageHead, profile } from "@/lib/portfolio-data";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead(
      "Contact",
      "Get in touch with Mehak Dhawan about research, human-centred technology, digital inclusion and music.",
    ),
  component: Contact,
});

function Contact() {
  return (
    <main id="main">
      <PageHeader title="Contact Me">
        <p>
          I welcome conversations about human-centred technology, interdisciplinary research,
          digital inclusion and music.
        </p>
      </PageHeader>

      <section className="section section--tight" aria-label="Contact details">
        <div className="container card-flow">
          {profile.email && (
            <NeuCard icon="mail" title="Email">
              <a className="card-link" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </NeuCard>
          )}
          {profile.linkedin && (
            <NeuCard icon="users" title="LinkedIn">
              <a className="card-link" href={profile.linkedin} target="_blank" rel="noreferrer">
                View profile <ArrowUpRight aria-hidden="true" />
              </a>
            </NeuCard>
          )}
          <NeuCard icon="school" title="School">
            <p className="card-text">{profile.school}</p>
          </NeuCard>
          <NeuCard icon="globe" title="Based in">
            <p className="card-text">{profile.location}</p>
          </NeuCard>
          <NeuCard icon="compass" title="Explore">
            <ul className="link-list">
              <li>
                <Link to="/research">
                  Research <ArrowRight aria-hidden="true" />
                </Link>
              </li>
              <li>
                <Link to="/experience">
                  Experience <ArrowRight aria-hidden="true" />
                </Link>
              </li>
              <li>
                <Link to="/awards">
                  Awards <ArrowRight aria-hidden="true" />
                </Link>
              </li>
            </ul>
          </NeuCard>
        </div>
      </section>

      {profile.resumeUrl && (
        <Band labelledBy="resume-heading">
          <BandHead id="resume-heading" title="Resume">
            My education, research, projects and recognition on one page.
          </BandHead>
          <div className="band-actions">
            <ResumeLink variant="light" />
          </div>
        </Band>
      )}
    </main>
  );
}
