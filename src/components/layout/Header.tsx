"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/logo";
import { MobileNav } from "./MobileNav";
import { cn } from "@/lib/utils";
import { Phone } from "lucide-react";
import { kiraHub, kiraLinks, kiraTools, type NavLink } from "@/lib/nav";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const navItemClass = "block select-none rounded-sm p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground";

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
                                    <NavigationMenuTrigger className="text-xs font-bold uppercase tracking-[0.2em] text-primary/80 hover:text-primary bg-transparent hover:bg-primary/5 data-[state=open]:bg-primary/5">
                                        Hizmetler
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <div className="grid w-[640px] grid-cols-2 gap-1 p-2">
                                            <div className="col-span-2">
                                                <NavItem link={kiraHub} active={pathname === kiraHub.href} strong />
                                            </div>
                                            {kiraLinks.map((link) => (
                                                <NavItem key={link.href} link={link} active={pathname === link.href} />
                                            ))}
                                            <p className="col-span-2 px-3 pt-3 pb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Kira Araçları</p>
                                            {kiraTools.map((link) => (
                                                <NavItem key={link.href} link={link} active={pathname === link.href} />
                                            ))}
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                {/* Direct Links */}
                                <NavigationMenuItem>
                                    <Link
                                        href="/blog/"
                                        className={cn(
                                            "inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] transition-colors hover:text-primary",
                                            pathname === "/blog/" || pathname.startsWith("/blog/")
                                                ? "text-primary"
                                                : "text-primary/80"
                                        )}
                                    >
                                        Makaleler
                                    </Link>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <Link
                                        href="/hakkimda/"
                                        className={cn(
                                            "inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] transition-colors hover:text-primary",
                                            pathname === "/hakkimda/" ? "text-primary" : "text-primary/80"
                                        )}
                                    >
                                        Hakkımda
                                    </Link>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>

                        {/* İletişim CTA */}
                        <Link
                            href="/iletisim/"
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

function NavItem({ link, active, strong }: { link: NavLink; active?: boolean; strong?: boolean }) {
    return (
        <NavigationMenuLink asChild>
            <Link href={link.href} className={cn(navItemClass, active && "bg-accent/50", strong && "bg-primary/5")}>
                <div className={cn("text-sm leading-none text-primary", strong ? "font-bold" : "font-semibold")}>{link.name}</div>
                {link.desc && <p className="text-xs leading-snug text-muted-foreground mt-1.5">{link.desc}</p>}
            </Link>
        </NavigationMenuLink>
    );
}
