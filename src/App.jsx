import ScrollToTop from "./components/helper/scroll-to-top";
import AboutSection from "./components/homepage/about/About";
import ContactSection from "./components/homepage/contact/Contact";
import Education from "./components/homepage/education/Education";
import Experience from "./components/homepage/experience/Experience";
import HeroSection from "./components/homepage/hero-section/Hero";
import Projects from "./components/homepage/projects/Projects";
import Skills from "./components/homepage/skills/Skills";
import Navbar from "./components/homepage/navbar/navbar";
import "./index.css"

export default function App() {

  return (
    <>
      <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <Experience />
        <Skills />
        <Projects  />
        <Education />
        <ContactSection />
        <ScrollToTop />
      </main>
      
    </>
  )
};