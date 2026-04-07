"use client";
import { BriefcaseBusiness,  UserRoundCheck,  MapPinPlusInside, Icon   } from 'lucide-react';

export default function PublicCompanyProfile() {
  return (
    <div className="min-h-screen bg-[#f5f7fb] p-4 sm:p-6 space-y-6">

      {/* ================= HEADER / COVER ================= */}
      <div className="relative bg-white rounded-2xl shadow-sm ">
        <img
          src="/images/cover1.jpg"
          alt="Company cover"
          className="h-68 w-full object-cover"
        />

        <div className="flex flex-col sm:flex-row gap-4 p-5">
          <img
            src="/images/company.jfif"
            className="w-20 h-20 rounded-xl bg-gray-100 border"
            alt="Company logo"
          />

          <div className="flex-1 bg-transparent">
            <h1 className="text-xl font-semibold text-gray-900">
              TechNova Solutions
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Information Technology • 201–500 Employees
            </p>

            <div className="flex flex-wrap gap-2 mt-3">
              <span className="text-xs px-3 py-1 text-gray-500 rounded-full bg-gray-100">
                Product Company
              </span>
              <span className="text-xs px-3 py-1 text-gray-500 rounded-full bg-gray-100">
                Bangalore
              </span>
              <span className="text-xs px-3 py-1 text-gray-500 rounded-full bg-gray-100">
                Hiring Actively
              </span>
            </div>
          </div>
             
          <div className="flex gap-2 self-start">
            <button className="px-4 py-2 text-sm text-gray-500 rounded-lg border hover:bg-gray-50">
              Follow
            </button>
            <a href="/optional/companyJob">
              <button className="px-4 py-2 text-sm rounded-lg bg-red-500 text-white hover:bg-red-600">
              View Jobs
            </button>
            </a>
          </div>
        </div>
      </div>


      {/* ================= MAIN CONTENT ================= */}
      <div className="grid lg:grid-cols-3 gap-6">

        {/* ===== LEFT (ABOUT + TECH STACK) ===== */}
        <div className="lg:col-span-2 space-y-6">
     
     
      {/* ================= QUICK STATS ================= */}
      <div className="grid sm:grid-cols-3 gap-4">
        {[
          { label: "Open Jobs", value: "48", Icon:BriefcaseBusiness },
          { label: "Followers", value: "12.4K", Icon: UserRoundCheck  },
          { label: "Locations", value: "5 Cities" ,Icon: MapPinPlusInside  },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-white rounded-xl p-5 shadow-sm text-center"
          >
          <button className="rounded-full p-3 bg-red-50">
             {stat.Icon && <stat.Icon className='w-10 h-10  m-auto text-red-500'/>}
          </button>
            <p className="text-xl font-semibold text-gray-900">
              {stat.value}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
          {/* ABOUT */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              About Company
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              TechNova Solutions is a fast-growing product-based company
              building scalable digital platforms for global clients.
              We focus on clean architecture, modern UI systems, and
              performance-driven engineering.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quis facere nostrum tempore, laborum possimus facilis molestias voluptatum modi! Perferendis magni illum pariatur deleniti labore architecto maxime recusandae repudiandae ipsam?
            </p>
          </div>


          {/* ACTIVE JOB ROLES */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Actively Hiring For
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Frontend Developer",
                "UI / UX Designer",
                "Backend Engineer",
                "Product Manager",
              ].map((role, i) => (
                <div
                  key={i}
                  className="border rounded-xl p-4 hover:shadow transition"
                >
                  <p className="font-medium text-gray-800">
                    {role}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Multiple openings available
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ===== RIGHT (LOCATIONS + HIRING INFO) ===== */}
        <div className="space-y-6">

          {/* LOCATIONS */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold mb-4 text-lg text-gray-900">
              Hiring Locations
            </h3>

            <div className="space-y-3">
              {[
                "Bangalore",
                "Delhi NCR",
                "Mumbai",
                "Hyderabad",
              ].map((city, i) => (
                <div
                  key={i}
                  className="flex justify-between text-sm"
                >
                  <span className="text-gray-600">{city}</span>
                  <span className="text-green-600">
                    High Demand
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* COMPANY HIRING NOTE */}
          <div className="bg-linear-to-br from-red-500 to-pink-500 text-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold">
              Hiring Focus
            </h3>
            <p className="text-sm opacity-90 mt-2">
              Actively expanding engineering and design teams
              for Q3–Q4 growth.
            </p>
          </div>

          
          {/* TECH STACK */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Tech Stack
            </h2>

            <div className="flex flex-wrap gap-2 text-gray-500">
              {[
                "React",
                "Next.js",
                "Node.js",
                "Tailwind CSS",
                "MongoDB",
                "AWS",
              ].map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 rounded-full border bg-white text-red-500"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
