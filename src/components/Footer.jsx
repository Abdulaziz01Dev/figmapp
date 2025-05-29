import React from 'react'

const Footer = () => {
  return (
    <div className="bg-[#080808] flex flex-col items-center text-white mt-10 w-full pt-10">
        <div className="flex flex-col w-[70vw] text-center items-center gap-2">
            <h1 className="custom-name-text text-3xl" data-aos="fade-down" data-aos-delay="300">Get In Touch</h1>
            <p className="hero-paragraph" data-aos="fade-down">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
        <form action="get" className="flex flex-col gap-6 mt-10">
                <div className="flex flex-col gap-2 w-[60vw] lg:w-[40vw] xl:w-[20vw]">
                    <label htmlFor="email" data-aos="fade-up" data-aos-delay="100">Email</label>
                    <input type="email" placeholder="Please enter your email" id='email' className="footer-input" data-aos="fade-up" data-aos-delay="300"/>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="mobile" data-aos="fade-up" data-aos-delay="500">Mobile</label>
                    <input type="phone" id="mobile" placeholder="Enter mobile" className="footer-input" data-aos="fade-up" data-aos-delay="900"/>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="message" data-aos="fade-up" data-aos-delay="1100">Message</label>
                    <input type="textarea" id="message" placeholder="Enter your message" column="10" className="footer-input" data-aos="fade-up" data-aos-delay="1300"/>
                </div>
            <button data-aos="fade-up" data-aos-delay="1500" className="w-full h-14 cursor-pointer rounded-sm py-4 flex items-center justify-center text-shadow-gray-200 text-shadow-sm shadow-2xl shadow-[#3f8e00] bg-[#3f8e00]">Submit</button>
        </form>
        <div className="w-full h-[10vh] mt-14 bg-black flex items-center justify-center">
            <h1>©2025. Created NULL by DZERO Abdulaziz</h1>
        </div>
    </div>
  )
}

export default Footer