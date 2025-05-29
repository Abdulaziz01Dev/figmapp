import React from 'react'
import Customers from './ui/Customers'

const Section = () => {
  return (
    <div className="relative xl:mt-[10vh] md:mt-[15vh]  mt-[100vh] py-10 w-full bg-[#090909]">
        <div className="flex flex-col mx-auto items-center text-center py-10">
            <h1 className="hero-header text-white">Testimonials</h1>
            <p className="hero-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
        <div className="flex items-center justify-center mx-auto "> 
            <Customers />
        </div>
    </div>
  )
}

export default Section