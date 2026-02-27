"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const DARK_TEAL = "#1A4A52";

const navItems = [
  { label: "Concept", href: "/#concept" },
  { label: "Instructor", href: "/instructor" },
  { label: "Price", href: "/price" },
  { label: "Flow", href: "/flow" },
  { label: "Contact", href: "/contact" },
];

const courseDropdown = [
  { label: "中高生向けコース", href: "/courses/students" },
  { label: "大人向けコース", href: "/courses/adults" },
];

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(!isHome);
  const [menuOpen, setMenuOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }
    setScrolled(window.scrollY > 60);
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const textColor = scrolled ? DARK_TEAL : "#ffffff";

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? "#F7F6F2" : "transparent",
        borderBottom: scrolled ? "1px solid #EAE6DF" : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="tracking-widest font-light transition-opacity duration-300 hover:opacity-70 text-lg"
          style={{
            fontFamily: "'Georgia', 'Times New Roman', serif",
            color: textColor,
            letterSpacing: "0.12em",
          }}
        >
          Owl English School
        </Link>

        {/* Nav Links (desktop) */}
        <nav className="hidden lg:flex items-center gap-9">
          {/* Concept */}
          {navItems.slice(0, 1).map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-xs tracking-widest uppercase transition-all duration-300"
              style={{
                color: scrolled ? "#4A4A4A" : "#ffffff",
                letterSpacing: "0.18em",
                borderBottom: "1px solid transparent",
                paddingBottom: "2px",
              }}
            >
              {item.label}
            </Link>
          ))}

          {/* Courses dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setCoursesOpen(true)}
            onMouseLeave={() => setCoursesOpen(false)}
          >
            <button
              className="text-xs tracking-widest uppercase transition-all duration-300 flex flex-col items-center gap-0 border-0 bg-transparent cursor-pointer p-0"
              style={{
                color: pathname.startsWith("/courses")
                  ? DARK_TEAL
                  : scrolled ? "#4A4A4A" : "#ffffff",
                fontWeight: pathname.startsWith("/courses") ? 600 : 400,
                letterSpacing: "0.18em",
              }}
            >
              <span className="flex items-center gap-1 pb-0.5">
                Courses
                <svg
                  width="8" height="5" viewBox="0 0 8 5" fill="none"
                  style={{
                    transition: "transform 0.2s",
                    transform: coursesOpen ? "rotate(180deg)" : "rotate(0deg)",
                    opacity: 0.6,
                  }}
                >
                  <path d="M1 1l3 3 3-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              </span>
              <span
                style={{
                  display: "block",
                  height: "1px",
                  width: "100%",
                  backgroundColor: pathname.startsWith("/courses") ? DARK_TEAL : "transparent",
                }}
              />
            </button>
            {coursesOpen && (
              <div
                className="absolute top-full left-1/2 pt-3"
                style={{ transform: "translateX(-50%)", zIndex: 100, minWidth: "180px" }}
              >
                <div style={{ backgroundColor: "#F7F6F2", border: "1px solid #EAE6DF", boxShadow: "0 8px 32px rgba(0,0,0,0.08)" }}>
                  {courseDropdown.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      className="block px-5 py-3.5 text-xs tracking-widest transition-all duration-200"
                      style={{
                        fontFamily: "'Noto Sans JP', sans-serif",
                        color: pathname === c.href ? DARK_TEAL : "#4A4A4A",
                        fontWeight: pathname === c.href ? 600 : 400,
                        letterSpacing: "0.08em",
                        borderBottom: "1px solid #EAE6DF",
                        whiteSpace: "nowrap",
                      }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#EEF2F3"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent"; }}
                      onClick={() => setCoursesOpen(false)}
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Remaining nav items */}
          {navItems.slice(1).map((item) => {
            const isActive =
              item.href.startsWith("/") &&
              !item.href.includes("#") &&
              pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className="text-xs tracking-widest uppercase transition-all duration-300"
                style={{
                  color: isActive ? DARK_TEAL : scrolled ? "#4A4A4A" : "#ffffff",
                  fontWeight: isActive ? 600 : 400,
                  letterSpacing: "0.18em",
                  borderBottom: isActive ? `1px solid ${DARK_TEAL}` : "1px solid transparent",
                  paddingBottom: "2px",
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA Ghost Button (desktop) */}
        <Link
          href="/contact"
          className="hidden lg:inline-flex items-center px-6 py-2.5 text-xs tracking-widest uppercase transition-all duration-300"
          style={{
            border: scrolled
              ? `1px solid ${DARK_TEAL}`
              : "1px solid rgba(255,255,255,0.85)",
            color: scrolled ? DARK_TEAL : "#ffffff",
            letterSpacing: "0.18em",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.backgroundColor = scrolled ? DARK_TEAL : "rgba(255,255,255,0.15)";
            el.style.color = scrolled ? "#ffffff" : "#ffffff";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.backgroundColor = "transparent";
            el.style.color = scrolled ? DARK_TEAL : "#ffffff";
          }}
        >
          体験レッスンへ
        </Link>

        {/* Hamburger (mobile) */}
        <button
          className="lg:hidden flex flex-col justify-center gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
        >
          <span
            className="block w-6 transition-all duration-300"
            style={{
              height: "1px",
              backgroundColor: textColor,
              transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none",
            }}
          />
          <span
            className="block w-6 transition-all duration-300"
            style={{
              height: "1px",
              backgroundColor: textColor,
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-6 transition-all duration-300"
            style={{
              height: "1px",
              backgroundColor: textColor,
              transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="lg:hidden px-6 pb-8 pt-2"
          style={{ backgroundColor: "#F7F6F2", borderTop: "1px solid #EAE6DF" }}
        >
          {navItems.slice(0, 1).map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center py-4 text-sm tracking-widest uppercase"
              style={{ color: DARK_TEAL, letterSpacing: "0.16em", borderBottom: "1px solid #EAE6DF" }}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          {/* Courses sub items */}
          <div style={{ borderBottom: "1px solid #EAE6DF" }}>
            <p className="pt-4 pb-2 text-xs tracking-widest uppercase" style={{ color: "#8FA3AD", letterSpacing: "0.16em" }}>
              Courses
            </p>
            {courseDropdown.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="flex items-center pb-3 text-sm"
                style={{ color: DARK_TEAL, letterSpacing: "0.06em", paddingLeft: "0.75rem" }}
                onClick={() => setMenuOpen(false)}
              >
                — {c.label}
              </Link>
            ))}
          </div>
          {navItems.slice(1).map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center py-4 text-sm tracking-widest uppercase"
              style={{ color: DARK_TEAL, letterSpacing: "0.16em", borderBottom: "1px solid #EAE6DF" }}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="flex items-center justify-center mt-5 py-3.5 text-sm text-center tracking-widest uppercase text-white"
            style={{ backgroundColor: DARK_TEAL, letterSpacing: "0.16em" }}
            onClick={() => setMenuOpen(false)}
          >
            体験レッスンへ（1,000円）
          </Link>
        </div>
      )}
    </header>
  );
}

