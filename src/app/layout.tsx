import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Khasfee Imperiale",
  description: "Improve your skin ideal",
  applicationName: "Khasfee Imperiale",
  keywords: [
    "khasfee",
    "imperiale",
    "skin",
    "care",
    "beauty",
    "cosmetics",
    "skincare",
    "luxury",
  ],
  icons:
    "https://pbmusjkkxqeayxdojbrb.supabase.co/storage/v1/object/public/khasfee//logo.png",
  openGraph: {
    title: "Khasfee Imperiale",
    description: "Improve your skin ideal",
    siteName: "Khasfee Imperiale",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${geistMono.variable} font-[family-name:var(--font-inter)] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
