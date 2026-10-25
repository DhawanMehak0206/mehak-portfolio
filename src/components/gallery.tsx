import { useState } from "react";
import { ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import type { Photo } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

/** Full-size photo viewer with captions and arrow-key navigation. */
function PhotoLightbox({
  photos,
  label,
  index,
  onIndex,
}: {
  photos: Photo[];
  label: string;
  index: number | null;
  onIndex: (index: number | null) => void;
}) {
  const count = photos.length;
  const current = index === null ? undefined : photos[index];
  const step = (by: number) => index !== null && onIndex((index + by + count) % count);

  return (
    <Dialog open={current !== undefined} onOpenChange={(open) => !open && onIndex(null)}>
      {current && (
        <DialogContent
          className="lightbox"
          onKeyDown={(event) => {
            if (event.key === "ArrowRight") step(1);
            if (event.key === "ArrowLeft") step(-1);
          }}
        >
          <DialogTitle className="sr-only">{label}</DialogTitle>
          <figure className="lightbox-figure">
            <img
              key={current.src}
              src={current.src}
              alt={current.alt}
              width={current.width}
              height={current.height}
            />
            <figcaption className="lightbox-caption">
              <DialogDescription className="lightbox-text">{current.caption}</DialogDescription>
              {count > 1 && (
                <span className="lightbox-count">
                  {(index ?? 0) + 1} / {count}
                </span>
              )}
            </figcaption>
          </figure>
          {count > 1 && (
            <>
              <button
                type="button"
                className="lightbox-nav is-prev"
                onClick={() => step(-1)}
                aria-label="Previous photo"
              >
                <ChevronLeft aria-hidden="true" />
              </button>
              <button
                type="button"
                className="lightbox-nav is-next"
                onClick={() => step(1)}
                aria-label="Next photo"
              >
                <ChevronRight aria-hidden="true" />
              </button>
            </>
          )}
        </DialogContent>
      )}
    </Dialog>
  );
}

/** Square photo tiles that open a full-size lightbox with captions. */
export function PhotoGallery({
  photos,
  label,
  large = false,
  wide = false,
}: {
  photos: Photo[];
  label: string;
  /** Bigger square tiles, three to a row. */
  large?: boolean;
  /** Landscape tiles for screenshots, two to a row. */
  wide?: boolean;
}) {
  const [index, setIndex] = useState<number | null>(null);
  return (
    <>
      <ul
        className={cn("gallery", large && "gallery--large", wide && "gallery--wide")}
        aria-label={label}
      >
        {photos.map((photo, i) => (
          <li key={photo.src} className="gallery-item">
            <button
              type="button"
              className="gallery-tile"
              data-focus={photo.focus}
              data-fit={photo.fit}
              onClick={() => setIndex(i)}
              aria-label={`Enlarge photo: ${photo.caption}`}
            >
              <img
                src={photo.thumb}
                alt=""
                width={photo.width}
                height={photo.height}
                loading="lazy"
                decoding="async"
              />
              <span className="gallery-zoom" aria-hidden="true">
                <Expand />
              </span>
            </button>
            <p className="gallery-caption">{photo.caption}</p>
          </li>
        ))}
      </ul>
      <PhotoLightbox photos={photos} label={label} index={index} onIndex={setIndex} />
    </>
  );
}

/**
 * One large photo with up to two smaller ones beneath it; the last tile shows how many more
 * photos there are. Every tile opens the full set in the lightbox.
 */
export function PhotoMosaic({ photos, label }: { photos: Photo[]; label: string }) {
  const [index, setIndex] = useState<number | null>(null);
  const shown = photos.slice(0, 3);
  const more = photos.length - shown.length;
  return (
    <>
      <ul className={cn("mosaic", `mosaic--${shown.length}`)} aria-label={label}>
        {shown.map((photo, i) => (
          <li key={photo.src} className="mosaic-item">
            <button
              type="button"
              className="mosaic-tile"
              data-focus={photo.focus}
              data-fit={photo.fit}
              onClick={() => setIndex(i)}
              aria-label={`Enlarge photo: ${photo.caption}`}
            >
              <img
                src={i === 0 ? photo.src : photo.thumb}
                alt=""
                width={photo.width}
                height={photo.height}
                loading="lazy"
                decoding="async"
              />
              {i === shown.length - 1 && more > 0 && (
                <span className="mosaic-more" aria-hidden="true">
                  +{more} more
                </span>
              )}
            </button>
          </li>
        ))}
      </ul>
      {more > 0 && (
        <button type="button" className="mosaic-all" onClick={() => setIndex(0)}>
          <Expand aria-hidden="true" />
          View all {photos.length} photos
        </button>
      )}
      <PhotoLightbox photos={photos} label={label} index={index} onIndex={setIndex} />
    </>
  );
}

/** App screenshots shown in phone frames. */
export function PhoneRow({ screens, label }: { screens: Photo[]; label: string }) {
  return (
    <ul className="phone-row" aria-label={label}>
      {screens.map((screen) => (
        <li key={screen.src} className="phone">
          <img
            src={screen.src}
            alt={screen.alt}
            width={screen.width}
            height={screen.height}
            loading="lazy"
            decoding="async"
          />
          <span className="phone-caption">{screen.caption}</span>
        </li>
      ))}
    </ul>
  );
}
