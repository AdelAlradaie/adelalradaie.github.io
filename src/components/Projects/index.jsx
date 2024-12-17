import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { CardContent, Card } from "../ui/card";
import { projects } from "@/constants/portfolio";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, EyeIcon, Github } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
const Projects = () => {
  const [index, setIndex] = useState(0)
  const goNext = () => {
    setIndex((prev) => (prev + 1) % projects.length)

  }
  const goPrev = () => {

    setIndex((prev) => (prev - 1 + projects.length) % projects.length)

  }

  useEffect(() => {
    let timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % projects.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])
  return (
    <section className="py-16 bg-background px-6">
      <Card className="py-4 border-2  max-w-[986px]  mx-auto w-full">
        <CardContent className=" p-6  grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <div className="relative h-[250px]  w-full  overflow-hidden">
            <img src={projects[index].images[0].link} alt="" className=" absolute h-full w-full rounded-t-lg  object-cover" />
            <ChevronRight color="white" onClick={() => goNext()} size={35} className="absolute cursor-pointer  top-1/2 right-4 " />
            <ChevronLeft onClick={() => goPrev()} size={35} className="absolute  top-1/2 left-4  cursor-pointer" color="white" />
          </div>
          <div className="w-full">
            <div className="grid gap-1 ">

              <p className="text-3xl">{projects[index].name}</p>
              <div className="flex items-center gap-2">

                {projects[index].github && <a target="_blank" className="hover:bg-[#ffffff]  hover:shadow-lg hover:scale-110 transition-transform duration-300 p-1" rel="noopener noreferrer" href={`${projects[index].github}`}>
                  <Github size={25} color="black"  /></a>}
                {projects[index].link && <a className="hover:bg-[#ffffff]  hover:shadow-lg hover:scale-110 transition-transform duration-300 p-1" target="_blank" rel="noopener noreferrer" href={`${projects[index].link}`}>
                  <EyeIcon size={25} color="black" className="font-bold" /></a>}
              </div>

              <p>{projects[index].desc}</p>

              <div className="mt-4 flex flex-col gap-2">
                <h2 className="text-2xl ">Technologies</h2>
                <div className="flex  items-center flex-wrap   gap-2">
                  {projects[index].technologies.map((tech) => (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <div className="bg-background border-2 p-2">
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
        </CardContent>
      </Card>






    </section>

  )
}

export default Projects