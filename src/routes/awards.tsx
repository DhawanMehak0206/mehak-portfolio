import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Band, BandHead, BandStats, IconBadge, PageHeader } from "@/components/site-ui";
import { honourGroups, honourStats, pageHead } from "@/lib/portfolio-data";

export const Route = createFileRoute("/awards")({
  head: () =>
    pageHead(
      "Awards",
      "Mehak Dhawan’s awards and honours in mathematics, science, innovation, service, research, writing and music.",
    ),
  component: Awards,
});

const total = honourGroups.reduce((sum, group) => sum + group.items.length, 0);

function Awards() {
  const [filter, setFilter] = useState("all");
  const visible = honourGroups.filter((group) => filter === "all" || group.id === filter);
  return (
    <main id="main">
      <PageHeader title="Awards & Honours">
        <p>
          My work across mathematics, science, entrepreneurship, research, music and social impact
          has been recognised through international competitions, academic distinctions,
          scholarships and school awards.
        </p>
      </PageHeader>

      <section className="section section--tight" aria-label="Honours by category">
        <div className="container">
          <div className="filter-bar" role="group" aria-label="Filter honours by category">
            <button
              type="button"
              className="filter-chip"
              aria-pressed={filter === "all"}
              onClick={() => setFilter("all")}
            >
              All <span className="filter-count">{total}</span>
            </button>
            {honourGroups.map((group) => (
              <button
                key={group.id}
                type="button"
                className="filter-chip"
                aria-pressed={filter === group.id}
                onClick={() => setFilter(group.id)}
              >
                {group.title} <span className="filter-count">{group.items.length}</span>
              </button>
            ))}
          </div>

          {visible.map((group) => (
            <section key={group.id} className="award-group" aria-labelledby={`${group.id}-heading`}>
              <h2 className="group-title" id={`${group.id}-heading`}>
                {group.title}
              </h2>
              <div className="card-flow">
                {group.items.map((honour) => (
                  <article key={honour.title} className="neu-card award-card">
                    <IconBadge name={group.icon} small />
                    <h3 className="card-title">{honour.title}</h3>
                    <p className="card-meta">{honour.detail}</p>
                    <p className="card-text">{honour.text}</p>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <Band labelledBy="recognition-heading">
        <BandHead id="recognition-heading" title="Recognition by the Numbers" />
        <BandStats items={honourStats} label="Recognition figures" />
      </Band>
    </main>
  );
}
