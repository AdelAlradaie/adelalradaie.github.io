

import { FaBriefcase } from 'react-icons/fa'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { experienceData } from '@/constants/portfolio'
import { Avatar, AvatarImage } from './ui/avatar'
import defaultImage from "../assets/images/image_default.png"
import { Fade } from 'react-reveal'
const Experience = () => {
    return (
        <section className='bg-white py-20'>
            <div className='container mx-auto px-4'>
                <Fade bottom duration={2000} distance="20px">
                    <div className='flex items-center gap-2'>
                        <FaBriefcase color='#00d4ff' size={30} />
                        <h1 className='text-[#00d4ff]  text-[2.1875rem] font-semibold'>Experience</h1>
                    </div>
                </Fade>
                <Fade left duration={2000}>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6'>
                        {experienceData.map((section,index) => (
                            <Card key={index} className="max-w-[450px] mx-auto py-8  w-full border-2 rounded-md shadow-lg hover:shadow-xl cursor-pointer  ">
                                <CardContent className="flex flex-col justify-center items-center gap-2">
                                    <Avatar className="">
                                        <AvatarImage src={section.companylogo ? section.companylogo : defaultImage} />
                                    </Avatar>
                                    <h1 className='text-xl font-semibold text-[#0a2540]'>{section.company}</h1>
                                    <p className='text-[#00d4ff] text-xl '>{section.role}</p>
                                    <p className='max-w-[400px]  text-[#525f7f]'>{section.date}</p>
                                </CardContent>
                                <CardFooter >
                                    <span className='text-[#525f7f]'>
                                        {section.desc}
                                    </span>
                                </CardFooter>
                            </Card>
                        ))}

                    </div>
                </Fade>
            </div>
        </section>
    )
}
export default Experience