
import Header from './components/Header'
import Greetings from './components/Greetings'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Experience from './components/Experience'
import Footer from './components/Footer'


function App() {


  return (
    <div className='min-h-screen bg-gray-100'>
      <Header />
      <main>
        <Greetings />
        <Skills />
        <Education />
        <Experience />
        <Projects />
      </main>
      <Footer/>
    </div>
  )
}

export default App