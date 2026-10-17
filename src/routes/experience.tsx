import { createFileRoute } from "@tanstack/react-router";
import { PhoneRow } from "@/components/gallery";
import { Band, BandHead, BlueCard, CheckList, PageHeader } from "@/components/site-ui";
import { experience, pageHead, photos } from "@/lib/portfolio-data";

export const Route = createFileRoute("/experience")({
  head: () =>
    pageHead(
      "Experience",
      "Mehak Dhawan’s experience founding Kindling, interning at MyWonder, IIT Bombay and Delhi Technological University, building SolarSoil and speaking at TEDx.",
    ),
  component: Experience,
});

function Experience() {
  return (
    <main id="main">
      <PageHeader title="Experience & Innovation">
        <p>
          Founding an app, writing production code, building prototypes and speaking to large
          audiences have taught me how ideas become working products, and how much depends on the
          people who use them.
        </p>
      </PageHeader>

      <section className="section section--tight" aria-label="Roles and projects">
        <div className="container grid-2">
          {experience.map((item) => (
            <BlueCard key={item.id} id={item.id} title={item.organisation} meta={item.role}>
              <p className="blue-card-text">{item.text}</p>
              {item.points && <CheckList items={item.points} className="check-list--light" />}
            </BlueCard>
          ))}
        </div>
      </section>

      <Band labelledBy="kindling-heading">
        <BandHead id="kindling-heading" title="Inside Kindling">
          Screens from the app, from the parenting-style assessment to personalised daily plans.
        </BandHead>
        <PhoneRow
          screens={[photos.kindlingHome, photos.kindlingQuestion, photos.kindlingAssessment]}
          label="Kindling app screens"
        />
      </Band>
    </main>
  );
}
