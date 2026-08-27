import { ArrowUpRight } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

interface CaseStudy {
    id: string;
    title: string;
    tag: string;
    problem: string;
    systemBuilt: string;
    responsibility: string;
    result: string;
    tech: string[];
}

export function FeaturedCaseStudies() {
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

    const projects: CaseStudy[] = [
        {
            id: '01',
            title: 'Ivatan — Super App Backend',
            tag: 'Backend System / Super App',
            problem:
                'Multiple modules needed to work inside one backend ecosystem with stable APIs, authentication, admin control, and scalable business workflows.',
            systemBuilt:
                'Structured backend foundation with modular APIs, database planning, business logic separation, admin-side control, and production-focused flows.',
            responsibility:
                'Backend architecture, API development, database planning, module structuring, debugging, and deployment support.',
            result: 'A cleaner backend foundation capable of supporting multiple product modules from one platform.',
            tech: [
                'Laravel',
                'PHP',
                'MySQL',
                'REST APIs',
                'Auth',
                'Admin Panel',
            ],
        },
        {
            id: '02',
            title: 'Skills Pehle — EdTech + Fintech Platform',
            tag: 'EdTech / Fintech Logic',
            problem:
                'The platform required learning workflows along with wallet, payment, commission, and admin-side financial logic.',
            systemBuilt:
                'Backend flows for users, learning modules, transactions, payment gateways, wallet updates, commission handling, and admin visibility.',
            responsibility:
                'System planning, backend development, payment integration, wallet logic, API development, and testing.',
            result: 'A production-ready education platform with structured financial workflows.',
            tech: [
                'Laravel',
                'MySQL',
                'Razorpay',
                'Cashfree',
                'Queues',
                'Admin Panel',
            ],
        },
        {
            id: '03',
            title: 'Exam Babu — AI LMS & Examination Platform',
            tag: 'AI LMS / Exam System',
            problem:
                'The product needed LMS features, exam workflows, results, and AI-supported functionality inside one organized platform.',
            systemBuilt:
                'Learning, exam, student, result, and AI-processing flows with structured backend logic and admin-side management.',
            responsibility:
                'Backend development, exam logic, AI workflow integration, database design, API development, and deployment support.',
            result: 'A structured LMS and examination system with AI-assisted capabilities.',
            tech: [
                'Laravel',
                'MySQL',
                'AI APIs',
                'LMS',
                'Exam Engine',
                'Admin Panel',
            ],
        },
        {
            id: '04',
            title: 'Vikas College — Enterprise CMS',
            tag: 'CMS / Admin System',
            problem:
                'The college needed a manageable system for pages, updates, content, media, and admin-side control.',
            systemBuilt:
                'Custom CMS with structured content sections, role-based management, media handling, and deployment-ready setup.',
            responsibility:
                'CMS architecture, backend development, UI integration, admin panel setup, server deployment, and support.',
            result: 'A maintainable CMS that non-technical admins can manage.',
            tech: [
                'Laravel',
                'MySQL',
                'Tailwind CSS',
                'Admin Panel',
                'Deployment',
            ],
        },
    ];

    const ivatan = projects[0];
    const subProjects = projects.slice(1);

    return (
        <section
            id="case-studies"
            ref={sectionRef}
            className="w-full overflow-hidden bg-white py-16 md:py-24 dark:bg-[#050814]"
        >
            {/* Background design pattern lines */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header */}
                <div
                    className={`transition-premium mb-10 max-w-3xl transform will-change-transform ${
                        isVisible
                            ? 'translate-y-0 opacity-100'
                            : 'translate-y-6 opacity-0'
                    }`}
                >
                    <h2 className="mb-3 text-[13px] font-bold tracking-widest text-blue-600 uppercase dark:text-cyan-400">
                        Selected Systems
                    </h2>
                    <h3 className="text-3xl leading-[1.15] font-extrabold tracking-tight text-neutral-900 sm:text-4xl lg:text-[44px] dark:text-neutral-50">
                        Case Studies Built Around Real Product Problems
                    </h3>
                    <p className="mx-auto mt-4 max-w-[720px] text-base leading-relaxed text-neutral-600 md:text-lg dark:text-neutral-400">
                        Each project is presented through the lens of system
                        design, backend responsibility, business logic, and
                        production delivery — not just screenshots.
                    </p>
                </div>

                {/* Main Content Layout */}
                <div className="space-y-12">
                    {/* Top Large Card: Ivatan */}
                    <div
                        className={`group relative rounded-2xl border border-neutral-200/50 bg-neutral-50/40 p-8 shadow-xs transition-all duration-500 ease-out hover:-translate-y-1 hover:border-neutral-300 hover:shadow-lg dark:border-sky-500/10 dark:bg-[#0B1020] dark:hover:border-cyan-400/30 dark:hover:shadow-cyan-950/10 ${
                            isVisible
                                ? 'translate-y-0 opacity-100'
                                : 'translate-y-10 opacity-0'
                        }`}
                    >
                        <div className="absolute inset-0 -z-10 rounded-2xl bg-linear-to-br from-blue-500/2 to-cyan-500/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                        <div className="flex flex-col justify-between gap-8 lg:flex-row">
                            <div className="flex-1">
                                <div className="mb-6 flex items-center justify-between border-b border-neutral-200/30 pb-4 dark:border-neutral-800/60">
                                    <div className="flex items-center gap-3">
                                        <h4 className="text-[22px] font-bold text-neutral-900 transition-colors group-hover:text-blue-600 dark:text-neutral-50 dark:group-hover:text-cyan-400">
                                            {ivatan.title}
                                        </h4>
                                        <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-[10px] font-semibold text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                                            {ivatan.tag}
                                        </span>
                                    </div>
                                    <span className="font-mono text-sm font-bold text-neutral-400 dark:text-neutral-600">
                                        {ivatan.id}
                                    </span>
                                </div>

                                <div className="mb-8 grid grid-cols-1 gap-8 text-[15px] md:grid-cols-2">
                                    <div>
                                        <h5 className="mb-1.5 text-[11px] font-bold tracking-wider text-neutral-500 uppercase dark:text-neutral-400">
                                            The Problem
                                        </h5>
                                        <p className="leading-relaxed text-neutral-600 dark:text-neutral-400">
                                            {ivatan.problem}
                                        </p>
                                    </div>
                                    <div>
                                        <h5 className="mb-1.5 text-[11px] font-bold tracking-wider text-neutral-500 uppercase dark:text-neutral-400">
                                            System Built
                                        </h5>
                                        <p className="leading-relaxed font-medium text-neutral-800 dark:text-neutral-300">
                                            {ivatan.systemBuilt}
                                        </p>
                                    </div>
                                    <div>
                                        <h5 className="mb-1.5 text-[11px] font-bold tracking-wider text-neutral-500 uppercase dark:text-neutral-400">
                                            My Responsibility
                                        </h5>
                                        <p className="leading-relaxed text-neutral-600 dark:text-neutral-400">
                                            {ivatan.responsibility}
                                        </p>
                                    </div>
                                    <div>
                                        <h5 className="mb-1.5 text-[11px] font-bold tracking-wider text-neutral-500 uppercase dark:text-neutral-400">
                                            Result
                                        </h5>
                                        <p className="leading-relaxed font-semibold text-neutral-800 dark:text-neutral-200">
                                            {ivatan.result}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-4 border-t border-neutral-200/30 pt-6 sm:flex-row sm:items-center sm:justify-between dark:border-neutral-800/60">
                                    <div className="flex flex-wrap gap-1.5">
                                        {ivatan.tech.map((t) => (
                                            <span
                                                key={t}
                                                className="rounded-md bg-neutral-100 px-2.5 py-1 text-[10px] font-semibold text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <a
                                        href="#"
                                        className="inline-flex items-center gap-1 text-xs font-bold text-neutral-700 transition-colors hover:text-blue-600 dark:text-neutral-300 dark:hover:text-cyan-400"
                                    >
                                        Read Case Study{' '}
                                        <ArrowUpRight className="h-3.5 w-3.5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom 3 Case Studies Grid */}
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {subProjects.map((project, idx) => (
                            <div
                                key={project.id}
                                style={{ transitionDelay: `${idx * 150}ms` }}
                                className={`group relative flex flex-col justify-between rounded-2xl border border-neutral-200/50 bg-white p-8 shadow-xs transition-all duration-500 ease-out hover:-translate-y-1 hover:border-neutral-300 hover:shadow-lg dark:border-sky-500/10 dark:bg-[#0B1020] dark:hover:border-cyan-400/30 dark:hover:shadow-cyan-950/10 ${
                                    isVisible
                                        ? 'translate-y-0 opacity-100'
                                        : 'translate-y-12 opacity-0'
                                }`}
                            >
                                <div className="absolute inset-0 -z-10 rounded-2xl bg-linear-to-br from-blue-500/2 to-cyan-500/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                                <div>
                                    <div className="mb-4 flex items-center justify-between border-b border-neutral-100 pb-3 dark:border-neutral-800/60">
                                        <div className="flex flex-col">
                                            <h4 className="text-[18px] font-bold text-neutral-900 transition-colors group-hover:text-blue-600 dark:text-neutral-50 dark:group-hover:text-cyan-400">
                                                {project.title}
                                            </h4>
                                            <span className="mt-0.5 text-[10px] font-bold text-blue-500 dark:text-cyan-400">
                                                {project.tag}
                                            </span>
                                        </div>
                                        <span className="font-mono text-xs font-bold text-neutral-400 dark:text-neutral-600">
                                            {project.id}
                                        </span>
                                    </div>

                                    <div className="mb-6 space-y-4 text-[15px]">
                                        <div>
                                            <h5 className="mb-1 text-[10px] font-bold tracking-wider text-neutral-500 uppercase dark:text-neutral-400">
                                                The Problem
                                            </h5>
                                            <p className="leading-relaxed text-neutral-600 dark:text-neutral-400">
                                                {project.problem}
                                            </p>
                                        </div>
                                        <div>
                                            <h5 className="mb-1 text-[10px] font-bold tracking-wider text-neutral-500 uppercase dark:text-neutral-400">
                                                System Built
                                            </h5>
                                            <p className="leading-relaxed font-medium text-neutral-800 dark:text-neutral-300">
                                                {project.systemBuilt}
                                            </p>
                                        </div>
                                        <div>
                                            <h5 className="mb-1 text-[10px] font-bold tracking-wider text-neutral-500 uppercase dark:text-neutral-400">
                                                My Responsibility
                                            </h5>
                                            <p className="leading-relaxed text-neutral-600 dark:text-neutral-400">
                                                {project.responsibility}
                                            </p>
                                        </div>
                                        <div>
                                            <h5 className="mb-1 text-[10px] font-bold tracking-wider text-neutral-500 uppercase dark:text-neutral-400">
                                                Result
                                            </h5>
                                            <p className="leading-relaxed font-medium text-neutral-800 dark:text-neutral-300">
                                                {project.result}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-3 border-t border-neutral-100 pt-4 dark:border-neutral-800/60">
                                    <div className="flex flex-wrap gap-1">
                                        {project.tech.map((t) => (
                                            <span
                                                key={t}
                                                className="rounded-md bg-neutral-100 px-2 py-0.5 text-[9px] font-semibold text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <a
                                        href="#"
                                        className="inline-flex items-center gap-1 text-[11px] font-bold text-neutral-700 transition-colors hover:text-blue-600 dark:text-neutral-300 dark:hover:text-cyan-400"
                                    >
                                        Read Case Study{' '}
                                        <ArrowUpRight className="h-3 w-3" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Premium design detail side note */}
                    <div
                        className={`mt-12 transform text-center transition-all delay-500 duration-1000 ${
                            isVisible
                                ? 'translate-y-0 opacity-100'
                                : 'translate-y-6 opacity-0'
                        }`}
                    >
                        <p className="mx-auto max-w-xl text-xs font-semibold text-neutral-400 italic dark:text-neutral-500">
                            “I present projects as systems because real product
                            work is not only about screens — it is about data,
                            logic, deployment, and long-term reliability.”
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
