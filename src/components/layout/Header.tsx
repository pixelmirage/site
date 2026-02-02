"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/logo";
import { MobileNav } from "./MobileNav";
import { cn } from "@/lib/utils";
import { Phone } from "lucide-react";

const navigation = [
    { name: "Anasayfa", href: "/" },
    { name: "Makaleler", href: "/blog" },
    { name: "Hizmetler", href: "/hizmetler" },
    { name: "Hakkımızda", href: "/hakkimda" },
    { name: "İletişim", href: "/iletisim" },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-500",
                isScrolled
                    ? "bg-white/95 backdrop-blur-md border-b border-border shadow-sm py-3"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-4">
                <nav className="flex items-center justify-between">
                    <div className="flex-shrink-0">
                        <Link href="/" className="hover:opacity-90 transition-opacity">
                            <Logo />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-12">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "text-xs font-bold uppercase tracking-[0.25em] transition-all hover:text-secondary",
                                    pathname === item.href ? "text-primary border-b border-secondary" : "text-primary/70"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center gap-6">
                        <Link
                            href="tel:+905445854645"
                            className="flex items-center gap-2 text-sm font-serif font-bold text-primary group"
                        >
                            <div className="w-8 h-8 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                                <Phone className="w-3.5 h-3.5" />
                            </div>
                            <span className="tracking-widest">0544 585 46 45</span>
                        </Link>
                    </div>

                    {/* Mobile Nav */}
                    <div className="md:hidden">
                        <MobileNav />
                    </div>
                </nav>
            </div>
        </header>
    );
}
