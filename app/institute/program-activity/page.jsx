"use client";

import { useState } from "react";

const activityData = [
  { title: "React Module Completion", value: "72%", progress: "72%" },
  { title: "Assignments Submitted", value: "65%", progress: "65%" },
  { title: "Student Engagement", value: "80%", progress: "80%" },
  { title: "Course Completion Rate", value: "58%", progress: "58%" },
  { title: "Attendance Rate", value: "90%", progress: "90%" },
];

const recentActivity = [
  { text: "New assignment uploaded", time: "2 hours ago" },
  { text: "10 students completed React module", time: "5 hours ago" },
  { text: "Mentor updated course content", time: "Yesterday" },
  { text: "New batch started", time: "2 days ago" },
];

export default function ProgramActivityPage() {
  const [search, setSearch] = useState("");

  const filtered = activityData.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-5 bg-[#f5f6fa] min-h-screen space-y-4">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">
            Program Activity
          </h1>
          <p className="text-sm text-gray-500">
            Monitor performance, engagement and completion metrics
          </p>
        </div>

       <div className="">
         <input
          type="text"
          placeholder="Search activity..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-4 py-2 text-red-400 bg-white rounded-lg text-sm w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-red-400"
        />
       </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        <div className="bg-white p-5 text-center rounded-xl shadow-sm">
          <p className="text-sm text-gray-500">Avg Completion</p>
          <h2 className="text-2xl font-semibold text-red-500">68%</h2>
        </div>

        <div className="bg-white p-5 text-center rounded-xl shadow-sm">
          <p className="text-sm text-gray-500">Active Students</p>
          <h2 className="text-2xl font-semibold text-green-500">420</h2>
        </div>

        <div className="bg-white p-5 text-center rounded-xl shadow-sm">
          <p className="text-sm text-gray-500">Assignments</p>
          <h2 className="text-2xl font-semibold text-red-500">124</h2>
        </div>

        <div className="bg-white p-5 text-center rounded-xl shadow-sm">
          <p className="text-sm text-gray-500">Engagement</p>
          <h2 className="text-2xl font-semibold text-yellow-500">High</h2>
        </div>

      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT - PROGRESS */}
        <div className="lg:col-span-2 ">

         <div className="bg-white rounded-xl shadow-sm px-8 pt-5 pb-8 ">
             <h2 className="text-lg font-semibold text-gray-700 mb-5">
            Activity Metrics
          </h2>

          <div className="space-y-6">

            {filtered.map((item, i) => (
              <div key={i}>

                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">
                    {item.title}
                  </span>

                  <span className="text-gray-500">
                    {item.value}
                  </span>
                </div>

                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div
                    className="bg-red-500 h-2 rounded-full transition-all"
                    style={{ width: item.progress }}
                  ></div>
                </div>

              </div>
            ))}

          </div>

         </div>

         {/* PERFORMANCE BREAKDOWN */}
<div className="bg-white rounded-xl shadow-sm p-6 mt-6">

  <h2 className="text-lg font-semibold text-gray-700 mb-5">
    Performance Breakdown
  </h2>

  <div className="space-y-4">

    {/* Assignments */}
    <div className="flex justify-between items-center">
      <div>
        <p className="text-sm font-medium text-gray-700">
          Assignments
        </p>
        <p className="text-xs text-gray-500">
          Submission & completion rate
        </p>
      </div>
      <span className="text-sm text-red-500 font-semibold">
        65%
      </span>
    </div>

    {/* Attendance */}
    <div className="flex justify-between items-center">
      <div>
        <p className="text-sm font-medium text-gray-700">
          Attendance
        </p>
        <p className="text-xs text-gray-500">
          Student participation rate
        </p>
      </div>
      <span className="text-sm text-green-500 font-semibold">
        90%
      </span>
    </div>

    {/* Engagement */}
    <div className="flex justify-between items-center">
      <div>
        <p className="text-sm font-medium text-gray-700">
          Engagement
        </p>
        <p className="text-xs text-gray-500">
          Interaction & activity level
        </p>
      </div>
      <span className="text-sm text-yellow-500 font-semibold">
        High
      </span>
    </div>

    {/* Completion */}
    <div className="flex justify-between items-center">
      <div>
        <p className="text-sm font-medium text-gray-700">
          Completion Rate
        </p>
        <p className="text-xs text-gray-500">
          Course completion percentage
        </p>
      </div>
      <span className="text-sm text-red-500 font-semibold">
        58%
      </span>
    </div>

  </div>

</div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">

          {/* INSIGHTS */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Insights
            </h3>

            <div className="space-y-3 text-sm text-gray-600">
              <p>📈 Engagement is increasing this week</p>
              <p>⚠️ Completion rate needs improvement</p>
              <p>✅ Attendance is excellent</p>
            </div>
          </div>

          {/* RECENT ACTIVITY */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Recent Activity
            </h3>

            {recentActivity.map((item, i) => (
              <div key={i} className="flex gap-3 mb-3">
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

          {/* ACTIONS */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Actions
            </h3>

            <button className="w-full bg-red-500 text-white py-2 rounded-lg text-sm mb-2 hover:bg-red-600">
              Generate Report
            </button>

            <button className="w-full border py-2 text-gray-400 rounded-lg text-sm hover:bg-gray-200 hover:text-gray-700">
              Export Data
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}