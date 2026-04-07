import Image from "next/image";
import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section id="about" className="py-32 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-7 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <FadeIn direction="right" delay={100}>
                  <div className="relative h-80 rounded-[2rem] overflow-hidden shadow-2xl">
                    <Image
                      src="/IMG_7530.jpeg"
                      alt="Landscaping Detail"
                      fill
                      className="object-cover"
                    />
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
                  <div className="relative h-80 rounded-[2rem] overflow-hidden shadow-2xl">
                    <Image
                      src="/team.jpeg"
                      alt="Garden Design"
                      fill
                      className="object-cover"
                    />
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
                <div className="relative aspect-[16/9] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-primary-green">
                        <Image
                            src="/IMG_0109.png"
                            alt="DGS Landscaping Toy Drive"
                            fill
                            className="object-cover"
                        />
                </div>
               </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
