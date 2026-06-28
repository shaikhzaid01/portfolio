import { useEffect, useState, useRef } from 'react';
import { Award } from 'lucide-react';

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
            className="w-full py-16 md:py-24 bg-white dark:bg-[#050814] border-t border-neutral-100 dark:border-neutral-900/30"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    {/* Left Details */}
                    <div
                        className={`lg:col-span-7 flex flex-col items-start text-left transition-premium will-change-transform transform ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                    >
                        <h2 className="text-[13px] font-bold uppercase tracking-widest text-blue-600 dark:text-cyan-400 mb-3">
                            About
                        </h2>
                        <h3 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl lg:text-[44px] dark:text-neutral-50 mb-6 leading-[1.15]">
                            About Shaikh Zaid
                        </h3>

                        <div className="space-y-4 text-base leading-relaxed text-neutral-600 dark:text-neutral-400 mb-8">
                            <p>
                                I am a full stack engineer focused on backend-heavy products, SaaS platforms, APIs, AI integrations, and production-ready systems.
                            </p>
                            <p>
                                My strength is not only writing code, but understanding how a product should work in real business conditions — from database design and API structure to payment flows, deployment, debugging, and long-term maintainability.
                            </p>
                            <p className="font-semibold text-neutral-800 dark:text-neutral-200">
                                I work with an ownership mindset. Every project is treated like a real product, not just a task list.
                            </p>
                        </div>

                        {/* highlights */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                            {highlights.map((h) => (
                                <div key={h} className="flex items-center gap-2">
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
                        className={`lg:col-span-5 transition-premium will-change-transform delay-200 transform ${
                            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                        }`}
                    >
                        <div className="relative rounded-2xl border border-neutral-200/50 bg-neutral-50/40 p-8 shadow-xs dark:border-sky-500/10 dark:bg-[#0B1020] text-center flex flex-col items-center">
                            {/* Initials Avatar */}
                            <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-linear-to-br from-blue-500 via-cyan-400 to-purple-500 text-white text-3xl font-extrabold shadow-md mb-6 select-none animate-pulse">
                                SZ
                            </div>

                            <h4 className="text-lg font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
                                Product-Focused Full Stack Engineer
                            </h4>
                            <p className="mt-2 text-xs font-semibold tracking-wider uppercase text-neutral-400 dark:text-neutral-500">
                                Backend • APIs • SaaS • AI • Deployment
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
