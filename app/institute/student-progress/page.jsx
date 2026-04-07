"use client";

import { useState } from "react";

const studentsData = [
  { name: "Ravi Kumar", course: "Web Development", progress: 80 },
  { name: "Ananya Sharma", course: "UI/UX Design", progress: 65 },
  { name: "Rahul Verma", course: "React Bootcamp", progress: 90 },
  { name: "Sneha Gupta", course: "Frontend Mastery", progress: 75 },
];

export default function StudentProgressPage() {
  const [search, setSearch] = useState("");

  const filteredStudents = studentsData.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-[#f5f6fa] min-h-screen space-y-4">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">
            Student Progress
          </h1>
          <p className="text-sm text-gray-500">
            Track student performance and course completion
          </p>
        </div>

        <input
          type="text"
          placeholder="Search student..."
          className="border px-4 py-2 text-red-400 bg-white rounded-lg text-sm w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-red-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-white p-5 rounded-xl text-center shadow-sm">

           <h2 className="text-2xl font-semibold  text-center text-red-500">1,284</h2>
          <p className="text-sm text-gray-500">Total Students</p>
         
        </div>

        <div className="bg-white p-5 rounded-xl  text-center shadow-sm">
          <h2 className="text-2xl font-semibold text-red-500">78%</h2>
          <p className="text-sm text-gray-500">Avg Progress</p>
          
        </div>

        <div className="bg-white p-5 rounded-xl  text-center shadow-sm">
           <h2 className="text-2xl font-semibold text-green-500">320</h2>
          <p className="text-sm text-gray-500">Completed</p>
         
        </div>

        <div className="bg-white p-5 rounded-xl  text-center shadow-sm">
          <h2 className="text-2xl font-semibold text-yellow-500">85</h2>
          <p className="text-sm text-gray-500">Low Progress</p>
          
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT - STUDENT LIST */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">

          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Student Progress List
          </h3>

          {filteredStudents.map((student, i) => (
            <div
              key={i}
              className="mb-2 px-4 py-2 rounded-lg hover:bg-gray-50 transition"
            >
              <div className="flex justify-between items-center mb-2">
                <div>
                  <p className="font-medium text-gray-800">
                    {student.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {student.course}
                  </p>
                </div>

                <span className="text-sm font-semibold text-red-500">
                  {student.progress}%
                </span>
              </div>

              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div
                  className="bg-red-500 h-2 rounded-full transition-all"
                  style={{ width: `${student.progress}%` }}
                ></div>
              </div>

              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>Progress</span>
                <span>
                  {student.progress > 80
                    ? "Excellent"
                    : student.progress > 60
                    ? "Good"
                    : "Needs Attention"}
                </span>
              </div>
            </div>
          ))}

        </div>

        {/* RIGHT - INSIGHTS */}
        <div className="space-y-4">

          {/* TOP PERFORMERS */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Top Performers
            </h3>

            {studentsData
              .filter((s) => s.progress > 85)
              .map((s, i) => (
                <div key={i} className="flex justify-between mb-2">
                  <span className="text-sm text-gray-700">{s.name}</span>
                  <span className="text-sm text-green-500">
                    {s.progress}%
                  </span>
                </div>
              ))}
          </div>

          {/* NEED ATTENTION */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Needs Attention
            </h3>

            {studentsData
              .filter((s) => s.progress < 70)
              .map((s, i) => (
                <div key={i} className="flex justify-between mb-2">
                  <span className="text-sm text-gray-700">{s.name}</span>
                  <span className="text-sm text-yellow-500">
                    {s.progress}%
                  </span>
                </div>
              ))}
          </div>

          {/* QUICK ACTION */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Actions
            </h3>

            <button className="w-full bg-red-500 text-white py-2 rounded-lg text-sm mb-2 hover:bg-red-600">
              Generate Report
            </button>

            <button className="w-full border py-2 rounded-lg text-gray-500 hover:text-gray-700 text-sm hover:bg-gray-200">
              Export Data
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}