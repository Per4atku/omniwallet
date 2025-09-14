import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "The ØmniWallet – Future of Finance",
  description:
    "A futuristic financial app that unites banking, crypto, and global assets into one omniversal wallet. Mock landing page showcasing design, features, and interactions.",
  keywords: [
    "crypto wallet",
    "finance app",
    "banking",
    "mock landing",
    "UI concept",
    "fintech design",
    "digital assets",
    "future of finance",
  ],
  openGraph: {
    title: "The ØmniWallet – Future of Finance",
    description:
      "Demo landing for a futuristic finance super-app. Explore features, visual design concepts, and UI interactions.",
    url: "https://omniwallet.netlify.app/",
    siteName: "ØmniWallet",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "ØmniWallet preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The ØmniWallet – Future of Finance",
    description:
      "A design mockup for a next-gen financial app blending crypto, banking, and universality.",
    images: ["/logo.svg"],
    creator: "@tyoyoyo",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}  antialiased `}>{children}</body>
    </html>
  );
}
