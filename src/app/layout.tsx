import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import QueryProvider from "@/providers/QueryProvider";
import localFont from "next/font/local";
import AuthProvider from "@/providers/AuthProvider";
import { Toaster } from "sonner";

const pretendard = localFont({
  src: "../../public/fonts/pretendard/PretendardVariable.woff2",
  display: "swap",
  weight: "100 900",
  variable: "--font-pretendard",
});

export const sekuya = localFont({
  src: [
    {
      path: "../../public/fonts/sekuya/Sekuya-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-sekuya",
  display: "swap",
});
export const metadata: Metadata = {
  title: "Stack+",
  description:
    "Stack+는 언어를 학습하고, 데이터로 성장을 기록하는 학습 플랫폼입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${sekuya.variable} ${pretendard.variable}  antialiased`}
      >
        <QueryProvider>
          <AuthProvider>
            <Toaster richColors position="top-center" />
            {children}
            <Footer />
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
