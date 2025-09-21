import React from "react";
import { FaLaptopCode, FaPaintBrush, FaBullhorn } from "react-icons/fa";
import SectionHeading from './SectionHeading';

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
<SectionHeading title="Our Services" widthClass="max-w-[320px]" className="mb-10" />
<div className="grid md:grid-cols-3 gap-10 md:gap-4">
        {services.map((service, index) => (
          <div key={index} className="relative flex flex-col items-center">
            {/* Circle Icon - sibling, overlapped, independent hover */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-10 w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center border-2 border-white transition-all duration-500 md:hover:bg-sky-300 active:bg-sky-300">
              <div className="rounded-full bg-gray-100 p-[14.5px] border border-white transition-all duration-500 md:hover:shadow-lg md:hover:bg-sky-300 md:hover:text-white active:shadow-lg active:bg-sky-300 active:text-white">
                {service.icon}
              </div>
            </div>

            {/* Card - same design, independent hover */}
            <div
              className="z-0 bg-gray-100 rounded-lg shadow-md text-center px-6 pt-14 pb-8 transition md:hover:shadow-lg active:shadow-lg focus-visible:shadow-lg focus-visible:ring-2 focus-visible:ring-sky-300 outline-none"
              role="button"
              tabIndex={0}
            >
              {/* Title */}
              <h3 className="text-lg font-bold uppercase text-gray-800 mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
</div>
</div>
</section>
);
}