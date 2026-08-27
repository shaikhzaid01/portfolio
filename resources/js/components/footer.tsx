import {
    Brain,
    Facebook,
    Twitter,
    Linkedin,
    Github,
    Instagram,
    Mail,
    Phone,
    MapPin,
} from 'lucide-react';
import React from 'react';

export function Footer() {
    return (
        <footer className="relative overflow-hidden border-t border-gray-200/50 bg-gradient-to-br from-white via-gray-50 to-gray-100 pt-24 pb-12 dark:border-neutral-900/30 dark:from-[#03050c] dark:via-[#050814] dark:to-[#0b1020]">
            {/* Background patterns */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] bg-[size:4rem_4rem] dark:bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)]"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 dark:from-cyan-500/5 dark:via-purple-500/5 dark:to-blue-500/5"></div>
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-16">
                    <div className="group">
                        <div className="mb-6 flex items-center">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow-lg transition-transform duration-300 group-hover:scale-105">
                                <Brain className="h-5 w-5" />
                            </div>
                            <span className="ml-3 bg-gradient-to-r from-black via-gray-800 to-gray-600 bg-clip-text text-lg font-bold tracking-tight text-transparent dark:from-white dark:via-neutral-200 dark:to-neutral-400">
                                Zaid
                            </span>
                        </div>
                        <p className="mb-6 text-sm leading-relaxed text-gray-600 dark:text-neutral-400">
                            Helping startups and businesses transform complex
                            technical challenges into premium, production-ready
                            systems.
                        </p>
                        <div className="flex space-x-3">
                            {[
                                { icon: Github, href: 'https://github.com' },
                                {
                                    icon: Linkedin,
                                    href: 'https://linkedin.com',
                                },
                                { icon: Twitter, href: 'https://twitter.com' },
                                { icon: Facebook, href: '#' },
                                { icon: Instagram, href: '#' },
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-black/10 bg-white/90 text-gray-600 shadow-xs transition-all duration-300 hover:border-transparent hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-500 hover:text-white hover:shadow-md dark:border-white/10 dark:bg-neutral-900/80 dark:text-neutral-400 dark:hover:text-white"
                                >
                                    <social.icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="mb-6 bg-gradient-to-r from-black via-gray-800 to-gray-600 bg-clip-text text-sm font-bold tracking-wider text-transparent uppercase dark:from-white dark:via-neutral-200 dark:to-neutral-400">
                            Services
                        </h4>
                        <ul className="space-y-3.5 text-sm">
                            {[
                                'MVP Development',
                                'Full-Stack Development',
                                'AI Solutions',
                                'LLM Applications',
                                'Data Engineering',
                            ].map((service, idx) => (
                                <li key={idx}>
                                    <a
                                        href="#"
                                        className="dark:text-neutral-450 group flex items-center text-gray-600 transition-colors duration-300 hover:text-black dark:hover:text-white"
                                    >
                                        <span className="mr-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 transition-opacity group-hover:opacity-100"></span>
                                        {service}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-6 bg-gradient-to-r from-black via-gray-800 to-gray-600 bg-clip-text text-sm font-bold tracking-wider text-transparent uppercase dark:from-white dark:via-neutral-200 dark:to-neutral-400">
                            Navigation
                        </h4>
                        <ul className="space-y-3.5 text-sm">
                            {[
                                { label: 'Home', href: '#' },
                                { label: 'Systems I Build', href: '#systems' },
                                {
                                    label: 'Case Studies',
                                    href: '#case-studies',
                                },
                                {
                                    label: 'Architecture',
                                    href: '#architecture',
                                },
                                { label: 'Working Process', href: '#process' },
                            ].map((item, idx) => (
                                <li key={idx}>
                                    <a
                                        href={item.href}
                                        className="dark:text-neutral-450 group flex items-center text-gray-600 transition-colors duration-300 hover:text-black dark:hover:text-white"
                                    >
                                        <span className="mr-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 transition-opacity group-hover:opacity-100"></span>
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-6 bg-gradient-to-r from-black via-gray-800 to-gray-600 bg-clip-text text-sm font-bold tracking-wider text-transparent uppercase dark:from-white dark:via-neutral-200 dark:to-neutral-400">
                            Contact
                        </h4>
                        <ul className="space-y-4 text-sm">
                            <li className="dark:text-neutral-450 flex items-center text-gray-600">
                                <MapPin className="mr-2 h-4 w-4 text-gray-400 dark:text-neutral-500" />
                                India
                            </li>
                            <li>
                                <a
                                    href="mailto:your-email@example.com"
                                    className="dark:text-neutral-450 group flex items-center text-gray-600 transition-colors duration-300 hover:text-black dark:hover:text-white"
                                >
                                    <Mail className="mr-2 h-4 w-4 text-gray-400 dark:text-neutral-500" />
                                    your-email@example.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:+91XXXXXXXXXX"
                                    className="dark:text-neutral-450 group flex items-center text-gray-600 transition-colors duration-300 hover:text-black dark:hover:text-white"
                                >
                                    <Phone className="mr-2 h-4 w-4 text-gray-400 dark:text-neutral-500" />
                                    +91 XXXXX XXXXX
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 border-t border-black/5 pt-8 text-center dark:border-neutral-900/60">
                    <p className="text-xs font-medium text-gray-500 dark:text-neutral-500">
                        © {new Date().getFullYear()} Shaikh Zaid. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
