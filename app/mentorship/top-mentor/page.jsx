"use client";
import { useState } from "react";

const mentors = [
  {
    name: "Sarah Johnson",
    field: "Frontend",
    rating: 4.9,
    sessions: 120,
    mentees: 45,
  },
  {
    name: "Michael Lee",
    field: "Backend",
    rating: 4.8,
    sessions: 110,
    mentees: 38,
  },
  {
    name: "Emma Wilson",
    field: "Career Coach",
    rating: 4.7,
    sessions: 95,
    mentees: 50,
  },
];

export default function TopMentorsPage() {
     const [search, setSearch] = useState("");
  return (
    <div className="p-6 bg-[#f5f6fa] text-gray-600 min-h-screen space-y-4">

      {/* HEADER */}
      <div className="flex justify-between items-center ">
       <div>
         <h1 className="text-xl font-semibold text-gray-800">
          Top Mentors
        </h1>
        <p className="text-sm text-gray-500">
          Track mentor performance and engagement
        </p>

       </div>
         <div className="">
          <input
            type="text"
            placeholder="Search top mentor..."
            className="w-full md:w-96 px-4 py-2 border bg-white text-red-500 border-red-600 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* STATS */}
      <div className="grid md:grid-cols-4 gap-6">
        {[
          { title: "Total Mentors", value: "42" },
          { title: "Top Rated", value: "4.9 ⭐" },
          { title: "Sessions", value: "1,284" },
          { title: "Active", value: "30" },
        ].map((s, i) => (
          <div key={i} className="bg-white p-4 rounded-xl shadow-sm text-center">

            <h2 className="text-2xl font-semibold text-red-500">
              {s.value}
            </h2>
            <p className="text-sm text-gray-500">{s.title}</p>
            
          </div>
        ))}
      </div>

      {/* MENTOR CARDS */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mentors.map((m, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <h3 className="font-semibold text-gray-800">
              {m.name}
            </h3>

            <p className="text-xs text-gray-500 mb-3">
              {m.field}
            </p>

            <div className="flex justify-between text-sm mb-3">
              <span>Sessions</span>
              <span className="text-red-500">{m.sessions}</span>
            </div>

            <div className="flex justify-between text-sm mb-3">
              <span>Mentees</span>
              <span className="text-red-500">{m.mentees}</span>
            </div>

            <div className="flex justify-between text-sm">
              <span>Rating</span>
              <span className="text-red-500">⭐ {m.rating}</span>
            </div>

            <a href="/mentorship/profile">
                <button className="mt-4 w-full border py-2 rounded hover:bg-gray-100">
              View Profile
            </button>
            </a>
          </div>
        ))}
      </div>

      {/* INSIGHTS */}
      <div className="bg-white p-6 rounded-xl  shadow-sm">
        <h3 className="font-semibold text-gray-700 mb-4">
          Mentor Insights
        </h3>

        <ul className="text-sm text-gray-600 space-y-2">
          <li>Frontend mentors have highest ratings</li>
          <li>Average rating increased this month</li>
          <li>Top mentors handle 60% of sessions</li>
        </ul>
      </div>

    </div>
  );
}