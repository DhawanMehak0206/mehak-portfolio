import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { TonnetzArt } from "@/components/research-art";
import {
  Band,
  BandHead,
  CheckList,
  ChipList,
  Icon,
  NeuCard,
  PageHeader,
} from "@/components/site-ui";
import { EvidenceSection } from "@/components/evidence";
import {
  evidenceSets,
  featuredResearch,
  pageHead,
  research,
  researchThreads,
} from "@/lib/portfolio-data";

export const Route = createFileRoute("/research")({
  head: () =>
    pageHead(
      "Research",
      "Mehak Dhawan’s research in computational musicology, women’s financial inclusion, computational physics, foreign direct investment and machine-learning fraud detection.",
    ),
  component: Research,
});

function Research() {
  return (
    <main id="main">
      <PageHeader title="Research & Independent Inquiry">
        <p>
          My research explores how quantitative methods can help us understand complex systems, from
          the mathematical structures underlying music to the economic and social factors shaping
          financial inclusion. It is most meaningful to me when it connects abstract models with
          human experiences and real-world problems.
        </p>
      </PageHeader>

      <Band id={featuredResearch.id} labelledBy="featured-heading" className="band--feature">
        <BandHead id="featured-heading" title={featuredResearch.title}>
          {featuredResearch.kicker}
        </BandHead>
        <div className="feature-split">
          <figure className="art-panel">
            <TonnetzArt />
            <figcaption>
              A Tonnetz maps harmonic relationships as a lattice: notes a fifth apart sit side by
              side, and thirds run along the diagonals. The C major and C minor triads are
              highlighted.
            </figcaption>
          </figure>
          <div className="feature-copy">
            {featuredResearch.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <ul className="outcome-chips" aria-label="Outcomes">
          {featuredResearch.outcomes.map((outcome) => (
            <li key={outcome}>
              <Check aria-hidden="true" />
              {outcome}
            </li>
          ))}
        </ul>
        <div className="band-actions">
          <a
            className="btn btn--primary"
            href={featuredResearch.link.href}
            target="_blank"
            rel="noreferrer"
          >
            {featuredResearch.link.label} <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </Band>

      <section className="section section--white" aria-label="Further research">
        <div className="container grid-2">
          {research.map((entry) => (
            <NeuCard
              key={entry.id}
              id={entry.id}
              icon={entry.icon}
              title={entry.title}
              {...(entry.subtitle ? { subtitle: entry.subtitle } : {})}
              meta={entry.field}
              className="research-card"
            >
              <p className="card-context">{entry.context}</p>
              <p className="card-text">{entry.text}</p>
              <ChipList items={entry.methods} label="Methods" />
              <CheckList items={entry.outcomes} />
              {entry.link && (
                <a className="text-link" href={entry.link.href} target="_blank" rel="noreferrer">
                  {entry.link.label} <ArrowUpRight aria-hidden="true" />
                </a>
              )}
            </NeuCard>
          ))}
        </div>
      </section>

      <Band labelledBy="threads-heading">
        <BandHead id="threads-heading" title="What Connects My Research">
          Across music, physics, economics and digital inclusion, each project has followed the same
          process: identifying a question, translating it into a framework that can be investigated,
          testing ideas against evidence, and considering what the findings reveal.
        </BandHead>
        <div className="grid-3 thread-grid">
          {researchThreads.map((thread) => (
            <div key={thread.title} className="thread">
              <span className="thread-icon">
                <Icon name={thread.icon} />
              </span>
              <h3>{thread.title}</h3>
              <p>{thread.text}</p>
            </div>
          ))}
        </div>
      </Band>

      <EvidenceSection
        id="research-evidence"
        title="Publication and Recognition"
        ids={evidenceSets.research}
      >
        The published paper, acceptances and certificates behind this research.
      </EvidenceSection>
    </main>
  );
}
