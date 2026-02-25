"use client";

import { useState, useEffect } from "react";

// カラーパレット定義
// Base: #F7F6F2  Text: #4A4A4A
// Primary (soft): #8FA3AD   Secondary: #9CA795
// Border: #EAE6DF
// ★ Dark Accent (新追加): #1A4A52 ← ダークブルーグリーン

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="min-h-screen"
      style={{ fontFamily: "'Montserrat', 'Noto Sans JP', sans-serif", color: "#4A4A4A" }}
    >
      {/* ============================================================
          1. HEADER
      ============================================================ */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? "#F7F6F2" : "transparent",
          borderBottom: scrolled ? "1px solid #EAE6DF" : "1px solid transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="text-xl tracking-widest font-light transition-opacity duration-300 hover:opacity-70"
            style={{
              fontFamily: "'Georgia', 'Times New Roman', serif",
              color: scrolled ? "#1A4A52" : "#ffffff",
              letterSpacing: "0.12em",
            }}
          >
            Owl English School
          </a>

          {/* Nav Links */}
          <nav className="hidden lg:flex items-center gap-10">
            {["Concept", "Courses", "Instructor", "Flow", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs tracking-widest uppercase transition-all duration-300"
                style={{
                  color: scrolled ? "#4A4A4A" : "#ffffff",
                  fontWeight: 400,
                  letterSpacing: "0.18em",
                  opacity: 0.85,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = scrolled ? "#1A4A52" : "#ffffff";
                  (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = scrolled ? "#4A4A4A" : "#ffffff";
                  (e.currentTarget as HTMLAnchorElement).style.opacity = "0.85";
                }}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* CTA Ghost Button */}
          <a
            href="#contact"
            className="hidden lg:inline-flex items-center px-6 py-2.5 text-xs tracking-widest uppercase transition-all duration-300"
            style={{
              border: scrolled ? "1px solid #1A4A52" : "1px solid rgba(255,255,255,0.85)",
              color: scrolled ? "#1A4A52" : "#ffffff",
              letterSpacing: "0.18em",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              if (scrolled) {
                el.style.backgroundColor = "#1A4A52";
                el.style.color = "#ffffff";
              } else {
                el.style.backgroundColor = "rgba(255,255,255,0.18)";
              }
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.backgroundColor = "transparent";
              el.style.color = scrolled ? "#1A4A52" : "#ffffff";
            }}
          >
            無料体験へ
          </a>
        </div>
      </header>

      {/* ============================================================
          2. FIRST VIEW
      ============================================================ */}
      <section
        id="hero"
        className="relative h-screen flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"
          alt="光の差し込む静謐な空間"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center center" }}
        />
        {/* Overlay — やや深めにしてダークティールが映えるように */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(160deg, rgba(26,74,82,0.55) 0%, rgba(0,0,0,0.38) 100%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-3 mb-8 px-5 py-2"
            style={{
              border: "1px solid rgba(255,255,255,0.35)",
              backgroundColor: "rgba(26,74,82,0.4)",
            }}
          >
            <span
              className="text-white text-xs tracking-widest uppercase"
              style={{ letterSpacing: "0.24em", opacity: 0.9 }}
            >
              Online Private Tutoring
            </span>
          </div>

          <h1
            className="text-white mb-5 font-light"
            style={{
              fontFamily: "'Noto Sans JP', sans-serif",
              fontSize: "clamp(2rem, 5vw, 4.5rem)",
              letterSpacing: "0.06em",
              lineHeight: 1.3,
            }}
          >
            知性は、静寂の中で<br />目を覚ます。
          </h1>
          <p
            className="text-white mb-6 font-light"
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: "clamp(1rem, 2.5vw, 1.625rem)",
              letterSpacing: "0.08em",
              opacity: 0.8,
              fontStyle: "italic",
            }}
          >
            The Wisdom in Quietness.
          </p>
          <p
            className="text-white mb-14 font-light"
            style={{
              fontFamily: "'Noto Sans JP', sans-serif",
              fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
              letterSpacing: "0.14em",
              opacity: 0.75,
            }}
          >
            全国どこからでも学べる、完全オンライン・マンツーマン英語家庭教師
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-block px-12 py-4 text-white text-xs tracking-widest uppercase transition-all duration-300 cursor-pointer"
              style={{
                backgroundColor: "#1A4A52",
                letterSpacing: "0.22em",
                fontFamily: "'Montserrat', sans-serif",
                border: "1px solid #1A4A52",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.backgroundColor = "#153d44";
                el.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.backgroundColor = "#1A4A52";
                el.style.transform = "translateY(0)";
              }}
            >
              無料体験レッスンへ
            </a>
            <a
              href="#concept"
              className="inline-block px-10 py-4 text-white text-xs tracking-widest uppercase transition-all duration-300 cursor-pointer"
              style={{
                border: "1px solid rgba(255,255,255,0.6)",
                letterSpacing: "0.22em",
                fontFamily: "'Montserrat', sans-serif",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.backgroundColor = "rgba(255,255,255,0.12)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.backgroundColor = "transparent";
              }}
            >
              詳しく見る
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ opacity: 0.55 }}
        >
          <span className="text-white text-xs tracking-widest" style={{ letterSpacing: "0.2em" }}>
            SCROLL
          </span>
          <div className="w-px h-10 bg-white" />
        </div>
      </section>

      {/* ============================================================
          3. CONCEPT
      ============================================================ */}
      <section
        id="concept"
        className="py-32"
        style={{ backgroundColor: "#F7F6F2" }}
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p
            className="mb-5 tracking-widest text-xs uppercase"
            style={{
              color: "#1A4A52",
              letterSpacing: "0.28em",
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 500,
            }}
          >
            — Concept —
          </p>
          <h2
            className="mb-3 font-light tracking-widest uppercase"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
              color: "#1A4A52",
              letterSpacing: "0.3em",
            }}
          >
            CONCEPT
          </h2>
          <div
            className="mx-auto mb-12"
            style={{ width: "40px", height: "2px", backgroundColor: "#1A4A52" }}
          />
          <p
            className="font-light mb-10"
            style={{
              fontFamily: "'Noto Sans JP', sans-serif",
              fontSize: "clamp(0.9rem, 1.5vw, 1.0625rem)",
              color: "#4A4A4A",
              lineHeight: 2.4,
              letterSpacing: "0.07em",
            }}
          >
            Owl English Schoolは、<strong style={{ fontWeight: 500, color: "#1A4A52" }}>完全オンライン</strong>で受講できるマンツーマン英語家庭教師サービスです。<br />
            場所を選ばず、ご自宅から——フクロウが静寂の森で知恵を蓄えるように、雑音のない集中した環境で、英語力を着実に高めます。<br />
            画一的なクラス授業ではなく、あなただけのカリキュラムと専属講師による<strong style={{ fontWeight: 500, color: "#1A4A52" }}>完全個別指導</strong>で、確かな結果へと導きます。
          </p>

          {/* 3 Values */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 mt-14">
            {[
              { en: "Online", ja: "全国・海外からOK" },
              { en: "Private", ja: "完全マンツーマン" },
              { en: "Tailored", ja: "個別カリキュラム" },
            ].map((v, i) => (
              <div
                key={v.en}
                className="py-8 px-4"
                style={{
                  borderLeft: i > 0 ? "1px solid #EAE6DF" : "none",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "1.5rem",
                    fontWeight: 300,
                    color: "#1A4A52",
                    letterSpacing: "0.06em",
                    marginBottom: "6px",
                  }}
                >
                  {v.en}
                </p>
                <p
                  style={{
                    fontFamily: "'Noto Sans JP', sans-serif",
                    fontSize: "0.8rem",
                    color: "#7A7A7A",
                    letterSpacing: "0.1em",
                  }}
                >
                  {v.ja}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div style={{ height: "1px", backgroundColor: "#EAE6DF" }} />
      </div>

      {/* ============================================================
          4. THE GATEWAY — コース一覧
      ============================================================ */}
      <section
        id="courses"
        className="py-32"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p
              className="mb-4 tracking-widest text-xs uppercase"
              style={{
                color: "#1A4A52",
                letterSpacing: "0.28em",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 500,
              }}
            >
              — Courses —
            </p>
            <h2
              className="font-light tracking-widest"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "clamp(1.25rem, 2.5vw, 2rem)",
                color: "#1A4A52",
                letterSpacing: "0.25em",
              }}
            >
              YOUR COURSE
            </h2>
            <div
              className="mx-auto mt-6"
              style={{ width: "40px", height: "2px", backgroundColor: "#1A4A52" }}
            />
            <p
              className="mt-6 text-sm font-light"
              style={{
                fontFamily: "'Noto Sans JP', sans-serif",
                color: "#7A7A7A",
                letterSpacing: "0.08em",
              }}
            >
              目標とライフスタイルに合わせて、最適なコースをお選びください。
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Panel A: 中高生向け */}
            <div
              className="bg-white overflow-hidden transition-all duration-400 cursor-pointer"
              style={{ border: "1px solid #EAE6DF" }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(-6px)";
                el.style.boxShadow = "0 24px 64px rgba(26,74,82,0.12)";
                el.style.borderColor = "#1A4A52";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
                el.style.borderColor = "#EAE6DF";
              }}
            >
              {/* Accent Bar */}
              <div style={{ height: "4px", backgroundColor: "#1A4A52" }} />
              {/* Card Image */}
              <div className="overflow-hidden" style={{ height: "240px" }}>
                <img
                  src="https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?auto=format&fit=crop&w=900&q=80"
                  alt="中高生向け英語家庭教師コース"
                  className="w-full h-full object-cover transition-transform duration-700"
                  style={{ transform: "scale(1.04)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLImageElement).style.transform = "scale(1.09)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLImageElement).style.transform = "scale(1.04)";
                  }}
                />
              </div>

              {/* Card Content */}
              <div className="p-10">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="text-xs tracking-widest uppercase px-3 py-1"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      color: "#ffffff",
                      backgroundColor: "#1A4A52",
                      letterSpacing: "0.18em",
                      fontSize: "0.65rem",
                    }}
                  >
                    For Students
                  </span>
                </div>
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "'Noto Sans JP', sans-serif",
                    fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
                    fontWeight: 500,
                    color: "#1A4A52",
                    letterSpacing: "0.04em",
                  }}
                >
                  中高生向け英語家庭教師
                </h3>
                <p
                  className="mb-8 font-light"
                  style={{
                    fontFamily: "'Noto Sans JP', sans-serif",
                    fontSize: "0.9375rem",
                    color: "#6B6B6B",
                    letterSpacing: "0.05em",
                    lineHeight: 1.9,
                  }}
                >
                  ワンランク上の結果と、未来への自信を。<br />
                  オンラインで、どこからでも受講可能です。
                </p>

                <ul className="mb-10 space-y-3.5">
                  {[
                    "英検特化コース（準2級〜1級）",
                    "通常学習コース（テスト対策・基礎力向上）",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm font-light"
                      style={{
                        fontFamily: "'Noto Sans JP', sans-serif",
                        color: "#4A4A4A",
                        letterSpacing: "0.04em",
                        lineHeight: 1.7,
                      }}
                    >
                      <span
                        style={{
                          color: "#1A4A52",
                          marginTop: "3px",
                          flexShrink: 0,
                          fontWeight: 600,
                        }}
                      >
                        ▸
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="inline-block w-full text-center py-4 text-sm font-light text-white tracking-widest transition-all duration-300"
                  style={{
                    backgroundColor: "#1A4A52",
                    fontFamily: "'Noto Sans JP', sans-serif",
                    letterSpacing: "0.12em",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#153d44";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#1A4A52";
                  }}
                >
                  中高生向けコースの詳細を見る
                </a>
              </div>
            </div>

            {/* Panel B: 大人向け */}
            <div
              className="bg-white overflow-hidden transition-all duration-400 cursor-pointer"
              style={{ border: "1px solid #EAE6DF" }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(-6px)";
                el.style.boxShadow = "0 24px 64px rgba(156,167,149,0.2)";
                el.style.borderColor = "#9CA795";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
                el.style.borderColor = "#EAE6DF";
              }}
            >
              {/* Accent Bar */}
              <div style={{ height: "4px", backgroundColor: "#9CA795" }} />
              {/* Card Image */}
              <div className="overflow-hidden" style={{ height: "240px" }}>
                <img
                  src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=900&q=80"
                  alt="大人向け英語家庭教師コース"
                  className="w-full h-full object-cover transition-transform duration-700"
                  style={{ transform: "scale(1.04)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLImageElement).style.transform = "scale(1.09)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLImageElement).style.transform = "scale(1.04)";
                  }}
                />
              </div>

              {/* Card Content */}
              <div className="p-10">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="text-xs tracking-widest uppercase px-3 py-1"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      color: "#ffffff",
                      backgroundColor: "#9CA795",
                      letterSpacing: "0.18em",
                      fontSize: "0.65rem",
                    }}
                  >
                    For Adults
                  </span>
                </div>
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "'Noto Sans JP', sans-serif",
                    fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
                    fontWeight: 500,
                    color: "#4A4A4A",
                    letterSpacing: "0.04em",
                  }}
                >
                  大人向け英語家庭教師
                </h3>
                <p
                  className="mb-8 font-light"
                  style={{
                    fontFamily: "'Noto Sans JP', sans-serif",
                    fontSize: "0.9375rem",
                    color: "#6B6B6B",
                    letterSpacing: "0.05em",
                    lineHeight: 1.9,
                  }}
                >
                  キャリアを加速させる、洗練された英語力。<br />
                  仕事終わりや休日も、ご自宅から気軽に受講できます。
                </p>

                <ul className="mb-10 space-y-3.5">
                  {[
                    "TOEIC® 対策コース",
                    "TOEFL® 対策コース",
                    "英会話コース（カナダ式自然なスピーキング）",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm font-light"
                      style={{
                        fontFamily: "'Noto Sans JP', sans-serif",
                        color: "#4A4A4A",
                        letterSpacing: "0.04em",
                        lineHeight: 1.7,
                      }}
                    >
                      <span style={{ color: "#9CA795", marginTop: "3px", flexShrink: 0, fontWeight: 600 }}>▸</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="inline-block w-full text-center py-4 text-sm font-light text-white tracking-widest transition-all duration-300"
                  style={{
                    backgroundColor: "#9CA795",
                    fontFamily: "'Noto Sans JP', sans-serif",
                    letterSpacing: "0.12em",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#879e82";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#9CA795";
                  }}
                >
                  大人向けコースの詳細を見る
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================
          5. OUR STRENGTH
      ============================================================ */}
      <section
        id="instructor"
        className="py-32"
        style={{ backgroundColor: "#0F2E34" }}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-10">

          {/* Section Label */}
          <div className="text-center mb-16">
            <p
              className="mb-4 tracking-widest text-xs uppercase"
              style={{
                color: "#8FA3AD",
                letterSpacing: "0.28em",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 500,
              }}
            >
              — Our Strength —
            </p>
            <h2
              className="font-light tracking-widest"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "clamp(1.25rem, 2.5vw, 2rem)",
                color: "#ffffff",
                letterSpacing: "0.25em",
              }}
            >
              CREDENTIALS
            </h2>
            <div
              className="mx-auto mt-6"
              style={{ width: "40px", height: "2px", backgroundColor: "#8FA3AD" }}
            />
          </div>

          {/* Score / Achievement Display */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center mb-20 py-12"
            style={{ border: "1px solid rgba(143,163,173,0.2)", backgroundColor: "rgba(26,74,82,0.3)" }}
          >
            <div className="text-center px-14 py-6">
              <p
                className="font-light mb-3"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "0.65rem",
                  color: "#8FA3AD",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                }}
              >
                Instructor Achievement
              </p>
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "clamp(2.5rem, 6vw, 5rem)",
                  fontWeight: 200,
                  color: "#ffffff",
                  letterSpacing: "0.04em",
                  lineHeight: 1,
                }}
              >
                英検{" "}
                <span style={{ color: "#8FA3AD" }}>1</span>
                <span
                  style={{
                    fontFamily: "'Noto Sans JP', sans-serif",
                    fontSize: "0.4em",
                    color: "#8FA3AD",
                    letterSpacing: "0.1em",
                  }}
                >
                  級
                </span>
              </p>
            </div>

            <div
              className="hidden sm:block"
              style={{ width: "1px", height: "80px", backgroundColor: "rgba(143,163,173,0.3)" }}
            />

            <div className="text-center px-14 py-6">
              <p
                className="font-light mb-3"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "0.65rem",
                  color: "#8FA3AD",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                }}
              >
                Instructor Achievement
              </p>
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "clamp(2.5rem, 6vw, 5rem)",
                  fontWeight: 200,
                  color: "#ffffff",
                  letterSpacing: "0.04em",
                  lineHeight: 1,
                }}
              >
                TOEIC{" "}
                <span style={{ color: "#8FA3AD" }}>945</span>
                <span
                  style={{
                    fontFamily: "'Noto Sans JP', sans-serif",
                    fontSize: "0.28em",
                    color: "#8FA3AD",
                    verticalAlign: "super",
                    letterSpacing: "0.1em",
                  }}
                >
                  点
                </span>
              </p>
            </div>
          </div>

          {/* Three Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "カナダ式指導による\n美しい発音",
                desc: "本場カナダで培った自然で流暢な英語を、あなたの発音と話し方に丁寧に落とし込みます。ネイティブが思わず聞き入るスピーキングを目指します。",
              },
              {
                num: "02",
                title: "完全オーダーメイド\nカリキュラム",
                desc: "お一人おひとりの目標・レベル・スケジュールを丁寧にヒアリングし、あなただけのカリキュラムを設計。無駄のない最短ルートで成果へ導きます。",
              },
              {
                num: "03",
                title: "一次（筆記）も二次（面接）も\nトータルサポート",
                desc: "英検の筆記対策から二次試験の面接対策まで、全てのフェーズをトータルでサポート。合格まで伴走し続けます。",
              },
            ].map((pillar) => (
              <div
                key={pillar.num}
                className="p-8 transition-all duration-300"
                style={{
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(143,163,173,0.15)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.backgroundColor = "rgba(26,74,82,0.5)";
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(143,163,173,0.35)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.backgroundColor = "rgba(255,255,255,0.04)";
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(143,163,173,0.15)";
                }}
              >
                <p
                  className="mb-5"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "2.5rem",
                    fontWeight: 200,
                    color: "#8FA3AD",
                    letterSpacing: "0.04em",
                    lineHeight: 1,
                    opacity: 0.6,
                  }}
                >
                  {pillar.num}
                </p>
                <h3
                  className="mb-4"
                  style={{
                    fontFamily: "'Noto Sans JP', sans-serif",
                    fontSize: "0.9375rem",
                    fontWeight: 400,
                    color: "#ffffff",
                    letterSpacing: "0.06em",
                    lineHeight: 1.8,
                    whiteSpace: "pre-line",
                  }}
                >
                  {pillar.title}
                </h3>
                <p
                  className="font-light text-sm"
                  style={{
                    fontFamily: "'Noto Sans JP', sans-serif",
                    color: "rgba(255,255,255,0.55)",
                    letterSpacing: "0.04em",
                    lineHeight: 2,
                  }}
                >
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          6. FLOW & ONLINE INFO
      ============================================================ */}
      <section
        id="flow"
        className="py-32"
        style={{ backgroundColor: "#F7F6F2" }}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-10">

          {/* Section Label */}
          <div className="text-center mb-20">
            <p
              className="mb-4 tracking-widest text-xs uppercase"
              style={{
                color: "#1A4A52",
                letterSpacing: "0.28em",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 500,
              }}
            >
              — Flow —
            </p>
            <h2
              className="font-light tracking-widest"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "clamp(1.25rem, 2.5vw, 2rem)",
                color: "#1A4A52",
                letterSpacing: "0.25em",
              }}
            >
              GETTING STARTED
            </h2>
            <div
              className="mx-auto mt-6"
              style={{ width: "40px", height: "2px", backgroundColor: "#1A4A52" }}
            />
          </div>

          {/* 3 Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-24 relative">
            {/* Connector Line */}
            <div
              className="hidden md:block absolute"
              style={{
                height: "1px",
                backgroundColor: "#1A4A52",
                opacity: 0.2,
                top: "2rem",
                left: "calc(100% / 6)",
                right: "calc(100% / 6)",
              }}
            />

            {[
              {
                step: "STEP 01",
                title: "Web からご予約",
                desc: "お問い合わせフォームまたはLINEより、ご希望の体験レッスン日時をご連絡ください。24時間以内にZoomのリンクをお送りします。",
              },
              {
                step: "STEP 02",
                title: "カウンセリング・目標設定",
                desc: "現在のレベルや目標をじっくりとヒアリング。焦らず、ゆっくりとお話しください。あなたに最適なコースをご提案します。",
              },
              {
                step: "STEP 03",
                title: "オンライン無料体験レッスン",
                desc: "Zoomで気軽に参加。ご自宅から完全マンツーマンの本格指導をご体験ください。機材はPC・スマートフォン・タブレットで対応可。",
              },
            ].map((s, idx) => (
              <div key={s.step} className="flex flex-col items-center text-center px-8 py-6 relative">
                {/* Step Circle */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6 relative z-10"
                  style={{ backgroundColor: "#1A4A52", boxShadow: "0 4px 20px rgba(26,74,82,0.25)" }}
                >
                  <span
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "0.7rem",
                      fontWeight: 500,
                      color: "#ffffff",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
                <p
                  className="mb-3 text-xs tracking-widest"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    color: "#1A4A52",
                    letterSpacing: "0.2em",
                    fontWeight: 500,
                  }}
                >
                  {s.step}
                </p>
                <h3
                  className="mb-4"
                  style={{
                    fontFamily: "'Noto Sans JP', sans-serif",
                    fontSize: "1rem",
                    fontWeight: 500,
                    color: "#4A4A4A",
                    letterSpacing: "0.08em",
                  }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-sm font-light"
                  style={{
                    fontFamily: "'Noto Sans JP', sans-serif",
                    color: "#7A7A7A",
                    letterSpacing: "0.04em",
                    lineHeight: 2,
                    maxWidth: "260px",
                  }}
                >
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div style={{ height: "1px", backgroundColor: "#EAE6DF", marginBottom: "4rem" }} />

          {/* Online Info Area */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

            {/* Left: Online Info Table */}
            <div className="flex flex-col justify-center">
              <h3
                className="mb-8"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "1rem",
                  fontWeight: 400,
                  color: "#1A4A52",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                }}
              >
                ONLINE INFO
              </h3>
              <div className="space-y-5">
                {[
                  { label: "受講形式", value: "完全オンライン（Zoom使用）" },
                  { label: "対応時間", value: "月〜土  10:00 – 21:00\n日・祝  10:00 – 18:00" },
                  { label: "対象地域", value: "全国対応・海外在住の方も歓迎" },
                  { label: "使用機材", value: "PC・スマートフォン・タブレット\n（カメラ・マイク付き）" },
                  { label: "お問い合わせ", value: "info@owl-english.example.com\nLINE ID: owl-english" },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex gap-6 pb-5"
                    style={{ borderBottom: "1px solid #EAE6DF" }}
                  >
                    <span
                      className="flex-shrink-0 text-xs tracking-wider"
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        color: "#1A4A52",
                        letterSpacing: "0.12em",
                        minWidth: "90px",
                        paddingTop: "2px",
                        fontWeight: 500,
                      }}
                    >
                      {row.label}
                    </span>
                    <span
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
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Online Lesson Visual */}
            <div
              className="flex flex-col items-center justify-center"
              style={{
                backgroundColor: "#0F2E34",
                minHeight: "400px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Background grid */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage:
                    "linear-gradient(rgba(143,163,173,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(143,163,173,0.08) 1px, transparent 1px)",
                  backgroundSize: "36px 36px",
                }}
              />
              <div className="relative z-10 text-center px-8">
                {/* Zoom icon mock */}
                <div
                  className="mx-auto mb-6 flex items-center justify-center rounded-2xl"
                  style={{
                    width: "72px",
                    height: "72px",
                    backgroundColor: "#1A4A52",
                    border: "1px solid rgba(143,163,173,0.3)",
                  }}
                >
                  {/* Simple camera SVG */}
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="6" width="14" height="12" rx="2" stroke="#8FA3AD" strokeWidth="1.5" />
                    <path d="M16 9.5L22 7v10l-6-2.5V9.5z" stroke="#8FA3AD" strokeWidth="1.5" strokeLinejoin="round" />
                    <circle cx="9" cy="12" r="2.5" stroke="rgba(143,163,173,0.5)" strokeWidth="1" />
                  </svg>
                </div>
                <p
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "0.75rem",
                    color: "#8FA3AD",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    marginBottom: "8px",
                  }}
                >
                  Online via Zoom
                </p>
                <p
                  style={{
                    fontFamily: "'Noto Sans JP', sans-serif",
                    fontSize: "0.8rem",
                    color: "rgba(255,255,255,0.45)",
                    letterSpacing: "0.08em",
                    lineHeight: 1.9,
                  }}
                >
                  ご自宅から、世界品質の<br />英語指導をご体験ください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          7. BOTTOM CTA
      ============================================================ */}
      <section
        id="contact"
        className="py-36 relative overflow-hidden"
        style={{ backgroundColor: "#1A4A52" }}
      >
        {/* Background texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <p
            className="mb-6 text-xs tracking-widest uppercase"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              color: "rgba(143,163,173,0.8)",
              letterSpacing: "0.3em",
            }}
          >
            Free Trial Lesson
          </p>
          <h2
            className="mb-5 font-light"
            style={{
              fontFamily: "'Noto Sans JP', sans-serif",
              fontSize: "clamp(1.1rem, 2.5vw, 1.75rem)",
              color: "#ffffff",
              letterSpacing: "0.08em",
              lineHeight: 2,
            }}
          >
            まずは、画面越しでいい——<br />
            『本物の英語』に触れてみませんか。
          </h2>
          <p
            className="mb-14 font-light"
            style={{
              fontFamily: "'Noto Sans JP', sans-serif",
              fontSize: "0.9rem",
              color: "rgba(255,255,255,0.55)",
              letterSpacing: "0.1em",
              lineHeight: 2,
            }}
          >
            オンライン体験レッスンは無料。Zoomのリンクをお送りするだけ。<br />
            場所も、時間も、あなたに合わせます。
          </p>

          <a
            href="#"
            className="inline-block px-14 py-5 rounded-full text-sm tracking-widest transition-all duration-300"
            style={{
              backgroundColor: "#ffffff",
              color: "#1A4A52",
              fontFamily: "'Noto Sans JP', sans-serif",
              fontWeight: 500,
              letterSpacing: "0.14em",
              boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.transform = "translateY(-5px)";
              el.style.boxShadow = "0 20px 50px rgba(0,0,0,0.3)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "0 8px 32px rgba(0,0,0,0.2)";
            }}
          >
            無料体験レッスンを予約する
          </a>

          <p
            className="mt-10 text-xs font-light"
            style={{
              fontFamily: "'Noto Sans JP', sans-serif",
              color: "rgba(255,255,255,0.4)",
              letterSpacing: "0.1em",
            }}
          >
            しつこい勧誘は一切行いません。まずはお気軽にどうぞ。
          </p>
        </div>
      </section>

      {/* ============================================================
          FOOTER
      ============================================================ */}
      <footer
        className="py-10"
        style={{ backgroundColor: "#0a1f23", borderTop: "1px solid rgba(26,74,82,0.5)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: "0.9rem",
              color: "rgba(255,255,255,0.6)",
              letterSpacing: "0.1em",
            }}
          >
            Owl English School
          </span>
          <div className="flex items-center gap-8">
            {["プライバシーポリシー", "特定商取引法の表記", "お問い合わせ"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-xs transition-opacity duration-300 hover:opacity-70"
                style={{
                  fontFamily: "'Noto Sans JP', sans-serif",
                  color: "rgba(255,255,255,0.3)",
                  letterSpacing: "0.06em",
                }}
              >
                {link}
              </a>
            ))}
          </div>
          <span
            className="text-xs"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              color: "rgba(255,255,255,0.25)",
              letterSpacing: "0.1em",
            }}
          >
            © {new Date().getFullYear()} Owl English School
          </span>
        </div>
      </footer>
    </div>
  );
}
