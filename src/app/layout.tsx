import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import NavigationBar from "@/components/layout/navigationbar";
import Footer from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://khasfeeimperiale.com"),
  title: { default: "Khasfee Imperiale", template: "%s | Khasfee Imperiale" },
  description: "Welcome to Khasfee Imperiale",
  alternates: {
    canonical: "https://khasfeeimperiale.com",
    languages: {
      "en-US": "https://khasfeeimperiale.com/en-US",
      "de-DE": "https://khasfeeimperiale.com/de-DE",
      "id-ID": "https://khasfeeimperiale.com/id-ID",
    },
  },
  openGraph: {
    title: "Khasfee Imperiale",
    description: "Welcome to Khasfee Imperiale",
    url: "https://khasfeeimperiale.com",
    siteName: "Khasfee Imperiale",
    images: [{ url: "https://khasfeeimperiale.com/og.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
