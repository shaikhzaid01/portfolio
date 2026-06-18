import { useEffect, useState, useRef } from 'react';
import { SystemFlowVisual } from './system-flow-visual';
import { Target, Layers, ShieldAlert } from 'lucide-react';

export function PositioningSection() {
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

    const bulletPoints = [
        { title: 'Architecture before development', icon: Layers },
        { title: 'Business logic before decoration', icon: Target },
        { title: 'Production stability before shortcuts', icon: ShieldAlert },
    ];

    return (
        <section
            ref={sectionRef}
            className="w-full py-28 md:py-36 bg-white dark:bg-[#050814] overflow-hidden"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    {/* Left text content */}
                    <div
                        className={`lg:col-span-7 flex flex-col items-start text-left transition-all duration-1000 ease-out transform ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                    >
                        <h2 className="text-[13px] font-bold uppercase tracking-widest text-blue-600 dark:text-cyan-400 mb-3">
                            Engineering Standard
                        </h2>
                        <h3 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl lg:text-[44px] dark:text-neutral-50 mb-6 leading-[1.15]">
                            I Build Production Systems, Not Just Pages
                        </h3>
                        <p className="text-base md:text-lg font-semibold leading-relaxed text-neutral-800 dark:text-neutral-250 mb-4 max-w-[640px]">
                            Most products do not fail because the interface looks bad. They fail because the backend, database, APIs, payments, deployment, and business workflows are not planned properly.
                        </p>
                        <p className="text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400 mb-8 max-w-[640px]">
                            My work focuses on building reliable digital products from architecture to deployment — so the system is not only launched, but can be maintained, improved, debugged, and scaled with confidence.
                        </p>

                        {/* Staggered supporting points */}
                        <div className="space-y-4 w-full">
                            {bulletPoints.map((point, idx) => {
                                const Icon = point.icon;
                                return (
                                    <div
                                        key={idx}
                                        style={{ transitionDelay: `${idx * 150}ms` }}
                                        className={`flex items-center gap-3 transition-all duration-700 ${
                                            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                                        }`}
                                    >
                                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-neutral-100 dark:bg-[#0B1020] border border-neutral-200/40 dark:border-sky-500/10 text-neutral-600 dark:text-neutral-400">
                                            <Icon className="h-4 w-4" />
                                        </div>
                                        <span className="text-[14px] font-bold text-neutral-800 dark:text-neutral-200">
                                            {point.title}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right system-thinking visual diagram */}
                    <div
                        className={`lg:col-span-5 transition-all duration-1000 ease-out delay-300 transform ${
                            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                        }`}
                    >
                        <SystemFlowVisual />
                    </div>
                </div>
            </div>
        </section>
    );
}
