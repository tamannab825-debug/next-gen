"use client";

import { useState } from "react";

const stats = [
  { title: "Total Mentors", value: "72" },
  { title: "Active Mentors", value: "64" },
  { title: "Programs Assigned", value: "18" },
  { title: "New This Month", value: "6" },
];

const mentorsData = [
  {
    name: "Sarah Johnson",
    field: "Frontend Development",
    experience: "5 Years",
    status: "Active",
  },
  {
    name: "Michael Lee",
    field: "Backend Development",
    experience: "7 Years",
    status: "Active",
  },
  {
    name: "David Smith",
    field: "UI/UX Design",
    experience: "6 Years",
    status: "Active",
  },
  {
    name: "Emma Watson",
    field: "Data Science",
    experience: "4 Years",
    status: "Pending",
  },
  {
    name: "Chetna Sharma",
    field: "Data Analyst",
    experience: "1 Year",
    status: "Pending",
  },
];

export default function InstituteMentors() {
  const [search, setSearch] = useState("");

  const filteredMentors = mentorsData.filter((mentor) =>
    mentor.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 md:p-6 bg-[#f5f6fa] min-h-screen space-y-4">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row  gap-4 justify-between">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">
            Mentors Management
          </h1>
          <p className="text-sm text-gray-500">
            Manage mentors and track their performance
          </p>
        </div>

       <div className="flex gap-4  md:items-center">

        
        <input
          type="text"
          placeholder="Search mentors..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border bg-white text-red-300 rounded-lg px-3 py-2 text-sm w-64 focus:border-2 focus:border-red-500 focus:ring-red-500 focus:outline-none"
        />


         <button className="bg-red-500 text-white px-5 py-2 rounded-lg text-sm hover:bg-red-600 transition shadow">
          + Add Mentor
        </button>

       </div>
      </div>


      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition"
          >

             <h2 className="text-2xl font-bold text-red-500 mt-1">
              {item.value}
            </h2>
            <p className="text-sm text-gray-500">{item.title}</p>
           
          </div>
        ))}
      </div>



      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">


        {/* LEFT - MENTORS */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">

          {filteredMentors.map((mentor, i) => (

            <div
              key={i}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition"
            >

              {/* TOP COVER */}
            

              {/* PROFILE */}
              <div className="p-3 ">

                <div className="flex items-center gap-3">

                  <img
                    src="/images/person.png"
                    className="w-14 h-14 rounded-full border-4 border-white"
                  />

                  <div>
                    <h3 className="text-sm font-semibold text-gray-800">
                      {mentor.name}
                    </h3>

                    <p className="text-xs text-gray-500">
                      {mentor.field}
                    </p>
                  </div>

                </div>

                {/* DETAILS */}
                <div className="mt-4 space-y-2 text-sm">

                  <p className="text-gray-500">
                    Experience:{" "}
                    <span className="font-medium text-gray-700">
                      {mentor.experience}
                    </span>
                  </p>

                  <p className="text-gray-500">Status: 
                    <span
                    className={`inline-block text-xs px-2 py-1 rounded-full ${
                      mentor.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-yellow-100 text-yellow-600"
                    }`}
                  >
                    {mentor.status}
                  </span>
                  </p>

                </div>

                {/* ACTIONS */}
                <div className="flex justify-between mt-5 text-xs">

                  <a href="/institute/mentor-profile">
                    <button className="text-red-500 hover:underline">
                    View Profile
                  </button>
                  </a>

                  <button className="text-gray-500 hover:underline">
                    Assign
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>


        {/* RIGHT SIDEBAR */}
        <div className="space-y-6">


          {/* TOP PERFORMERS */}
          <div className="bg-white rounded-xl p-5 shadow-sm">

            <h3 className="text-sm font-semibold text-gray-700 mb-4">
              Top Mentors
            </h3>

            <div className="space-y-3 text-sm">

              {mentorsData.slice(0, 3).map((m, i) => (
                <div key={i} className="flex justify-between">

                  <span className="text-gray-600">
                    {m.name}
                  </span>

                  <span className="text-green-500 text-xs">
                    Active
                  </span>

                </div>
              ))}

            </div>

          </div>


          {/* ACTIVITY */}
          <div className="bg-white rounded-xl p-5 shadow-sm">

            <h3 className="text-sm font-semibold text-gray-700 mb-4">
              Recent Activity
            </h3>

            <div className="space-y-3 text-xs text-gray-500">

              <p>Sarah assigned to React Bootcamp</p>
              <p>Michael completed Backend Program</p>
              <p>Emma joined Data Science track</p>

            </div>

          </div>


          {/* QUICK ACTION */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-5">

            <h3 className="text-sm font-semibold text-red-600 mb-2">
              Invite Mentor
            </h3>

            <p className="text-xs text-gray-500 mb-3">
              Add a new mentor to your institute
            </p>

            <button className="w-full bg-red-500 text-white py-2 rounded-lg text-sm hover:bg-red-600 transition">
              Send Invite
            </button>

          </div>

        </div>


      </div>

    </div>
  );
}