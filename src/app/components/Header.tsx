"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const DARK_TEAL = "#1A4A52";

const navItems = [
  { label: "Concept", href: "/#concept" },
  { label: "Courses", href: "/#courses" },
  { label: "Instructor", href: "/instructor" },
  { label: "Flow", href: "/flow" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(!isHome);
  const [menuOpen, setMenuOpen] = useState(false);

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
          {navItems.map((item) => {
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
                  color: isActive
                    ? DARK_TEAL
                    : scrolled
                    ? "#4A4A4A"
                    : "#ffffff",
                  fontWeight: isActive ? 600 : 400,
                  letterSpacing: "0.18em",
                  borderBottom: isActive
                    ? `1px solid ${DARK_TEAL}`
                    : "1px solid transparent",
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
          無料体験へ
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
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center py-4 text-sm tracking-widest uppercase"
              style={{
                color: DARK_TEAL,
                letterSpacing: "0.16em",
                borderBottom: "1px solid #EAE6DF",
              }}
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
            無料体験レッスンへ
          </Link>
        </div>
      )}
    </header>
  );
}

