import { useState, useEffect } from 'react';
import { Terminal, Cpu, ArrowRight, Activity, Database, RefreshCw } from 'lucide-react';

export function SystemMetrics({ hideHeader = false }: { hideHeader?: boolean }) {
    const [activeTab, setActiveTab] = useState<'metrics' | 'queue' | 'db'>('metrics');
    const [currentTime, setCurrentTime] = useState<string>('');
    const [pulseActive, setPulseActive] = useState(true);

    // Simulated real-time pulse effect
    useEffect(() => {
        const interval = setInterval(() => {
            setPulseActive((prev) => !prev);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    // Format current time for console
    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setCurrentTime(now.toTimeString().split(' ')[0]);
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    const content = (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Console Explanation */}
            <div className="lg:col-span-6 xl:col-span-7 flex flex-col items-start text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-200/60 bg-blue-50/50 text-xs font-semibold text-blue-700 dark:border-cyan-800/40 dark:bg-cyan-950/20 dark:text-cyan-400 mb-6 backdrop-blur-xs select-none">
                    <Terminal className="h-3.5 w-3.5" />
                    <span className="font-mono tracking-wide text-[10px] sm:text-xs">SYSTEM OBSERVABILITY DECK</span>
                </div>

                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-[#0F172A] dark:text-[#F8FAFC] mb-4">
                    Real-time pipeline monitoring & system health metrics.
                </h2>
                
                <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-xl leading-relaxed mb-6">
                    Explore live-simulated operational states of active pipelines, API gateway metrics, queue loads, and database pools to see how I optimize code structure for real-world scaling.
                </p>

                <div className="flex gap-6 font-mono text-xs text-neutral-500 dark:text-neutral-400">
                    <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                        <span>Zero-Downtime Pipeline</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-indigo-500" />
                        <span>Automatic Failover</span>
                    </div>
                </div>
            </div>

            {/* Right Column: Interactive Console */}
            <div className="lg:col-span-6 xl:col-span-5 relative w-full max-w-md mx-auto lg:max-w-none">
                {/* Glow Behind Container */}
                <div className="absolute inset-0 -m-4 bg-linear-to-tr from-cyan-500/10 to-indigo-500/10 dark:from-cyan-500/5 dark:to-purple-500/5 rounded-3xl blur-2xl pointer-events-none" />

                {/* Glassmorphic Shell */}
                <div className="relative rounded-2xl border border-neutral-200/80 bg-white/60 p-6 shadow-2xl dark:border-neutral-800/80 dark:bg-neutral-900/50 backdrop-blur-md overflow-hidden">
                    {/* Terminal Window Header */}
                    <div className="flex items-center justify-between border-b border-neutral-200/60 dark:border-neutral-800/60 pb-4 mb-4">
                        <div className="flex items-center gap-2">
                            <div className="h-3 w-3 rounded-full bg-red-400/80" />
                            <div className="h-3 w-3 rounded-full bg-yellow-400/80" />
                            <div className="h-3 w-3 rounded-full bg-green-400/80" />
                        </div>
                        <div className="flex gap-4">
                            <button
                                onClick={() => setActiveTab('metrics')}
                                className={`text-xs font-mono px-2 py-0.5 rounded-sm transition-all duration-300 ${activeTab === 'metrics' ? 'bg-neutral-200 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100 font-medium' : 'text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-300'}`}
                            >
                                Metrics
                            </button>
                            <button
                                onClick={() => setActiveTab('queue')}
                                className={`text-xs font-mono px-2 py-0.5 rounded-sm transition-all duration-300 ${activeTab === 'queue' ? 'bg-neutral-200 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100 font-medium' : 'text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-300'}`}
                            >
                                Queue
                            </button>
                            <button
                                onClick={() => setActiveTab('db')}
                                className={`text-xs font-mono px-2 py-0.5 rounded-sm transition-all duration-300 ${activeTab === 'db' ? 'bg-neutral-200 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100 font-medium' : 'text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-300'}`}
                            >
                                DB_Pool
                            </button>
                        </div>
                    </div>

                    {/* Tab Content 1: Metrics */}
                    {activeTab === 'metrics' && (
                        <div className="space-y-4 font-mono text-xs text-neutral-600 dark:text-neutral-400">
                            <div className="flex items-center justify-between">
                                <span className="text-neutral-400 dark:text-neutral-500">$ systemctl status gateway</span>
                                <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                    active (online)
                                </span>
                            </div>
                            
                            <div className="space-y-2.5">
                                <div className="flex justify-between items-center">
                                    <span className="flex items-center gap-1.5">
                                        <Cpu className="h-3.5 w-3.5 text-blue-500" />
                                        Gateway Latency
                                    </span>
                                    <span className="font-bold text-neutral-900 dark:text-neutral-100">12ms</span>
                                </div>
                                <div className="w-full bg-neutral-200 dark:bg-neutral-800 h-1.5 rounded-full overflow-hidden">
                                    <div className="bg-blue-500 h-full rounded-full w-[12%]" />
                                </div>
                            </div>

                            <div className="space-y-2.5">
                                <div className="flex justify-between items-center">
                                    <span className="flex items-center gap-1.5">
                                        <Activity className="h-3.5 w-3.5 text-cyan-500" />
                                        CPU Load (4 Cores)
                                    </span>
                                    <span className="font-bold text-neutral-900 dark:text-neutral-100">22.8%</span>
                                </div>
                                <div className="w-full bg-neutral-200 dark:bg-neutral-800 h-1.5 rounded-full overflow-hidden">
                                    <div className="bg-cyan-500 h-full rounded-full w-[22.8%]" />
                                </div>
                            </div>
                            
                            <div className="flex justify-between items-center text-[10px] text-neutral-400 pt-2">
                                <span>Memory: 1.84GB / 8.00GB</span>
                                <span className="text-neutral-500">{currentTime || '12:00:00'}</span>
                            </div>
                        </div>
                    )}

                    {/* Tab Content 2: Queue */}
                    {activeTab === 'queue' && (
                        <div className="space-y-3 font-mono text-xs text-neutral-600 dark:text-neutral-400">
                            <div className="flex items-center justify-between">
                                <span className="text-neutral-400 dark:text-neutral-500">$ php artisan queue:monitor</span>
                                <span className="text-cyan-600 dark:text-cyan-400 flex items-center gap-1">
                                    <RefreshCw className="h-3 w-3 animate-spin" />
                                    watching
                                </span>
                            </div>
                            <div className="bg-neutral-100/50 dark:bg-neutral-950/40 rounded-lg p-3 space-y-2 border border-neutral-200/40 dark:border-neutral-800/40">
                                <div className="flex items-center justify-between">
                                    <span className="flex items-center gap-1.5">
                                        <Activity className="h-3.5 w-3.5 text-indigo-500" />
                                        ProcessWebhookJob
                                    </span>
                                    <span className="text-emerald-500 font-semibold">completed</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="flex items-center gap-1.5">
                                        <Activity className="h-3.5 w-3.5 text-indigo-500" />
                                        SendEmailNotification
                                    </span>
                                    <span className="text-emerald-500 font-semibold">completed</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="flex items-center gap-1.5">
                                        <Activity className="h-3.5 w-3.5 text-indigo-500 animate-pulse" />
                                        SyncCRMIntegration
                                    </span>
                                    <span className="text-amber-500 dark:text-amber-400 animate-pulse">processing</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between text-[11px] text-neutral-400 pt-1">
                                <span>Active Workers: 4</span>
                                <span>Failed Jobs: 0</span>
                            </div>
                        </div>
                    )}

                    {/* Tab Content 3: DB Pool */}
                    {activeTab === 'db' && (
                        <div className="space-y-3 font-mono text-xs text-neutral-600 dark:text-neutral-400">
                            <div className="flex items-center justify-between">
                                <span className="text-neutral-400 dark:text-neutral-500">$ db-pool --status</span>
                                <span className="text-purple-600 dark:text-purple-400 flex items-center gap-1.5">
                                    <Database className="h-3.5 w-3.5" />
                                    healthy
                                </span>
                            </div>
                            <div className="space-y-2.5 border-t border-neutral-200/40 dark:border-neutral-800/40 pt-3">
                                <div className="flex justify-between items-center">
                                    <span>Read Pool Utilization</span>
                                    <span className="font-bold text-neutral-900 dark:text-neutral-100">14/100 connections</span>
                                </div>
                                <div className="w-full bg-neutral-200 dark:bg-neutral-800 h-1.5 rounded-full overflow-hidden">
                                    <div className="bg-purple-500 h-full rounded-full w-[14%]" />
                                </div>
                            </div>
                            <div className="space-y-2.5">
                                <div className="flex justify-between items-center">
                                    <span>Write Pool Utilization</span>
                                    <span className="font-bold text-neutral-900 dark:text-neutral-100">3/50 connections</span>
                                </div>
                                <div className="w-full bg-neutral-200 dark:bg-neutral-800 h-1.5 rounded-full overflow-hidden">
                                    <div className="bg-cyan-500 h-full rounded-full w-[6%]" />
                                </div>
                            </div>
                            <div className="flex justify-between items-center text-[10px] text-neutral-400 pt-2">
                                <span>Cache Hit Ratio: 98.4%</span>
                                <span>Idle State: OK</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>

        </div>
    );

    if (hideHeader) {
        return <div className="relative z-10 w-full">{content}</div>;
    }

    return (
        <section id="system-metrics" className="relative w-full py-16 md:py-24 overflow-hidden bg-white text-neutral-900 transition-colors duration-300 dark:bg-[#03050c] dark:text-neutral-50 border-t border-neutral-100 dark:border-neutral-900/60">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-blue-500/5 dark:bg-blue-600/5 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] rounded-full bg-purple-500/5 dark:bg-cyan-500/5 blur-[100px] pointer-events-none" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                {content}
            </div>
        </section>
    );
}
