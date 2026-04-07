"use client";

import { useState } from "react";

const mentees = [
  {
    id: 1,
    name: "John Carter",
    goal: "Become Frontend Developer",
    mentor: "Sarah Johnson",
    progress: 65,
    sessions: 8,
  },
  {
    id: 2,
    name: "Lisa Brown",
    goal: "Learn Backend Development",
    mentor: "Michael Lee",
    progress: 40,
    sessions: 5,
  },
  {
    id: 3,
    name: "David Wilson",
    goal: "UI/UX Career Transition",
    mentor: "Emma Wilson",
    progress: 80,
    sessions: 12,
  },
  {
    id: 4,
    name: "Sanyog Biswal",
    goal: "Fullstack Developer",
    mentor: "Emma Wilson",
    progress: 40,
    sessions: 4,
  },
  {
    id: 5,
    name: "Chetna Sharma",
    goal: "Data Analyst",
    mentor: "Sarah Johnson",
    progress: 70,
    sessions: 11,
  },
];

export default function MenteesPage() {
  const [search, setSearch] = useState("");

  const filteredMentees = mentees.filter((mentee) =>
    mentee.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8 bg-gray-50 min-h-screen">

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">
            Mentees Management
          </h1>
          <p className="text-gray-500 text-sm">
            Track mentee progress, mentors, and mentorship sessions
          </p>
        </div>

       <div className="flex gap-4 items-center">
        
      {/* Search */}
      <div className="">
        <input
          type="text"
          placeholder="Search mentees..."
          className="w-full md:w-80 px-4 py-2 bg-white border border-red-300 text-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
        <div>
             <button className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition">
          + Add Mentee
        </button>
        </div>
       </div>
      </div>


      {/* Mentee Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMentees.map((mentee) => (
          <div
            key={mentee.id}
            className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition"
          >
            {/* Name */}
            <h2 className="text-lg font-semibold text-gray-800">
              {mentee.name}
            </h2>

            {/* Goal */}
            <p className="text-sm text-gray-500 mt-1">
              🎯 {mentee.goal}
            </p>

            {/* Info */}
            <div className="mt-4 space-y-2 text-sm text-gray-600">
              <p>👨‍🏫 Mentor: {mentee.mentor}</p>
              <p>📊 Progress: {mentee.progress}%</p>
              <p>📅 Sessions: {mentee.sessions}</p>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 h-2 rounded mt-3">
              <div
                className="bg-red-400 h-2 rounded"
                style={{ width: `${mentee.progress}%` }}
              />
            </div>

            {/* Actions */}
            <div className="flex gap-2 mt-6">
              <button className="flex-1 border border-red-300 text-red-500 rounded-lg py-1 text-sm hover:bg-red-100">
                Assign Mentor
              </button>

              <a href="/mentorship/learning-progress">
                <button className="flex-1  border border-gray-400 text-gray-500 rounded-lg py-1 px-5 text-sm hover:bg-gray-100">
                View Progress
              </button>
              </a>
            </div>

            <button className="w-full mt-3 border bg-red-400 text-white rounded-lg py-1 text-sm hover:bg-red-500">
              Schedule Session
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}