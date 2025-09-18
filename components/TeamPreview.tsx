import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaPinterestP, FaTwitter } from "react-icons/fa";

const teamMembers = [
  {
    name: 'Rasel Islam',
    position: 'Web Developer',
    image: '/testimonial2.jpg',
  },
  {
    name: 'Sakeba Aney',
    position: 'Web Designer',
    image: '/testimonial2.jpg',
  },
  {
    name: 'Abs Ujjwal',
    position: 'Web Designer',
    image: '/testimonial2.jpg',
  },
  {
    name: 'Aney Irin',
    position: 'Web Designer',
    image: '/testimonial2.jpg',
  },
];

const TeamPreview = () => {
  return (
    <section className="py-18 bg-white px-4 md:px-4 lg:px-4" id="team">
      <div className="max-w-7xl mx-auto">
      <div className='max-w-[200px] mx-auto mb-16'>
          <div className='text-center'>
              <h2 className='text-3xl md:text-4xl text-black font-bold text-center mb-1 uppercase tracking-wide'>Our Team</h2>
          </div> 
          <div className='flex gap-1 justify-begin items-center'>
                  <div className='w-20 h-1 bg-sky-600'></div>
                  <div className='w-6 h-1 bg-sky-600'></div>
                  <div className='w-3 h-1 bg-sky-600'></div>
                  <div className='w-3 h-1 bg-sky-600'></div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="w-full">
              <div className="rounded-md overflow-hidden group/card h-full flex flex-col">
                {/* Image container with hover effects */}
                <div className="relative overflow-hidden flex-1 group-hover/card:shadow-xl transition-all duration-400 hover:-translate-y-1.5">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-[320px] object-cover transition-all duration-500 ease-out group-hover/card:scale-105" 
                  />
                  
                  {/* Social links container - positioned on the right side */}
                  <div className="absolute top-0 right-0 h-full w-20 bg-black/60 flex flex-col items-center justify-center transition-all duration-500 ease-out opacity-0 group-hover/card:opacity-100">
                    <div className="flex flex-col space-y-4">
                      <a href="#" className="w-10 h-10 flex items-center justify-center border-white border-2 rounded-full text-white hover:border-0 hover:bg-sky-500 hover:text-white transition-all duration-200 transform hover:scale-110 hover:shadow-md">
                        <FaFacebookF className="text-xl" />
                      </a>
                      <a href="#" className="w-10 h-10 flex items-center justify-center border-white border-2 rounded-full text-white hover:border-0 hover:bg-sky-500 hover:text-white transition-all duration-200 transform hover:scale-110 hover:shadow-md">
                        <FaTwitter className="text-xl" />
                      </a>
                      <a href="#" className="w-10 h-10 flex items-center justify-center border-white border-2 rounded-full text-white hover:border-0 hover:bg-sky-500 hover:text-white transition-all duration-200 transform hover:scale-110 hover:shadow-md">
                        <FaLinkedinIn className="text-xl" />
                      </a>
                      <a href="#" className="w-10 h-10 flex items-center justify-center border-white border-2 rounded-full text-white hover:border-0 hover:bg-sky-500 hover:text-white transition-all duration-200 transform hover:scale-110 hover:shadow-md">
                        <FaPinterestP className="text-xl" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Member info */}
                <div className="p-6 text-center bg-transparent border-t border-gray-100/50">
                  <h3 className="font-bold text-lg text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-sm text-gray-500 font-medium">{member.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamPreview;
