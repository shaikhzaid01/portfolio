import { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';
import { Button } from '@/components/ui/button';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (!isOpen) return;

        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setIsOpen(false);
            }
        };

        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [isOpen]);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'Systems', href: '#systems' },
        { name: 'Case Studies', href: '#case-studies' },
        { name: 'Architecture', href: '#architecture' },
        { name: 'Process', href: '#process' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header
            className={`sticky top-0 z-50 w-full transition-all duration-300 ${
                isScrolled
                    ? 'border-b border-neutral-200/40 bg-white/75 backdrop-blur-md dark:border-sky-500/10 dark:bg-[#050814]/75 shadow-xs'
                    : 'border-b border-transparent bg-white/30 backdrop-blur-xs dark:bg-[#050814]/30'
            }`}
        >
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
                {/* Logo & Subtitle */}
                <a href="#" className="flex flex-col items-start gap-0.5 group focus-visible:outline-hidden">
                    <span className="text-[19px] font-bold tracking-tight text-neutral-900 transition-colors group-hover:text-blue-600 dark:text-neutral-50 dark:group-hover:text-cyan-400">
                        Shaikh Zaid
                    </span>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
                        Full Stack Engineer
                    </span>
                </a>

                {/* Desktop Nav Links */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="relative text-[14px] font-semibold text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-50 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm px-1 py-0.5"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <ThemeToggle />
                    <Button
                        asChild
                        variant="outline"
                        className="h-10 rounded-xl border-neutral-200/60 bg-transparent px-5 text-xs font-bold text-neutral-700 shadow-xs transition-colors hover:bg-neutral-50 hover:text-neutral-900 dark:border-sky-500/10 dark:text-neutral-300 dark:hover:bg-neutral-900 dark:hover:text-neutral-50"
                    >
                        <a href="#contact" className="flex items-center gap-1.5">
                            <PhoneCall className="h-3.5 w-3.5" />
                            Book a Call
                        </a>
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-2 md:hidden">
                    <ThemeToggle />
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-expanded={isOpen}
                        aria-label="Toggle menu"
                        className="h-10 w-10 rounded-lg text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-neutral-50"
                    >
                        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </Button>
                </div>
            </div>

            {/* Mobile Slide-Down Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-screen border-b border-neutral-200/40 bg-white/95 backdrop-blur-lg dark:border-sky-500/10 dark:bg-[#050814]/95' : 'max-h-0'
                }`}
            >
                <div className="flex flex-col gap-4 px-6 py-6">
                    <nav className="flex flex-col gap-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-base font-semibold text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-50 py-1.5 focus-visible:outline-hidden"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>
                    <div className="pt-2 border-t border-neutral-200/40 dark:border-neutral-800/40">
                        <Button
                            asChild
                            className="w-full h-11 justify-center rounded-xl bg-neutral-900 text-sm font-bold text-white transition-colors hover:bg-neutral-800 dark:bg-neutral-50 dark:text-neutral-950 dark:hover:bg-neutral-200"
                        >
                            <a href="#contact" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                                <PhoneCall className="h-4 w-4" />
                                Book a Call
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}
