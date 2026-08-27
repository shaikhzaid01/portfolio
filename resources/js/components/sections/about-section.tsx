import { Award } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

export function AboutSection() {
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

    const highlights = [
        'Backend and API focused',
        'Product ownership mindset',
        'AI and automation ready',
        'Production deployment experience',
    ];

    return (
        <section
            id="about"
            ref={sectionRef}
            className="w-full border-t border-neutral-100 bg-white py-16 md:py-24 dark:border-neutral-900/30 dark:bg-[#050814]"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
                    {/* Left Details */}
                    <div
                        className={`transition-premium flex transform flex-col items-start text-left will-change-transform lg:col-span-7 ${
                            isVisible
                                ? 'translate-y-0 opacity-100'
                                : 'translate-y-8 opacity-0'
                        }`}
                    >
                        <h2 className="mb-3 text-[13px] font-bold tracking-widest text-blue-600 uppercase dark:text-cyan-400">
                            About
                        </h2>
                        <h3 className="mb-6 text-3xl leading-[1.15] font-extrabold tracking-tight text-neutral-900 sm:text-4xl lg:text-[44px] dark:text-neutral-50">
                            About Shaikh Zaid
                        </h3>

                        <div className="mb-8 space-y-4 text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
                            <p>
                                I am a full stack engineer focused on
                                backend-heavy products, SaaS platforms, APIs, AI
                                integrations, and production-ready systems.
                            </p>
                            <p>
                                My strength is not only writing code, but
                                understanding how a product should work in real
                                business conditions — from database design and
                                API structure to payment flows, deployment,
                                debugging, and long-term maintainability.
                            </p>
                            <p className="font-semibold text-neutral-800 dark:text-neutral-200">
                                I work with an ownership mindset. Every project
                                is treated like a real product, not just a task
                                list.
                            </p>
                        </div>

                        {/* highlights */}
                        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
                            {highlights.map((h) => (
                                <div
                                    key={h}
                                    className="flex items-center gap-2"
                                >
                                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600/10 text-blue-600 dark:bg-cyan-500/10 dark:text-cyan-400">
                                        <Award className="h-3.5 w-3.5" />
                                    </div>
                                    <span className="text-sm font-medium text-neutral-800 dark:text-neutral-300">
                                        {h}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right profile/identity card */}
                    <div
                        className={`transition-premium transform delay-200 will-change-transform lg:col-span-5 ${
                            isVisible
                                ? 'scale-100 opacity-100'
                                : 'scale-95 opacity-0'
                        }`}
                    >
                        <div className="relative flex flex-col items-center rounded-2xl border border-neutral-200/50 bg-neutral-50/40 p-8 text-center shadow-xs dark:border-sky-500/10 dark:bg-[#0B1020]">
                            {/* Initials Avatar */}
                            <div className="mb-6 flex h-24 w-24 animate-pulse items-center justify-center rounded-2xl bg-linear-to-br from-blue-500 via-cyan-400 to-purple-500 text-3xl font-extrabold text-white shadow-md select-none">
                                SZ
                            </div>

                            <h4 className="text-lg font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
                                Product-Focused Full Stack Engineer
                            </h4>
                            <p className="mt-2 text-xs font-semibold tracking-wider text-neutral-400 uppercase dark:text-neutral-500">
                                Backend • APIs • SaaS • AI • Deployment
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
