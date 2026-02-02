import Link from "next/link";
import { Scale } from "lucide-react";

export function Logo({ className }: { className?: string }) {
    return (
        <Link href="/" className={`flex items-center gap-2 group ${className}`}>
            <div className="bg-gradient-to-br from-primary to-primary/80 p-2 rounded-lg group-hover:shadow-lg transition-all duration-300">
                <Scale className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
                <span className="font-playfair font-bold text-xl leading-none text-primary">
                    Av. Mert Kağan Çetin
                </span>
                <span className="text-[0.65rem] uppercase tracking-widest text-muted-foreground font-medium">
                    İzmir Kira & Gayrimenkul Hukuku
                </span>
            </div>
        </Link>
    );
}
