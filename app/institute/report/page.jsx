"use client";

import { useState } from "react";

const reports = [
  {
    title: "Student Engagement",
    value: "78%",
  },
  {
    title: "Program Completion Rate",
    value: "64%",
  },
  {
    title: "Mentor Performance",
    value: "85%",
  },
  {
    title: "Session Attendance",
    value: "72%",
  },
];

const activity = [
  {
    title: "Full Stack Program Completion",
    value: "430 Students",
    progress: "70%",
  },
  {
    title: "React Bootcamp Participation",
    value: "210 Students",
    progress: "60%",
  },
  {
    title: "UI/UX Design Attendance",
    value: "150 Students",
    progress: "50%",
  },
  {
    title: "Data Science Course Progress",
    value: "180 Students",
    progress: "65%",
  },
];

export default function InstituteReports() {
  const [search, setSearch] = useState("");

  const filtered = activity.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 md:p-6 bg-[#f5f6fa] min-h-screen space-y-4">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">

        <div>
          <h1 className="text-xl font-semibold text-gray-800">
            Institute Reports
          </h1>

          <p className="text-sm text-gray-500">
            Monitor institute performance and analytics
          </p>
        </div>

       <div className="flex gap-4">
         <input
          type="text"
          placeholder="Search report..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border text-red-400 bg-white rounded-lg px-3 py-2 text-sm w-full sm:w-64 focus:border-3 focus:border-red-500 focus:ring-red-500 focus:outline-none transition"
        />

         <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600 transition w-fit">
          Generate Report
        </button>
       </div>

      </div>

      {/* METRICS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {reports.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-sm p-5 text-center"
          >

            <h2 className="text-2xl font-semibold text-red-500">
              {item.value}
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              {item.title}
            </p>

          </div>
        ))}

      </div>

      {/* ANALYTICS SECTION */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

  {/* PROGRAM ACTIVITY */}
  <div className="bg-white rounded-xl shadow-sm p-6">

   <div className="flex justify-between mb-4 ">
              <h3 className="text-lg font-semibold text-gray-800 ">
              Program Activity
            </h3>

            <a href="/institute/program-activity" >
                <button className="text-sm text-red-500 hover:underline">
                View All
              </button>
              </a>
            </div>

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
              className="bg-red-500 h-2 rounded-full"
              style={{ width: item.progress }}
            ></div>

          </div>

        </div>

      ))}

    </div>

  </div>

  {/* RECENT ACTIVITY */}
  <div className="bg-white rounded-xl shadow-sm p-6">

   <div className="flex justify-between mb-4 ">
              <h3 className="text-lg font-semibold text-gray-800 ">
              Recent Institute Activity
            </h3>

            <a href="/institute/recent-activity" >
                <button className="text-sm text-red-500 hover:underline">
                View All
              </button>
              </a>
            </div>

    <div className="space-y-4 text-sm">

      <div className="flex justify-between">
        <span className="text-gray-600">
          New Students Enrolled
        </span>
        <span className="font-medium text-red-500">
          +45
        </span>
      </div>

      <div className="flex justify-between">
        <span className="text-gray-600">
          Programs Completed
        </span>
        <span className="font-medium text-red-500">
          18
        </span>
      </div>

      <div className="flex justify-between">
        <span className="text-gray-600">
          Sessions Conducted
        </span>
        <span className="font-medium text-red-500">
          32
        </span>
      </div>

      <div className="flex justify-between">
        <span className="text-gray-600">
          Resources Uploaded
        </span>
        <span className="font-medium text-red-500">
          12
        </span>
      </div>

      <div className="flex justify-between">
        <span className="text-gray-600">
          Active Mentors
        </span>
        <span className="font-medium text-red-500">
          24
        </span>
      </div>

    </div>

  </div>

</div>

      {/* SUMMARY */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="bg-white rounded-xl shadow-sm p-6">

          <h3 className="font-semibold text-gray-700 mb-3">
            Top Performing Program
          </h3>

          <p className="text-gray-500 text-sm">
            Full Stack Development program achieved the highest completion rate
            this month with over 430 students successfully finishing the course.
          </p>

        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">

          <h3 className="font-semibold text-gray-700 mb-3">
            Improvement Area
          </h3>

          <p className="text-gray-500 text-sm">
            Session attendance in Data Science programs is slightly lower
            compared to other courses. Consider scheduling additional
            interactive sessions.
          </p>

        </div>

      </div>

    </div>
  );
}