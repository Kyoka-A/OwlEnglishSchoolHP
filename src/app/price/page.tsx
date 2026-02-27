"use client";

import Link from "next/link";

const plans = [
  {
    instructor: "Kyoka 先生",
    role: "中高生向け / 英検3級〜2級",
    color: "#1A4A52",
    light: "#F0F4F5",
    accentText: "#8FA3AD",
    single: {
      label: "単発レッスン",
      price: "¥3,000",
      sub: "1レッスンあたり",
      note: "都合に合わせて予約",
    },
    monthly: {
      label: "月4回パック",
      price: "¥10,000",
      sub: "月額",
      saving: "¥2,000 お得",
      perLesson: "1レッスン ¥2,500",
    },
    courses: ["英検3級", "英検準2級", "英検準2級プラス", "英検2級", "通常学習コース"],
  },
  {
    instructor: "Masaki 先生",
    role: "大人向け / TOEIC・TOEFL・英会話",
    color: "#3D4A3A",
    light: "#EFF2EE",
    accentText: "#9CA795",
    single: {
      label: "単発レッスン",
      price: "¥8,000",
      sub: "1レッスンあたり",
      note: "都合に合わせて予約",
    },
    monthly: {
      label: "月4回パック",
      price: "¥30,000",
      sub: "月額",
      saving: "¥2,000 お得",
      perLesson: "1レッスン ¥7,500",
    },
    courses: ["TOEIC® 対策", "TOEFL® 対策", "英会話（カナダ式）", "英検準1級・1級"],
  },
];

