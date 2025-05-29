import React from 'react'
import '../styles/component.css'

const Header = () => {
  return (
   <div className="header fixed top-0 left-1/2 transform -translate-x-1/2 bg-[#1b1b1b] w-[85%] h-[50px] flex items-center justify-between md:justify-center px-6 text-[#9C9C9C] z-50 md:h-[65px]">
        <ul className="flex gap-2 text-[8px] md:text-1xl lg:text-[1rem] md:gap-6 lg:gap-20 md:pr-16 xl:text-1xl">
            <li className="navbar-links">Home</li>
            <li className="navbar-links">Case Studies</li>
            <li className="navbar-links">Testimonials</li>
            <li className="navbar-links">Recent Work</li>
            <li className="navbar-links">Get In Toush</li>
        </ul>
        <ul className="flex text-[#9c9c9c] ml-4 gap-2 md:text-3xl md:gap-10">
            <li className="navbar-links"><i class='bx bxl-linkedin'></i></li>
            <li className="navbar-links"><i class='bx bxl-behance' ></i></li>
            <li className="navbar-links"><i class='bx bxl-twitter' ></i></li>
        </ul>
    </div>
  )
}

export default Header