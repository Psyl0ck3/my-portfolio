import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        console.log("ThemeToggle mounted");
        const storedTheme = localStorage.getItem("theme");
        console.log("Stored theme:", storedTheme);
        
        if (storedTheme === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
            console.log("Applied dark mode");
        } else {
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
            document.documentElement.classList.remove("dark");
            console.log("Applied light mode");
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    };

    return (
        <button 
            onClick={toggleTheme} 
            className="md:relative md:top-auto md:right-auto md:z-auto  rounded-lg hover:bg-foreground/10 transition-colors duration-200"
        >
            {isDarkMode ? (
                <Sun className="h-5 w-5 text-yellow-400" /> 
            ) : (
                <Moon className="h-5 w-5 text-blue-900 dark:text-blue-400" />
            )}
        </button>
    );
};