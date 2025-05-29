import React from 'react'
import Button from './ui/Button'
import MainImg from "../assets/people.png"
import Worked from "./ui/Worked"

const Hero = () => {
  return (
    <div className="bg-[#080808] w-full h-[screen] md:h-[70vh] pt-[50px] xl:py-25 px-16 flex flex-col text-white md:pt-25 lg:px-26 mt-6 xl:px-56">
      <div className="w-full flex flex-col gap-10 items-center justify-center md:flex-row">
        <div className="flex flex-col md:gap-4 lg:gap-8 w-full md:w-[50%] gap-6">
          <h1 className="hero-header" data-aos="fade-up" data-aos-delay="200">Abdulaziz Developer</h1>
          <p className="hero-paragraph" data-aos="fade-up" data-aos-delay="300">Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          <Button />
        </div>
        <div className="flex items-center justify-center w-full md:w-[50%]">
          <div>
            <img src={MainImg} alt="Bu yerda zo'r narsa bor!" className="2xl:w-[400px] w-[350px] rounded-full" data-aos="fade-up" data-aos-delay="500"/>
          </div>
        </div>
      </div>
      <div className="xl:mx-auto mb-10 mt-10">
        <p className="hero-paragraph" data-aos="fade-right" data-aos-delay="500">Worked With</p>
        <Worked />
      </div>
    </div>
  )
}

export default Hero