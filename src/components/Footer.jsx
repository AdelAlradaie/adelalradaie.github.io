import SocialLinks from "@/common/socialLinks"
import { FooterDetails, socialLinks } from "@/constants/portfolio"
import { Avatar, AvatarImage } from "./ui/avatar"
import profileImg from "../assets/images/profile.jpg"


const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <footer className="bg-[#0a2540] flex flex-col   py-20">
            <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row justify-between items-center">
                <div className="flex flex-col mt-6 lg:mt-0 ">
                    <h1 className="text-3xl text-white font-semibold mb-6">{FooterDetails.title}</h1>
                    <p className="text-[#adbdcc]">{FooterDetails.desc}</p>
                    <p className="text-white my-8">Contact : <span className="text-[#00d4ff]">{FooterDetails.email}</span></p>

                    <SocialLinks/>
                 
                </div>
                <div>
                    <Avatar className="max-w-[250px] max-h-[250px] h-full w-full  ">
                        <AvatarImage  className="object-cover object-center"  src={profileImg}/>
                    </Avatar>
                </div>
                
            </div>
            <div className="m-auto">
                    <p className="text-white">&copy; {currentYear}  <a  target="_blank" rel="noopener noreferrer" className="text-[#00d4ff]" href={socialLinks.github}>Adel Alradaie .</a>  All rights reserved.  </p>
                </div>
        </footer>
    )
}
export default Footer