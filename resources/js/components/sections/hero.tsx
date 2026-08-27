import { CheckCircle, Cpu } from 'lucide-react';

export function Hero() {
    return (
        <section
            aria-label="Introduction"
            className="relative flex min-h-[95vh] w-full flex-col justify-between overflow-hidden bg-[#F8FAFC] pt-28 pb-12 text-[#0F172A] transition-colors duration-500 lg:min-h-screen dark:bg-[#050814] dark:text-[#F8FAFC]"
        >
            {/* Ambient Multi-layered Glowing Orbs */}
            <div className="pointer-events-none absolute top-10 left-10 h-[300px] w-[300px] animate-pulse rounded-full bg-blue-500/10 blur-[100px] duration-10000 sm:h-[500px] sm:w-[500px] dark:bg-[#38BDF8]/5" />
            <div className="pointer-events-none absolute right-10 bottom-20 h-[250px] w-[250px] animate-pulse rounded-full bg-purple-500/10 blur-[120px] duration-7000 sm:h-[450px] sm:w-[450px] dark:bg-purple-500/5" />
            <div className="pointer-events-none absolute top-1/3 right-1/3 h-[200px] w-[200px] rounded-full bg-cyan-400/10 blur-[80px] dark:bg-cyan-500/5" />

            {/* Engineering Blueprint Grid Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#e2e8f080_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f080_1px,transparent_1px)] bg-[size:32px_32px] dark:bg-[linear-gradient(to_right,#1e293b20_1px,transparent_1px),linear-gradient(to_bottom,#1e293b20_1px,transparent_1px)]" />

            <div className="relative z-10 mx-auto my-auto flex w-full max-w-7xl flex-1 items-center px-6 lg:px-8">
                <div className="grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-8">
                    {/* Left Column: 45% on Desktop */}
                    <div className="animate-fade-in flex flex-col items-start text-left lg:col-span-6 xl:col-span-5">
                        {/* Premium Availability Badge */}
                        <div className="animate-fade-in-delayed mb-8 inline-flex items-center gap-2.5 rounded-full border border-[#2563EB]/10 bg-[#2563EB]/5 px-3.5 py-1.5 font-mono text-[13px] font-bold tracking-wider text-[#2563EB] shadow-xs select-none dark:border-[#38BDF8]/20 dark:bg-[#38BDF8]/10 dark:text-[#38BDF8]">
                            <span className="relative flex h-2 w-2">
                                <span className="bg-emerald-450 absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                            </span>
                            <span>ACTIVE STATUS // READY</span>
                        </div>

                        {/* Name (Huge, Bold, Luxury Typography) */}
                        <h1 className="group relative mb-4 text-[48px] leading-[0.9] font-extrabold tracking-tight text-[#0F172A] select-all sm:text-[68px] lg:text-[84px] xl:text-[96px] dark:text-[#F8FAFC]">
                            Shaikh Zaid
                            <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-500 group-hover:w-full dark:from-cyan-400 dark:to-purple-500" />
                        </h1>

                        {/* Tagline */}
                        <div className="relative mb-6 select-none">
                            <span className="bg-gradient-to-r from-[#2563EB] to-blue-600 bg-clip-text text-[22px] font-bold tracking-tight text-transparent sm:text-[26px] dark:from-[#38BDF8] dark:to-cyan-400">
                                Product-Focused Full Stack Engineer
                            </span>
                            {/* Accent line with dynamic glow */}
                            <div className="dark:via-purple-550 mt-2 h-[3px] w-36 rounded-full bg-gradient-to-r from-[#2563EB] via-[#38BDF8] to-transparent shadow-lg shadow-blue-500/50 dark:from-[#38BDF8] dark:to-transparent" />
                        </div>

                        {/* Paragraph description */}
                        <p className="mb-8 max-w-[620px] text-[17px] leading-relaxed font-normal text-[#475569] sm:text-[19px] dark:text-[#CBD5E1]">
                            I design and build scalable backend systems, SaaS
                            platforms, APIs, AI-powered workflows, payment
                            systems, and production-ready web applications that
                            are built to grow with real businesses.
                        </p>

                        {/* CTAs */}
                        <div className="animate-fade-in-buttons mb-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
                            <a
                                href="https://calendly.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative inline-flex h-12 transform items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-[#2563EB] to-[#1d4ed8] px-8 text-center text-[16px] font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/30 active:translate-y-0 dark:from-[#F8FAFC] dark:to-[#e2e8f0] dark:text-[#050814] dark:shadow-none"
                            >
                                <span className="absolute inset-0 h-full w-full -translate-x-full -skew-x-12 transform bg-white/10 transition-transform duration-1000 ease-out group-hover:translate-x-full dark:bg-black/5" />
                                Book a Call
                            </a>
                            <a
                                href="#case-studies"
                                className="inline-flex h-12 items-center justify-center rounded-full border border-[#475569]/30 bg-white/30 px-8 text-center text-[16px] font-semibold text-[#0F172A] shadow-xs backdrop-blur-md transition-all duration-300 hover:bg-[#0F172A]/5 dark:border-[#CBD5E1]/20 dark:bg-[#050814]/30 dark:text-[#F8FAFC] dark:hover:bg-white/5"
                            >
                                View Case Studies
                            </a>
                        </div>

                        {/* Elegant Divider */}
                        <div className="mb-6 h-[1px] w-full max-w-[420px] bg-gradient-to-r from-neutral-200 to-transparent dark:from-neutral-800/80 dark:to-transparent" />

                        {/* Small Trust Line */}
                        <div className="flex flex-wrap gap-x-3 gap-y-1.5 font-mono text-xs tracking-wider text-[#475569]/80 uppercase select-none dark:text-[#CBD5E1]/70">
                            <span>Backend</span>
                            <span className="text-blue-500/60 dark:text-sky-400/60">
                                •
                            </span>
                            <span>SaaS</span>
                            <span className="text-blue-500/60 dark:text-sky-400/60">
                                •
                            </span>
                            <span>APIs</span>
                            <span className="text-blue-500/60 dark:text-sky-400/60">
                                •
                            </span>
                            <span>AI</span>
                            <span className="text-blue-500/60 dark:text-sky-400/60">
                                •
                            </span>
                            <span>Payments</span>
                            <span className="text-blue-500/60 dark:text-sky-400/60">
                                •
                            </span>
                            <span>Deployment</span>
                        </div>
                    </div>

                    {/* Right Column: 55% on Desktop (Cinematic Video Frame & Details) */}
                    <div className="relative flex w-full items-center justify-center py-8 lg:col-span-6 lg:justify-end xl:col-span-7">
                        {/* Radial Ambient Glow Behind Video Frame */}
                        <div className="pointer-events-none absolute inset-0 -m-8 animate-pulse rounded-full bg-gradient-to-tr from-[#2563EB]/15 to-[#38BDF8]/15 blur-3xl duration-5000 dark:from-[#38BDF8]/10 dark:to-purple-500/10" />

                        {/* Double-layered Border Frame */}
                        <div className="group relative aspect-video w-full max-w-[620px] scale-98 rounded-xl bg-gradient-to-tr from-[#2563EB]/30 via-transparent to-[#38BDF8]/40 p-[2px] shadow-2xl transition-transform duration-700 ease-out hover:scale-100 dark:from-[#38BDF8]/30 dark:via-transparent dark:to-purple-500/40 dark:shadow-[#000000a0]">
                            {/* Inner Container */}
                            <div className="relative h-full w-full overflow-hidden rounded-[10px] bg-[#0a0f1d]">
                                {/* Temporary Profile Image */}
                                <img
                                    className="h-full w-full object-cover opacity-90 transition-all duration-750 ease-out group-hover:scale-[1.03] group-hover:opacity-100"
                                    src="https://media.licdn.com/dms/image/v2/D5603AQGcikV22E3veg/profile-displayphoto-crop_800_800/B56ZyNbfJ7KgAM-/0/1771899331983?e=1784160000&v=beta&t=YzfXnv3lIBCrVQxKT5VKkbjesPy-xjpHaKu0UV6UPug"
                                    alt="Shaikh Zaid profile visualizer"
                                    loading="lazy"
                                />

                                {/* Glass overlay coordinates indicator inside image */}
                                <div className="absolute bottom-3 left-3 rounded border border-cyan-400/20 bg-[#050814]/80 px-2 py-0.5 font-mono text-[10px] text-cyan-400/90 backdrop-blur-xs select-none dark:text-cyan-400">
                                    SYS_LIVE // 200 OK
                                </div>
                            </div>
                        </div>

                        {/* Floating Detail Card 1 (API Response) */}
                        <div className="animate-float-slow absolute top-[0px] left-[5%] flex items-center gap-2.5 rounded-lg border border-[#0F172A]/10 bg-white/80 p-3 shadow-lg backdrop-blur-md transition-all duration-300 select-none hover:scale-105 hover:shadow-cyan-500/10 sm:left-[10%] lg:left-[-15px] dark:border-white/10 dark:bg-[#050814]/90 dark:hover:shadow-cyan-400/5">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                                <CheckCircle className="h-4.5 w-4.5" />
                            </div>
                            <div className="text-left font-mono">
                                <p className="text-[10px] tracking-wider text-neutral-400 uppercase dark:text-neutral-500">
                                    API Response
                                </p>
                                <p className="text-xs font-bold text-neutral-900 dark:text-neutral-100">
                                    200 OK • Stable
                                </p>
                            </div>
                        </div>

                        {/* Floating Detail Card 2 (Deployment) */}
                        <div className="dark:hover:shadow-blue-450/5 animate-float-medium absolute bottom-[30px] left-[-10px] flex items-center gap-2.5 rounded-lg border border-[#0F172A]/10 bg-white/80 p-3 shadow-lg backdrop-blur-md transition-all duration-300 select-none hover:scale-105 hover:shadow-blue-500/10 sm:left-[5%] lg:left-[-40px] dark:border-white/10 dark:bg-[#050814]/90">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/10 text-[#2563EB] dark:text-[#38BDF8]">
                                <Cpu className="h-4.5 w-4.5" />
                            </div>
                            <div className="text-left font-mono">
                                <p className="text-[10px] tracking-wider text-neutral-400 uppercase dark:text-neutral-500">
                                    Deployment
                                </p>
                                <p className="text-xs font-bold text-neutral-900 dark:text-neutral-100">
                                    Prod-Ready • SSL Active
                                </p>
                            </div>
                        </div>

                        {/* Floating Detail Card 3 (AI Workflow) */}
                        <div className="dark:hover:shadow-purple-450/5 animate-float-fast absolute right-[5%] bottom-[-5px] flex items-center gap-2.5 rounded-lg border border-[#0F172A]/10 bg-white/80 p-3 shadow-lg backdrop-blur-md transition-all duration-300 select-none hover:scale-105 hover:shadow-purple-500/10 sm:right-[10%] lg:right-[30px] dark:border-white/10 dark:bg-[#050814]/90">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-500/10 text-purple-400">
                                <span className="relative flex h-2 w-2">
                                    <span className="bg-purple-450 absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-purple-500"></span>
                                </span>
                            </div>
                            <div className="text-left font-mono">
                                <p className="text-[10px] tracking-wider text-neutral-400 uppercase dark:text-neutral-500">
                                    AI Workflow
                                </p>
                                <p className="text-xs font-bold text-neutral-900 dark:text-neutral-100">
                                    Connected • Optimized
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="animate-fade-in-delayed pointer-events-none mt-8 flex w-full flex-col items-center justify-center gap-1.5 select-none">
                <div className="flex h-8 w-5 justify-center rounded-full border border-neutral-300 p-1 dark:border-neutral-800">
                    <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#2563EB] dark:bg-[#38BDF8]" />
                </div>
                <span className="font-mono text-[11px] tracking-widest text-[#475569] uppercase opacity-85 dark:text-[#CBD5E1]">
                    Scroll to Explore
                </span>
            </div>

            {/* Injected animations using standard Tailwind arbitrary values or custom CSS */}
            <style
                dangerouslySetInnerHTML={{
                    __html: `
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(14px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-5px); }
                    100% { transform: translateY(0px); }
                }
                .animate-fade-in {
                    animation: fadeIn 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
                .animate-fade-in-delayed {
                    animation: fadeIn 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.15s forwards;
                    opacity: 0;
                }
                .animate-fade-in-buttons {
                    animation: fadeIn 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
                    opacity: 0;
                }
                .animate-float-slow {
                    animation: float 5.5s ease-in-out infinite;
                }
                .animate-float-medium {
                    animation: float 4.6s ease-in-out infinite;
                }
                .animate-float-fast {
                    animation: float 3.8s ease-in-out infinite;
                }
            `,
                }}
            />
        </section>
    );
}
