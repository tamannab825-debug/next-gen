"use client";
import { useState } from "react";

export default function FieldNetworkUnified() {
  const [activeTab, setActiveTab] = useState("People");

  return (
    <div className="min-h-screen bg-[#f5f7fb] text-gray-600 p-6 space-y-8">

      {/* ================= HEADER ================= */}
      <section className="bg-white rounded-3xl p-5 shadow-sm">
        <h1 className="text-xl font-bold text-gray-800">
          Engineering Network
        </h1>
        <p className="text-gray-500 text-sm mt-2">
          Explore professionals, jobs, skills, and companies — all in one place
        </p>

        {/* METRICS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {[
            ["Professionals", "8,500+"],
            ["Open Jobs", "1,245"],
            ["Companies", "620+"],
            ["Top Skills", "React, Node"],
          ].map((m, i) => (
            <div
              key={i}
              className="bg-gray-100 rounded-xl p-4 text-center"
            >
              <p className="text-xl font-semibold text-red-500">{m[1]}</p>
              <p className="text-xs text-gray-500 mt-1">{m[0]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TABS ================= */}
      <div className="flex gap-3 flex-wrap">
        {["People", "Jobs", "Companies", "Skills", "Insights"].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition 
              ${
                activeTab === tab
                  ? "bg-red-500 text-white"
                  : "bg-white text-gray-600 border"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* ================= CONTENT ================= */}
      <div className="grid lg:grid-cols-3 gap-6">

        {/* ================= MAIN ================= */}
        <div className="lg:col-span-2 space-y-6">

          {/* PEOPLE */}
          {activeTab === "People" && (
            <section className="bg-white rounded-3xl p-6 shadow-sm">
              <h2 className="font-semibold text-gray-500 mb-4">Professionals</h2>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  ["Rohit Sharma", "Frontend Developer"],
                  ["Ananya Verma", "UI Engineer"],
                  ["Amit Patel", "Backend Engineer"],
                  ["Neha Singh", "Recruiter"],
                ].map((p, i) => (
                  <div
                    key={i}
                    className="border border-gray-300 rounded-xl p-4 flex items-center gap-4"
                  >
                    <img
                      src="/images/profile.jpg"
                      className="w-12 h-12 rounded-full bg-gray-200"
                    />
                    <div className="flex-1">
                      <p className="font-medium text-gray-600">{p[0]}</p>
                      <p className="text-sm text-gray-400">{p[1]}</p>
                    </div>
                    <button className="text-sm text-red-500 border border-red-500 px-3 py-1 rounded-lg hover:bg-red-500 hover:text-white">
                      Connect
                    </button>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* JOBS */}
          {activeTab === "Jobs" && (
            <section className="bg-white rounded-3xl p-6 shadow-sm">
              <h2 className="font-semibold mb-4">Open Positions</h2>

              {[
                ["Frontend Engineer", "React • Remote"],
                ["Backend Developer", "Node.js • APIs"],
                ["Full Stack Dev", "Next.js • Startup"],
              ].map((j, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center border-b py-4 last:border-0"
                >
                  <div>
                    <p className="font-medium">{j[0]}</p>
                    <p className="text-sm text-gray-500">{j[1]}</p>
                  </div>
                  <button className="text-sm text-red-500 hover:underline">
                    Apply →
                  </button>
                </div>
              ))}
            </section>
          )}

          {/* COMPANIES */}
          {activeTab === "Companies" && (
            <section className="bg-white rounded-3xl p-6 shadow-sm">
              <h2 className="font-semibold mb-4">Hiring Companies</h2>

              {["Google", "Infosys", "Startup Labs", "ProductCo"].map(
                (c, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center py-3 border-b last:border-0 "
                  >
                    <p className="font-medium">{c}</p>
                    <span className="text-xs text-red-500">Hiring</span>
                  </div>
                )
              )}
            </section>
          )}

          {/* SKILLS */}
          {activeTab === "Skills" && (
            <section className="bg-white rounded-3xl p-6 shadow-sm">
              <h2 className="font-semibold mb-4">Skills Demand</h2>

              {[
                ["React", "High"],
                ["Next.js", "High"],
                ["Node.js", "Medium"],
                ["AWS", "Medium"],
              ].map((s, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center mb-3"
                >
                  <p>{s[0]}</p>
                  <span className="text-xs px-3 py-1 bg-red-100 text-red-600 rounded-full">
                    {s[1]}
                  </span>
                </div>
              ))}
            </section>
          )}

          {/* INSIGHTS */}
          {activeTab === "Insights" && (
            <section className="bg-linear-to-r from-red-500 to-red-600 text-white rounded-3xl p-6 shadow-sm">
              <h2 className="font-semibold mb-2">Market Insight</h2>
              <p className="text-sm opacity-90">
                Engineering roles focused on frontend performance and modern
                frameworks are experiencing rapid growth this quarter.
              </p>
            </section>
          )}
        </div>

        {/* ================= RIGHT PANEL ================= */}
        <div className="space-y-6">
          <section className="bg-white rounded-3xl p-6 shadow-sm">
            <h3 className="font-semibold mb-3">Quick Actions</h3>

            <button className="w-full bg-red-500 text-white py-2 rounded-xl mb-2">
              Save Field
            </button>
            <button className="w-full border border-red-500 text-red-500 py-2 rounded-xl">
              Get Alerts
            </button>
          </section>

          <section className="bg-white rounded-3xl p-6 shadow-sm">
            <h3 className="font-semibold mb-3">Your Match</h3>
            <p className="text-sm text-gray-600">
              Your frontend skills match <strong>82%</strong> of roles in this
              field.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}