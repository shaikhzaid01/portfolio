export function Footer() {
    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'Systems', href: '#systems' },
        { name: 'Case Studies', href: '#case-studies' },
        { name: 'Architecture', href: '#architecture' },
        { name: 'Process', href: '#process' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <footer className="w-full bg-white dark:bg-[#050814] border-t border-neutral-200/50 dark:border-neutral-900/30 py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-neutral-100 dark:border-neutral-900/30">
                    {/* Left Column (Brand Bio) */}
                    <div className="md:col-span-5 flex flex-col items-start text-left">
                        <span className="text-base font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
                            Shaikh Zaid
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mt-1">
                            Product-Focused Full Stack Engineer
                        </span>
                        <p className="text-xs leading-relaxed text-neutral-500 dark:text-neutral-405 mt-4 max-w-xs">
                            Building backend systems, APIs, SaaS platforms, AI workflows, and production-ready web applications.
                        </p>
                    </div>

                    {/* Middle Column (Links) */}
                    <div className="md:col-span-3">
                        <h5 className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-4">
                            Navigation
                        </h5>
                        <ul className="space-y-2.5">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-xs text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50 transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Column (Contact Info) */}
                    <div className="md:col-span-4">
                        <h5 className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-4">
                            Contact & Location
                        </h5>
                        <ul className="space-y-2.5 text-xs text-neutral-500 dark:text-neutral-400">
                            <li>
                                <span className="block text-[10px] text-neutral-400 dark:text-neutral-600 mb-0.5">Email</span>
                                <a
                                    href="mailto:your-email@example.com"
                                    className="hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors font-medium"
                                >
                                    your-email@example.com
                                </a>
                            </li>
                            <li>
                                <span className="block text-[10px] text-neutral-400 dark:text-neutral-600 mb-0.5">WhatsApp</span>
                                <a
                                    href="https://wa.me/XXXXXXXXXX"
                                    className="hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors font-medium"
                                >
                                    +91 XXXXX XXXXX
                                </a>
                            </li>
                            <li>
                                <span className="block text-[10px] text-neutral-400 dark:text-neutral-600 mb-0.5">Location</span>
                                <span className="font-semibold text-neutral-800 dark:text-neutral-300">India</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Row */}
                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                    <p className="text-[10px] text-neutral-400 dark:text-neutral-500">
                        &copy; 2026 Shaikh Zaid. Built with care, clarity, and production thinking.
                    </p>
                </div>
            </div>
        </footer>
    );
}
