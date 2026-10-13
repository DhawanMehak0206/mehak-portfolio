import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageIntro } from "@/components/portfolio-shell";
import { ProjectCard } from "@/components/project-card";
import { projects, pageHead, type ProjectCategory } from "@/lib/portfolio-data";

export const Route = createFileRoute("/work")({
  head: () =>
    pageHead(
      "Projects",
      "DigiSakhi, Kindling, SolarSoil, Kindling Connect and computational music research by Mehak.",
    ),
  component: Work,
});

const filters: ("All" | ProjectCategory)[] = ["All", "Technology", "Social impact", "Research"];

function Work() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const visible = projects.filter((p) => filter === "All" || p.category === filter);
  return (
    <main id="main" className="site-width enter">
      <PageIntro eyebrow="Projects" title="Projects built around people.">
        <p>
          From digital empowerment to family connection, each project begins with a question about
          how technology, research or community work could make something better.
        </p>
      </PageIntro>
      <div className="filters" role="group" aria-label="Filter projects by category">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            className="filter"
            onClick={() => setFilter(f)}
            aria-pressed={f === filter}
          >
            {f}
            <span className="filter-count">
              {f === "All" ? projects.length : projects.filter((p) => p.category === f).length}
            </span>
          </button>
        ))}
      </div>
      <section className="project-grid" aria-live="polite">
        {visible.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </main>
  );
}
