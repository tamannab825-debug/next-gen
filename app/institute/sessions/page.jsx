"use client";

import { useState } from "react";

const sessions = [
  {
    title: "React Fundamentals",
    mentor: "Amit Verma",
    program: "React Bootcamp",
    date: "12 March 2026",
    time: "10:00 AM",
    status: "Upcoming",
  },
  {
    title: "UI Research Methods",
    mentor: "Neha Kapoor",
    program: "UI/UX Design",
    date: "11 March 2026",
    time: "02:00 PM",
    status: "Completed",
  },
  {
    title: "Node.js Backend Basics",
    mentor: "Rohit Sharma",
    program: "Full Stack Development",
    date: "13 March 2026",
    time: "12:00 PM",
    status: "Upcoming",
  },
  {
    title: "Data Visualization",
    mentor: "Priya Nair",
    program: "Data Science",
    date: "10 March 2026",
    time: "04:00 PM",
    status: "Completed",
  },
];

export default function InstituteSessions() {
  const [search, setSearch] = useState("");

  const filteredSessions = sessions.filter((session) =>
    session.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 md:p-6 bg-[#f5f6fa] min-h-screen space-y-4">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">

        <div>
          <h1 className="text-xl font-semibold text-gray-800">
            Sessions Schedule
          </h1>

          <p className="text-sm text-gray-500">
            Manage and track all institute sessions
          </p>
        </div>

        <div className="flex gap-4">

             <input
          type="text"
          placeholder="Search sessions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border bg-white text-red-400 rounded-lg px-3 py-2 text-sm w-full sm:w-64 focus:border-3 focus:border-red-500 focus:ring-red-500 focus:outline-none transition"
        />

            <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600 transition w-fit">
          + Create Session
        </button>
        </div>

      </div>

      {/* SESSION LIST */}
      <div className="space-y-4">

        {filteredSessions.map((session, i) => (

          <div
            key={i}
            className="bg-white rounded-xl shadow-sm p-5 hover:shadow-md transition flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >

            {/* LEFT SESSION INFO */}
            <div>

              <h3 className="font-semibold text-gray-800">
                {session.title}
              </h3>

              <p className="text-sm text-gray-500 mt-1">
               <span className="text-red-400"> Mentor:</span> {session.mentor}
              </p>

              <p className="text-sm text-gray-500">
               <span className="text-red-400"> Program:</span> {session.program}
              </p>

            </div>

            {/* DATE */}
            <div className="text-sm text-gray-600">

              <p className="font-medium">{session.date}</p>
              <p className="text-red-500">{session.time}</p>

            </div>

            {/* STATUS */}
            <div>

              <span
                className={`text-xs px-3 py-1 rounded-lg ${
                  session.status === "Upcoming"
                    ? "bg-yellow-100 text-yellow-600"
                    : "bg-green-100 text-green-600"
                }`}
              >
                {session.status}
              </span>

            </div>

            {/* ACTIONS */}
            <div className="flex gap-4 text-sm">

              <a href="/institute/program-detail">
                <button className="text-red-500 hover:underline">
                View
              </button>
              </a>

              <button className="text-gray-500 hover:underline">
                Edit
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}