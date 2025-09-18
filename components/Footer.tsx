import Image from 'next/image';
import Link from 'next/link';
import { FaEnvelope, FaPhone, FaGlobe } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#2b2b2b] text-gray-300 border-t border-[#3a3a3a]">
      {/* Top content area */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* Brand + About */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/Images/Beatels.png" alt="Beatls Logo" width={42} height={42} />
              <span className="text-2xl font-semibold text-white">beatls</span>
            </div>
            <p className="text-[15px] leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-[15px] leading-relaxed mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>

          {/* Contact Us */}
          <div className="lg:col-span-3">
            <h3 className="text-white text-lg font-semibold uppercase tracking-wide mb-5 relative after:content-[''] after:block after:w-12 after:h-0.5 after:bg-sky-500 after:mt-2">Contact us</h3>
            <ul className="space-y-3 text-[15px]">
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-sky-600/20 text-sky-400 mt-0.5">
                  <FaPhone />
                </span>
                <div className="flex flex-col">
                  <a href="tel:+33412345987" className="hover:text-white">+334 1234 5987</a>
                  <a href="tel:+33498762354" className="hover:text-white">+334 9876 2354</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-sky-600/20 text-sky-400 mt-0.5">
                  <FaEnvelope />
                </span>
                <div className="flex flex-col">
                  <a href="mailto:beatsinfo@gmail.com" className="hover:text-white">beatsinfo@gmail.com</a>
                  <a href="mailto:informationbeatls@mail.com" className="hover:text-white">informationbeatls@mail.com</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-sky-600/20 text-sky-400 mt-0.5">
                  <FaGlobe />
                </span>
                <div className="flex flex-col">
                  <a href="#" className="hover:text-white">www.beatsinformation.com</a>
                  <a href="#" className="hover:text-white">www.informationbeatls.com</a>
                </div>
              </li>
            </ul>
          </div>

          {/* Important Links */}
          <div className="lg:col-span-2">
            <h3 className="text-white text-lg font-semibold uppercase tracking-wide mb-5 relative after:content-[''] after:block after:w-12 after:h-0.5 after:bg-sky-500 after:mt-2">Important Links</h3>
            <ul className="grid grid-cols-2 gap-y-2 text-[15px]">
              <li><Link className="hover:text-white" href="#">Home</Link></li>
              <li><Link className="hover:text-white" href="#about">About us</Link></li>
              <li><Link className="hover:text-white" href="#portfolio">Portfolio</Link></li>
              <li><Link className="hover:text-white" href="#contact">Contact</Link></li>
              <li><Link className="hover:text-white" href="#team">Our Team</Link></li>
              <li><Link className="hover:text-white" href="#blog">Blog</Link></li>
            </ul>
          </div>

          {/* Flickr Photos */}
          <div className="lg:col-span-3">
            <h3 className="text-white text-lg font-semibold uppercase tracking-wide mb-5 relative after:content-[''] after:block after:w-12 after:h-0.5 after:bg-sky-500 after:mt-2">Flickr Photos</h3>
            <div className="grid grid-cols-3 gap-2 md:gap-3">
              {["/Images/Image1.png","/Images/Image2.png","/Images/Image1.png","/Images/Image2.png","/Images/Image1.png","/Images/Image2.png"].map((src, idx) => (
                <div key={idx} className="relative aspect-square overflow-hidden rounded ring-1 ring-white/10 hover:ring-sky-500/40 transition">
                  <Image src={src} alt={`Photo ${idx+1}`} fill className="object-cover" sizes="96px" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#3a3a3a] text-gray-300">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-5 text-center text-sm tracking-wide">
          &copy; 2017. All rights reserved by <span className="text-sky-400 font-semibold">Webnexter</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
