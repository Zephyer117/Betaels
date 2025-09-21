import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative scroll-mt-24 md:scroll-mt-36">
      <div className="">
        <div className="relative h-[560px] md:h-[520px] lg:h-[600px] overflow-hidden">
          {/* Background image */}
          <Image
            src="/Images/Image1.png"
            alt="Hero Image"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/55" aria-hidden="true"></div>
          {/* Text Content overlay */}
          <div className="relative z-10 h-full flex justify-end items-center max-w-7xl mx-auto px-2">
            <div className="max-w-xl space-y-6 text-center md:text-right">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                Transform Your Ideas Into <span className="text-blue-300">Reality</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200">
                We help businesses grow with innovative solutions and cutting-edge technology. 
                Let&apos;s build something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-end pt-2 px-4 md:px-0">
                <Button className="px-8 py-6 bg-white/10 border-2 border-white/50 text-white md:hover:bg-sky-600/70 active:bg-sky-600/70 focus-visible:bg-sky-600/70 focus-visible:ring-2 focus-visible:ring-white/70 text-xl font-bold">
                  Hire Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="px-8 py-6 border-2 border-white/50 text-white md:hover:bg-white/10 active:bg-white/10 focus-visible:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/70 text-xl font-bold">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;