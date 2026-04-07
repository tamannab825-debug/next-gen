"use client";
import { useState } from "react";

const stats = [
  { title: "Total Candidates", value: "4,820" },
  { title: "Shortlisted", value: "1,260" },
  { title: "Interviews", value: "340" },
  { title: "Hired", value: "185" },
];

const candidates = [
  { name: "Aarav Sharma", role: "Frontend Developer", exp: "2 yrs", skill: "React" },
  { name: "Neha Patel", role: "UI/UX Designer", exp: "3 yrs", skill: "Figma" },
  { name: "Rahul Verma", role: "Backend Engineer", exp: "4 yrs", skill: "Node.js" },
  { name: "Simran Kaur", role: "Product Manager", exp: "5 yrs", skill: "Agile" },
  { name: "Aditya Singh", role: "Data Analyst", exp: "2 yrs", skill: "Python" },
  { name: "Pooja Mehta", role: "Marketing Exec", exp: "3 yrs", skill: "SEO" },
  { name: "Tannu Sharma", role: "Full Stack Devloper", exp: "2 yrs", skill: "Next.js" },
  { name: "Sanyog Biswal", role: "UI/UX Developer", exp: "3 yrs", skill: "Figma" },
  { name: "Chetna Analyst", role: "Data Analyst", exp: "1 yrs", skill: "Python" },
];

export default function CandidateListPage() {
  const [search, setSearch] = useState("");

  const filtered = candidates.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#f5f7fb] p-6 space-y-6 text-gray-800">

       {/* ===== HEADER ===== */}
      <div className="bg-white rounded-2xl p-4 shadow-sm flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Candidates</h1>
          <p className="text-sm text-gray-500">
            Browse and manage hiring pipeline
          </p>
        </div>

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search candidate..."
          className="w-full md:w-72 px-4 py-2 rounded-xl hover:border-3 hover:border-red-400 bg-gray-50 text-sm outline-none"
        />
      </div> 

      {/* ===== STATS ===== */}
      {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {stats.map((s, i) => (
          <div key={i} className="bg-white p-5 rounded-xl shadow-sm">
            <p className="text-sm text-gray-500">{s.title}</p>
            <h3 className="text-2xl font-semibold mt-1">{s.value}</h3>
            <div className="mt-3 h-1 bg-gray-100 rounded-full">
              <div className="w-3/4 h-full bg-red-400 rounded-full" />
            </div>
          </div>
        ))}
      </div> */}

      <div className="grid lg:grid-cols-4 gap-6">
       <div className="lg:col-span-3">
         {/* ===== CANDIDATE GRID ===== */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

        {filtered.map((c, i) => (
          <div
            key={i}
            className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition"
          >

            <div className="flex items-center gap-3 mb-3">
              <img src="/images/person2.jpg" alt="" className="w-12 h-12 rounded-lg bg-gray-200" />
              <div>
                <h4 className="font-semibold">{c.name}</h4>
                <p className="text-xs text-gray-500">{c.role}</p>
              </div>
            </div>

            <div className="text-sm text-gray-600 space-y-1">
              <p>Experience: {c.exp}</p>
              <p>Primary Skill: {c.skill}</p>
            </div>

            <div className="flex gap-2 mt-4">
             <a href="/optional/candidate-profile">
               <button className="flex-1 text-sm border border-red-500 text-red-500 py-2 px-5 rounded-lg hover:bg-red-500 hover:text-white">
                View
              </button>
             </a>
              <button className="flex-1 text-sm bg-gray-100 rounded-lg py-2 px-3 hover:bg-gray-200">
                Shortlist
              </button>
            </div>

          </div>
        ))}

      </div>
      </div>
      <div className="space-y-6">

          {/* Hiring Progress */}
          {/* <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold mb-2">Hiring Progress</h3>
            <p className="text-sm text-gray-500">68% positions filled</p>
            <div className="mt-4 h-2 bg-gray-200 rounded-full">
              <div className="w-[68%] bg-red-500 h-full rounded-full" />
            </div>
          </div> */}

          {/* Recent Activity */}
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <h3 className="font-semibold mb-4">Recent Activity</h3>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Aarav shortlisted</span>
                <span className="text-green-500">Today</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Neha interview</span>
                <span className="text-orange-500">Yesterday</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Rahul hired</span>
                <span className="text-blue-500">2 days ago</span>
              </div>
            </div>
          </div>

          {/* Skill Demand */}
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <h3 className="font-semibold mb-4">Top Skills in Demand</h3>

            {[
              { skill: "React", percent: "75%" },
              { skill: "Node.js", percent: "60%" },
              { skill: "UI/UX", percent: "52%" },
            ].map((s, i) => (
              <div key={i} className="mb-3">
                <div className="flex justify-between text-sm mb-3">
                  <span>{s.skill}</span>
                  <span className="text-gray-500">{s.percent}</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full">
                  <div
                    className="h-full bg-red-400 rounded-full"
                    style={{ width: s.percent }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-linear-to-br from-red-500 to-pink-500 text-white rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-lg">Post New Job</h3>
            <p className="text-sm opacity-90 mt-2">
              Get qualified candidates instantly
            </p>
            <button className="mt-4 bg-white text-red-500 px-4 py-2 rounded-lg font-medium">
              Create Job
            </button>
          </div>

        </div>

       
      </div>

    </div>
  );
}
