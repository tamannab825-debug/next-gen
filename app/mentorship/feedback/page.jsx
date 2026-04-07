"use client";

import { useState } from "react";

const stats = [
  { title: "Total Feedback", value: "842" },
  { title: "Avg Rating", value: "4.7 ⭐" },
  { title: "Positive Reviews", value: "92%" },
  { title: "Active Mentors", value: "42" },
];

const feedbackData = [
  {
    mentor: "Sarah Johnson",
    message: "Great improvement in React performance optimization.",
    rating: 5,
    time: "2 hours ago",
  },
  {
    mentor: "Michael Lee",
    message: "Work on backend architecture and API security.",
    rating: 4,
    time: "5 hours ago",
  },
  {
    mentor: "Emma Wilson",
    message: "Excellent UI skills but needs improvement in testing.",
    rating: 4,
    time: "1 day ago",
  },
];

const mentors = [
  { name: "Sarah Johnson", rating: 4.9, reviews: 120 },
  { name: "Michael Lee", rating: 4.8, reviews: 98 },
  { name: "Emma Wilson", rating: 4.7, reviews: 85 },
];

export default function FeedbackPage() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? feedbackData
      : feedbackData.filter((f) => f.rating >= 4);

  return (
    <div className="p-6 bg-[#f5f6fa] min-h-screen space-y-4">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">
            Mentor Feedback & Reviews
          </h1>
          <p className="text-sm text-gray-500">
            Analyze mentor feedback, ratings and mentee satisfaction
          </p> 
        </div>

       <div>
         <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600">
          + Add Feedback
        </button>
       </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((item, i) => (
          <div key={i} className="bg-white p-4 text-center rounded-xl shadow-sm">

             <h2 className="text-2xl font-semibold text-red-500">
              {item.value}
            </h2>
            <p className="text-sm text-gray-500">{item.title}</p>
           
          </div>
        ))}
      </div>

      {/* FEEDBACK LIST + TOP MENTORS */}
      <div className="grid lg:grid-cols-3 gap-6">

        {/* FEEDBACK LIST */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm">

          <div className="flex justify-between mb-5">
            <h3 className="text-lg font-semibold text-gray-700">
              Feedback List
            </h3>

            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border text-gray-400 px-2 py-1 rounded text-sm"
            >
              <option>All</option>
              <option>Positive (4+)</option>
            </select>
          </div>

          <div className="space-y-4">
            {filtered.map((f, i) => (
              <div
                key={i}
                className="border rounded-xl p-4 bg-gray-50 hover:bg-gray-100 transition"
              >
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm font-semibold text-gray-800">
                    {f.mentor}
                  </p>

                  <span className="text-yellow-500 text-sm">
                    {"⭐".repeat(f.rating)}
                  </span>
                </div>

                <p className="text-sm text-gray-600 mb-2">
                  {f.message}
                </p>

                <p className="text-xs text-red-400">{f.time}</p>
              </div>
            ))}
          </div>
        </div>

        {/* TOP MENTORS */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Top Mentors
          </h3>

          <div className="space-y-4">
            {mentors.map((m, i) => (
              <div
                key={i}
                className="flex justify-between items-center border rounded-lg px-4 py-3"
              >
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    {m.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {m.reviews} reviews
                  </p>
                </div>

                <span className="text-red-500 text-sm">
                  ⭐ {m.rating}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* BOTTOM SECTION */}
      <div className="grid lg:grid-cols-2 gap-6">

        {/* FEEDBACK TREND */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Feedback Trend
          </h3>

          <img
            src="/images/3.jpg.jpeg"
            className="w-full h-40 rounded-lg"
          />
        </div>

        {/* INSIGHTS */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Insights
          </h3>

          <ul className="text-sm text-gray-600 space-y-2">
            <li>Most mentors maintain rating above 4.5</li>
            <li>Frontend mentors receive highest feedback</li>
            <li>Backend feedback focuses on architecture improvement</li>
            <li>Positive reviews increased this month</li>
          </ul>
        </div>

      </div>

    </div>
  );
}