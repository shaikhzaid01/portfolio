import { useEffect, useState, useRef } from 'react';

interface TechCategory {
    title: string;
    desc: string;
    items: string[];
}

export function TechStack() {
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

    const categories: TechCategory[] = [
        {
            title: 'Backend Engineering',
            desc: 'Build stable, secure core backend systems using clean abstractions.',
            items: ['Laravel', 'PHP', 'Node.js', 'REST APIs', 'Authentication', 'Authorization', 'Service Layer', 'Repository Pattern'],
        },
        {
            title: 'Database & Performance',
            desc: 'Structure database engines, query strategies, cache parameters, and locks.',
            items: ['MySQL', 'Redis', 'Query Optimization', 'Indexing', 'Caching', 'Transactions', 'Locking', 'Data Modeling'],
        },
        {
            title: 'Frontend Development',
            desc: 'Develop modular interfaces connected smoothly using clean state routing.',
            items: ['React', 'Inertia.js', 'Blade', 'Alpine.js', 'Tailwind CSS', 'Responsive UI', 'Component Architecture'],
        },
        {
            title: 'AI & Automation',
            desc: 'Deploy prompt chains, automation handlers, and validation workflows.',
            items: ['AI API Integration', 'Prompt Workflows', 'Response Parsing', 'Automation Logic', 'AI-assisted Content Flows', 'Smart Backend Features'],
        },
        {
            title: 'DevOps & Deployment',
            desc: 'Setup server hosts, web proxies, secure certs, and scheduled job runners.',
            items: ['Apache', 'Nginx', 'Hostinger VPS', 'Ubuntu Server', 'SSL', 'Git Deployment', 'Cron Jobs', 'Queue Workers', 'Supervisor'],
        },
        {
            title: 'Payments & Business Logic',
            desc: 'Plan financial gateways, ledgers, callback verification, and reports.',
            items: ['Razorpay', 'Cashfree', 'Webhooks', 'Wallet Logic', 'Transaction Logs', 'Commission Flows', 'Admin Reports'],
        },
        {
            title: 'Real-Time & Background Processing',
            desc: 'Configure WebSocket channels, async queues, and event streams.',
            items: ['WebSockets', 'Laravel Reverb', 'Queues', 'Jobs', 'Notifications', 'Event-driven Flows', 'Background Processing'],
        },
        {
            title: 'Media & Integrations',
            desc: 'Manage media workflows, file storage pipelines, and communication APIs.',
            items: ['FFmpeg', 'Video Processing', 'File Uploads', 'Third-party APIs', 'Email/SMS Integrations', 'Storage Handling'],
        },
    ];

    return (
        <section
            ref={sectionRef}
            className="w-full py-16 md:py-24 bg-white dark:bg-[#050814] overflow-hidden"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header */}
                <div
                    className={`max-w-3xl mx-auto text-center mb-10 transition-all duration-1000 ease-out transform ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                    }`}
                >
                    <h2 className="text-[13px] font-bold uppercase tracking-widest text-blue-600 dark:text-cyan-400 mb-3">
                        Engineering Stack
                    </h2>
                    <h3 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl lg:text-[44px] dark:text-neutral-50 leading-[1.15]">
                        Technology I Use to Build Production Systems
                    </h3>
                    <p className="mt-4 text-base md:text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 max-w-[720px] mx-auto">
                        I choose tools based on reliability, maintainability, project needs, and production responsibility — not just trends.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {categories.map((category, idx) => (
                        <div
                            key={category.title}
                            style={{ transitionDelay: `${idx * 80}ms` }}
                            className={`group p-8 rounded-2xl border border-neutral-200/50 bg-neutral-50/40 dark:border-sky-500/10 dark:bg-[#0B1020] shadow-xs hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-1000 transform ${
                                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            }`}
                        >
                            <h4 className="text-[18px] font-bold text-neutral-900 dark:text-neutral-50 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                                {category.title}
                            </h4>
                            <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mt-2 mb-4">
                                {category.desc}
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                                {category.items.map((item) => (
                                    <span
                                        key={item}
                                        className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-bold bg-white border border-neutral-200/40 text-neutral-700 dark:bg-[#050814]/40 dark:border-neutral-800 dark:text-neutral-300 transition-colors cursor-default"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom closing line */}
                <div
                    className={`mt-10 text-center transition-all duration-1000 ease-out delay-500 transform ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                    }`}
                >
                    <p className="text-xs font-bold text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
                        “The stack changes based on the project, but the focus stays the same: clean architecture, stable backend logic, secure workflows, and reliable deployment.”
                    </p>
                </div>
            </div>
        </section>
    );
}
