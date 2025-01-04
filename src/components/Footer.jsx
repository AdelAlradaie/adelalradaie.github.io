import SocialLinks from "@/common/socialLinks"
import { FooterDetails } from "@/constants/portfolio"



const Footer = () => {
    return (
        <footer className="bg-[#0a2540]  py-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col ">
                    <h1 className="text-3xl text-white font-semibold mb-4">{FooterDetails.title}</h1>
                    <p className="text-[#adbdcc]">{FooterDetails.desc}</p>
                    <p className="text-white my-6">Contact : <span className="text-[#00d4ff]">{FooterDetails.email}</span></p>

                    <SocialLinks/>
                </div>
            </div>
        </footer>
    )
}
export default Footer