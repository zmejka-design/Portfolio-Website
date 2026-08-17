import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl">
        <div className="shell grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-4">
          <Link to="/" className="min-w-0 font-display text-2xl font-extrabold tracking-[0.18em]">
            ZMEJKA
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-sm tracking-[0.14em] uppercase text-muted-foreground transition-colors hover:text-foreground [&.active]:text-foreground"
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="shrink-0 rounded-full border border-border px-4 py-2 text-xs tracking-[0.2em] uppercase md:hidden"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
        {open && (
          <nav className="shell flex flex-col gap-4 border-t border-border py-6 md:hidden">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="font-display text-4xl font-extrabold uppercase"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border py-10">
        <div className="shell flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Mantas Zmejauskas — ZMEJKA</span>
          <span>Vilnius, Lithuania · Graphic &amp; Motion Design</span>
        </div>
      </footer>
    </div>
  );
}
