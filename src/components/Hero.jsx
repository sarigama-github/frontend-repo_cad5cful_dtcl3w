import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative bg-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/80 to-white"></div>
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">AI Automation for Modern Dental Clinics</h1>
          <p className="text-sm md:text-base text-black/70">Velodent streamlines front-desk ops, patient onboarding, and recall systems using safe, compliant AI.</p>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="w-full max-w-3xl aspect-video overflow-hidden rounded-2xl border border-black/10 shadow-[0_10px_40px_rgba(0,0,0,0.06)] bg-white">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Nw478YoO3og?si=0Pcoc1145T6JDndl"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

        <div className="mt-8 text-center space-y-3" id="book-section">
          <p className="text-sm md:text-base">Book a 20-Minute Discovery Call — Choose a Time That Works for You</p>
          <a
            href="https://cal.com/velodent-ogbkfv/20min"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-black px-6 py-3 text-sm font-medium hover:shadow-[0_2px_0_0_rgba(0,0,0,1)] active:translate-y-[1px] transition-all"
          >
            Book Now
          </a>
        </div>
      </div>
    </section>
  );
}
