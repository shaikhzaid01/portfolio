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
            { threshold: 0.1 }
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
            className="w-full py-16 md:py-24 bg-neutral-50/20 dark:bg-[#070B16]/50 border-t border-neutral-200/40 dark:border-sky-500/10"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header */}
                <div
                    className={`max-w-3xl mx-auto text-center transition-all duration-1000 ease-out transform ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                    }`}
                >
                    <h2 className="text-[13px] font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400 mb-3">
                        AI Workflows
                    </h2>
                    <h3 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl lg:text-[44px] dark:text-neutral-50 leading-[1.15]">
                        AI Features With Backend Discipline
                    </h3>
                    <p className="mt-4 text-base md:text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 max-w-[720px] mx-auto">
                        AI becomes useful only when it is connected to the right data, validation, business rules, storage, and user experience.
                    </p>
                </div>

                {/* Horizontal / Vertical Timeline Pipeline */}
                <div className="mt-14 relative w-full">
                    {/* Visual connecting line for desktop */}
                    <div className="hidden lg:block absolute top-[20px] left-0 right-0 h-[2px] bg-linear-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 -translate-y-1/2" />

                    <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 lg:gap-4">
                        {steps.map((step, idx) => (
                            <div
                                key={step}
                                style={{ transitionDelay: `${idx * 100}ms` }}
                                className={`flex lg:flex-col items-center gap-4 lg:gap-6 relative z-10 transition-all duration-1000 ease-out transform ${
                                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                            >
                                {/* Indicator Dot */}
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-[#0B1020] border border-neutral-200 dark:border-sky-500/10 shadow-xs text-xs font-mono font-bold text-neutral-700 dark:text-neutral-300">
                                    0{idx + 1}
                                </div>

                                {/* Label Box */}
                                <div className="p-3 lg:text-center rounded-xl border border-neutral-200/50 bg-white dark:border-sky-500/10 dark:bg-[#0B1020] min-w-[150px] shadow-2xs">
                                    <span className="text-xs font-bold text-neutral-800 dark:text-neutral-200">
                                        {step}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 3 Explanation cards */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {details.map((desc, idx) => (
                        <div
                            key={idx}
                            style={{ transitionDelay: `${idx * 150}ms` }}
                            className={`p-8 rounded-2xl border border-neutral-200/50 bg-white dark:border-sky-500/10 dark:bg-[#0B1020] shadow-xs hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-1000 transform ${
                                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                            }`}
                        >
                            <div className="h-1.5 w-12 rounded-full bg-purple-500/40 mb-4" />
                            <p className="text-[15px] font-semibold leading-relaxed text-neutral-750 dark:text-neutral-300">
                                {desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
