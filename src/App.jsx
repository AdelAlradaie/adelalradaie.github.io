
import Education from "./components/Education/index.jsx"
import Experience from "./components/Experience/index.jsx"
import Footer from "./components/Footer/index.jsx"
import Greetings from "./components/Greetings/index.jsx"
import Navbar from "./components/Navbar/Navbar.jsx"
import Proficiency from "./components/Proficiency/index.jsx"
import Projects from "./components/Projects/index.jsx"
import Skills from "./components/Skills/index.jsx"




function App() {


  return (
    <>
     
      <Navbar/>
      <Greetings/>
      <Skills/>
      <Proficiency/>
      <Education/>
      <Experience/>
      <Projects/>
      <Footer/>
      
    </>
  )
}

{/* <p className="animate-fadeInUp text-center p-7">
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
 iusto sed dolorem sint consequatur dicta cumque 
 
 aspernatur quaerat maxime neque eveniet facere beatae,
  totam officiis quos amet suscipit earum et.
</p> */}
export default App
