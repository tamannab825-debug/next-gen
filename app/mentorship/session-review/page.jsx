"use client";

import { useState } from "react";

const reviews = [
  {
    mentee: "John Carter",
    mentor: "Sarah Johnson",
    course: "React Bootcamp",
    session: "Live Coding Session",
    review: "The session was extremely helpful and cleared my React doubts.",
    rating: 5,
    date: "12 March 2026",
  },
  {
    mentee: "Lisa Brown",
    mentor: "Michael Lee",
    course: "Backend Development",
    session: "API Design",
    review: "Great guidance on backend architecture and APIs.",
    rating: 4,
    date: "11 March 2026",
  },
  {
    mentee: "David Smith",
    mentor: "Emma Wilson",
    course: "Career Guidance",
    session: "Resume Review",
    review: "Very useful session for improving my resume and interview prep.",
    rating: 5,
    date: "10 March 2026",
  },
  {
    mentee: "Ananya Sharma",
    mentor: "Sarah Johnson",
    course: "UI/UX Design",
    session: "Figma Workshop",
    review: "Loved the hands-on design practice.",
    rating: 4,
    date: "9 March 2026",
  },
];

export default function SessionReviewsPage() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? reviews
      : reviews.filter((r) => r.rating >= 4);

  return (
    <div className="p-6 bg-[#f5f6fa] min-h-screen space-y-6">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">
            Session Reviews
          </h1>
          <p className="text-sm text-gray-500">
            Analyze reviews given by mentees after sessions
          </p>
        </div>

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border px-3 py-2 text-gray-400 bg-white rounded-lg text-sm"
        >
          <option>All</option>
          <option>Positive (4+)</option>
        </select>
      </div>

      {/* STATS */}
      <div className="grid md:grid-cols-4 gap-6">
        {[
          { title: "Total Reviews", value: "842" },
          { title: "Avg Rating", value: "4.6 ⭐" },
          { title: "5 Star Reviews", value: "520" },
          { title: "Low Ratings", value: "42" },
        ].map((s, i) => (
          <div key={i} className="bg-white p-4 text-center rounded-xl shadow-sm">

            <h2 className="text-xl text-red-500 font-semibold">
              {s.value}
            </h2>
            <p className="text-sm text-gray-500">{s.title}</p>
            
          </div>
        ))}
      </div>

      {/* MAIN GRID */}
      <div className="grid lg:grid-cols-3 gap-6">

        {/* REVIEWS LIST */}
      <div className="lg:col-span-2 space-y-5">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="bg-white rounded-xl p-6 shadow-sm border"
          >
            {/* TOP INFO */}
            <div className="flex justify-between items-center mb-3">
              <div>
                <p className="text-sm font-medium text-gray-700">
                  {r.mentee} → {r.mentor}
                </p>
                <p className="text-xs text-gray-500">
                  {r.course} • {r.session}
                </p>
              </div>

              <span className="text-red-500 text-sm">
                {"⭐".repeat(r.rating)}
              </span>
            </div>

            {/* REVIEW */}
            <p className="text-sm text-gray-600 mb-3">
              {r.review}
            </p>

            {/* FOOTER */}
            <div className="flex justify-between text-xs text-gray-400">
              <span>{r.date}</span>

              <button className="text-red-500 hover:underline">
                View Session Details
              </button>
            </div>

          </div>
        ))}
      </div>

        {/* SIDEBAR */}
        <div className="space-y-6">

          {/* RATING SUMMARY */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-gray-700 mb-4">
              Rating Summary
            </h3>

            {[5, 4, 3, 2, 1].map((star) => (
              <div key={star} className="flex items-center gap-3 mb-2">
                <span className="text-sm">{star} ⭐</span>

                <div className="flex-1 bg-gray-200 h-2 rounded">
                  <div className="bg-red-500 h-2 w-[70%] rounded" />
                </div>
              </div>
            ))}
          </div>

          {/* INSIGHTS */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-gray-700 mb-4">
              Insights
            </h3>

            <ul className="text-sm text-gray-600 space-y-2">
              <li>Most reviews are 4+ stars</li>
              <li>Frontend sessions rated highest</li>
              <li>Backend reviews mention API improvements</li>
            </ul>
          </div>

        </div>

      </div>

    </div>
  );
}