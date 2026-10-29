import { useState } from "react";
import { Play } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { VideoClip } from "@/lib/portfolio-data";

/** Mount the player only while its dialog is open, so closing also stops playback. */
export function WorkshopVideo({ video }: { video: VideoClip }) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button type="button" className="mosaic-all workshop-video-trigger">
          <Play aria-hidden="true" />
          {video.title}
        </button>
      </DialogTrigger>
      {open && (
        <DialogContent className="lightbox">
          <DialogTitle className="sr-only">{video.title}</DialogTitle>
          <figure className="lightbox-figure">
            <video
              className="lightbox-video"
              controls
              playsInline
              preload="metadata"
              poster={video.poster.src}
              width={video.width}
              height={video.height}
              aria-label={video.title}
            >
              <source src={video.src} type="video/mp4" />
              Your browser does not support video playback.
              <a href={video.src}>Open the workshop video</a>
            </video>
            <figcaption className="lightbox-caption">
              <DialogDescription className="lightbox-text">{video.caption}</DialogDescription>
            </figcaption>
          </figure>
        </DialogContent>
      )}
    </Dialog>
  );
}
