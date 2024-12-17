import { socialLinks } from "@/constants/portfolio"
import { Github, Linkedin } from "lucide-react"




const SocialLinks = () => {
    return (
        <div className="flex items-center gap-4">
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="bg-white/80 cursor-pointer p-1 rounded-full">
                <Github color="black" size={20} />

            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="bg-white/80 cursor-pointer p-1  rounded-full">
                <Linkedin size={20} color="#0A66C2" />
            </a>
        </div>
    )
}


export default SocialLinks