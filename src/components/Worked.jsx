import React from 'react'
import '../styles/component.css'

const Worked = () => {
  return (
    <div className="flex items-center justify-baseline gap-6 w-full h-auto">
        <button className="worked-buttons">ClickUp</button>
        <button className="worked-buttons">DropBox</button>
        <button className="worked-buttons">PAYCHEX</button>
        <button className="worked-buttons">elastic</button>
        <button className="worked-buttons">STRIPE</button>
    </div>
  )
}

export default Worked