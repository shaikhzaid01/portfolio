import { Target, Layers, ShieldAlert } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import { SystemFlowVisual } from '../system-flow-visual';

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

    const bulletPoints = [
        { title: 'Architecture before development', icon: Layers },
        { title: 'Business logic before decoration', icon: Target },
        { title: 'Production stability before shortcuts', icon: ShieldAlert },
    ];

    return (
        <section
            ref={sectionRef}
            className="w-full overflow-hidden bg-white py-16 md:py-24 dark:bg-[#050814]"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
                    {/* Left text content */}
                    <div
                        className={`flex transform flex-col items-start text-left transition-all duration-1000 ease-out lg:col-span-7 ${
                            isVisible
                                ? 'translate-y-0 opacity-100'
                                : 'translate-y-8 opacity-0'
                        }`}
                    >
                        <h2 className="mb-3 text-[13px] font-bold tracking-widest text-blue-600 uppercase dark:text-cyan-400">
                            Engineering Standard
                        </h2>
                        <h3 className="mb-6 text-3xl leading-[1.15] font-extrabold tracking-tight text-neutral-900 sm:text-4xl lg:text-[44px] dark:text-neutral-50">
                            I Build Production Systems, Not Just Pages
                        </h3>
                        <p className="mb-4 max-w-[640px] text-base leading-relaxed font-semibold text-neutral-800 md:text-lg dark:text-neutral-300">
                            Most products do not fail because the interface
                            looks bad. They fail because the backend, database,
                            APIs, payments, deployment, and business workflows
                            are not planned properly.
                        </p>
                        <p className="mb-6 max-w-[640px] text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400">
                            My work focuses on building reliable digital
                            products from architecture to deployment — so the
                            system is not only launched, but can be maintained,
                            improved, debugged, and scaled with confidence.
                        </p>

                        {/* Staggered supporting points */}
                        <div className="w-full space-y-4">
                            {bulletPoints.map((point, idx) => {
                                const Icon = point.icon;

                                return (
                                    <div
                                        key={idx}
                                        style={{
                                            transitionDelay: `${idx * 150}ms`,
                                        }}
                                        className={`flex items-center gap-3 transition-all duration-700 ${
                                            isVisible
                                                ? 'translate-x-0 opacity-100'
                                                : '-translate-x-4 opacity-0'
                                        }`}
                                    >
                                        <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-neutral-200/40 bg-neutral-100 text-neutral-600 dark:border-sky-500/10 dark:bg-[#0B1020] dark:text-neutral-400">
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
                        className={`transform transition-all delay-300 duration-1000 ease-out lg:col-span-5 ${
                            isVisible
                                ? 'scale-100 opacity-100'
                                : 'scale-95 opacity-0'
                        }`}
                    >
                        <SystemFlowVisual />
                    </div>
                </div>
            </div>
        </section>
    );
}
