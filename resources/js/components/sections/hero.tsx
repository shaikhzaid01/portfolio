import { CheckCircle, Cpu, HardDrive, Compass } from 'lucide-react';

export function Hero() {
    return (
        <section 
            aria-label="Introduction"
            className="relative min-h-[95vh] lg:min-h-screen w-full flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-[#F8FAFC] text-[#0F172A] transition-colors duration-500 dark:bg-[#050814] dark:text-[#F8FAFC]"
        >
            {/* Ambient Multi-layered Glowing Orbs */}
            <div className="absolute top-10 left-10 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full bg-blue-500/10 dark:bg-[#38BDF8]/5 blur-[100px] pointer-events-none animate-pulse duration-10000" />
            <div className="absolute bottom-20 right-10 w-[250px] h-[250px] sm:w-[450px] sm:h-[450px] rounded-full bg-purple-500/10 dark:bg-purple-500/5 blur-[120px] pointer-events-none animate-pulse duration-7000" />
            <div className="absolute top-1/3 right-1/3 w-[200px] h-[200px] rounded-full bg-cyan-400/10 dark:bg-cyan-500/5 blur-[80px] pointer-events-none" />

            {/* Engineering Blueprint Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f080_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f080_1px,transparent_1px)] bg-[size:32px_32px] dark:bg-[linear-gradient(to_right,#1e293b20_1px,transparent_1px),linear-gradient(to_bottom,#1e293b20_1px,transparent_1px)] pointer-events-none" />
            

            <div className="mx-auto max-w-7xl w-full px-6 lg:px-8 flex-1 flex items-center relative z-10 my-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center w-full">
                    
                    {/* Left Column: 45% on Desktop */}
                    <div className="lg:col-span-6 xl:col-span-5 flex flex-col items-start text-left animate-fade-in">
                        
                        {/* Premium Availability Badge */}
                        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#2563EB]/10 bg-[#2563EB]/5 text-[#2563EB] dark:border-[#38BDF8]/20 dark:bg-[#38BDF8]/10 dark:text-[#38BDF8] text-[13px] font-mono font-bold tracking-wider mb-8 select-none animate-fade-in-delayed shadow-xs">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-450 opacity-75 animate-ping"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            <span>ACTIVE STATUS // READY</span>
                        </div>

                        {/* Name (Huge, Bold, Luxury Typography) */}
                        <h1 className="text-[48px] sm:text-[68px] lg:text-[84px] xl:text-[96px] font-extrabold tracking-tight leading-[0.9] text-[#0F172A] dark:text-[#F8FAFC] select-all mb-4 relative group">
                            Shaikh Zaid
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-cyan-400 dark:to-purple-500 group-hover:w-full transition-all duration-500" />
                        </h1>

                        {/* Tagline */}
                        <div className="relative mb-6 select-none">
                            <span className="text-[22px] sm:text-[26px] font-bold bg-gradient-to-r from-[#2563EB] to-blue-600 dark:from-[#38BDF8] dark:to-cyan-400 bg-clip-text text-transparent tracking-tight">
                                Product-Focused Full Stack Engineer
                            </span>
                            {/* Accent line with dynamic glow */}
                            <div className="h-[3px] w-36 bg-gradient-to-r from-[#2563EB] via-[#38BDF8] to-transparent dark:from-[#38BDF8] dark:via-purple-550 dark:to-transparent mt-2 rounded-full shadow-lg shadow-blue-500/50" />
                        </div>

                        {/* Paragraph description */}
                        <p className="text-[17px] sm:text-[19px] leading-relaxed text-[#475569] dark:text-[#CBD5E1] max-w-[620px] mb-8 font-normal">
                            I design and build scalable backend systems, SaaS platforms, APIs, AI-powered workflows, payment systems, and production-ready web applications that are built to grow with real businesses.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-8 animate-fade-in-buttons">
                            <a
                                href="https://calendly.com" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-[#2563EB] to-[#1d4ed8] dark:from-[#F8FAFC] dark:to-[#e2e8f0] px-8 text-[16px] font-semibold text-white dark:text-[#050814] shadow-lg shadow-blue-500/20 dark:shadow-none hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 text-center overflow-hidden"
                            >
                                <span className="absolute inset-0 w-full h-full bg-white/10 dark:bg-black/5 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                                Book a Call
                            </a>
                            <a
                                href="#case-studies"
                                className="inline-flex h-12 items-center justify-center rounded-full border border-[#475569]/30 bg-white/30 dark:bg-[#050814]/30 px-8 text-[16px] font-semibold text-[#0F172A] dark:text-[#F8FAFC] dark:border-[#CBD5E1]/20 hover:bg-[#0F172A]/5 dark:hover:bg-white/5 transition-all duration-300 backdrop-blur-md shadow-xs text-center"
                            >
                                View Case Studies
                            </a>
                        </div>

                        {/* Elegant Divider */}
                        <div className="w-full max-w-[420px] h-[1px] bg-gradient-to-r from-neutral-200 to-transparent dark:from-neutral-800/80 dark:to-transparent mb-6" />

                        {/* Small Trust Line */}
                        <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-xs font-mono tracking-wider text-[#475569]/80 dark:text-[#CBD5E1]/70 uppercase select-none">
                            <span>Backend</span>
                            <span className="text-blue-500/60 dark:text-sky-400/60">•</span>
                            <span>SaaS</span>
                            <span className="text-blue-500/60 dark:text-sky-400/60">•</span>
                            <span>APIs</span>
                            <span className="text-blue-500/60 dark:text-sky-400/60">•</span>
                            <span>AI</span>
                            <span className="text-blue-500/60 dark:text-sky-400/60">•</span>
                            <span>Payments</span>
                            <span className="text-blue-500/60 dark:text-sky-400/60">•</span>
                            <span>Deployment</span>
                        </div>
                    </div>

                    {/* Right Column: 55% on Desktop (Cinematic Video Frame & Details) */}
                    <div className="lg:col-span-6 xl:col-span-7 relative w-full flex items-center justify-center lg:justify-end py-8">
                        
                        {/* Radial Ambient Glow Behind Video Frame */}
                        <div className="absolute inset-0 -m-8 bg-gradient-to-tr from-[#2563EB]/15 to-[#38BDF8]/15 dark:from-[#38BDF8]/10 dark:to-purple-500/10 rounded-full blur-3xl pointer-events-none animate-pulse duration-5000" />

                        {/* Double-layered Border Frame */}
                        <div className="relative w-full max-w-[620px] aspect-video rounded-xl p-[2px] bg-gradient-to-tr from-[#2563EB]/30 via-transparent to-[#38BDF8]/40 dark:from-[#38BDF8]/30 dark:via-transparent dark:to-purple-500/40 shadow-2xl dark:shadow-[#000000a0] scale-98 hover:scale-100 transition-transform duration-700 ease-out group">
                            
                            {/* Inner Container */}
                            <div className="w-full h-full rounded-[10px] overflow-hidden bg-[#0a0f1d] relative">
                                {/* Temporary Profile Image */}
                                <img
                                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-750 ease-out group-hover:scale-[1.03]"
                                    src="https://media.licdn.com/dms/image/v2/D5603AQGcikV22E3veg/profile-displayphoto-crop_800_800/B56ZyNbfJ7KgAM-/0/1771899331983?e=1784160000&v=beta&t=YzfXnv3lIBCrVQxKT5VKkbjesPy-xjpHaKu0UV6UPug"
                                    alt="Shaikh Zaid profile visualizer"
                                    loading="lazy"
                                />

                                {/* Glass overlay coordinates indicator inside image */}
                                <div className="absolute bottom-3 left-3 bg-[#050814]/80 text-[10px] font-mono text-cyan-400/90 dark:text-cyan-400 px-2 py-0.5 rounded border border-cyan-400/20 backdrop-blur-xs select-none">
                                    SYS_LIVE // 200 OK
                                </div>
                            </div>
                        </div>

                        {/* Floating Detail Card 1 (API Response) */}
                        <div className="absolute top-[0px] left-[5%] sm:left-[10%] lg:left-[-15px] p-3 rounded-lg border border-[#0F172A]/10 bg-white/80 dark:border-white/10 dark:bg-[#050814]/90 shadow-lg hover:shadow-cyan-500/10 dark:hover:shadow-cyan-400/5 backdrop-blur-md flex items-center gap-2.5 select-none animate-float-slow transition-all hover:scale-105 duration-300">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                                <CheckCircle className="h-4.5 w-4.5" />
                            </div>
                            <div className="text-left font-mono">
                                <p className="text-[10px] text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">API Response</p>
                                <p className="text-xs font-bold text-neutral-900 dark:text-neutral-100">200 OK • Stable</p>
                            </div>
                        </div>

                        {/* Floating Detail Card 2 (Deployment) */}
                        <div className="absolute bottom-[30px] left-[-10px] sm:left-[5%] lg:left-[-40px] p-3 rounded-lg border border-[#0F172A]/10 bg-white/80 dark:border-white/10 dark:bg-[#050814]/90 shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-blue-450/5 backdrop-blur-md flex items-center gap-2.5 select-none animate-float-medium transition-all hover:scale-105 duration-300">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/10 text-[#2563EB] dark:text-[#38BDF8]">
                                <Cpu className="h-4.5 w-4.5" />
                            </div>
                            <div className="text-left font-mono">
                                <p className="text-[10px] text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">Deployment</p>
                                <p className="text-xs font-bold text-neutral-900 dark:text-neutral-100">Prod-Ready • SSL Active</p>
                            </div>
                        </div>

                        {/* Floating Detail Card 3 (AI Workflow) */}
                        <div className="absolute bottom-[-5px] right-[5%] sm:right-[10%] lg:right-[30px] p-3 rounded-lg border border-[#0F172A]/10 bg-white/80 dark:border-white/10 dark:bg-[#050814]/90 shadow-lg hover:shadow-purple-500/10 dark:hover:shadow-purple-450/5 backdrop-blur-md flex items-center gap-2.5 select-none animate-float-fast transition-all hover:scale-105 duration-300">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-500/10 text-purple-400">
                                <span className="relative flex h-2 w-2">
                                    <span className="absolute inline-flex h-full w-full rounded-full bg-purple-450 opacity-75 animate-ping"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                                </span>
                            </div>
                            <div className="text-left font-mono">
                                <p className="text-[10px] text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">AI Workflow</p>
                                <p className="text-xs font-bold text-neutral-900 dark:text-neutral-100">Connected • Optimized</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="w-full flex flex-col items-center justify-center gap-1.5 mt-8 select-none pointer-events-none animate-fade-in-delayed">
                <div className="flex h-8 w-5 justify-center rounded-full border border-neutral-300 dark:border-neutral-800 p-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#2563EB] dark:bg-[#38BDF8] animate-bounce" />
                </div>
                <span className="text-[11px] font-mono tracking-widest text-[#475569] dark:text-[#CBD5E1] uppercase opacity-85">
                    Scroll to Explore
                </span>
            </div>

            {/* Injected animations using standard Tailwind arbitrary values or custom CSS */}
            <style dangerouslySetInnerHTML={{__html: `
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
            `}} />
        </section>
    );
}
