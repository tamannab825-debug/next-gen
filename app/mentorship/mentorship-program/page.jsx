"use client";

import { useState } from "react";

const programs = [
  {
    title: "Career Growth",
    description: "Guidance for career planning and job readiness",
    mentees: 40,
    mentors: 8,
    status: "Active",
  },
  {
    title: "Frontend Bootcamp",
    description: "Hands-on React, Tailwind & UI development",
    mentees: 95,
    mentors: 5,
    status: "Active",
  },
  {
    title: "Startup Mentorship",
    description: "Helping founders build and scale startups",
    mentees: 60,
    mentors: 4,
    status: "Completed",
  },
  {
    title: "AI & ML Program",
    description: "Deep learning, ML models & real projects",
    mentees: 80,
    mentors: 6,
    status: "Upcoming",
  },
];

export default function ProgramsPage() {
  const [search, setSearch] = useState("");

  const filteredPrograms = programs.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-5 bg-[#f5f6fa] min-h-screen space-y-6">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">
            Mentorship Programs
          </h1>
          <p className="text-sm text-gray-500">
            Manage and monitor all mentorship programs
          </p>
        </div>

        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search programs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border px-4 py-2 text-red-400 bg-white rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
          />

          <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600">
            + Create Program
          </button>
        </div>
      </div>

      {/* MAIN LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT SIDE */}
        <div className="lg:col-span-2 grid md:grid-cols-2 gap-6 auto-rows-max">
          {filteredPrograms.map((program, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-sm p-5 hover:shadow-md transition flex flex-col justify-between"
            >
              {/* TOP */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {program.title}
                  </h3>

                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      program.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : program.status === "Completed"
                        ? "bg-gray-200 text-gray-600"
                        : "bg-yellow-100 text-yellow-600"
                    }`}
                  >
                    {program.status}
                  </span>
                </div>

                <p className="text-sm text-gray-500 mb-3">
                  {program.description}
                </p>

                <div className="flex justify-between text-sm mb-3">
                  <div>
                    <p className="text-gray-500">Mentees</p>
                    <p className="font-semibold text-red-500">
                      {program.mentees}
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-500">Mentors</p>
                    <p className="font-semibold text-red-500">
                      {program.mentors}
                    </p>
                  </div>
                </div>

                {/* PROGRESS BAR */}
                <div className="mb-4">
                  <div className="w-full bg-gray-200 h-2 rounded-full">
                    <div
                      className="bg-red-500 h-2 rounded-full"
                      style={{
                        width: `${Math.min(program.mentees, 100)}%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* ACTIONS */}
              <div className="flex justify-between text-sm mt-2">
                <button className="text-red-500 hover:underline">
                  View Details
                </button>

                <button className="text-gray-500 hover:underline">
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">

          {/* OVERVIEW */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Overview
            </h3>

            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Total Programs</span>
                <span className="font-semibold text-red-500">24</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Active</span>
                <span className="font-semibold text-green-500">12</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Completed</span>
                <span className="font-semibold text-gray-600">8</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Upcoming</span>
                <span className="font-semibold text-yellow-500">4</span>
              </div>
            </div>
          </div>

          {/* RECENT ACTIVITY */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Recent Activity
            </h3>

            <div className="space-y-3 text-sm">
              <div>
                <p className="text-gray-700">New program created</p>
                <p className="text-xs text-red-400">2 hours ago</p>
              </div>

              <div>
                <p className="text-gray-700">Frontend Bootcamp updated</p>
                <p className="text-xs text-red-400">5 hours ago</p>
              </div>

              <div>
                <p className="text-gray-700">Startup program completed</p>
                <p className="text-xs text-red-400">1 day ago</p>
              </div>
            </div>
          </div>

          {/* QUICK ACTIONS */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Quick Actions
            </h3>

            <button className="w-full bg-red-500 text-white py-2 rounded-lg text-sm mb-2 hover:bg-red-600">
              Create Program
            </button>

            <button className="w-full border text-gray-500 hover:text-gray-700 py-2 rounded-lg text-sm hover:bg-gray-200">
              Export Data
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}