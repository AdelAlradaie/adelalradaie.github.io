
import { motion } from 'framer-motion';
import { greetings } from '@/constants/portfolio';
import Lottie from 'lottie-react';
import coding from "../../assets/lottie/coding.json"
const Greetings=()=>{
    return (
      
        // <div className="  bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500">
         <main className=' px-6 lg:min-h-screen   py-10 bg-sky-500 '>
        <div className='grid grid-cols-1 lg:grid-cols-2 max-w-[986px] w-full   mx-auto '>
        <motion.div
            className="   text-white"
            initial={{ opacity: 0, y: 50 }} // Start off-screen with opacity 0
            animate={{ opacity: 1, y: 0 }}  // Animate to normal opacity and position
            transition={{ duration: 1.5, ease: "easeOut" }} // Duration of the animation
          >
            <motion.h1
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              {greetings.title}
            </motion.h1>
            <motion.p
              className="text-lg  my-8 text-white/70 leading-relaxed "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
             {greetings.description}
            </motion.p>
            <motion.a
              className="px-6 py-3 bg-white text-black/70 font-bold cursor-pointer text-sm rounded-lg"
              initial={{ opacity: 0 }}
              href={greetings.resumeLink}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              SEE MY RESUME
            </motion.a>
          </motion.div>
          <Lottie animationData={coding} />
        </div>
      
        </main>
      );
}

export default Greetings