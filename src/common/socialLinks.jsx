import { socialLinks } from "@/constants/portfolio"
import { Github, Linkedin } from "lucide-react"




const SocialLinks = () => {
    return (
        <nav className="flex space-x-4">
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-[#00d4ff] hover:text-white transition-colors">
                <Github />
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className=" text-[#00d4ff] hover:text-white transition-colors" >
                <Linkedin />
            </a>
        </nav>
    )
}


export default SocialLinks