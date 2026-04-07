"use client";

import { useState } from "react";

const todaySessions = [
  {
    mentor: "Sarah Johnson",
    mentee: "John Carter",
    topic: "React Fundamentals",
    time: "4:00 PM",
    status: "Upcoming",
  },
  {
    mentor: "Michael Lee",
    mentee: "Lisa Brown",
    topic: "Backend API Design",
    time: "2:00 PM",
    status: "Ongoing",
  },
  {
    mentor: "Emma Wilson",
    mentee: "David Smith",
    topic: "Career Guidance",
    time: "11:00 AM",
    status: "Completed",
  },
];

export default function TodaySessionsPage() {
  const [search, setSearch] = useState("");

  const filtered = todaySessions.filter((s) =>
    s.topic.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#f5f6fa] p-6 space-y-4">

      {/* ================= HEADER ================= */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">
            Today’s Sessions
          </h1>
          <p className="text-sm text-gray-500">
            Manage all sessions scheduled for today
          </p>
        </div>

        <input
          type="text"
          placeholder="Search session..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-4 py-2 text-red-400 bg-white rounded-lg text-sm focus:ring-2 focus:ring-red-400 outline-none"
        />
      </div>

      {/* ================= STATS ================= */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Total Sessions", value: "12" },
          { title: "Completed", value: "5" },
          { title: "Ongoing", value: "2" },
          { title: "Upcoming", value: "5" },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl p-4 shadow-sm text-center"
          >
            <p className="text-2xl font-semibold text-red-500">
              {item.value}
            </p>
            <p className="text-sm text-gray-500">{item.title}</p>
            
          </div>
        ))}
      </div>

      {/* ================= MAIN GRID ================= */}
      <div className="grid lg:grid-cols-3 gap-6">

        {/* LEFT - SESSION CARDS */}
        <div className="lg:col-span-2 space-y-6">

          {/* SESSION LIST */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="font-semibold text-gray-800 mb-5">
              All Sessions
            </h2>

            <div className="space-y-4">
              {filtered.map((s, i) => (
                <div
                  key={i}
                  className="border rounded-xl p-4 hover:shadow-md transition"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium text-gray-800">
                      {s.topic}
                    </h3>

                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        s.status === "Completed"
                          ? "bg-green-100 text-green-600"
                          : s.status === "Ongoing"
                          ? "bg-blue-100 text-blue-600"
                          : "bg-yellow-100 text-yellow-600"
                      }`}
                    >
                      {s.status}
                    </span>
                  </div>

                  <p className="text-sm text-gray-500">
                    <span className="text-red-400">Mentor:</span> {s.mentor}
                  </p>
                  <p className="text-sm text-gray-500">
                    <span className="text-red-400">Mentee:</span> {s.mentee}
                  </p>

                  <div className="flex justify-between items-center mt-4">
                    <span className="text-sm text-red-500 font-medium">
                      {s.time}
                    </span>

                    <div className="flex gap-3 text-sm">
                      <button className="text-green-500 hover:underline">
                        Join
                      </button>
                      <button className="text-gray-500 hover:underline">
                        Reschedule
                      </button>
                      <button className="text-red-500 hover:underline">
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* TIMELINE VIEW */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="font-semibold text-gray-800 mb-5">
              Session Timeline
            </h2>

            <div className="space-y-4">
              {todaySessions.map((s, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full mt-2"></div>

                  <div>
                    <p className="text-sm text-gray-700">
                      {s.time} — {s.topic}
                    </p>
                    <p className="text-xs text-gray-500">
                      {s.mentor} with {s.mentee}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT - SIDEBAR */}
        <div className="space-y-6">

          {/* LIVE SESSION */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="font-semibold text-gray-800 mb-4">
              Live Session
            </h2>

            <p className="text-sm text-gray-600">
              Backend API Design
            </p>

            <p className="text-xs text-gray-500 mt-1">
              Michael Lee with Lisa Brown
            </p>

            <button className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600">
              Join Now
            </button>
          </div>

          {/* MENTOR LOAD */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="font-semibold text-gray-800 mb-4">
              Mentor Load
            </h2>

            <div className="space-y-3 text-gray-500 text-sm">
              <div className="flex justify-between">
                <span>Sarah Johnson</span>
                <span className="text-red-500">3 Sessions</span>
              </div>

              <div className="flex justify-between">
                <span>Michael Lee</span>
                <span className="text-red-500">2 Sessions</span>
              </div>

              <div className="flex justify-between">
                <span>Emma Wilson</span>
                <span className="text-red-500">1 Session</span>
              </div>
            </div>
          </div>

          {/* QUICK NOTES */}
          <div className="bg-white rounded-xl p-6 text-gray-500 shadow-sm">
            <h2 className="font-semibold text-gray-800 mb-4">
              Quick Notes
            </h2>

            <textarea
              placeholder="Write notes for today's sessions..."
              className="w-full border rounded-lg p-3 text-sm focus:ring-2 focus:ring-red-400 outline-none"
              rows="4"
            />
          </div>

        </div>

      </div>

    </div>
  );
}