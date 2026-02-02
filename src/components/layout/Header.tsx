"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { MobileNav } from "./MobileNav";
import { Logo } from "@/components/ui/logo";
import { PhoneCall } from "lucide-react";

export function Header() {
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { href: "/", label: "Anasayfa" },
        { href: "/hakkimda", label: "Hakkımda" },
        { href: "/hizmetler", label: "Hizmetler" },
        { href: "/blog", label: "Makaleler" },
        { href: "/iletisim", label: "İletişim" },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
                isScrolled
                    ? "bg-white/95 backdrop-blur-md shadow-sm border-border py-2"
                    : "bg-transparent py-4"
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Logo />

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-sm font-medium hover:text-primary transition-colors hover:underline underline-offset-4"
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Button className="gap-2 bg-secondary text-secondary-foreground hover:bg-secondary/80 font-semibold" asChild>
                        <Link href="/iletisim">
                            <PhoneCall className="w-4 h-4" />
                            <span>0544 585 46 45</span>
                        </Link>
                    </Button>
                </nav>

                {/* Mobile Nav */}
                <MobileNav />
            </div>
        </header>
    );
}
