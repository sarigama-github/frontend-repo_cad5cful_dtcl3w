import React from 'react';

export default function Dashboard() {
  return (
    <section id="dashboard" className="min-h-screen bg-white flex items-center">
      <div className="mx-auto w-full max-w-md px-4">
        <div className="text-center mb-6">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">Sign in to Dashboard</h1>
          <p className="text-sm text-black/70 mt-2">Access performance analytics and automation controls.</p>
        </div>
        <form className="rounded-2xl border border-black/10 p-6 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
          <label className="block text-sm font-medium mb-1">Email</label>
          <input type="email" className="w-full rounded-lg border border-black/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black/30" placeholder="you@clinic.com" />
          <label className="block text-sm font-medium mt-4 mb-1">Password</label>
          <input type="password" className="w-full rounded-lg border border-black/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black/30" placeholder="••••••••" />
          <div className="mt-4 flex items-center justify-between">
            <button type="submit" className="rounded-full border border-black px-5 py-2 text-sm font-medium hover:shadow-[0_2px_0_0_rgba(0,0,0,1)] active:translate-y-[1px] transition-all">Sign In</button>
            <a href="#" className="text-sm underline underline-offset-4">Forgot Password?</a>
          </div>
        </form>
      </div>
    </section>
  );
}
