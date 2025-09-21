import React from 'react'
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"
import SectionHeading from './SectionHeading'
import Image from 'next/image'

const testimonials = [
  {
    name: 'Shahin Alom',
    position: 'Chairman',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ea commodo consequat.',
    image: '/testimonial2.jpg',
    rating: 4.5,
  },
  {
    name: 'Mahadi Tahsan',
    position: 'Executive Director',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ea commodo consequat.',
    image: '/testimonial2.jpg',
    rating: 3.5,
  },
];

// ⭐ Helper function for stars with half support
const renderStars = (rating: number) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<FaStar key={i} className="text-sky-400 fill-current" />);
    } else if (rating >= i - 0.5) {
      stars.push(<FaStarHalfAlt key={i} className="text-sky-400 fill-current" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-gray-100 fill-current" />);
    }
  }
  return stars;
};

const Testimonial = () => {
  return (
    <section className="py-16 bg-white px-4 md:px-4 lg:px-4" id="testimonials">
      <div className="max-w-7xl mx-auto ">
        <SectionHeading title="Testimonial" widthClass="max-w-[320px]" className="mb-20" />
        
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center 
              relative transition-all duration-500 md:hover:scale-[1.02] active:scale-[1.02] group outline-none focus-visible:ring-2 focus-visible:ring-sky-300 rounded-xl"
              role="button"
              tabIndex={0}
            >
              {/* Profile image */}
              <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg mx-auto relative z-20 
              bg-gray-100 border-4 border-white md:group-hover:border-sky-100 group-active:border-sky-100 transition-all duration-500 
              transform md:group-hover:scale-110 group-active:scale-110">
                <Image 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </div>
              
              {/* Content Box */}
              <div className='mt-8 bg-gray-100 rounded-xl p-6 relative w-full shadow-lg md:hover:shadow-2xl active:shadow-2xl 
              transition-shadow duration-500 border border-gray-100 md:group-hover:border-sky-100 group-active:border-sky-100 focus-visible:ring-2 focus-visible:ring-sky-300'>
                <div className="absolute left-1/2 -translate-x-1/2 -top-3 w-6 h-6 bg-gray-100 rotate-45 
                border-t border-l border-gray-100"></div>
                {/* Arrow pointing to profile image */}
                
                {/* Name */}
                <h3 className="font-bold text-lg uppercase text-gray-800 mt-2">
                  {testimonial.name}
                </h3>

                {/* Rating with half-star support */}
                <div className="flex justify-center my-3 space-x-1 bg-transparent">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Position */}
                <p className="font-bold text-gray-500 mb-4">{testimonial.position}</p>

                {/* Content */}
                <p className="text-gray-600 text-sm leading-relaxed italic">
                  {testimonial.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonial