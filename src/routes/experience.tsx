import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { EvidenceStrip, HonoursSection } from "@/components/evidence";
import { PhoneRow } from "@/components/gallery";
import { Band, BandHead, CheckList, PageHeader } from "@/components/site-ui";
import { Story } from "@/components/story";
import { experience, honoursByPage, pageHead, photos } from "@/lib/portfolio-data";

export const Route = createFileRoute("/experience")({
  head: () =>
    pageHead(
      "Experience",
      "Mehak Dhawan’s experience founding Kindling, interning at MyWonder, IIT Bombay and Delhi Technological University, building SolarSoil and speaking at TEDx.",
    ),
  component: Experience,
});

function Experience() {
  const kindling = experience.find((item) => item.id === "kindling");
  const others = experience.filter((item) => item.id !== "kindling");
  return (
    <main id="main">
      <PageHeader title="Experience & Innovation">
        <p>
          Founding an app, writing production code, building prototypes and speaking to large
          audiences have taught me how ideas become working products, and how much depends on the
          people who use them.
        </p>
      </PageHeader>

      {kindling && (
        <section className="section section--tight" aria-label="Kindling">
          <div className="container story-list">
            <Story
              item={kindling}
              photos={[
                photos.kindlingSchoolGuide,
                photos.kindlingShowcaseFamily,
                photos.kindlingSchoolStand,
                photos.kindlingShowcaseGroup,
                photos.kindlingShowcaseDemo,
                photos.kindlingShowcaseFather,
              ]}
            >
              <p className="story-note">
                Photos from sessions with families at schools in Learnovate’s KIIT JEE network,
                March 2026. Other people’s faces are blurred.
              </p>
            </Story>
          </div>
        </section>
      )}

      <Band labelledBy="kindling-heading">
        <BandHead id="kindling-heading" title="Inside Kindling">
          Screens from the app, from the parenting-style assessment to personalised daily plans.
        </BandHead>
        <PhoneRow
          screens={[photos.kindlingHome, photos.kindlingQuestion, photos.kindlingAssessment]}
          label="Kindling app screens"
        />
      </Band>

      <section className="section" aria-labelledby="roles-heading">
        <div className="container">
          <h2 className="subsection-title subsection-title--first" id="roles-heading">
            Internships, projects and talks
          </h2>
          <div className="entry-list">
            {others.map((item) => (
              <article key={item.id} id={item.id} className="entry-row">
                <div className="entry-side">
                  <p className="entry-role">{item.role}</p>
                  <h3 className="entry-org">{item.organisation}</h3>
                </div>
                <div className="entry-main">
                  <p>{item.text}</p>
                  {item.points && <CheckList items={item.points} />}
                  {item.photo && (
                    <figure className="entry-photo">
                      <img
                        src={item.photo.src}
                        alt={item.photo.alt}
                        width={item.photo.width}
                        height={item.photo.height}
                        loading="lazy"
                        decoding="async"
                      />
                      <figcaption>{item.photo.caption}</figcaption>
                    </figure>
                  )}
                  {item.evidence && <EvidenceStrip ids={item.evidence} />}
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

      <HonoursSection
        id="experience-honours"
        title="Other Recognition"
        items={honoursByPage.experience}
        white
      />
    </main>
  );
}
