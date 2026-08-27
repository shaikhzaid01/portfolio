import { Terminal, Shield, Cpu, Code2 } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { SystemMetrics } from './system-metrics';
import { SystemsIBuild } from './systems-i-build';
import { TechStack } from './tech-stack';

type TabType = 'observability' | 'capabilities' | 'tech';

export function HowIEngineer() {
    const [activeTab, setActiveTab] = useState<TabType>('observability');
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
            { threshold: 0.05 },
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

    const tabs = [
        {
            id: 'observability' as TabType,
            label: 'Live Observability',
            icon: Terminal,
            desc: 'Real-time telemetry & queues',
        },
        {
            id: 'capabilities' as TabType,
            label: 'System Capabilities',
            icon: Shield,
            desc: 'Architecture patterns & flows',
        },
        {
            id: 'tech' as TabType,
            label: 'Core Technology',
            icon: Code2,
            desc: 'Ecosystems & libraries used',
        },
    ];

    return (
        <section
            id="how-i-engineer"
            ref={sectionRef}
            className="w-full overflow-hidden border-t border-neutral-200/40 bg-neutral-50/30 py-20 text-neutral-900 transition-colors duration-300 md:py-28 dark:border-sky-500/10 dark:bg-[#050814] dark:text-neutral-50"
        >
            {/* Ambient Background Glows */}
            <div className="pointer-events-none absolute top-1/4 left-1/3 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[130px] dark:bg-blue-600/5" />
            <div className="pointer-events-none absolute right-1/3 bottom-1/4 h-[450px] w-[450px] rounded-full bg-purple-500/5 blur-[120px] dark:bg-cyan-500/5" />

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                {/* Section Header */}
                <div
                    className={`transition-premium mx-auto mb-12 max-w-3xl transform text-center will-change-transform ${
                        isVisible
                            ? 'translate-y-0 opacity-100'
                            : 'translate-y-6 opacity-0'
                    }`}
                >
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200/60 bg-blue-50/50 px-3 py-1 text-xs font-semibold text-blue-700 backdrop-blur-xs select-none dark:border-cyan-800/40 dark:bg-cyan-950/20 dark:text-cyan-400">
                        <Cpu className="h-3.5 w-3.5" />
                        <span className="font-mono text-[10px] tracking-wider uppercase">
                            Engineering Hub
                        </span>
                    </div>
                    <h3 className="text-3xl leading-[1.15] font-extrabold tracking-tight text-neutral-900 sm:text-4xl lg:text-[44px] dark:text-neutral-50">
                        How I Architect & Build
                    </h3>
                    <p className="mx-auto mt-4 max-w-[720px] text-base leading-relaxed text-neutral-600 md:text-lg dark:text-neutral-400">
                        An interactive, deep dive into my full-stack engineering
                        workflow, from real-time monitoring to clean database
                        structures and production tech stacks.
                    </p>
                </div>

                {/* Tab Navigation Hub */}
                <div className="mx-auto mb-16 flex max-w-4xl flex-col items-stretch justify-center gap-3 rounded-2xl border border-neutral-200/50 bg-white/60 p-2 backdrop-blur-md sm:flex-row sm:items-center dark:border-neutral-800/60 dark:bg-neutral-900/30">
                    {tabs.map((tab) => {
                        const Icon = tab.icon;
                        const isActive = activeTab === tab.id;

                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex flex-1 cursor-pointer items-center gap-3 rounded-xl p-3.5 text-left transition-all duration-300 ${
                                    isActive
                                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/10 dark:bg-cyan-500 dark:text-neutral-950 dark:shadow-cyan-500/10'
                                        : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800/40 dark:hover:text-neutral-200'
                                }`}
                            >
                                <div
                                    className={`rounded-lg p-2 ${isActive ? 'bg-white/20 text-white dark:bg-neutral-950/10 dark:text-neutral-950' : 'bg-neutral-100 text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400'}`}
                                >
                                    <Icon className="h-4.5 w-4.5" />
                                </div>
                                <div className="flex min-w-0 flex-col">
                                    <span className="mb-1 truncate text-sm leading-none font-bold">
                                        {tab.label}
                                    </span>
                                    <span
                                        className={`truncate text-[10px] leading-none ${isActive ? 'text-white/80 dark:text-neutral-800/80' : 'text-neutral-400 dark:text-neutral-500'}`}
                                    >
                                        {tab.desc}
                                    </span>
                                </div>
                            </button>
                        );
                    })}
                </div>

                {/* Animated Tab Content Container */}
                <div className="relative min-h-[400px] w-full transition-all duration-500 ease-in-out">
                    <div className="transition-all duration-500">
                        {activeTab === 'observability' && (
                            <SystemMetrics hideHeader={true} />
                        )}
                        {activeTab === 'capabilities' && (
                            <SystemsIBuild hideHeader={true} />
                        )}
                        {activeTab === 'tech' && (
                            <TechStack hideHeader={true} />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
