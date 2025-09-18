'use client';

import Testimonial from "@/components/Testimonial";
import TeamPreview from "@/components/TeamPreview";
import Portfolio from "@/components/Portfolio";
import Service from "@/components/Services";
import About from "@/components/About";
import HeroSection from "@/components/HeroSection";


export default function Home() {
  return (
    <section className="pt-0 md:pt-30"> {/* Add padding-top to account for fixed header */}
      <HeroSection />
      <About />
      <Service />
      <Portfolio />
      <TeamPreview />
      <Testimonial />
    </section>
  );
}
