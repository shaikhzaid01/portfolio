import { PhoneCall, MessageCircleCode, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function FinalCTA() {
    return (
        <section
            id="contact"
            className="relative w-full overflow-hidden border-t border-neutral-100 bg-white py-16 md:py-24 dark:border-neutral-900/30 dark:bg-[#050814]"
        >
            {/* Dynamic accent background blur */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent dark:from-cyan-500/5" />

            <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
                <h3 className="mb-6 text-3xl leading-[1.15] font-extrabold tracking-tight text-neutral-900 sm:text-4xl lg:text-[44px] dark:text-neutral-50">
                    Need a Scalable Backend, SaaS Platform, or AI-Integrated
                    System?
                </h3>
                <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-neutral-600 md:text-lg dark:text-neutral-400">
                    Let’s build it properly — from architecture to deployment.
                </p>

                {/* Actions container */}
                <div className="mx-auto mb-8 flex w-full max-w-md flex-col items-center justify-center gap-4 sm:flex-row">
                    <Button
                        asChild
                        className="h-11 w-full rounded-lg bg-neutral-900 px-6 text-sm font-semibold text-white shadow-md transition-all hover:bg-neutral-800 sm:w-auto dark:bg-neutral-50 dark:text-neutral-950 dark:hover:bg-neutral-200"
                    >
                        <a
                            href="#"
                            className="flex items-center justify-center gap-2"
                        >
                            <PhoneCall className="h-4 w-4" />
                            Book a Call
                        </a>
                    </Button>
                    <Button
                        asChild
                        variant="outline"
                        className="h-11 w-full rounded-lg border-neutral-200/60 bg-transparent px-6 text-sm font-semibold text-neutral-700 shadow-xs transition-all hover:bg-neutral-50 hover:text-neutral-900 sm:w-auto dark:border-neutral-800/60 dark:text-neutral-300 dark:hover:bg-[#0B1020] dark:hover:text-neutral-50"
                    >
                        <a
                            href="https://wa.me/XXXXXXXXXX"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-center gap-2"
                        >
                            <MessageCircleCode className="h-4 w-4" />
                            WhatsApp Me
                        </a>
                    </Button>
                    <Button
                        asChild
                        variant="outline"
                        className="h-11 w-full rounded-lg border-neutral-200/60 bg-transparent px-6 text-sm font-semibold text-neutral-700 shadow-xs transition-all hover:bg-neutral-50 hover:text-neutral-900 sm:w-auto dark:border-neutral-800/60 dark:text-neutral-300 dark:hover:bg-[#0B1020] dark:hover:text-neutral-50"
                    >
                        <a
                            href="mailto:your-email@example.com"
                            className="flex items-center justify-center gap-2"
                        >
                            <Mail className="h-4 w-4" />
                            Email Me
                        </a>
                    </Button>
                </div>

                <p className="mx-auto max-w-xs text-xs leading-relaxed font-semibold text-neutral-400 sm:max-w-none dark:text-neutral-500">
                    Available for selected freelance projects, backend systems,
                    SaaS platforms, and technical product builds.
                </p>
            </div>
        </section>
    );
}
