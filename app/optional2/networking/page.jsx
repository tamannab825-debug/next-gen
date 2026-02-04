"use client";

import { useState } from "react";

const people = [
  { name: "Rohit Sharma", role: "Frontend Developer" },
  { name: "Ananya Verma", role: "UI Designer" },
  { name: "Amit Patel", role: "Backend Engineer" },
  { name: "Neha Singh", role: "HR Recruiter" },
];

const companies = [
  { name: "Kleon Team", jobs: "120 Jobs" },
  { name: "Qerza Studio", jobs: "80 Jobs" },
  { name: "Omah Ku Inc.", jobs: "65 Jobs" },
  { name: "Ziro Studios", jobs: "92 Jobs" },
];

const fields = [
  { title: "Engineering", count: "1,245 vacancies" },
  { title: "Design", count: "860 vacancies" },
  { title: "Programming", count: "1,120 vacancies" },
  { title: "Marketing", count: "780 vacancies" },
];

export default function NetworkPage() {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-[#f5f6fa] p-6 mb-4 space-y-6">

      {/* ===== TOP BAR ===== */}
      <div className="bg-white rounded-xl p-5 shadow-sm flex flex-col lg:flex-row justify-between gap-4">

        <div>
          <h1 className="text-xl font-semibold text-gray-800">
            Professional Networking
          </h1>
          <p className="text-sm text-gray-500">
            Connect with people, companies & career fields
          </p>
        </div>

        <div className="flex w-full lg:w-90 border rounded-xl overflow-hidden">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search here..."
            className="flex-1 px-4 py-2 text-sm  outline-none"
          />
          <button className="bg-red-500  text-white  px-5 text-sm hover:bg-red-600 ">
            Search
          </button>
        </div>

      </div>

      

      {/* ===== MAIN GRID ===== */}
      <div className="grid grid-cols-12 gap-6">

        {/* LEFT – PEOPLE */}
        <div className="col-span-12 lg:col-span-4 bg-white rounded-xl p-5 shadow-sm">
          <h3 className="font-semibold text-gray-800 mb-4">
            Suggested People
          </h3>

          {people.map((p, i) => (
            <div key={i} className="flex items-center gap-3 py-3 border-b last:border-0">
              <img src="/images/profile.jpg" alt="" className="w-10 h-10 rounded-full bg-gray-200" />
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-800">{p.name}</p>
                <p className="text-xs text-gray-500">{p.role}</p>
              </div>
              <button className="text-xs border border-red-500 text-red-500 px-3 py-1 rounded-lg hover:bg-red-500 hover:text-white">
                Connect
              </button>
            </div>
          ))}
        </div>

        {/* CENTER – FIELDS */}
        <div className="col-span-12 lg:col-span-5 grid grid-cols-2 gap-4">

          {fields.map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition"
            >
              <h4 className="font-semibold text-gray-800">
                {f.title}
              </h4>
              <p className="text-sm text-gray-500 mt-1">
                {f.count}
              </p>
              <div className="border-t mt-3 pt-3">
                <button className="text-red-500 text-sm hover:underline">
                  View Network →
                </button>
              </div>
            </div>
          ))}

        </div>

        {/* RIGHT – COMPANIES */}
        <div className="col-span-12 lg:col-span-3 bg-white rounded-xl p-5 shadow-sm">

          <h3 className="font-semibold text-gray-800 mb-4">
            Hiring Companies
          </h3>

          {companies.map((c, i) => (
            <div key={i} className="py-3 border-b last:border-0">
              <div className="flex items-center gap-3">
                <div className="">
                    <img src="/images/company.jfif" alt="" className="bg-gray-100 rounded-full w-14 h-14 object-contain" />

                </div>
                <div className="">
                    <p className="text-sm font-medium text-gray-800">
                {c.name}
              </p>
              <p className="text-xs text-gray-500">
                {c.jobs}
              </p>
                </div>
              </div>
            </div>
          ))}

          <button className="mt-4 w-full border border-red-500 text-red-500 py-2 rounded-xl hover:bg-red-500 hover:text-white text-sm">
            View All Companies
          </button>
        </div>

      </div>

      {/* ===== BOTTOM DISCOVERY ===== */}
      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="font-semibold text-gray-800 mb-3">
            Trending Connections
          </h3>
          <p className="text-sm text-gray-500">
            Developers & designers are connecting rapidly this week.
          </p>
          <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="w-[70%] bg-red-500 h-full rounded-full"></div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="font-semibold text-gray-800 mb-3">
            Top Hiring Sector
          </h3>
          <p className="text-sm text-gray-500">
            Engineering roles dominate this month.
          </p>
          <button className="mt-4 text-red-500 text-sm hover:underline">
            Explore Now →
          </button>
        </div>

      </div>


    {/* Trending Jobs */}
      <section>
  <h3 className="font-semibold text-gray-800 mb-4">Trending Jobs</h3>

  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
    {["UI Designer", "React Dev", "Backend Engineer"].map((job, i) => (
      <div key={i} className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md">
        <h4 className="font-medium text-gray-800">{job}</h4>
        <p className="text-sm text-gray-500 mt-1">120+ openings</p>
        <div className="border-t mt-3 pt-3 flex justify-between text-sm">
          <span className="text-gray-500">Remote</span>
          <button className="text-red-500 hover:underline">Apply →</button>
        </div>
      </div>
    ))}
  </div>
</section>


    </div>
  );
}
