import { FooterDetails } from "@/constants/portfolio"
import SocialLinks from "../custom/SocialLinks"




const Footer = () => {
    return (
        <section className="bg-sky-500 min-h-[200px] px-6 py-10  ">
            <div className="max-w-[986px] mx-auto py-16 text-muted grid gap-5">
            <h2 className="text-4xl">{FooterDetails.title}</h2>
            <p className="text-lg">{FooterDetails.desc}</p>
            <p className="mt-4">Contact : {FooterDetails.email}</p>

           <SocialLinks/>
            </div>
        </section>
    )
}
export default Footer