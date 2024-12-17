import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { skillsSection } from '@/constants/portfolio';
import Lottie from 'lottie-react';
import Reveal from 'react-awesome-reveal';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
const Skills = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <section ref={ref} className=" bg-background px-6 py-20">
            <motion.div
                className="text-center p-8 "
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 1 : 0 }}
                transition={{ duration: 1 }}
            >
                <h2 className="text-4xl font-bold mb-4">{skillsSection.title}</h2>
                <p className="text-xl text-muted-foreground">
                    {skillsSection.subTitle}
                </p>
            </motion.div>
            {skillsSection.data.map((section) => (
                <div className='grid grid-cols-1  gap-4 py-4 mx-auto max-w-[986px] lg:grid-cols-2'>

                    <div className='order-2 lg:order-1'>

                        <Reveal triggerOnce duration={2000}>
                            <Lottie animationData={section.lottieAnimationFile} />
                        </Reveal>

                    </div>

                    <div className=' order-1 lg:order-2   '>
                        <Reveal triggerOnce duration={2000}>
                            <div className='flex space-y-4 flex-col justify-center items-center  text-center py-4 gap-4'>
                                <h2 className='text-3xl'>{section.title}</h2>
                                <div className='flex items-center justify-center   gap-2 flex-wrap'>
                                    {section.softwareSkills.map((skill) => (
                                        <TooltipProvider>
                                            <Tooltip  >
                                                <TooltipTrigger asChild>
                                                    <div className='bg-background border-2  w-[60px] shadow-lg h-[60px] rounded-full flex items-center justify-center '>
                                                        {skill.Icon}
                                                    </div>
                                                </TooltipTrigger>
                                                <TooltipContent className="bg-black text-white font-bold ">
                                                    {skill.title}
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>

                                    ))}
                                </div>
                                <div className='flex flex-col items-center justify-center gap-4'>
                                    {section.skills.map((item) => (
                                        <p className='flex items-start text-muted-foreground  gap-2'>{item}</p>
                                    ))}
                                </div>
                            </div>

                        </Reveal>

                    </div>

                </div>

            ))}

        </section>

    );
}


export default Skills