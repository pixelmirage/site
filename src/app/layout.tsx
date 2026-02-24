import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SchemaMarkup } from "@/components/layout/SchemaMarkup";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin", "latin-ext"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin", "latin-ext"], variable: "--font-playfair" });

export const metadata: Metadata = {
  metadataBase: new URL('https://mertkagancetin.com'),
  title: {
    template: "%s | Av. Mert Kağan Çetin",
    default: "Av. Mert Kağan Çetin | Kira ve Gayrimenkul Hukuku",
  },
  description: "Av. Mert Kağan Çetin; kira hukuku, tahliye davaları ve gayrimenkul uyuşmazlıkları alanında İzmir merkezli avukatlık hizmeti sunar.",
  keywords: ["kira hukuku avukatı", "tahliye davası avukatı", "gayrimenkul hukuku", "İzmir avukat", "kira tespit davası", "tahliye taahhütnamesi"],
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
    title: 'Av. Mert Kağan Çetin | Kira ve Gayrimenkul Hukuku',
    description: 'İzmir\'de kira hukuku, tahliye davaları ve gayrimenkul uyuşmazlıklarında avukatlık hizmeti.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Av. Mert Kağan Çetin - İzmir Kira Avukatı',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Av. Mert Kağan Çetin | Kira ve Gayrimenkul Hukuku',
    description: 'İzmir\'de kira hukuku, tahliye davaları ve gayrimenkul uyuşmazlıklarında avukatlık hizmeti.',
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || '',
  },
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
        <SchemaMarkup />
        <Header />
        <main className="flex-1 w-full pt-[72px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
