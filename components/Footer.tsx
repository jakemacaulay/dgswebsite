import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-cream-darker py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-20 mb-24">
          
          <div className="lg:col-span-5 space-y-10">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 transition-transform duration-500 group-hover:scale-110">
                <Image
                  src="/logo2.png"
                  alt="DGS Landscaping Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col -space-y-1">
                <span className="font-black text-3xl tracking-tighter text-dark-green">
                  DGS<span className="text-primary-green">.</span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-dark-green/40 leading-none">
                  Sackville, NS
                </span>
              </div>
            </Link>
            <p className="text-xl text-dark-green/60 font-medium leading-relaxed max-w-sm">
              Locally owned and operated, crafting landscapes and sustainable outdoor environments since 2023.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/profile.php?id=100063914955072" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-14 h-14 rounded-full border border-cream-darker flex items-center justify-center text-dark-green hover:bg-dark-green hover:text-cream hover:border-dark-green transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                  <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-3.134c0-2.508 1.457-3.89 3.774-3.89 1.11 0 2.27.198 2.27.198v2.498h-1.28c-1.243 0-1.63.771-1.63 1.562v1.766h2.815l-.45 3.667h-2.365V23.691c4.956-.782 8.71-5.058 8.71-10.203 0-5.713-4.631-10.344-10.344-10.344S1.656 7.775 1.656 13.488c0 5.145 3.754 9.421 8.71 10.203z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/dgslandscaping902/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-14 h-14 rounded-full border border-cream-darker flex items-center justify-center text-dark-green hover:bg-dark-green hover:text-cream hover:border-dark-green transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-dark-green/30 mb-8">Navigation</h4>
            <ul className="space-y-4">
              <li><Link href="/services" className="text-sm font-black text-dark-green/60 hover:text-primary-green transition-colors uppercase tracking-widest">Services</Link></li>
              <li><Link href="/about" className="text-sm font-black text-dark-green/60 hover:text-primary-green transition-colors uppercase tracking-widest">Our Story</Link></li>
              <li><Link href="/portfolio" className="text-sm font-black text-dark-green/60 hover:text-primary-green transition-colors uppercase tracking-widest">Portfolio</Link></li>
              <li><Link href="/contact" className="text-sm font-black text-dark-green/60 hover:text-primary-green transition-colors uppercase tracking-widest">Contact</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-dark-green/30 mb-8">Offerings</h4>
            <ul className="space-y-4">
              <li><Link href="/services" className="text-sm font-black text-dark-green/60 hover:text-primary-green transition-colors uppercase tracking-widest block">Lawn Maintenance</Link></li>
              <li><Link href="/services" className="text-sm font-black text-dark-green/60 hover:text-primary-green transition-colors uppercase tracking-widest block">Snow Removal</Link></li>
              <li><Link href="/services" className="text-sm font-black text-dark-green/60 hover:text-primary-green transition-colors uppercase tracking-widest block">Landscape Install</Link></li>
              <li><Link href="/services" className="text-sm font-black text-dark-green/60 hover:text-primary-green transition-colors uppercase tracking-widest block">Excavation</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-dark-green/30 mb-8">Contact</h4>
            <div className="space-y-6">
              <p className="text-sm font-black text-dark-green leading-snug uppercase tracking-widest">
                Based in Sackville. <br />
                Serving all of Halifax & HRM.
              </p>
              <p className="text-xl font-black text-dark-green hover:text-primary-green transition-colors">
                <a href="tel:9028805808">(902) 880-5808</a>
              </p>
              <p className="text-sm font-black text-dark-green/60 hover:text-primary-green transition-colors break-all">
                <a href="mailto:dgslandscaping902@gmail.com">dgslandscaping902@gmail.com</a>
              </p>
            </div>
          </div>
          </div>


        <div className="pt-12 border-t border-cream-darker flex flex-col md:flex-row justify-between items-center gap-8 text-dark-green/40 text-[10px] font-black uppercase tracking-[0.3em]">
          <p>© {new Date().getFullYear()} DGS Landscaping. Built with precision.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-dark-green transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-dark-green transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
