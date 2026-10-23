import { useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, FileText, Files } from "lucide-react";
import type { ReactNode } from "react";
import { SectionHead } from "@/components/site-ui";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { evidence, type EvidenceId } from "@/lib/portfolio-data";
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

/** Thumbnail cards for certificates and letters; each opens the viewer. */
export function EvidenceGrid({ ids, label }: { ids: EvidenceId[]; label: string }) {
  const [start, setStart] = useState<number | null>(null);
  const steps = pagesOf(ids);
  return (
    <>
      <ul className="evidence-grid" aria-label={label}>
        {ids.map((id) => {
          const doc = evidence[id];
          const first = doc.pages[0];
          if (!first) return null;
          return (
            <li key={id}>
              <button
                type="button"
                className="evidence-card"
                onClick={() => setStart(steps.findIndex((s) => s.id === id))}
                aria-label={`View ${doc.title}`}
              >
                <span className="evidence-thumb">
                  <img src={first.thumb} alt="" loading="lazy" decoding="async" />
                  {doc.pages.length > 1 && (
                    <span className="evidence-pages">
                      <Files aria-hidden="true" />
                      {doc.pages.length} pages
                    </span>
                  )}
                </span>
                <span className="evidence-body">
                  <span className="card-meta">{doc.kind}</span>
                  <span className="evidence-title">{doc.title}</span>
                  <span className="evidence-issuer">
                    {doc.issuer}
                    {doc.date && ` · ${doc.date}`}
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>
      {start !== null && <EvidenceViewer ids={ids} start={start} onClose={() => setStart(null)} />}
    </>
  );
}

/** A small link that opens one document, used on award cards. */
export function EvidenceButton({ id, className }: { id: EvidenceId; className?: string }) {
  const [open, setOpen] = useState(false);
  const doc = evidence[id];
  const label = /letter/i.test(doc.kind)
    ? "Read letter"
    : /email/i.test(doc.kind)
      ? "View email"
      : "View certificate";
  return (
    <>
      <button
        type="button"
        className={cn("evidence-button", className)}
        onClick={() => setOpen(true)}
      >
        <FileText aria-hidden="true" />
        {label}
        {doc.pages.length > 1 && <span className="evidence-button-count">{doc.pages.length}</span>}
      </button>
      {open && <EvidenceViewer ids={[id]} start={0} onClose={() => setOpen(false)} />}
    </>
  );
}

/** A page section listing documents under a heading. */
export function EvidenceSection({
  id,
  title,
  ids,
  white = false,
  children,
}: {
  id: string;
  title: string;
  ids: EvidenceId[];
  white?: boolean;
  children?: ReactNode;
}) {
  return (
    <section className={cn("section", white && "section--white")} aria-labelledby={`${id}-heading`}>
      <div className="container">
        <SectionHead id={`${id}-heading`} title={title}>
          {children}
        </SectionHead>
        <EvidenceGrid ids={ids} label={title} />
      </div>
    </section>
  );
}
