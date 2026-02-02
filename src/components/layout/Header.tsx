"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/logo";
import { MobileNav } from "./MobileNav";
import { cn } from "@/lib/utils";

const navigation = [
    { name: "Anasayfa", href: "/" },
    { name: "Hukuki Makaleler", href: "/blog" },
    { name: "Hizmetlerimiz", href: "/hizmetler" },
    { name: "Hakkımızda", href: "/hakkimda" },
    { name: "İletişim", href: "/iletisim" },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300",
                isScrolled
                    ? "bg-white/80 backdrop-blur-md border-b border-border py-4"
                    : "bg-white border-b border-transparent py-6"
            )}
        >
            <div className="container mx-auto px-4">
                <nav className="flex items-center justify-between">
                    <div className="flex-shrink-0">
                        <Link href="/" className="hover:opacity-80 transition-opacity">
                            <Logo />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-10">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "text-xs font-bold uppercase tracking-[0.2em] transition-colors hover:text-primary",
                                    pathname === item.href ? "text-primary" : "text-muted-foreground"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden md:block">
                        <Link
                            href="tel:+905445854645"
                            className="text-xs font-bold uppercase tracking-widest text-primary border-b border-primary pb-0.5 hover:text-muted-foreground hover:border-muted-foreground transition-all"
                        >
                            0544 585 46 45
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
