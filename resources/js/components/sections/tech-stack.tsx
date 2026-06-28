import { useEffect, useState, useRef } from 'react';

interface TechCategory {
    title: string;
    desc: string;
    items: string[];
}

export function TechStack({ hideHeader = false }: { hideHeader?: boolean }) {
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
            title: 'Laravel Ecosystem',
            desc: 'Primary framework for building robust, scalable APIs and backend systems.',
            items: ['Laravel 12/13', 'Eloquent ORM', 'Inertia.js', 'Blade Templates', 'PHPUnit/Pest', 'Laravel Reverb', 'Laravel Horizon'],
        },
        {
            title: 'Core Backend Languages',
            desc: 'Solid understanding of backend scripting languages and database queries.',
            items: ['PHP', 'TypeScript/JavaScript', 'MySQL', 'PostgreSQL', 'SQL Optimizations', 'Redis Caching'],
        },
        {
            title: 'Frontend Library',
            desc: 'Building responsive, fast, dynamic, and interactive user interfaces.',
            items: ['React', 'React Router', 'Tailwind CSS', 'Vite', 'State Management', 'Shadcn UI', 'Responsive Design'],
        },
        {
            title: 'API Development',
            desc: 'Design and build clean APIs with structured request/response pipelines.',
            items: ['REST APIs', 'API Validation', 'Authentication (Sanctum)', 'OAuth', 'Webhooks', 'Postman API Docs'],
        },
        {
            title: 'Server & Devops',
            desc: 'Set up servers, secure domains, and configure background environments.',
            items: ['Ubuntu / Linux', 'Apache / Nginx', 'SSL Installation', 'Git/GitHub Actions', 'PM2 / Supervisors', 'Cron Jobs'],
        },
        {
            title: 'Fintech Integrations',
            desc: 'Incorporate secure online payment systems and transaction ledgers.',
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

    const content = (
        <>
            {/* Header */}
            {!hideHeader && (
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
            )}

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {categories.map((category, idx) => (
                    <div
                        key={category.title}
                        style={{ transitionDelay: `${idx * 80}ms` }}
                        className={`group p-8 rounded-2xl border border-neutral-200/50 bg-neutral-50/40 dark:border-sky-500/10 dark:bg-[#0B1020] shadow-xs hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-1000 transform ${
                            isVisible || hideHeader ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                    >
                        <h4 className="text-[18px] font-bold text-neutral-900 dark:text-neutral-50 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                            {category.title}
                        </h4>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mt-2 mb-4">
                            {category.desc}
                        </p>
                        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-neutral-200/30 dark:border-neutral-800/40">
                            {category.items.map((item) => (
                                <span
                                    key={item}
                                    className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-semibold bg-neutral-100 text-neutral-700 dark:bg-[#0D1527] dark:text-neutral-300 border border-neutral-200/30 dark:border-neutral-800/50 hover:bg-neutral-200 dark:hover:bg-neutral-900 transition-colors cursor-default"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom closing line */}
            {!hideHeader && (
                <div
                    className={`mt-10 text-center transition-all duration-1000 ease-out delay-500 transform ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                    }`}
                >
                    <p className="text-xs font-bold text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
                        “The stack changes based on the project, but the focus stays the same: clean architecture, stable backend logic, secure workflows, and reliable deployment.”
                    </p>
                </div>
            )}
        </>
    );

    if (hideHeader) {
        return <div ref={sectionRef} className="w-full">{content}</div>;
    }

    return (
        <section
            ref={sectionRef}
            className="w-full py-16 md:py-24 bg-white dark:bg-[#050814] overflow-hidden"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {content}
            </div>
        </section>
    );
}
