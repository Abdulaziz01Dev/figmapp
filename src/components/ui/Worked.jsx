import React from 'react'
import '../../styles/component.css'

const Worked = () => {
  return (
    <div className="flex items-center justify-center mt-4 gap-6 w-full h-auto">
        <button className="worked-buttons" data-aos="fade-up" data-aos-delay="600">ClickUp</button>
        <button className="worked-buttons" data-aos="fade-up" data-aos-delay="700">DropBox</button>
        <button className="worked-buttons" data-aos="fade-up" data-aos-delay="800">PAYCHEX</button>
        <button className="worked-buttons" data-aos="fade-up" data-aos-delay="900">elastic</button>
        <button className="worked-buttons" data-aos="fade-up" data-aos-delay="1000">STRIPE</button>
    </div>
  )
}

export default Worked