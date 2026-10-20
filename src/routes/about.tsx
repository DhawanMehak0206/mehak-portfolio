import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ResumeLink } from "@/components/portfolio-shell";
import { ChipList, NeuCard, SectionHead } from "@/components/site-ui";
import { facts, pageHead, photos, skillGroups } from "@/lib/portfolio-data";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead(
      "About",
      "Mehak Dhawan, a Jumeirah College student in Dubai exploring cognitive science, computer science, economics and music.",
    ),
  component: About,
});

function About() {
  return (
    <main id="main">
      <section className="section about-page">
        <div className="container">
          <div className="about-split reveal">
            <div className="photo-frame">
              <img
                src={photos.portrait.src}
                alt={photos.portrait.alt}
                width={photos.portrait.width}
                height={photos.portrait.height}
              />
            </div>
            <div className="about-copy">
              <h1 className="about-title about-title--page">About Me</h1>
              <p>
                I’m a student at Jumeirah College, Dubai. I explore questions at the intersection of
                cognitive science, computer science, economics and music.
              </p>
              <p>
                I’m interested in how people process information, make decisions, learn from their
                environments and connect with one another, and in what computational models can help
                us understand about these processes.
              </p>
            </div>
          </div>
          <div className="about-more">
            <p>
              Growing up between Delhi and Dubai, I always found myself rushing home to spend time
              with my parents and grandparents, and I felt fortunate to be able to share almost
              anything with them. As I listened to friends and families around me, I realised that
              this kind of openness was not universal. That realisation eventually led me to create
              Kindling.
            </p>
            <p>
              Those questions run through my work, from Kindling and DigiSakhi to research in
              computational musicology, economics and physics. Music has also been a central part of
              my life for over 11 years of formal piano training.
            </p>
            <div className="button-row">
              <Link to="/research" className="btn btn--primary">
                See my research <ArrowRight aria-hidden="true" />
              </Link>
              <ResumeLink />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--white" aria-labelledby="glance-heading">
        <div className="container">
          <SectionHead id="glance-heading" title="At a Glance" />
          <dl className="fact-grid">
            {facts.map((fact) => (
              <div key={fact.label} className="fact">
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section" aria-labelledby="skills-heading">
        <div className="container">
          <SectionHead id="skills-heading" title="Skills and Tools">
            The methods and technologies I have used across my research, internships and projects.
          </SectionHead>
          <div className="grid-3">
            {skillGroups.map((group) => (
              <NeuCard key={group.title} icon={group.icon} title={group.title}>
                <ChipList items={group.items} label={group.title} />
              </NeuCard>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
