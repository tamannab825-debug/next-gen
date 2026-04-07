"use client";

import { useState } from "react";

const sessions = [
  {
    mentor: "Sarah Johnson",
    mentee: "Alex Kim",
    date: "Today",
    time: "3:00 PM",
    mode: "Online",
  },
  {
    mentor: "Michael Lee",
    mentee: "Ravi Kumar",
    date: "Tomorrow",
    time: "11:00 AM",
    mode: "Offline",
  },
  {
    mentor: "David Smith",
    mentee: "Priya Sharma",
    date: "Mar 25",
    time: "5:00 PM",
    mode: "Online",
  },
  {
    mentor: "Emma Watson",
    mentee: "Amit Verma",
    date: "Mar 26",
    time: "2:00 PM",
    mode: "Online",
  },
];

export default function SessionsPage() {
  const [search, setSearch] = useState("");

  const filtered = sessions.filter(
    (s) =>
      s.mentor.toLowerCase().includes(search.toLowerCase()) ||
      s.mentee.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-[#f5f6fa] min-h-screen space-y-6">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">
            Upcoming Sessions
          </h1>
          <p className="text-sm text-gray-500">
            Manage and track all scheduled mentorship sessions
          </p>
        </div>

        <div className="flex items-center gap-3">
         <div className="">
           <input
            type="text"
            placeholder="Search sessions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border text-red-400 bg-white px-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
          />

         </div>
         <div>
           <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600">
            + Schedule Session
          </button>
         </div>
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">

        {/* LEFT SIDE - SESSION LIST */}
        <div className="lg:col-span-2 space-y-4">

          {filtered.map((session, i) => (
            <div
              key={i}
              className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition"
            >
              {/* TOP */}
              <div className="flex justify-between items-center mb-3">

                <div>
                  <h3 className="text-md font-semibold text-gray-800">
                    {session.mentor}
                  </h3>
                  <p className="text-xs text-red-400">
                    with {session.mentee}
                  </p>
                </div>

                {/* STATUS BADGE */}
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    session.date === "Today"
                      ? "bg-green-100 text-green-600"
                      : session.date === "Tomorrow"
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {session.date}
                </span>
              </div>

              {/* DETAILS */}
              <div className="flex justify-between text-sm text-gray-500 mb-4">
                <p>🕒 {session.time}</p>
                <p>📍 {session.mode}</p>
              </div>

              {/* ACTIONS */}
              <div className="flex justify-between">
                <button className="text-sm text-red-500 hover:underline">
                  View Details
                </button>

                <div className="flex gap-4">
                  <button className="text-sm text-gray-500 hover:underline">
                    Reschedule
                  </button>

                  <button className="text-sm text-red-500 hover:underline">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          ))}

        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">

          {/* SUMMARY */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Session Summary
            </h3>

            <div className="space-y-4 text-sm">

              <div className="flex justify-between">
                <span className="text-gray-500">Today</span>
                <span className="font-semibold text-green-500">8</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Tomorrow</span>
                <span className="font-semibold text-yellow-500">5</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">This Week</span>
                <span className="font-semibold text-red-500">22</span>
              </div>

            </div>
          </div>

          {/* QUICK ACTIONS */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Quick Actions
            </h3>

            <button className="w-full bg-red-500 text-white py-2 rounded-lg text-sm mb-2 hover:bg-red-600">
              Schedule New Session
            </button>

            <button className="w-full border py-2 text-gray-500 hover:text-gray-700 rounded-lg text-sm hover:bg-gray-200">
              View Calendar
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}