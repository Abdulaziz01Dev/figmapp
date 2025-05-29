import React from 'react'
import WorkImage from "../assets/work4.png"
import WorkImage2 from "../assets/work5.png"

const Recent = () => {
  return (
    <div className="w-full flex flex-col">
        <div className="flex flex-col w-full lg:w-[50vw] mx-auto items-center justify-center text-center lg:px-36 px-10 py-10">
            <h1 className="custom-name-text text-black text-3xl">Recent Work</h1>
            <p className="hero-paragraph">Solving user & business problems since last 15+ years.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
        <div className="flex flex-col md:flex-row w-full mt-20 gap-10">

            <div className="flex flex-col gap-6 items-center text-center w-full lg:w-[50%]">
                <div>
                    <img src={WorkImage} alt="Bu yerda rasm bo'lishi kerak edi!" className="image-hover"/>
                </div>
                <div className="flex flex-col gap-4 items-center">
                    <h1 className="custom-name-text text-black text-3xl">Web Design</h1>
                    <p className="hero-paragraph">Solving user & business problems since last 15+ years.Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                    <button className="w-[200px] h-[35px] text-center bg-green-600 text-white rounded-sm hover:bg-green-700 duration-500 cursor-pointer">Know more</button>
                </div>
            </div>

            <div className="flex flex-col gap-6 items-center text-center w-full lg:w-[50%]">
                <div>
                    <img src={WorkImage2} alt="Bu yerda rasm bo'lishi kerak edi!" className="image-hover"/>
                </div>
                <div className="flex flex-col gap-4 items-center">
                    <h1 className="custom-name-text text-black text-3xl">Coding</h1>
                    <p className="hero-paragraph">Solving user & business problems since last 15+ years.Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                    <button className="w-[200px] h-[35px] text-center bg-green-600 text-white rounded-sm hover:bg-green-700 duration-500 cursor-pointer">Know more</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Recent