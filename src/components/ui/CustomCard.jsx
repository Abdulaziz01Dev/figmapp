import React from 'react'

const CustomCard = () => {
  return (
    <div className="border-1 border-gray-300 rounded-xl p-6 mt-10 w-[350px] h-[200px] cursor-pointer shadow-md hover:shadow-gray-200 transition-all duration-300">
        <p className="hero-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        <div className="flex items-center gap-6 py-6">
            <div className='w-[40px] lg:w-[50px] h-[40px] lg:h-[50px] rounded-full bg-gray-500 flex items-center justify-center'>M</div>
            <h1 className="custom-name-text lg:text-3xl">Muslima</h1>
        </div>
    </div>
  )
}

export default CustomCard