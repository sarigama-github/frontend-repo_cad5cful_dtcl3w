import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import TestimonialsFAQ from './components/TestimonialsFAQ';
import BookNow from './components/BookNow';
import Dashboard from './components/Dashboard';

export default function App() {
  const [route, setRoute] = useState(() => window.location.hash || '#home');

  React.useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash || '#home');
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const page = useMemo(() => {
    if (route === '#/dashboard') return <Dashboard />;
    if (route === '#/book') return <BookNow />;
    return (
      <>
        <Hero />
        <section id="about" className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">About Velodent</h2>
            <p className="text-black/70 text-sm md:text-base mt-2">We build compliant AI systems that automate front office workflows for modern dental groups. Designed for reliability, measurable ROI, and effortless patient experiences.</p>
          </div>
        </section>
        <Services />
        <CaseStudies />
        <TestimonialsFAQ />
        <BookNow />
      </>
    );
  }, [route]);

  return (
    <div className="min-h-screen bg-white text-black font-inter">
      <Navbar />
      {page}
      <footer className="bg-white border-t border-black/10 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm opacity-70">© {new Date().getFullYear()} Velodent. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#services" className="hover:opacity-70">Services</a>
            <a href="#case-studies" className="hover:opacity-70">Case Studies</a>
            <a href="#testimonials" className="hover:opacity-70">Testimonials</a>
            <a href="#faq" className="hover:opacity-70">FAQ</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
