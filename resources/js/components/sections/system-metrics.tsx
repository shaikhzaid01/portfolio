import { Terminal, Cpu, Activity, Database, RefreshCw } from 'lucide-react';
import { useState, useEffect } from 'react';

export function SystemMetrics({
    hideHeader = false,
}: {
    hideHeader?: boolean;
}) {
    const [activeTab, setActiveTab] = useState<'metrics' | 'queue' | 'db'>(
        'metrics',
    );
    const [currentTime, setCurrentTime] = useState<string>('');

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
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
            {/* Left Column: Console Explanation */}
            <div className="flex flex-col items-start text-left lg:col-span-6 xl:col-span-7">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200/60 bg-blue-50/50 px-3 py-1.5 text-xs font-semibold text-blue-700 backdrop-blur-xs select-none dark:border-cyan-800/40 dark:bg-cyan-950/20 dark:text-cyan-400">
                    <Terminal className="h-3.5 w-3.5" />
                    <span className="font-mono text-[10px] tracking-wide sm:text-xs">
                        SYSTEM OBSERVABILITY DECK
                    </span>
                </div>

                <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl dark:text-[#F8FAFC]">
                    Real-time pipeline monitoring & system health metrics.
                </h2>

                <p className="mb-6 max-w-xl text-base leading-relaxed text-neutral-600 sm:text-lg dark:text-neutral-400">
                    Explore live-simulated operational states of active
                    pipelines, API gateway metrics, queue loads, and database
                    pools to see how I optimize code structure for real-world
                    scaling.
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
            <div className="relative mx-auto w-full max-w-md lg:col-span-6 lg:max-w-none xl:col-span-5">
                {/* Glow Behind Container */}
                <div className="pointer-events-none absolute inset-0 -m-4 rounded-3xl bg-linear-to-tr from-cyan-500/10 to-indigo-500/10 blur-2xl dark:from-cyan-500/5 dark:to-purple-500/5" />

                {/* Glassmorphic Shell */}
                <div className="relative overflow-hidden rounded-2xl border border-neutral-200/80 bg-white/60 p-6 shadow-2xl backdrop-blur-md dark:border-neutral-800/80 dark:bg-neutral-900/50">
                    {/* Terminal Window Header */}
                    <div className="mb-4 flex items-center justify-between border-b border-neutral-200/60 pb-4 dark:border-neutral-800/60">
                        <div className="flex items-center gap-2">
                            <div className="h-3 w-3 rounded-full bg-red-400/80" />
                            <div className="h-3 w-3 rounded-full bg-yellow-400/80" />
                            <div className="h-3 w-3 rounded-full bg-green-400/80" />
                        </div>
                        <div className="flex gap-4">
                            <button
                                onClick={() => setActiveTab('metrics')}
                                className={`rounded-sm px-2 py-0.5 font-mono text-xs transition-all duration-300 ${activeTab === 'metrics' ? 'bg-neutral-200 font-medium text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100' : 'text-neutral-400 hover:text-neutral-600 dark:text-neutral-500 dark:hover:text-neutral-300'}`}
                            >
                                Metrics
                            </button>
                            <button
                                onClick={() => setActiveTab('queue')}
                                className={`rounded-sm px-2 py-0.5 font-mono text-xs transition-all duration-300 ${activeTab === 'queue' ? 'bg-neutral-200 font-medium text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100' : 'text-neutral-400 hover:text-neutral-600 dark:text-neutral-500 dark:hover:text-neutral-300'}`}
                            >
                                Queue
                            </button>
                            <button
                                onClick={() => setActiveTab('db')}
                                className={`rounded-sm px-2 py-0.5 font-mono text-xs transition-all duration-300 ${activeTab === 'db' ? 'bg-neutral-200 font-medium text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100' : 'text-neutral-400 hover:text-neutral-600 dark:text-neutral-500 dark:hover:text-neutral-300'}`}
                            >
                                DB_Pool
                            </button>
                        </div>
                    </div>

                    {/* Tab Content 1: Metrics */}
                    {activeTab === 'metrics' && (
                        <div className="space-y-4 font-mono text-xs text-neutral-600 dark:text-neutral-400">
                            <div className="flex items-center justify-between">
                                <span className="text-neutral-400 dark:text-neutral-500">
                                    $ systemctl status gateway
                                </span>
                                <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                                    active (online)
                                </span>
                            </div>

                            <div className="space-y-2.5">
                                <div className="flex items-center justify-between">
                                    <span className="flex items-center gap-1.5">
                                        <Cpu className="h-3.5 w-3.5 text-blue-500" />
                                        Gateway Latency
                                    </span>
                                    <span className="font-bold text-neutral-900 dark:text-neutral-100">
                                        12ms
                                    </span>
                                </div>
                                <div className="h-1.5 w-full overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800">
                                    <div className="h-full w-[12%] rounded-full bg-blue-500" />
                                </div>
                            </div>

                            <div className="space-y-2.5">
                                <div className="flex items-center justify-between">
                                    <span className="flex items-center gap-1.5">
                                        <Activity className="h-3.5 w-3.5 text-cyan-500" />
                                        CPU Load (4 Cores)
                                    </span>
                                    <span className="font-bold text-neutral-900 dark:text-neutral-100">
                                        22.8%
                                    </span>
                                </div>
                                <div className="h-1.5 w-full overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800">
                                    <div className="h-full w-[22.8%] rounded-full bg-cyan-500" />
                                </div>
                            </div>

                            <div className="flex items-center justify-between pt-2 text-[10px] text-neutral-400">
                                <span>Memory: 1.84GB / 8.00GB</span>
                                <span className="text-neutral-500">
                                    {currentTime || '12:00:00'}
                                </span>
                            </div>
                        </div>
                    )}

                    {/* Tab Content 2: Queue */}
                    {activeTab === 'queue' && (
                        <div className="space-y-3 font-mono text-xs text-neutral-600 dark:text-neutral-400">
                            <div className="flex items-center justify-between">
                                <span className="text-neutral-400 dark:text-neutral-500">
                                    $ php artisan queue:monitor
                                </span>
                                <span className="flex items-center gap-1 text-cyan-600 dark:text-cyan-400">
                                    <RefreshCw className="h-3 w-3 animate-spin" />
                                    watching
                                </span>
                            </div>
                            <div className="space-y-2 rounded-lg border border-neutral-200/40 bg-neutral-100/50 p-3 dark:border-neutral-800/40 dark:bg-neutral-950/40">
                                <div className="flex items-center justify-between">
                                    <span className="flex items-center gap-1.5">
                                        <Activity className="h-3.5 w-3.5 text-indigo-500" />
                                        ProcessWebhookJob
                                    </span>
                                    <span className="font-semibold text-emerald-500">
                                        completed
                                    </span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="flex items-center gap-1.5">
                                        <Activity className="h-3.5 w-3.5 text-indigo-500" />
                                        SendEmailNotification
                                    </span>
                                    <span className="font-semibold text-emerald-500">
                                        completed
                                    </span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="flex items-center gap-1.5">
                                        <Activity className="h-3.5 w-3.5 animate-pulse text-indigo-500" />
                                        SyncCRMIntegration
                                    </span>
                                    <span className="animate-pulse text-amber-500 dark:text-amber-400">
                                        processing
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between pt-1 text-[11px] text-neutral-400">
                                <span>Active Workers: 4</span>
                                <span>Failed Jobs: 0</span>
                            </div>
                        </div>
                    )}

                    {/* Tab Content 3: DB Pool */}
                    {activeTab === 'db' && (
                        <div className="space-y-3 font-mono text-xs text-neutral-600 dark:text-neutral-400">
                            <div className="flex items-center justify-between">
                                <span className="text-neutral-400 dark:text-neutral-500">
                                    $ db-pool --status
                                </span>
                                <span className="flex items-center gap-1.5 text-purple-600 dark:text-purple-400">
                                    <Database className="h-3.5 w-3.5" />
                                    healthy
                                </span>
                            </div>
                            <div className="space-y-2.5 border-t border-neutral-200/40 pt-3 dark:border-neutral-800/40">
                                <div className="flex items-center justify-between">
                                    <span>Read Pool Utilization</span>
                                    <span className="font-bold text-neutral-900 dark:text-neutral-100">
                                        14/100 connections
                                    </span>
                                </div>
                                <div className="h-1.5 w-full overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800">
                                    <div className="h-full w-[14%] rounded-full bg-purple-500" />
                                </div>
                            </div>
                            <div className="space-y-2.5">
                                <div className="flex items-center justify-between">
                                    <span>Write Pool Utilization</span>
                                    <span className="font-bold text-neutral-900 dark:text-neutral-100">
                                        3/50 connections
                                    </span>
                                </div>
                                <div className="h-1.5 w-full overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800">
                                    <div className="h-full w-[6%] rounded-full bg-cyan-500" />
                                </div>
                            </div>
                            <div className="flex items-center justify-between pt-2 text-[10px] text-neutral-400">
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
        <section
            id="system-metrics"
            className="relative w-full overflow-hidden border-t border-neutral-100 bg-white py-16 text-neutral-900 transition-colors duration-300 md:py-24 dark:border-neutral-900/60 dark:bg-[#03050c] dark:text-neutral-50"
        >
            {/* Ambient Background Glows */}
            <div className="pointer-events-none absolute top-1/3 left-1/4 h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-[120px] dark:bg-blue-600/5" />
            <div className="pointer-events-none absolute right-1/4 bottom-1/3 h-[350px] w-[350px] rounded-full bg-purple-500/5 blur-[100px] dark:bg-cyan-500/5" />

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                {content}
            </div>
        </section>
    );
}
