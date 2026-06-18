import { useEffect, useState, useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';

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
            { threshold: 0.15 }
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
            className="w-full py-28 md:py-36 bg-white dark:bg-[#050814] overflow-hidden"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Section Header */}
                <div
                    className={`max-w-3xl mb-16 transition-all duration-1000 ease-out transform ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                    }`}
                >
                    <h2 className="text-[13px] font-bold uppercase tracking-widest text-blue-600 dark:text-cyan-400 mb-3">
                        Production Ownership
                    </h2>
                    <h3 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl lg:text-[44px] dark:text-neutral-50 leading-[1.15]">
                        Built Beyond Development
                    </h3>
                    <p className="mt-4 text-base md:text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 max-w-[720px] mx-auto">
                        A good system is not complete when the code is written. It also needs deployment, stability, security, logs, background jobs, and support.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    {/* Left Statement Panel */}
                    <div
                        className={`lg:col-span-4 p-8 rounded-2xl border border-neutral-200/50 bg-neutral-50/50 dark:border-sky-500/10 dark:bg-[#0B1020] transition-all duration-1000 ease-out transform ${
                            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
                        }`}
                    >
                        <h4 className="text-xl md:text-[22px] font-bold tracking-tight text-neutral-900 dark:text-neutral-50 mb-4 leading-snug">
                            I care about what happens after launch.
                        </h4>
                        <p className="text-[15px] leading-relaxed text-neutral-500 dark:text-neutral-400">
                            My focus is to build systems that can be maintained, debugged, improved, and trusted in real business conditions.
                        </p>
                    </div>

                    {/* Right Checklist Grid */}
                    <div
                        className={`lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 ease-out delay-200 transform ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                    >
                        {responsibilities.map((item, idx) => (
                            <div
                                key={item}
                                style={{ transitionDelay: `${idx * 50}ms` }}
                                className="flex items-center gap-3 p-5 rounded-xl border border-neutral-200/40 dark:border-sky-500/5 bg-white dark:bg-[#050814]/40 shadow-2xs hover:border-neutral-200 dark:hover:border-neutral-800 transition-colors"
                            >
                                <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-cyan-400 shrink-0" />
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
