import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SchemaMarkup } from "@/components/layout/SchemaMarkup";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: {
    template: "%s | İzmir Kira Avukatı Mert Kağan Çetin",
    default: "İzmir Kira Avukatı | Av. Mert Kağan Çetin - Gayrimenkul Hukuku",
  },
  description: "İzmir Bayraklı ve Karşıyaka bölgesinde kira hukuku, tahliye davaları ve gayrimenkul danışmanlığı alanında uzman Avukat Mert Kağan Çetin.",
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
