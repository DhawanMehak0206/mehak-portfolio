import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { EvidenceSection } from "@/components/evidence";
import { PhoneRow, PhotoGallery } from "@/components/gallery";
import { Band, BandHead, CheckList, PageHeader } from "@/components/site-ui";
import { evidenceSets, experience, pageHead, photos } from "@/lib/portfolio-data";

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
        <div className="container">
          <div className="entry-list">
            {experience.map((item) => (
              <article key={item.id} id={item.id} className="entry-row">
                <div className="entry-side">
                  <p className="entry-role">{item.role}</p>
                  <h3 className="entry-org">{item.organisation}</h3>
                </div>
                <div className="entry-main">
                  <p>{item.text}</p>
                  {item.points && <CheckList items={item.points} />}
                  {item.link && (
                    <a className="text-link" href={item.link.href} target="_blank" rel="noreferrer">
                      {item.link.label} <ArrowUpRight aria-hidden="true" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
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
        <div className="band-block">
          <h3 className="band-subtitle">Kindling in schools</h3>
          <p className="band-note">
            Sessions with families at schools in Learnovate’s KIIT JEE network, March 2026. Other
            people’s faces are blurred.
          </p>
          <PhotoGallery
            large
            label="Kindling school session photos"
            photos={[
              photos.kindlingShowcaseFamily,
              photos.kindlingShowcaseGroup,
              photos.kindlingShowcaseDemo,
              photos.kindlingShowcaseFather,
              photos.kindlingSchoolGuide,
              photos.kindlingSchoolStand,
            ]}
          />
        </div>
      </Band>

      <EvidenceSection
        id="experience-evidence"
        title="Letters and Recognition"
        ids={evidenceSets.experience}
      >
        A letter from Learnovate, the Technovation prize, the Curtin STEM Challenge win and the YYGS
        certificate.
      </EvidenceSection>
    </main>
  );
}
