import { Github, Linkedin, Menu } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { useState } from "react"
import { Separator } from "./ui/separator"
import { Fade } from "react-reveal"
import { socialLinks } from "@/constants/portfolio"
import SocialLinks from "@/common/socialLinks"



const Header = () => {
    const [openDialog, setOpenDialog] = useState(false)
    return (
        <header className="bg-[#0a2540] ">
            <Fade top duration={1000} distance="20px">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center ">
                    <h1 className="text-2xl font-bold text-[#00d4ff] ">Adel Alradaie</h1>
                    <div className="hidden md:block"> <SocialLinks /></div>
                    <Menu color="#00d4ff" onClick={() => setOpenDialog(true)} className="md:hidden cursor-pointer" size={30} />
                    <Dialog  open={openDialog} onOpenChange={setOpenDialog} >
                        <DialogContent className="max-w-[90vw]" >
                            <DialogHeader>
                                <DialogTitle>Adel Alradaie</DialogTitle>
                                <Separator />
                            </DialogHeader>
                            <nav className="flex flex-col space-y-4 px-4 py-2 ">

                                <a className="flex items-center gap-1" href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                                    <span> <Github size={20} /></span>
                                    <span> Github</span>
                                </a>
                                <a className="flex items-center gap-1" href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                                    <span><Linkedin size={20} /></span>
                                    <span> linked in</span>
                                </a>
                            </nav>
                        </DialogContent>
                    </Dialog>
                </div>
            </Fade>
        </header>
    )
}
export default Header