"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formspree.io/f/xeepnwqn", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          <div>
            <span className="text-accent-green font-bold tracking-[0.2em] uppercase text-sm mb-6 block">Inquiries</span>
            <h2 className="text-5xl md:text-7xl font-bold text-dark-green mb-8 leading-tight">
              Let&apos;s Build Your <br />
              <span className="text-primary-green">Sanctuary</span>
            </h2>
            <p className="text-xl text-dark-green font-medium leading-relaxed mb-12 max-w-lg">
              Every project begins with a conversation. Share your vision with us, and let&apos;s explore how we can transform your outdoor space.
            </p>

            <div className="space-y-12">
              <div className="flex items-start gap-6">
                <div className="text-accent-green font-black text-xs uppercase tracking-widest pt-2">Call</div>
                <div>
                  <a href="tel:9028805808" className="text-3xl font-black text-dark-green hover:text-primary-green transition-colors">(902) 880-5808</a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="text-accent-green font-black text-xs uppercase tracking-widest pt-2">Email</div>
                <div className="min-w-0 flex-1">
                  <a href="mailto:dgslandscaping902@gmail.com" className="text-xl sm:text-2xl md:text-3xl font-black text-dark-green hover:text-primary-green transition-colors underline decoration-primary-green/30 underline-offset-8 break-all sm:break-normal">dgslandscaping902@gmail.com</a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-12 md:p-16 rounded-[3rem] shadow-2xl border border-cream-darker relative overflow-hidden">
            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-in fade-in zoom-in duration-500">
                <div className="w-24 h-24 bg-primary-green/10 rounded-full flex items-center justify-center text-primary-green mb-8">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-12 h-12">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-4xl font-black text-dark-green mb-4 uppercase">Message Sent!</h3>
                <p className="text-xl text-dark-green/60 font-medium max-w-xs mb-10">
                  Thank you for reaching out. We&apos;ll be in touch shortly to discuss your project.
                </p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="text-primary-green font-black uppercase tracking-widest text-sm hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-dark-green/40">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    disabled={status === "submitting"}
                    className="w-full bg-transparent border-b-2 border-cream-darker px-0 py-4 text-xl font-bold text-dark-green outline-none focus:border-primary-green transition-colors placeholder:text-dark-green/10 disabled:opacity-50"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-dark-green/40">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    disabled={status === "submitting"}
                    className="w-full bg-transparent border-b-2 border-cream-darker px-0 py-4 text-xl font-bold text-dark-green outline-none focus:border-primary-green transition-colors placeholder:text-dark-green/10 disabled:opacity-50"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-dark-green/40">Project Type</label>
                  <select 
                    name="project-type" 
                    disabled={status === "submitting"}
                    className="w-full bg-transparent border-b-2 border-cream-darker px-0 py-4 text-xl font-bold text-dark-green outline-none focus:border-primary-green transition-colors appearance-none cursor-pointer disabled:opacity-50"
                  >
                    <option>Lawn Maintenance</option>
                    <option>Snow Removal</option>
                    <option>Landscape Install</option>
                    <option>Weed & Grub Control</option>
                    <option>Core Aeration</option>
                    <option>Excavation</option>
                    <option>Other / General Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-dark-green/40">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell us about your outdoor dreams..."
                    disabled={status === "submitting"}
                    className="w-full bg-transparent border-b-2 border-cream-darker px-0 py-4 text-xl font-bold text-dark-green outline-none focus:border-primary-green transition-colors placeholder:text-dark-green/10 resize-none disabled:opacity-50"
                  ></textarea>
                </div>

                {status === "error" && (
                  <p className="text-red-500 font-bold text-sm">Something went wrong. Please try again or call us directly.</p>
                )}

                <button 
                  type="submit" 
                  disabled={status === "submitting"}
                  className="w-full bg-dark-green text-cream font-black py-6 rounded-2xl text-xl hover:bg-primary-green transition-all shadow-xl shadow-dark-green/20 group flex items-center justify-center disabled:bg-dark-green/50 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? (
                    <span className="w-6 h-6 border-4 border-cream/30 border-t-cream rounded-full animate-spin" />
                  ) : (
                    <>
                      Request a Consultation
                      <span className="inline-block ml-4 group-hover:translate-x-2 transition-transform">→</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
