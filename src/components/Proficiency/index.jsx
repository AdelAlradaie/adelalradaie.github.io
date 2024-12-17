import Lottie from "lottie-react"
import { Progress } from "../ui/progress"
import coding from "../../assets/lottie/build.json"
import { SkillBars } from "@/constants/portfolio"
import Reveal from "react-awesome-reveal"


const Proficiency = () => {
    return (
        <section className="bg-background py-2  px-6  ">
            <div className="max-w-[986px] grid items-start grid-cols-1 lg:grid-cols-2 gap-4 mx-auto w-full">
                <Reveal triggerOnce duration={2000}>
                    <div className="flex flex-col space-y-4">
                        <h2 className="text-3xl">Proficiency</h2>
                        {SkillBars.map((skill) => (
                            <div className="flex flex-col gap-1">
                                <h2>{skill.Stack}</h2>
                                <span className="ms-auto text-gray-500">{skill.progressPercentage}%</span>
                                <Progress value={skill.progressPercentage}
                                    className="bg-gray-500 h-2"
                                />
                            </div>
                        ))}
                    </div>
                </Reveal>

                <Reveal triggerOnce duration={2000}>
                    <Lottie animationData={coding}></Lottie>
                </Reveal>
            </div>
        </section>
    )
}

export default Proficiency