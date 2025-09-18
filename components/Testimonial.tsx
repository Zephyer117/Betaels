import React from 'react'
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"

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
      <div className='max-w-[200px] mx-auto mb-20'>
          <div className='text-center'>
              <h2 className='text-3xl md:text-4xl text-black font-bold text-center mb-1 uppercase tracking-wide'>Testimonial</h2>
          </div> 
          <div className='flex gap-1 justify-begin items-center'>
                  <div className='w-20 h-1 bg-sky-600'></div>
                  <div className='w-6 h-1 bg-sky-600'></div>
                  <div className='w-3 h-1 bg-sky-600'></div>
                  <div className='w-3 h-1 bg-sky-600'></div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center 
              relative transition-all duration-500 hover:scale-[1.02] group"
            >
              {/* Profile image */}
              <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg mx-auto relative z-20 
              bg-gray-100 border-4 border-white group-hover:border-sky-100 transition-all duration-500 
              transform group-hover:scale-110">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-full h-full object-cover" 
                />
              </div>
              
              {/* Content Box */}
              <div className='mt-8 bg-gray-100 rounded-xl p-6 relative w-full shadow-lg hover:shadow-2xl 
              transition-shadow duration-500 border border-gray-100 group-hover:border-sky-100'>
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