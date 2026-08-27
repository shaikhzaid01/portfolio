import type { LucideIcon } from 'lucide-react';
import {
    LayoutDashboard,
    Code2,
    Sparkles,
    GraduationCap,
    Wallet,
    Settings,
    Zap,
    Server,
} from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

interface SystemItem {
    title: string;
    desc: string;
    icon: LucideIcon;
    accent: string;
}

export function SystemsIBuild({
    hideHeader = false,
}: {
    hideHeader?: boolean;
}) {
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
                    className={`mx-auto max-w-3xl transform text-center transition-all duration-1000 ease-out ${
                        isVisible
                            ? 'translate-y-0 opacity-100'
                            : 'translate-y-6 opacity-0'
                    }`}
                >
                    <h2 className="mb-3 text-[13px] font-bold tracking-widest text-blue-600 uppercase dark:text-cyan-400">
                        Engineering Capabilities
                    </h2>
                    <h3 className="text-3xl leading-[1.15] font-extrabold tracking-tight text-neutral-900 sm:text-4xl lg:text-[44px] dark:text-neutral-50">
                        Systems I Build
                    </h3>
                    <p className="mx-auto mt-4 max-w-[720px] text-base leading-relaxed text-neutral-600 md:text-lg dark:text-neutral-400">
                        End-to-end digital systems designed with clean
                        architecture, reliable backend logic, scalable APIs, and
                        production deployment in mind.
                    </p>
                </div>
            )}

            {/* 8-card responsive Grid */}
            <div
                className={`${hideHeader ? 'mt-0' : 'mt-10'} grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`}
            >
                {systems.map((system, idx) => {
                    const Icon = system.icon;

                    return (
                        <div
                            key={idx}
                            style={{ transitionDelay: `${idx * 80}ms` }}
                            className={`group relative rounded-2xl border border-neutral-200/50 bg-white p-8 shadow-xs transition-all duration-700 hover:-translate-y-1 hover:border-neutral-300 dark:border-sky-500/10 dark:bg-[#0B1020] dark:hover:border-cyan-400/30 dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] ${
                                isVisible || hideHeader
                                    ? 'translate-y-0 opacity-100'
                                    : 'translate-y-10 opacity-0'
                            }`}
                        >
                            {/* Subtle card hover glow effect */}
                            <div className="absolute inset-0 -z-10 rounded-2xl bg-linear-to-br from-blue-500/5 to-cyan-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                            {/* Icon marker */}
                            <div className="mb-5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-neutral-500 transition-transform duration-300 group-hover:scale-110 dark:text-neutral-400">
                                <div
                                    className={`flex h-9 w-9 items-center justify-center rounded-lg ${system.accent}`}
                                >
                                    <Icon className="h-4.5 w-4.5" />
                                </div>
                            </div>

                            {/* Title */}
                            <h4 className="text-[20px] font-bold tracking-tight text-neutral-900 transition-colors duration-300 group-hover:text-blue-600 dark:text-neutral-50 dark:group-hover:text-cyan-400">
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
                    className={`mt-10 transform text-center transition-all delay-500 duration-1000 ease-out ${
                        isVisible
                            ? 'translate-y-0 opacity-100'
                            : 'translate-y-6 opacity-0'
                    }`}
                >
                    <p className="mx-auto max-w-2xl text-xs font-semibold text-neutral-400 italic dark:text-neutral-500">
                        “Every system is planned with real users, admin
                        workflows, security, database structure, deployment, and
                        future maintenance in mind.”
                    </p>
                </div>
            )}
        </>
    );

    if (hideHeader) {
        return (
            <div ref={sectionRef} className="w-full">
                {content}
            </div>
        );
    }

    return (
        <section
            id="systems"
            ref={sectionRef}
            className="w-full border-t border-neutral-200/40 bg-neutral-50/20 py-16 md:py-24 dark:border-sky-500/10 dark:bg-[#070B16]/50"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">{content}</div>
        </section>
    );
}
