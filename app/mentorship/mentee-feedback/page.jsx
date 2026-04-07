"use client";

import { useState } from "react";

const feedback = [
  {
    mentee: "David Smith",
    category: "Learning Experience",
    message: "Mentorship helped me improve my coding confidence.",
    date: "2 hours ago",
  },
  {
    mentee: "Emma Wilson",
    category: "Session Quality",
    message: "The sessions are very interactive and practical.",
    date: "5 hours ago",
  },
  {
    mentee: "Ravi Kumar",
    category: "Mentor Support",
    message: "Mentor is very supportive and explains concepts clearly.",
    date: "1 day ago",
  },
  {
    mentee: "Ananya Sharma",
    category: "Course Content",
    message: "Course material is well structured and easy to follow.",
    date: "2 days ago",
  },
];

export default function MenteeFeedbackPage() {
  const [search, setSearch] = useState("");

  const filtered = feedback.filter((f) =>
    f.message.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-[#f5f6fa] min-h-screen space-y-4">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">
            Mentee Feedback
          </h1>
          <p className="text-sm text-gray-500">
            Track feedback shared by mentees
          </p>
        </div>

        <input
          type="text"
          placeholder="Search feedback..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border text-red-400 px-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 bg-white focus:ring-red-400"
        />
      </div>

      {/* STATS */}
      <div className="grid md:grid-cols-4 gap-6">
        {[
          { title: "Total Feedback", value: "842" },
          { title: "Positive", value: "92%" },
          { title: "Neutral", value: "6%" },
          { title: "Negative", value: "2%" },
        ].map((s, i) => (
          <div key={i} className="bg-white p-4 rounded-xl shadow-sm text-center">

            <h2 className="text-xl font-semibold text-red-500 ">
              {s.value}
            </h2>
            <p className="text-sm text-gray-500">{s.title}</p>
            
          </div>
        ))}
      </div>

      {/* MAIN GRID */}
      <div className="grid lg:grid-cols-3 gap-6">

        {/* FEEDBACK LIST */}
      <div className="lg:col-span-2 space-y-5">
        {feedback.map((f, i) => (
          <div
            key={i}
            className="bg-white rounded-xl p-6 shadow-sm border"
          >
            {/* CATEGORY */}
            <div className="flex justify-between mb-2">
              <span className="text-xs bg-red-100 text-red-500 px-2 py-1 rounded">
                {f.category}
              </span>

              <span className="text-xs text-gray-400">
                {f.date}
              </span>
            </div>

            {/* MESSAGE */}
            <p className="text-sm text-gray-600 mb-3">
              {f.message}
            </p>

            {/* USER */}
            <p className="text-xs text-red-400">
              — {f.mentee}
            </p>

          </div>
        ))}
      </div>

        {/* SIDEBAR */}
        <div className="space-y-6">

          {/* SENTIMENT */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-gray-700 mb-4">
              Sentiment Overview
            </h3>

            <div className="space-y-3 text-gray-500 text-sm">
              <p>😊 Positive Feedback Increasing</p>
              <p>😐 Neutral Feedback Stable</p>
              <p>⚠️ Negative Feedback Minimal</p>
            </div>
          </div>

          {/* HIGHLIGHTS */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-gray-700 mb-4">
              Highlights
            </h3>

            <ul className="text-sm text-gray-600 space-y-2">
              <li>Interactive sessions appreciated</li>
              <li>Hands-on learning preferred</li>
              <li>Mentors highly supportive</li>
            </ul>
          </div>

        </div>

      </div>

    </div>
  );
}