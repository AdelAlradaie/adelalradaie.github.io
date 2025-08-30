import { personalData } from '../../../../utils/data/personal-data';
import { BiLogoLinkedin } from "react-icons/bi";
import { IoLogoGithub } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";


function ContactSection() {
  return (
    <div id="contact" className="my-12 lg:my-16 relative mt-24 text-white pb-6">

      <div className="flex flex-col gap-5 lg:gap-">
        <h2 className='text-xl md:text-3xl'>Reach Out to me!</h2>
        <p className='text-[#d3d8e8] text-lg md:text-xl'>Discuss a project or just want to say hi? My Inbox is open for all.</p>
        <p className="text-sm md:text-xl flex items-center gap-3">
          <MdAlternateEmail
            className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#1da1f2] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
            size={36}
          />
          <span>{personalData.email}</span>
        </p>

      </div>
      <div className="mt-8 lg:mt-16 flex items-center gap-5 lg:gap-10">
        <a target='_blank' rel="noopener noreferrer" href={personalData.github}>
          <IoLogoGithub
            className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#1da1f2] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
            size={48}
          />
        </a>
        <a target='_blank' rel="noopener noreferrer" href={personalData.linkedIn}>
          <BiLogoLinkedin
            className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#1da1f2] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
            size={48}
          />
        </a>


      </div>


    </div>
  );
};

export default ContactSection;