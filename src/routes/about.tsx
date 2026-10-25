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
                I’m a student at Jumeirah College, Dubai, exploring questions at the intersection of
                cognitive science, computer science, economics and music.
              </p>
              <p>
                I’m interested in how people process information, make decisions, learn from their
                environments and connect with one another, and what computational models can reveal
                about these processes.
              </p>
              <p>
                Growing up between Delhi and Dubai, I always found myself rushing home to spend time
                with my parents and grandparents, with the freedom to share almost anything with
                them. Listening to friends and families around me, I realised this openness wasn’t
                universal. That realisation eventually led me to create Kindling, a platform
                designed to strengthen family relationships in an increasingly digital world.
              </p>
            </div>
          </div>
          <div className="about-more">
            <p>
              I’ve continued exploring these questions through DigiSakhi, which connects digital
              literacy with financial inclusion and human agency, and through research in
              computational musicology, economics and physics. Across these projects, I enjoy using
              mathematical and computational approaches to understand complex systems and
              investigate real-world problems.
            </p>
            <p>
              Beyond research, music and sport have been constants in my life. With over 11 years of
              formal piano training, I’ve developed an appreciation for patterns, interpretation and
              expression. I also enjoy tennis and football, having represented my school in both and
              competed in international and national-level sporting events over the years. These
              experiences have taught me the value of discipline, collaboration and learning from
              challenges.
            </p>
            <p>
              Ultimately, I’m interested in understanding human behaviour and using that
              understanding to build technology that responds thoughtfully to people’s needs.
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
