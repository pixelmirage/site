"use client";

import { Button } from "@/components/ui/button";
import { Printer } from "lucide-react";

export function PrintButton() {
    return (
        <Button
            onClick={() => window.print()}
            size="lg"
            className="bg-white text-primary hover:bg-slate-100 font-bold gap-2 text-lg px-8 shadow-xl"
        >
            <Printer className="w-5 h-5" />
            Şablonu Yazdır (PDF)
        </Button>
    );
}
