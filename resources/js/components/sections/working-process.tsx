import { useEffect, useState, useRef } from 'react';

interface ProcessStep {
    id: string;
    title: string;
    desc: string;
}

export function WorkingProcess() {
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

    const steps: ProcessStep[] = [
        {
            id: '01',
            title: 'Discovery',
            desc: 'Understand business goals, users, workflows, risks, and expected outcome.',
        },
        {
            id: '02',
            title: 'Requirement Mapping',
            desc: 'Convert ideas into modules, roles, data flows, feature priorities, and technical scope.',
        },
        {
            id: '03',
            title: 'System Architecture',
            desc: 'Plan database, APIs, integrations, background jobs, deployment needs, and security points.',
        },
        {
            id: '04',
            title: 'Development',
            desc: 'Build backend, frontend, APIs, admin panels, integrations, and business logic.',
        },
        {
            id: '05',
            title: 'Testing & Deployment',
            desc: 'Test flows, fix edge cases, deploy to server, configure SSL, queues, workers, and cron jobs.',
        },
        {
            id: '06',
            title: 'Support & Optimization',
            desc: 'Monitor issues, improve performance, support client changes, and keep the system maintainable.',
        },
    ];

    return (
        <section
            ref={sectionRef}
            className="w-full border-t border-neutral-100 bg-white py-16 md:py-24 dark:border-neutral-900/30 dark:bg-[#050814]"
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
                        Process
                    </h2>
                    <h3 className="text-3xl leading-[1.15] font-extrabold tracking-tight text-neutral-900 sm:text-4xl lg:text-[44px] dark:text-neutral-50">
                        How I Build
                    </h3>
                    <p className="mx-auto mt-4 max-w-[720px] text-base leading-relaxed text-neutral-600 md:text-lg dark:text-neutral-400">
                        A clear process helps clients understand what is being
                        built, why it matters, and how the system will move from
                        idea to production.
                    </p>
                </div>

                {/* Steps layout (3 columns on desktop, 1 on mobile) */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {steps.map((step, idx) => (
                        <div
                            key={step.id}
                            style={{ transitionDelay: `${idx * 100}ms` }}
                            className={`group relative flex transform flex-col justify-between rounded-2xl border border-neutral-200/50 bg-neutral-50/40 p-8 transition-all duration-1000 hover:border-neutral-300 dark:border-sky-500/10 dark:bg-[#0B1020] dark:hover:border-sky-500/20 ${
                                isVisible
                                    ? 'translate-y-0 opacity-100'
                                    : 'translate-y-10 opacity-0'
                            }`}
                        >
                            <div className="mb-3 flex items-start justify-between">
                                <h4 className="text-[18px] font-bold text-neutral-900 transition-colors group-hover:text-blue-600 dark:text-neutral-50 dark:group-hover:text-cyan-400">
                                    {step.title}
                                </h4>
                                <span className="font-mono text-xs font-bold tracking-widest text-neutral-400 dark:text-neutral-600">
                                    {step.id}
                                </span>
                            </div>
                            <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
