"use client";

import Image from "next/image";
import { useState } from "react";
import FadeIn from "./FadeIn";

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projects = [
    {
      title: "Precision Mowing",
      category: "Lawn Maintenance",
      image: "/project2.jpeg",
    },
    {
      title: "Plowing",
      category: "Snow Removal",
      image: "/snow.jpg",
    },
    {
      title: "Laying Sod",
      category: "Landscape Install",
      image: "/beforeafter4.001.jpeg",
    },
    {
      title: "Garden Care",
      category: "Weed & Grub Control",
      image: "/weedcontrol.jpg",
    },
    {
      title: "Lawn Health",
      category: "Core Aeration",
      image: "/IMG_4710.jpeg",
    },
    {
      title: "Earth Removal Service",
      category: "Excavation",
      image: "/excavation2.jpg",
    },
  ];

  return (
    <section id="portfolio" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <FadeIn direction="right" className="max-w-xl">
            <span className="text-accent-green font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Selected Works</span>
            <h2 className="text-5xl md:text-7xl font-bold text-dark-green mb-8 leading-tight">
              Crafting <br />
              <span className="text-primary-green uppercase">Masterpieces</span>
            </h2>
            <p className="text-xl text-dark-green/60 font-medium leading-relaxed">
              A collection of our favorite transformations across the HRM.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <FadeIn key={index} delay={index * 100} direction="up">
              <div
                className="group relative aspect-[4/5] rounded-[2.5rem] overflow-hidden cursor-pointer shadow-xl border-2 border-cream-darker hover:border-primary-green transition-all duration-500"
                onClick={() => setSelectedImage(project.image)}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-green/95 via-dark-green/40 to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                  <div className="transform translate-y-0 md:translate-y-8 group-hover:translate-y-0 transition-all duration-500">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-accent-green text-white text-[10px] font-black uppercase tracking-widest mb-4 shadow-xl">
                      {project.category}
                    </span>
                    <h3 className="text-white text-3xl font-black mb-6 leading-tight">
                      {project.title}
                    </h3>
                  </div>
                </div>
                
                {/* Magnifying Glass Icon */}
                <div className="absolute top-8 right-8 w-14 h-14 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-primary-green hover:scale-110 border border-white/20">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Full Screen Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-dark-green/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors p-4"
            onClick={() => setSelectedImage(null)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="relative w-full h-full max-w-6xl max-h-[85vh] animate-in zoom-in-95 duration-500 ease-out">
            <Image
              src={selectedImage}
              alt="Project Full View"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </section>
  );
}
