import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "carbootsale.com - Coming Soon",
  description: "We're building a proper home for car boot sales—simple, practical, and fast. Find boot sales near you with all the essentials.",
  keywords: ["car boot sale", "boot sale", "car boot", "boot fair", "UK"],
  authors: [{ name: "carbootsale.com" }],
  creator: "carbootsale.com",
  publisher: "carbootsale.com",
  openGraph: {
    title: "carbootsale.com - Coming Soon",
    description: "We're building a proper home for car boot sales—simple, practical, and fast.",
    type: "website",
    locale: "en_GB",
    siteName: "carbootsale.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "carbootsale.com - Coming Soon",
    description: "We're building a proper home for car boot sales—simple, practical, and fast.",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#4A3428" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a1a" },
  ],
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
