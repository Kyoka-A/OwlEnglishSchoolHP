"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{ fontFamily: "'Montserrat', 'Noto Sans JP', sans-serif", color: "#4A4A4A" }}
    >
      {/* ============================================================
          1. FIRST VIEW
      ============================================================ */}
      <section
        id="hero"
        className="relative h-screen flex flex-col items-center justify-center overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"
          alt="光の差し込む静謐な空間"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center center" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, rgba(26,74,82,0.58) 0%, rgba(0,0,0,0.38) 100%)",
          }}
        />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div
            className="inline-flex items-center gap-3 mb-8 px-5 py-2"
            style={{
              border: "1px solid rgba(255,255,255,0.32)",
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

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block px-12 py-4 text-white text-xs tracking-widest uppercase transition-all duration-300"
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
            </Link>
            <a
              href="#concept"
              className="inline-block px-10 py-4 text-white text-xs tracking-widest uppercase transition-all duration-300"
              style={{
                border: "1px solid rgba(255,255,255,0.6)",
                letterSpacing: "0.22em",
                fontFamily: "'Montserrat', sans-serif",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  "rgba(255,255,255,0.12)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  "transparent";
              }}
            >
              詳しく見る
            </a>
          </div>
        </div>

        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ opacity: 0.55 }}
        >
          <span
            className="text-white text-xs tracking-widest"
            style={{ letterSpacing: "0.2em" }}
          >
            SCROLL
          </span>
          <div className="w-px h-10 bg-white" />
        </div>
      </section>

      {/* ============================================================
          2. CONCEPT
      ============================================================ */}
      <section id="concept" className="py-32" style={{ backgroundColor: "#F7F6F2" }}>
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
            Owl English Schoolは、
            <strong style={{ fontWeight: 500, color: "#1A4A52" }}>
              完全オンライン
            </strong>
            で受講できるマンツーマン英語家庭教師サービスです。
            <br />
            場所を選ばず、ご自宅から——フクロウが静寂の森で知恵を蓄えるように、雑音のない集中した環境で、英語力を着実に高めます。
            <br />
            画一的なクラス授業ではなく、あなただけのカリキュラムと専属講師による
            <strong style={{ fontWeight: 500, color: "#1A4A52" }}>
              完全個別指導
            </strong>
            で、確かな結果へと導きます。
          </p>

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

      <div className="max-w-5xl mx-auto px-6">
        <div style={{ height: "1px", backgroundColor: "#EAE6DF" }} />
      </div>

      {/* ============================================================
          3. COURSES
      ============================================================ */}
      <section id="courses" className="py-32" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card A: 中高生向け */}
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
              <div style={{ height: "4px", backgroundColor: "#1A4A52" }} />
              <div className="overflow-hidden" style={{ height: "240px" }}>
                <img
                  src="https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?auto=format&fit=crop&w=900&q=80"
                  alt="中高生向け英語家庭教師"
                  className="w-full h-full object-cover"
                  style={{ transform: "scale(1.04)", transition: "transform 0.7s ease" }}
                />
              </div>
              <div className="p-10">
                <span
                  className="text-xs tracking-widest uppercase px-3 py-1 inline-block mb-4"
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
                  英検取得から定期テスト対策まで、完全個別対応。
                </p>
                <ul className="mb-10 space-y-3.5">
                  {[
                    "英検コース（3級 / 準2級 / 準2級プラス / 2級）",
                    "通常学習コース（定期テスト対策・基礎力向上）",
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
                      <span style={{ color: "#1A4A52", marginTop: "3px", flexShrink: 0, fontWeight: 600 }}>▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/courses/students"
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
                  中高生向けコースの詳細を見る →
                </Link>
              </div>
            </div>

            {/* Card B: 大人向け */}
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
              <div style={{ height: "4px", backgroundColor: "#9CA795" }} />
              <div className="overflow-hidden" style={{ height: "240px" }}>
                <img
                  src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=900&q=80"
                  alt="大人向け英語家庭教師"
                  className="w-full h-full object-cover"
                  style={{ transform: "scale(1.04)", transition: "transform 0.7s ease" }}
                />
              </div>
              <div className="p-10">
                <span
                  className="text-xs tracking-widest uppercase px-3 py-1 inline-block mb-4"
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
                  仕事終わりや休日も、ご自宅から気軽に受講可。
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
                <Link
                  href="/courses/adults"
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
                  大人向けコースの詳細を見る →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          4. OUR STRENGTH (dark section)
      ============================================================ */}
      <section id="instructor" className="py-32" style={{ backgroundColor: "#0F2E34" }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
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

          {/* Achievements */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center mb-20 py-12"
            style={{ border: "1px solid rgba(143,163,173,0.2)", backgroundColor: "rgba(26,74,82,0.3)" }}
          >
            {[
              { label: "英検1級", sub: "取得講師在籍" },
              { label: "TOEIC 945", sub: "点講師在籍" },
              { label: "英語教員免許", sub: "取得予定講師在籍" },
            ].map((item, i) => (
              <div key={item.label} className="flex sm:contents">
                {i > 0 && (
                  <div
                    className="hidden sm:block"
                    style={{ width: "1px", height: "80px", backgroundColor: "rgba(143,163,173,0.25)" }}
                  />
                )}
                <div className="text-center px-10 py-6">
                  <p
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "clamp(1.5rem, 3.5vw, 2.8rem)",
                      fontWeight: 200,
                      color: "#8FA3AD",
                      letterSpacing: "0.04em",
                      lineHeight: 1,
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Noto Sans JP', sans-serif",
                      fontSize: "0.75rem",
                      color: "rgba(255,255,255,0.45)",
                      letterSpacing: "0.1em",
                      marginTop: "8px",
                    }}
                  >
                    {item.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "カナダ式指導による\n美しい発音",
                desc: "本場カナダで培った自然で流暢な英語を、あなたの発音と話し方に丁寧に落とし込みます。",
              },
              {
                num: "02",
                title: "完全オーダーメイド\nカリキュラム",
                desc: "お一人おひとりの目標・レベル・スケジュールを丁寧にヒアリングし、あなただけのカリキュラムを設計します。",
              },
              {
                num: "03",
                title: "一次（筆記）も二次（面接）も\nトータルサポート",
                desc: "英検の筆記対策から二次試験の面接対策まで、全てのフェーズを合格まで伴走します。",
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
                    opacity: 0.55,
                    lineHeight: 1,
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
                    color: "rgba(255,255,255,0.5)",
                    letterSpacing: "0.04em",
                    lineHeight: 2,
                  }}
                >
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              href="/instructor"
              className="inline-block px-10 py-3.5 text-xs tracking-widest uppercase transition-all duration-300"
              style={{
                border: "1px solid rgba(143,163,173,0.5)",
                color: "#8FA3AD",
                fontFamily: "'Montserrat', sans-serif",
                letterSpacing: "0.2em",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.backgroundColor = "rgba(143,163,173,0.1)";
                el.style.borderColor = "#8FA3AD";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.backgroundColor = "transparent";
                el.style.borderColor = "rgba(143,163,173,0.5)";
              }}
            >
              講師プロフィールを見る →
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          5. BOTTOM CTA
      ============================================================ */}
      <section
        id="contact"
        className="py-36 relative overflow-hidden"
        style={{ backgroundColor: "#1A4A52" }}
      >
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
          <Link
            href="/contact"
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
          </Link>
          <p
            className="mt-10 text-xs font-light"
            style={{
              fontFamily: "'Noto Sans JP', sans-serif",
              color: "rgba(255,255,255,0.38)",
              letterSpacing: "0.1em",
            }}
          >
            しつこい勧誘は一切行いません。まずはお気軽にどうぞ。
          </p>
        </div>
      </section>
    </div>
  );
}
