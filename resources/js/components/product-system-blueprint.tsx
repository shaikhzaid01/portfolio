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
        <div className="relative w-full rounded-2xl border border-neutral-200/50 bg-white p-8 font-sans text-xs shadow-lg backdrop-blur-xs dark:border-sky-500/10 dark:bg-[#0B1020]">
            {/* Title bar */}
            <div className="mb-6 flex items-center justify-between border-b border-neutral-200/30 pb-3 dark:border-neutral-800/65">
                <span className="text-xs font-bold tracking-tight text-neutral-500 uppercase dark:text-neutral-300">
                    Product System Blueprint
                </span>
                <span className="animate-pulse text-[10px] font-bold tracking-widest text-blue-500 uppercase dark:text-cyan-400">
                    active schematic
                </span>
            </div>

            {/* Blueprint Grid Stack */}
            <div className="relative space-y-5">
                {/* Connecting vertical spine behind layers */}
                <div className="absolute top-4 bottom-4 left-4 w-[1px] bg-linear-to-b from-blue-500/30 via-cyan-400/30 to-purple-500/30" />

                {layers.map((layer) => (
                    <div
                        key={layer.name}
                        className="group relative flex flex-col gap-2 pl-8"
                    >
                        {/* Connecting node */}
                        <div className="absolute top-2 left-3 h-2 w-2 rounded-full border border-blue-500/50 bg-white transition-colors group-hover:bg-cyan-400 dark:bg-[#050814]" />

                        <span className="text-[10px] font-bold tracking-wider text-neutral-500 uppercase dark:text-neutral-400">
                            {layer.name}
                        </span>

                        <div className="flex flex-wrap gap-2">
                            {layer.items.map((item) => (
                                <div
                                    key={item}
                                    className="shadow-3xs rounded-lg border border-neutral-200/50 bg-neutral-50/50 px-3 py-1.5 text-xs font-semibold tracking-tight text-neutral-800 transition-all duration-300 hover:border-neutral-300 hover:shadow-2xs sm:text-[13px] dark:border-sky-500/5 dark:bg-[#050814]/40 dark:text-neutral-200 dark:hover:border-neutral-700"
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
