import Lottie from "lottie-react"
import { Button } from "./ui/button"
import coding from "../assets/lottie/coding.json"
import { Fade } from "react-reveal"
import { greetings } from "@/constants/portfolio"


const Greetings = () => {
    return (

        <section className="bg-[#0a2540]  py-10   ">
            <Fade bottom duration={2000} distance="40px">
                <div className="container px-4 mx-auto flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/2 ">
                        <h1 className="text-[2.1875rem] text-white  font-semibold">{greetings.title}</h1>
                        <p className="text-[1.25rem] text-[#adbdcc]  mt-[1.5rem] font-light">
                            {greetings.description}
                        </p>
                        <a href={greetings.resumeLink} target="_blank" rel="noopener noreferrer">
                        <Button className="bg-[#00d4ff] text-[#0a2540] font-semibold mt-[3rem] transition-colors hover:bg-gray-100   rounded-md px-4 ">see my resume</Button>
                        </a>
                    </div>
                    <div className="lg:w-1/2 ">
                        <Lottie animationData={coding} className="w-[350px] h-[350px] mx-auto " />
                    </div>
                </div>
            </Fade>
        </section>

    )
}
export default Greetings