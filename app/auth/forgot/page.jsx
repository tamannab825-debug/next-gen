"use client";

import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen bg-[#f5f6fa] grid lg:grid-cols-3">

      {/* ========= LEFT DESIGN PANEL ========= */}
      <div className="hidden lg:flex flex-col justify-center px-16 bg-linear-to-br from-red-600 to-red-400 text-white relative">

        <h1 className="text-4xl font-semibold leading-tight">
          Reset Your Password
        </h1>

        <p className="mt-4 text-red-100 max-w-md">
          Don’t worry — it happens to the best of us.  
          Enter your email and we’ll send you a secure reset link.
        </p>

        <div className="mt-12 space-y-4 text-sm text-red-100">
          <p>✔ Secure reset process</p>
          <p>✔ Instant email delivery</p>
          <p>✔ Protected account access</p>
        </div>

        {/* soft shapes */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/20 rounded-full" />
        <div className="absolute bottom-16 left-16 w-20 h-20 bg-white/20 rounded-full" />
      </div>

      {/* ========= RIGHT FORM ========= */}
      <div className="flex lg:col-span-2 items-center justify-center px-6">

        <div className="bg-white rounded-3xl shadow-sm w-full max-w-md p-8 space-y-6">

          {/* Logo */}
          <div className="text-center">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-red-50 flex items-center justify-center text-red-500 text-2xl font-bold">
              N
            </div>

            <h2 className="text-2xl font-semibold mt-3 text-gray-900">
              Forgot Password
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Enter your registered email address
            </p>
          </div>

          {/* Form */}
          <div className="space-y-4">

            <div>
              <label className="text-sm text-gray-500">Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-400 outline-none"
              />
            </div>

            <button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-medium transition">
              Send Reset Link
            </button>

          </div>

          {/* Back to login */}
          <p className="text-center text-sm text-gray-500">
            Remembered your password?{" "}
            <Link href="/auth/login" className="text-red-500 font-medium hover:underline">
              Back to login
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}
