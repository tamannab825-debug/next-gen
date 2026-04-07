"use client";

import { useState } from "react";

const stats = [
  { title: "Total Students", value: "1,284" },
  { title: "Active Students", value: "1,050" },
  { title: "Completed Programs", value: "430" },
  { title: "New This Month", value: "92" },
];

const studentsData = [
  {
    name: "Ravi Kumar",
    email: "ravi@gmail.com",
    course: "Full Stack Development",
    progress: "80%",
    status: "Active",
  },
  {
    name: "Ananya Sharma",
    email: "ananya@gmail.com",
    course: "UI/UX Design",
    progress: "65%",
    status: "Active",
  },
  {
    name: "Rahul Verma",
    email: "rahul@gmail.com",
    course: "React Bootcamp",
    progress: "90%",
    status: "Completed",
  },
  {
    name: "Priya Singh",
    email: "priya@gmail.com",
    course: "Data Science",
    progress: "40%",
    status: "Active",
  },
];

export default function InstituteStudents() {
  const [search, setSearch] = useState("");

  const filteredStudents = studentsData.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 md:p-6 bg-[#f5f6fa] min-h-screen space-y-4">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">

        <div>
          <h1 className="text-xl font-semibold text-gray-800">
            Students Management
          </h1>

          <p className="text-sm text-gray-500">
            Manage all students enrolled in institute programs
          </p>
        </div>

        <button className="bg-red-500 w-fit text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600 transition">
          + Add Student
        </button>

      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">

        {stats.map((item, i) => (
          <div key={i} className="bg-white rounded-xl text-center shadow-sm p-3">
            
            <h2 className="text-xl md:text-2xl font-semibold text-red-500 mt-2">
              {item.value}
            </h2>

            <p className="text-xs md:text-sm text-gray-500">
              {item.title}
            </p>

          </div>
        ))}

      </div>

      {/* SEARCH */}
      <div className="bg-white rounded-xl shadow-sm px-5 py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">

        <input
          type="text"
          placeholder="Search students..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border text-red-400 rounded-lg px-3 py-2 text-sm w-full sm:w-64 focus:border-3 focus:border-red-500 focus:ring-red-500 focus:outline-none transition"
        />

        <button className="text-sm text-red-500 hover:underline">
          Export List
        </button>

      </div>

      {/* STUDENTS TABLE */}
      <div className="bg-white rounded-xl shadow-sm p-4 md:p-6 overflow-x-auto">

        <table className="w-full text-sm min-w-162">

          <thead>
            <tr className="text-left text-gray-500 border-b">

              <th className="py-3">Student</th>
              <th>Email</th>
              <th>Course</th>
              <th>Progress</th>
              <th>Status</th>
              <th>Actions</th>

            </tr>
          </thead>

          <tbody>

            {filteredStudents.map((student, i) => (

              <tr key={i} className="border-b hover:bg-gray-50">

                <td className="py-3 flex items-center gap-3">

                  <img
                    src="/images/person.png"
                    className="w-9 h-9 rounded-full"
                  />

                  <span className="font-medium text-gray-700">
                    {student.name}
                  </span>

                </td>

                <td className="text-gray-500">{student.email}</td>

                <td className="text-gray-500">{student.course}</td>

                <td>

                  <div className="w-32 bg-gray-200 h-2 rounded-full">

                    <div
                      className="bg-red-500 h-2 rounded-full"
                      style={{ width: student.progress }}
                    ></div>

                  </div>

                </td>

                <td>

                  <span
                    className={`text-xs px-2 py-1 rounded-lg ${
                      student.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-blue-100 text-blue-600"
                    }`}
                  >
                    {student.status}
                  </span>

                </td>

                <td className="space-x-3">

                  <a href="/institute/student-profile">
                    <button className="text-red-500 text-xs hover:underline">
                    View
                  </button>
                  </a>

                  <button className="text-gray-500 text-xs hover:underline">
                    Edit
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}