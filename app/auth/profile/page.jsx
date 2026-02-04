"use client";

import Link from "next/link";

export default function BasicProfilePage() {
  return (
    <div className="min-h-screen grid lg:grid-cols-3 bg-[#f5f6fa]">

       {/* ================= LEFT BRAND PANEL ================= */}
<div className="hidden lg:flex lg:col-span-1 relative flex-col justify-between p-12 overflow-hidden bg-linear-to-br from-red-500 via-red-600 to-rose-600 text-white">

 {/* soft shapes */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/20 rounded-full" />
        <div className="absolute bottom-25 left-16 w-20 h-20 bg-white/20 rounded-full" />

  {/* CONTENT */}
  <div className="relative z-10">

    {/* logo */}
    <div className="w-14 h-14 rounded-2xl bg-red-50 text-red-500 backdrop-blur flex items-center justify-center text-2xl font-bold shadow-lg">
      N
    </div>

    <h1 className="text-4xl font-semibold mt-14 leading-tight tracking-tight">
      Hire Smarter.  
      <br />
      Not Harder.
    </h1>

    <p className="mt-5 text-white/85 max-w-sm leading-relaxed">
      Skill-based hiring powered by AI trials, real performance data, and
      transparent candidate evaluation.
    </p>

    {/* feature bullets */}
    <div className="mt-10 space-y-3 text-sm text-white/90">
      <p>✔ Real-world job challenges</p>
      <p>✔ AI feedback & scoring</p>
      <p>✔ Faster hiring cycles</p>
    </div>

  </div>

  {/* STATS CARDS */}
  <div className="relative z-10 grid grid-cols-3 gap-4">

    <div className="bg-white/15 backdrop-blur rounded-2xl p-4">
      <p className="text-2xl font-semibold">5K+</p>
      <p className="text-xs text-white/80">Trials</p>
    </div>

    <div className="bg-white/15 backdrop-blur rounded-2xl p-4">
      <p className="text-2xl font-semibold">900+</p>
      <p className="text-xs text-white/80">Companies</p>
    </div>

    <div className="bg-white/15 backdrop-blur rounded-2xl p-4">
      <p className="text-2xl font-semibold">95%</p>
      <p className="text-xs text-white/80">Accuracy</p>
    </div>

  </div>

</div>

       {/* Right Side */}
        <div className="flex lg:col-span-2 items-center justify-center py-6 px-6">
             <div className="bg-white  rounded-3xl shadow-sm w-full max-w-2xl  p-8 space-y-7">

        {/* ===== LOGO ===== */}
        <div className="text-center">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-red-50 flex items-center justify-center text-red-500 text-2xl font-bold">
            N
          </div>
          <h2 className="text-2xl font-semibold mt-3 text-gray-900">
            Complete Your Profile
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Tell us a little about yourself to get started
          </p>
        </div>

        {/* ===== PROFILE IMAGE ===== */}
        <div className="flex justify-center">
          <div className="relative">
            <img src="/images/photo" alt="photo" className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center" />
            <button className="absolute bottom-0 right-0 bg-red-400 hover:bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              Upload
            </button>
          </div>
        </div>

        {/* ===== FORM ===== */}
        <div className="grid md:grid-cols-2 gap-5">

          <div>
            <label className="text-sm text-gray-500">Full Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full text-gray-400 mt-1 px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-400 outline-none"
            />
          </div>

          <div>
            <label className="text-sm text-gray-500">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full text-gray-400 mt-1 px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-400 outline-none"
            />
          </div>

          <div>
            <label className="text-sm text-gray-500">Phone</label>
            <input
              type="tel"
              placeholder="+91 XXXXX XXXXX"
              className="w-full text-gray-400 mt-1 px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-400 outline-none"
            />
          </div>

          <div>
            <label className="text-sm text-gray-500">Location</label>
            <input
              type="text"
              placeholder="City, Country"
              className="w-full text-gray-400 mt-1 px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-400 outline-none"
            />
          </div>

          <div className="md:col-span-2">
            <label className="text-sm text-gray-500">Short Bio</label>
            <textarea
              rows="3"
              placeholder="Tell something about yourself..."
              className="w-full text-gray-400 mt-1 px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-400 outline-none resize-none"
            />
          </div>

        </div>

        {/* ===== ACTION ===== */}
        <button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-medium transition">
          Save & Continue
        </button>

        <p className="text-center text-xs text-gray-400">
          You can edit this later in settings
        </p>

      </div>
        </div>
     
    </div>
  );
}
