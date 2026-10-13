import { ArrowUpRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { Project, ProjectVisual as Visual } from "@/lib/portfolio-data";

// A Tonnetz: the triangular lattice of pitch relationships used in the music research.
function TonnetzArt() {
  const dx = 40;
  const dy = 34.64;
  const point = (row: number, col: number) => ({
    x: 30 + col * dx + (row % 2 ? dx / 2 : 0),
    y: 31 + row * dy,
  });
  const lines: [number, number, number, number][] = [];
  const nodes: { x: number; y: number }[] = [];
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 7; col++) {
      const p = point(row, col);
      nodes.push(p);
      if (col < 6) lines.push([p.x, p.y, point(row, col + 1).x, p.y]);
      if (row < 4) {
        const [left, right] = row % 2 ? [col, col + 1] : [col - 1, col];
        if (left >= 0) lines.push([p.x, p.y, point(row + 1, left).x, point(row + 1, left).y]);
        if (right < 7) lines.push([p.x, p.y, point(row + 1, right).x, point(row + 1, right).y]);
      }
    }
  }
  const a = point(2, 3);
  const b = point(2, 4);
  const up = point(1, 3);
  const down = point(3, 3);
  return (
    <svg viewBox="0 0 320 200" aria-hidden="true">
      <g className="art-line">
        {lines.map(([x1, y1, x2, y2]) => (
          <line key={`${x1}-${y1}-${x2}-${y2}`} x1={x1} y1={y1} x2={x2} y2={y2} />
        ))}
      </g>
      <polygon className="art-fill" points={`${a.x},${a.y} ${b.x},${b.y} ${up.x},${up.y}`} />
      <polygon
        className="art-fill-soft"
        points={`${a.x},${a.y} ${b.x},${b.y} ${down.x},${down.y}`}
      />
      {nodes.map((n) => (
        <circle key={`${n.x}-${n.y}`} className="art-node" cx={n.x} cy={n.y} r={2.2} />
      ))}
      {[a, b, up].map((n) => (
        <circle key={`accent-${n.x}-${n.y}`} className="art-node-accent" cx={n.x} cy={n.y} r={4} />
      ))}
    </svg>
  );
}

function SolarArt() {
  const rays = Array.from({ length: 8 }, (_, i) => (i * Math.PI) / 4);
  return (
    <svg viewBox="0 0 320 200" aria-hidden="true">
      <g className="art-stroke">
        <circle cx="78" cy="56" r="17" />
        {rays.map((angle) => (
          <line
            key={angle}
            x1={78 + Math.cos(angle) * 25}
            y1={56 + Math.sin(angle) * 25}
            x2={78 + Math.cos(angle) * 33}
            y2={56 + Math.sin(angle) * 33}
          />
        ))}
        <polygon points="196,58 262,58 276,90 210,90" />
        <path d="M218 58 L230 90 M240 58 L252 90 M203 74 L269 74" className="art-line" />
        <line x1="240" y1="90" x2="240" y2="124" />
        <line x1="20" y1="124" x2="300" y2="124" />
        <path d="M150 124 V170" />
        <rect x="142" y="100" width="16" height="12" rx="2" />
        <line x1="150" y1="112" x2="150" y2="124" />
        <path d="M138 92 a17 17 0 0 1 24 0 M132 85 a26 26 0 0 1 36 0" className="art-accent" />
        <path d="M58 124 v-16 m0 6 q-9 -2 -11 -11 m11 11 q9 -2 11 -11" />
        <path d="M96 124 v-12 m0 5 q-7 -2 -9 -9" />
        <path d="M282 124 v-14 m0 5 q8 -2 10 -10" />
      </g>
      <g className="art-line">
        <path d="M20 144 Q60 138 100 144 T180 144 T260 144 T300 142" />
        <path d="M20 162 Q70 156 120 162 T220 162 T300 160" />
        <path d="M20 180 Q60 175 110 180 T210 180 T300 178" />
      </g>
      <circle cx="150" cy="172" r="3" className="art-node-accent" />
    </svg>
  );
}

export function ProjectVisual({ visual }: { visual: Visual }) {
  if (visual.kind === "art") {
    return (
      <div className="project-visual is-art">
        {visual.art === "tonnetz" ? <TonnetzArt /> : <SolarArt />}
      </div>
    );
  }
  return (
    <div className={`project-visual${visual.kind === "screen" ? " is-screen" : ""}`}>
      <img src={visual.src} alt={visual.alt} loading="lazy" />
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Dialog>
      <article className="project-card">
        <ProjectVisual visual={project.visual} />
        <p className="project-category">{project.category}</p>
        <h3 className="project-title">
          <DialogTrigger className="project-trigger">
            {project.title}
            <ArrowUpRight aria-hidden="true" />
          </DialogTrigger>
        </h3>
        <p className="project-summary">{project.summary}</p>
        <p className="project-role">{project.role}</p>
      </article>
      <DialogContent className="project-dialog max-w-2xl gap-0 p-0">
        <ProjectVisual visual={project.visual} />
        <div className="project-dialog-body">
          <p className="eyebrow">{project.category}</p>
          <DialogTitle className="project-dialog-title">{project.title}</DialogTitle>
          <DialogDescription className="project-dialog-role">{project.role}</DialogDescription>
          {project.description.map((paragraph) => (
            <p key={paragraph} className="project-dialog-text">
              {paragraph}
            </p>
          ))}
          <h4 className="eyebrow">Outcomes</h4>
          <ul className="outcome-list">
            {project.outcomes.map((outcome) => (
              <li key={outcome}>{outcome}</li>
            ))}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
}
