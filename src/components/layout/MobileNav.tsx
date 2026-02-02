"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/ui/logo";

const navItems = [
    { href: "/", label: "Anasayfa" },
    { href: "/hakkimda", label: "Hakkımda" },
    { href: "/hizmetler", label: "Hizmetler" },
    { href: "/blog", label: "Makaleler" },
    { href: "/iletisim", label: "İletişim" },
];

export function MobileNav() {
    const [open, setOpen] = useState(false);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="w-6 h-6" />
                    <span className="sr-only">Menüyü Aç</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col gap-8 py-8">
                    <div className="px-2">
                        <Logo />
                    </div>
                    <nav className="flex flex-col gap-2">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className="flex items-center text-lg font-medium px-4 py-3 hover:bg-muted rounded-md transition-colors"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                    <div className="px-4">
                        <Button className="w-full bg-primary text-white hover:bg-primary/90" asChild>
                            <Link href="/iletisim" onClick={() => setOpen(false)}>
                                Randevu Al
                            </Link>
                        </Button>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}
