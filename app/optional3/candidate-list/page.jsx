"use client";
import { useState } from "react";

export default function CandidateList() {
  const [search, setSearch] = useState("");

  const candidates = [
    {
      name: "Aman Gupta",
      role: "Frontend Developer",
      experience: "2 Years",
      status: "Applied",
    },
    {
      name: "Neha Sharma",
      role: "UI/UX Designer",
      experience: "3 Years",
      status: "Interview",
    },
    {
      name: "Rohit Verma",
      role: "Backend Engineer",
      experience: "1.5 Years",
      status: "Shortlisted",
    },
     {
      name: "Happy Rao",
      role: "Data Analyst",
      experience: "Freshers",
      status: "Applied",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-3 space-y-4">

      {/* HEADER */}
      <section className="bg-white rounded-2xl border border-gray-100 p-4 flex flex-col md:flex-row justify-between gap-6">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">
            Candidate Management
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Review applications, shortlist talent, and manage hiring stages.
          </p>
        </div>

        <input
          type="text"
          placeholder="Search candidate..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-red-400 text-red-500 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
        />
      </section>

      {/* STATS */}
      <section className="bg-white rounded-2xl border border-gray-100 p-4">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100 text-center">
          {[
            { label: "Total Applicants", value: "48" },
            { label: "Shortlisted", value: "12" },
            { label: "Interview", value: "6" },
            { label: "Hired", value: "3" },
          ].map((stat, i) => (
            <div key={i} className="px-4 bg-yellow-50 border-r border-gray-500 last:border-none py-2">
              <p className="text-2xl font-semibold text-red-600">
                {stat.value}
              </p>
              <p className="text-md text-gray-700 mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CANDIDATE LIST */}
      <section className="space-y-4 bg-white px-4 py-5 rounded-xl">

         <h3 className="px-2 text-gray-700 text-lg font-semibold">Candidate List</h3>
        {candidates
          .filter((c) =>
            c.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((candidate, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-2xl border border-gray-200 p-5 flex flex-col md:flex-row justify-between items-center hover:shadow-sm transition"
            >
               
              <div className="flex items-center gap-4">
                <img src="/images/person2.jpg" alt="" className="w-15 h-15 rounded-full" />
                <div>
                  <h3 className="font-medium text-gray-800">
                    {candidate.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {candidate.role} <span className="text-red-500">· {candidate.experience}</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-4 md:mt-0">

                <span
                  className={`text-xs px-3 py-1 rounded-full
                    ${
                      candidate.status === "Interview"
                        ? "bg-yellow-100 text-yellow-600"
                        : candidate.status === "Shortlisted"
                        ? "bg-blue-100 text-blue-600"
                        : "bg-gray-200 text-gray-600"
                    }
                  `}
                >
                  {candidate.status}
                </span>

               <a href="/optional3/candidate-profile">
                <button className="text-sm text-gray-600 hover:underline">
                  View
                </button>
                </a>

                <button className="px-4 py-1.5 text-xs border border-red-500 text-red-500 rounded-lg hover:bg-red-50">
                  Move Stage
                </button>

              </div>
            </div>
          ))}
      </section>

    </div>
  );
}