export default function PricePage() {
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
        style={{ height: "300px", backgroundColor: "#1A4A52" }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(160deg, rgba(26,74,82,1) 0%, rgba(10,35,40,1) 100%)",
          }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 pb-14 w-full">
          <p
            className="mb-2 text-xs tracking-widest uppercase"
            style={{ color: "#8FA3AD", letterSpacing: "0.28em", fontFamily: "'Montserrat', sans-serif" }}
          >
            — Price —
          </p>
          <h1
            className="font-light tracking-widest text-white mb-2"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "clamp(1.75rem, 4vw, 3rem)",
              letterSpacing: "0.2em",
            }}
          >
            PRICE
          </h1>
          <p
            className="text-white font-light text-sm"
            style={{ fontFamily: "'Noto Sans JP', sans-serif", letterSpacing: "0.1em", opacity: 0.65 }}
          >
            シンプルな料金体系。余計な費用は一切ありません。
          </p>
        </div>
      </div>

      {/* ── TRIAL BANNER ── */}
      <div style={{ backgroundColor: "#ffffff", borderBottom: "1px solid #EAE6DF" }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row sm:items-center gap-2">
          <span
            className="text-xs tracking-widest uppercase"
            style={{ fontFamily: "'Montserrat', sans-serif", color: "#1A4A52", letterSpacing: "0.2em", flexShrink: 0, fontWeight: 600 }}
          >
            体験レッスン
          </span>
          <span style={{ width: "1px", height: "14px", backgroundColor: "#EAE6DF", flexShrink: 0 }} className="hidden sm:block" />
          <span
            className="text-sm font-light"
            style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "#4A4A4A", letterSpacing: "0.06em" }}
          >
            初回体験レッスンは <strong style={{ color: "#1A4A52", fontWeight: 600 }}>1,000円</strong>。
            入会いただいた場合は、初月のレッスン料から <strong style={{ color: "#1A4A52", fontWeight: 600 }}>1,000円を差し引き</strong> ご請求します。
          </span>
          <Link
            href="/contact"
            className="text-xs sm:ml-auto transition-opacity duration-300 hover:opacity-60 whitespace-nowrap"
            style={{ fontFamily: "'Montserrat', sans-serif", color: "#1A4A52", letterSpacing: "0.14em", textDecoration: "underline", textUnderlineOffset: "3px" }}
          >
            体験レッスンを予約 →
          </Link>
        </div>
      </div>

      {/* ── PRICING CARDS ── */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <p
              className="mb-3 text-xs tracking-widest uppercase"
              style={{ color: "#1A4A52", letterSpacing: "0.28em", fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}
            >
              — Plans —
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
              料金プラン
            </h2>
            <div className="mx-auto mt-5" style={{ width: "40px", height: "2px", backgroundColor: "#1A4A52" }} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {plans.map((plan) => (
              <div
                key={plan.instructor}
                className="overflow-hidden"
                style={{ border: "1px solid #EAE6DF", backgroundColor: "#ffffff" }}
              >
                {/* Header */}
                <div className="px-10 pt-10 pb-8" style={{ backgroundColor: plan.color }}>
                  <p
                    className="text-xs tracking-widest uppercase mb-2"
                    style={{ fontFamily: "'Montserrat', sans-serif", color: "rgba(255,255,255,0.55)", letterSpacing: "0.2em" }}
                  >
                    {plan.role}
                  </p>
                  <h3
                    style={{
                      fontFamily: "'Noto Sans JP', sans-serif",
                      fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
                      fontWeight: 400,
                      color: "#ffffff",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {plan.instructor}
                  </h3>
                </div>

                {/* Pricing rows */}
                <div className="p-10">
                  <div className="grid grid-cols-2 gap-5 mb-10">
                    {/* Single */}
                    <div
                      className="p-6"
                      style={{ border: "1px solid #EAE6DF", backgroundColor: "#F7F6F2" }}
                    >
                      <p
                        className="text-xs tracking-widest uppercase mb-4"
                        style={{ fontFamily: "'Montserrat', sans-serif", color: plan.accentText, letterSpacing: "0.18em" }}
                      >
                        {plan.single.label}
                      </p>
                      <p
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                          fontWeight: 300,
                          color: plan.color,
                          letterSpacing: "0.04em",
                          lineHeight: 1,
                        }}
                      >
                        {plan.single.price}
                      </p>
                      <p
                        className="mt-1 text-xs font-light"
                        style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "#8A8A8A", letterSpacing: "0.06em" }}
                      >
                        {plan.single.sub}
                      </p>
                      <p
                        className="mt-3 text-xs font-light"
                        style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "#AAAAAA", letterSpacing: "0.04em" }}
                      >
                        {plan.single.note}
                      </p>
                    </div>

                    {/* Monthly */}
                    <div
                      className="p-6 relative"
                      style={{ border: `2px solid ${plan.color}`, backgroundColor: plan.light }}
                    >
                      <span
                        className="absolute top-0 right-0 text-xs px-3 py-1"
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          backgroundColor: plan.color,
                          color: "#ffffff",
                          fontSize: "0.6rem",
                          letterSpacing: "0.1em",
                        }}
                      >
                        BEST VALUE
                      </span>
                      <p
                        className="text-xs tracking-widest uppercase mb-4"
                        style={{ fontFamily: "'Montserrat', sans-serif", color: plan.accentText, letterSpacing: "0.18em" }}
                      >
                        {plan.monthly.label}
                      </p>
                      <p
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                          fontWeight: 300,
                          color: plan.color,
                          letterSpacing: "0.04em",
                          lineHeight: 1,
                        }}
                      >
                        {plan.monthly.price}
                      </p>
                      <p
                        className="mt-1 text-xs font-light"
                        style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "#8A8A8A", letterSpacing: "0.06em" }}
                      >
                        {plan.monthly.sub}
                      </p>
                      <p
                        className="mt-3 text-xs"
                        style={{ fontFamily: "'Noto Sans JP', sans-serif", color: plan.color, letterSpacing: "0.04em", fontWeight: 500 }}
                      >
                        {plan.monthly.perLesson}
                      </p>
                      <p
                        className="mt-1 text-xs font-light"
                        style={{ fontFamily: "'Noto Sans JP', sans-serif", color: plan.accentText, letterSpacing: "0.04em" }}
                      >
                        {plan.monthly.saving}
                      </p>
                    </div>
                  </div>

                  {/* Covered courses */}
                  <div style={{ borderTop: "1px solid #EAE6DF", paddingTop: "1.5rem" }}>
                    <p
                      className="mb-3 text-xs tracking-widest uppercase"
                      style={{ fontFamily: "'Montserrat', sans-serif", color: plan.accentText, letterSpacing: "0.2em" }}
                    >
                      対象コース
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {plan.courses.map((c) => (
                        <span
                          key={c}
                          className="text-xs px-3 py-1.5"
                          style={{
                            fontFamily: "'Noto Sans JP', sans-serif",
                            backgroundColor: plan.light,
                            color: plan.color,
                            border: `1px solid ${plan.color}30`,
                            letterSpacing: "0.05em",
                          }}
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Notes */}
          <div className="mt-12 p-8" style={{ backgroundColor: "#ffffff", border: "1px solid #EAE6DF" }}>
            <p
              className="mb-4 text-xs tracking-widest uppercase"
              style={{ fontFamily: "'Montserrat', sans-serif", color: "#8FA3AD", letterSpacing: "0.22em" }}
            >
              ご注意 / Notes
            </p>
            <ul className="space-y-3">
              {[
                "レッスン時間は1回60分です。",
                "体験レッスン（1,000円）受講後にご入会いただいた場合、初月レッスン料から1,000円を差し引きます。",
                "お支払いはレッスン前払い制です。銀行振込・PayPayに対応しております。",
                "キャンセルは前日23:59までにご連絡いただいた場合、無料で振替対応いたします。",
              ].map((note) => (
                <li
                  key={note}
                  className="flex items-start gap-3 text-sm font-light"
                  style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "#5A5A5A", letterSpacing: "0.04em", lineHeight: 1.9 }}
                >
                  <span style={{ color: "#1A4A52", flexShrink: 0, marginTop: "2px" }}>—</span>
                  {note}
                </li>
              ))}
            </ul>
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
            まずは1,000円の体験レッスンで、<br />
            講師との相性を確かめてみてください。
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
