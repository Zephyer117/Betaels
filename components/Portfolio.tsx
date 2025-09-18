import React, { useState } from 'react';
import Image from 'next/image';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  link: string;
  github?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Project Title',
    category: 'Web Design',
    image: '/testimonial2.jpg',
    link: '#',
    github: '#'
  },
  {
    id: 2,
    title: 'Another Project',
    category: 'UI/UX Design',
    image: '/BRanding MOckup.jpg',
    link: '#',
  },
  {
    id: 3,
    title: 'Creative Concept',
    category: 'Graphic Design',
    image: '/Woodcut-Logo-Mockup.png',
    link: '#',
  },
  {
    id: 4,
    title: 'Project Title',
    category: 'Web Design',
    image: '/BusinessCard_01.png',
    link: '#',
    github: '#'
  },
  {
    id: 5,
    title: 'Another Project',
    category: 'UI/UX Design',
    image: '/Flyer Mock up.png',
    link: '#',
  },
  {
    id: 6,
    title: 'Creative Concept',
    category: 'Graphic Design',
    image: '/Hello Cupcake.png',
    link: '#',
  },
];

const categories = ['All', 'Web Design', 'App Development', 'UI/UX Design', 'Graphic Design'];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="py-8 px-4 bg-white" id="portfolio">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
        <div className='max-w-[320px] mx-auto mb-20'>
          <div className='text-center'>
              <h2 className='text-3xl md:text-4xl text-black font-bold text-center mb-1 uppercase tracking-wide'>Our Portfolio</h2>
          </div> 
          <div className='flex gap-1 justify-begin items-center'>
                  <div className='w-32 h-1 bg-sky-600'></div>
                  <div className='w-12 h-1 bg-sky-600'></div>
                  <div className='w-4 h-1 bg-sky-600'></div>
                  <div className='w-4 h-1 bg-sky-600'></div>
          </div>
        </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Check out our latest projects and see how we can help bring your ideas to life.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-sky-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg bg-white shadow-md break-inside-avoid"
            >
              <div className="relative w-full h-auto">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-sky-500 hover:text-white transition-colors"
                  >
                    <FiExternalLink size={20} />
                  </a>
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-sky-500 hover:text-white transition-colors"
                    >
                      <FiGithub size={20} />
                    </a>
                  )}
                  <div className="text-center text-white">
                    <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                    <p className="text-sky-400 text-sm">{project.category}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
