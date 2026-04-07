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
  },
  {
    id: 2,
    name: "Backend Developer Mentorship",
    duration: "14 Weeks",
    mentors: 3,
    mentees: 21,
    completion: 65,
  },
  {
    id: 3,
    name: "Career Guidance Program",
    duration: "8 Weeks",
    mentors: 5,
    mentees: 40,
    completion: 80,
  },
];

export default function ProgramsPage() {
  const [search, setSearch] = useState("");

  const filteredPrograms = programs.filter((program) =>
    program.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gray-50 text-gray-500 min-h-screen">

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center px-8 py-4">
        <div>
            <h1 className="text-xl text-gray-800 font-semibold">Mentorship Programs</h1>
        <p className="text-sm text-gray-500 mt-1">
          Manage mentorship programs, mentors and enrolled mentees
        </p>
        </div>

        <div className="flex gap-4">

            
        {/* Search */}
        <div className="">
          <input
            type="text"
            placeholder="Search mentorship programs..."
            className="w-full md:w-96 px-4 py-2 border bg-white text-red-500 border-red-600 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

            <button className=" bg-red-500 text-white px-4 py-2 border rounded-lg text-sm font-medium hover:bg-gray-100">
          + Create New Program
        </button>

        </div>
      </div>

      <div className="px-8 py-4">

        {/* Analytics */}
        <div className="grid md:grid-cols-4 gap-6 mb-6">

          <div className="bg-white p-5 rounded-xl shadow-sm border border-red-100 text-center">
            <p className="text-sm text-gray-600-500 font-semibold">Total Program</p>
            <h2 className="text-2xl text-red-500 font-semibold">12</h2>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-sm border border-red-100 text-center">
            <p className="text-sm text-gray-600">Active Programs</p>
            <h2 className="text-2xl text-red-500 font-semibold">7</h2>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-sm border border-red-100 text-center">
            <p className="text-sm text-gray-600">Total Mentees</p>
            <h2 className="text-2xl text-red-500 font-semibold">184</h2>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-sm border border-red-100 text-center">
            <p className="text-sm text-gray-600">Avg Completion</p>
            <h2 className="text-2xl text-red-500 font-semibold">74%</h2>
          </div>

        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Programs Table */}
        <div className="bg-white rounded-xl overflow-scroll shadow-sm ">

          <div className="p-5 border-b border-gray-300">
           <div className="flex justify-between">
             <h2 className="font-semibold text-gray-700">Programs Overview</h2>

            <a href="/mentorship/program-overview" >
                <button className="text-sm text-red-500 hover:underline">
                View All
              </button>
              </a>
           </div>
          </div>

          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="p-3 text-left">Program</th>
                <th className="p-3 text-left">Duration</th>
                <th className="p-3 text-left">Mentors</th>
                <th className="p-3 text-left">Mentees</th>
                <th className="p-3 text-left">Completion</th>
              </tr>
            </thead>

            <tbody>
              {filteredPrograms.map((program) => (
                <tr key={program.id} className="border-t border-gray-300  hover:bg-gray-50">
                  <td className="p-3 font-medium text-gray-800">{program.name}</td>
                  <td className="p-3 ">{program.duration}</td>
                  <td className="p-3 text-red-500">{program.mentors}</td>
                  <td className="p-3">{program.mentees}</td>
                  <td className="p-3 text-red-500">{program.completion}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Program Performance */}
        <div className="bg-white p-6 rounded-xl shadow-sm">

          <h2 className="font-semibold text-gray-700 mb-5">Program Performance</h2>

          {programs.map((program) => (
            <div key={program.id} className="mb-5">

              <div className="flex justify-between text-sm mb-2">
                <span>{program.name}</span>
                <span>{program.completion}%</span>
              </div>

              <div className="w-full bg-gray-200 h-2 rounded">
                <div
                  className="bg-red-500 h-2 rounded"
                  style={{ width: `${program.completion}%` }}
                />
              </div>

            </div>
          ))}

        </div>
        </div>

        {/* Bottom Sections */}
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Top Mentors */}
          <div className="bg-white p-6 rounded-xl  shadow-sm">

           <div className="flex justify-between  mb-4">
             <h2 className="font-semibold text-gray-700">Top Mentors</h2>

            <a href="/mentorship/top-mentor" >
                <button className="text-sm text-red-500 hover:underline">
                View All
              </button>
              </a>
           </div>

            <div className="space-y-3 text-sm text-gray-600">
              <p>Sarah Johnson — <span className="text-red-500">Frontend</span></p>
              <p>Michael Lee — <span className="text-red-500">Backend</span></p>
              <p>Emma Wilson — <span className="text-red-500">Career Coach</span></p>
            </div>

          </div>

          {/* Recent Enrollments */}
          <div className="bg-white p-6 rounded-xl  shadow-sm">

            <h2 className="font-semibold text-gray-700 mb-4">Recent Enrollments</h2>

            <div className="space-y-3 text-sm text-gray-600">
              <p>John Carter joined Frontend Mentorship</p>
              <p>Lisa Brown joined Backend Mentorship</p>
              <p>David Wilson joined Career Program</p>
            </div>

          </div>

          {/* Quick Actions */}
          <div className="bg-white p-6 rounded-xl  shadow-sm">

            <h2 className="font-semibold text-gray-700 mb-4">Quick Actions</h2>

            <div className="flex flex-col gap-3">
              <button className="border py-2 text-red-500 rounded hover:text-white hover:bg-red-500">
                Assign Mentor
              </button>

              <button className="border py-2 text-red-500 rounded hover:text-white hover:bg-red-500">
                Export Program Data
              </button>

              <button className="border py-2 text-red-500 rounded hover:text-white hover:bg-red-500">
                Generate Reports
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}