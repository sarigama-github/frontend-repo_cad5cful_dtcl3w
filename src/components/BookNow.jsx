import React from 'react';

export default function BookNow() {
  return (
    <section id="book" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Schedule a Private Demo or Strategy Call</h2>
        <p className="text-black/70 text-sm md:text-base mt-2">Pick a time that works for you. No pressure — we’ll show you what’s possible.</p>
        <div className="mt-6">
          <a
            href="https://cal.com/velodent-ogbkfv/20min"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-black px-6 py-3 text-sm font-medium hover:shadow-[0_2px_0_0_rgba(0,0,0,1)] active:translate-y-[1px] transition-all"
          >
            Open Booking Page
          </a>
        </div>
        <div className="mt-10 rounded-2xl border border-black/10 overflow-hidden">
          <iframe
            src="https://cal.com/velodent-ogbkfv/20min?embed=true"
            className="w-full h-[720px]"
            title="Cal.com Booking"
          />
        </div>
      </div>
    </section>
  );
}
