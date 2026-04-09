import Contact from "@/components/Contact";

export default function ContactPage() {
  return (
    <div className="pt-32">
      <div className="bg-dark-green py-24 text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent-green font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Get In Touch</span>
          <h1 className="text-5xl md:text-8xl font-black mb-8 uppercase text-cream">Contact Us</h1>
          <p className="text-xl md:text-2xl text-cream/70 max-w-3xl mx-auto font-medium">
            Ready to bring your landscaping vision to life? Reach out for a consultation and estimate.
          </p>
        </div>
      </div>
      <Contact />
    </div>
  );
}
