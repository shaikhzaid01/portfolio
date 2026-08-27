import { Head } from '@inertiajs/react';
import { lazy, Suspense } from 'react';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { FeaturedCaseStudies } from '@/components/sections/featured-case-studies';
import { Hero } from '@/components/sections/hero';
import { HowIEngineer } from '@/components/sections/how-i-engineer';
import { PositioningSection } from '@/components/sections/positioning-section';
import { TrustSnapshot } from '@/components/sections/trust-snapshot';

// Lazy load non-critical sections
const ArchitectureShowcase = lazy(() =>
    import('@/components/sections/architecture-showcase').then((m) => ({
        default: m.ArchitectureShowcase,
    })),
);
const ProductionResponsibility = lazy(() =>
    import('@/components/sections/production-responsibility').then((m) => ({
        default: m.ProductionResponsibility,
    })),
);
const AIWorkflow = lazy(() =>
    import('@/components/sections/ai-workflow').then((m) => ({
        default: m.AIWorkflow,
    })),
);
const WorkingProcess = lazy(() =>
    import('@/components/sections/working-process').then((m) => ({
        default: m.WorkingProcess,
    })),
);
const Testimonials = lazy(() =>
    import('@/components/sections/testimonials').then((m) => ({
        default: m.Testimonials,
    })),
);
const AboutSection = lazy(() =>
    import('@/components/sections/about-section').then((m) => ({
        default: m.AboutSection,
    })),
);
const FinalCTA = lazy(() =>
    import('@/components/sections/final-cta').then((m) => ({
        default: m.FinalCTA,
    })),
);

const SectionSkeleton = () => (
    <div className="mx-auto w-full max-w-7xl animate-pulse px-6 py-20 lg:px-8">
        <div className="mb-4 h-4 w-24 rounded-md bg-neutral-200 dark:bg-neutral-800/60" />
        <div className="mb-6 h-8 w-64 rounded-md bg-neutral-300 dark:bg-neutral-700/60" />
        <div className="space-y-3">
            <div className="h-4 w-full rounded-md bg-neutral-200 dark:bg-neutral-800/40" />
            <div className="h-4 w-5/6 rounded-md bg-neutral-200 dark:bg-neutral-800/40" />
            <div className="h-4 w-4/6 rounded-md bg-neutral-200 dark:bg-neutral-800/40" />
        </div>
    </div>
);

export default function Welcome() {
    return (
        <>
            <Head title="Shaikh Zaid | Full Stack Engineering Portfolio" />
            <div className="min-h-screen bg-white font-sans text-neutral-900 transition-colors duration-300 selection:bg-blue-500/20 selection:text-blue-600 dark:bg-[#03050c] dark:text-neutral-50 dark:selection:bg-cyan-500/20 dark:selection:text-cyan-400">
                {/* 1. Navigation Bar */}
                <Navbar />

                {/* 2. Hero Section */}
                <Hero />

                {/* 3. Consolidated Engineering Hub (Tabs for Metrics, Capabilities, and Tech Stack) */}
                <HowIEngineer />

                {/* 4. Trust Snapshot Section */}
                <TrustSnapshot />

                {/* 5. Positioning Section */}
                <PositioningSection />

                {/* 6. Featured Case Studies */}
                <FeaturedCaseStudies />

                <Suspense fallback={<SectionSkeleton />}>
                    {/* 7. How I Think in Systems (Architecture Showcase) */}
                    <ArchitectureShowcase />

                    {/* 8. Built Beyond Development (Production Responsibility) */}
                    <ProductionResponsibility />

                    {/* 9. AI Workflow Section */}
                    <AIWorkflow />

                    {/* 10. Working Process Section */}
                    <WorkingProcess />

                    {/* 11. Client Testimonials */}
                    <Testimonials />

                    {/* 12. About Shaikh Zaid */}
                    <AboutSection />

                    {/* 13. Final Call to Action */}
                    <FinalCTA />
                </Suspense>

                {/* 14. Footer */}
                <Footer />
            </div>
        </>
    );
}
