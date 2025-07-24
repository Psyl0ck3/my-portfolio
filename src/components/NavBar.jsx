import { useEffect, useState } from "react";
import { cn } from "../lib/utils"
import { ThemeToggle } from './ThemeToggle';

const navItems = [
    {name: "Home", href: "#profile"},
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Projects", href: "#projects"},
    {name: "Contact", href: "#contact"},
] 

export const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Start with menu closed

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10); // Use scrollY, not screenY
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={cn(
            "fixed top-0 left-0 w-full z-50 transition-all duration-300", 
            isScrolled 
                ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" 
                : "py-5"
        )}>
            <div className="container flex items-center justify-between">
                <a href="#about" className="text-xl font-bold text-primary flex items-center">
                    <span className="relative z-10">
                        <span className="text-glow text-foreground">Glyzza</span>Portfolio
                    </span>
                </a>

                {/* Desktop navigation */}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item, key) => (
                        <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-400">
                            {item.name}
                        </a>
                        
                    ))}
                    <ThemeToggle />
                </div>
                {/* Mobile menu button */}
                <div className="md:hidden flex items-center space-x-4">
                    
                    <button 
                        className="md:hidden z-50 p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                            <span className={cn(
                                "block h-0.5 w-6 bg-current transition-all duration-300",
                                isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                            )}></span>
                            <span className={cn(
                                "block h-0.5 w-6 bg-current transition-all duration-300",
                                isMenuOpen ? "opacity-0" : ""
                            )}></span>
                            <span className={cn(
                                "block h-0.5 w-6 bg-current transition-all duration-300",
                                isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                            )}></span>
                        </div>
                    </button>
                </div>

                {/* Mobile menu overlay */}
                <div className={cn(
                    "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                    "transition-all duration-300 md:hidden", 
                    isMenuOpen 
                        ? "opacity-100 pointer-events-auto" 
                        : "opacity-0 pointer-events-none"
                )}>
                    <div className="flex flex-col items-center space-y-8 text-xl">
                        {navItems.map((item, key) => (
                            <a 
                                key={key} 
                                href={item.href} 
                                className="text-foreground/80 hover:text-primary transition-colors duration-400"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                        {/* Theme toggle below all nav items */}
                        <div className="mt-4">
                            <ThemeToggle />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}