"use client";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-[#f5f6fa] min-h-screen text-gray-800">
      

        {/* ================= TOP NAV ================= */}
      <header className="flex justify-between items-center px-8 py-5 bg-white shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-red-500 flex items-center justify-center text-white font-bold">
            N
          </div>
          <h1 className="text-xl font-semibold text-gray-900">NextGen</h1>
        </div>

        <div className="flex gap-4">
          <Link
            href="/auth/login"
            className="text-sm text-gray-600 hover:text-red-500 transition"
          >
            Login
          </Link>
          <Link
            href="/auth/signup"
            className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600 transition"
          >
            Get Started
          </Link>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-16 grid lg:grid-cols-2 gap-12 items-center">
        
       <div>
          <h1 className="text-4xl font-bold leading-tight text-gray-900">
            The Future of <span className="text-red-500">Skill-Based Hiring</span>
          </h1>

          <p className="text-gray-500 mt-6 text-md max-w-lg">
            Connect candidates, companies, recruiters, and institutes on one powerful platform. 
            Hire smarter, learn faster, and grow together.
          </p>

          <div className="flex gap-4 mt-8">
            <Link
              href="/auth/signup"
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl text-sm font-medium shadow-md transition"
            >
              Get Started
            </Link>

            <Link
              href="/auth/login"
              className="bg-white border px-6 py-3 rounded-xl text-sm hover:shadow transition"
            >
              Login
            </Link>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-10 text-sm text-gray-600">
            <div>
              <p className="text-2xl font-semibold text-gray-900">10K+</p>
              Users
            </div>
            <div>
              <p className="text-2xl font-semibold text-gray-900">500+</p>
              Companies
            </div>
            <div>
              <p className="text-2xl font-semibold text-gray-900">120+</p>
              Institutes
            </div>
          </div>
        </div>

        <img src="/images/3.jpg.jpeg" alt="" className="bg-white w-full rounded-3xl p-8 shadow-sm h-72 flex items-center justify-center" />

      </section>

      {/* ================= ROLE SELECTION ================= */}
      <section className="px-8 pb-20">

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">

          {/* Candidate */}
          <Link
            href="/auth/signup"
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition group"
          >
            <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-red-500 text-xl mb-4">
              🎯
            </div>
            <h3 className="font-semibold text-lg group-hover:text-red-500">
              I’m a Candidate
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              Prove your skills with real job trials and get hired faster.
            </p>
          </Link>

          {/* Company */}
          <Link
            href="/auth/signup"
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition group"
          >
            <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-red-500 text-xl mb-4">
              🏢
            </div>
            <h3 className="font-semibold text-lg group-hover:text-red-500">
              I’m a Company
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              Hire talent through skill-based challenges instead of resumes.
            </p>
          </Link>

          {/* Recruiter */}
          <Link
            href="/auth/signup"
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition group"
          >
            <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-red-500 text-xl mb-4">
              🤝
            </div>
            <h3 className="font-semibold text-lg group-hover:text-red-500">
              I’m a Recruiter
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              Manage candidates, trials, and hiring pipelines easily.
            </p>
          </Link>

           {/* Institute */}
          <Link
            href="/auth/signup"
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition group"
          >
            <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-red-500 text-xl mb-4">
            🎓
            </div>
            <h3 className="font-semibold text-lg group-hover:text-red-500">
              I’m an Institute
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              Train & place students
            </p>
          </Link>

        </div>
      </section>

   {/* ================= HOW IT WORKS ================= */}
<section className="bg-white py-20 overflow-hidden">

  <div className="max-w-7xl mx-auto px-6">

    {/* Header */}
    <div className="flex justify-between items-end mb-14">
      <div>
        <p className="text-red-500 text-sm font-medium mb-1">
          Simple • Fast • Skill-Based
        </p>
        <h2 className="text-3xl font-semibold text-gray-900">
          How Hiring Works
        </h2>
      </div>

      <div className="hidden md:block h-0.5 w-40 bg-linear-to-r from-red-400 to-transparent" />
    </div>

    {/* Steps */}
    <div className="grid md:grid-cols-4 gap-8 relative">

      {[
        { title: "Post Job", icon: "📢" },
        { title: "Skill Trials", icon: "🧪" },
        { title: "AI Evaluation", icon: "📊" },
        { title: "Hire Talent", icon: "🎯" },
      ].map((step, i) => (
        <div
          key={i}
          className="group relative bg-[#f5f6fa] rounded-3xl p-7 
           hover:bg-white hover:shadow-xl 
          transition-all duration-300 hover:-translate-y-2"
        >

          {/* Glow effect */}
          <div className="absolute inset-0 rounded-3xl bg-red-500/5 opacity-0 group-hover:opacity-100 transition" />

          {/* Step number */}
          <div className="absolute -top-4 left-6 bg-white shadow px-3 py-1 rounded-full text-xs font-semibold text-red-500">
            {String( i + 1).padStart(2, "0")}
          </div>

          {/* Icon */}
          <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-2xl text-red-500 mb-5 group-hover:scale-110 transition">
            {step.icon}
          </div>

          <h4 className="font-semibold text-gray-800 text-lg group-hover:text-red-500 transition">
            {step.title}
          </h4>

          <p className="text-sm text-gray-500 mt-2 leading-relaxed">
            Hire faster with real-world skill validation instead of resumes.
          </p>

          {/* Progress dot */}
          <div className="mt-6 w-8 h-1 bg-red-400 rounded-full opacity-0 group-hover:opacity-100 transition" />
        </div>
      ))}

    </div>

  </div>

</section>

      {/* ================= CTA ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="bg-red-500 rounded-3xl p-12 text-white text-center">

          <h2 className="text-3xl font-semibold">
            Start Hiring Smarter Today
          </h2>

          <p className="mt-3 text-red-100">
            Join thousands using skill-first recruitment
          </p>

          <button className="mt-6 bg-white text-red-500 px-7 py-3 rounded-xl font-medium hover:bg-gray-100 transition">
            Create Account
          </button>

        </div>

      </section>

    </div>
  );
}