import React from 'react'
import Customers from './ui/Customers'

const Section = () => {
  return (
    <div className="xl:mt-[20vh] md:mt-[30vh] lg:mt-30 md:mt-40 mt-[175vh] py-10 w-full bg-[#090909]">
        <div className="flex flex-col mx-auto items-center text-center py-10">
            <h1 className="hero-header text-white z-10" data-aos="fade-down" data-aos-delay="300">Testimonials</h1>
            <p className="hero-paragraph" data-aos="fade-down" data-aos-delay="100">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
        <div className="flex items-center justify-center mx-auto "> 
            <Customers />
        </div>
    </div>
  )
}

export default Section