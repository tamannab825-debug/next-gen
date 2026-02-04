"use client";

import Link from "next/link";

export default function LoginPage() {
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


      {/* ================= RIGHT LOGIN PANEL ================= */}
      <div className="flex lg:col-span-2 items-center justify-center px-6">

        <div className="bg-white rounded-3xl shadow-sm w-full max-w-md p-8 space-y-6">

          {/* LOGO */}
          <div className="text-center">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-red-50 flex items-center justify-center text-red-500 text-2xl font-bold">
              N
            </div>
            <h2 className="text-2xl font-semibold mt-3 text-gray-900">
              Welcome Back
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Login to your dashboard
            </p>
          </div>

          {/* ===== FORM ===== */}
        <div className="space-y-4">

          <div>
            <label className="text-sm text-gray-500">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-400 outline-none"
            />
          </div>

          <div>
            <label className="text-sm text-gray-500">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-400 outline-none"
            />
          </div>

          

          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2 text-gray-500">
              <input type="checkbox" className="rounded" />
              Remember me
            </label>
            <Link href="/auth/forgot" className="text-red-500 hover:underline">
              Forgot password?
            </Link>
          </div>

          <div className="space-y-3">

          <button className="w-full flex items-center justify-center gap-3 border border-blue-500 text-blue-400 rounded-xl py-3 hover:bg-gray-50 transition text-sm font-medium">
            <img 
             src="/images/google.png" 
              className="w-5 h-5" 
              alt="Google"
              />
            Continue with Google
          </button>

           <div className="flex items-center gap-3 text-gray-400 text-sm">
            <div className="flex-1 h-px bg-gray-200"></div>
              or
            <div className="flex-1 h-px bg-gray-200"></div>
           </div>

         </div>

          <div className="w-full">
                 <Link
                 href="/auth/role"
                className="block w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-medium transition text-center"
           >
             login
           </Link>
         </div>

        </div> 

          <p className="text-center text-sm text-gray-500">
            New here?{" "}
            <Link href="/auth/signup" className="text-red-500 font-medium">
              Create account
            </Link>
          </p>

        </div>
      </div>

    </div>
  );
}
