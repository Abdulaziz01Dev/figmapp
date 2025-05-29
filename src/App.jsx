import Header from "../src/components/Header"
import CaseStudies from "./components/CaseStudies"
import Hero from "./components/Hero"
import Section from "./components/Section"
import './styles/component.css'
import Recent from "./components/Recent"
import Footer from "./components/Footer"

function App() {

  return (
    <div className="overflow-hidden">
      <Header />
      <Hero />
      <CaseStudies />
      <Section />
      <Recent />
      <Footer />
    </div>
  )
}

export default App
