import type { Metadata } from "next";
import { Permanent_Marker, Song_Myung } from "next/font/google";
import "./globals.css";

const SongMyung = Song_Myung({
  weight: "400",
  variable: "--font-song-myung",
  display: "swap",
});

const PermanentMarker = Permanent_Marker({
  variable: "--font-permanent-marker",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Stack+",
  description:
    "Stack+는 게임처럼 언어를 학습하고, 데이터로 성장을 기록하는 다국어 학습 플랫폼입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${SongMyung.variable} ${PermanentMarker.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
