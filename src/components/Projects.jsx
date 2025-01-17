import { useState, useRef } from "react";
import { Laptop } from "lucide-react"
import { ChevronLeft, ChevronRight, EyeIcon, Github } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../components/ui/tooltip"
import { projects } from "@/constants/portfolio";
import { CardContent, Card } from "../components/ui/card";
import { Fade } from "react-reveal";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper"
import "swiper/css/bundle"
const Projects = () => {
    SwiperCore.use([Navigation, EffectCoverflow, Pagination])
  
    const swiperRef = useRef(null);

    const handleSlideClick = (swiper, index) => {
  
      swiper.slideTo(index);
    };
 
 


    return (
        <section className="bg-white py-32  ">
            <div className=" container  mx-auto px-4">
                <Fade bottom duration={2000} distance="20px">
                    <div className="flex  items-center gap-2 py-4 ">
                        <Laptop color="#00d4ff" size={30} />
                        <h1 className="text-[2.5rem]  text-[#00d4ff]">Projects</h1>
                    </div>
                </Fade>

                {/* <Fade bottom duration={2000} distance="20px"> */}
                <Swiper 
                breakpoints= {{

                
                    // when window width is >= 320px
                    320: {
                      slidesPerView: 1,
               
                    },
                    // when window width is >= 480px
                    480: {
                        slidesPerView: 1,
                 
                      },
                 
                    // when window width is >= 640px
                    640: {
                      slidesPerView: 2,
                      
                    }
                    ,768:{
                        slidesPerView: 2,
                    },
                    1024:{
                        slidesPerView: 3,
                    }

                    
                  }
}
                
                
                autoplay  onSwiper={(swiper) => (swiperRef.current = swiper)}  spaceBetween={10} centeredSlides={true} coverflowEffect={{
                    rotate: 0, depth: 100, modifier: 2.5, stretch: 0, slideShadows: 0
                }} effect="coverflow" grabCursor={true} loop={true} slidesPerView={1} modules={[Navigation, Pagination, EffectCoverflow]} pagination={{ clickable: true }} navigation={true}>

                    {/* <div className=" grid grid-cols-1   md:grid-cols-2  lg:grid-cols-3 gap-4"> */}
                    {projects.map((project, index) => (
                        <SwiperSlide key={index}  onClick={() => handleSlideClick(swiperRef.current, index)} className="p-10">
                            <div className="h-[300px]  max-w-[600px]  w-full  group perspective cursor-pointer   ">
                                <div className="relative  h-full w-full group-hover:rotate-y-180  shadow-xl rounded duration-1000 preserve-3d ">
                                    <div className="absolute backface-hidden  h-full w-full">
                                        <img className="h-full rounded-lg   w-full  object-center " src={project.images[0].link} alt="" />
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
                        </SwiperSlide>
                    ))}
                    {/* </div> */}

                </Swiper>


                {/* </Fade> */}




            </div>


        </section>
    )
}
export default Projects