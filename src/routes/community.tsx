import { createFileRoute } from "@tanstack/react-router";
import { EvidenceStrip } from "@/components/evidence";
import { BlueCard, CheckList, PageHeader } from "@/components/site-ui";
import { Story } from "@/components/story";
import { community, pageHead, photos, type Engagement, type Photo } from "@/lib/portfolio-data";

export const Route = createFileRoute("/community")({
  head: () =>
    pageHead(
      "Community",
      "DigiSakhi, the Kindling Connect Initiative, family-friendly workplace policy and Let the Music Speak!: Mehak Dhawan’s community and social impact work.",
    ),
  component: Community,
});

/** Photos for each initiative that has them; the rest are shown as cards. */
const storyPhotos: Record<string, Photo[]> = {
  digisakhi: [
    photos.digisakhiSession,
    photos.digisakhiGuiding,
    photos.digisakhiPractice,
    photos.digisakhiStudents,
    photos.digisakhiTalk,
    photos.digisakhiClassroom,
    photos.digisakhiPlatformVideos,
    photos.digisakhiPlatformBlogs,
  ],
  "kindling-connect": [
    photos.kindlingLearnovate,
    photos.kindlingFamily,
    photos.kindlingOnline,
    photos.kindlingConnectSupport,
  ],
  "inclusive-families": [photos.kindlingConnectSpecialNeeds],
  "let-the-music-speak": [photos.festival],
};

function Community() {
  const stories = community.filter((item) => storyPhotos[item.id]);
  const others: Engagement[] = community.filter((item) => !storyPhotos[item.id]);
  return (
    <main id="main">
      <PageHeader title="Community & Social Impact">
        <p>
          Much of my work starts with a gap I noticed in everyday life: women with access to
          technology but not the confidence to use it, or families sharing a meal without truly
          engaging with one another.
        </p>
      </PageHeader>

      <section className="section section--tight" aria-label="Initiatives">
        <div className="container story-list">
          {stories.map((item) => (
            <Story key={item.id} item={item} photos={storyPhotos[item.id] ?? []} />
          ))}
        </div>
      </section>

      <section className="section section--white" aria-labelledby="more-heading">
        <div className="container">
          <h2 className="subsection-title subsection-title--first" id="more-heading">
            In school and the workplace
          </h2>
          <div className="grid-2">
            {others.map((item) => (
              <BlueCard key={item.id} id={item.id} title={item.organisation} meta={item.role}>
                <p className="blue-card-text">{item.text}</p>
                {item.points && <CheckList items={item.points} className="check-list--light" />}
                {item.evidence && (
                  <EvidenceStrip ids={item.evidence} className="evidence-strip--light" />
                )}
              </BlueCard>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
