import { useEffect, useState, useRef } from 'react';
import {
    LayoutDashboard,
    Code2,
    Sparkles,
    GraduationCap,
    Wallet,
    Settings,
    Zap,
    Server,
    LucideIcon
} from 'lucide-react';

interface SystemItem {
    title: string;
    desc: string;
    icon: LucideIcon;
    accent: string;
}

export function SystemsIBuild({ hideHeader = false }: { hideHeader?: boolean }) {
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

    const systems: SystemItem[] = [
        {
            title: 'SaaS Platforms',
            desc: 'Subscription-based tools, dashboards, roles, billing logic, admin control, and scalable product modules.',
            icon: LayoutDashboard,
            accent: 'text-blue-600 dark:text-cyan-400 bg-blue-500/10',
        },
        {
            title: 'REST API Backends',
            desc: 'Clean API architecture, authentication, validation, database design, response structure, and documentation.',
            icon: Code2,
            accent: 'text-cyan-600 dark:text-cyan-400 bg-cyan-500/10',
        },
        {
            title: 'AI-Integrated Workflows',
            desc: 'AI API integration, prompt workflows, smart automation, response handling, and backend-connected intelligence.',
            icon: Sparkles,
            accent: 'text-purple-600 dark:text-purple-400 bg-purple-500/10',
        },
        {
            title: 'EdTech & LMS Systems',
            desc: 'Courses, exams, students, teachers, results, certificates, learning flows, and admin management.',
            icon: GraduationCap,
            accent: 'text-blue-600 dark:text-blue-400 bg-blue-500/10',
        },
        {
            title: 'Fintech / Wallet Systems',
            desc: 'Payment gateways, wallet ledgers, transaction logs, callbacks, commissions, and secure financial workflows.',
            icon: Wallet,
            accent: 'text-cyan-600 dark:text-cyan-400 bg-cyan-500/10',
        },
        {
            title: 'CMS & Admin Panels',
            desc: 'Custom dashboards, content management, roles, media handling, approvals, reports, and operational control.',
            icon: Settings,
            accent: 'text-neutral-600 dark:text-neutral-300 bg-neutral-500/10',
        },
        {
            title: 'Real-Time Features',
            desc: 'Notifications, live updates, chat-style flows, WebSockets, queues, and event-driven backend features.',
            icon: Zap,
            accent: 'text-purple-600 dark:text-purple-400 bg-purple-500/10',
        },
        {
            title: 'Deployment & Maintenance',
            desc: 'Server setup, SSL, Apache/Nginx, Git deployment, queues, workers, cron jobs, debugging, and support.',
            icon: Server,
            accent: 'text-blue-600 dark:text-blue-400 bg-blue-500/10',
        },
    ];

    const content = (
        <>
            {/* Title block */}
            {!hideHeader && (
                <div
                    className={`max-w-3xl mx-auto text-center transition-all duration-1000 ease-out transform ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                    }`}
                >
                    <h2 className="text-[13px] font-bold uppercase tracking-widest text-blue-600 dark:text-cyan-400 mb-3">
                        Engineering Capabilities
                    </h2>
                    <h3 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl lg:text-[44px] dark:text-neutral-50 leading-[1.15]">
                        Systems I Build
                    </h3>
                    <p className="mt-4 text-base md:text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 max-w-[720px] mx-auto">
                        End-to-end digital systems designed with clean architecture, reliable backend logic, scalable APIs, and production deployment in mind.
                    </p>
                </div>
            )}

            {/* 8-card responsive Grid */}
            <div className={`${hideHeader ? 'mt-0' : 'mt-10'} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6`}>
                {systems.map((system, idx) => {
                    const Icon = system.icon;
                    return (
                        <div
                            key={idx}
                            style={{ transitionDelay: `${idx * 80}ms` }}
                            className={`group relative rounded-2xl border border-neutral-200/50 bg-white p-8 shadow-xs transition-all duration-700 hover:-translate-y-1 hover:border-neutral-300 dark:border-sky-500/10 dark:bg-[#0B1020] dark:hover:border-cyan-400/30 dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] ${
                                isVisible || hideHeader ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            }`}
                        >
                            {/* Subtle card hover glow effect */}
                            <div className="absolute inset-0 -z-10 rounded-2xl bg-linear-to-br from-blue-500/5 to-cyan-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                            {/* Icon marker */}
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110 shrink-0 mb-5 text-neutral-500 dark:text-neutral-400">
                                <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${system.accent}`}>
                                    <Icon className="h-4.5 w-4.5" />
                                </div>
                            </div>

                            {/* Title */}
                            <h4 className="text-[20px] font-bold tracking-tight text-neutral-900 dark:text-neutral-50 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                                {system.title}
                            </h4>

                            {/* Description */}
                            <p className="mt-3 text-[15px] leading-relaxed text-neutral-500 dark:text-neutral-400">
                                {system.desc}
                            </p>
                        </div>
                    );
                })}
            </div>

            {/* Bottom note */}
            {!hideHeader && (
                <div
                    className={`mt-10 text-center transition-all duration-1000 ease-out delay-500 transform ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                    }`}
                >
                    <p className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 max-w-2xl mx-auto italic">
                        “Every system is planned with real users, admin workflows, security, database structure, deployment, and future maintenance in mind.”
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
            id="systems"
            ref={sectionRef}
            className="w-full py-16 md:py-24 bg-neutral-50/20 dark:bg-[#070B16]/50 border-t border-neutral-200/40 dark:border-sky-500/10"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {content}
            </div>
        </section>
    );
}
