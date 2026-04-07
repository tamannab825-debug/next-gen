"use client";
import { useState } from "react";

const companies = [
  { name: "TechNova", industry: "IT Services", size: "1200+", jobs: 42 },
  { name: "PixelCraft", industry: "Design Studio", size: "320+", jobs: 18 },
  { name: "FinEdge", industry: "Fintech", size: "860+", jobs: 25 },
  { name: "Kleon Team", industry: "Marketing", size: "240+", jobs: 14 },
  { name: "Sakola", industry: "EdTech", size: "160+", jobs: 9 },
  { name: "MarketHub", industry: "E-commerce", size: "540+", jobs: 21 },
  { name: "DataWave", industry: "Analytics", size: "430+", jobs: 17 },
  { name: "Cloudify", industry: "SaaS", size: "780+", jobs: 29 },
  { name: "Kleon Team", industry: "Marketing", size: "240+", jobs: 14 },
];

export default function CompanyListPage() {
  const [search, setSearch] = useState("");

  const filtered = companies.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.industry.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#f5f7fb] p-6 space-y-6 text-gray-800">

      {/* ===== HEADER ===== */}
      <div className="bg-white rounded-2xl p-4 shadow-sm flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Companies</h1>
          <p className="text-sm text-gray-500">
            Explore hiring partners & open roles
          </p>
        </div>

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search company..."
          className="w-full md:w-72 px-4 py-2 hover:border-3 hover:border-red-400 rounded-xl bg-gray-50 text-sm outline-none"
        />
      </div>

      {/* ===== GRID LAYOUT ===== */}
      <div className="grid lg:grid-cols-4 gap-6">

        {/* ================= LEFT ================= */}
        <div className="lg:col-span-3 grid sm:grid-cols-2 md:grid-cols-3 gap-6">

          {filtered.map((c, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition"
            >

              <div className="flex items-center gap-3 mb-3">
                <img
                  src="/images/company.jfif"
                  className="w-12 h-12 rounded-lg bg-gray-200"
                  alt=""
                />
                <div>
                  <h4 className="font-semibold">{c.name}</h4>
                  <p className="text-xs text-gray-500">{c.industry}</p>
                </div>
              </div>

              <div className="text-sm text-gray-600 space-y-1">
                <p>Employees: {c.size}</p>
                <p>Open Jobs: {c.jobs}</p>
              </div>

              <div className="flex gap-3 mt-4">
                <a href="/optional/companyProfile">
                  <button className="flex-1 text-sm border border-red-500 text-red-500 p-2 rounded-lg hover:bg-red-500 hover:text-white">
                  View Company
                </button>
                </a>
               <a href="/optional/companyJob">
                 <button className="flex-1 text-sm bg-gray-100 rounded-lg p-2.5 hover:bg-gray-200">
                  Jobs
                </button>
               </a>
              </div>

            </div>
          ))}

        </div>

        {/* ================= RIGHT ================= */}
        <div className="space-y-6">

          {/* Growth */}
          {/* <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold mb-1">Hiring Growth</h3>
            <p className="text-sm text-gray-500">+22% this quarter</p>
            <div className="mt-4 h-2 bg-gray-200 rounded-full">
              <div className="w-[72%] bg-red-500 h-full rounded-full" />
            </div>
          </div> */}

          {/* Recent Companies */}
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <h3 className="font-semibold mb-4">Recently Joined</h3>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Cloudify joined</span>
                <span className="text-green-500">Today</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">DataWave onboarded</span>
                <span className="text-orange-500">Yesterday</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">MarketHub approved</span>
                <span className="text-blue-500">2 days ago</span>
              </div>
            </div>
          </div>

          {/* Top Industries */}
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <h3 className="font-semibold mb-4">Top Hiring Industries</h3>

            {[
              { name: "IT & SaaS", percent: "70%" },
              { name: "Fintech", percent: "55%" },
              { name: "Design", percent: "45%" },
            ].map((i, idx) => (
              <div key={idx} className="mb-3">
                <div className="flex justify-between text-sm mb-3">
                  <span>{i.name}</span>
                  <span className="text-gray-500">{i.percent}</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full">
                  <div
                    className="h-full bg-red-400 rounded-full"
                    style={{ width: i.percent }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-linear-to-br from-red-500 to-pink-500 text-white rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-lg">Add New Company</h3>
            <p className="text-sm opacity-90 mt-2">
              Expand your hiring network
            </p>
            <button className="mt-4 bg-white text-red-500 px-4 py-2 rounded-lg font-medium">
              Register Company
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
