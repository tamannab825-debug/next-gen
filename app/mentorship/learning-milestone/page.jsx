"use client";

import { useState } from "react";

const stats = [
  { title: "Total Milestones", value: "84" },
  { title: "Completed", value: "62" },
  { title: "In Progress", value: "14" },
  { title: "Upcoming", value: "8" },
];

const milestones = [
  {
    title: "Frontend Basics Completed",
    date: "Jan 2026",
    status: "Completed",
  },
  {
    title: "React Advanced Concepts",
    date: "March 2026",
    status: "In Progress",
  },
  {
    title: "Full Stack Project",
    date: "June 2026",
    status: "Upcoming",
  },
];

export default function MilestonesPage() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? milestones
      : milestones.filter((m) => m.status === filter);

  const getStatusStyle = (status) => {
    if (status === "Completed")
      return "bg-green-100 text-green-600";
    if (status === "In Progress")
      return "bg-yellow-100 text-yellow-600";
    return "bg-gray-200 text-gray-600";
  };

  return (
    <div className="p-6 bg-[#f5f6fa] min-h-screen text-gray-500 space-y-4">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">
            Learning Milestones
          </h1>
          <p className="text-sm text-gray-500">
            Track mentee journey, achievements and learning stages
          </p>
        </div>

        <div className="">
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600">
          + Add Milestone
        </button>
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((item, i) => (
          <div key={i} className="bg-white p-4 rounded-xl text-center shadow-sm">

            <h2 className="text-2xl font-semibold text-red-500">
              {item.value}
            </h2>
            <p className="text-sm text-gray-500">{item.title}</p>
            
          </div>
        ))}
      </div>

      {/* TIMELINE + SUMMARY */}
      <div className="grid lg:grid-cols-3 gap-6">

        {/* TIMELINE */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm">
          <div className="flex justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-700">
              Milestone Timeline
            </h3>

            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border px-2 py-1 rounded text-sm"
            >
              <option>All</option>
              <option>Completed</option>
              <option>In Progress</option>
              <option>Upcoming</option>
            </select>
          </div>

          <div className="space-y-6 relative">

            {/* vertical line */}
            <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gray-200">
                
            </div>

            {filtered.map((m, i) => (
              <div key={i} className="flex items-start gap-4 relative">

                {/* DOT */}
                <div className="w-4 h-4 bg-red-500 rounded-full mt-1 z-10"></div>

                {/* CONTENT */}
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 w-full">
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-medium text-gray-800">
                      {m.title}
                    </p>

                    <span
                      className={`text-xs px-2 py-1 rounded ${getStatusStyle(
                        m.status
                      )}`}
                    >
                      {m.status}
                    </span>
                  </div>

                  <p className="text-xs text-gray-500 mt-1">
                    {m.date}
                  </p>
                </div>

              </div>
            ))}

          </div>
        </div>

        {/* SUMMARY */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Milestone Summary
          </h3>

          <div className="space-y-4 text-sm">
            <div className="flex justify-between">
              <span>Completion Rate</span>
              <span className="text-green-500">74%</span>
            </div>

            <div className="flex justify-between">
              <span>Avg Completion Time</span>
              <span>2.5 Months</span>
            </div>

            <div className="flex justify-between">
              <span>Fastest Progress</span>
              <span className="text-red-500">Frontend Track</span>
            </div>

            <div className="flex justify-between">
              <span>Delayed Milestones</span>
              <span className="text-yellow-500">3</span>
            </div>
          </div>
        </div>

      </div>

      {/* MILESTONE CARDS */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {milestones.map((m, i) => (
          <div
            key={i}
            className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-sm font-semibold text-gray-800">
              {m.title}
            </h3>

            <p className="text-xs text-gray-500 mt-1">
              {m.date}
            </p>

            <span
              className={`inline-block mt-3 text-xs px-2 py-1 rounded ${getStatusStyle(
                m.status
              )}`}
            >
              {m.status}
            </span>

            <div className="mt-4 flex justify-between text-sm">
              <button className="text-red-500 hover:underline">
                View
              </button>

              <button className="text-gray-500 hover:underline">
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* BOTTOM SECTION */}
      <div className="grid lg:grid-cols-2 gap-6">

        {/* ACTIVITY */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Recent Activity
          </h3>

          <div className="space-y-3 text-sm">
            <p>React milestone marked completed</p>
            <p>New milestone added for Backend</p>
            <p>Full Stack project started</p>
          </div>
        </div>

        {/* INSIGHTS */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Insights
          </h3>

          <ul className="text-sm text-gray-600 space-y-2">
            <li>Frontend milestones complete faster</li>
            <li>Backend milestones need more time</li>
            <li>Project-based milestones improve retention</li>
          </ul>
        </div>

      </div>

    </div>
  );
}