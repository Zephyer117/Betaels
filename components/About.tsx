import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <section id="about" className='py-16 bg-white scroll-mt-24 md:scroll-mt-32'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center'>
          <div className='inline-block text-left'>
            <h2 className='text-3xl md:text-4xl text-black font-bold mb-1 uppercase tracking-wide'>About Us</h2>
            <div className='mt-2 flex items-center gap-2'>
              <span className='h-[3px] w-24 bg-sky-600 rounded-full'></span>
              <span className='h-[3px] w-10 bg-sky-600 rounded-full'></span>
              <span className='h-[3px] w-6 bg-sky-600 rounded-full'></span>
              <span className='h-[3px] w-6 bg-sky-600 rounded-full'></span>
            </div>
          </div>
        </div>
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