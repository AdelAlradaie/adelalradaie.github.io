import { useState, useEffect, useTransition } from "react";
import { Laptop } from "lucide-react"
import { ChevronLeft, ChevronRight, EyeIcon, Github } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../components/ui/tooltip"
import { projects } from "@/constants/portfolio";
import { CardContent, Card } from "../components/ui/card";
import { Fade } from "react-reveal";
const Projects = () => {
    const [isPending, startTransition] = useTransition()
    const [index, setIndex] = useState(0)
    const goNext = () => {
        startTransition(() => {
            setIndex((prev) => (prev + 1) % projects.length)
        })

    }
    const goPrev = () => {
        startTransition(() => {
            setIndex((prev) => (prev - 1 + projects.length) % projects.length)
        })
    }

    useEffect(() => {
        let timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % projects.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    return (
        <section className="bg-[#0a2540] py-8 my-4  ">
            <div className="container mx-auto px-4">
                <Fade bottom duration={2000} distance="20px">
                    <div className="flex items-center gap-2 mb-6 ">
                        <Laptop color="#00d4ff" size={30} />
                        <h1 className="text-[2.5rem]  text-[#00d4ff]">Projects</h1>
                    </div>
                </Fade>

                <Fade bottom duration={2000} distance="20px">
             <div className=" grid grid-cols-1   md:grid-cols-2  lg:grid-cols-4 gap-4">
                    {projects.map((project, index) => (
                         
                        <div className="h-[350px] max-w-[450px] w-full   mx-auto group perspective cursor-pointer   ">
                            <div className="relative h-full w-full group-hover:rotate-y-180  shadow-xl rounded duration-1000 preserve-3d ">
                                <div className="absolute backface-hidden  h-full w-full">
                                    <img className="h-full w-full object-center object-containe" src={project.images[0].link} alt="" />
                                </div>
                                <div className=" absolute h-full w-full rotate-y-180 backface-hidden p-4 border-2 border-[#00d4ff] bg-[#0a2540]">
                                    <div className="grid gap-1 ">

                                        <p className="text-3xl text-[#fff]">{project.name}</p>
                                        <div className="flex items-center gap-2">

                                            {project.github && <a target="_blank" className="hover:bg-[#ffffff]  hover:shadow-lg hover:scale-110 transition-transform duration-300 p-1" rel="noopener noreferrer" href={`${project.github}`}>
                                                <Github size={25} color="#00d4ff" /></a>}
                                            {project.link && <a className="hover:bg-[#ffffff]  hover:shadow-lg hover:scale-110 transition-transform duration-300 p-1" target="_blank" rel="noopener noreferrer" href={`${project.link}`}>
                                                <EyeIcon size={25} color="#00d4ff" className="font-bold" /></a>}
                                        </div>

                                        <p className="text-[#adbdcc] font-semibold">{project.desc}</p>

                                        <div className="mt-4 flex flex-col gap-2">
                                            <h2 className="text-2xl text-[#fff] ">Technologies</h2>
                                            <div className="flex  items-center flex-wrap   gap-2">
                                                {project.technologies.map((tech) => (
                                                    <TooltipProvider>
                                                        <Tooltip>
                                                            <TooltipTrigger>
                                                                <div className="">
                                                                    {tech.Icon}
                                                                </div>
                                                            </TooltipTrigger>
                                                            <TooltipContent className="bg-black text-white font-bold">
                                                                {tech.title}
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>

                                                ))}

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>      
                    ))}
                </div>
      
                </Fade>

             


            </div>


        </section>
    )
}
export default Projects