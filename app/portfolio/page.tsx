import Portfolio from "@/components/Portfolio";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export default function PortfolioPage() {
  return (
    <div className="pt-32">
      <div className="bg-dark-green py-24 text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn direction="down">
            <span className="text-accent-green font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Selected Works</span>
            <h1 className="text-5xl md:text-8xl font-black mb-8 uppercase text-cream font-heading">Our Portfolio</h1>
            <p className="text-xl md:text-2xl text-cream/70 max-w-3xl mx-auto font-medium">
              Explore a selection of our most impactful landscaping transformations and living masterpieces.
            </p>
          </FadeIn>
        </div>
      </div>
      <Portfolio />
      <section className="bg-cream py-24 border-t border-cream-darker text-center">
        <div className="max-w-3xl mx-auto px-4">
          <FadeIn>
            <h2 className="text-4xl font-black text-dark-green mb-8 uppercase">Ready to Transform Your Property?</h2>
            <Link
              href="/contact"
              className="inline-block bg-primary-green text-cream px-10 py-5 rounded-full font-black text-lg hover:bg-dark-green transition-all shadow-xl shadow-primary-green/20 uppercase tracking-widest"
            >
              Request a Consultation
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
