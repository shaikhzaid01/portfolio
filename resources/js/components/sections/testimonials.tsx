import { useEffect, useState, useRef } from 'react';
import { Play } from 'lucide-react';

export function Testimonials() {
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

    return (
        <section
            ref={sectionRef}
            className="w-full py-16 md:py-24 bg-white dark:bg-[#050814] overflow-hidden"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header */}
                <div
                    className={`max-w-3xl mx-auto text-center mb-10 transition-all duration-1000 ease-out transform ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                    }`}
                >
                    <h2 className="text-[13px] font-bold uppercase tracking-widest text-blue-600 dark:text-cyan-400 mb-3">
                        Client Trust
                    </h2>
                    <h3 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl lg:text-[44px] dark:text-neutral-50 leading-[1.15]">
                        Built With Ownership
                    </h3>
                    <p className="mt-4 text-base md:text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 max-w-[720px] mx-auto">
                        Real client trust comes from clear communication, reliable delivery, and support after the work is launched.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Text Testimonial 1 */}
                    <div
                        className={`p-8 rounded-2xl border border-neutral-200/50 bg-neutral-50/40 dark:border-sky-500/10 dark:bg-[#0B1020] shadow-xs flex flex-col justify-between transition-all duration-1000 transform ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                    >
                        <p className="text-sm italic leading-relaxed text-neutral-700 dark:text-neutral-300">
                            “Shaikh handled the backend and deployment with ownership. The system was delivered with clear communication and reliable support.”
                        </p>
                        <div className="mt-6 pt-4 border-t border-neutral-200/30 dark:border-neutral-800/60">
                            <span className="block text-xs font-bold text-neutral-900 dark:text-neutral-50">
                                Client Name
                            </span>
                            <span className="block text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                                Backend / SaaS Project
                            </span>
                        </div>
                    </div>

                    {/* Text Testimonial 2 */}
                    <div
                        className={`p-8 rounded-2xl border border-neutral-200/50 bg-neutral-50/40 dark:border-sky-500/10 dark:bg-[#0B1020] shadow-xs flex flex-col justify-between transition-all duration-1000 delay-100 transform ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                    >
                        <p className="text-sm italic leading-relaxed text-neutral-700 dark:text-neutral-300">
                            “He understood the requirements properly, structured the system well, and supported the project through launch.”
                        </p>
                        <div className="mt-6 pt-4 border-t border-neutral-200/30 dark:border-neutral-800/60">
                            <span className="block text-xs font-bold text-neutral-900 dark:text-neutral-50">
                                Client Name
                            </span>
                            <span className="block text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                                CMS / Web Platform
                            </span>
                        </div>
                    </div>

                    {/* Video Testimonial Placeholder */}
                    <div
                        className={`relative rounded-2xl border border-neutral-200/50 bg-neutral-50/40 dark:border-sky-500/10 dark:bg-[#0B1020] p-8 shadow-xs flex flex-col items-center justify-center text-center transition-all duration-1000 delay-200 transform min-h-[180px] overflow-hidden ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                    >
                        {/* Play Icon representing video player mock */}
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600/10 text-blue-600 dark:bg-cyan-500/10 dark:text-cyan-400 mb-3 animate-pulse">
                            <Play className="h-5 w-5 fill-current" />
                        </div>
                        <h4 className="text-xs font-bold text-neutral-900 dark:text-neutral-50">
                            Video Testimonial
                        </h4>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1.5 max-w-[200px]">
                            Add a 30–60 second client video here for stronger trust and human connection.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
