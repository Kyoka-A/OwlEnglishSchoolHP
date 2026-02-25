"use client";

import Link from "next/link";

const courses = [
  {
    id: "toeic",
    grade: "TOEIC® 対策コース",
    en: "TOEIC Preparation",
    target: "就職・転職・昇進に英語スコアが必要な方",
    copy: "スコアは、努力の積み重ねに正直だ。",
    desc: "TOEIC® L&Rテストは、戦略的な学習でスコアが伸びる試験です。出題パターンの分析・時間配分・パート別の攻略法をしっかりと習得し、着実にスコアアップを目指します。目標スコアに合わせてカリキュラムを設計します。",
    points: [
      "パート別攻略法の習得（L&R全パート対応）",
      "時間内に解き切る速読・速聴トレーニング",
      "頻出語彙・フレーズの効率的な暗記法",
    ],
    color: "#1A4A52",
  },
  {
    id: "toefl",
    grade: "TOEFL® 対策コース",
    en: "TOEFL Preparation",
    target: "海外大学進学・留学を目指している方",
    copy: "海外の扉を開く鍵は、TOEFL® スコアにある。",
    desc: "TOEFL® iBTは4技能（Reading / Listening / Speaking / Writing）を総合的に問う難関試験です。アカデミック英語の読解・論述・口頭表現を、実際の大学授業を想定した形で徹底的に鍛えます。",
    points: [
      "Integrated / Independent タスク対策",
      "アカデミックリーディング・リスニングの強化",
      "スピーキング・ライティングの採点基準を理解した指導",
    ],
    color: "#1A4A52",
  },
  {
    id: "eikaiwa",
    grade: "英会話コース",
    en: "English Conversation — Canadian Style",
    target: "自然な英語で話せるようになりたい方",
    copy: "正しい英語より、伝わる英語を。",
    desc: "カナダ長期留学経験を持つ講師が、ネイティブが実際に使う自然な表現・発音・リズムを直接指導します。教科書英語から脱却し、リアルなコミュニケーションで使える英語を習得します。ビジネス英会話にも対応。",
    points: [
      "カナダ式ナチュラルスピーキングの習得",
      "発音・イントネーション・リズムの矯正",
      "日常会話からビジネスシーン表現まで",
    ],
    color: "#9CA795",
  },
  {
    id: "eiken-advanced",
    grade: "英検準1級・1級コース",
    en: "EIKEN Grade Pre-1 / Grade 1",
    target: "英語の総合力を高めたい社会人・大学生",
    copy: "英検1級は、英語力の頂点への挑戦。",
    desc: "英検1級はTOEFL・TOEICと並ぶ最難関英語資格。準1級・1級では高度な語彙力・論述力・面接でのディスカッション能力が問われます。取得講師が、実体験をもとにした効率的な対策法を指導します。",
    points: [
      "難関語彙・熟語の効率的な習得法",
      "英語エッセイ（意見論述）の構成力強化",
      "二次面接：ディスカッション・スピーチ対策",
    ],
    color: "#9CA795",
  },
];

