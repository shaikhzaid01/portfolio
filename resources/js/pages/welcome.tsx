import { Head } from '@inertiajs/react';
import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/sections/hero';
import { SystemMetrics } from '@/components/sections/system-metrics';
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

export default function Welcome() {
    return (
        <>
            <Head title="Shaikh Zaid | Full Stack Engineering Portfolio" />
            <div className="min-h-screen bg-white text-neutral-900 transition-colors duration-300 dark:bg-[#03050c] dark:text-neutral-50 font-sans selection:bg-blue-500/20 selection:text-blue-600 dark:selection:bg-cyan-500/20 dark:selection:text-cyan-400">
                {/* 1. Navigation Bar */}
                <Navbar />

                {/* 2. Hero Section */}
                <Hero />

                {/* 3. System Metrics Obs Deck */}
                <SystemMetrics />

                {/* 4. Trust Snapshot Section */}
                <TrustSnapshot />

                {/* 5. Positioning Section */}
                <PositioningSection />

                {/* 6. Systems I Build Section */}
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
