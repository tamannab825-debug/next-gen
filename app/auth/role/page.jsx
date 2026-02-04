"use client";

import Link from "next/link";

export default function RoleSelectPage() {
  return (
    <div className="min-h-screen bg-[#f5f6fa] flex items-center justify-center px-6">

      <div className="max-w-6xl w-full space-y-12">

        {/* ================= HEADER ================= */}
        <div className="text-center space-y-3">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-red-50 flex items-center justify-center text-red-500 text-2xl font-bold shadow-sm">
            N
          </div>

          <h1 className="text-3xl font-semibold text-gray-900">
            Choose your role
          </h1>
          <p className="text-gray-500 text-sm">
            Continue based on how you’ll use the platform
          </p>
        </div>

        {/* ================= ROLE CARDS ================= */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Candidate */}
          <Link
            href="/optional2/dashboard"
            className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-red-50 opacity-0 group-hover:opacity-100 transition" />

            <div className="relative z-10 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-red-100 text-red-500 flex items-center justify-center text-2xl">
                🎯
              </div>

              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-red-600">
                Candidate
              </h3>

              <p className="text-sm text-gray-500 leading-relaxed">
                Prove your skills through real job trials, get AI feedback,
                and land jobs faster without resume bias.
              </p>

              <span className="inline-block mt-4 text-sm text-red-500 font-medium">
                Continue →
              </span>
            </div>
          </Link>

          {/* Company */}
          <Link
            href="/optional3/dashboard"
            className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-red-50 opacity-0 group-hover:opacity-100 transition" />

            <div className="relative z-10 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-red-100 text-red-500 flex items-center justify-center text-2xl">
                🏢
              </div>

              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-red-600">
                Company
              </h3>

              <p className="text-sm text-gray-500 leading-relaxed">
                Post roles, assign skill trials, evaluate real performance,
                and hire top talent with confidence.
              </p>

              <span className="inline-block mt-4 text-sm text-red-500 font-medium">
                Continue →
              </span>
            </div>
          </Link>

          {/* Recruiter */}
          <Link
            href="/optional/dashboard"
            className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-red-50 opacity-0 group-hover:opacity-100 transition" />

            <div className="relative z-10 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-red-100 text-red-500 flex items-center justify-center text-2xl">
                🤝
              </div>

              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-red-600">
                Recruiter
              </h3>

              <p className="text-sm text-gray-500 leading-relaxed">
                Manage pipelines, track trials, collaborate with companies,
                and close hiring faster.
              </p>

              <span className="inline-block mt-4 text-sm text-red-500 font-medium">
                Continue →
              </span>
            </div>
          </Link>

        </div>

        {/* ================= FOOTER CTA ================= */}
        <p className="text-center text-sm text-gray-500">
          Not sure yet?{" "}
          <Link href="/" className="text-red-500 font-medium hover:underline">
            Learn how it works
          </Link>
        </p>

      </div>
    </div>
  );
}
