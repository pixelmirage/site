"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { kiraHub, kiraLinks, kiraTools } from "@/lib/nav";
import { Logo } from "@/components/ui/logo";

export function MobileNav() {
    const [open, setOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(true);
    const [toolsOpen, setToolsOpen] = useState(false);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                    <Menu className="w-6 h-6" />
                    <span className="sr-only">Menüyü Aç</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px] overflow-y-auto">
                <div className="flex flex-col gap-6 py-8">
                    <div className="px-2">
                        <Logo />
                    </div>
                    <nav className="flex flex-col gap-1">
                        {/* Kira Hukuku Collapsible (primary) */}
                        <button
                            onClick={() => setServicesOpen(!servicesOpen)}
                            className="flex items-center justify-between text-lg font-medium px-4 py-3 hover:bg-muted rounded-md transition-colors"
                        >
                            Hizmetler
                            <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
                        </button>
                        {servicesOpen && (
                            <div className="ml-4 flex flex-col gap-0.5">
                                {[kiraHub, ...kiraLinks].map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setOpen(false)}
                                        className="flex items-center text-base text-muted-foreground px-4 py-2.5 hover:bg-muted hover:text-primary rounded-md transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        )}

                        {/* Kaynaklar Collapsible */}
                        <button
                            onClick={() => setToolsOpen(!toolsOpen)}
                            className="flex items-center justify-between text-lg font-medium px-4 py-3 hover:bg-muted rounded-md transition-colors"
                        >
                            Kaynaklar
                            <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${toolsOpen ? "rotate-180" : ""}`} />
                        </button>
                        {toolsOpen && (
                            <div className="ml-4 flex flex-col gap-0.5">
                                {kiraTools.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setOpen(false)}
                                        className="flex items-center text-base text-muted-foreground px-4 py-2.5 hover:bg-muted hover:text-primary rounded-md transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        )}

                        {/* Direct Links */}
                        <Link
                            href="/blog/"
                            onClick={() => setOpen(false)}
                            className="flex items-center text-lg font-medium px-4 py-3 hover:bg-muted rounded-md transition-colors"
                        >
                            Makaleler
                        </Link>
                        <Link
                            href="/hakkimda/"
                            onClick={() => setOpen(false)}
                            className="flex items-center text-lg font-medium px-4 py-3 hover:bg-muted rounded-md transition-colors"
                        >
                            Hakkımda
                        </Link>
                    </nav>
                    <div className="px-4 pt-2">
                        <Button className="w-full bg-primary text-white hover:bg-primary/90 h-12 text-base font-medium" asChild>
                            <Link href="/iletisim/" onClick={() => setOpen(false)}>
                                İletişim
                            </Link>
                        </Button>
                        <Link
                            href="tel:+905445854645"
                            className="flex items-center justify-center gap-2 text-base font-bold text-primary mt-4 hover:text-secondary transition-colors"
                        >
                            Ara: 0544 585 46 45
                        </Link>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}
