export default function TermsPage() {
  return (
    <div
      style={{
        fontFamily: "'Noto Sans JP', sans-serif",
        color: "#4A4A4A",
        backgroundColor: "#F7F6F2",
      }}
    >
      <div className="max-w-3xl mx-auto px-6 lg:px-10 py-28">
        <p
          className="mb-3 text-xs tracking-widest uppercase"
          style={{ fontFamily: "'Montserrat', sans-serif", color: "#8FA3AD", letterSpacing: "0.28em" }}
        >
          — Terms of Service —
        </p>
        <h1
          className="mb-12 font-light"
          style={{
            fontFamily: "'Noto Sans JP', sans-serif",
            fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
            color: "#1A4A52",
            letterSpacing: "0.06em",
          }}
        >
          利用規約
        </h1>

        <div className="space-y-10" style={{ fontSize: "0.9rem", lineHeight: 2.1, letterSpacing: "0.04em" }}>
          <section>
            <h2 style={{ fontWeight: 500, color: "#1A4A52", marginBottom: "0.75rem", fontSize: "0.95rem", letterSpacing: "0.06em" }}>
              1. 適用範囲
            </h2>
            <p className="font-light" style={{ color: "#5A5A5A" }}>
              本規約は、Owl English School（以下「当スクール」）が提供するオンライン英語個別指導サービスを利用するすべての方に適用されます。
            </p>
          </section>

          <div style={{ height: "1px", backgroundColor: "#EAE6DF" }} />

          <section>
            <h2 style={{ fontWeight: 500, color: "#1A4A52", marginBottom: "0.75rem", fontSize: "0.95rem", letterSpacing: "0.06em" }}>
              2. 体験レッスン
            </h2>
            <p className="font-light" style={{ color: "#5A5A5A" }}>
              体験レッスンは1回1,000円です。体験レッスン受講後にご入会いただいた場合、初月のレッスン料から1,000円を差し引いてご請求します。
            </p>
          </section>

          <div style={{ height: "1px", backgroundColor: "#EAE6DF" }} />

          <section>
            <h2 style={{ fontWeight: 500, color: "#1A4A52", marginBottom: "0.75rem", fontSize: "0.95rem", letterSpacing: "0.06em" }}>
              3. 料金・お支払い
            </h2>
            <ul className="space-y-2 font-light" style={{ color: "#5A5A5A", paddingLeft: "1.25rem" }}>
              {[
                "レッスン料は前払い制です。",
                "お支払いは銀行振込またはPayPayにて承ります。",
                "月4回パックはお申し込みいただいた月に適用されます。",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span style={{ color: "#1A4A52", flexShrink: 0 }}>—</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <div style={{ height: "1px", backgroundColor: "#EAE6DF" }} />

          <section>
            <h2 style={{ fontWeight: 500, color: "#1A4A52", marginBottom: "0.75rem", fontSize: "0.95rem", letterSpacing: "0.06em" }}>
              4. キャンセル・振替
            </h2>
            <p className="font-light" style={{ color: "#5A5A5A" }}>
              レッスンのキャンセルは前日23:59までにご連絡いただいた場合、無料で振替対応いたします。当日キャンセル・無断欠席の場合はレッスン料の返金・振替はできかねます。
            </p>
          </section>

          <div style={{ height: "1px", backgroundColor: "#EAE6DF" }} />

          <section>
            <h2 style={{ fontWeight: 500, color: "#1A4A52", marginBottom: "0.75rem", fontSize: "0.95rem", letterSpacing: "0.06em" }}>
              5. 禁止事項
            </h2>
            <ul className="space-y-2 font-light" style={{ color: "#5A5A5A", paddingLeft: "1.25rem" }}>
              {[
                "レッスンの無断録画・録音・第三者への配布",
                "講師への誹謗中傷・ハラスメント行為",
                "その他、当スクールが不適切と判断する行為",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span style={{ color: "#1A4A52", flexShrink: 0 }}>—</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <div style={{ height: "1px", backgroundColor: "#EAE6DF" }} />

          <section>
            <h2 style={{ fontWeight: 500, color: "#1A4A52", marginBottom: "0.75rem", fontSize: "0.95rem", letterSpacing: "0.06em" }}>
              6. サービスの停止・変更
            </h2>
            <p className="font-light" style={{ color: "#5A5A5A" }}>
              当スクールは、事前通知の上でサービス内容の変更・料金改定・サービスの停止を行う場合があります。
            </p>
          </section>

          <div style={{ height: "1px", backgroundColor: "#EAE6DF" }} />

          <section>
            <h2 style={{ fontWeight: 500, color: "#1A4A52", marginBottom: "0.75rem", fontSize: "0.95rem", letterSpacing: "0.06em" }}>
              7. お問い合わせ
            </h2>
            <p className="font-light" style={{ color: "#5A5A5A" }}>
              本規約に関するご質問は下記までご連絡ください。
            </p>
            <p className="mt-3 font-light" style={{ color: "#1A4A52" }}>
              owlenglishschool2025@gmail.com
            </p>
          </section>

          <div style={{ height: "1px", backgroundColor: "#EAE6DF" }} />

          <p className="font-light text-xs" style={{ color: "#AAAAAA", letterSpacing: "0.06em" }}>
            制定日：2026年　Owl English School
          </p>
        </div>
      </div>
    </div>
  );
}
