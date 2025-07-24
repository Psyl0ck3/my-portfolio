import { Code, User, Briefcase, Download, Eye, X } from "lucide-react"
import { useState } from "react"

export const AboutSection = () => {
    const [showCVModal, setShowCVModal] = useState(false)
    
    const cvFilePath = "/projects/CV-Bordeos.pdf"
    
    const handleDownload = () => {
     
        const link = document.createElement('a')
        link.href = cvFilePath
        link.download = 'CV-Bordeos.pdf' 
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        setShowCVModal(false)
    }
    
    const handleView = () => {
       
        window.open(cvFilePath, '_blank')
        setShowCVModal(false)
    }
    
    return (
        <>
            <section id="about" className="py-24 px-4 relative">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                        About <span className="text-primary">Me</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold">
                                Passionate UI/UX and Web Designer
                            </h3>
                            <p className="text-muted-foreground">Bachelor of Science in Computer Science</p>

                            <p className="text-muted-foreground">hello</p>
                            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                                <a href="#contact" className="cosmic-button">
                                    Contact Me
                                </a>
                                <button 
                                    onClick={() => setShowCVModal(true)}
                                    className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/20 hover:text-white transition-colors duration-300"
                                >
                                    Download my CV
                                </button>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-6">
                            <div className="gradient-border p-6 card-hover">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/30">
                                        <Code className="h-6 w-6 text-primary"/>
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-semibold text-lg">
                                            Web Development
                                        </h4>
                                        <p className="text-muted-foreground">
                                           I build fast, responsive web apps using React and Next.js, focusing on clean code and great user experiences.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="gradient-border p-6 card-hover">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/30">
                                        <User className="h-6 w-6 text-primary"/>
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-semibold text-lg">
                                            Project Management
                                        </h4>
                                        <p className="text-muted-foreground">
                                            I  lead teams, streamline workflows, and deliver projects on time—skills honed through organizational leadership.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="gradient-border p-6 card-hover">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/30">
                                        <Briefcase className="h-6 w-6 text-primary"/>
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-semibold text-lg">
                                            UI/UX Designer
                                        </h4>
                                        <p className="text-muted-foreground">
                                            I design intuitive interfaces in Figma, balancing aesthetics and usability for seamless digital experiences.
                                        </p>
                                    </div>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
            </section>

            {/* CV Options Modal */}
            {showCVModal && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-md w-full shadow-2xl">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-2xl font-bold">My CV</h3>
                            <button 
                                onClick={() => setShowCVModal(false)}
                                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>
                        
                        <p className="text-muted-foreground mb-8 text-center">
                            Would you like to download or view my CV?
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={handleDownload}
                                className="flex-1 flex items-center justify-center gap-3 px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors duration-300"
                            >
                                <Download className="h-5 w-5" />
                                Download
                            </button>
                            <button
                                onClick={handleView}
                                className="flex-1 flex items-center justify-center gap-3 px-6 py-3 border border-primary text-primary rounded-full hover:bg-primary/10 transition-colors duration-300"
                            >
                                <Eye className="h-5 w-5" />
                                View
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}