export default function AdultsCoursePage() {
  return (
    <div
      style={{
        fontFamily: "'Montserrat', 'Noto Sans JP', sans-serif",
        color: "#4A4A4A",
        backgroundColor: "#F7F6F2",
      }}
    >
      {/* ── PAGE HERO ── */}
      <div className="relative flex items-end overflow-hidden" style={{ height: "360px" }}>
        <img
          src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=1920&q=80"
          alt="大人向けコース"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center 50%" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(160deg, rgba(26,74,82,0.72) 0%, rgba(0,0,0,0.48) 100%)",
          }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 pb-14 w-full">
          <p
            className="mb-2 text-xs tracking-widest uppercase"
            style={{ color: "#9CA795", letterSpacing: "0.28em", fontFamily: "'Montserrat', sans-serif" }}
          >
            — For Adults —
          </p>
          <h1
            className="font-light tracking-widest text-white mb-2"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "clamp(1.75rem, 4vw, 3rem)",
              letterSpacing: "0.2em",
            }}
          >
            大人向け英語コース
          </h1>
          <p
            className="text-white font-light text-sm"
            style={{ fontFamily: "'Noto Sans JP', sans-serif", letterSpacing: "0.1em", opacity: 0.75 }}
          >
            キャリアを加速させる、洗練された英語力。
          </p>
        </div>
      </div>

      {/* ── INSTRUCTOR BADGE ── */}
      <div style={{ backgroundColor: "#9CA795", padding: "1.25rem 0" }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <span
            className="text-xs tracking-widest uppercase"
            style={{ fontFamily: "'Montserrat', sans-serif", color: "rgba(255,255,255,0.75)", letterSpacing: "0.2em", flexShrink: 0 }}
          >
            担当講師
          </span>
          <span
            className="text-sm font-light"
            style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "#ffffff", letterSpacing: "0.08em" }}
          >
            ●● 先生（英検1級 / TOEIC 945点 / カナダ留学経験）— 全コース担当
          </span>
          <Link
            href="/instructor"
            className="text-xs ml-auto transition-opacity duration-300 hover:opacity-70"
            style={{ fontFamily: "'Montserrat', sans-serif", color: "rgba(255,255,255,0.8)", letterSpacing: "0.14em", textDecoration: "underline" }}
          >
            講師プロフィール →
          </Link>
        </div>
      </div>

      {/* ── COURSES ── */}
      <section className="py-24" style={{ backgroundColor: "#F7F6F2" }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <p
              className="mb-3 text-xs tracking-widest uppercase"
              style={{ color: "#1A4A52", letterSpacing: "0.28em", fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}
            >
              — Course Lineup —
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
              コース一覧
            </h2>
            <div className="mx-auto mt-5" style={{ width: "40px", height: "2px", backgroundColor: "#1A4A52" }} />
          </div>

          <div className="space-y-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className="grid grid-cols-1 lg:grid-cols-5 overflow-hidden transition-all duration-300"
                style={{ backgroundColor: "#ffffff", border: "1px solid #EAE6DF" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 40px rgba(26,74,82,0.1)";
                  (e.currentTarget as HTMLDivElement).style.borderColor = course.color;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLDivElement).style.borderColor = "#EAE6DF";
                }}
              >
                {/* Left accent panel */}
                <div
                  className="lg:col-span-1 flex flex-col justify-center items-start p-8 lg:p-10"
                  style={{ backgroundColor: course.color, minHeight: "160px" }}
                >
                  <p
                    style={{
                      fontFamily: "'Noto Sans JP', sans-serif",
                      fontSize: "clamp(0.95rem, 1.5vw, 1.2rem)",
                      fontWeight: 500,
                      color: "#ffffff",
                      letterSpacing: "0.04em",
                      lineHeight: 1.5,
                    }}
                  >
                    {course.grade}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "0.6rem",
                      color: "rgba(255,255,255,0.55)",
                      letterSpacing: "0.1em",
                      marginTop: "8px",
                      lineHeight: 1.6,
                    }}
                  >
                    {course.en}
                  </p>
                </div>

                {/* Right content */}
                <div className="lg:col-span-4 p-8 lg:p-10">
                  <p
                    className="mb-1 text-xs"
                    style={{
                      fontFamily: "'Noto Sans JP', sans-serif",
                      color: "#8FA3AD",
                      letterSpacing: "0.08em",
                    }}
                  >
                    対象：{course.target}
                  </p>
                  <p
                    className="mb-5"
                    style={{
                      fontFamily: "'Noto Sans JP', sans-serif",
                      fontSize: "1rem",
                      fontWeight: 500,
                      color: course.color,
                      letterSpacing: "0.06em",
                      lineHeight: 1.7,
                    }}
                  >
                    {course.copy}
                  </p>
                  <p
                    className="mb-6 font-light text-sm"
                    style={{
                      fontFamily: "'Noto Sans JP', sans-serif",
                      color: "#5A5A5A",
                      letterSpacing: "0.05em",
                      lineHeight: 2.1,
                    }}
                  >
                    {course.desc}
                  </p>
                  <ul className="flex flex-col sm:flex-row flex-wrap gap-3">
                    {course.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex items-start gap-2 text-xs font-light"
                        style={{
                          fontFamily: "'Noto Sans JP', sans-serif",
                          color: "#4A4A4A",
                          letterSpacing: "0.04em",
                        }}
                      >
                        <span style={{ color: course.color, fontWeight: 700, flexShrink: 0, marginTop: "1px" }}>✓</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
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
            Free Trial
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
            仕事終わりでも、休日でも。<br />
            あなたのペースで英語を伸ばしませんか。
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
              無料体験レッスンを予約する
            </Link>
            <Link
              href="/instructor"
              className="inline-block px-8 py-4 text-sm tracking-widest transition-all duration-300"
              style={{
                border: "1px solid rgba(255,255,255,0.5)",
                color: "#ffffff",
                fontFamily: "'Noto Sans JP', sans-serif",
                letterSpacing: "0.12em",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(255,255,255,0.1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
              }}
            >
              担当講師を見る
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

