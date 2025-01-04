import { skillsSection } from "@/constants/portfolio"
import Lottie from "lottie-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"
import { Fade } from "react-reveal"



const Skills = () => {
    return (
        <section className="bg-[#f6f9fc] py-20">
            <div className="container  mx-auto px-4 overflow-hidden ">
                <Fade bottom duration={2000} distance="20px">
                    <div className="text-center mb-4">
                        <h1 className="text-[2.5rem] mb-4 text-[#32325d]">{skillsSection.title}</h1>
                        <p className="text-[1.25rem] text-[#525f7f]">
                            {skillsSection.subTitle}
                        </p>

                    </div>
                </Fade>
                {skillsSection.data.map((section,index) => (
                    <div key={index} className="grid grid-cols-1 lg:grid-cols-2 py-8  ">
                        <Fade left duration={2000}>
                            <div className="  order-2 lg:order-1  ">
                                <Lottie className=" h-[450px]" animationData={section.lottieAnimationFile} />
                            </div>
                        </Fade>
                        <div className="order-1 lg:order-2 py-[0.5rem]   text-center">
                            <Fade right duration={1000}>
                            <h1 className="text-center mb-2 text-[1.75rem] ">{section.title}</h1>
                            </Fade>
                           <Fade right duration={1500}>
                           <div className="flex items-center justify-center gap-2 flex-wrap my-6">
                                {section.softwareSkills.map((skill) => (
                                    <TooltipProvider>
                                        <Tooltip >
                                            <TooltipTrigger className="bg-white rounded-full cursor-pointer p-[12px] shadow-lg">
                                                {skill.Icon}
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                {skill.title}
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                ))}
                            </div>
                           </Fade>
                           <Fade right duration={2000}>
                           <div className=" flex items-center justify-center flex-col gap-4">
                                {section.skills.map((item) => (
                                    <p className="flex items-start text-[#525f7f] text-[1rem]">{item}</p>
                                ))}
                            </div>
                           </Fade>
                        </div>
                    </div>
                ))}
                <div>
                </div>
                <div>
                </div>
            </div>
        </section>
    )
}
export default Skills