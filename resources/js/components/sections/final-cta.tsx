import { PhoneCall, MessageCircleCode, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function FinalCTA() {
    return (
        <section
            id="contact"
            className="relative w-full py-16 md:py-24 bg-white dark:bg-[#050814] overflow-hidden border-t border-neutral-100 dark:border-neutral-900/30"
        >
            {/* Dynamic accent background blur */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent dark:from-cyan-500/5 pointer-events-none" />

            <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center relative z-10">
                <h3 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl lg:text-[44px] dark:text-neutral-50 mb-6 leading-[1.15]">
                    Need a Scalable Backend, SaaS Platform, or AI-Integrated System?
                </h3>
                <p className="text-base md:text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 mb-8 max-w-xl mx-auto">
                    Let’s build it properly — from architecture to deployment.
                </p>

                {/* Actions container */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto mb-8">
                    <Button
                        asChild
                        className="w-full sm:w-auto h-11 px-6 rounded-lg bg-neutral-900 text-sm font-semibold text-white shadow-md hover:bg-neutral-800 transition-all dark:bg-neutral-50 dark:text-neutral-950 dark:hover:bg-neutral-200"
                    >
                        <a href="#" className="flex items-center justify-center gap-2">
                            <PhoneCall className="h-4 w-4" />
                            Book a Call
                        </a>
                    </Button>
                    <Button
                        asChild
                        variant="outline"
                        className="w-full sm:w-auto h-11 px-6 rounded-lg border-neutral-200/60 bg-transparent text-sm font-semibold text-neutral-700 shadow-xs hover:bg-neutral-50 hover:text-neutral-900 dark:border-neutral-800/60 dark:text-neutral-300 dark:hover:bg-[#0B1020] dark:hover:text-neutral-50 transition-all"
                    >
                        <a href="https://wa.me/XXXXXXXXXX" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2">
                            <MessageCircleCode className="h-4 w-4" />
                            WhatsApp Me
                        </a>
                    </Button>
                    <Button
                        asChild
                        variant="outline"
                        className="w-full sm:w-auto h-11 px-6 rounded-lg border-neutral-200/60 bg-transparent text-sm font-semibold text-neutral-700 shadow-xs hover:bg-neutral-50 hover:text-neutral-900 dark:border-neutral-800/60 dark:text-neutral-300 dark:hover:bg-[#0B1020] dark:hover:text-neutral-50 transition-all"
                    >
                        <a href="mailto:your-email@example.com" className="flex items-center justify-center gap-2">
                            <Mail className="h-4 w-4" />
                            Email Me
                        </a>
                    </Button>
                </div>

                <p className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 max-w-xs sm:max-w-none mx-auto leading-relaxed">
                    Available for selected freelance projects, backend systems, SaaS platforms, and technical product builds.
                </p>
            </div>
        </section>
    );
}
