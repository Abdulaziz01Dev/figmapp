import React from 'react'
import '../styles/component.css'

const Header = () => {
  return (
   <div className="header fixed top-0 left-1/2 transform -translate-x-1/2 bg-[#1b1b1b] lg:w-[85%] w-full h-[50px] flex items-center justify-between md:justify-center px-6 text-[#9C9C9C] z-50 md:h-[65px] shadow-sm xl:shadow-lime-300">
        <ul className="flex gap-2 text-[6px] sm:text-[10px] lg:text-[0.8rem] md:gap-6 lg:gap-20 md:pr-16 xl:text-xl">
            <li className="navbar-links" data-aos="fade-right" data-aos-delay="100">Home</li>
            <li className="navbar-links" data-aos="fade-right" data-aos-delay="200">Case Studies</li>
            <li className="navbar-links" data-aos="fade-right" data-aos-delay="300">Testimonials</li>
            <li className="navbar-links" data-aos="fade-right" data-aos-delay="400">Recent Work</li>
            <li className="navbar-links" data-aos="fade-right" data-aos-delay="500">Get In Toush</li>
        </ul>
        <ul className="flex text-[#9c9c9c] ml-4 gap-2 md:text-3xl md:gap-10">
            <li className="navbar-links" data-aos="fade-right" data-aos-delay="600"><i class='bx bxl-linkedin'></i></li>
            <li className="navbar-links" data-aos="fade-right" data-aos-delay="700"><i class='bx bxl-behance' ></i></li>
            <li className="navbar-links" data-aos="fade-right" data-aos-delay="800"><i class='bx bxl-twitter' ></i></li>
        </ul>
    </div>
  )
}

export default Header