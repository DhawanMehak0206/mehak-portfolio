import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUp, ArrowUpRight, Menu } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { profile } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

const navigation = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/education", label: "Education" },
  { to: "/research", label: "Research" },
  { to: "/experience", label: "Experience" },
  { to: "/community", label: "Community" },
  { to: "/leadership", label: "Leadership" },
  { to: "/music", label: "Music & Performance" },
  { to: "/media", label: "Media" },
] as const;

function Logo() {
  return (
    <Link to="/" className="logo">
      {profile.firstName} <span>{profile.lastName}</span>
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Logo />
        <nav className="main-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="nav-link"
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link to="/contact" className="btn btn--primary btn--sm header-cta">
          Contact me
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <button type="button" className="menu-button" aria-label="Open menu">
              <Menu aria-hidden="true" />
            </button>
          </SheetTrigger>
          <SheetContent className="mobile-sheet">
            <SheetTitle className="logo">
              {profile.firstName} <span>{profile.lastName}</span>
            </SheetTitle>
            <nav className="mobile-nav" aria-label="Mobile navigation">
              {navigation.map((item) => (
                <SheetClose asChild key={item.to}>
                  <Link to={item.to} activeOptions={{ exact: item.to === "/" }}>
                    {item.label}
                  </Link>
                </SheetClose>
              ))}
            </nav>
            <div className="mobile-sheet-actions">
              <SheetClose asChild>
                <Link to="/contact" className="btn btn--primary">
                  Contact me
                </Link>
              </SheetClose>
              <ResumeLink variant="neu" />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

/** Opens the resume in a new tab; renders nothing until `profile.resumeUrl` is set. */
export function ResumeLink({
  variant = "neu",
  className,
}: {
  variant?: "primary" | "neu" | "light" | "ghost";
  className?: string;
}) {
  if (!profile.resumeUrl) return null;
  return (
    <a
      className={cn("btn", `btn--${variant}`, className)}
      href={profile.resumeUrl}
      target="_blank"
      rel="noreferrer"
    >
      Resume <ArrowUpRight aria-hidden="true" />
    </a>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <Logo />
          <p>
            Student at {profile.school}, {profile.city}, working across technology, research and
            social impact.
          </p>
        </div>
        <nav className="footer-nav" aria-label="Footer navigation">
          {navigation.slice(1).map((item) => (
            <Link key={item.to} to={item.to}>
              {item.label}
            </Link>
          ))}
          <Link to="/contact">Contact</Link>
        </nav>
        <div className="footer-cta">
          <ResumeLink />
        </div>
      </div>
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </span>
        <span>{profile.location}</span>
      </div>
    </footer>
  );
}

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const update = () => setVisible(window.scrollY > 640);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <button
      type="button"
      className="to-top"
      data-visible={visible}
      aria-label="Back to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      onClick={() => {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
      }}
    >
      <ArrowUp aria-hidden="true" />
    </button>
  );
}
