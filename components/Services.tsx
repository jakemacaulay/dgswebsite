import Link from "next/link";
import FadeIn from "./FadeIn";

export default function Services() {
  const services = [
    {
      title: "Lawn Maintenance",
      description: "Precision mowing and artistic edging for both commercial and residential properties.",
      tag: "Residential & Commercial",
      slug: "lawn-maintenance",
    },
    {
      title: "Snow Removal",
      description: "Reliable commercial and residential snow clearing to keep your property safe and accessible.",
      tag: "Winter Services",
      slug: "snow-removal",
    },
    {
      title: "Landscape Install",
      description: "Complete design and installation of gardens, sod, and structural outdoor elements.",
      tag: "Design & Build",
      slug: "landscape-install",
    },
    {
      title: "Weed & Grub Control",
      description: "Professional treatment programs to keep your turf healthy and pest-free.",
      tag: "Nutrition & Protection",
      slug: "weed-grub-control",
    },
    {
      title: "Core Aeration",
      description: "Relieve soil compaction and allow your lawn to breathe, ensuring deep root growth.",
      tag: "Revitalization",
      slug: "aeration",
    },
    {
      title: "Excavation",
      description: "Professional site preparation, grading, and earth-moving services for any project.",
      tag: "Construction",
      slug: "excavation",
    },
  ];

  return (
    <section id="services" className="py-32 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-primary-green/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-green/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <FadeIn direction="right" className="max-w-2xl">
            <span className="text-accent-green font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Our Expertise</span>
            <h2 className="text-5xl md:text-8xl font-black text-dark-green mb-8 leading-[0.9]">
              Range of <br /> 
              <span className="text-primary-green uppercase">Services</span>
            </h2>
            <p className="text-xl md:text-2xl text-dark-green leading-relaxed font-medium opacity-70">
              From maintenance to major transformations, we offer comprehensive solutions for your outdoor needs.
            </p>
          </FadeIn>
          <FadeIn direction="left" className="flex flex-col items-start gap-4">
            <div className="text-primary-green font-black text-8xl leading-none">06</div>
            <div className="text-accent-green font-bold uppercase tracking-widest text-xs">Core Specialties</div>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 100} direction="up">
              <div
                className="group p-10 bg-cream rounded-[3rem] border border-cream-darker hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col min-h-[420px]"
              >
                <div className="mb-auto">
                  <div className="flex justify-between items-start mb-10">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary-green text-cream text-[10px] font-black uppercase tracking-widest">
                      {service.tag}
                    </span>
                    <span className="text-dark-green/10 font-black text-4xl leading-none">0{index + 1}</span>
                  </div>
                  <h3 className="text-3xl font-black text-dark-green mb-6 leading-tight group-hover:text-primary-green transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-dark-green font-medium leading-relaxed text-lg mb-8 opacity-80 group-hover:opacity-100 transition-opacity">
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
