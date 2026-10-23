import { ArrowUpRight, Newspaper, Play } from "lucide-react";
import { SectionHead } from "@/components/site-ui";
import { media, type MediaItem } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

function MediaCard({ item }: { item: MediaItem }) {
  const action = item.kind === "Video" ? "Watch on YouTube" : "Read the article";
  return (
    <a className="media-card" href={item.href} target="_blank" rel="noreferrer">
      <span className={cn("media-visual", item.image ? "is-video" : "is-article")}>
        {item.image ? (
          <>
            <img
              src={item.image.thumb}
              alt={item.image.alt}
              width={item.image.width}
              height={item.image.height}
              loading="lazy"
              decoding="async"
            />
            <span className="media-play" aria-hidden="true">
              <Play />
            </span>
          </>
        ) : (
          <Newspaper aria-hidden="true" />
        )}
      </span>
      <span className="media-body">
        <span className="card-meta">
          {item.outlet} · {item.date}
        </span>
        <span className="media-title">{item.title}</span>
        <span className="media-text">{item.text}</span>
        <span className="media-action">
          {action} <ArrowUpRight aria-hidden="true" />
        </span>
      </span>
    </a>
  );
}

/** Press and video coverage, linking out to the original. */
export function MediaSection({ white = false }: { white?: boolean }) {
  return (
    <section className={cn("section", white && "section--white")} aria-labelledby="media-heading">
      <div className="container">
        <SectionHead id="media-heading" title="In the Media" />
        <div className="media-grid">
          {media.map((item) => (
            <MediaCard key={item.href} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
