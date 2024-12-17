import { Linkedin, Github } from "lucide-react"
import { greetings } from "@/constants/portfolio"
import SocialLinks from "../custom/SocialLinks"



const Navbar = () => {
 
   
    return (
        <header className={`py-4  bg-sky-500  text-white`}>
            <nav className="flex items-center max-w-[986px] mx-auto  justify-between px-8">
                <h2 className="text-2xl">{greetings.name}</h2>
                <SocialLinks/>
            </nav>
        </header>
    )
}

export default Navbar