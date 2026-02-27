"use client";

import Link from "next/link";

export default function InstructorPage() {
  return (
    <div
      style={{
        fontFamily: "'Montserrat', 'Noto Sans JP', sans-serif",
        color: "#4A4A4A",
        backgroundColor: "#F7F6F2",
      }}
    >
      {/* ── PAGE HERO ── */}
      <div
        className="relative flex items-end overflow-hidden"
        style={{ height: "340px" }}
      >
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=80"
          alt="講師紹介"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center 40%" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(160deg, rgba(26,74,82,0.72) 0%, rgba(0,0,0,0.45) 100%)",
          }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 pb-14 w-full">
          <p
            className="mb-2 text-xs tracking-widest uppercase"
            style={{ color: "#8FA3AD", letterSpacing: "0.28em", fontFamily: "'Montserrat', sans-serif" }}
          >
            — Instructor —
          </p>
          <h1
            className="font-light tracking-widest text-white"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "clamp(1.75rem, 4vw, 3rem)",
              letterSpacing: "0.2em",
            }}
          >
            INSTRUCTOR
          </h1>
        </div>
      </div>

      {/* ── INTRO ── */}
      <section className="py-20" style={{ backgroundColor: "#F7F6F2" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p
            className="font-light"
            style={{
              fontFamily: "'Noto Sans JP', sans-serif",
              fontSize: "clamp(0.9rem, 1.5vw, 1.05rem)",
              color: "#4A4A4A",
              lineHeight: 2.4,
              letterSpacing: "0.07em",
            }}
          >
            Owl English Schoolには、異なる専門性を持つ2名の講師が在籍しています。<br />
            それぞれの強みを活かし、生徒一人ひとりの目標と状況に合わせた担当講師をご提案します。
          </p>
        </div>
      </section>

      {/* ── INSTRUCTOR A ── */}
      <section className="py-24" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Photo */}
            <div className="relative">
              <div
                className="overflow-hidden"
                style={{ aspectRatio: "4/5", maxWidth: "440px" }}
              >
                <img
                  src="/Kyoka.jpg"
                  alt="Kyoka 先生"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center top", filter: "brightness(0.97) saturate(0.95)" }}
                />
              </div>
              {/* Badge */}
              <div
                className="absolute bottom-0 left-0 px-6 py-4"
                style={{ backgroundColor: "#1A4A52" }}
              >
                <p
                  style={{
                    fontFamily: "'Noto Sans JP', sans-serif",
                    fontSize: "0.7rem",
                    color: "#8FA3AD",
                    letterSpacing: "0.14em",
                    marginBottom: "2px",
                  }}
                >
                  担当コース
                </p>
                <p
                  style={{
                    fontFamily: "'Noto Sans JP', sans-serif",
                    fontSize: "0.8rem",
                    color: "#ffffff",
                    letterSpacing: "0.08em",
                    lineHeight: 1.6,
                  }}
                >
                  中学生 / 英検3級〜2級
                </p>
              </div>
            </div>

            {/* Profile */}
            <div>
              <p
                className="mb-2 text-xs tracking-widest uppercase"
                style={{ color: "#1A4A52", letterSpacing: "0.24em", fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}
              >
                Instructor A
              </p>
              <h2
                className="mb-1"
                style={{
                  fontFamily: "'Noto Sans JP', sans-serif",
                  fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                  fontWeight: 300,
                  color: "#1A4A52",
                  letterSpacing: "0.06em",
                }}
              >
                Kyoka 先生
              </h2>
              <p
                className="mb-8 text-sm font-light"
                style={{
                  fontFamily: "'Noto Sans JP', sans-serif",
                  color: "#8FA3AD",
                  letterSpacing: "0.1em",
                }}
              >
                英語教員免許 取得予定 / 個別指導塾講師歴３年
              </p>

              <div style={{ height: "1px", backgroundColor: "#EAE6DF", marginBottom: "2rem" }} />

              {/* Catchcopy */}
              <p
                className="mb-8"
                style={{
                  fontFamily: "'Noto Sans JP', sans-serif",
                  fontSize: "1.0625rem",
                  fontWeight: 500,
                  color: "#1A4A52",
                  letterSpacing: "0.06em",
                  lineHeight: 1.8,
                  borderLeft: "3px solid #1A4A52",
                  paddingLeft: "1rem",
                }}
              >
                「生徒の目線に寄り添い、<br />一緒に成長し続ける先生でありたい。」
              </p>

              <p
                className="mb-8 font-light leading-loose text-sm"
                style={{
                  fontFamily: "'Noto Sans JP', sans-serif",
                  color: "#5A5A5A",
                  letterSpacing: "0.05em",
                  lineHeight: 2.1,
                }}
              >
                現在、英語教員免許の取得に向けて日々学びながら、豊富な指導経験を積み重ねています。
                「難しい」「わからない」という気持ちに真摯に向き合い、生徒が「できた！」と感じる瞬間のために丁寧な指導を実践しています。
                特に中学生の基礎固めと英検コース（3級〜2級）の指導を得意としており、試験本番まで伴走する安心感が好評です。
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-10">
                {["英語教員免許 取得予定", "個別指導塾講師歴３年", "中学生指導 得意", "英検3級〜2級 対応"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 text-xs"
                    style={{
                      fontFamily: "'Noto Sans JP', sans-serif",
                      backgroundColor: "#F0F4F5",
                      color: "#1A4A52",
                      border: "1px solid rgba(26,74,82,0.15)",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Courses */}
              <div style={{ backgroundColor: "#F7F6F2", padding: "1.5rem" }}>
                <p
                  className="mb-3 text-xs tracking-widest uppercase"
                  style={{ color: "#8FA3AD", fontFamily: "'Montserrat', sans-serif", letterSpacing: "0.2em" }}
                >
                  担当コース
                </p>
                <ul className="space-y-2">
                  {[
                    "中学生向け全コース（定期テスト対策・基礎力向上）",
                    "英検3級コース",
                    "英検準2級コース",
                    "英検準2級プラス（2級準備）コース",
                    "英検2級コース",
                  ].map((c) => (
                    <li
                      key={c}
                      className="flex items-center gap-2.5 text-sm font-light"
                      style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "#4A4A4A", letterSpacing: "0.04em" }}
                    >
                      <span style={{ color: "#1A4A52", fontWeight: 600, flexShrink: 0 }}>▸</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INSTRUCTOR B ── */}
      <section className="py-24" style={{ backgroundColor: "#F7F6F2" }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Profile (left on desktop) */}
            <div className="order-2 lg:order-1">
              <p
                className="mb-2 text-xs tracking-widest uppercase"
                style={{ color: "#9CA795", letterSpacing: "0.24em", fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}
              >
                Instructor B
              </p>
              <h2
                className="mb-1"
                style={{
                  fontFamily: "'Noto Sans JP', sans-serif",
                  fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                  fontWeight: 300,
                  color: "#4A4A4A",
                  letterSpacing: "0.06em",
                }}
              >
                Masaki 先生
              </h2>
              <p
                className="mb-8 text-sm font-light"
                style={{
                  fontFamily: "'Noto Sans JP', sans-serif",
                  color: "#9CA795",
                  letterSpacing: "0.1em",
                }}
              >
                英検1級 / TOEIC 945点 / カナダ・日本ハーフ / 英語歴２１年
              </p>

              <div style={{ height: "1px", backgroundColor: "#EAE6DF", marginBottom: "2rem" }} />

              <p
                className="mb-8"
                style={{
                  fontFamily: "'Noto Sans JP', sans-serif",
                  fontSize: "1.0625rem",
                  fontWeight: 500,
                  color: "#3A5C40",
                  letterSpacing: "0.06em",
                  lineHeight: 1.8,
                  borderLeft: "3px solid #9CA795",
                  paddingLeft: "1rem",
                }}
              >
                「英語はずっと自分の一部として育ってきた。<br />だからこそ、本物を届けたい。」
              </p>

              <p
                className="mb-8 font-light text-sm"
                style={{
                  fontFamily: "'Noto Sans JP', sans-serif",
                  color: "#5A5A5A",
                  letterSpacing: "0.05em",
                  lineHeight: 2.1,
                }}
              >
                カナダと日本のハーフとして生まれ、英語歴２１年。幼少期から英語・日本語の両言語環境で育ち、ネイティブとしての英語感覚と日本語での丁寧な解説を両立できることが最大の強みです。
                英検1級・TOEIC 945点を取得し、TOEIC® / TOEFL® の試験対策では得点を最大化するための論理的なアプローチを得意としています。
                「試験のための英語」にとどまらず、実際のコミュニケーションで使える英語力の習得を目指した指導を行います。
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-10">
                {["英検1級", "TOEIC 945点", "カナダ・日本ハーフ", "英語歴２１年", "TOEIC対策", "TOEFL対策"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 text-xs"
                    style={{
                      fontFamily: "'Noto Sans JP', sans-serif",
                      backgroundColor: "#EFF2EE",
                      color: "#3A5C40",
                      border: "1px solid rgba(156,167,149,0.25)",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Courses */}
              <div style={{ backgroundColor: "#ffffff", padding: "1.5rem", border: "1px solid #EAE6DF" }}>
                <p
                  className="mb-3 text-xs tracking-widest uppercase"
                  style={{ color: "#9CA795", fontFamily: "'Montserrat', sans-serif", letterSpacing: "0.2em" }}
                >
                  担当コース
                </p>
                <ul className="space-y-2">
                  {[
                    "TOEIC® 対策コース",
                    "TOEFL® 対策コース",
                    "英会話コース（カナダ式自然なスピーキング）",
                    "英検準1級・1級コース",
                  ].map((c) => (
                    <li
                      key={c}
                      className="flex items-center gap-2.5 text-sm font-light"
                      style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "#4A4A4A", letterSpacing: "0.04em" }}
                    >
                      <span style={{ color: "#9CA795", fontWeight: 600, flexShrink: 0 }}>▸</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Photo (right on desktop) */}
            <div className="order-1 lg:order-2 relative">
              <div
                className="overflow-hidden lg:ml-auto"
                style={{ aspectRatio: "4/5", maxWidth: "440px" }}
              >
                <img
                  src="/Masaki.jpg"
                  alt="Masaki 先生"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center top", filter: "brightness(0.97) saturate(0.9)" }}
                />
              </div>
              {/* Badge */}
              <div
                className="absolute bottom-0 right-0 lg:right-0 px-6 py-4"
                style={{ backgroundColor: "#9CA795" }}
              >
                <p
                  style={{
                    fontFamily: "'Noto Sans JP', sans-serif",
                    fontSize: "0.7rem",
                    color: "rgba(255,255,255,0.75)",
                    letterSpacing: "0.14em",
                    marginBottom: "2px",
                  }}
                >
                  担当コース
                </p>
                <p
                  style={{
                    fontFamily: "'Noto Sans JP', sans-serif",
                    fontSize: "0.8rem",
                    color: "#ffffff",
                    letterSpacing: "0.08em",
                    lineHeight: 1.6,
                  }}
                >
                  TOEIC / TOEFL / 英会話 / 英検1級
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24" style={{ backgroundColor: "#1A4A52" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p
            className="mb-5 text-xs tracking-widest uppercase"
            style={{ color: "rgba(143,163,173,0.8)", letterSpacing: "0.28em", fontFamily: "'Montserrat', sans-serif" }}
          >
            Trial Lesson
          </p>
          <h2
            className="mb-10 font-light"
            style={{
              fontFamily: "'Noto Sans JP', sans-serif",
              fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
              color: "#ffffff",
              letterSpacing: "0.08em",
              lineHeight: 2,
            }}
          >
            まずは担当講師と、体験レッスン（1,000円）で<br />直接お話しませんか。
          </h2>
          <Link
            href="/contact"
            className="inline-block px-12 py-4 rounded-full text-sm tracking-widest transition-all duration-300"
            style={{
              backgroundColor: "#ffffff",
              color: "#1A4A52",
              fontFamily: "'Noto Sans JP', sans-serif",
              fontWeight: 500,
              letterSpacing: "0.14em",
              boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.transform = "translateY(-4px)";
              el.style.boxShadow = "0 16px 40px rgba(0,0,0,0.22)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "0 8px 32px rgba(0,0,0,0.15)";
            }}
          >
            体験レッスンを予約する（1,000円）
          </Link>
        </div>
      </section>
    </div>
  );
}

