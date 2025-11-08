import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: 'Velodent became our always-on front desk. Patients book themselves and our team focuses on care.',
    name: 'Dr. Alyssa K., UrbanSmile Dental',
  },
  {
    quote: 'Insurance verification went from manual to automatic. Denials dropped and cash flow improved.',
    name: 'Mark R., Practice Manager',
  },
  {
    quote: 'Our recall system finally works. Hygiene appointments are consistently full.',
    name: 'Samantha P., BrightOrtho',
  },
];

const faqs = [
  {
    q: 'How fast can we launch?',
    a: 'Most clinics go live in 10–14 days including integrations and training.'
  },
  {
    q: 'Is this HIPAA compliant?',
    a: 'Yes. We use secure, encrypted infrastructure with strict access controls and audit trails.'
  },
  {
    q: 'Do you integrate with our PMS/EHR?',
    a: 'We integrate with leading systems and offer custom connectors where needed.'
  },
  {
    q: 'What ROI should we expect?',
    a: 'We guarantee at least 2× ROI from automation efficiency within the first quarter.'
  },
  {
    q: 'Can the AI handle phone calls and SMS?',
    a: 'Yes. It manages inbound and outbound across phone, SMS, and web chat with human handoff.'
  },
];

export default function TestimonialsFAQ() {
  return (
    <section id="testimonials" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">What Our Clients Say</h2>
          <p className="text-black/70 text-sm md:text-base mt-2">Real outcomes from real practices.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl border border-black/10 p-6 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
              <div className="flex items-center gap-1 text-black mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-black" />
                ))}
              </div>
              <blockquote className="text-sm text-black/80">“{t.quote}”</blockquote>
              <figcaption className="mt-3 text-sm font-medium">{t.name}</figcaption>
            </figure>
          ))}
        </div>

        <div id="faq" className="mt-16">
          <h3 className="text-xl md:text-2xl font-semibold tracking-tight">Frequently Asked Questions</h3>
          <div className="mt-6 divide-y divide-black/10 border border-black/10 rounded-2xl overflow-hidden">
            {faqs.map((f) => (
              <details key={f.q} className="group p-4">
                <summary className="cursor-pointer list-none font-medium flex items-center justify-between">
                  <span>{f.q}</span>
                  <span className="text-sm opacity-60 group-open:rotate-180 transition-transform">⌄</span>
                </summary>
                <p className="mt-2 text-sm text-black/70">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
