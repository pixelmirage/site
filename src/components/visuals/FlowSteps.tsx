// Crawlable, responsive step diagram (vertical on mobile, horizontal from md).
export type FlowStep = { title: string; text: string; law?: string };

export function FlowSteps({ steps, caption, id }: { steps: FlowStep[]; caption: string; id?: string }) {
    return (
        <figure id={id} className="not-prose my-10 rounded-2xl border border-slate-200 bg-slate-50 p-5 md:p-6">
            <ol className="grid gap-3 md:gap-2" style={{ gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, ${steps.length > 4 ? 9.5 : 11}rem), 1fr))` }}>
                {steps.map((s, i) => (
                    <li key={s.title} className="relative flex flex-col rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                        <div className="mb-2 flex items-center gap-2">
                            <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white" aria-hidden="true">{i + 1}</span>
                            <span className="font-serif text-base font-bold leading-snug text-primary">{s.title}</span>
                        </div>
                        <p className="text-[15px] leading-6 text-slate-700">{s.text}</p>
                        {s.law && <p className="mt-auto pt-3 text-xs font-semibold uppercase tracking-wide text-secondary-ink">{s.law}</p>}
                        {i < steps.length - 1 && (
                            <span aria-hidden="true" className="pointer-events-none absolute -bottom-3 left-1/2 z-10 -translate-x-1/2 text-lg leading-none text-secondary md:hidden">▼</span>
                        )}
                    </li>
                ))}
            </ol>
            <figcaption className="mt-4 text-sm leading-6 text-slate-600">{caption}</figcaption>
        </figure>
    );
}
