import { Head } from '@inertiajs/react';
import { Navbar } from '@/components/navbar';
import { TrustSnapshot } from '@/components/sections/trust-snapshot';
import { PositioningSection } from '@/components/sections/positioning-section';
import { SystemsIBuild } from '@/components/sections/systems-i-build';
import { FeaturedCaseStudies } from '@/components/sections/featured-case-studies';
import { ArchitectureShowcase } from '@/components/sections/architecture-showcase';
import { ProductionResponsibility } from '@/components/sections/production-responsibility';
import { AIWorkflow } from '@/components/sections/ai-workflow';
import { TechStack } from '@/components/sections/tech-stack';
import { WorkingProcess } from '@/components/sections/working-process';
import { Testimonials } from '@/components/sections/testimonials';
import { AboutSection } from '@/components/sections/about-section';
import { FinalCTA } from '@/components/sections/final-cta';
import { Footer } from '@/components/footer';
import { Terminal, Cpu, ArrowRight } from 'lucide-react';

export default function Welcome() {
    return (
        <>
            <Head title="Shaikh Zaid | Full Stack Engineering Portfolio" />
            <div className="min-h-screen bg-white text-neutral-900 transition-colors duration-300 dark:bg-[#03050c] dark:text-neutral-50 font-sans selection:bg-blue-500/20 selection:text-blue-600 dark:selection:bg-cyan-500/20 dark:selection:text-cyan-400">
                {/* 1. Navigation Bar */}
                <Navbar />

                {/* 2. Hero Section (Premium, Handcrafted, Cinematic) */}
                <section className="relative w-full pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden">
                    {/* Futuristic grid background overlay */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/40 via-transparent to-transparent dark:from-blue-950/10 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] from-purple-50/30 via-transparent to-transparent dark:from-purple-950/5 pointer-events-none" />

                    <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                            {/* Hero Copy */}
                            <div className="lg:col-span-7 flex flex-col items-start text-left">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200/50 bg-blue-50/50 text-xs font-semibold text-blue-700 dark:border-cyan-800/40 dark:bg-cyan-950/20 dark:text-cyan-400 mb-6">
                                    <Cpu className="h-3.5 w-3.5" />
                                    <span>Specialized in Production Systems</span>
                                </div>

                                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-neutral-900 dark:text-neutral-50 max-w-2xl leading-none mb-6">
                                    Engineering robust backends & smart integrations.
                                </h1>

                                <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-xl leading-relaxed mb-8">
                                    I design and build high-performance systems with Laravel, React, and server-side automation. Let's engineer scalable platforms with optimal uptime and security.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                                    <a
                                        href="#systems"
                                        className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-neutral-900 px-6 text-sm font-semibold text-white shadow-md hover:bg-neutral-800 transition-all dark:bg-neutral-50 dark:text-neutral-950 dark:hover:bg-neutral-200"
                                    >
                                        Explore Systems
                                        <ArrowRight className="h-4 w-4" />
                                    </a>
                                    <a
                                        href="#contact"
                                        className="inline-flex h-11 items-center justify-center rounded-lg border border-neutral-200/60 bg-transparent px-6 text-sm font-semibold text-neutral-700 shadow-xs hover:bg-neutral-50 hover:text-neutral-900 dark:border-neutral-800/60 dark:text-neutral-300 dark:hover:bg-neutral-900 dark:hover:text-neutral-50 transition-all"
                                    >
                                        Get in Touch
                                    </a>
                                </div>
                            </div>

                            {/* Cinematic Architecture Visual / Console Mock */}
                            <div className="lg:col-span-5 relative w-full max-w-md mx-auto lg:max-w-none">
                                <div className="relative rounded-2xl border border-neutral-200/60 bg-neutral-50/50 p-6 shadow-xl dark:border-neutral-800/60 dark:bg-neutral-900/40 backdrop-blur-xs">
                                    <div className="absolute top-0 right-0 -mt-3 -mr-3 h-24 w-24 rounded-full bg-linear-to-tr from-cyan-400/20 to-purple-500/20 blur-xl opacity-80" />

                                    {/* Simulated terminal/architecture layout */}
                                    <div className="flex items-center justify-between border-b border-neutral-200/50 dark:border-neutral-800/50 pb-3 mb-4">
                                        <div className="flex items-center gap-1.5">
                                            <div className="h-3 w-3 rounded-full bg-red-400/80" />
                                            <div className="h-3 w-3 rounded-full bg-yellow-400/80" />
                                            <div className="h-3 w-3 rounded-full bg-green-400/80" />
                                        </div>
                                        <div className="flex items-center gap-1.5 text-[10px] font-mono text-neutral-400 dark:text-neutral-500">
                                            <Terminal className="h-3 w-3" />
                                            <span>system_metrics.sh</span>
                                        </div>
                                    </div>

                                    <div className="space-y-3 font-mono text-xs text-neutral-600 dark:text-neutral-400">
                                        <div className="flex items-center justify-between">
                                            <span className="text-neutral-400 dark:text-neutral-500">$ systemctl status nginx</span>
                                            <span className="text-green-600 dark:text-green-400">● active (running)</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-neutral-400 dark:text-neutral-500">$ php artisan queue:work --once</span>
                                            <span className="text-neutral-500">processed 12 jobs</span>
                                        </div>
                                        <div className="flex items-center justify-between border-t border-neutral-200/30 dark:border-neutral-800/30 pt-3">
                                            <span>API Gateway Latency</span>
                                            <span className="font-bold text-neutral-900 dark:text-neutral-50">14ms</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span>DB Query Cache Hit</span>
                                            <span className="font-bold text-blue-600 dark:text-cyan-400">98.4%</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span>AI Workflow Queue</span>
                                            <span className="font-bold text-purple-600 dark:text-purple-400">0 pending</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Trust Snapshot Section */}
                <TrustSnapshot />

                {/* 4. Positioning Section */}
                <PositioningSection />

                {/* 5. Systems I Build Section */}
                <SystemsIBuild />

                {/* 6. Featured Case Studies */}
                <FeaturedCaseStudies />

                {/* 7. How I Think in Systems (Architecture Showcase) */}
                <ArchitectureShowcase />

                {/* 8. Built Beyond Development (Production Responsibility) */}
                <ProductionResponsibility />

                {/* 9. AI Workflow Section */}
                <AIWorkflow />

                {/* 10. Tech Stack Section */}
                <TechStack />

                {/* 11. Working Process Section */}
                <WorkingProcess />

                {/* 12. Client Testimonials */}
                <Testimonials />

                {/* 13. About Shaikh Zaid */}
                <AboutSection />

                {/* 14. Final Call to Action */}
                <FinalCTA />

                {/* 15. Footer */}
                <Footer />
            </div>
        </>
    );
}
