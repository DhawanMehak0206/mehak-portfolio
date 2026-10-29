import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { EvidenceStrip } from "@/components/evidence";
import { PhotoMosaic } from "@/components/gallery";
import { CheckList } from "@/components/site-ui";
import { WorkshopVideo } from "@/components/workshop-video";
import type { Engagement, Photo } from "@/lib/portfolio-data";

/**
 * One initiative told as text beside its photos. Consecutive stories alternate sides
 * (see `.story-list` in styles.css), so pages read as a mix of words and pictures.
 */
export function Story({
  item,
  photos,
  children,
}: {
  item: Engagement;
  photos: Photo[];
  children?: ReactNode;
}) {
  const links = [...(item.link ? [item.link] : []), ...(item.links ?? [])];
  return (
    <article className="story" id={item.id}>
      <div className="story-copy">
        <p className="card-meta">{item.role}</p>
        <h2 className="story-title">{item.organisation}</h2>
        <p className="story-text">{item.text}</p>
        {item.points && <CheckList items={item.points} />}
        {links.length > 0 && (
          <div className="story-links">
            {links.map((link) => (
              <a
                key={link.href}
                className="text-link"
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.label} <ArrowUpRight aria-hidden="true" />
              </a>
            ))}
          </div>
        )}
        {item.evidence && <EvidenceStrip ids={item.evidence} />}
        {children}
      </div>
      <div className="story-media">
        <PhotoMosaic photos={photos} label={`${item.organisation} photos`} />
        {item.video && <WorkshopVideo video={item.video} />}
      </div>
    </article>
  );
}
