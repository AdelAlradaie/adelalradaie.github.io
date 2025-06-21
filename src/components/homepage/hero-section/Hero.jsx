import { personalData } from "../../../../utils/data/personal-data";
import landingPerson from "../../../assets/lottie/landing.json";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdDownload } from "react-icons/md";
import AnimationLottie from "../../helper/animation-lottie";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <img
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="order-1 flex flex-col items-start justify-center p-2 pb-10 md:pb-10 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hi,  <br />
            I'm <span className="text-[#7c6ff9]">{personalData.name}</span>, a passionate {" "}
            <span className="text-[#1da1f2]">{personalData.designation}</span>.
          </h1>

          <div className="my-12 flex items-center gap-5">
            <a rel="noopener noreferrer" href={personalData.github} target="_blank" className="transition-all text-[#7c6ff9] hover:scale-125 duration-300">
              <BsGithub size={30} />
            </a>
            <a href={personalData.linkedIn} target="_blank" rel="noopener noreferrer" className="transition-all text-[#7c6ff9] hover:scale-125 duration-300">
              <BsLinkedin size={30} />
            </a>
          </div>

          <div >

            <a
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-[#1da1f2] to-[#7c6ff9] px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
              target="_blank"
              download
              href="/resume.pdf"
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </a>
          </div>
        </div>

        <div className="order-2 from-[#0d1224] relative">
          <AnimationLottie animationPath={landingPerson} />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;