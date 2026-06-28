import { useState, useEffect, useRef } from 'react';
import { Terminal, Shield, Cpu, Code2 } from 'lucide-react';
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
            { threshold: 0.05 }
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
            className="w-full py-20 md:py-28 overflow-hidden bg-neutral-50/30 text-neutral-900 transition-colors duration-300 dark:bg-[#050814] dark:text-neutral-50 border-t border-neutral-200/40 dark:border-sky-500/10"
        >
            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-blue-500/5 dark:bg-blue-600/5 blur-[130px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/3 w-[450px] h-[450px] rounded-full bg-purple-500/5 dark:bg-cyan-500/5 blur-[120px] pointer-events-none" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div
                    className={`max-w-3xl mx-auto text-center mb-12 transition-premium will-change-transform transform ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                    }`}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200/60 bg-blue-50/50 text-xs font-semibold text-blue-700 dark:border-cyan-800/40 dark:bg-cyan-950/20 dark:text-cyan-400 mb-4 backdrop-blur-xs select-none">
                        <Cpu className="h-3.5 w-3.5" />
                        <span className="font-mono tracking-wider text-[10px] uppercase">Engineering Hub</span>
                    </div>
                    <h3 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl lg:text-[44px] dark:text-neutral-50 leading-[1.15]">
                        How I Architect & Build
                    </h3>
                    <p className="mt-4 text-base md:text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 max-w-[720px] mx-auto">
                        An interactive, deep dive into my full-stack engineering workflow, from real-time monitoring to clean database structures and production tech stacks.
                    </p>
                </div>

                {/* Tab Navigation Hub */}
                <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 max-w-4xl mx-auto mb-16 p-2 rounded-2xl border border-neutral-200/50 bg-white/60 dark:border-neutral-800/60 dark:bg-neutral-900/30 backdrop-blur-md">
                    {tabs.map((tab) => {
                        const Icon = tab.icon;
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex flex-1 items-center gap-3 p-3.5 rounded-xl text-left transition-all duration-300 cursor-pointer ${
                                    isActive
                                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/10 dark:bg-cyan-500 dark:text-neutral-950 dark:shadow-cyan-500/10'
                                        : 'hover:bg-neutral-100 text-neutral-600 dark:text-neutral-400 dark:hover:bg-neutral-800/40 hover:text-neutral-900 dark:hover:text-neutral-200'
                                }`}
                            >
                                <div className={`p-2 rounded-lg ${isActive ? 'bg-white/20 text-white dark:bg-neutral-950/10 dark:text-neutral-950' : 'bg-neutral-100 text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400'}`}>
                                    <Icon className="h-4.5 w-4.5" />
                                </div>
                                <div className="flex flex-col min-w-0">
                                    <span className="text-sm font-bold truncate leading-none mb-1">{tab.label}</span>
                                    <span className={`text-[10px] truncate leading-none ${isActive ? 'text-white/80 dark:text-neutral-800/80' : 'text-neutral-400 dark:text-neutral-500'}`}>
                                        {tab.desc}
                                    </span>
                                </div>
                            </button>
                        );
                    })}
                </div>

                {/* Animated Tab Content Container */}
                <div className="relative w-full min-h-[400px] transition-all duration-500 ease-in-out">
                    <div className="transition-all duration-500">
                        {activeTab === 'observability' && <SystemMetrics hideHeader={true} />}
                        {activeTab === 'capabilities' && <SystemsIBuild hideHeader={true} />}
                        {activeTab === 'tech' && <TechStack hideHeader={true} />}
                    </div>
                </div>
            </div>
        </section>
    );
}
