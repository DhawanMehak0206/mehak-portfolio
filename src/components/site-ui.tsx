import type { ReactNode } from "react";
import {
  Award,
  Brain,
  Calculator,
  ChartLine,
  Check,
  Code2,
  Compass,
  Cpu,
  Flag,
  FlaskConical,
  Globe,
  GraduationCap,
  Handshake,
  HeartHandshake,
  House,
  Landmark,
  Languages,
  Lightbulb,
  Medal,
  Mic,
  Music,
  PenLine,
  Rocket,
  Scale,
  School,
  Sigma,
  Sparkles,
  Star,
  Trophy,
  Users,
  Waves,
  type LucideIcon,
} from "lucide-react";
import type { IconName, Stat } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

const icons: Record<IconName, LucideIcon> = {
  award: Award,
  brain: Brain,
  calculator: Calculator,
  chart: ChartLine,
  code: Code2,
  compass: Compass,
  cpu: Cpu,
  flag: Flag,
  flask: FlaskConical,
  globe: Globe,
  graduation: GraduationCap,
  handshake: Handshake,
  heart: HeartHandshake,
  house: House,
  landmark: Landmark,
  languages: Languages,
  lightbulb: Lightbulb,
  medal: Medal,
  mic: Mic,
  music: Music,
  pen: PenLine,
  rocket: Rocket,
  scale: Scale,
  school: School,
  sigma: Sigma,
  sparkles: Sparkles,
  star: Star,
  trophy: Trophy,
  users: Users,
  waves: Waves,
};

export function Icon({ name, className }: { name: IconName; className?: string }) {
  const Glyph = icons[name];
  return <Glyph className={className} aria-hidden="true" />;
}

export function IconBadge({ name, small = false }: { name: IconName; small?: boolean }) {
  return (
    <span className={cn("icon-badge", small && "icon-badge--sm")}>
      <Icon name={name} />
    </span>
  );
}

/** Centred title and introduction at the top of each inner page. */
export function PageHeader({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <header className="page-header container reveal">
      <h1 className="page-title">{title}</h1>
      <span className="title-rule" aria-hidden="true" />
      {children && <div className="page-intro">{children}</div>}
    </header>
  );
}

export function SectionHead({
  id,
  kicker,
  title,
  children,
}: {
  id: string;
  kicker: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="section-head">
      <p className="section-kicker">{kicker}</p>
      <h2 className="section-title" id={id}>
        {title}
      </h2>
      {children && <div className="section-lead">{children}</div>}
    </div>
  );
}

export function CheckList({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={cn("check-list", className)}>
      {items.map((item) => (
        <li key={item}>
          <Check aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function ChipList({ items, label }: { items: string[]; label?: string }) {
  return (
    <ul className="chip-list" aria-label={label}>
      {items.map((item) => (
        <li key={item} className="chip">
          {item}
        </li>
      ))}
    </ul>
  );
}

/** Raised card on the light surface, with an optional icon badge. */
export function NeuCard({
  id,
  icon,
  title,
  subtitle,
  meta,
  className,
  children,
}: {
  id?: string;
  icon?: IconName;
  title: string;
  subtitle?: string;
  meta?: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <article className={cn("neu-card", className)} id={id}>
      {icon && <IconBadge name={icon} />}
      <h3 className="card-title">{title}</h3>
      {subtitle && <p className="card-subtitle">{subtitle}</p>}
      {meta && <p className="card-meta">{meta}</p>}
      {children}
    </article>
  );
}

/** Solid blue card used for experience, community and music entries. */
export function BlueCard({
  id,
  title,
  meta,
  className,
  children,
}: {
  id?: string;
  title: string;
  meta?: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <article className={cn("blue-card", className)} id={id}>
      {meta && <p className="blue-card-meta">{meta}</p>}
      <h3 className="blue-card-title">{title}</h3>
      {children}
    </article>
  );
}

/** Full-width blue band. */
export function Band({
  id,
  labelledBy,
  className,
  children,
}: {
  id?: string;
  labelledBy: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section className={cn("band", className)} id={id} aria-labelledby={labelledBy}>
      <div className="container">{children}</div>
    </section>
  );
}

export function BandHead({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="band-head">
      <h2 className="band-title" id={id}>
        {title}
      </h2>
      <span className="band-rule" aria-hidden="true" />
      {children && <div className="band-lead">{children}</div>}
    </div>
  );
}

/** Figures on a blue band; the label comes first in the markup for screen readers. */
export function BandStats({ items, label }: { items: Stat[]; label: string }) {
  return (
    <dl
      className={cn("band-stats", items.length % 3 === 0 ? "band-stats--3" : "band-stats--4")}
      aria-label={label}
    >
      {items.map((item) => (
        <div key={`${item.value}-${item.label}`} className="band-stat">
          <dt>{item.label}</dt>
          <dd className="band-stat-value">{item.value}</dd>
          {item.note && <dd className="band-stat-note">{item.note}</dd>}
        </div>
      ))}
    </dl>
  );
}
