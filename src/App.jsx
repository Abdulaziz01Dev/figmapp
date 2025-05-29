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
import { Helmet } from "react-helmet";

function App() {
 useEffect(() => {
    AOS.init({
      duration: 1000, // animatsiya davomiyligi (ms)
    });
  }, []);

  return (
    <div className="overflow-hidden">
      <Helmet>
        <meta name="google-site-verification" content="khioRi2Vik9Puo7C63R8X4BDjR8eTzezPNXLZhEcJm4" />
        <title>Abdulaziz's Portfolio | React + Tailwind Developer</title>
        <meta name="description" content="Abdulaziz - Web Developer. My portfolio built with React, TailwindCSS and hosted on Vercel. Check out my recent works and case studies!" />
        <meta name="keywords" content="Abdulaziz, React developer, Frontend developer, TailwindCSS, Vercel, Portfolio, Web developer Uzbekistan, Abu dev, Abu developer" />
        <meta name="author" content="Abdulaziz" />
      </Helmet>

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
