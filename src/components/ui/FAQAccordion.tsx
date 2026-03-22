interface FAQItem {
    question: string;
    answer: string;
}

export function FAQAccordion({ faqs }: { faqs: FAQItem[] }) {
    return (
        <div className="not-prose space-y-3 my-8">
            {faqs.map((faq, i) => (
                <details
                    key={i}
                    className="group border border-slate-200 rounded-xl overflow-hidden"
                    {...(i === 0 ? { open: true } : {})}
                >
                    <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer font-bold text-primary text-base md:text-lg bg-white hover:bg-slate-50 transition-colors list-none [&::-webkit-details-marker]:hidden">
                        <span>{faq.question}</span>
                        <svg className="w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </summary>
                    <div className="px-5 pb-5 text-slate-600 leading-relaxed text-[0.95rem] border-t border-slate-100 pt-4">
                        {faq.answer}
                    </div>
                </details>
            ))}
        </div>
    );
}
