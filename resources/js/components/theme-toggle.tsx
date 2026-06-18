import { Sun, Moon } from 'lucide-react';
import { useAppearance } from '@/hooks/use-appearance';
import { Button } from '@/components/ui/button';

export function ThemeToggle() {
    const { resolvedAppearance, updateAppearance } = useAppearance();

    const toggleTheme = () => {
        updateAppearance(resolvedAppearance === 'dark' ? 'light' : 'dark');
    };

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="relative h-9 w-9 rounded-lg border border-neutral-200/50 bg-transparent text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900 focus-visible:ring-1 focus-visible:ring-neutral-400 dark:border-neutral-800/50 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-neutral-50"
        >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}
