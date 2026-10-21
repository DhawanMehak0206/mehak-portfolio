import { useState } from "react";
import { ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import type { Photo } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

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
  const count = photos.length;
  const current = index === null ? undefined : photos[index];
  const step = (by: number) =>
    setIndex((value) => (value === null ? value : (value + by + count) % count));

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

      <Dialog open={current !== undefined} onOpenChange={(open) => !open && setIndex(null)}>
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
