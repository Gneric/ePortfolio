import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Studies from "@/components/studies"
import Footer from "@/components/footer"

export default function Portfolio() {
    return (
        <div className = "lg:h-screen lg:w-1/2 lg:mt-0 lg:overflow-y-auto no-scrollbar">
            <Experience />
            <Studies />
            <Projects />
            <Footer />
        </div>
    )
}