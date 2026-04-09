"use client";

import Image from "next/image";
import { useState } from "react";
import FadeIn from "./FadeIn";

export default function About() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="about" className="py-32 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-7 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <FadeIn direction="right" delay={100}>
                  <div 
                    className="group relative h-80 rounded-[2rem] overflow-hidden shadow-2xl cursor-pointer border-2 border-transparent hover:border-primary-green transition-all duration-500"
                    onClick={() => setSelectedImage("/IMG_7530.jpeg")}
                  >
                    <Image
                      src="/IMG_7530.jpeg"
                      alt="Landscaping Detail"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-dark-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 transform scale-90 group-hover:scale-100 transition-transform duration-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 text-white">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </FadeIn>
                <FadeIn direction="up" delay={300}>
                  <div className="relative h-48 rounded-[2rem] overflow-hidden shadow-2xl bg-primary-green flex items-center justify-center p-8 text-cream">
                    <div className="text-center">
                      <div className="text-5xl font-black mb-2">3+</div>
                      <div className="text-xs uppercase tracking-widest font-bold">Years of Excellence</div>
                    </div>
                  </div>
                </FadeIn>
              </div>
              <div className="pt-12 space-y-4">
                <FadeIn direction="left" delay={200}>
                  <div 
                    className="group relative h-80 rounded-[2rem] overflow-hidden shadow-2xl cursor-pointer border-2 border-transparent hover:border-primary-green transition-all duration-500"
                    onClick={() => setSelectedImage("/team.jpeg")}
                  >
                    <Image
                      src="/team.jpeg"
                      alt="Garden Design"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-dark-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 transform scale-90 group-hover:scale-100 transition-transform duration-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 text-white">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
            {/* Background Accent */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary-green/5 rounded-full blur-3xl" />
          </div>

          <div className="lg:col-span-5">
            <FadeIn direction="left">
              <span className="text-accent-green font-bold tracking-[0.2em] uppercase text-sm mb-6 block">Our Heritage</span>
              <h2 className="text-5xl md:text-6xl font-bold text-dark-green mb-8 leading-tight">
                Rooted in <br />
                <span className="text-primary-green">Passion & Precision</span>
              </h2>
              
              <div className="space-y-6 text-xl text-dark-green font-medium leading-relaxed mb-12">
                <p>
                  Founded in 2023 and based in Sackville, DGS Landscaping is locally owned and operated. We serve the entire Halifax Regional Municipality with a simple vision: to handle every outdoor space with care, precision and expertise as we would our own.
                </p>
                <p>
                We see a backyard as a blank canvas full of potential to transform into a functional and visually appealing outdoor space. We look at things like layout, soil, drainage, and sunlight to design something that fits the homeowner&apos;s needs while boosting the overall value of the property.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 mb-12">
                <div>
                  <div className="text-dark-green font-black text-lg mb-2">Expert Team</div>
                  <p className="text-sm text-dark-green/60">Professional landscapers dedicated to your vision.</p>
                </div>
                <div>
                  <div className="text-dark-green font-black text-lg mb-2">Eco-Conscious</div>
                  <p className="text-sm text-dark-green/60">Sustainable practices that respect and enhance the local ecosystem.</p>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>

        {/* Community Service Section */}
        <div className="mt-16 pt-16 border-t border-cream-darker">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <FadeIn direction="right">
                <span className="text-accent-green font-bold tracking-[0.2em] uppercase text-sm mb-6 block">Community Impact</span>
                <h2 className="text-5xl md:text-6xl font-bold text-dark-green mb-8 leading-tight">
                  More Than Just <br />
                  <span className="text-primary-green">Landscaping</span>
                </h2>
                <div className="space-y-6 text-xl text-dark-green font-medium leading-relaxed">
                    <p>
                      At DGS Landscaping, we believe in giving back to the community that supports us. We are proud to host an annual Toy Drive every Christmas season.
                    </p>
                    <p>
                      It&apos;s our way of spreading joy and ensuring that every child in our local area has a reason to smile during the holidays. We are committed to being a positive force in Sackville and beyond.
                    </p>
                </div>
              </FadeIn>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2">
               <FadeIn direction="left">
                <div 
                  className="group relative aspect-[16/9] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-primary-green cursor-pointer"
                  onClick={() => setSelectedImage("/IMG_0109.png")}
                >
                        <Image
                            src="/IMG_0109.png"
                            alt="DGS Landscaping Toy Drive"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-dark-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                          <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 transform scale-90 group-hover:scale-100 transition-transform duration-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8 text-white">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                          </div>
                        </div>
                </div>
               </FadeIn>
            </div>
          </div>
        </div>
      </div>

      {/* Full Screen Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-dark-green/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors p-4 z-[110]"
            onClick={() => setSelectedImage(null)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="relative w-full h-full max-w-6xl max-h-[85vh] animate-in zoom-in-95 duration-500 ease-out">
            <Image
              src={selectedImage}
              alt="Full View"
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
