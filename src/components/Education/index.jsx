import { SchoolIcon, University } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader } from "../ui/card"

import { educationInfo } from "@/constants/portfolio"
import Reveal from "react-awesome-reveal"

const Education = () => {
    return (
        <section className="bg-sky-500 px-6  py-20 mt-20">
            <div className="max-w-[986px] mx-auto  flex flex-col gap-6 w-full ">
                <div className="flex items-center gap-2  ">
               <span className="bg-background p-4 rounded-full">
               <University size={30} className="text-sky-500 "/>
               </span>
                    <h2 className="text-white text-3xl font-bold">Education</h2>
                   
                </div>
                <Reveal triggerOnce duration={2000}>
                <Card className="bg-background lg:max-w-md  p-4 rounded shadow-sm cursor-pointer hover:shadow-xl transform transition-all duration-200 hover:-translate-y-4">
                    <CardContent className="flex flex-col gap-2 p-6  ">
                       

                       <h2 className="text-sky-400 text-lg ">{educationInfo.schoolName}</h2>
                       <p className="">{educationInfo.subHeader}</p>
                       <span className="bg-sky-400 font-bold  w-fit  text-xs text-white rounded p-1 text-center">{educationInfo.duration}</span>
                    </CardContent>
                </Card>
                </Reveal>
            </div>
        </section>
    )
}

export default Education