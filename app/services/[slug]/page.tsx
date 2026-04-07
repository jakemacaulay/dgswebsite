import Link from "next/link";
import { notFound } from "next/navigation";

const servicesData: Record<string, { title: string; description: string; longDescription: string; tag: string }> = {
  "lawn-sculpting": {
    title: "Lawn Sculpting",
    tag: "Maintenance",
    description: "Beyond simple mowing—we craft lush, healthy turf with precision edging and tailored fertilization.",
    longDescription: "Our lawn sculpting service is designed for those who view their lawn as a masterpiece. We go far beyond the standard 'mow and blow' approach. Our experts analyze your soil, grass type, and local climate to create a custom maintenance plan that includes precision mowing, artistic edging, and scientific fertilization. We ensure your lawn isn't just green, but healthy from the roots up.",
  },
  "architectural-design": {
    title: "Architectural Design",
    tag: "Design",
    description: "Master-planned outdoor living spaces that harmonize with your home's unique architecture.",
    longDescription: "We believe that your outdoor space should be a seamless extension of your home's architecture. Our design process involves a deep dive into your lifestyle and the aesthetic of your property. We create comprehensive master plans that include native plantings, spatial flow, and structural elements that enhance the natural beauty and value of your estate.",
  },
  "hardscape-artistry": {
    title: "Hardscape Artistry",
    tag: "Construction",
    description: "From custom stone patios to structural retaining walls, we build beauty that lasts for generations.",
    longDescription: "Hardscaping is the backbone of a great landscape. Our artisans specialize in working with natural stone, pavers, and high-quality masonry to build patios, walkways, and retaining walls that are as durable as they are beautiful. Every stone is placed with intention, creating structural elements that age gracefully and provide the foundation for your outdoor living.",
  },
  "seasonal-curation": {
    title: "Seasonal Curation",
    tag: "Care",
    description: "Expert garden preparation and leaf removal to ensure your landscape thrives through every season.",
    longDescription: "A great landscape requires care that changes with the seasons. Our curation service ensures that your property is always prepared for what's next. From spring planting and mulching to meticulous fall leaf removal and winterization, we handle the heavy lifting so your garden remains healthy and vibrant year-round.",
  },
  "arboricultural-care": {
    title: "Arboricultural Care",
    tag: "Specialized",
    description: "Specialized pruning and health management for the most vital elements of your outdoor sanctuary.",
    longDescription: "Trees and shrubs are the soul of your landscape. Our specialized arboricultural care focuses on the long-term health and structural integrity of your greenery. We provide expert pruning, disease management, and nutrient programs that protect your investment and ensure your trees thrive for decades to come.",
  },
  "estate-management": {
    title: "Estate Management",
    tag: "Premium",
    description: "Full-service property care for large estates and commercial complexes requiring meticulous detail.",
    longDescription: "For large properties that demand the highest level of attention, our estate management service provides a comprehensive, white-glove solution. We oversee every aspect of your landscape, coordinating maintenance schedules and long-term improvements to ensure your property always presents its best face to the world.",
  },
};

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = servicesData[params.slug];

  if (!service) {
    notFound();
  }

  return (
    <div className="pt-32 pb-24 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          href="/#services" 
          className="inline-flex items-center gap-2 text-dark-green font-black text-sm uppercase tracking-widest mb-12 hover:text-primary-green transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 rotate-180">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
          Back to Services
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-accent-green font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
              {service.tag}
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-dark-green mb-8 leading-tight uppercase">
              {service.title}
            </h1>
            <p className="text-2xl text-dark-green font-bold mb-12 leading-relaxed italic">
              {service.description}
            </p>
            <div className="h-px w-24 bg-primary-green mb-12" />
            <div className="text-xl text-dark-green font-medium leading-relaxed space-y-6">
              <p>{service.longDescription}</p>
            </div>

            <Link
              href="/#contact"
              className="inline-block mt-12 bg-primary-green text-cream px-10 py-5 rounded-full font-black text-lg hover:bg-dark-green transition-all shadow-xl shadow-primary-green/20 uppercase tracking-widest"
            >
              Inquire About This Service
            </Link>
          </div>

          <div className="space-y-8">
            <div className="relative aspect-square md:aspect-[4/5] bg-cream-darker rounded-[3rem] overflow-hidden shadow-2xl flex flex-col items-center justify-center border-2 border-dashed border-dark-green/20">
              <div className="text-center p-12">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-24 h-24 text-dark-green/20 mx-auto mb-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                <h3 className="text-2xl font-black text-dark-green/40 uppercase tracking-widest mb-2">Project Imagery Coming Soon</h3>
                <p className="text-dark-green/30 font-bold uppercase tracking-widest text-sm">We are currently curating our latest work for this category.</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-cream-darker rounded-3xl border border-dark-green/10 flex items-center justify-center">
                 <span className="text-xs font-black text-dark-green/20 uppercase tracking-widest">Detail Photo</span>
              </div>
              <div className="aspect-square bg-cream-darker rounded-3xl border border-dark-green/10 flex items-center justify-center">
                 <span className="text-xs font-black text-dark-green/20 uppercase tracking-widest">Detail Photo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
