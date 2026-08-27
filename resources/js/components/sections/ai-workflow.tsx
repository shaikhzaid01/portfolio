import { useEffect, useState, useRef } from 'react';

export function AIWorkflow() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 },
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const steps = [
        'Input & Intent',
        'Validation',
        'Prompt Structure',
        'AI API Call',
        'Response Parsing',
        'Storage & Action',
        'User Output',
    ];

    const details = [
        'Prompt design is planned around the actual product use case.',
        'Responses are validated and formatted before they reach the user.',
        'AI output can be connected with database records, admin workflows, reports, or automation.',
    ];

    return (
        <section
            ref={sectionRef}
            className="w-full border-t border-neutral-200/40 bg-neutral-50/20 py-16 md:py-24 dark:border-sky-500/10 dark:bg-[#070B16]/50"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header */}
                <div
                    className={`mx-auto max-w-3xl transform text-center transition-all duration-1000 ease-out ${
                        isVisible
                            ? 'translate-y-0 opacity-100'
                            : 'translate-y-6 opacity-0'
                    }`}
                >
                    <h2 className="mb-3 text-[13px] font-bold tracking-widest text-purple-600 uppercase dark:text-purple-400">
                        AI Workflows
                    </h2>
                    <h3 className="text-3xl leading-[1.15] font-extrabold tracking-tight text-neutral-900 sm:text-4xl lg:text-[44px] dark:text-neutral-50">
                        AI Features With Backend Discipline
                    </h3>
                    <p className="mx-auto mt-4 max-w-[720px] text-base leading-relaxed text-neutral-600 md:text-lg dark:text-neutral-400">
                        AI becomes useful only when it is connected to the right
                        data, validation, business rules, storage, and user
                        experience.
                    </p>
                </div>

                {/* Horizontal / Vertical Timeline Pipeline */}
                <div className="relative mt-14 w-full">
                    {/* Visual connecting line for desktop */}
                    <div className="absolute top-[20px] right-0 left-0 hidden h-[2px] -translate-y-1/2 bg-linear-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 lg:block" />

                    <div className="flex flex-col items-center justify-between gap-8 lg:flex-row lg:items-start lg:gap-4">
                        {steps.map((step, idx) => (
                            <div
                                key={step}
                                style={{ transitionDelay: `${idx * 100}ms` }}
                                className={`relative z-10 flex transform items-center gap-4 transition-all duration-1000 ease-out lg:flex-col lg:gap-6 ${
                                    isVisible
                                        ? 'translate-y-0 opacity-100'
                                        : 'translate-y-8 opacity-0'
                                }`}
                            >
                                {/* Indicator Dot */}
                                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white font-mono text-xs font-bold text-neutral-700 shadow-xs dark:border-sky-500/10 dark:bg-[#0B1020] dark:text-neutral-300">
                                    0{idx + 1}
                                </div>

                                {/* Label Box */}
                                <div className="min-w-[150px] rounded-xl border border-neutral-200/50 bg-white p-3 shadow-2xs lg:text-center dark:border-sky-500/10 dark:bg-[#0B1020]">
                                    <span className="text-xs font-bold text-neutral-800 dark:text-neutral-200">
                                        {step}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 3 Explanation cards */}
                <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
                    {details.map((desc, idx) => (
                        <div
                            key={idx}
                            style={{ transitionDelay: `${idx * 150}ms` }}
                            className={`transform rounded-2xl border border-neutral-200/50 bg-white p-8 shadow-xs transition-all duration-1000 hover:border-neutral-300 dark:border-sky-500/10 dark:bg-[#0B1020] dark:hover:border-neutral-700 ${
                                isVisible
                                    ? 'translate-y-0 opacity-100'
                                    : 'translate-y-6 opacity-0'
                            }`}
                        >
                            <div className="mb-4 h-1.5 w-12 rounded-full bg-purple-500/40" />
                            <p className="text-neutral-750 text-[15px] leading-relaxed font-semibold dark:text-neutral-300">
                                {desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
