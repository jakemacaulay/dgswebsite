export default function Testimonials() {
  const reviews = [
    {
      text: "DGS was great to deal with. Needed some snow removed and Dave had his people here within 15 mins. Now that's prompt service. I would recommend their services to anyone needing help in a pinch. Thank you DGS.",
      stars: 5,
    },
    {
      text: "Very efficient, got the job done in a timely manner!",
      stars: 5,
    },
    {
      text: "DGS Landscaping was amazing - super easy to work with and very responsive. Highly recommend!",
      stars: 5,
    },
  ];

  return (
    <section className="py-32 bg-dark-green text-cream relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(var(--primary-green) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>
      
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 text-[25rem] leading-none font-black text-primary-green select-none">“</div>
        <div className="absolute bottom-10 right-10 text-[25rem] leading-none font-black text-primary-green select-none">”</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-32">
          <span className="text-accent-green font-bold tracking-[0.4em] uppercase text-xs mb-6 block animate-pulse">Testimonials</span>
          <h2 className="text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tighter">
            Voices of <br />
            <span className="text-primary-green italic">Satisfaction</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="flex flex-col group animate-in fade-in slide-in-from-bottom duration-1000 delay-300"
            >
              <div className="flex gap-1.5 mb-10 text-accent-green">
                {[...Array(review.stars)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 transition-transform group-hover:scale-125 duration-300" style={{ transitionDelay: `${i * 100}ms` }}>
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-2xl font-bold mb-12 leading-relaxed tracking-tight group-hover:text-white transition-colors duration-500 italic">
                &quot;{review.text}&quot;
              </blockquote>
              <div className="mt-auto">
                <div className="h-0.5 w-16 bg-accent-green mb-8 group-hover:w-full transition-all duration-700" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
