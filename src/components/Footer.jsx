import React from 'react'

const Footer = () => {
  return (
    <div className="bg-[#080808] flex flex-col items-center text-white mt-10 w-full pt-10">
        <div className="flex flex-col w-[70vw] text-center items-center gap-2">
            <h1 className="custom-name-text">Get In Touch</h1>
            <p className="hero-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
        <form action="get" className="flex flex-col gap-6 mt-10">
                <div className="flex flex-col gap-2 w-[60vw] lg:w-[40vw] xl:w-[20vw]">
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Please enter your email" id='email' className="footer-input"/>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="mobile">Mobile</label>
                    <input type="phone" id="mobile" placeholder="Enter mobile" className="footer-input"/>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="message">Message</label>
                    <input type="textarea" id="message" placeholder="Enter your message" column="10" className="footer-input"/>
                </div>
            <button className="w-full h-14 cursor-pointer rounded-sm py-4 flex items-center justify-center text-shadow-gray-200 text-shadow-sm shadow-2xl shadow-[#3f8e00] bg-[#3f8e00]">Submit</button>
        </form>
        <div className="w-full h-[10vh] mt-14 bg-black flex items-center justify-center">©2025. Created NULL by DZERO Abdulaziz</div>
    </div>
  )
}

export default Footer