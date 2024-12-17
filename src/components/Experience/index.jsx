import { Briefcase } from "lucide-react"
import { Card, CardDescription } from "../ui/card"
import { experience } from "@/constants/portfolio"
import { Avatar, AvatarImage } from "../ui/avatar"
import Reveal from "react-awesome-reveal"
import img from "../../assets/images/image_default.png"

const Experience = () => {
    return (
        <section className="bg-background px-6 py-20">
            <div className="mx-auto max-w-[986px] w-full flex flex-col gap-6 ">
                <div className="flex items-center gap-2">

                    <span className="bg-background border-2 rounded-full p-4">
                        <Briefcase size={30} className="text-sky-400" />
                    </span>
                    <h2 className="text-3xl text-sky-400">Experience</h2>
                </div>
                <Reveal triggerOnce duration={2000}>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2"> 
                    {experience.map((item)=>(
                     <Card className="flex flex-col space-y-4 lg:max-w-md  cursor-pointer hover:shadow-xl py-4 border-2 shadow-lg justify-center items-center">
                     <Avatar className="bg-background  border-2 w-20 shadow-lg h-20 border-2">
                         <AvatarImage className="object-cover object-center  " src={item.companylogo ? item.companylogo : img} />
                     </Avatar>
                     <div className="text-center">
                         <p className="text-2xl">{item.company}</p>
                         <p className="text-sky-400 text-2xl">{item.role}</p>
                         <span>{item.date}</span>
                     </div>
                     <p className="mt-auto mr-auto  p-4 text-muted-foreground">{item.desc}</p>
                 </Card>
                   ))}
                    </div>
                  
                </Reveal>
            </div>
        </section>
    )
}

export default Experience