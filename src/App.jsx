import Header from "../src/components/Header"
import CaseStudies from "./components/CaseStudies"
import Hero from "./components/Hero"
import Section from "./components/Section"
import './styles/component.css'
import Recent from "./components/Recent"
import Footer from "./components/Footer"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
 useEffect(() => {
    AOS.init({
      duration: 1000, // animatsiya davomiyligi (ms)
    });
  }, []);

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
