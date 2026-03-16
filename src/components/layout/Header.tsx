"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/logo";
import { MobileNav } from "./MobileNav";
import { cn } from "@/lib/utils";
import { Phone } from "lucide-react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const serviceLinks = [
    { name: "İzmir Kira Avukatı", href: "/izmir-kira-avukati", desc: "Kira tespit, tahliye ve arabuluculuk" },
    { name: "İzmir İş Avukatı", href: "/izmir-is-avukati", desc: "İşe iade, kıdem tazminatı, iş kazası" },
    { name: "İzmir Boşanma Avukatı", href: "/izmir-bosanma-avukati", desc: "Anlaşmalı/çekişmeli boşanma, velayet" },
    { name: "İzmir Tazminat Avukatı", href: "/izmir-tazminat-avukati", desc: "Maddi, manevi tazminat, malpraktis" },
    { name: "Tüm Hizmetler", href: "/hizmetler", desc: "Hizmet alanlarımızın tamamı" },
];

const toolLinks = [
    { name: "Kira Artış Hesaplama", href: "/kira-artis-orani-hesaplama", desc: "TÜFE bazlı kira artış oranı hesaplayıcı" },
    { name: "Tahliye Taahhütnamesi", href: "/tahliye-taahhutnamesi", desc: "Online tahliye taahhütnamesi oluşturucu" },
    { name: "Kıdem Tazminatı Hesaplama", href: "/kidem-tazminati-hesaplama", desc: "Güncel tavan ile net kıdem tazminatı hesaplayıcı" },
    { name: "Hukuk Sözlüğü", href: "/sozluk", desc: "Hukuki terimlerin açıklamaları" },
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
                    <div className="hidden lg:flex items-center gap-2">
                        <NavigationMenu>
                            <NavigationMenuList className="gap-1">
                                {/* Hizmetler Dropdown */}
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="text-xs font-bold uppercase tracking-[0.2em] text-primary/70 hover:text-primary bg-transparent hover:bg-primary/5 data-[state=open]:bg-primary/5">
                                        Hizmetler
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid w-[340px] gap-1 p-2">
                                            {serviceLinks.map((link) => (
                                                <li key={link.href}>
                                                    <NavigationMenuLink asChild>
                                                        <Link
                                                            href={link.href}
                                                            className={cn(
                                                                "block select-none rounded-sm p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                                                pathname === link.href && "bg-accent/50"
                                                            )}
                                                        >
                                                            <div className="text-sm font-semibold leading-none text-primary">{link.name}</div>
                                                            <p className="text-xs leading-snug text-muted-foreground mt-1.5">{link.desc}</p>
                                                        </Link>
                                                    </NavigationMenuLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                {/* Araçlar Dropdown */}
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="text-xs font-bold uppercase tracking-[0.2em] text-primary/70 hover:text-primary bg-transparent hover:bg-primary/5 data-[state=open]:bg-primary/5">
                                        Araçlar
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid w-[320px] gap-1 p-2">
                                            {toolLinks.map((link) => (
                                                <li key={link.href}>
                                                    <NavigationMenuLink asChild>
                                                        <Link
                                                            href={link.href}
                                                            className={cn(
                                                                "block select-none rounded-sm p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                                                pathname === link.href && "bg-accent/50"
                                                            )}
                                                        >
                                                            <div className="text-sm font-semibold leading-none text-primary">{link.name}</div>
                                                            <p className="text-xs leading-snug text-muted-foreground mt-1.5">{link.desc}</p>
                                                        </Link>
                                                    </NavigationMenuLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                {/* Direct Links */}
                                <NavigationMenuItem>
                                    <Link
                                        href="/blog"
                                        className={cn(
                                            "inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] transition-colors hover:text-primary",
                                            pathname === "/blog" || pathname.startsWith("/blog/")
                                                ? "text-primary"
                                                : "text-primary/70"
                                        )}
                                    >
                                        Makaleler
                                    </Link>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <Link
                                        href="/hakkimda"
                                        className={cn(
                                            "inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] transition-colors hover:text-primary",
                                            pathname === "/hakkimda" ? "text-primary" : "text-primary/70"
                                        )}
                                    >
                                        Hakkımda
                                    </Link>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>

                        {/* İletişim CTA */}
                        <Link
                            href="/iletisim"
                            className="ml-4 inline-flex h-9 items-center justify-center rounded-md bg-primary text-white px-6 text-xs font-bold uppercase tracking-[0.2em] hover:bg-primary/90 transition-colors"
                        >
                            İletişim
                        </Link>
                    </div>

                    <div className="hidden lg:flex items-center gap-6">
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
                    <div className="lg:hidden">
                        <MobileNav />
                    </div>
                </nav>
            </div>
        </header>
    );
}
