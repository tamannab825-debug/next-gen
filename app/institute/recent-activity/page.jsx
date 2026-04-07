"use client";

import { useState } from "react";

const activityStats = [
  { title: "New Students Enrolled", value: 45 },
  { title: "Programs Completed", value: 18 },
  { title: "Sessions Conducted", value: 32 },
  { title: "Resources Uploaded", value: 12 },
  { title: "Active Mentors", value: 24 },
];

const timeline = [
  { text: "45 new students enrolled", time: "Today" },
  { text: "React Bootcamp completed", time: "Yesterday" },
  { text: "12 new resources uploaded", time: "2 days ago" },
  { text: "Live session conducted", time: "3 days ago" },
];

export default function InstituteActivityPage() {
  const [search, setSearch] = useState("");

  const filtered = activityStats.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-5 bg-[#f5f6fa] min-h-screen space-y-4">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">
            Institute Activity
          </h1>
          <p className="text-sm text-gray-500">
            Track institute-wide performance and daily activities
          </p>
        </div>

       <div>
         <input
          type="text"
          placeholder="Search activity..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-4 py-2 text-red-400  bg-white rounded-lg text-sm w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-red-400"
        />
       </div>
      </div>

      {/* SUMMARY CARDS */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {activityStats.map((item, i) => (
          <div key={i} className="bg-white p-5 rounded-xl text-center shadow-sm">

            <h2 className="text-2xl font-semibold text-red-500">
              {item.value}
            </h2>
            <p className="text-sm text-gray-500">{item.title}</p>
            
          </div>
        ))}
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-6">

          {/* DETAILED ACTIVITY */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-5">
              Activity Breakdown
            </h2>

            <div className="space-y-5">

              {filtered.map((item, i) => (
                <div key={i}>

                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">
                      {item.title}
                    </span>

                    <span className="font-medium text-red-500">
                      {item.value}
                    </span>
                  </div>

                  {/* Fake progress visualization */}
                  <div className="w-full bg-gray-200 h-2 rounded-full">
                    <div
                      className="bg-red-500 h-2 rounded-full"
                      style={{ width: `${item.value}%` }}
                    ></div>
                  </div>

                </div>
              ))}

            </div>
          </div>

          {/* PERFORMANCE SUMMARY */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-5">
              Performance Summary
            </h2>

            <div className="grid grid-cols-2 gap-4 text-sm">

              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-gray-500">Growth Rate</p>
                <p className="text-lg font-semibold text-green-500">
                  +12%
                </p>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-gray-500">Completion Rate</p>
                <p className="text-lg font-semibold text-red-500">
                  68%
                </p>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-gray-500">Engagement</p>
                <p className="text-lg font-semibold text-yellow-500">
                  High
                </p>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-gray-500">Attendance</p>
                <p className="text-lg font-semibold text-green-500">
                  90%
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">

          {/* TIMELINE */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-5">
              Recent Activity Timeline
            </h2>

            {timeline.map((item, i) => (
              <div key={i} className="flex gap-3 mb-4">

                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>

                <div>
                  <p className="text-sm text-gray-700">
                    {item.text}
                  </p>
                  <p className="text-xs text-gray-400">
                    {item.time}
                  </p>
                </div>

              </div>
            ))}

          </div>

          {/* QUICK ACTIONS */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-5">
              Actions
            </h2>

            <button className="w-full bg-red-500 text-white py-2 rounded-lg text-sm mb-2 hover:bg-red-600">
              Generate Report
            </button>

            <button className="w-full text-gray-400 border py-2 rounded-lg text-sm hover:text-gray-700 hover:bg-gray-200">
              Export Data
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}