import React from 'react'
import Smallbtn from './ui/Smallbtn'
import WorkImage from '../assets/work1.png'
import WorkImage2 from "../assets/work2.png"
import WorkImage3 from "../assets/work3.png"

const CaseStudies = () => {
  return (
    <div className="w-full h-screen lg:mt-30 md:mt-40 lg:px-36 relative">
        <div className="flex flex-col items-center justif-center text-center gap-2 w-full lg:w-50% lg:mx-auto">
            <h1 className="text-bold hero-header" data-aos="fade-down" data-aos-delay="100">Case Studies</h1>
            <p className="hero-paragraph" data-aos="fade-down">Solving user & business problems since last 15+ years. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>


        {/*Bu faqatgina mobile ekranlarda ko'rinadi*/}
        <div className="flex lg:hidden flex-col px-5 pt-5 pb-6 gap-6">
            <div className="flex flex-col md:flex-row w-full gap-6">
                <div className="flex flex-col w-full md:w-[50%] gap-6">
                    <Smallbtn />
                    <h1 className="hero-header" data-aos="fade-right" data-aos-delay="100">UX, UI works</h1>
                    <p className="hero-paragraph" data-aos="fade-right" data-aos-delay="300">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                    <button data-aos="fade-right" data-aos-delay="500" className="text-center w-[200px] h-[40px] bg-amber-600 text-white rounded-xl border-sm transition-colors duration-500">View case study</button>
                </div>
                <div className="flex items-center justify-center w-full md:w-[50%]">
                    <img src={WorkImage} alt="Bu yerda rasm bo'lishi kerak edi!" data-aos="fade-left" data-aos-delay="700" />
                </div>
            </div>

            <div className="flex flex-col md:flex-row w-full gap-6">
                <div className="flex flex-col w-full md:w-[50%] gap-6">
                    <Smallbtn />
                    <h1 className="hero-header" data-aos="fade-right" data-aos-delay="100">Design</h1>
                    <p className="hero-paragraph" data-aos="fade-right" data-aos-delay="300">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                    <button className="text-center w-[200px] h-[40px] bg-amber-600 text-white rounded-xl hover:bg-amber-500 transition-colors duration-500" data-aos="fade-right" data-aos-delay="500">View case study</button>
                </div>
                <div className="flex items-center justify-center w-full md:w-[50%]">
                    <img src={WorkImage2} alt="Bu yerda rasm bo'lishi kerak edi!" data-aos="fade-left" data-aos-delay="700"/>
                </div>
            </div>

            <div className="flex flex-col md:flex-row w-full gap-6">
                <div className="flex flex-col w-full md:w-[50%] gap-6">
                    <Smallbtn />
                    <h1 className="hero-header" data-aos="fade-right" data-aos-delay="100">Dashboards</h1>
                    <p className="hero-paragraph" data-aos="fade-right" data-aos-delay="300">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                    <button className="text-center w-[200px] h-[40px] bg-amber-600 text-white rounded-xl hover:bg-amber-500 transition-colors duration-500" data-aos="fade-right" data-aos-delay="500">View case study</button>
                </div>
                <div className="flex items-center justify-center w-full md:w-[50%]">
                    <img src={WorkImage3} alt="Bu yerda rasm bo'lishi kerak edi!" data-aos="fade-left" data-aos-delay="700"/>
                </div>
            </div>
        </div>

{/*Bu esa faqatgina katta ekranlarda ko'rinadi*/}
        <div className="hidden lg:flex flex-col mx-auto pt-6 gap-6">
            <div className="flex flex-col md:flex-row w-full gap-6">
                <div className="flex flex-col w-full md:w-[50%] gap-6">
                    <Smallbtn />
                    <h1 className="hero-header" data-aos="fade-right" data-aos-delay="100">UI, UX works</h1>
                    <p className="hero-paragraph" data-aos="fade-right" data-aos-delay="300">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                    <button data-aos="fade-right" data-aos-delay="500" className="text-center w-[200px] h-[40px] bg-amber-600 text-white rounded-xl transition-colors duration-500 hover:bg-transparent border-[1px] hover:border-amber-600 hover:text-amber-600 cursor-pointer">View case study</button>
                </div>
                <div className="flex items-center justify-center w-full md:w-[50%]">
                    <img src={WorkImage} alt="Bu yerda rasm bo'lishi kerak edi!" data-aos="fade-left" data-aos-delay="700"/>
                </div>
            </div>

            <div className="flex flex-col md:flex-row w-full gap-6">
                <div className="flex w-full md:w-[50%]">
                    <img src={WorkImage2} alt="Bu yerda rasm bo'lishi kerak edi!" data-aos="fade-right" data-aos-delay="100"/>
                </div>
                <div className="flex flex-col w-full md:w-[50%] gap-6">
                   <div data-aos="fade-left" className="p-2 bg-amber-100 text-2xl h-[25px] flex items-center justify-center text-amber-600 w-[75px] text-center rounded-xl">Fletch</div>
                    <h1 className="hero-header" data-aos="fade-left" data-aos-delay="300">Design</h1>
                    <p className="hero-paragraph" data-aos="fade-left" data-aos-delay="500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                    <button data-aos="fade-left" data-aos-delay="700" className="text-center w-[200px] h-[40px] bg-amber-600 text-white rounded-xl transition-colors duration-500 hover:bg-transparent border-[1px] hover:border-amber-600 hover:text-amber-600 cursor-pointer">View case study</button>
                </div>
            </div>

            <div className="flex flex-col md:flex-row w-full gap-6">
                <div className="flex flex-col w-full md:w-[50%] gap-6">
                    <Smallbtn />
                    <h1 className="hero-header" data-aos="fade-right" data-aos-delay="100">Dashboards</h1>
                    <p className="hero-paragraph" data-aos="fade-right" data-aos-delay="300">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                    <button data-aos="fade-right" data-aos-delay="500" className="text-center w-[200px] h-[40px] bg-amber-600 text-white rounded-xl transition-colors duration-500 hover:bg-transparent border-[1px] hover:border-amber-600 hover:text-amber-600 cursor-pointer">View case study</button>
                </div>
                <div className="flex items-center justify-center w-full md:w-[50%]">
                    <img src={WorkImage3} alt="Bu yerda rasm bo'lishi kerak edi!" data-aos="fade-left" data-aos-delay="700" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default CaseStudies