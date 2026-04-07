"use client";

import { useState } from "react";

const programs = [
  {
    id: 1,
    name: "Frontend Developer Mentorship",
    duration: "12 Weeks",
    mentors: 4,
    mentees: 28,
    completion: 72,
    status: "Active",
  },
  {
    id: 2,
    name: "Backend Developer Mentorship",
    duration: "14 Weeks",
    mentors: 3,
    mentees: 21,
    completion: 65,
    status: "Ongoing",
  },
  {
    id: 3,
    name: "Career Guidance Program",
    duration: "8 Weeks",
    mentors: 5,
    mentees: 40,
    completion: 80,
    status: "Completed",
  },
];

export default function ProgramsOverviewPage() {
  const [search, setSearch] = useState("");

  const filtered = programs.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-5 bg-[#f5f6fa] min-h-screen space-y-4">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">
            Programs Overview
          </h1>
          <p className="text-sm text-gray-500">
            Detailed overview of all mentorship programs
          </p>
        </div>

        <input
          type="text"
          placeholder="Search program..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border bg-white px-4 py-2 rounded-lg text-sm text-gray-400  focus:ring-red-400"
        />
      </div>

      {/* STATS */}
      <div className="grid md:grid-cols-4 gap-6">
        {[
          { title: "Total Programs", value: "12" },
          { title: "Active", value: "7" },
          { title: "Mentees", value: "184" },
          { title: "Avg Completion", value: "74%" },
        ].map((s, i) => (
          <div key={i} className="bg-white p-4 text-center rounded-xl shadow-sm">

            <h2 className="text-2xl font-semibold text-red-500">
              {s.value}
            </h2>
            <p className="text-sm text-gray-500">{s.title}</p>
            
          </div>
        ))}
      </div>

      {/* MAIN GRID */}
      <div className="grid lg:grid-cols-3 gap-6">

        {/* TABLE */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm">

          <div className="p-5 border-b">
            <h2 className="font-semibold text-gray-700">
              Programs Table
            </h2>
          </div>

          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="p-3 text-left">Program</th>
                <th className="p-3">Mentors</th>
                <th className="p-3">Mentees</th>
                <th className="p-3">Progress</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((p) => (
                <tr key={p.id} className="border-t hover:bg-gray-50">

                  <td className="p-3 font-medium text-gray-800">
                    {p.name}
                  </td>

                  <td className="p-3 text-center text-red-500">
                    {p.mentors}
                  </td>

                  <td className="p-3 text-gray-500 text-center">
                    {p.mentees}
                  </td>

                  <td className="p-3">
                    <div className="w-full bg-gray-200 h-2 rounded">
                      <div
                        className="bg-red-500 h-2 rounded"
                        style={{ width: `${p.completion}%` }}
                      />
                    </div>
                  </td>

                  <td className="p-3 text-center">
                    <span className="text-xs bg-red-100 text-red-500 px-2 py-1 rounded">
                      {p.status}
                    </span>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* SIDE INSIGHTS */}
        <div className="space-y-6">

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-gray-700 mb-4">
              Insights
            </h3>

            <ul className="text-sm text-gray-600 space-y-2">
              <li>Frontend program has highest enrollment</li>
              <li>Completion rate improved by 12%</li>
              <li>Backend program needs attention</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-gray-700 mb-4">
              Quick Actions
            </h3>

            <button className="w-full bg-red-500 text-white py-2 rounded mb-2">
              Add Program
            </button>

            <button className="w-full border text-gray-500 hover:bg-gray-200 hover:text-gray-700 py-2 rounded">
              Export Data
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}