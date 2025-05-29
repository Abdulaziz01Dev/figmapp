import React from 'react'
import Smallbtn from './Smallbtn'

const CaseStudies = () => {
  return (
    <div className="mt-80 w-full h-screen lg:mt-20 md:mt-40 lg:px-46">
        <div className="flex flex-col items-center justif-center text-center gap-2">
            <h1 className="text-bold hero-header">Case Studies</h1>
            <p className="hero-paragraph">Solving user & business problems since last 15+ years. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
        <div className="flex flex-col mx-auto">
            <div>
                <Smallbtn />
                <h1 className="hero-header">Design</h1>
                <p className="hero-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
            </div>
        </div>
    </div>
  )
}

export default CaseStudies