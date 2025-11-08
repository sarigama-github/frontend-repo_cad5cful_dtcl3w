import React from 'react';

const cases = [
  {
    title: 'UrbanSmile Dental — 2.4x ROI in 60 Days',
    metrics: [
      '34% lift in new-patient bookings',
      '22% no-show reduction via smart reminders',
      'Insurance eligibility time cut from 12m to 2m',
    ],
  },
  {
    title: 'BrightOrtho — 18% Faster Chair Utilization',
    metrics: [
      'Automated braces-tightening recalls improved retention',
      'Lead-to-appointment conversion +27%',
      'Front-desk workload reduced by 41%',
    ],
  },
  {
    title: 'FamilyCare Dental — $146k ARR from Reactivations',
    metrics: [
      'Dormant patient re-engagement at 19% response rate',
      'Self-serve rescheduling cut call volume by 36%',
      'Dashboard visibility improved treatment acceptance',
    ],
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Case Studies</h2>
          <p className="text-black/70 text-sm md:text-base mt-2">Proven outcomes across multi-location dental groups.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((cs) => (
            <article key={cs.title} className="rounded-2xl border border-black/10 p-6 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
              <h3 className="font-medium">{cs.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-black/70 list-disc list-inside">
                {cs.metrics.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
              <a href="#" className="mt-4 inline-block text-sm underline underline-offset-4">Read full case study</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
