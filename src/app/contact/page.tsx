"use client";

import { useState } from "react";

const goals = [
  "英検3級",
  "英検準2級",
  "英検準2級プラス（2級準備）",
  "英検2級",
  "英検準1級・1級",
  "TOEIC® 対策",
  "TOEFL® 対策",
  "英会話（カナダ式スピーキング）",
  "定期テスト対策・基礎力向上",
  "まだ決まっていない",
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    goal: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "14px 16px",
    border: "1px solid #EAE6DF",
    backgroundColor: "#ffffff",
    fontFamily: "'Noto Sans JP', sans-serif",
    fontSize: "0.9rem",
    color: "#4A4A4A",
    letterSpacing: "0.04em",
    outline: "none",
    transition: "border-color 0.2s",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontFamily: "'Montserrat', sans-serif",
    fontSize: "0.7rem",
    color: "#1A4A52",
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    marginBottom: "8px",
    fontWeight: 500,
  };

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
                お問い合わせ・<br />無料体験予約
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
                24時間以内にご返信いたします。<br /><br />
                しつこい勧誘は一切行いませんので、まずはどんな些細なことでもお気軽にどうぞ。
              </p>

              <div className="space-y-6">
                {[
                  { label: "受講形式", value: "完全オンライン（Zoom）" },
                  { label: "対応時間", value: "月〜土  10:00 – 21:00\n日・祝  10:00 – 18:00" },
                  { label: "対象地域", value: "全国・海外からOK" },
                  { label: "メール", value: "info@owl-english.example.com" },
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

            {/* Right: Form */}
            <div className="lg:col-span-3">
              {sent ? (
                /* 送信完了画面 */
                <div
                  className="flex flex-col items-center justify-center text-center py-20 px-8"
                  style={{ backgroundColor: "#ffffff", border: "1px solid #EAE6DF", minHeight: "500px" }}
                >
                  <div
                    className="mb-8 flex items-center justify-center rounded-full"
                    style={{ width: "64px", height: "64px", backgroundColor: "#F0F4F5", border: "2px solid #1A4A52" }}
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" stroke="#1A4A52" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p
                    className="mb-3"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "1rem",
                      fontWeight: 500,
                      color: "#1A4A52",
                      letterSpacing: "0.15em",
                    }}
                  >
                    THANK YOU
                  </p>
                  <p
                    className="mb-2 font-light"
                    style={{
                      fontFamily: "'Noto Sans JP', sans-serif",
                      fontSize: "1rem",
                      color: "#4A4A4A",
                      letterSpacing: "0.06em",
                    }}
                  >
                    お問い合わせありがとうございます。
                  </p>
                  <p
                    className="font-light text-sm"
                    style={{
                      fontFamily: "'Noto Sans JP', sans-serif",
                      color: "#7A7A7A",
                      letterSpacing: "0.05em",
                      lineHeight: 2,
                    }}
                  >
                    24時間以内にご入力いただいたメールアドレス宛に<br />
                    ご返信いたします。しばらくお待ちください。
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-7"
                  style={{ backgroundColor: "#ffffff", padding: "2.5rem", border: "1px solid #EAE6DF" }}
                >
                  {/* Name */}
                  <div>
                    <label htmlFor="name" style={labelStyle}>
                      お名前 <span style={{ color: "#C0392B", fontSize: "0.7rem" }}>*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="例）山田 太郎"
                      value={form.name}
                      onChange={handleChange}
                      style={inputStyle}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#1A4A52")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "#EAE6DF")}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" style={labelStyle}>
                      メールアドレス <span style={{ color: "#C0392B", fontSize: "0.7rem" }}>*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="例）example@email.com"
                      value={form.email}
                      onChange={handleChange}
                      style={inputStyle}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#1A4A52")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "#EAE6DF")}
                    />
                  </div>

                  {/* Phone & Age */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" style={labelStyle}>
                        電話番号（任意）
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="例）080-XXXX-XXXX"
                        value={form.phone}
                        onChange={handleChange}
                        style={inputStyle}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "#1A4A52")}
                        onBlur={(e) => (e.currentTarget.style.borderColor = "#EAE6DF")}
                      />
                    </div>
                    <div>
                      <label htmlFor="age" style={labelStyle}>
                        学年・年齢
                      </label>
                      <input
                        id="age"
                        name="age"
                        type="text"
                        placeholder="例）中学2年生 / 28歳"
                        value={form.age}
                        onChange={handleChange}
                        style={inputStyle}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "#1A4A52")}
                        onBlur={(e) => (e.currentTarget.style.borderColor = "#EAE6DF")}
                      />
                    </div>
                  </div>

                  {/* Goal */}
                  <div>
                    <label htmlFor="goal" style={labelStyle}>
                      ご興味のあるコース <span style={{ color: "#C0392B", fontSize: "0.7rem" }}>*</span>
                    </label>
                    <select
                      id="goal"
                      name="goal"
                      required
                      value={form.goal}
                      onChange={handleChange}
                      style={{ ...inputStyle, appearance: "none", backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%231A4A52' strokeWidth='1.5' fill='none'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center" }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#1A4A52")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "#EAE6DF")}
                    >
                      <option value="">選択してください</option>
                      {goals.map((g) => (
                        <option key={g} value={g}>
                          {g}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" style={labelStyle}>
                      ご質問・ご要望（任意）
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="現在のお悩み、ご希望の受講スケジュール、ご質問など、なんでもお気軽にお書きください。"
                      value={form.message}
                      onChange={handleChange}
                      style={{ ...inputStyle, resize: "vertical" }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#1A4A52")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "#EAE6DF")}
                    />
                  </div>

                  {/* Privacy */}
                  <p
                    className="text-xs font-light"
                    style={{
                      fontFamily: "'Noto Sans JP', sans-serif",
                      color: "#9A9A9A",
                      letterSpacing: "0.04em",
                      lineHeight: 1.8,
                    }}
                  >
                    ご入力いただいた個人情報は、お問い合わせへの返信・体験レッスンのご案内のみに使用します。第三者への提供は一切行いません。
                  </p>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full py-5 text-sm text-white tracking-widest transition-all duration-300"
                    style={{
                      backgroundColor: "#1A4A52",
                      fontFamily: "'Noto Sans JP', sans-serif",
                      fontWeight: 500,
                      letterSpacing: "0.16em",
                      border: "none",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#153d44";
                      (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#1A4A52";
                      (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                    }}
                  >
                    送信する（無料体験を申し込む）
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

