interface BlueprintLayer {
    name: string;
    items: string[];
}

export function ProductSystemBlueprint() {
    const layers: BlueprintLayer[] = [
        {
            name: 'User Layer',
            items: ['Customer', 'Admin', 'Staff'],
        },
        {
            name: 'Application Layer',
            items: ['Web App', 'Admin Panel', 'API Client'],
        },
        {
            name: 'Backend Layer',
            items: ['Auth', 'Controllers', 'Services', 'Jobs / Queues'],
        },
        {
            name: 'Data Layer',
            items: ['MySQL', 'Redis', 'Logs'],
        },
        {
            name: 'External Layer',
            items: ['AI API', 'Payment Gateway', 'Email / SMS', 'Storage'],
        },
        {
            name: 'Deployment Layer',
            items: ['Server', 'SSL', 'Cron', 'Workers'],
        },
    ];

    return (
        <div className="relative w-full p-8 rounded-2xl border border-neutral-200/50 bg-white shadow-lg dark:border-sky-500/10 dark:bg-[#0B1020] backdrop-blur-xs font-mono text-[10px]">
            {/* Title bar */}
            <div className="flex items-center justify-between border-b border-neutral-200/30 dark:border-neutral-800/65 pb-3 mb-6">
                <span className="font-bold tracking-tight text-neutral-400 dark:text-neutral-400 uppercase">
                    Product System Blueprint
                </span>
                <span className="text-blue-500 dark:text-cyan-400 font-bold uppercase tracking-widest text-[9px] animate-pulse">
                    active schematic
                </span>
            </div>

            {/* Blueprint Grid Stack */}
            <div className="relative space-y-4">
                {/* Connecting vertical spine behind layers */}
                <div className="absolute top-4 bottom-4 left-4 w-[1px] bg-linear-to-b from-blue-500/30 via-cyan-400/30 to-purple-500/30" />

                {layers.map((layer, layerIdx) => (
                    <div key={layer.name} className="relative pl-8 flex flex-col gap-2 group">
                        {/* Connecting node */}
                        <div className="absolute left-3 top-2.5 h-2 w-2 rounded-full border border-blue-500/50 bg-white dark:bg-[#050814] transition-colors group-hover:bg-cyan-400" />
                        
                        <span className="font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider text-[8px]">
                            {layer.name}
                        </span>

                        <div className="flex flex-wrap gap-2">
                            {layer.items.map((item) => (
                                <div
                                    key={item}
                                    className="px-2.5 py-1.5 rounded-lg border border-neutral-200/50 bg-neutral-50/50 dark:border-sky-500/5 dark:bg-[#050814]/40 text-neutral-700 dark:text-neutral-300 font-bold tracking-tight shadow-3xs transition-all duration-300 hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-2xs"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
