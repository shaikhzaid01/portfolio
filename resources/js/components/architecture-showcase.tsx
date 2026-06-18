import { useEffect, useState, useRef } from 'react';
import { ProductSystemBlueprint } from './product-system-blueprint';
import { ArrowRight, ShieldCheck } from 'lucide-react';

interface FlowCard {
    title: string;
    flow: string[];
    description: string;
}

export function ArchitectureShowcase() {
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

    const principles = [
        'Map the flow before building the feature',
        'Separate business logic from presentation',
        'Design for debugging, maintenance, and scale',
    ];

    const flows: FlowCard[] = [
        {
            title: 'API Request Flow',
            flow: ['Client Request', 'Route', 'Auth Middleware', 'Controller', 'Service', 'Database', 'JSON Response'],
            description: 'This keeps API logic clean, testable, secure, and easier to maintain.',
        },
        {
            title: 'AI Feature Flow',
            flow: ['User Input', 'Validation', 'Prompt Builder', 'AI API', 'Parser', 'Database', 'User Result'],
            description: 'AI features need structure around prompts, validation, fallback handling, response parsing, and storage.',
        },
        {
            title: 'Payment Safety Flow',
            flow: ['Payment Request', 'Gateway', 'Webhook', 'Signature Check', 'Transaction Log', 'Wallet Update', 'Admin Report'],
            description: 'Payment systems need reliable callbacks, logs, verification, failed payment handling, and admin visibility.',
        },
    ];

    return (
        <section
            ref={sectionRef}
            className="w-full py-28 md:py-36 bg-neutral-50/20 dark:bg-[#070B16]/50 border-t border-neutral-200/40 dark:border-sky-500/10"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header */}
                <div
                    className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-1000 ease-out transform ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                    }`}
                >
                    <h2 className="text-[13px] font-bold uppercase tracking-widest text-blue-600 dark:text-cyan-400 mb-3">
                        System Design Mindset
                    </h2>
                    <h3 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl lg:text-[44px] dark:text-neutral-50 leading-[1.15]">
                        How I Break a Product Into Working Systems
                    </h3>
                    <p className="mt-4 text-base md:text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 max-w-[720px] mx-auto">
                        Before writing code, I map the product into users, roles, APIs, database tables, business rules, background jobs, integrations, and deployment needs.
                    </p>
                </div>

                {/* Top Split Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
                    {/* Left text */}
                    <div
                        className={`lg:col-span-6 flex flex-col items-start text-left transition-all duration-1000 ease-out transform ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                    >
                        <h4 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 mb-4 max-w-[540px] leading-snug">
                            Every serious product has invisible engineering behind it.
                        </h4>
                        <p className="text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400 mb-8 max-w-[540px]">
                            A clean UI is only one part of a product. The real strength comes from how the backend handles data, permissions, workflows, payments, AI calls, background jobs, errors, and deployment.
                        </p>

                        <div className="space-y-4 w-full">
                            {principles.map((p, idx) => (
                                <div key={p} className="flex items-center gap-3">
                                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/10 text-blue-600 dark:bg-cyan-500/10 dark:text-cyan-400">
                                        <ShieldCheck className="h-4 w-4" />
                                    </div>
                                    <span className="text-[13px] font-bold text-neutral-800 dark:text-neutral-200">
                                        {p}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Blueprint */}
                    <div
                        className={`lg:col-span-6 transition-all duration-1000 ease-out delay-200 transform ${
                            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                        }`}
                    >
                        <ProductSystemBlueprint />
                    </div>
                </div>

                {/* Bottom 3 flow cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-8 border-t border-neutral-200/30 dark:border-neutral-800/60">
                    {flows.map((flow, idx) => (
                        <div
                            key={flow.title}
                            style={{ transitionDelay: `${idx * 150}ms` }}
                            className={`group p-8 rounded-2xl border border-neutral-200/50 bg-white dark:border-sky-500/10 dark:bg-[#0B1020] shadow-xs transition-all duration-1000 transform ${
                                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            }`}
                        >
                            <h5 className="text-[18px] font-bold text-neutral-900 dark:text-neutral-50 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors mb-3">
                                {flow.title}
                            </h5>
                            <p className="text-[15px] text-neutral-500 dark:text-neutral-400 leading-relaxed mb-6">
                                {flow.description}
                            </p>

                            {/* Node pipeline visualizer */}
                            <div className="p-3.5 rounded-xl border border-neutral-200/40 bg-neutral-50/50 dark:border-sky-500/5 dark:bg-[#050814]/40">
                                <div className="flex flex-wrap items-center gap-1.5 justify-center">
                                    {flow.flow.map((node, nodeIdx) => (
                                        <div key={node} className="flex items-center gap-1.5">
                                            <span className="px-2 py-1.5 rounded-md border border-neutral-200/50 bg-white text-[9px] font-bold text-neutral-700 dark:border-neutral-850 dark:bg-neutral-900 dark:text-neutral-350 shadow-3xs cursor-default">
                                                {node}
                                            </span>
                                            {nodeIdx < flow.flow.length - 1 && (
                                                <ArrowRight className="h-3 w-3 text-neutral-400 dark:text-neutral-600 shrink-0 animate-pulse" />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
