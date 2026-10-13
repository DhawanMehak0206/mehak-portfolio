import { createFileRoute } from "@tanstack/react-router";
import { CvSection, PageIntro } from "@/components/portfolio-shell";
import {
  education,
  experience,
  honours,
  leadership,
  pageHead,
  scores,
  type Entry,
} from "@/lib/portfolio-data";
import portrait from "@/assets/portrait.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead(
      "About",
      "Mehak’s education, experience, leadership and honours: a Jumeirah College student, founder and researcher in Dubai.",
    ),
  component: About,
});

function EntryList({ entries }: { entries: Entry[] }) {
  return (
    <div className="entry-list">
      {entries.map((entry) => (
        <article className="entry" key={entry.title}>
          <div className="entry-head">
            <h3>{entry.title}</h3>
            <span>{entry.organisation}</span>
          </div>
          <p>{entry.description}</p>
        </article>
      ))}
    </div>
  );
}

function About() {
  return (
    <main id="main" className="site-width enter">
      <PageIntro eyebrow="About" title="Analytical rigour, with human understanding." />

      <section className="about-intro">
        <div className="portrait-frame">
          <img src={portrait.url} alt="Portrait of Mehak" width={854} height={960} />
        </div>
        <div className="prose">
          <p className="lead">
            I’m a student at Jumeirah College, Dubai, fascinated by the intersection of technology,
            human behaviour and creativity, and by the ways seemingly distinct disciplines can
            inform one another.
          </p>
          <p>
            I’m drawn to questions that challenge conventional perspectives: how technology can
            strengthen human connection, how data can uncover overlooked inequalities, and how
            mathematical models can offer new ways of understanding complex systems.
          </p>
          <p>
            Through developing technology-driven initiatives, conducting computational research and
            exploring the social implications of innovation, I have sought to translate these
            questions into meaningful work. My experiences span human–computer interaction, digital
            inclusion, economics and computational music, each offering a different lens through
            which to investigate problems and develop solutions.
          </p>
        </div>
      </section>

      <CvSection id="education" title="Education">
        <div className="entry-list">
          {education.map((item) => (
            <article className="entry" key={item.school}>
              <div className="entry-head">
                <h3>{item.school}</h3>
                <span>{item.qualification}</span>
              </div>
              <ul className="detail-list">
                {item.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <h3 className="eyebrow subsection-label">Examinations and languages</h3>
        <dl className="score-grid">
          {scores.map((score) => (
            <div key={score.label}>
              <dt>{score.label}</dt>
              <dd className="score-value">{score.value}</dd>
              {score.note && <dd className="score-note">{score.note}</dd>}
            </div>
          ))}
        </dl>
      </CvSection>

      <CvSection id="experience" title="Experience">
        <EntryList entries={experience} />
      </CvSection>

      <CvSection id="leadership" title="Leadership">
        <EntryList entries={leadership} />
      </CvSection>

      <CvSection id="honours" title="Honours and awards">
        {honours.map((group) => (
          <div className="honour-group" key={group.group}>
            <h3 className="eyebrow">{group.group}</h3>
            <ul className="honour-list">
              {group.items.map((honour) => (
                <li key={honour.title}>
                  <span>{honour.title}</span>
                  <span>{honour.detail}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </CvSection>
    </main>
  );
}
