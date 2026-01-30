import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

interface ThemeControllerProps {
    currentTheme: string;
    onToggleTheme: () => void;
}

export function ThemeController({
    currentTheme,
    onToggleTheme
}: ThemeControllerProps) {
    const isLight = currentTheme === 'light';

    return (
        <div className="fixed top-6 right-6 z-50">
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onToggleTheme}
                className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg backdrop-blur-sm transition-colors border border-white/10
          ${isLight ? 'bg-amber-400 text-white' : 'bg-purple-600 text-white'}
        `}
                title="Toggle Day/Night Mode"
            >
                {isLight ? <Sun size={24} /> : <Moon size={24} />}
            </motion.button>
        </div>
    );
}
