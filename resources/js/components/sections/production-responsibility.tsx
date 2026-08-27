import { CheckCircle2 } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

export function ProductionResponsibility() {
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
            { threshold: 0.15 },
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

    const responsibilities = [
        'Clean database structure',
        'Secure authentication',
        'API validation',
        'Error handling',
        'Payment callback safety',
        'Queue and worker setup',
        'Server deployment',
        'SSL and domain setup',
        'Cron jobs',
        'Logs and debugging',
        'Performance optimization',
        'Post-launch support',
    ];

    return (
        <section
            ref={sectionRef}
            className="w-full overflow-hidden bg-white py-16 md:py-24 dark:bg-[#050814]"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Section Header */}
                <div
                    className={`mb-10 max-w-3xl transform transition-all duration-1000 ease-out ${
                        isVisible
                            ? 'translate-y-0 opacity-100'
                            : 'translate-y-6 opacity-0'
                    }`}
                >
                    <h2 className="mb-3 text-[13px] font-bold tracking-widest text-blue-600 uppercase dark:text-cyan-400">
                        Production Ownership
                    </h2>
                    <h3 className="text-3xl leading-[1.15] font-extrabold tracking-tight text-neutral-900 sm:text-4xl lg:text-[44px] dark:text-neutral-50">
                        Built Beyond Development
                    </h3>
                    <p className="mx-auto mt-4 max-w-[720px] text-base leading-relaxed text-neutral-600 md:text-lg dark:text-neutral-400">
                        A good system is not complete when the code is written.
                        It also needs deployment, stability, security, logs,
                        background jobs, and support.
                    </p>
                </div>

                <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
                    {/* Left Statement Panel */}
                    <div
                        className={`transform rounded-2xl border border-neutral-200/50 bg-neutral-50/50 p-8 transition-all duration-1000 ease-out lg:col-span-4 dark:border-sky-500/10 dark:bg-[#0B1020] ${
                            isVisible
                                ? 'translate-x-0 opacity-100'
                                : '-translate-x-6 opacity-0'
                        }`}
                    >
                        <h4 className="mb-4 text-xl leading-snug font-bold tracking-tight text-neutral-900 md:text-[22px] dark:text-neutral-50">
                            I care about what happens after launch.
                        </h4>
                        <p className="text-[15px] leading-relaxed text-neutral-500 dark:text-neutral-400">
                            My focus is to build systems that can be maintained,
                            debugged, improved, and trusted in real business
                            conditions.
                        </p>
                    </div>

                    {/* Right Checklist Grid */}
                    <div
                        className={`grid transform grid-cols-1 gap-6 transition-all delay-200 duration-1000 ease-out sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3 ${
                            isVisible
                                ? 'translate-y-0 opacity-100'
                                : 'translate-y-8 opacity-0'
                        }`}
                    >
                        {responsibilities.map((item, idx) => (
                            <div
                                key={item}
                                style={{ transitionDelay: `${idx * 50}ms` }}
                                className="flex items-center gap-3 rounded-xl border border-neutral-200/40 bg-white p-5 shadow-2xs transition-colors hover:border-neutral-200 dark:border-sky-500/5 dark:bg-[#050814]/40 dark:hover:border-neutral-800"
                            >
                                <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-600 dark:text-cyan-400" />
                                <span className="text-[13px] font-bold text-neutral-800 dark:text-neutral-200">
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
