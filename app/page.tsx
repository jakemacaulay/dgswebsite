import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  const previewServices = [
    {
      title: "Lawn Maintenance",
      description: "Precision mowing and artistic edging for residential and commercial properties.",
      tag: "Maintenance",
    },
    {
      title: "Snow Removal",
      description: "Reliable commercial and residential snow clearing for HRM winters.",
      tag: "Winter",
    },
    {
      title: "Landscape Install",
      description: "Complete design and installation of your outdoor living space.",
      tag: "Installation",
    },
  ];

  return (
    <div className="flex flex-col">
      <Hero />
      
      {/* Services Preview Section */}
      <section className="py-32 bg-white overflow-hidden relative border-b border-cream-darker/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <FadeIn className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-accent-green font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Expertise</span>
              <h2 className="text-5xl md:text-7xl font-black text-dark-green mb-8 leading-tight">
                Our Core <br /> <span className="text-primary-green">Services</span>
              </h2>
            </div>
            <Link 
              href="/services" 
              className="text-dark-green font-black text-lg flex items-center gap-4 group hover:text-primary-green transition-colors"
            >
              See All Services
              <span className="w-14 h-14 rounded-full border border-dark-green/20 flex items-center justify-center group-hover:bg-primary-green group-hover:border-primary-green group-hover:text-cream transition-all shadow-lg group-hover:shadow-primary-green/20">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 group-hover:translate-x-1 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </Link>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {previewServices.map((service, index) => (
              <FadeIn key={index} delay={index * 150} direction="up">
                <Link 
                  href="/services"
                  className="group p-12 bg-cream rounded-[3rem] border border-cream-darker hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between min-h-[350px]"
                >
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-primary-green/10 text-primary-green text-[10px] font-black uppercase tracking-widest mb-8">
                      {service.tag}
                    </span>
                    <h3 className="text-3xl font-black text-dark-green mb-6 leading-tight group-hover:text-primary-green transition-colors">{service.title}</h3>
                    <p className="text-dark-green font-medium text-lg leading-relaxed">{service.description}</p>
                  </div>
                  <div className="mt-8 flex justify-end">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary-green shadow-sm group-hover:bg-primary-green group-hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-32 bg-dark-green text-cream relative overflow-hidden">
        {/* Subtle decorative background */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-green rounded-full blur-[120px]" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent-green rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <FadeIn direction="right">
              <span className="text-accent-green font-bold tracking-[0.2em] uppercase text-sm mb-6 block">Our Story</span>
              <h2 className="text-5xl md:text-8xl font-black mb-8 leading-tight">Rooted in <br /><span className="text-primary-green">Passion</span></h2>
              <p className="text-2xl font-bold mb-12 leading-relaxed opacity-80 max-w-xl">
                Founded in 2023, DGS Landscaping is locally owned and operated. We began with a simple idea: To bring your outdoor visions to life through artisan craftsmanship and unwavering dedication.
              </p>
              <Link 
                href="/about" 
                className="inline-block bg-primary-green text-white px-10 py-5 rounded-full font-black text-lg hover:bg-cream hover:text-dark-green transition-all shadow-2xl shadow-primary-green/20 uppercase tracking-widest hover:-translate-y-1"
              >
                Our Journey
              </Link>
            </FadeIn>
            <FadeIn direction="left" delay={200} className="relative group">
              <div className="aspect-square rounded-[4rem] overflow-hidden flex items-center justify-center border-4 border-primary-green shadow-2xl transition-transform duration-700">
                 <Image
                    src="/project1.jpeg"
                    alt="DGS Landscaping Artisan Craftsmanship"
                    fill
                    className="object-cover rounded-[4rem]"
                  />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-10 -left-10 bg-accent-green p-10 rounded-[2.5rem] shadow-2xl animate-bounce-slow">
                 <div className="text-white font-black text-4xl">100+</div>
                 <div className="text-white/80 font-bold uppercase tracking-widest text-[10px]">Projects Completed</div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-accent-green font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Portfolio</span>
              <h2 className="text-5xl md:text-7xl font-black text-dark-green mb-8 leading-tight">Featured <br /><span className="text-primary-green">Masterpieces</span></h2>
            </div>
            <Link 
              href="/portfolio" 
              className="text-dark-green font-black text-lg flex items-center gap-4 group hover:text-primary-green transition-colors"
            >
              Full Gallery
              <span className="w-14 h-14 rounded-full border border-dark-green/20 flex items-center justify-center group-hover:bg-primary-green group-hover:border-primary-green group-hover:text-cream transition-all shadow-lg group-hover:shadow-primary-green/20">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 group-hover:translate-x-1 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </Link>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <FadeIn delay={100} direction="up" className="w-full h-full">
              <Link 
                href="/portfolio"
                className="group relative aspect-[16/10] rounded-[3rem] overflow-hidden border-4 border-primary-green shadow-xl hover:shadow-2xl transition-all duration-700 block"
              >
                <Image
                    src="/project3.jpg"
                    alt="Zen Oasis Project"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-dark-green/20 group-hover:bg-dark-green/40 transition-colors duration-500 z-10" />
                <div className="absolute bottom-12 left-12 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h4 className="text-white text-3xl font-black mb-2 uppercase">Backyard Work</h4>
                  <p className="text-white/80 font-bold uppercase tracking-widest text-xs">Mowing & Walkway</p>
                </div>
              </Link>
            </FadeIn>
            <FadeIn delay={300} direction="up" className="w-full h-full">
              <Link 
                href="/portfolio"
                className="group relative aspect-[16/10] rounded-[3rem] overflow-hidden border-4 border-primary-green shadow-xl hover:shadow-2xl transition-all duration-700 block"
              >
                <Image
                    src="/project2.jpeg"
                    alt="Stone Terrace Project"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-dark-green/20 group-hover:bg-dark-green/40 transition-colors duration-500 z-10" />
                <div className="absolute bottom-12 left-12 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h4 className="text-white text-3xl font-black mb-2 uppercase">Lawn Work</h4>
                  <p className="text-white/80 font-bold uppercase tracking-widest text-xs">Precision Mowing</p>
                </div>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Final CTA Section */}
      <section className="relative py-32 overflow-hidden bg-dark-green">
        <div className="absolute inset-0 opacity-20">
           <Image
              src="/main.jpg"
              alt="Background"
              fill
              className="object-cover"
            />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <FadeIn direction="none">
            <span className="text-accent-green font-bold tracking-[0.2em] uppercase text-sm mb-6 block">Get Started</span>
            <h2 className="text-5xl md:text-8xl font-black text-white mb-12 uppercase leading-[0.9]">
              Build Your <br /> <span className="text-primary-green">Sanctuary</span>
            </h2>
            <p className="text-white/70 text-xl md:text-2xl font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
              Ready to transform your outdoor space into a work of art? Contact us today for a free consultation and quote.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-primary-green text-white px-14 py-7 rounded-full font-black text-xl hover:bg-white hover:text-dark-green transition-all shadow-2xl shadow-primary-green/40 uppercase tracking-widest hover:-translate-y-2"
            >
              Get a Quote Today
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
