"use client";

import { useState } from "react";


const skillDemand = [
  { skill: "React Developers", open: "420 profiles" },
  { skill: "UI/UX Designers", open: "310 profiles" },
  { skill: "Backend Engineers", open: "390 profiles" },
  { skill: "Product Managers", open: "180 profiles" },
  { skill: "Data Analysts", open: "220 profiles" },
];

const candidates = [
  { name: "Aarav Mehta", role: "Frontend Engineer", exp: "3 yrs" },
  { name: "Neha Sharma", role: "UI Designer", exp: "2 yrs" },
  { name: "Rohit Verma", role: "Backend Developer", exp: "4 yrs" },
  { name: "Simran Kaur", role: "Product Manager", exp: "5 yrs" },
];

const analyticsStats = [
  { title: "Total Applications", value: "8,420" },
  { title: "Interviews Scheduled", value: "1,280" },
  { title: "Offers Made", value: "420" },
  { title: "Successful Hires", value: "310" },
];

export default function CandidatesPage() {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-[#f5f7fb] p-6 space-y-10 font-sans">

      

      {/* ========================== QUICK STATS ========================== */}
{/* STATS – MODERN ANALYTICS STYLE */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">

  {analyticsStats.map((s, i) => (
    <div
      key={i}
      className="relative overflow-hidden bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition group"
    >
      {/* soft background shape */}
      <div className="absolute -top-6 -right-6 w-24 h-24 bg-red-100 rounded-full opacity-60 group-hover:scale-110 transition" />

      <div className="relative z-10">

        {/* title */}
        <p className="text-sm text-gray-500">{s.title}</p>

        {/* number */}
        <h3 className="text-3xl text-gray-800 font-semibold mt-2">
          {s.value}
        </h3>

        {/* trend row */}
        <div className="flex items-center justify-between mt-4">

          <span className="text-xs text-green-500 font-medium">
            ▲ 12% this month
          </span>

          <div className="w-16 h-2 bg-gray-100 rounded-full overflow-hidden">
            <div className="w-4/5 h-full bg-red-500 rounded-full" />
          </div>

        </div>
      </div>
    </div>
  ))}

</div>

      {/* ========================== SKILL DEMAND ========================== */}
      <div className="grid md:grid-cols-3 gap-6">
        
        {/* Demand list */}
        <div className="md:col-span-2 bg-white rounded-xl p-6 shadow-sm border">
         <div className="flex justify-between  mb-5">
           <h2 className="text-lg font-semibold text-gray-900">
            High Demand Skills
          </h2>

          <a href="/optional/skills">
            <button className="px-3 py-1 bg-red-500 hover:bg-red-600 text-sm text-white rounded-lg">
              View All
            </button>
          </a>
         </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {skillDemand.map((s, i) => (
              <div
                key={i}
                className="flex justify-between items-center border bg-gray-50 rounded-xl p-3 hover:bg-gray-100 transition"
              >
                <span className=" text-gray-500">{s.skill}</span>
                <span className="text-sm text-red-500">{s.open}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Activity block */}
        <div className="bg-linear-to-br from-red-500 to-pink-500 text-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold">Hiring Insights</h3>
          <p className="text-sm opacity-90 mt-1">
            Benchmarked activity on candidate flow.
          </p>
          <ul className="mt-6 space-y-2 text-xs">
            <li>✔ 240 interviews this month</li>
            <li>✔ 68 new shortlists</li>
            <li>✔ 15 confirmed hires</li>
          </ul>
        </div>

      </div>

      {/* ========================== CANDIDATE GRID ========================== */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Recommended Candidates
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {candidates.map((c, i) => (
            <div
              key={i}
              className="bg-white text-center rounded-xl p-5 shadow-sm border hover:shadow-md transition"
            >
              <img src="/images/profile.jpg" alt="" className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-3" />
              
              <h4 className="text-base font-semibold text-gray-800">
                {c.name}
              </h4>
              <p className="text-sm text-gray-500">{c.role}</p>
              <p className="text-xs text-gray-400 mt-1">{c.exp} experience</p>
              <a href="/optional/candidate-profile">
                <button className="mt-4 w-full bg-red-500 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-red-600">
                View Profile
              </button>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ========================== EXTRA SECTIONS ========================== */}
      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-white rounded-xl p-6 border shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Featured Talent
          </h3>
          <p className="text-sm text-gray-500">
            Explore the top-rated candidates trending this week.
          </p>

          <a href="/optional/candidate-list">
            <button className="mt-4 text-red-500 text-sm font-medium hover:underline">
            Explore Profiles →
          </button>
          </a>
        </div>

        <div className="bg-white rounded-xl p-6 border shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Recommended Companies
          </h3>
          <p className="text-sm text-gray-500">
            See companies actively hiring candidates like you.
          </p>

         <a href="/optional/company-list ">
           <button className="mt-4 text-red-500 text-sm font-medium hover:underline">
            View Companies →
          </button>
         </a>
        </div>

      </div>

    </div>
  );
}