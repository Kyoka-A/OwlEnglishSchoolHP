import Link from "next/link";

export function Footer() {
  return (
    <footer
      className="py-10"
      style={{ backgroundColor: "#0a1f23", borderTop: "1px solid rgba(26,74,82,0.5)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-5">
        <Link
          href="/"
          style={{
            fontFamily: "'Georgia', serif",
            fontSize: "0.9rem",
            color: "rgba(255,255,255,0.6)",
            letterSpacing: "0.1em",
          }}
        >
          Owl English School
        </Link>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {[
            { label: "講師紹介", href: "/instructor" },
            { label: "受講の流れ", href: "/flow" },
            { label: "お問い合わせ", href: "/contact" },
            { label: "プライバシーポリシー", href: "#" },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-xs transition-opacity duration-300 hover:opacity-70"
              style={{
                fontFamily: "'Noto Sans JP', sans-serif",
                color: "rgba(255,255,255,0.35)",
                letterSpacing: "0.06em",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <span
          className="text-xs"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            color: "rgba(255,255,255,0.22)",
            letterSpacing: "0.1em",
          }}
        >
          © {new Date().getFullYear()} Owl English School
        </span>
      </div>
    </footer>
  );
}

