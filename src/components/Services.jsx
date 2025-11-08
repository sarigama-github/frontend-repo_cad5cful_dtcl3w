import React from 'react';
import { Bot, Calendar, ShieldCheck, CreditCard, PhoneCall, BarChart3 } from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: 'AI Receptionist',
    desc: 'Automate intake, triage, and front-desk conversations across phone, SMS, and web.',
  },
  {
    icon: Calendar,
    title: 'Appointment & Recall Automation',
    desc: 'Auto-bookings, reschedules, and 6-month hygiene recalls with smart reminders.',
  },
  {
    icon: ShieldCheck,
    title: 'Insurance Verification',
    desc: 'Real-time eligibility checks and claims pre-authorization to reduce denials.',
  },
  {
    icon: CreditCard,
    title: 'Payment & Claim Assistance',
    desc: 'Collect copays, send invoices, and guide patients through claims with AI help.',
  },
  {
    icon: PhoneCall,
    title: 'Lead Follow-up Automation',
    desc: 'Convert ad leads and re-engage dormant patients with multi-channel outreach.',
  },
  {
    icon: BarChart3,
    title: 'Dashboard & Analytics',
    desc: 'Monitor bookings, conversion, and ROI with a real-time performance dashboard.',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Services</h2>
          <p className="text-black/70 text-sm md:text-base mt-2">Velodent’s full AI automation suite — designed for measurable outcomes.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white p-6 transition-transform duration-300 hover:-translate-y-1 shadow-[0_10px_40px_rgba(0,0,0,0.05)]"
            >
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-white/0 via-white/40 to-white/80"></div>
              <div className="flex items-center gap-3">
                <span className="p-2 rounded-full border border-black/10">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-medium">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-black/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
