export default function PrivacyPage() {
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
          — Privacy Policy —
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
          プライバシーポリシー
        </h1>

        <div className="space-y-10" style={{ fontSize: "0.9rem", lineHeight: 2.1, letterSpacing: "0.04em" }}>
          <section>
            <h2 style={{ fontWeight: 500, color: "#1A4A52", marginBottom: "0.75rem", fontSize: "0.95rem", letterSpacing: "0.06em" }}>
              1. 個人情報の収集
            </h2>
            <p className="font-light" style={{ color: "#5A5A5A" }}>
              当スクール（Owl English School）は、お問い合わせ・体験レッスン申し込み・ご入会の際に、お名前・メールアドレス・電話番号・学年・年齢等の個人情報をお預かりします。
            </p>
          </section>

          <div style={{ height: "1px", backgroundColor: "#EAE6DF" }} />

          <section>
            <h2 style={{ fontWeight: 500, color: "#1A4A52", marginBottom: "0.75rem", fontSize: "0.95rem", letterSpacing: "0.06em" }}>
              2. 利用目的
            </h2>
            <p className="font-light" style={{ color: "#5A5A5A" }}>
              収集した個人情報は、以下の目的にのみ使用します。
            </p>
            <ul className="mt-3 space-y-2 font-light" style={{ color: "#5A5A5A", paddingLeft: "1.25rem" }}>
              {[
                "お問い合わせへの返信",
                "体験レッスン・入会手続きのご案内",
                "レッスン日程・教材等のご連絡",
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
              3. 第三者への提供
            </h2>
            <p className="font-light" style={{ color: "#5A5A5A" }}>
              法令に基づく場合を除き、ご本人の同意なく第三者に個人情報を提供することは一切ありません。
            </p>
          </section>

          <div style={{ height: "1px", backgroundColor: "#EAE6DF" }} />

          <section>
            <h2 style={{ fontWeight: 500, color: "#1A4A52", marginBottom: "0.75rem", fontSize: "0.95rem", letterSpacing: "0.06em" }}>
              4. 個人情報の管理
            </h2>
            <p className="font-light" style={{ color: "#5A5A5A" }}>
              個人情報の漏洩・紛失・改ざん等を防ぐため、適切な安全管理措置を講じます。
            </p>
          </section>

          <div style={{ height: "1px", backgroundColor: "#EAE6DF" }} />

          <section>
            <h2 style={{ fontWeight: 500, color: "#1A4A52", marginBottom: "0.75rem", fontSize: "0.95rem", letterSpacing: "0.06em" }}>
              5. 開示・訂正・削除
            </h2>
            <p className="font-light" style={{ color: "#5A5A5A" }}>
              ご本人からの個人情報の開示・訂正・削除等のご要望は、下記メールアドレスよりお申し出ください。速やかに対応いたします。
            </p>
            <p className="mt-3 font-light" style={{ color: "#1A4A52" }}>
              owlenglishschool2025@gmail.com
            </p>
          </section>

          <div style={{ height: "1px", backgroundColor: "#EAE6DF" }} />

          <section>
            <h2 style={{ fontWeight: 500, color: "#1A4A52", marginBottom: "0.75rem", fontSize: "0.95rem", letterSpacing: "0.06em" }}>
              6. Cookieの使用
            </h2>
            <p className="font-light" style={{ color: "#5A5A5A" }}>
              本サイトでは、サイトの利便性向上を目的としてCookieを使用する場合があります。ブラウザの設定によりCookieを無効にすることも可能ですが、一部機能が制限される場合があります。
            </p>
          </section>

          <div style={{ height: "1px", backgroundColor: "#EAE6DF" }} />

          <p className="font-light text-xs" style={{ color: "#AAAAAA", letterSpacing: "0.06em" }}>
            制定日：2025年　Owl English School
          </p>
        </div>
      </div>
    </div>
  );
}
