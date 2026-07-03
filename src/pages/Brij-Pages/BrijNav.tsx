import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import brijLogo from "@/assets/brij-logo.png";

type NavLink = {
  label: string;
  to?: string;
  children?: { label: string; href: string; external?: boolean }[];
};

const links: NavLink[] = [
  { label: "Home", to: "/brij" },
  { label: "About Us", to: "/about" },
  {
    label: "Innovation & Incubation",
    to: "https://thebrij.world/incubator/",
    children: [
      {
        label: "THE BRIJ Incubator",
        href: "https://thebrij.world/incubator/",
        external: true,
      },
    ],
  },
  {
    label: "Education & Research",
    to: "/academy/fellowship",
    children: [
      {
        label: "THE BRIJ Cultural Leaders Fellowship",
        href: "/academy/fellowship",
      },
    ],
  },
  {
    label: "Multidisciplinary Experiences",
    children: [
      {
        label: "Serendipity Arts",
        href: "https://serendipityarts.org",
        external: true,
      },
      { label: "Serendipity Arts Festival 2026", href: "https://serendipityartsfestival.com/" },
      // { label: "SAF 2026 — Curators", href: "/saf-2026/curators" },
    ],
  },
  { label: "Our Team", to: "/credits" },
];

const mobileLinks = links;
const desktopLinks = links.filter((l) => l.label !== "Home");

const BrijNav = () => {
  const { pathname } = useLocation();
  const isBrijHome = pathname === "/brij" || pathname === "/about";
  const isSafHome = pathname === "/saf-2026";
  const hideUntilScroll = isBrijHome || isSafHome;
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState<string | null>(null);

  // Use Neue Haas Grotesk (font-body) for nav buttons across all Brij pages.
  const navFont = "font-body font-medium normal-case tracking-[0.02em]";
  const navFontMobile = "font-body font-medium normal-case tracking-[0.02em]";

  useEffect(() => {
    if (!hideUntilScroll) {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [hideUntilScroll]);

  useEffect(() => {
    setMenuOpen(false);
    setMobileSubOpen(null);
  }, [pathname]);

  const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>, to: string) => {
    if (!to.includes("#")) return;
    const [, hash] = to.split("#");
    if (pathname === "/brij") {
      e.preventDefault();
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // On SAF home, the entire header slides up out of view until the user scrolls.
  const headerHidden = isSafHome && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-background border-b border-foreground/10 transition-transform duration-500 ease-out ${
        headerHidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-10 lg:px-14 h-16 md:h-20">
        <Link
          to="/"
          className={`flex items-center transition-opacity duration-300 ${
            scrolled ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          aria-label="THE BRIJ"
        >
          <img
            src={brijLogo}
            alt="THE BRIJ"
            className="h-5 md:h-6 lg:h-7 w-auto"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-5 lg:gap-8">
          {desktopLinks.map((l) =>
            l.children ? (
              <div key={l.label} className="relative group">
                {l.to ? (
                  <Link
                    to={l.to}
                    className={`flex items-center gap-1 ${navFont} text-foreground text-[12px] lg:text-[13px] hover:text-primary transition-colors`}
                  >
                    {l.label}
                    <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                  </Link>
                ) : (
                  <button
                    type="button"
                    className={`flex items-center gap-1 ${navFont} text-foreground text-[12px] lg:text-[13px] hover:text-primary transition-colors`}
                  >
                    {l.label}
                    <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                  </button>
                )}
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-background border border-foreground/10 shadow-lg min-w-[260px] py-2">
                    {l.children.map((c) => (
                      <a
                        key={c.label}
                        href={c.href}
                        target={c.external ? "_blank" : undefined}
                        rel={c.external ? "noopener noreferrer" : undefined}
                        className={`block px-5 py-3 ${navFont} text-foreground text-[12px] hover:text-primary hover:bg-foreground/5 transition-colors`}
                      >
                        {c.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={l.label}
                to={l.to!}
                onClick={(e) => handleAnchor(e, l.to!)}
                className={`${navFont} text-foreground text-[12px] lg:text-[13px] hover:text-primary transition-colors`}
              >
                {l.label}
              </Link>
            ),
          )}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden relative z-50 p-1 text-foreground"
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">
            {menuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={22} />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={22} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-background border-t border-foreground/10"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {mobileLinks.map((l, i) => (
                <motion.div
                  key={l.label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.25 }}
                >
                  {l.children ? (
                    <div>
                      <button
                        type="button"
                        onClick={() =>
                          setMobileSubOpen(
                            mobileSubOpen === l.label ? null : l.label,
                          )
                        }
                        className={`flex items-center gap-2 ${navFontMobile} text-foreground text-[15px] hover:text-primary transition-colors`}
                      >
                        {l.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${mobileSubOpen === l.label ? "rotate-180" : ""}`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileSubOpen === l.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden mt-3 pl-4 flex flex-col gap-3 border-l border-foreground/15"
                          >
                            {l.children.map((c) => (
                              <a
                                key={c.label}
                                href={c.href}
                                target={c.external ? "_blank" : undefined}
                                rel={
                                  c.external ? "noopener noreferrer" : undefined
                                }
                                onClick={() => setMenuOpen(false)}
                                className={`${navFontMobile} text-foreground text-[13px] hover:text-primary transition-colors`}
                              >
                                {c.label}
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={l.to!}
                      onClick={(e) => {
                        handleAnchor(e, l.to!);
                        setMenuOpen(false);
                      }}
                      className={`${navFontMobile} text-foreground text-[15px] hover:text-primary transition-colors`}
                    >
                      {l.label}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default BrijNav;
