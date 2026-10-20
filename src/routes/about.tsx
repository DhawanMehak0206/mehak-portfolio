import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ResumeLink } from "@/components/portfolio-shell";
import { ChipList, NeuCard, SectionHead } from "@/components/site-ui";
import { facts, pageHead, photos, skillGroups } from "@/lib/portfolio-data";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead(
      "About",
      "Mehak Dhawan, a Jumeirah College student in Dubai working across technology, human behaviour and creativity.",
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
                I’m a student at Jumeirah College, Dubai. I’m fascinated by the intersection of
                technology, human behaviour and creativity, and by the ways seemingly distinct
                disciplines can inform one another. I’m drawn to questions that challenge
                conventional perspectives: how technology can strengthen human connection, how data
                can uncover overlooked inequalities, and how mathematical models can offer new ways
                of understanding complex systems.
              </p>
              <p>
                Through developing technology-driven initiatives, conducting computational research
                and exploring the social implications of innovation, I have sought to translate
                these questions into meaningful work. My experiences span human–computer
                interaction, digital inclusion, economics and computational music, each offering a
                different lens through which to investigate problems and develop solutions.
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
              Music has been a central part of my life for over 11 years of formal piano training.
              At the heart of everything I do is a desire to combine analytical rigour with human
              understanding, approaching complex challenges with curiosity, creativity and a
              commitment to building things that matter.
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
