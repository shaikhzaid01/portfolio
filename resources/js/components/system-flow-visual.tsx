export function SystemFlowVisual() {
    const layers = [
        { name: 'Business Goal', desc: 'Define objectives and secure workflows' },
        { name: 'System Architecture', desc: 'Normalized schemas & transaction boundaries' },
        { name: 'API Layer', desc: 'REST endpoints with structured validation' },
        { name: 'Database', desc: 'Eager loading, proper indexing & locks' },
        { name: 'Deployment', desc: 'Secure Nginx server setup & workers' },
        { name: 'Support', desc: 'Error monitoring, logs & cron tasks' },
    ];

    return (
        <div className="relative w-full max-w-md mx-auto p-8 rounded-2xl border border-neutral-200/50 bg-white shadow-lg dark:border-sky-500/10 dark:bg-[#0B1020] backdrop-blur-xs">
            {/* Dark mode background glow */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent opacity-0 dark:opacity-100 blur-xl" />

            <div className="relative flex flex-col items-center gap-6">
                {/* Visual vertical connector line */}
                <div className="absolute top-4 bottom-4 left-1/2 -ml-[1px] w-[2px] bg-linear-to-b from-blue-500 via-cyan-400 to-purple-500 opacity-20 dark:opacity-30" />

                {layers.map((layer, index) => (
                    <div
                        key={index}
                        className="relative z-10 w-full flex items-center gap-4 transition-transform duration-300 hover:translate-x-1"
                    >
                        {/* Connecting visual node */}
                        <div className="relative flex items-center justify-center shrink-0">
                            <div className="h-3 w-3 rounded-full bg-linear-to-br from-blue-500 via-cyan-400 to-purple-500" />
                            {/* Pulse animation for active/top states */}
                            {index === 0 && (
                                <div className="absolute inset-0 rounded-full bg-cyan-400/50 animate-ping" />
                            )}
                        </div>

                        {/* Layer details block */}
                        <div className="flex-1 p-3.5 rounded-xl border border-neutral-200/40 bg-neutral-50/50 dark:border-sky-500/5 dark:bg-[#050814]/40">
                            <h4 className="text-[13px] font-bold tracking-tight text-neutral-800 dark:text-neutral-200">
                                {layer.name}
                            </h4>
                            <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5 leading-normal">
                                {layer.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
