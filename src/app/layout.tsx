import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Owl English School | 北欧スタイルの完全プライベート英語スクール",
  description:
    "静謐な空間で学ぶ、完全プライベート英語スクール。英検・TOEIC・TOEFL・英会話コースを完全オーダーメイドのカリキュラムで提供します。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Noto+Sans+JP:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
