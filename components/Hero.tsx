import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center pt-20 overflow-hidden bg-cream">
      {/* Unified Faded Background with Motion */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/main.jpg"
          alt="DGS Landscaping Project"
          fill
          className="object-cover opacity-30 scale-105 animate-[slow-zoom_20s_ease-in-out_infinite]"
          priority
        />
        {/* Subtle gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-transparent" />
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slow-zoom {
          0%, 100% { transform: scale(1.05); }
          50% { transform: scale(1.15); }
        }
      `}} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-md border border-primary-green/10 text-primary-green px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-[0.2em] mb-10 animate-in fade-in slide-in-from-left duration-1000">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-green"></span>
            </span>
            Premium Outdoor Design & Maintenance
          </div>
          
          <h1 className="text-5xl md:text-8xl font-bold text-dark-green leading-[1.1] mb-8 animate-in fade-in slide-in-from-bottom duration-700 delay-100 uppercase tracking-tight">
            Design Your <br />
            <span className="text-accent-green">Perfect Outdoor Space</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-dark-green font-semibold mb-12 max-w-lg leading-relaxed animate-in fade-in slide-in-from-bottom duration-700 delay-200">
            We blend precision with nature to create sustainable, breathtaking landscapes that elevate your home and lifestyle.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 animate-in fade-in slide-in-from-bottom duration-700 delay-300">
            <Link
              href="/contact"
              className="bg-primary-green text-cream px-8 py-4 rounded-full font-black text-lg hover:bg-dark-green transition-all shadow-2xl hover:shadow-primary-green/20 flex items-center justify-center group uppercase tracking-widest"
            >
              Start Your Journey
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/portfolio"
              className="px-8 py-4 rounded-full font-black text-lg border-4 border-dark-green/20 text-dark-green hover:bg-dark-green hover:text-cream transition-all flex items-center justify-center uppercase tracking-widest"
            >
              View Recent Work
            </Link>
          </div>
        </div>
      </div>

      {/* Modern Scroll Reveal Element */}
      <div className="absolute bottom-12 right-12 hidden lg:flex flex-col items-center gap-6">
        <span className="[writing-mode:vertical-lr] font-black text-xs uppercase tracking-[0.4em] text-dark-green/30">Scroll to Explore</span>
        <div className="w-px h-32 bg-gradient-to-b from-dark-green/30 to-transparent" />
      </div>
    </section>
  );
}
