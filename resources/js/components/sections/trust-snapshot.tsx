import type { LucideIcon } from 'lucide-react';
import {
    CalendarRange,
    Database,
    Sparkles,
    Server,
    ShieldCheck,
} from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

interface CardData {
    title: string;
    label: string;
    description: string;
    icon: LucideIcon;
    accent: string;
}

export function TrustSnapshot() {
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
            { threshold: 0.15 },
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

    const cards: CardData[] = [
        {
            title: '3+ Years',
            label: 'Production Experience',
            description:
                'Building real-world web platforms, backend systems, APIs, and client projects.',
            icon: CalendarRange,
            accent: 'from-blue-500/20 to-cyan-500/20 text-blue-600 dark:text-cyan-400',
        },
        {
            title: 'Backend First',
            label: 'System Thinking',
            description:
                'Strong focus on database structure, API design, authentication, business logic, and maintainability.',
            icon: Database,
            accent: 'from-cyan-500/20 to-blue-500/20 text-cyan-600 dark:text-cyan-400',
        },
        {
            title: 'AI Ready',
            label: 'Workflow Integration',
            description:
                'AI-powered features, prompt flows, automation logic, and smart backend integrations.',
            icon: Sparkles,
            accent: 'from-purple-500/20 to-blue-500/20 text-purple-600 dark:text-purple-400',
        },
        {
            title: 'Deployment',
            label: 'Server Ownership',
            description:
                'Apache/Nginx setup, SSL, queues, workers, cron jobs, debugging, and production support.',
            icon: Server,
            accent: 'from-blue-500/20 to-purple-500/20 text-blue-600 dark:text-blue-400',
        },
        {
            title: 'Business Logic',
            label: 'Product Responsibility',
            description:
                'Payments, wallets, admin panels, role flows, approvals, and scalable product modules.',
            icon: ShieldCheck,
            accent: 'from-purple-500/20 to-cyan-500/20 text-purple-600 dark:text-cyan-400',
        },
    ];

    return (
        <section
            id="systems"
            ref={sectionRef}
            className="w-full overflow-hidden border-y border-neutral-200/40 bg-neutral-50/20 py-16 md:py-24 dark:border-sky-500/10 dark:bg-[#070B16]/50"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header with Animation */}
                <div
                    className={`mx-auto max-w-3xl transform text-center transition-all duration-1000 ease-out ${
                        isVisible
                            ? 'translate-y-0 opacity-100'
                            : 'translate-y-6 opacity-0'
                    }`}
                >
                    <h2 className="mb-3 text-[13px] font-bold tracking-widest text-blue-600 uppercase dark:text-cyan-400">
                        Engineering Philosophy
                    </h2>
                    <h3 className="text-3xl leading-[1.15] font-extrabold tracking-tight text-neutral-900 sm:text-4xl lg:text-[44px] dark:text-neutral-50">
                        Built for Real Production Work
                    </h3>
                    <p className="mx-auto mt-4 max-w-[720px] text-base leading-relaxed text-neutral-600 md:text-lg dark:text-neutral-400">
                        From backend architecture and APIs to AI workflows,
                        payments, deployment, and long-term support — every
                        project is planned like a real product.
                    </p>
                </div>

                {/* Grid Container */}
                <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                    {cards.map((card, idx) => {
                        const Icon = card.icon;

                        return (
                            <div
                                key={idx}
                                style={{ transitionDelay: `${idx * 100}ms` }}
                                className={`group relative rounded-2xl border border-neutral-200/50 bg-white p-8 shadow-xs transition-all duration-700 hover:-translate-y-1 hover:border-neutral-300 dark:border-sky-500/10 dark:bg-[#0B1020] dark:hover:border-cyan-400/30 dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] ${
                                    isVisible
                                        ? 'translate-y-0 opacity-100'
                                        : 'translate-y-12 opacity-0'
                                }`}
                            >
                                {/* Subtle decorative top gradient line following the curve */}
                                <div className="pointer-events-none absolute inset-0 rounded-2xl border-t-2 border-transparent border-t-blue-500/80 opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:border-t-cyan-400/80" />

                                {/* Card Header / Icon */}
                                <div className="flex items-center gap-3">
                                    <div
                                        className={`flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br transition-all duration-300 ${card.accent}`}
                                    >
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <span className="text-[11px] font-bold tracking-wider text-neutral-400 uppercase dark:text-neutral-500">
                                        {card.label}
                                    </span>
                                </div>

                                {/* Title */}
                                <h4 className="mt-6 text-xl font-bold tracking-tight text-neutral-900 transition-colors duration-300 group-hover:text-blue-600 dark:text-neutral-50 dark:group-hover:text-cyan-400">
                                    {card.title}
                                </h4>

                                {/* Description */}
                                <p className="mt-3 text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400">
                                    {card.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
