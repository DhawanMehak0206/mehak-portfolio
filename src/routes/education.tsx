import { createFileRoute } from "@tanstack/react-router";
import { Band, BandHead, BandStats, CheckList, NeuCard, PageHeader } from "@/components/site-ui";
import { EvidenceButton, HonoursSection } from "@/components/evidence";
import { education, honoursByPage, pageHead, scores } from "@/lib/portfolio-data";

export const Route = createFileRoute("/education")({
  head: () =>
    pageHead(
      "Education",
      "Mehak Dhawan’s academic record: A Levels at Jumeirah College, ICSE at GEMS Modern Academy, Yale Young Global Scholars and selective mathematics camps.",
    ),
  component: Education,
});

function Education() {
  return (
    <main id="main">
      <PageHeader title="Education & Academics">
        <p>
          I’m interested in understanding how the world works, from the mathematical principles
          underlying complex systems to the economic models shaping human decisions. My studies give
          me different ways to approach problems, question assumptions and connect theoretical ideas
          with real-world applications.
        </p>
      </PageHeader>

      <section className="section section--tight" aria-label="Schools and programmes">
        <div className="container grid-2">
          {education.map((item) => (
            <NeuCard key={item.title} icon={item.icon} title={item.title} meta={item.meta}>
              <p className="card-text">{item.text}</p>
              {item.points && <CheckList items={item.points} />}
              {item.evidence && <EvidenceButton id={item.evidence} />}
            </NeuCard>
          ))}
        </div>
      </section>

      <Band labelledBy="scores-heading">
        <BandHead id="scores-heading" title="Examinations and Languages">
          Standardised tests, Advanced Placement examinations and language certifications.
        </BandHead>
        <BandStats items={scores} label="Examination results" />
      </Band>

      <HonoursSection id="education-honours" items={honoursByPage.education} white>
        Olympiads, academic distinctions and scholarships.
      </HonoursSection>
    </main>
  );
}
