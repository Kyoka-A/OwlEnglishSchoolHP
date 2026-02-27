"use client";

import Link from "next/link";

const steps = [
  {
    num: "01",
    title: "Web からご予約",
    sub: "Contact Form / LINE",
    desc: "お問い合わせフォームまたはLINEより、ご希望の体験レッスン日時とご相談内容をお知らせください。24時間以内にご返信いたします。",
    note: "返信目安：24時間以内",
  },
  {
    num: "02",
    title: "カウンセリング・目標設定",
    sub: "Online Counseling",
    desc: "Zoomにて約20〜30分のカウンセリングを行います。現在の英語力、目指す目標、学習スケジュールなどをじっくりとヒアリングします。焦らず、ゆっくりとお話しください。",
    note: "所要時間：20〜30分",
  },
  {
    num: "03",
    title: "担当講師のご提案",
    sub: "Instructor Matching",
    desc: "カウンセリング内容をもとに、最適な担当講師とコースをご提案します。複数のコースが候補になる場合はご説明のうえ、ご希望に合わせてお選びいただけます。",
    note: "完全無料・ご提案のみもOK",
  },
  {
    num: "04",
    title: "体験レッスン",
    sub: "Trial Lesson — ¥1,000",
    desc: "実際の授業形式で45〜60分の体験レッスンを受講いただきます。教材・Zoomリンクはこちらからお送りします。PCまたはスマートフォンがあればご参加いただけます。体験レッスンは1,000円。そのまま入会いただく場合は、レッスン料から差し引いてご請求します。",
    note: "体験レッスン 1,000円・入会時に全額返金",
  },
  {
    num: "05",
    title: "ご入会・学習スタート",
    sub: "Start Learning",
    desc: "体験レッスン後、ご希望いただいた方はお申し込みへ。あなた専用のカリキュラムを作成し、最初のレッスンを設定します。入会後もいつでも目標やペースの調整が可能です。",
    note: "入会後もサポート継続",
  },
];

const faqs = [
  {
    q: "体験レッスンは本当に無料ですか？",
    a: "はい、完全無料です。入会を強制するような案内も一切行いません。まずは気軽にお試しください。",
  },
  {
    q: "どんな機材が必要ですか？",
    a: "PC・スマートフォン・タブレットのいずれかと、カメラ・マイクがあればご受講いただけます。Zoomのアカウントは無料で作成できます。",
  },
  {
    q: "海外からでも受講できますか？",
    a: "はい、完全オンラインですので海外在住の方でも問題ありません。時差に合わせてレッスン時間を調整いたします。",
  },
  {
    q: "レッスンの頻度はどのくらいですか？",
    a: "週1〜3回が多いですが、お客様のペースに合わせて柔軟に設定できます。まずはカウンセリングでご相談ください。",
  },
  {
    q: "途中でコースを変更できますか？",
    a: "もちろんです。目標の変化や習熟度に応じて、いつでもコース変更・担当講師の変更が可能です。",
  },
];

export default function FlowPage() {
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
          src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1920&q=80"
          alt="受講の流れ"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center 60%" }}
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
            — Flow —
          </p>
          <h1
            className="font-light tracking-widest text-white"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "clamp(1.75rem, 4vw, 3rem)",
              letterSpacing: "0.2em",
            }}
          >
            GETTING STARTED
          </h1>
        </div>
      </div>

      {/* ── STEPS ── */}
      <section className="py-28" style={{ backgroundColor: "#F7F6F2" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-20">
            <p
              className="mb-3 text-xs tracking-widest uppercase"
              style={{ color: "#1A4A52", letterSpacing: "0.28em", fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}
            >
              — Step by Step —
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
              体験レッスンまでの流れ
            </h2>
            <div
              className="mx-auto mt-5"
              style={{ width: "40px", height: "2px", backgroundColor: "#1A4A52" }}
            />
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-8 top-0 bottom-0 hidden md:block"
              style={{ width: "1px", backgroundColor: "#EAE6DF", left: "2rem" }}
            />

            <div className="space-y-0">
              {steps.map((step, idx) => (
                <div key={step.num} className="relative flex gap-8 md:gap-12 pb-14">
                  {/* Circle */}
                  <div className="flex-shrink-0 relative z-10">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{
                        backgroundColor: idx === steps.length - 1 ? "#1A4A52" : "#ffffff",
                        border: "2px solid #1A4A52",
                        boxShadow: "0 4px 16px rgba(26,74,82,0.15)",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: "0.7rem",
                          fontWeight: 600,
                          color: idx === steps.length - 1 ? "#ffffff" : "#1A4A52",
                          letterSpacing: "0.08em",
                        }}
                      >
                        {step.num}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-3">
                    <p
                      className="mb-1 text-xs tracking-widest uppercase"
                      style={{ color: "#8FA3AD", fontFamily: "'Montserrat', sans-serif", letterSpacing: "0.2em" }}
                    >
                      {step.sub}
                    </p>
                    <h3
                      className="mb-4"
                      style={{
                        fontFamily: "'Noto Sans JP', sans-serif",
                        fontSize: "1.1rem",
                        fontWeight: 500,
                        color: "#1A4A52",
                        letterSpacing: "0.06em",
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="mb-4 font-light text-sm"
                      style={{
                        fontFamily: "'Noto Sans JP', sans-serif",
                        color: "#5A5A5A",
                        letterSpacing: "0.05em",
                        lineHeight: 2.1,
                      }}
                    >
                      {step.desc}
                    </p>
                    <span
                      className="inline-block text-xs px-3 py-1.5"
                      style={{
                        fontFamily: "'Noto Sans JP', sans-serif",
                        backgroundColor: "#F0F4F5",
                        color: "#1A4A52",
                        border: "1px solid rgba(26,74,82,0.12)",
                        letterSpacing: "0.06em",
                      }}
                    >
                      ✓ {step.note}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-28" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <p
              className="mb-3 text-xs tracking-widest uppercase"
              style={{ color: "#1A4A52", letterSpacing: "0.28em", fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}
            >
              — FAQ —
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
              よくある質問
            </h2>
            <div
              className="mx-auto mt-5"
              style={{ width: "40px", height: "2px", backgroundColor: "#1A4A52" }}
            />
          </div>

          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="py-8"
                style={{ borderBottom: "1px solid #EAE6DF" }}
              >
                <div className="flex gap-5 mb-4">
                  <span
                    className="flex-shrink-0 text-lg font-light"
                    style={{ fontFamily: "'Montserrat', sans-serif", color: "#1A4A52" }}
                  >
                    Q.
                  </span>
                  <p
                    style={{
                      fontFamily: "'Noto Sans JP', sans-serif",
                      fontSize: "0.9375rem",
                      fontWeight: 500,
                      color: "#1A4A52",
                      letterSpacing: "0.05em",
                      lineHeight: 1.8,
                    }}
                  >
                    {faq.q}
                  </p>
                </div>
                <div className="flex gap-5">
                  <span
                    className="flex-shrink-0 text-lg font-light"
                    style={{ fontFamily: "'Montserrat', sans-serif", color: "#9CA795" }}
                  >
                    A.
                  </span>
                  <p
                    className="font-light text-sm"
                    style={{
                      fontFamily: "'Noto Sans JP', sans-serif",
                      color: "#5A5A5A",
                      letterSpacing: "0.05em",
                      lineHeight: 2.1,
                    }}
                  >
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24" style={{ backgroundColor: "#1A4A52" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
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
            ご不明な点はお気軽にどうぞ。<br />
            まずは無料でご相談ください。
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

