import { certificatesInfo } from "@/constants/portfolio"
import { Button } from "./ui/button"
import { Fade } from "react-reveal"
import { useState } from "react"

import { FaGraduationCap } from 'react-icons/fa';

const Certificates = () => {
    const [isHavered, setIsHavered] = useState(false)
    return (
        <section className="bg-white py-16  ">
            <div className="container mx-auto px-4">
                <Fade bottom duration={2000} distance="20px">
                    <div className="flex items-center gap-2 mb-6">
                        <FaGraduationCap color="#00d4ff" size={30} />
                        <h1 className="text-[#00d4ff] text-[2.1875rem] font-semibold">Certificates</h1>
                    </div>
                </Fade>
               <Fade distance="40px" bottom duration={2000}>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3">
                    {certificatesInfo.map((certificate, index) => (
                        <div onMouseLeave={() => setIsHavered(false)} onMouseEnter={() => setIsHavered(true)} className="relative group h-[350px] max-w-[400px] w-full mx-auto border-2 shadow-xl  rounded-lg">

                            <img className="absolute w-full h-full opacity-100 group-hover:opacity-10 transition-opacity duration-300  " src={certificate.image} alt="" />

                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                                {
                                    isHavered && <Fade bottom distance="20px" duration={1000}>
                                        <div className="flex  flex-col gap-2">

                                            <h1 className="text-[#00d4ff] text-lg font-semibold">{certificate.title}</h1>
                                            <a  href={certificate.link} target="_blank" rel="noopener noreferrer"  className="bg-[#00d4ff] text-center rounded cursor-pointer font-semibold text-white hover:bg-[#00d4ff] " variant="outline">see certificate</a>

                                        </div>
                                    </Fade>
                                }
                            </div>
                        </div>
                    ))}

                </div>
               </Fade>
            </div>
        </section>
    )
}

export default Certificates