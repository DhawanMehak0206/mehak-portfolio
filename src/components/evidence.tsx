import { useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, FileText } from "lucide-react";
import type { ReactNode } from "react";
import { SectionHead } from "@/components/site-ui";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { evidence, type EvidenceId, type Honour } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

/** Every page of the given documents, in order, so the viewer can step through them. */
function pagesOf(ids: EvidenceId[]) {
  return ids.flatMap((id) => evidence[id].pages.map((_, page) => ({ id, page })));
}

function EvidenceViewer({
  ids,
  start,
  onClose,
}: {
  ids: EvidenceId[];
  start: number;
  onClose: () => void;
}) {
  const steps = pagesOf(ids);
  const [index, setIndex] = useState(start);
  const step = steps[index] ?? steps[0];
  if (!step) return null;
  const doc = evidence[step.id];
  const page = doc.pages[step.page] ?? doc.pages[0];
  if (!page) return null;
  const many = steps.length > 1;
  const go = (by: number) => setIndex((i) => (i + by + steps.length) % steps.length);

  return (
    <Dialog open onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        className="doc-viewer"
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") go(1);
          if (event.key === "ArrowLeft") go(-1);
        }}
      >
        <header className="doc-viewer-head">
          <p className="card-meta">
            {doc.kind}
            {doc.date && ` · ${doc.date}`}
          </p>
          <DialogTitle className="doc-viewer-title">{doc.title}</DialogTitle>
          <p className="doc-viewer-issuer">{doc.issuer}</p>
        </header>
        <div className="doc-viewer-image">
          <img key={page.src} src={page.src} alt={`${doc.title}, page ${step.page + 1}`} />
        </div>
        <footer className="doc-viewer-foot">
          <DialogDescription className="doc-viewer-text">{doc.description}</DialogDescription>
          <div className="doc-viewer-bar">
            <div className="doc-viewer-links">
              <a href={page.src} target="_blank" rel="noreferrer" className="text-link">
                Open full size <ArrowUpRight aria-hidden="true" />
              </a>
              {doc.file && (
                <a href={doc.file.href} target="_blank" rel="noreferrer" className="text-link">
                  {doc.file.label} <ArrowUpRight aria-hidden="true" />
                </a>
              )}
              {doc.link && (
                <a href={doc.link.href} target="_blank" rel="noreferrer" className="text-link">
                  {doc.link.label} <ArrowUpRight aria-hidden="true" />
                </a>
              )}
            </div>
            {many && (
              <div className="doc-viewer-nav">
                <button type="button" onClick={() => go(-1)} aria-label="Previous page">
                  <ChevronLeft aria-hidden="true" />
                </button>
                <span className="doc-viewer-count" aria-live="polite">
                  {doc.pages.length > 1 && `Page ${step.page + 1} of ${doc.pages.length} · `}
                  {ids.indexOf(step.id) + 1} of {ids.length}
                </span>
                <button type="button" onClick={() => go(1)} aria-label="Next page">
                  <ChevronRight aria-hidden="true" />
                </button>
              </div>
            )}
          </div>
        </footer>
      </DialogContent>
    </Dialog>
  );
}

/** What clicking a document does, in words: "Read letter", "View paper" and so on. */
function actionLabel(kind: string) {
  if (/letter/i.test(kind)) return "Read letter";
  if (/email/i.test(kind)) return "View email";
  if (/paper/i.test(kind)) return "View paper";
  if (/certificate|result/i.test(kind)) return "View certificate";
  return "View document";
}

/** A compact card: the document's first page, its title and a link that opens the viewer. */
function EvidenceChip({ id, onOpen }: { id: EvidenceId; onOpen: () => void }) {
  const doc = evidence[id];
  const first = doc.pages[0];
  if (!first) return null;
  return (
    <button type="button" className="evidence-chip" onClick={onOpen}>
      <span className="evidence-chip-thumb">
        <img src={first.thumb} alt="" loading="lazy" decoding="async" />
      </span>
      <span className="evidence-chip-body">
        <span className="evidence-chip-title">{doc.title}</span>
        <span className="evidence-chip-action">
          <FileText aria-hidden="true" />
          {actionLabel(doc.kind)}
          {doc.pages.length > 1 && ` · ${doc.pages.length} pages`}
        </span>
      </span>
    </button>
  );
}

/** Previews of the documents behind an entry, shown inside that entry. */
export function EvidenceStrip({
  ids,
  title = "Supporting documents",
  className,
}: {
  ids: EvidenceId[];
  title?: string;
  className?: string;
}) {
  const [start, setStart] = useState<number | null>(null);
  if (ids.length === 0) return null;
  const steps = pagesOf(ids);
  return (
    <div className={cn("evidence-strip", className)}>
      <p className="evidence-strip-label">{title}</p>
      <ul className="evidence-strip-list">
        {ids.map((id) => (
          <li key={id}>
            <EvidenceChip id={id} onOpen={() => setStart(steps.findIndex((s) => s.id === id))} />
          </li>
        ))}
      </ul>
      {start !== null && <EvidenceViewer ids={ids} start={start} onClose={() => setStart(null)} />}
    </div>
  );
}

/** One document preview, used on award cards. */
export function EvidenceButton({ id, className }: { id: EvidenceId; className?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("evidence-single", className)}>
      <EvidenceChip id={id} onOpen={() => setOpen(true)} />
      {open && <EvidenceViewer ids={[id]} start={0} onClose={() => setOpen(false)} />}
    </div>
  );
}

/** Award cards for one page, each with a link to its certificate where there is one. */
export function HonoursSection({
  id,
  title = "Honours and Awards",
  items,
  white = false,
  children,
}: {
  id: string;
  title?: string;
  items: Honour[];
  white?: boolean;
  children?: ReactNode;
}) {
  return (
    <section className={cn("section", white && "section--white")} aria-labelledby={`${id}-heading`}>
      <div className="container">
        <SectionHead id={`${id}-heading`} title={title}>
          {children}
        </SectionHead>
        <div className="card-flow">
          {items.map((honour) => (
            <article key={honour.title} className="neu-card award-card">
              <h3 className="card-title">{honour.title}</h3>
              <p className="card-meta">{honour.detail}</p>
              <p className="card-text">{honour.text}</p>
              {honour.evidence && <EvidenceButton id={honour.evidence} />}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
