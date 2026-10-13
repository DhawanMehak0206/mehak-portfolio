import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Download, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import portfolio from "@/assets/portfolio.pdf.asset.json";
import { profile } from "@/lib/portfolio-data";

const navigation = [
  { to: "/about", label: "About" },
  { to: "/work", label: "Projects" },
  { to: "/research", label: "Research" },
  { to: "/music", label: "Music" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-width site-header-inner">
        <Link to="/" className="wordmark" aria-label="Mehak, home">
          Mehak
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link key={item.to} to={item.to} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              className="mobile-menu-button"
              variant="ghost"
              size="icon"
              aria-label="Open menu"
            >
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent className="mobile-sheet">
            <SheetTitle className="wordmark">Mehak</SheetTitle>
            <nav className="mobile-nav" aria-label="Mobile navigation">
              <SheetClose asChild>
                <Link to="/" activeOptions={{ exact: true }}>
                  Home
                </Link>
              </SheetClose>
              {navigation.map((item) => (
                <SheetClose asChild key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </SheetClose>
              ))}
            </nav>
            <PortfolioDownload />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

export function PortfolioDownload({
  variant = "outline",
  className,
}: {
  variant?: "default" | "outline";
  className?: string;
}) {
  return (
    <Button asChild variant={variant} size="lg" className={className}>
      <a href={portfolio.url} target="_blank" rel="noreferrer" download="Mehak-Portfolio.pdf">
        Download portfolio <Download />
      </a>
    </Button>
  );
}

export function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <header className="page-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="page-title">{title}</h1>
      {children && <div className="page-description">{children}</div>}
    </header>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  action,
}: {
  eyebrow: string;
  title: string;
  action?: ReactNode;
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="section-title">{title}</h2>
      </div>
      {action}
    </div>
  );
}

export function CvSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="cv-section" aria-labelledby={`${id}-heading`}>
      <h2 id={`${id}-heading`} className="cv-heading">
        {title}
      </h2>
      <div className="cv-body">{children}</div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-width footer-grid">
        <div>
          <Link to="/" className="footer-brand">
            Mehak
          </Link>
          <p>
            Student at {profile.school}, Dubai. Working across technology, research and social
            impact.
          </p>
        </div>
        <nav className="footer-nav" aria-label="Footer navigation">
          {navigation.map((item) => (
            <Link key={item.to} to={item.to}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="footer-actions">
          <PortfolioDownload />
        </div>
      </div>
      <div className="site-width footer-base">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>{profile.location}</span>
      </div>
    </footer>
  );
}
