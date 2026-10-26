import { ArrowUpRight, Newspaper, Play } from "lucide-react";
import { media, type MediaItem } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

function MediaCard({ item }: { item: MediaItem }) {
  const action = item.kind === "Video" ? "Watch on YouTube" : "Read the article";
  return (
    <a className="media-card" href={item.href} target="_blank" rel="noreferrer">
      <span className={cn("media-visual", item.kind === "Video" ? "is-video" : "is-article")}>
        {item.image ? (
          <>
            <img className="media-backdrop" src={item.image.thumb} alt="" aria-hidden="true" />
            <img
              src={item.image.thumb}
              alt={item.image.alt}
              width={item.image.width}
              height={item.image.height}
              loading="lazy"
              decoding="async"
            />
            {item.kind === "Video" && (
              <span className="media-play" aria-hidden="true">
                <Play />
              </span>
            )}
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
export function MediaGrid() {
  return (
    <div className="media-grid">
      {media.map((item) => (
        <MediaCard key={item.href} item={item} />
      ))}
    </div>
  );
}
