import { createFileRoute } from "@tanstack/react-router";
import { EvidenceSection } from "@/components/evidence";
import { PhotoGallery } from "@/components/gallery";
import { Band, BandHead, BlueCard, CheckList, PageHeader } from "@/components/site-ui";
import { community, evidenceSets, pageHead, photos } from "@/lib/portfolio-data";

export const Route = createFileRoute("/community")({
  head: () =>
    pageHead(
      "Community",
      "DigiSakhi, the Kindling Connect Initiative, family-friendly workplace policy and Let the Music Speak!: Mehak Dhawan’s community and social impact work.",
    ),
  component: Community,
});

function Community() {
  return (
    <main id="main">
      <PageHeader title="Community & Social Impact">
        <p>
          Much of my work starts with a gap I noticed in everyday life: women with access to
          technology but not the confidence to use it, or families sharing a meal without truly
          engaging with one another. These initiatives are my attempts to close those gaps, working
          with the people they affect.
        </p>
      </PageHeader>

      <section className="section section--tight" aria-label="Initiatives">
        <div className="container grid-2">
          {community.map((item) => (
            <BlueCard key={item.id} id={item.id} title={item.organisation} meta={item.role}>
              <p className="blue-card-text">{item.text}</p>
              {item.points && <CheckList items={item.points} className="check-list--light" />}
            </BlueCard>
          ))}
        </div>
      </section>

      <Band labelledBy="community-photos-heading">
        <BandHead id="community-photos-heading" title="In the Community">
          Select a photo to see it in full.
        </BandHead>
        <div className="band-block">
          <h3 className="band-subtitle">DigiSakhi</h3>
          <PhotoGallery
            large
            label="DigiSakhi photos"
            photos={[
              photos.digisakhiSession,
              photos.digisakhiGuiding,
              photos.digisakhiStudents,
              photos.digisakhiTalk,
              photos.digisakhiClassroom,
              photos.digisakhiPractice,
            ]}
          />
        </div>
        <div className="band-block">
          <h3 className="band-subtitle">The DigiSakhi platform</h3>
          <PhotoGallery
            wide
            label="DigiSakhi platform screenshots"
            photos={[photos.digisakhiPlatformVideos, photos.digisakhiPlatformBlogs]}
          />
        </div>
        <div className="band-block">
          <h3 className="band-subtitle">Kindling Connect</h3>
          <PhotoGallery
            large
            label="Kindling Connect photos"
            photos={[
              photos.kindlingLearnovate,
              photos.kindlingFamily,
              photos.kindlingOnline,
              photos.kindlingConnectSpecialNeeds,
              photos.kindlingConnectSupport,
            ]}
          />
        </div>
      </Band>

      <EvidenceSection
        id="community-evidence"
        title="Letters and Recognition"
        ids={evidenceSets.community}
      >
        Letters from the organisations I have worked with, and the awards for DigiSakhi and
        Kindling.
      </EvidenceSection>
    </main>
  );
}
