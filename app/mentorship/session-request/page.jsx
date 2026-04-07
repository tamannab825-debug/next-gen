"use client";

import { useState } from "react";

const stats = [
  { title: "Total Requests", value: "324" },
  { title: "Pending Review", value: "48" },
  { title: "Approved", value: "210" },
  { title: "Rejected", value: "66" },
];

const requests = [
  {
    id: "REQ-1023",
    mentee: "John Carter",
    topic: "React Performance",
    date: "12 Jun 2026",
    mentor: "Unassigned",
    status: "Pending",
  },
  {
    id: "REQ-1024",
    mentee: "Lisa Brown",
    topic: "Backend Architecture",
    date: "10 Jun 2026",
    mentor: "Sarah Johnson",
    status: "Approved",
  },
  {
    id: "REQ-1025",
    mentee: "David Smith",
    topic: "Career Guidance",
    date: "8 Jun 2026",
    mentor: "Michael Lee",
    status: "Rejected",
  },
];

export default function SessionRequestsPage() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? requests
      : requests.filter((r) => r.status === filter);

  return (
    <div className="min-h-screen bg-gray-100 p-6 text-gray-500 space-y-5">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">
            Mentorship Session Requests
          </h1>
          <p className="text-gray-500 text-sm">
            Review, approve, and assign mentors for mentee session requests
          </p>
        </div>

        <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
          Export Requests
        </button>
      </div>

      {/* STATS */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <div
            key={i}
            className="bg-white border border-red-300 text-center rounded-xl p-5 shadow-sm hover:shadow-md transition"
          >
              <p className="text-2xl font-semibold text-red-500 mt-1">
              {s.value}
            </p>
            <p className="text-gray-600 text-sm">{s.title}</p>
          
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-4 gap-6">

        {/* FILTER SIDEBAR */}
        <div className="bg-white  rounded-xl p-5 h-fit">
          <h3 className="font-semibold text-gray-700 mb-4">
            Filter Requests
          </h3>

          {["All", "Pending", "Approved", "Rejected"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`w-full text-left px-3 py-2 mb-2 rounded-lg text-sm transition
              ${
                filter === f
                  ? "bg-red-500 text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* REQUEST TABLE */}
        <div className="lg:col-span-3 bg-white  rounded-xl p-5 shadow-sm">

          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-gray-700">
              Session Requests
            </h3>

            <input
              placeholder="Search requests..."
              className="border px-3 py-1 rounded-lg text-sm"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">

              <thead className="text-gray-700 border-b border-gray-300">
                <tr>
                  <th className="text-left py-2">Request ID</th>
                  <th className="text-left">Mentee</th>
                  <th className="text-left">Topic</th>
                  <th className="text-left">Date</th>
                  <th className="text-left">Mentor</th>
                  <th className="text-left">Status</th>
                  <th className="text-left">Actions</th>
                </tr>
              </thead>

              <tbody>
                {filtered.map((req) => (
                  <tr key={req.id} className="border-b border-gray-300 hover:bg-gray-50">

                    <td className="py-3 text-red-400">{req.id}</td>
                    <td>{req.mentee}</td>
                    <td>{req.topic}</td>
                    <td>{req.date}</td>

                    <td>
                      <select className="border rounded px-2 py-1 text-xs">
                        <option>{req.mentor}</option>
                        <option>Sarah Johnson</option>
                        <option>Michael Lee</option>
                        <option>Emma Wilson</option>
                      </select>
                    </td>

                    <td>
                      <span
                        className={`px-2 py-1 text-xs rounded 
                        ${
                          req.status === "Pending"
                            ? "bg-yellow-100 text-yellow-600"
                            : req.status === "Approved"
                            ? "bg-green-100 text-green-600"
                            : "bg-gray-200 text-gray-600"
                        }`}
                      >
                        {req.status}
                      </span>
                    </td>

                    <td className="flex gap-2 py-3">

                      <button className="text-xs bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
                        Approve
                      </button>

                      <button className="text-xs bg-gray-300 px-3 py-1 rounded hover:bg-gray-400">
                        Reject
                      </button>

                    </td>

                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>
      </div>

      {/* LOWER SECTION */}
      <div className="grid lg:grid-cols-3 gap-6">

        {/* RECENT ACTIVITY */}
        <div className="bg-white rounded-xl p-5">
          <h3 className="font-semibold text-gray-700 mb-3">
            Recent Activity
          </h3>

          <ul className="space-y-2 text-sm text-gray-600">
            <li>John Carter requested React mentorship</li>
            <li>Lisa Brown request approved</li>
            <li>David Smith request rejected</li>
            <li>New request received from Alex</li>
          </ul>
        </div>

        {/* QUICK ACTIONS */}
        <div className="bg-white rounded-xl p-5">
          <h3 className="font-semibold text-gray-700 mb-3">
            Quick Actions
          </h3>

          <div className="flex flex-col gap-2 text-sm">
            <button className="bg-red-500 text-white py-2 rounded hover:bg-red-600">
              Assign Mentor
            </button>

            <button className="bg-gray-200 py-2 rounded hover:bg-gray-300">
              View All Requests
            </button>

            <button className="bg-gray-200 py-2 rounded hover:bg-gray-300">
              Export Data
            </button>
          </div>
        </div>

        {/* REQUEST INSIGHTS */}
        <div className="bg-white rounded-xl p-5">
          <h3 className="font-semibold text-gray-700 mb-3">
            Request Insights
          </h3>

          <div className="space-y-3 text-sm text-gray-600">
            <p>Most requested topic: React</p>
            <p>Average approval time: 2 days</p>
            <p>Active mentors available: 18</p>
            <p>Requests this week: 52</p>
          </div>
        </div>

      </div>

    </div>
  );
}