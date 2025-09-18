import React from 'react'
import Image from 'next/image'
import SectionHeading from './SectionHeading'

const About = () => {
  return (
    <section id="about" className='py-16 bg-white scroll-mt-24 md:scroll-mt-32'>
      <div className='max-w-7xl mx-auto'>
        <SectionHeading title="About Us" widthClass="max-w-[320px]" className="mb-6" />
        <div className='mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center px-4 lg:px-4'>
          {/* Image */}
          <div className='w-full'>
            <div className='relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-sm'>
              <Image 
                src="/Images/Image2.png" 
                alt="About Image" 
                fill 
                className='object-cover'
                sizes='(max-width: 768px) 100vw, 50vw'
                priority={false}
              />
            </div>
          </div>

          {/* Content */}
          <div className='max-w-xl mx-auto md:mx-0 text-center md:text-left space-y-5'>
            <p className='text-gray-600 text-lg'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime blanditiis
              adipisci aliquid expedita nisi nihil, alias commodi, officia iste facilis
              perferendis dicta sed itaque, tempore voluptatibus corporis veniam hic distinctio.
            </p>
            <p className='text-gray-600 text-lg'>
              Natus cumque dolor quam, fuga minus iusto placeat? Repellat, unde. Pariatur
              voluptatem voluptate earum, ratione itaque, cumque omnis eligendi soluta.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About