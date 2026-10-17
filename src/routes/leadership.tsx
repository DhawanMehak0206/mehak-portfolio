import { createFileRoute } from "@tanstack/react-router";
import { Band, BandHead, BandStats, CheckList, NeuCard, PageHeader } from "@/components/site-ui";
import { leadership, leadershipStats, pageHead } from "@/lib/portfolio-data";

export const Route = createFileRoute("/leadership")({
  head: () =>
    pageHead(
      "Leadership",
      "Mehak Dhawan’s school leadership at Jumeirah College: Senior Prefect, Math Captain, Head of STEAM, House Representative, Music Ambassador and Peer Mentor.",
    ),
  component: Leadership,
});

function Leadership() {
  return (
    <main id="main">
      <PageHeader title="School Leadership & Mentorship">
        <p>
          At Jumeirah College, I lead through the student council, the Math Society and the
          Innovation Committee, creating spaces where younger students can explore competitive
          mathematics, technology and music.
        </p>
      </PageHeader>

      <section className="section section--tight" aria-label="Leadership roles">
        <div className="container grid-3">
          {leadership.map((role) => (
            <NeuCard key={role.title} icon={role.icon} title={role.title} meta={role.meta}>
              <p className="card-text">{role.text}</p>
              {role.points && <CheckList items={role.points} />}
            </NeuCard>
          ))}
        </div>
      </section>

      <Band labelledBy="leadership-numbers-heading">
        <BandHead id="leadership-numbers-heading" title="Leadership in Numbers" />
        <BandStats items={leadershipStats} label="Leadership figures" />
      </Band>
    </main>
  );
}
