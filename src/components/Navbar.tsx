import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logoFull from "@/assets/logo-full.png";

const navLinks = [
  { label: "Services", to: "/services" },
  { label: "Pricing", to: "/pricing" },
  { label: "Work", to: "/work" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-4">
      <nav
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-2xl border transition-all duration-300",
          scrolled
            ? "h-16 border-navy/10 bg-white/80 px-4 shadow-lg shadow-navy/5 backdrop-blur-xl sm:px-6"
            : "h-20 border-transparent bg-transparent px-4 sm:px-6"
        )}
        aria-label="Main navigation"
      >
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <img src={logoFull} alt="MindSynk Technology" className="h-8 w-auto sm:h-9" />
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "group relative block rounded-full px-4 py-2 text-sm font-medium text-navy/70 transition-colors hover:text-navy",
                    isActive && "text-navy"
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    <span
                      className={cn(
                        "absolute inset-0 rounded-full bg-navy/5 opacity-0 transition-opacity duration-200 group-hover:opacity-100",
                        isActive && "bg-orange/10 opacity-100 group-hover:opacity-100"
                      )}
                    />
                    <span className="relative">{link.label}</span>
                    {isActive && (
                      <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-orange" />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden items-center md:flex">
          <Link
            to="/contact"
            className={cn(buttonVariants({ variant: "solid", size: "sm" }), "shadow-sm shadow-orange/30")}
          >
            Start a Project
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full p-2 text-navy transition-colors hover:bg-navy/5 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={cn(
          "mx-auto grid max-w-6xl overflow-hidden transition-all duration-300 ease-out md:hidden",
          open ? "mt-2 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden rounded-2xl border border-navy/10 bg-white/95 px-4 py-4 shadow-lg shadow-navy/5 backdrop-blur-xl">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "block rounded-xl px-3 py-2.5 text-base font-medium text-navy/70 transition-colors",
                      isActive ? "bg-orange/10 text-navy" : "hover:bg-navy/5 hover:text-navy"
                    )
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-2">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className={cn(buttonVariants({ variant: "solid", size: "sm" }), "w-full")}
              >
                Start a Project
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
