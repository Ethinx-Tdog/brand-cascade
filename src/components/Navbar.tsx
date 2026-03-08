import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ExternalLink, Video, Trophy, BarChart3, Compass, GraduationCap } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const scrollToForm = () => {
  document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
};

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#tiers", label: "Pricing" },
  { href: "#calculator", label: "Revenue" },
  { href: "#faq", label: "FAQ" },
];

const ecosystemLinks = [
  { icon: <Video className="h-4 w-4" />, label: "AdEngine Platform", href: "https://pro-clip-gen.lovable.app" },
  { icon: <Trophy className="h-4 w-4" />, label: "Case Studies", href: "https://ethinx-win-showcase.lovable.app" },
  { icon: <BarChart3 className="h-4 w-4" />, label: "Creator System", href: "https://creator-blueprint-builder.lovable.app" },
  { icon: <Compass className="h-4 w-4" />, label: "Free Audit", href: "https://creator-compass-dash.lovable.app" },
  { icon: <GraduationCap className="h-4 w-4" />, label: "8-Week Course", href: "https://biz-creator-path.lovable.app" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [ecoOpen, setEcoOpen] = useState(false);
  const ecoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ecoRef.current && !ecoRef.current.contains(e.target as Node)) setEcoOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="text-xl font-bold tracking-tight">
          ETHINX<span className="text-primary">.</span>
        </div>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-foreground">{l.label}</a>
          ))}
          {/* Ecosystem dropdown */}
          <div ref={ecoRef} className="relative">
            <button
              onClick={() => setEcoOpen(!ecoOpen)}
              className="flex items-center gap-1 transition-colors hover:text-foreground"
            >
              Ecosystem <ChevronDown className={`h-3.5 w-3.5 transition-transform ${ecoOpen ? "rotate-180" : ""}`} />
            </button>
            {ecoOpen && (
              <div className="absolute right-0 top-full mt-2 w-56 rounded-lg border border-border bg-card p-1.5 shadow-xl">
                {ecosystemLinks.map((app) => (
                  <a
                    key={app.label}
                    href={app.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-primary/10 hover:text-foreground"
                  >
                    <span className="text-primary">{app.icon}</span>
                    {app.label}
                    <ExternalLink className="ml-auto h-3 w-3 opacity-40" />
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button variant="neon" size="sm" onClick={scrollToForm} className="hidden sm:inline-flex">Apply Now</Button>
          <button
            onClick={() => setOpen(!open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-background px-4 pb-4 pt-2 md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => handleNav(l.href)}
                className="rounded-lg px-3 py-2.5 text-left text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {l.label}
              </button>
            ))}
            <p className="mt-3 px-3 text-xs font-medium uppercase tracking-wider text-primary">Ecosystem</p>
            {ecosystemLinks.map((app) => (
              <a
                key={app.label}
                href={app.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-left text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <span className="text-primary">{app.icon}</span>
                {app.label}
              </a>
            ))}
            <Button variant="neon" size="sm" className="mt-2 w-full sm:hidden" onClick={() => { setOpen(false); scrollToForm(); }}>
              Apply Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
