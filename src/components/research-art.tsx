const NOTE_NAMES = ["C", "C♯", "D", "E♭", "E", "F", "F♯", "G", "A♭", "A", "B♭", "B"];

/**
 * A Tonnetz, the lattice behind the music research: neighbours along a row are a fifth apart,
 * and the diagonals are major and minor thirds. The C major and C minor triads are highlighted.
 */
export function TonnetzArt({ decorative = false }: { decorative?: boolean }) {
  const dx = 40;
  const dy = 34.64;
  const point = (row: number, col: number) => ({
    x: 30 + col * dx + (row % 2 ? dx / 2 : 0),
    y: 31 + row * dy,
  });
  // +7 semitones across a row, +3 to the lower-right neighbour and -4 to the lower-left.
  const pitch = (row: number, col: number) =>
    (((4 + (7 * (2 * col + (row % 2)) - row) / 2) % 12) + 12) % 12;

  const lines: [number, number, number, number][] = [];
  const nodes: { x: number; y: number; name: string }[] = [];
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 7; col++) {
      const p = point(row, col);
      nodes.push({ ...p, name: NOTE_NAMES[pitch(row, col)] ?? "" });
      if (col < 6) lines.push([p.x, p.y, point(row, col + 1).x, p.y]);
      if (row < 4) {
        const [left, right] = row % 2 ? [col, col + 1] : [col - 1, col];
        if (left >= 0) lines.push([p.x, p.y, point(row + 1, left).x, point(row + 1, left).y]);
        if (right < 7) lines.push([p.x, p.y, point(row + 1, right).x, point(row + 1, right).y]);
      }
    }
  }
  const c = point(2, 3);
  const g = point(2, 4);
  const e = point(1, 3);
  const eFlat = point(3, 3);
  const accents = new Set([c, g, e].map((n) => `${n.x}-${n.y}`));

  return (
    <svg
      className="tonnetz"
      viewBox="0 0 320 200"
      {...(decorative
        ? { "aria-hidden": true }
        : { role: "img", "aria-label": "Tonnetz with the C major and C minor triads highlighted" })}
    >
      <polygon
        className="art-fill-soft"
        points={`${c.x},${c.y} ${g.x},${g.y} ${eFlat.x},${eFlat.y}`}
      />
      <polygon className="art-fill" points={`${c.x},${c.y} ${g.x},${g.y} ${e.x},${e.y}`} />
      <g className="art-line">
        {lines.map(([x1, y1, x2, y2]) => (
          <line key={`${x1}-${y1}-${x2}-${y2}`} x1={x1} y1={y1} x2={x2} y2={y2} />
        ))}
      </g>
      {nodes.map((n) => {
        const accent = accents.has(`${n.x}-${n.y}`);
        return (
          <g key={`${n.x}-${n.y}`} className={accent ? "art-node is-accent" : "art-node"}>
            <circle cx={n.x} cy={n.y} r={9.5} />
            <text x={n.x} y={n.y} dy="0.35em" textAnchor="middle">
              {n.name}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
