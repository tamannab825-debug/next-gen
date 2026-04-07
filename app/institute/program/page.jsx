"use client";

import { useState } from "react";

const programs = [
  {
    title: "Full Stack Development",
    mentor: "Rohit Sharma",
    students: 120,
    duration: "6 Months",
    status: "Active",
  },
  {
    title: "UI/UX Design Bootcamp",
    mentor: "Neha Kapoor",
    students: 85,
    duration: "4 Months",
    status: "Ongoing",
  },
  {
    title: "React Mastery",
    mentor: "Amit Verma",
    students: 60,
    duration: "3 Months",
    status: "Completed",
  },
  {
    title: "Data Analyst",
    mentor: "Chetna Sharma",
    students: 25,
    duration: "4 Months",
    status: "Active",
  },
  {
    title: "Data Science Program",
    mentor: "Priya Nair",
    students: 95,
    duration: "6 Months",
    status: "Active",
  },
  {
    title: "Full Stack Developer",
    mentor: "Sanyog Biswal",
    students: 40,
    duration: "6 Months",
    status: "Ongoing",
  },
  {
    title: "Backend Developer",
    mentor: "Prashant Sharma",
    students: 35,
    duration: "4 Months",
    status: "Completed",
  },
];

export default function InstitutePrograms() {
  const [search, setSearch] = useState("");

  const filtered = programs.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  const active = filtered.filter((p) => p.status === "Active");
  const ongoing = filtered.filter((p) => p.status === "Ongoing");
  const completed = filtered.filter((p) => p.status === "Completed");

  const Column = ({ title, data }) => (
    <div className="bg-white rounded-xl p-4 ">

      <h2 className="font-semibold text-gray-700 mb-4">
        {title} ({data.length})
      </h2>

      <div className="space-y-4">

        {data.map((program, i) => (
          <div
            key={i}
            className="bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-md transition"
          >

            <h3 className="font-medium text-gray-800">
              {program.title}
            </h3>

            <p className="text-xs text-gray-500 mt-1">
              <span className="text-red-400">Mentor:</span> {program.mentor}
            </p>

            <p className="text-xs text-gray-500">
              <span className="text-red-400">Students:</span> {program.students}
            </p>

            <div className="flex justify-between mt-3 text-xs text-gray-500">

              <span>{program.duration}</span>

             <a href="/institute/program-detail">
               <button className="text-red-500 hover:underline">
                View
              </button>
             </a>

            </div>

          </div>
        ))}

      </div>

    </div>
  );

  return (
    <div className="p-6 bg-[#f5f6fa] min-h-screen">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row gap-4 justify-between mb-6">

        <div>
          <h1 className="text-xl font-semibold text-gray-800">
            Programs Board
          </h1>

          <p className="text-sm text-gray-500">
            Track all institute programs by status
          </p>
        </div>

        <div className="flex gap-4 md:items-center">

            
         <input
          type="text"
          placeholder="Search program..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border bg-white text-red-400 rounded-lg px-3 py-2 text-sm w-full sm:w-64 focus:border-red-500 focus:border-3 focus:ring-red-500 focus:outline-none"
        />

            <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600">
          + New Program
        </button>

        </div>

      </div>


      {/* BOARD */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        <Column title="Active Programs" data={active} />
        <Column title="Ongoing Programs" data={ongoing} />
        <Column title="Completed Programs" data={completed} />

      </div>

    </div>
  );
}