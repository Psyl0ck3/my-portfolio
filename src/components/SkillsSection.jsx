import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
    {name: "HTML/CSS", level: 95, category: "Frontend"}, 
    {name: "JavaScript", level: 90, category: "Frontend"}, 
    {name: "React", level: 95, category: "Frontend"}, 
    {name: "TypeScript", level: 80, category: "Frontend"}, 
    {name: "Next.js", level: 80, category: "Frontend"}, 
    {name: "Tailwind", level: 95, category: "Frontend"}, 
    {name: "JavaScript", level: 95, category: "Frontend"}, 

    //UIUX

    {name: "Figma", level: 100, category: "UI/UX"}, 
    {name: "Adobe XD", level: 95, category: "UI/UX"}, 
    {name: "Canva", level: 95, category: "UI/UX"},
    {name: "Balsamiq", level: 80, category: "UI/UX"},  
    {name: "Miro", level: 85, category: "UI/UX"}, 
    {name: "Trello", level: 100, category: "Tools"} ,

    {name: "VS Code", level: 95, category: "Tools"} ,
    {name: "Github", level: 80, category: "Tools"} ,
] 

const categories = ["all", "Frontend", "UI/UX", "Tools"];

export const SkillsSection = () => {

    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory );


    return <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary">Skills</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                    <button key={key} onClick={() => setActiveCategory(category)} className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize", activeCategory=== category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary")}>
                        {category}
                    </button>
                ))}

            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill, key) => (
                    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg">
                                {skill.name}
                            </h3>
                        </div>
                        <div className="w-full bg-secondary/50 h2 rounded-full overflow-hidden">
                            <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]" style={{width: skill.level +"%" }}/>
                            
                        </div>
                        <div className="text-right mt-1">
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    </section>
}