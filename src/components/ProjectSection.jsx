import { ExternalLink } from "lucide-react";
import { Github } from "lucide-react";
import { ArrowRight } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "StudBud Mobile Application",
        description: "StudBud is a student-focused project designed to help learners efficiently manage their academic tasks. It offers tools for organizing schedules, tracking assignments, setting study reminders, and prioritizing deadlines—all in one place",
        image: "/projects/Studbud-App.jpg",
        tags: ["Figma", "Canva"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 2,
        title: "Your Road",
        description: "An application designed and built in fulfillment of an institutional thesis project. Your Road – Real-time road hazard alerts & smart rerouting.",
        image: "/projects/YourRoad-App.png",
        tags: ["Figma", "Canva", "React", "JavaScript", "HTML", "Tailwind"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 3,
        title: "Villa Italina Restaurant Menu App UI Design",
        description: "A user interface design that features a user-friendly menu.",
        image: "/projects/Dailyui_menu.png",
        tags: ["Figma", "Canva"],
        demoUrl: "#",
        githubUrl: "#",
    },
]
export const ProjectSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl md:text-4xl font-bold mb-4 text-center">
                Featured
                <span className="text-primary"> Projects </span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Crafting functional, beautiful digital experiences through code and design.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        
                        <h3 className="text-xl font-semibold mb-1">
                            {project.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                        <div className="flex justify-between items-center">
                                <div className="flex spacec-x-3">
                                    <a href={project.demoUrl} 
                                    target="_blank"
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    >
                                        <ExternalLink size={20}/>
                                    </a>
                                    <a href={project.githubUrl}  target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <Github size={20}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a href="https://github.com/Psyl0ck3" className="cosmic-button w-fit flex items-center mx-auto gap-2" target="_blank">
                    Check my Github <ArrowRight size={16}/>
                </a>
            </div>
            <div className="text-center mt-12">
                <a href="https://dribbble.com/glyzza" className="cosmic-button w-fit flex items-center mx-auto gap-2" target="_blank">
                    Check my Dribbble <ArrowRight size={16}/>
                </a>
            </div>
        </div>
    </section>;
}