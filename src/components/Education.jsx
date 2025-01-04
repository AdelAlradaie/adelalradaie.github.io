


import { Fade } from "react-reveal";
import h from "../assets/images/education.svg"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { FaGraduationCap } from 'react-icons/fa';
import { educationInfo } from "@/constants/portfolio";

const Education = () => {

  return (
    <section className="bg-[#0a2540]  py-20">
      <div className="container mx-auto px-4  ">

        <div className=" max-w-[450px] w-full ">
          <Fade bottom duration={2000} distance="20px">
            <div className="flex items-center gap-2">
              <FaGraduationCap color="#00d4ff" size={30} />
              <h1 className="text-[#00d4ff] text-[2.1875rem] font-semibold">Educatioon</h1>

            </div>
          </Fade>

          <Fade left duration={2000}>
            <Card className=" mt-[1.5rem] px-[15px] transform duration-300 cursor-pointer hover:-translate-y-4">

              <CardContent className=" p-[1.5rem]  ">
                <div className="px-[3px] w-full flex flex-col space-y-1 items-start">
                  <h1 className="text-[#00d4ff] text-xl">{educationInfo.schoolName}</h1>
                  <p className="text-[#0a2540] ">{educationInfo.subHeader}</p>
                  <span className="bg-[#00d4ff] px-3  text-center rounded-md text-sm text-white">{educationInfo.duration}</span>
                </div>
              </CardContent>
            </Card>
          </Fade>
        </div>
      </div>
    </section>
  )
}
export default Education