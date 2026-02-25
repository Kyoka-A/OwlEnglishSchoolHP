"use client";

import Link from "next/link";

const courses = [
  {
    id: "eiken3",
    grade: "英検3級",
    en: "EIKEN Grade 3",
    target: "中学生・英語基礎からしっかり固めたい方",
    copy: "まず最初の「合格」を、一緒に摑みに行こう。",
    desc: "英検3級は中学英語の総まとめ。単語・文法・リスニング・ライティングを基礎から丁寧に積み上げます。はじめて英検に挑戦する方でも安心してスタートできるよう、学習習慣の作り方から一緒に考えます。",
    points: [
      "中学英語の文法・語彙を体系的に整理",
      "リスニング・リーディング・ライティング全技能対応",
      "本番形式の模擬試験で試験慣れ",
    ],
    color: "#1A4A52",
    light: "#F0F4F5",
  },
  {
    id: "eiken-pre2",
    grade: "英検準2級",
    en: "EIKEN Grade Pre-2",
    target: "高校英語レベル・大学受験を視野に入れた方",
    copy: "高校英語の壁を越え、次のステージへ。",
    desc: "準2級は高校中級レベル。長文読解・英作文・面接（スピーキング）と、より実践的なスキルが問われます。一次試験突破から二次面接まで、全フェーズを丁寧にサポートします。",
    points: [
      "長文読解・語彙力の強化",
      "英作文（ライティング）の書き方を基礎から",
      "二次面接の対策（発音・応答練習）",
    ],
    color: "#1A4A52",
    light: "#F0F4F5",
  },
  {
    id: "eiken-pre2plus",
    grade: "英検準2級プラス",
    en: "EIKEN Pre-2 → Grade 2 Bridge",
    target: "準2級取得済みで2級を目指す方",
    copy: "「準2級は取った。次は2級へ。」そのギャップを埋める。",
    desc: "準2級合格後、2級に向けてさらにレベルアップするための中間強化コース。準2級と2級の間には大きなハードルがあります。語彙・長文・英作文のレベルを一段ずつ引き上げ、2級合格を現実的な目標へ変えます。",
    points: [
      "準2級→2級の差分語彙を集中強化",
      "2級レベルの長文読解・英作文トレーニング",
      "2級二次面接の早期対策開始",
    ],
    color: "#1A4A52",
    light: "#F0F4F5",
    badge: "BRIDGE COURSE",
  },
  {
    id: "eiken2",
    grade: "英検2級",
    en: "EIKEN Grade 2",
    target: "大学受験・就職活動に活かしたい方",
    copy: "英検2級は、未来を切り拓くパスポート。",
    desc: "英検2級は高校卒業レベル。大学入試優遇・就職活動でのアピールポイントとして評価が高い資格です。論理的な長文読解・意見論述型の英作文・二次面接の面接官対策まで、戦略的に取り組みます。",
    points: [
      "意見論述型ライティング（型から習得）",
      "長文の速読・精読トレーニング",
      "二次面接の模擬練習（録画フィードバック付き）",
    ],
    color: "#1A4A52",
    light: "#F0F4F5",
  },
  {
    id: "general",
    grade: "通常学習コース",
    en: "General Learning Course",
    target: "定期テスト対策・基礎力向上をしたい中高生",
    copy: "学校の英語を、自信に変える。",
    desc: "定期テストの点数アップ・苦手単元の解消・基礎文法の復習まで、学校の授業に合わせた個別サポートコースです。「英語が嫌い」「授業についていけない」という状態から、丁寧に立て直します。",
    points: [
      "学校の進度・教科書に合わせた個別サポート",
      "苦手文法・単元の徹底復習",
      "テスト前の集中対策・過去問演習",
    ],
    color: "#8FA3AD",
    light: "#F0F3F5",
  },
];

export default function StudentsCoursePage() {
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
          src="https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?auto=format&fit=crop&w=1920&q=80"
          alt="中高生向けコース"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center 40%" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(160deg, rgba(26,74,82,0.78) 0%, rgba(0,0,0,0.48) 100%)",
          }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 pb-14 w-full">
          <p
            className="mb-2 text-xs tracking-widest uppercase"
            style={{ color: "#8FA3AD", letterSpacing: "0.28em", fontFamily: "'Montserrat', sans-serif" }}
          >
            — For Students —
          </p>
          <h1
            className="font-light tracking-widest text-white mb-2"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "clamp(1.75rem, 4vw, 3rem)",
              letterSpacing: "0.2em",
            }}
          >
            中高生向け英語コース
          </h1>
          <p
            className="text-white font-light text-sm"
            style={{ fontFamily: "'Noto Sans JP', sans-serif", letterSpacing: "0.1em", opacity: 0.75 }}
          >
            ワンランク上の結果と、未来への自信を。
          </p>
        </div>
      </div>

      {/* ── INSTRUCTOR BADGE ── */}
      <div style={{ backgroundColor: "#1A4A52", padding: "1.25rem 0" }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <span
            className="text-xs tracking-widest uppercase"
            style={{ fontFamily: "'Montserrat', sans-serif", color: "#8FA3AD", letterSpacing: "0.2em", flexShrink: 0 }}
          >
            担当講師
          </span>
          <span
            style={{
              width: "1px",
              height: "14px",
              backgroundColor: "rgba(143,163,173,0.4)",
              display: "none",
            }}
            className="hidden sm:block"
          />
          <span
            className="text-sm font-light"
            style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "#ffffff", letterSpacing: "0.08em" }}
          >
            ○○ 先生（英語教員免許 取得予定）— 全コース担当
          </span>
          <Link
            href="/instructor"
            className="text-xs ml-auto transition-opacity duration-300 hover:opacity-70"
            style={{ fontFamily: "'Montserrat', sans-serif", color: "#8FA3AD", letterSpacing: "0.14em", textDecoration: "underline" }}
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
                  {course.badge && (
                    <span
                      className="text-xs mb-3 px-2 py-1"
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        color: course.color,
                        backgroundColor: "#ffffff",
                        letterSpacing: "0.12em",
                        fontSize: "0.6rem",
                      }}
                    >
                      {course.badge}
                    </span>
                  )}
                  <p
                    style={{
                      fontFamily: "'Noto Sans JP', sans-serif",
                      fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
                      fontWeight: 500,
                      color: "#ffffff",
                      letterSpacing: "0.05em",
                      lineHeight: 1.4,
                    }}
                  >
                    {course.grade}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "0.65rem",
                      color: "rgba(255,255,255,0.6)",
                      letterSpacing: "0.12em",
                      marginTop: "6px",
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
            どのコースが合っているか、<br />
            まずは無料でご相談ください。
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

