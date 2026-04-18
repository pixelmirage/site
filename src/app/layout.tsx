import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700"], variable: "--font-playfair", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL('https://mertkagancetin.com'),
  title: {
    template: "%s | Av. Mert Kağan Çetin",
    default: "İzmir Avukat | Av. Mert Kağan Çetin Hukuk Bürosu",
  },
  description: "Av. Mert Kağan Çetin; kira hukuku, iş hukuku, boşanma davaları ve tazminat hukuku alanında İzmir merkezli avukatlık hizmeti sunar.",
  keywords: ["kira hukuku avukatı", "tahliye davası avukatı", "tazminat avukatı", "İzmir avukat", "kira tespit davası", "tahliye taahhütnamesi", "iş hukuku avukatı", "işe iade davası", "kıdem tazminatı", "boşanma avukatı", "velayet davası", "nafaka davası", "İzmir iş avukatı", "İzmir boşanma avukatı", "İzmir tazminat avukatı"],
  authors: [{ name: "Av. Mert Kağan Çetin" }],
  creator: "Mert Kağan Çetin Hukuk Bürosu",
  publisher: "Mert Kağan Çetin Hukuk Bürosu",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://mertkagancetin.com',
    siteName: 'Av. Mert Kağan Çetin',
    title: 'İzmir Avukat | Av. Mert Kağan Çetin Hukuk Bürosu',
    description: 'İzmir\'de kira hukuku, iş hukuku, boşanma davaları ve tazminat davalarında avukatlık hizmeti.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Av. Mert Kağan Çetin - İzmir Avukat',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'İzmir Avukat | Av. Mert Kağan Çetin Hukuk Bürosu',
    description: 'İzmir\'de kira hukuku, iş hukuku, boşanma davaları ve tazminat davalarında avukatlık hizmeti.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  ...(process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION ? {
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    },
  } : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.variable,
        playfair.variable
      )}>
        <Header />
        <main className="flex-1 w-full pt-[72px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
