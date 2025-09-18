import React from "react";
import { FaLaptopCode, FaPaintBrush, FaBullhorn } from "react-icons/fa";


const services = [
{
icon: <FaLaptopCode className=" text-gray-600 transition-all duration-500 text-2xl" />,
title: "Web Development",
description: "Building responsive and scalable websites tailored to your business needs.",
},
{
icon: <FaPaintBrush className="text-gray-600 transition-all duration-500 text-2xl" />,
title: "Graphic Design",
description: "Crafting visually appealing designs that effectively communicate your brand.",
},
{
icon: <FaBullhorn className="text-gray-600 transition-all duration-500 text-2xl" />,
title: "Digital Marketing",
description: "Boosting your online presence through effective marketing strategies.",
},
];


export default function Services() {
return (
<section className="py-8 bg-white">
<div className="max-w-7xl mx-auto px-4">
<div className='text-center mb-16'>
  <div className='inline-block text-left'>
    <h2 className='text-3xl md:text-4xl text-black font-bold mb-1 uppercase tracking-wide'>Our Services</h2>
    <div className='mt-2 flex items-center gap-2'>
      <span className='h-[3px] w-24 bg-sky-600 rounded-full'></span>
      <span className='h-[3px] w-10 bg-sky-600 rounded-full'></span>
      <span className='h-[3px] w-6 bg-sky-600 rounded-full'></span>
      <span className='h-[3px] w-6 bg-sky-600 rounded-full'></span>
    </div>
  </div>
</div>
<div className="grid md:grid-cols-3 sm:gap-10 md:gap-4">
        {services.map((service, index) => (
        <div
        key={index}
        className="relative bg-gray-100 rounded-lg shadow-md text-center px-6 pt-14 pb-8 hover:shadow-lg transition"
        >
        {/* Circle Icon */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 
        bg-gray-200 rounded-full flex items-center justify-center border-3 border-white
         hover:bg-sky-300 transition-all duration-500 hover:">
            <div className="rounded-full bg-gray-100 p-[14.5px] border-1 hover:shadow-lg hover:bg-sky-300 hover:text-white border-white transition-all duration-500">
                {service.icon}
            </div>
        </div>


        {/* Title */}
        <h3 className="text-lg font-bold uppercase text-gray-800 mb-3">
        {service.title}
        </h3>


        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed">
        {service.description}
        </p>
        </div>
        ))}
</div>
</div>
</section>
);
}