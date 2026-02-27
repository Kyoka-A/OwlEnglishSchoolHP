"use client";

import Link from "next/link";

export default function ContactPage() {

  return (
    <div
      style={{
        fontFamily: "'Montserrat', 'Noto Sans JP', sans-serif",
        color: "#4A4A4A",
        backgroundColor: "#F7F6F2",
      }}
    >
      {/* ── PAGE HERO ── */}
      <div className="relative flex items-end overflow-hidden" style={{ height: "340px" }}>
        <img
          src="https://images.unsplash.com/photo-1423592707957-3b212afa6733?auto=format&fit=crop&w=1920&q=80"
          alt="お問い合わせ"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center 50%" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(160deg, rgba(26,74,82,0.75) 0%, rgba(0,0,0,0.45) 100%)",
          }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 pb-14 w-full">
          <p
            className="mb-2 text-xs tracking-widest uppercase"
            style={{ color: "#8FA3AD", letterSpacing: "0.28em", fontFamily: "'Montserrat', sans-serif" }}
          >
            — Contact —
          </p>
          <h1
            className="font-light tracking-widest text-white"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "clamp(1.75rem, 4vw, 3rem)",
              letterSpacing: "0.2em",
            }}
          >
            CONTACT
          </h1>
        </div>
      </div>

      <section className="py-28" style={{ backgroundColor: "#F7F6F2" }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

            {/* Left: Info */}
            <div className="lg:col-span-2">
              <p
                className="mb-3 text-xs tracking-widest uppercase"
                style={{ color: "#1A4A52", letterSpacing: "0.24em", fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}
              >
                Get in Touch
              </p>
              <h2
                className="mb-2 font-light"
                style={{
                  fontFamily: "'Noto Sans JP', sans-serif",
                  fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
                  color: "#1A4A52",
                  letterSpacing: "0.08em",
                }}
              >
                お問い合わせ・<br />体験レッスン予約
              </h2>
              <div style={{ height: "2px", width: "40px", backgroundColor: "#1A4A52", margin: "1.5rem 0" }} />

              <p
                className="mb-10 font-light text-sm"
                style={{
                  fontFamily: "'Noto Sans JP', sans-serif",
                  color: "#5A5A5A",
                  letterSpacing: "0.05em",
                  lineHeight: 2.2,
                }}
              >
                フォームよりお気軽にご連絡ください。
                24時間以内にご返信いたします。
              </p>

              <div className="space-y-6">
                {[
                  { label: "受講形式", value: "完全オンライン（Zoom）" },
                  { label: "問い合わせ対応時間", value: "月〜金  9:00 – 21:00\n土日祝  不定期" },
                  { label: "レッスン時間", value: "Kyoka 先生：17:00 – 21:00 の間\nMasaki 先生：18:00 – 21:00 の間" },
                  { label: "対象地域", value: "全国・海外からOK" },
                  { label: "メール", value: "owlenglishschool2025@gmail.com" },
                ].map((row) => (
                  <div key={row.label}>
                    <p
                      className="text-xs mb-1"
                      style={{ fontFamily: "'Montserrat', sans-serif", color: "#8FA3AD", letterSpacing: "0.18em", textTransform: "uppercase" }}
                    >
                      {row.label}
                    </p>
                    <p
                      className="text-sm font-light"
                      style={{
                        fontFamily: "'Noto Sans JP', sans-serif",
                        color: "#4A4A4A",
                        letterSpacing: "0.04em",
                        lineHeight: 1.9,
                        whiteSpace: "pre-line",
                      }}
                    >
                      {row.value}
                    </p>
                    <div style={{ height: "1px", backgroundColor: "#EAE6DF", marginTop: "0.75rem" }} />
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Google Form Link */}
            <div className="lg:col-span-3">
              <div
                className="flex flex-col items-center justify-center text-center py-20 px-8"
                style={{ backgroundColor: "#ffffff", border: "1px solid #EAE6DF", minHeight: "420px" }}
              >
                <div
                  className="mb-8 flex items-center justify-center"
                  style={{ width: "64px", height: "64px", backgroundColor: "#F0F4F5", border: "2px solid #1A4A52" }}
                >
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="#1A4A52" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p
                  className="mb-2"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "0.7rem",
                    color: "#8FA3AD",
                    letterSpacing: "0.24em",
                    textTransform: "uppercase",
                  }}
                >
                  Google Form
                </p>
                <p
                  className="mb-3 font-light"
                  style={{
                    fontFamily: "'Noto Sans JP', sans-serif",
                    fontSize: "clamp(1rem, 2vw, 1.25rem)",
                    color: "#1A4A52",
                    letterSpacing: "0.06em",
                    lineHeight: 1.8,
                  }}
                >
                  下のボタンからフォームへ<br />お進みください。
                </p>
                <p
                  className="mb-10 text-sm font-light"
                  style={{
                    fontFamily: "'Noto Sans JP', sans-serif",
                    color: "#8A8A8A",
                    letterSpacing: "0.05em",
                    lineHeight: 1.9,
                  }}
                >
                  24時間以内にご返信いたします。
                </p>
                <a
                  href="https://forms.gle/XuHVBrNu6UELUxv1A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full py-5 text-sm text-white text-center tracking-widest transition-all duration-300"
                  style={{
                    backgroundColor: "#1A4A52",
                    fontFamily: "'Noto Sans JP', sans-serif",
                    fontWeight: 500,
                    letterSpacing: "0.16em",
                    maxWidth: "360px",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#153d44";
                    (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#1A4A52";
                    (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                  }}
                >
                  お問い合わせ・体験レッスン予約 →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

