import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>CONTACT <span className="text-gray-700 font-semibold">US </span></p>
      </div>
     <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm ">
      <img src={assets.contact_image} alt="contact image" className="w-full md:max-w-[360px]"/>
      <div className="flex flex-col gap-6 justify-center items-start ">
        <p className="font-semibold text-lg text-gray-600 ">Our Office</p>
        <p className="text-gray-500">54709 willms station <br />Suite 350, Washington, USA</p>
        <p className="text-gray-500">Tel: 756970165946 <br />Email :vakklagadapravveen@gmail.com</p>
        <p className="font-semibold text-lg text-gray-600">Careers at Hosim</p>
        <p className="text-gray-500">Learn about our team and job openings</p>
        <button className="border-black border px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 ">Explore Jobs</button>
      </div>
     </div>
    </div>
  )
}

export default Contact