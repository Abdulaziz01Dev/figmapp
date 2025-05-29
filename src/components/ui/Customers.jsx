import React from 'react'
import CustomCard from './CustomCard'

const Customers = () => {
  return (
    <div className="text-white">
        <div className="w-full flex flex-col gap-10 lg:flex-row">
            <CustomCard />
            <CustomCard />
        </div>
        <div className="w-full flex flex-col gap-10 lg:flex-row">
            <CustomCard />
            <div className="border-1 border-gray-300 rounded-xl p-6 mt-10 w-[350px] h-[200px] text-9xl items-center justify-center flex cursor-pointer shadow-md hover:shadow-gray-200 transition-all duration-300">
              <p>...</p>
            </div>
        </div>
    </div>
  )
}

export default Customers