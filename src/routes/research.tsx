import { createFileRoute } from "@tanstack/react-router";
import { research, pageHead } from "@/lib/portfolio-data";
import { PageIntro, PortfolioDownload } from "@/components/portfolio-shell";

export const Route = createFileRoute("/research")({
  head: () =>
    pageHead(
      "Research",
      "Mehak’s research in computational musicology, women’s financial inclusion, computational physics, foreign direct investment and machine-learning fraud detection.",
    ),
  component: Research,
});

function Research() {
  return (
    <main id="main" className="site-width enter">
      <PageIntro eyebrow="Research" title="Questions pursued with rigour.">
        <p>
          My research uses quantitative methods to understand complex systems, from the mathematical
          structures underlying music to the economic and social factors shaping financial
          inclusion. I am most interested in work that connects abstract models with real human
          experience.
        </p>
      </PageIntro>

      <section aria-label="Research projects">
        {research.map((entry, i) => (
          <article className="research-entry" id={entry.id} key={entry.id}>
            <span className="research-index">{String(i + 1).padStart(2, "0")}</span>
            <div className="research-main">
              <p className="eyebrow">{entry.field}</p>
              <h2>{entry.title}</h2>
              <p className="research-context">{entry.context}</p>
              <p className="research-summary">{entry.summary}</p>
              <ul className="method-list" aria-label="Methods">
                {entry.methods.map((method) => (
                  <li key={method}>{method}</li>
                ))}
              </ul>
            </div>
            <aside className="research-outcomes" aria-label={`Outcomes: ${entry.title}`}>
              <h3 className="eyebrow">Outcomes</h3>
              <ul>
                {entry.outcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
            </aside>
          </article>
        ))}
      </section>

      <section className="research-closing">
        <h2 className="section-title">What connects my research.</h2>
        <div className="prose">
          <p>
            Across music, physics, economics and digital inclusion, each project has followed a
            similar process: identifying a question, translating it into a framework that can be
            investigated, testing ideas against evidence, and considering what the findings reveal.
          </p>
          <p>
            Computational music research showed me how mathematics can illuminate creative
            expression. My work on financial inclusion revealed the gap between access and agency.
            Physics and economics taught me to approach complex systems through modelling,
            diagnostics and careful interpretation.
          </p>
          <PortfolioDownload />
        </div>
      </section>
    </main>
  );
}
