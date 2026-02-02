import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbNavProps {
    items: BreadcrumbItem[];
}

export function BreadcrumbNav({ items }: BreadcrumbNavProps) {
    return (
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link
                href="/"
                className="flex items-center gap-1 hover:text-primary transition-colors"
            >
                <Home className="w-4 h-4" />
                <span className="sr-only">Ana Sayfa</span>
            </Link>

            {items.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-slate-300" />
                    {item.href ? (
                        <Link
                            href={item.href}
                            className="hover:text-primary transition-colors"
                        >
                            {item.label}
                        </Link>
                    ) : (
                        <span className="text-primary font-medium truncate max-w-[200px]">
                            {item.label}
                        </span>
                    )}
                </div>
            ))}
        </nav>
    );
}
