import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { Sun, Moon } from "lucide-react";

const ToggleTheme = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-300 dark:bg-gray-800 transition-colors"
        >
            {theme === "dark" ? (
                <Sun className="text-yellow-400" />
            ) : (
                <Moon className="text-gray-700" />
            )}
        </button>
    );
};

export default ToggleTheme;
