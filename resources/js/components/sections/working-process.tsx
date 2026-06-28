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
            className="w-full py-16 md:py-24 bg-white dark:bg-[#050814] border-t border-neutral-100 dark:border-neutral-900/30"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header */}
                <div
                    className={`max-w-3xl mx-auto text-center mb-10 transition-all duration-1000 ease-out transform ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                    }`}
                >
                    <h2 className="text-[13px] font-bold uppercase tracking-widest text-blue-600 dark:text-cyan-400 mb-3">
                        Process
                    </h2>
                    <h3 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl lg:text-[44px] dark:text-neutral-50 leading-[1.15]">
                        How I Build
                    </h3>
                    <p className="mt-4 text-base md:text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 max-w-[720px] mx-auto">
                        A clear process helps clients understand what is being built, why it matters, and how the system will move from idea to production.
                    </p>
                </div>

                {/* Steps layout (3 columns on desktop, 1 on mobile) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {steps.map((step, idx) => (
                        <div
                            key={step.id}
                            style={{ transitionDelay: `${idx * 100}ms` }}
                            className={`group relative flex flex-col justify-between p-8 rounded-2xl border border-neutral-200/50 bg-neutral-50/40 dark:border-sky-500/10 dark:bg-[#0B1020] hover:border-neutral-300 dark:hover:border-sky-500/20 transition-all duration-1000 transform ${
                                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            }`}
                        >
                            <div className="flex items-start justify-between mb-3">
                                <h4 className="text-[18px] font-bold text-neutral-900 dark:text-neutral-50 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                                    {step.title}
                                </h4>
                                <span className="text-xs font-bold font-mono tracking-widest text-neutral-400 dark:text-neutral-600">
                                    {step.id}
                                </span>
                            </div>
                            <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 mt-2">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
