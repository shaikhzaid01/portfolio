import { ArrowRight, ShieldCheck } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import { ProductSystemBlueprint } from '../product-system-blueprint';

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
            { threshold: 0.1 },
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
            flow: [
                'Client Request',
                'Route',
                'Auth Middleware',
                'Controller',
                'Service',
                'Database',
                'JSON Response',
            ],
            description:
                'This keeps API logic clean, testable, secure, and easier to maintain.',
        },
        {
            title: 'AI Feature Flow',
            flow: [
                'User Input',
                'Validation',
                'Prompt Builder',
                'AI API',
                'Parser',
                'Database',
                'User Result',
            ],
            description:
                'AI features need structure around prompts, validation, fallback handling, response parsing, and storage.',
        },
        {
            title: 'Payment Safety Flow',
            flow: [
                'Payment Request',
                'Gateway',
                'Webhook',
                'Signature Check',
                'Transaction Log',
                'Wallet Update',
                'Admin Report',
            ],
            description:
                'Payment systems need reliable callbacks, logs, verification, failed payment handling, and admin visibility.',
        },
    ];

    return (
        <section
            ref={sectionRef}
            className="w-full border-t border-neutral-200/40 bg-neutral-50/20 py-16 md:py-24 dark:border-sky-500/10 dark:bg-[#070B16]/50"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header */}
                <div
                    className={`mx-auto mb-10 max-w-3xl transform text-center transition-all duration-1000 ease-out ${
                        isVisible
                            ? 'translate-y-0 opacity-100'
                            : 'translate-y-6 opacity-0'
                    }`}
                >
                    <h2 className="mb-3 text-[13px] font-bold tracking-widest text-blue-600 uppercase dark:text-cyan-400">
                        System Design Mindset
                    </h2>
                    <h3 className="text-3xl leading-[1.15] font-extrabold tracking-tight text-neutral-900 sm:text-4xl lg:text-[44px] dark:text-neutral-50">
                        How I Break a Product Into Working Systems
                    </h3>
                    <p className="mx-auto mt-4 max-w-[720px] text-base leading-relaxed text-neutral-600 md:text-lg dark:text-neutral-400">
                        Before writing code, I map the product into users,
                        roles, APIs, database tables, business rules, background
                        jobs, integrations, and deployment needs.
                    </p>
                </div>

                {/* Top Split Layout */}
                <div className="mb-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
                    {/* Left text */}
                    <div
                        className={`flex transform flex-col items-start text-left transition-all duration-1000 ease-out lg:col-span-6 ${
                            isVisible
                                ? 'translate-y-0 opacity-100'
                                : 'translate-y-8 opacity-0'
                        }`}
                    >
                        <h4 className="mb-4 max-w-[540px] text-2xl leading-snug font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
                            Every serious product has invisible engineering
                            behind it.
                        </h4>
                        <p className="mb-8 max-w-[540px] text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400">
                            A clean UI is only one part of a product. The real
                            strength comes from how the backend handles data,
                            permissions, workflows, payments, AI calls,
                            background jobs, errors, and deployment.
                        </p>

                        <div className="w-full space-y-4">
                            {principles.map((p) => (
                                <div
                                    key={p}
                                    className="flex items-center gap-3"
                                >
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
                        className={`transform transition-all delay-200 duration-1000 ease-out lg:col-span-6 ${
                            isVisible
                                ? 'scale-100 opacity-100'
                                : 'scale-95 opacity-0'
                        }`}
                    >
                        <ProductSystemBlueprint />
                    </div>
                </div>

                {/* Bottom 3 flow cards */}
                <div className="grid grid-cols-1 gap-8 border-t border-neutral-200/30 pt-8 lg:grid-cols-3 dark:border-neutral-800/60">
                    {flows.map((flow, idx) => (
                        <div
                            key={flow.title}
                            style={{ transitionDelay: `${idx * 150}ms` }}
                            className={`group transform rounded-2xl border border-neutral-200/50 bg-white p-8 shadow-xs transition-all duration-1000 dark:border-sky-500/10 dark:bg-[#0B1020] ${
                                isVisible
                                    ? 'translate-y-0 opacity-100'
                                    : 'translate-y-10 opacity-0'
                            }`}
                        >
                            <h5 className="mb-3 text-[18px] font-bold text-neutral-900 transition-colors group-hover:text-blue-600 dark:text-neutral-50 dark:group-hover:text-cyan-400">
                                {flow.title}
                            </h5>
                            <p className="mb-6 text-[15px] leading-relaxed text-neutral-500 dark:text-neutral-400">
                                {flow.description}
                            </p>

                            {/* Node pipeline visualizer */}
                            <div className="rounded-xl border border-neutral-200/40 bg-neutral-50/50 p-3.5 dark:border-sky-500/5 dark:bg-[#050814]/40">
                                <div className="flex flex-wrap items-center justify-center gap-1.5">
                                    {flow.flow.map((node, nodeIdx) => (
                                        <div
                                            key={node}
                                            className="flex items-center gap-1.5"
                                        >
                                            <span className="shadow-3xs cursor-default rounded-md border border-neutral-200/50 bg-white px-2 py-1.5 text-[9px] font-bold text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300">
                                                {node}
                                            </span>
                                            {nodeIdx < flow.flow.length - 1 && (
                                                <ArrowRight className="h-3 w-3 shrink-0 animate-pulse text-neutral-400 dark:text-neutral-600" />
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
